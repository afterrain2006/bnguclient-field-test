/** Communication V1.3.0 p49: own 1,2,3,4,7, then opponent 1,2,3,4,7. */
export function globalHealthEntries(health: number[], ownRobotId: number): { robotId: number; health: number }[] {
  if (!health.length || !ownRobotId) return []
  if (health.length !== 10) throw new Error('GlobalUnitStatus.robotHealth must contain 10 entries (V1.3.0)')
  const order = [1, 2, 3, 4, 7]; const ownBlue = ownRobotId >= 100
  return health.map((hp, index) => ({ robotId: order[index % 5] + ((index < 5 ? ownBlue : !ownBlue) ? 100 : 0), health: hp }))
}
