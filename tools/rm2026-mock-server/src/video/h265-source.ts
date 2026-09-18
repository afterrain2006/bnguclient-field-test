import fs from 'node:fs'

export interface AnnexBNalUnit {
  start: number
  end: number
  startCodeLength: 3 | 4
  type: number
  isVcl: boolean
  firstSliceSegment: boolean
}

export interface H265AccessUnit {
  data: Buffer
  keyframe: boolean
  nalTypes: number[]
}

function findStartCodes(data: Uint8Array): Array<{ index: number; length: 3 | 4 }> {
  const result: Array<{ index: number; length: 3 | 4 }> = []
  for (let index = 0; index <= data.length - 3; index += 1) {
    if (data[index] !== 0 || data[index + 1] !== 0) continue
    if (data[index + 2] === 1) {
      result.push({ index, length: 3 })
      index += 2
    } else if (index + 3 < data.length && data[index + 2] === 0 && data[index + 3] === 1) {
      result.push({ index, length: 4 })
      index += 3
    }
  }
  return result
}

export function parseAnnexBNalUnits(data: Uint8Array): AnnexBNalUnit[] {
  const starts = findStartCodes(data)
  return starts.flatMap((item, index) => {
    const header = item.index + item.length
    const end = starts[index + 1]?.index ?? data.length
    if (header + 1 >= end) return []
    const type = (data[header] >> 1) & 0x3f
    const isVcl = type <= 31
    return [{
      start: item.index,
      end,
      startCodeLength: item.length,
      type,
      isVcl,
      firstSliceSegment: isVcl && (data[header + 2] & 0x80) !== 0
    }]
  })
}

function buildUnit(data: Buffer, start: number, end: number, nals: AnnexBNalUnit[]): H265AccessUnit {
  const nalTypes = nals.map((nal) => nal.type)
  return {
    data: data.subarray(start, end),
    keyframe: nalTypes.some((type) => type >= 16 && type <= 21),
    nalTypes
  }
}

export function parseH265AccessUnits(data: Buffer): H265AccessUnit[] {
  const nals = parseAnnexBNalUnits(data)
  if (nals.length === 0) throw new Error('No Annex-B H.265 NAL units found')

  const audIndexes = nals.flatMap((nal, index) => nal.type === 35 ? [index] : [])
  if (audIndexes.length > 0) {
    const result: H265AccessUnit[] = []
    const preambleStart = nals[0].start
    for (let index = 0; index < audIndexes.length; index += 1) {
      const nalIndex = audIndexes[index]
      const start = index === 0 ? preambleStart : nals[nalIndex].start
      const nextNalIndex = audIndexes[index + 1]
      const end = nextNalIndex === undefined ? data.length : nals[nextNalIndex].start
      const included = nals.filter((nal) => nal.start >= start && nal.start < end)
      if (included.some((nal) => nal.isVcl)) result.push(buildUnit(data, start, end, included))
    }
    return result
  }

  const result: H265AccessUnit[] = []
  let currentStart = nals[0].start
  let currentNals: AnnexBNalUnit[] = []
  let hasVcl = false

  for (const nal of nals) {
    if (nal.isVcl && nal.firstSliceSegment && hasVcl) {
      result.push(buildUnit(data, currentStart, nal.start, currentNals))
      currentStart = nal.start
      currentNals = []
      hasVcl = false
    }
    currentNals.push(nal)
    hasVcl ||= nal.isVcl
  }
  if (hasVcl) result.push(buildUnit(data, currentStart, data.length, currentNals))
  return result
}

export function loadH265AccessUnits(filePath: string): H265AccessUnit[] {
  return parseH265AccessUnits(fs.readFileSync(filePath))
}
