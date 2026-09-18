/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $Boolean = $util.global.Boolean, $String = $util.global.String, $Array = $util.global.Array, $Number = $util.global.Number, $isFinite = $util.global.isFinite, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const robomaster = $root.robomaster = (() => {

    /**
     * Namespace robomaster.
     * @exports robomaster
     * @namespace
     */
    const robomaster = {};

    robomaster.KeyboardMouseControl = (function() {

        /**
         * Properties of a KeyboardMouseControl.
         * @typedef {Object} robomaster.KeyboardMouseControl.$Properties
         * @property {number|null} [mouseX] KeyboardMouseControl mouseX
         * @property {number|null} [mouseY] KeyboardMouseControl mouseY
         * @property {number|null} [mouseZ] KeyboardMouseControl mouseZ
         * @property {boolean|null} [leftButtonDown] KeyboardMouseControl leftButtonDown
         * @property {boolean|null} [rightButtonDown] KeyboardMouseControl rightButtonDown
         * @property {number|null} [keyboardValue] KeyboardMouseControl keyboardValue
         * @property {boolean|null} [midButtonDown] KeyboardMouseControl midButtonDown
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a KeyboardMouseControl.
         * @memberof robomaster
         * @interface IKeyboardMouseControl
         * @augments robomaster.KeyboardMouseControl.$Properties
         * @deprecated Use robomaster.KeyboardMouseControl.$Properties instead.
         */

        /**
         * Shape of a KeyboardMouseControl.
         * @typedef {robomaster.KeyboardMouseControl.$Properties} robomaster.KeyboardMouseControl.$Shape
         */

        /**
         * Constructs a new KeyboardMouseControl.
         * @memberof robomaster
         * @classdesc Represents a KeyboardMouseControl.
         * @constructor
         * @param {robomaster.KeyboardMouseControl.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const KeyboardMouseControl = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * KeyboardMouseControl mouseX.
         * @member {number|null|undefined} mouseX
         * @memberof robomaster.KeyboardMouseControl
         * @instance
         */
        KeyboardMouseControl.prototype.mouseX = null;

        /**
         * KeyboardMouseControl mouseY.
         * @member {number|null|undefined} mouseY
         * @memberof robomaster.KeyboardMouseControl
         * @instance
         */
        KeyboardMouseControl.prototype.mouseY = null;

        /**
         * KeyboardMouseControl mouseZ.
         * @member {number|null|undefined} mouseZ
         * @memberof robomaster.KeyboardMouseControl
         * @instance
         */
        KeyboardMouseControl.prototype.mouseZ = null;

        /**
         * KeyboardMouseControl leftButtonDown.
         * @member {boolean|null|undefined} leftButtonDown
         * @memberof robomaster.KeyboardMouseControl
         * @instance
         */
        KeyboardMouseControl.prototype.leftButtonDown = null;

        /**
         * KeyboardMouseControl rightButtonDown.
         * @member {boolean|null|undefined} rightButtonDown
         * @memberof robomaster.KeyboardMouseControl
         * @instance
         */
        KeyboardMouseControl.prototype.rightButtonDown = null;

        /**
         * KeyboardMouseControl keyboardValue.
         * @member {number|null|undefined} keyboardValue
         * @memberof robomaster.KeyboardMouseControl
         * @instance
         */
        KeyboardMouseControl.prototype.keyboardValue = null;

        /**
         * KeyboardMouseControl midButtonDown.
         * @member {boolean|null|undefined} midButtonDown
         * @memberof robomaster.KeyboardMouseControl
         * @instance
         */
        KeyboardMouseControl.prototype.midButtonDown = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(KeyboardMouseControl.prototype, "_mouseX", {
            get: $util.oneOfGetter($oneOfFields = ["mouseX"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(KeyboardMouseControl.prototype, "_mouseY", {
            get: $util.oneOfGetter($oneOfFields = ["mouseY"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(KeyboardMouseControl.prototype, "_mouseZ", {
            get: $util.oneOfGetter($oneOfFields = ["mouseZ"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(KeyboardMouseControl.prototype, "_leftButtonDown", {
            get: $util.oneOfGetter($oneOfFields = ["leftButtonDown"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(KeyboardMouseControl.prototype, "_rightButtonDown", {
            get: $util.oneOfGetter($oneOfFields = ["rightButtonDown"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(KeyboardMouseControl.prototype, "_keyboardValue", {
            get: $util.oneOfGetter($oneOfFields = ["keyboardValue"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(KeyboardMouseControl.prototype, "_midButtonDown", {
            get: $util.oneOfGetter($oneOfFields = ["midButtonDown"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new KeyboardMouseControl instance using the specified properties.
         * @function create
         * @memberof robomaster.KeyboardMouseControl
         * @static
         * @param {robomaster.KeyboardMouseControl.$Properties=} [properties] Properties to set
         * @returns {robomaster.KeyboardMouseControl} KeyboardMouseControl instance
         * @type {{
         *   (properties: robomaster.KeyboardMouseControl.$Shape): robomaster.KeyboardMouseControl & robomaster.KeyboardMouseControl.$Shape;
         *   (properties?: robomaster.KeyboardMouseControl.$Properties): robomaster.KeyboardMouseControl;
         * }}
         */
        KeyboardMouseControl.create = function(properties) {
            return new KeyboardMouseControl(properties);
        };

        /**
         * Encodes the specified KeyboardMouseControl message. Does not implicitly {@link robomaster.KeyboardMouseControl.verify|verify} messages.
         * @function encode
         * @memberof robomaster.KeyboardMouseControl
         * @static
         * @param {robomaster.KeyboardMouseControl.$Properties} message KeyboardMouseControl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyboardMouseControl.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mouseX != null && $Object.hasOwnProperty.call(message, "mouseX"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mouseX);
            if (message.mouseY != null && $Object.hasOwnProperty.call(message, "mouseY"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mouseY);
            if (message.mouseZ != null && $Object.hasOwnProperty.call(message, "mouseZ"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mouseZ);
            if (message.leftButtonDown != null && $Object.hasOwnProperty.call(message, "leftButtonDown"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.leftButtonDown);
            if (message.rightButtonDown != null && $Object.hasOwnProperty.call(message, "rightButtonDown"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.rightButtonDown);
            if (message.keyboardValue != null && $Object.hasOwnProperty.call(message, "keyboardValue"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.keyboardValue);
            if (message.midButtonDown != null && $Object.hasOwnProperty.call(message, "midButtonDown"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.midButtonDown);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified KeyboardMouseControl message, length delimited. Does not implicitly {@link robomaster.KeyboardMouseControl.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.KeyboardMouseControl
         * @static
         * @param {robomaster.KeyboardMouseControl.$Properties} message KeyboardMouseControl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyboardMouseControl.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a KeyboardMouseControl message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.KeyboardMouseControl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.KeyboardMouseControl & robomaster.KeyboardMouseControl.$Shape} KeyboardMouseControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyboardMouseControl.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.KeyboardMouseControl();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.mouseX = reader.int32();
                        message._mouseX = "mouseX";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.mouseY = reader.int32();
                        message._mouseY = "mouseY";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.mouseZ = reader.int32();
                        message._mouseZ = "mouseZ";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.leftButtonDown = reader.bool();
                        message._leftButtonDown = "leftButtonDown";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.rightButtonDown = reader.bool();
                        message._rightButtonDown = "rightButtonDown";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.keyboardValue = reader.uint32();
                        message._keyboardValue = "keyboardValue";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.midButtonDown = reader.bool();
                        message._midButtonDown = "midButtonDown";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a KeyboardMouseControl message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.KeyboardMouseControl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.KeyboardMouseControl & robomaster.KeyboardMouseControl.$Shape} KeyboardMouseControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyboardMouseControl.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyboardMouseControl message.
         * @function verify
         * @memberof robomaster.KeyboardMouseControl
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyboardMouseControl.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.mouseX != null && $Object.hasOwnProperty.call(message, "mouseX")) {
                properties._mouseX = 1;
                if (!$util.isInteger(message.mouseX))
                    return "mouseX: integer expected";
            }
            if (message.mouseY != null && $Object.hasOwnProperty.call(message, "mouseY")) {
                properties._mouseY = 1;
                if (!$util.isInteger(message.mouseY))
                    return "mouseY: integer expected";
            }
            if (message.mouseZ != null && $Object.hasOwnProperty.call(message, "mouseZ")) {
                properties._mouseZ = 1;
                if (!$util.isInteger(message.mouseZ))
                    return "mouseZ: integer expected";
            }
            if (message.leftButtonDown != null && $Object.hasOwnProperty.call(message, "leftButtonDown")) {
                properties._leftButtonDown = 1;
                if (typeof message.leftButtonDown !== "boolean")
                    return "leftButtonDown: boolean expected";
            }
            if (message.rightButtonDown != null && $Object.hasOwnProperty.call(message, "rightButtonDown")) {
                properties._rightButtonDown = 1;
                if (typeof message.rightButtonDown !== "boolean")
                    return "rightButtonDown: boolean expected";
            }
            if (message.keyboardValue != null && $Object.hasOwnProperty.call(message, "keyboardValue")) {
                properties._keyboardValue = 1;
                if (!$util.isInteger(message.keyboardValue))
                    return "keyboardValue: integer expected";
            }
            if (message.midButtonDown != null && $Object.hasOwnProperty.call(message, "midButtonDown")) {
                properties._midButtonDown = 1;
                if (typeof message.midButtonDown !== "boolean")
                    return "midButtonDown: boolean expected";
            }
            return null;
        };

        /**
         * Creates a KeyboardMouseControl message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.KeyboardMouseControl
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.KeyboardMouseControl} KeyboardMouseControl
         */
        KeyboardMouseControl.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.KeyboardMouseControl)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.KeyboardMouseControl: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.KeyboardMouseControl();
            if (object.mouseX != null)
                message.mouseX = object.mouseX | 0;
            if (object.mouseY != null)
                message.mouseY = object.mouseY | 0;
            if (object.mouseZ != null)
                message.mouseZ = object.mouseZ | 0;
            if (object.leftButtonDown != null)
                message.leftButtonDown = $Boolean(object.leftButtonDown);
            if (object.rightButtonDown != null)
                message.rightButtonDown = $Boolean(object.rightButtonDown);
            if (object.keyboardValue != null)
                message.keyboardValue = object.keyboardValue >>> 0;
            if (object.midButtonDown != null)
                message.midButtonDown = $Boolean(object.midButtonDown);
            return message;
        };

        /**
         * Creates a plain object from a KeyboardMouseControl message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.KeyboardMouseControl
         * @static
         * @param {robomaster.KeyboardMouseControl} message KeyboardMouseControl
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyboardMouseControl.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.mouseX != null && $Object.hasOwnProperty.call(message, "mouseX"))
                object.mouseX = message.mouseX;
            if (message.mouseY != null && $Object.hasOwnProperty.call(message, "mouseY"))
                object.mouseY = message.mouseY;
            if (message.mouseZ != null && $Object.hasOwnProperty.call(message, "mouseZ"))
                object.mouseZ = message.mouseZ;
            if (message.leftButtonDown != null && $Object.hasOwnProperty.call(message, "leftButtonDown"))
                object.leftButtonDown = message.leftButtonDown;
            if (message.rightButtonDown != null && $Object.hasOwnProperty.call(message, "rightButtonDown"))
                object.rightButtonDown = message.rightButtonDown;
            if (message.keyboardValue != null && $Object.hasOwnProperty.call(message, "keyboardValue"))
                object.keyboardValue = message.keyboardValue;
            if (message.midButtonDown != null && $Object.hasOwnProperty.call(message, "midButtonDown"))
                object.midButtonDown = message.midButtonDown;
            return object;
        };

        /**
         * Converts this KeyboardMouseControl to JSON.
         * @function toJSON
         * @memberof robomaster.KeyboardMouseControl
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyboardMouseControl.prototype.toJSON = function() {
            return KeyboardMouseControl.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for KeyboardMouseControl
         * @function getTypeUrl
         * @memberof robomaster.KeyboardMouseControl
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        KeyboardMouseControl.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.KeyboardMouseControl";
        };

        return KeyboardMouseControl;
    })();

    robomaster.CustomControl = (function() {

        /**
         * Properties of a CustomControl.
         * @typedef {Object} robomaster.CustomControl.$Properties
         * @property {Uint8Array|null} [data] CustomControl data
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a CustomControl.
         * @memberof robomaster
         * @interface ICustomControl
         * @augments robomaster.CustomControl.$Properties
         * @deprecated Use robomaster.CustomControl.$Properties instead.
         */

        /**
         * Shape of a CustomControl.
         * @typedef {robomaster.CustomControl.$Properties} robomaster.CustomControl.$Shape
         */

        /**
         * Constructs a new CustomControl.
         * @memberof robomaster
         * @classdesc Represents a CustomControl.
         * @constructor
         * @param {robomaster.CustomControl.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const CustomControl = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * CustomControl data.
         * @member {Uint8Array|null|undefined} data
         * @memberof robomaster.CustomControl
         * @instance
         */
        CustomControl.prototype.data = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(CustomControl.prototype, "_data", {
            get: $util.oneOfGetter($oneOfFields = ["data"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CustomControl instance using the specified properties.
         * @function create
         * @memberof robomaster.CustomControl
         * @static
         * @param {robomaster.CustomControl.$Properties=} [properties] Properties to set
         * @returns {robomaster.CustomControl} CustomControl instance
         * @type {{
         *   (properties: robomaster.CustomControl.$Shape): robomaster.CustomControl & robomaster.CustomControl.$Shape;
         *   (properties?: robomaster.CustomControl.$Properties): robomaster.CustomControl;
         * }}
         */
        CustomControl.create = function(properties) {
            return new CustomControl(properties);
        };

        /**
         * Encodes the specified CustomControl message. Does not implicitly {@link robomaster.CustomControl.verify|verify} messages.
         * @function encode
         * @memberof robomaster.CustomControl
         * @static
         * @param {robomaster.CustomControl.$Properties} message CustomControl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomControl.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CustomControl message, length delimited. Does not implicitly {@link robomaster.CustomControl.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.CustomControl
         * @static
         * @param {robomaster.CustomControl.$Properties} message CustomControl message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomControl.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a CustomControl message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.CustomControl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.CustomControl & robomaster.CustomControl.$Shape} CustomControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomControl.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.CustomControl();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.data = reader.bytes();
                        message._data = "data";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a CustomControl message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.CustomControl
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.CustomControl & robomaster.CustomControl.$Shape} CustomControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomControl.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CustomControl message.
         * @function verify
         * @memberof robomaster.CustomControl
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomControl.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.data != null && $Object.hasOwnProperty.call(message, "data")) {
                properties._data = 1;
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            }
            return null;
        };

        /**
         * Creates a CustomControl message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.CustomControl
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.CustomControl} CustomControl
         */
        CustomControl.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.CustomControl)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.CustomControl: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.CustomControl();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a CustomControl message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.CustomControl
         * @static
         * @param {robomaster.CustomControl} message CustomControl
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomControl.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
                object.data = options.bytes === $String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this CustomControl to JSON.
         * @function toJSON
         * @memberof robomaster.CustomControl
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomControl.prototype.toJSON = function() {
            return CustomControl.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CustomControl
         * @function getTypeUrl
         * @memberof robomaster.CustomControl
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CustomControl.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.CustomControl";
        };

        return CustomControl;
    })();

    robomaster.MapClickInfo = (function() {

        /**
         * Properties of a MapClickInfo.
         * @typedef {Object} robomaster.MapClickInfo.$Properties
         * @property {number|null} [targetX] MapClickInfo targetX
         * @property {number|null} [targetY] MapClickInfo targetY
         * @property {number|null} [targetZ] MapClickInfo targetZ
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a MapClickInfo.
         * @memberof robomaster
         * @interface IMapClickInfo
         * @augments robomaster.MapClickInfo.$Properties
         * @deprecated Use robomaster.MapClickInfo.$Properties instead.
         */

        /**
         * Shape of a MapClickInfo.
         * @typedef {robomaster.MapClickInfo.$Properties} robomaster.MapClickInfo.$Shape
         */

        /**
         * Constructs a new MapClickInfo.
         * @memberof robomaster
         * @classdesc Represents a MapClickInfo.
         * @constructor
         * @param {robomaster.MapClickInfo.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const MapClickInfo = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * MapClickInfo targetX.
         * @member {number|null|undefined} targetX
         * @memberof robomaster.MapClickInfo
         * @instance
         */
        MapClickInfo.prototype.targetX = null;

        /**
         * MapClickInfo targetY.
         * @member {number|null|undefined} targetY
         * @memberof robomaster.MapClickInfo
         * @instance
         */
        MapClickInfo.prototype.targetY = null;

        /**
         * MapClickInfo targetZ.
         * @member {number|null|undefined} targetZ
         * @memberof robomaster.MapClickInfo
         * @instance
         */
        MapClickInfo.prototype.targetZ = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfo.prototype, "_targetX", {
            get: $util.oneOfGetter($oneOfFields = ["targetX"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfo.prototype, "_targetY", {
            get: $util.oneOfGetter($oneOfFields = ["targetY"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfo.prototype, "_targetZ", {
            get: $util.oneOfGetter($oneOfFields = ["targetZ"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MapClickInfo instance using the specified properties.
         * @function create
         * @memberof robomaster.MapClickInfo
         * @static
         * @param {robomaster.MapClickInfo.$Properties=} [properties] Properties to set
         * @returns {robomaster.MapClickInfo} MapClickInfo instance
         * @type {{
         *   (properties: robomaster.MapClickInfo.$Shape): robomaster.MapClickInfo & robomaster.MapClickInfo.$Shape;
         *   (properties?: robomaster.MapClickInfo.$Properties): robomaster.MapClickInfo;
         * }}
         */
        MapClickInfo.create = function(properties) {
            return new MapClickInfo(properties);
        };

        /**
         * Encodes the specified MapClickInfo message. Does not implicitly {@link robomaster.MapClickInfo.verify|verify} messages.
         * @function encode
         * @memberof robomaster.MapClickInfo
         * @static
         * @param {robomaster.MapClickInfo.$Properties} message MapClickInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapClickInfo.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.targetX != null && $Object.hasOwnProperty.call(message, "targetX"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.targetX);
            if (message.targetY != null && $Object.hasOwnProperty.call(message, "targetY"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.targetY);
            if (message.targetZ != null && $Object.hasOwnProperty.call(message, "targetZ"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.targetZ);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified MapClickInfo message, length delimited. Does not implicitly {@link robomaster.MapClickInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.MapClickInfo
         * @static
         * @param {robomaster.MapClickInfo.$Properties} message MapClickInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapClickInfo.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a MapClickInfo message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.MapClickInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.MapClickInfo & robomaster.MapClickInfo.$Shape} MapClickInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapClickInfo.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.MapClickInfo();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 5)
                            break;
                        message.targetX = reader.float();
                        message._targetX = "targetX";
                        continue;
                    }
                case 2: {
                        if (wireType !== 5)
                            break;
                        message.targetY = reader.float();
                        message._targetY = "targetY";
                        continue;
                    }
                case 3: {
                        if (wireType !== 5)
                            break;
                        message.targetZ = reader.float();
                        message._targetZ = "targetZ";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a MapClickInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.MapClickInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.MapClickInfo & robomaster.MapClickInfo.$Shape} MapClickInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapClickInfo.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MapClickInfo message.
         * @function verify
         * @memberof robomaster.MapClickInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MapClickInfo.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.targetX != null && $Object.hasOwnProperty.call(message, "targetX")) {
                properties._targetX = 1;
                if (typeof message.targetX !== "number")
                    return "targetX: number expected";
            }
            if (message.targetY != null && $Object.hasOwnProperty.call(message, "targetY")) {
                properties._targetY = 1;
                if (typeof message.targetY !== "number")
                    return "targetY: number expected";
            }
            if (message.targetZ != null && $Object.hasOwnProperty.call(message, "targetZ")) {
                properties._targetZ = 1;
                if (typeof message.targetZ !== "number")
                    return "targetZ: number expected";
            }
            return null;
        };

        /**
         * Creates a MapClickInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.MapClickInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.MapClickInfo} MapClickInfo
         */
        MapClickInfo.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.MapClickInfo)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.MapClickInfo: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.MapClickInfo();
            if (object.targetX != null)
                message.targetX = $Number(object.targetX);
            if (object.targetY != null)
                message.targetY = $Number(object.targetY);
            if (object.targetZ != null)
                message.targetZ = $Number(object.targetZ);
            return message;
        };

        /**
         * Creates a plain object from a MapClickInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.MapClickInfo
         * @static
         * @param {robomaster.MapClickInfo} message MapClickInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MapClickInfo.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.targetX != null && $Object.hasOwnProperty.call(message, "targetX"))
                object.targetX = options.json && !$isFinite(message.targetX) ? $String(message.targetX) : message.targetX;
            if (message.targetY != null && $Object.hasOwnProperty.call(message, "targetY"))
                object.targetY = options.json && !$isFinite(message.targetY) ? $String(message.targetY) : message.targetY;
            if (message.targetZ != null && $Object.hasOwnProperty.call(message, "targetZ"))
                object.targetZ = options.json && !$isFinite(message.targetZ) ? $String(message.targetZ) : message.targetZ;
            return object;
        };

        /**
         * Converts this MapClickInfo to JSON.
         * @function toJSON
         * @memberof robomaster.MapClickInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MapClickInfo.prototype.toJSON = function() {
            return MapClickInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for MapClickInfo
         * @function getTypeUrl
         * @memberof robomaster.MapClickInfo
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        MapClickInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.MapClickInfo";
        };

        return MapClickInfo;
    })();

    robomaster.MapClickInfoNotify = (function() {

        /**
         * Properties of a MapClickInfoNotify.
         * @typedef {Object} robomaster.MapClickInfoNotify.$Properties
         * @property {number|null} [isSendAll] MapClickInfoNotify isSendAll
         * @property {Uint8Array|null} [robotId] MapClickInfoNotify robotId
         * @property {number|null} [mode] MapClickInfoNotify mode
         * @property {number|null} [enemyId] MapClickInfoNotify enemyId
         * @property {number|null} [ascii] MapClickInfoNotify ascii
         * @property {number|null} [type] MapClickInfoNotify type
         * @property {number|null} [mapX] MapClickInfoNotify mapX
         * @property {number|null} [mapY] MapClickInfoNotify mapY
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a MapClickInfoNotify.
         * @memberof robomaster
         * @interface IMapClickInfoNotify
         * @augments robomaster.MapClickInfoNotify.$Properties
         * @deprecated Use robomaster.MapClickInfoNotify.$Properties instead.
         */

        /**
         * Shape of a MapClickInfoNotify.
         * @typedef {robomaster.MapClickInfoNotify.$Properties} robomaster.MapClickInfoNotify.$Shape
         */

        /**
         * Constructs a new MapClickInfoNotify.
         * @memberof robomaster
         * @classdesc Represents a MapClickInfoNotify.
         * @constructor
         * @param {robomaster.MapClickInfoNotify.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const MapClickInfoNotify = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * MapClickInfoNotify isSendAll.
         * @member {number|null|undefined} isSendAll
         * @memberof robomaster.MapClickInfoNotify
         * @instance
         */
        MapClickInfoNotify.prototype.isSendAll = null;

        /**
         * MapClickInfoNotify robotId.
         * @member {Uint8Array|null|undefined} robotId
         * @memberof robomaster.MapClickInfoNotify
         * @instance
         */
        MapClickInfoNotify.prototype.robotId = null;

        /**
         * MapClickInfoNotify mode.
         * @member {number|null|undefined} mode
         * @memberof robomaster.MapClickInfoNotify
         * @instance
         */
        MapClickInfoNotify.prototype.mode = null;

        /**
         * MapClickInfoNotify enemyId.
         * @member {number|null|undefined} enemyId
         * @memberof robomaster.MapClickInfoNotify
         * @instance
         */
        MapClickInfoNotify.prototype.enemyId = null;

        /**
         * MapClickInfoNotify ascii.
         * @member {number|null|undefined} ascii
         * @memberof robomaster.MapClickInfoNotify
         * @instance
         */
        MapClickInfoNotify.prototype.ascii = null;

        /**
         * MapClickInfoNotify type.
         * @member {number|null|undefined} type
         * @memberof robomaster.MapClickInfoNotify
         * @instance
         */
        MapClickInfoNotify.prototype.type = null;

        /**
         * MapClickInfoNotify mapX.
         * @member {number|null|undefined} mapX
         * @memberof robomaster.MapClickInfoNotify
         * @instance
         */
        MapClickInfoNotify.prototype.mapX = null;

        /**
         * MapClickInfoNotify mapY.
         * @member {number|null|undefined} mapY
         * @memberof robomaster.MapClickInfoNotify
         * @instance
         */
        MapClickInfoNotify.prototype.mapY = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfoNotify.prototype, "_isSendAll", {
            get: $util.oneOfGetter($oneOfFields = ["isSendAll"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfoNotify.prototype, "_robotId", {
            get: $util.oneOfGetter($oneOfFields = ["robotId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfoNotify.prototype, "_mode", {
            get: $util.oneOfGetter($oneOfFields = ["mode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfoNotify.prototype, "_enemyId", {
            get: $util.oneOfGetter($oneOfFields = ["enemyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfoNotify.prototype, "_ascii", {
            get: $util.oneOfGetter($oneOfFields = ["ascii"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfoNotify.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfoNotify.prototype, "_mapX", {
            get: $util.oneOfGetter($oneOfFields = ["mapX"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(MapClickInfoNotify.prototype, "_mapY", {
            get: $util.oneOfGetter($oneOfFields = ["mapY"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MapClickInfoNotify instance using the specified properties.
         * @function create
         * @memberof robomaster.MapClickInfoNotify
         * @static
         * @param {robomaster.MapClickInfoNotify.$Properties=} [properties] Properties to set
         * @returns {robomaster.MapClickInfoNotify} MapClickInfoNotify instance
         * @type {{
         *   (properties: robomaster.MapClickInfoNotify.$Shape): robomaster.MapClickInfoNotify & robomaster.MapClickInfoNotify.$Shape;
         *   (properties?: robomaster.MapClickInfoNotify.$Properties): robomaster.MapClickInfoNotify;
         * }}
         */
        MapClickInfoNotify.create = function(properties) {
            return new MapClickInfoNotify(properties);
        };

        /**
         * Encodes the specified MapClickInfoNotify message. Does not implicitly {@link robomaster.MapClickInfoNotify.verify|verify} messages.
         * @function encode
         * @memberof robomaster.MapClickInfoNotify
         * @static
         * @param {robomaster.MapClickInfoNotify.$Properties} message MapClickInfoNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapClickInfoNotify.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.isSendAll != null && $Object.hasOwnProperty.call(message, "isSendAll"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.isSendAll);
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.robotId);
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.mode);
            if (message.enemyId != null && $Object.hasOwnProperty.call(message, "enemyId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.enemyId);
            if (message.ascii != null && $Object.hasOwnProperty.call(message, "ascii"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.ascii);
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.type);
            if (message.mapX != null && $Object.hasOwnProperty.call(message, "mapX"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.mapX);
            if (message.mapY != null && $Object.hasOwnProperty.call(message, "mapY"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.mapY);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified MapClickInfoNotify message, length delimited. Does not implicitly {@link robomaster.MapClickInfoNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.MapClickInfoNotify
         * @static
         * @param {robomaster.MapClickInfoNotify.$Properties} message MapClickInfoNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapClickInfoNotify.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a MapClickInfoNotify message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.MapClickInfoNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.MapClickInfoNotify & robomaster.MapClickInfoNotify.$Shape} MapClickInfoNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapClickInfoNotify.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.MapClickInfoNotify();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.isSendAll = reader.uint32();
                        message._isSendAll = "isSendAll";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.robotId = reader.bytes();
                        message._robotId = "robotId";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.mode = reader.uint32();
                        message._mode = "mode";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.enemyId = reader.uint32();
                        message._enemyId = "enemyId";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.ascii = reader.uint32();
                        message._ascii = "ascii";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.type = reader.uint32();
                        message._type = "type";
                        continue;
                    }
                case 7: {
                        if (wireType !== 5)
                            break;
                        message.mapX = reader.float();
                        message._mapX = "mapX";
                        continue;
                    }
                case 8: {
                        if (wireType !== 5)
                            break;
                        message.mapY = reader.float();
                        message._mapY = "mapY";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a MapClickInfoNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.MapClickInfoNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.MapClickInfoNotify & robomaster.MapClickInfoNotify.$Shape} MapClickInfoNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapClickInfoNotify.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MapClickInfoNotify message.
         * @function verify
         * @memberof robomaster.MapClickInfoNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MapClickInfoNotify.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.isSendAll != null && $Object.hasOwnProperty.call(message, "isSendAll")) {
                properties._isSendAll = 1;
                if (!$util.isInteger(message.isSendAll))
                    return "isSendAll: integer expected";
            }
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId")) {
                properties._robotId = 1;
                if (!(message.robotId && typeof message.robotId.length === "number" || $util.isString(message.robotId)))
                    return "robotId: buffer expected";
            }
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode")) {
                properties._mode = 1;
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            }
            if (message.enemyId != null && $Object.hasOwnProperty.call(message, "enemyId")) {
                properties._enemyId = 1;
                if (!$util.isInteger(message.enemyId))
                    return "enemyId: integer expected";
            }
            if (message.ascii != null && $Object.hasOwnProperty.call(message, "ascii")) {
                properties._ascii = 1;
                if (!$util.isInteger(message.ascii))
                    return "ascii: integer expected";
            }
            if (message.type != null && $Object.hasOwnProperty.call(message, "type")) {
                properties._type = 1;
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            }
            if (message.mapX != null && $Object.hasOwnProperty.call(message, "mapX")) {
                properties._mapX = 1;
                if (typeof message.mapX !== "number")
                    return "mapX: number expected";
            }
            if (message.mapY != null && $Object.hasOwnProperty.call(message, "mapY")) {
                properties._mapY = 1;
                if (typeof message.mapY !== "number")
                    return "mapY: number expected";
            }
            return null;
        };

        /**
         * Creates a MapClickInfoNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.MapClickInfoNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.MapClickInfoNotify} MapClickInfoNotify
         */
        MapClickInfoNotify.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.MapClickInfoNotify)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.MapClickInfoNotify: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.MapClickInfoNotify();
            if (object.isSendAll != null)
                message.isSendAll = object.isSendAll >>> 0;
            if (object.robotId != null)
                if (typeof object.robotId === "string")
                    $util.base64.decode(object.robotId, message.robotId = $util.newBuffer($util.base64.length(object.robotId)), 0);
                else if (object.robotId.length >= 0)
                    message.robotId = object.robotId;
            if (object.mode != null)
                message.mode = object.mode >>> 0;
            if (object.enemyId != null)
                message.enemyId = object.enemyId >>> 0;
            if (object.ascii != null)
                message.ascii = object.ascii >>> 0;
            if (object.type != null)
                message.type = object.type >>> 0;
            if (object.mapX != null)
                message.mapX = $Number(object.mapX);
            if (object.mapY != null)
                message.mapY = $Number(object.mapY);
            return message;
        };

        /**
         * Creates a plain object from a MapClickInfoNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.MapClickInfoNotify
         * @static
         * @param {robomaster.MapClickInfoNotify} message MapClickInfoNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MapClickInfoNotify.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.isSendAll != null && $Object.hasOwnProperty.call(message, "isSendAll"))
                object.isSendAll = message.isSendAll;
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId"))
                object.robotId = options.bytes === $String ? $util.base64.encode(message.robotId, 0, message.robotId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.robotId) : message.robotId;
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode"))
                object.mode = message.mode;
            if (message.enemyId != null && $Object.hasOwnProperty.call(message, "enemyId"))
                object.enemyId = message.enemyId;
            if (message.ascii != null && $Object.hasOwnProperty.call(message, "ascii"))
                object.ascii = message.ascii;
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                object.type = message.type;
            if (message.mapX != null && $Object.hasOwnProperty.call(message, "mapX"))
                object.mapX = options.json && !$isFinite(message.mapX) ? $String(message.mapX) : message.mapX;
            if (message.mapY != null && $Object.hasOwnProperty.call(message, "mapY"))
                object.mapY = options.json && !$isFinite(message.mapY) ? $String(message.mapY) : message.mapY;
            return object;
        };

        /**
         * Converts this MapClickInfoNotify to JSON.
         * @function toJSON
         * @memberof robomaster.MapClickInfoNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MapClickInfoNotify.prototype.toJSON = function() {
            return MapClickInfoNotify.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for MapClickInfoNotify
         * @function getTypeUrl
         * @memberof robomaster.MapClickInfoNotify
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        MapClickInfoNotify.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.MapClickInfoNotify";
        };

        return MapClickInfoNotify;
    })();

    robomaster.AssemblyCommand = (function() {

        /**
         * Properties of an AssemblyCommand.
         * @typedef {Object} robomaster.AssemblyCommand.$Properties
         * @property {number|null} [operation] AssemblyCommand operation
         * @property {number|null} [difficulty] AssemblyCommand difficulty
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AssemblyCommand.
         * @memberof robomaster
         * @interface IAssemblyCommand
         * @augments robomaster.AssemblyCommand.$Properties
         * @deprecated Use robomaster.AssemblyCommand.$Properties instead.
         */

        /**
         * Shape of an AssemblyCommand.
         * @typedef {robomaster.AssemblyCommand.$Properties} robomaster.AssemblyCommand.$Shape
         */

        /**
         * Constructs a new AssemblyCommand.
         * @memberof robomaster
         * @classdesc Represents an AssemblyCommand.
         * @constructor
         * @param {robomaster.AssemblyCommand.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AssemblyCommand = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AssemblyCommand operation.
         * @member {number|null|undefined} operation
         * @memberof robomaster.AssemblyCommand
         * @instance
         */
        AssemblyCommand.prototype.operation = null;

        /**
         * AssemblyCommand difficulty.
         * @member {number|null|undefined} difficulty
         * @memberof robomaster.AssemblyCommand
         * @instance
         */
        AssemblyCommand.prototype.difficulty = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AssemblyCommand.prototype, "_operation", {
            get: $util.oneOfGetter($oneOfFields = ["operation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AssemblyCommand.prototype, "_difficulty", {
            get: $util.oneOfGetter($oneOfFields = ["difficulty"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AssemblyCommand instance using the specified properties.
         * @function create
         * @memberof robomaster.AssemblyCommand
         * @static
         * @param {robomaster.AssemblyCommand.$Properties=} [properties] Properties to set
         * @returns {robomaster.AssemblyCommand} AssemblyCommand instance
         * @type {{
         *   (properties: robomaster.AssemblyCommand.$Shape): robomaster.AssemblyCommand & robomaster.AssemblyCommand.$Shape;
         *   (properties?: robomaster.AssemblyCommand.$Properties): robomaster.AssemblyCommand;
         * }}
         */
        AssemblyCommand.create = function(properties) {
            return new AssemblyCommand(properties);
        };

        /**
         * Encodes the specified AssemblyCommand message. Does not implicitly {@link robomaster.AssemblyCommand.verify|verify} messages.
         * @function encode
         * @memberof robomaster.AssemblyCommand
         * @static
         * @param {robomaster.AssemblyCommand.$Properties} message AssemblyCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssemblyCommand.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.operation != null && $Object.hasOwnProperty.call(message, "operation"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.operation);
            if (message.difficulty != null && $Object.hasOwnProperty.call(message, "difficulty"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.difficulty);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AssemblyCommand message, length delimited. Does not implicitly {@link robomaster.AssemblyCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.AssemblyCommand
         * @static
         * @param {robomaster.AssemblyCommand.$Properties} message AssemblyCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssemblyCommand.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an AssemblyCommand message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.AssemblyCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.AssemblyCommand & robomaster.AssemblyCommand.$Shape} AssemblyCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssemblyCommand.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.AssemblyCommand();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.operation = reader.uint32();
                        message._operation = "operation";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.difficulty = reader.uint32();
                        message._difficulty = "difficulty";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AssemblyCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.AssemblyCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.AssemblyCommand & robomaster.AssemblyCommand.$Shape} AssemblyCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssemblyCommand.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssemblyCommand message.
         * @function verify
         * @memberof robomaster.AssemblyCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssemblyCommand.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.operation != null && $Object.hasOwnProperty.call(message, "operation")) {
                properties._operation = 1;
                if (!$util.isInteger(message.operation))
                    return "operation: integer expected";
            }
            if (message.difficulty != null && $Object.hasOwnProperty.call(message, "difficulty")) {
                properties._difficulty = 1;
                if (!$util.isInteger(message.difficulty))
                    return "difficulty: integer expected";
            }
            return null;
        };

        /**
         * Creates an AssemblyCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.AssemblyCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.AssemblyCommand} AssemblyCommand
         */
        AssemblyCommand.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.AssemblyCommand)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.AssemblyCommand: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.AssemblyCommand();
            if (object.operation != null)
                message.operation = object.operation >>> 0;
            if (object.difficulty != null)
                message.difficulty = object.difficulty >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AssemblyCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.AssemblyCommand
         * @static
         * @param {robomaster.AssemblyCommand} message AssemblyCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssemblyCommand.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.operation != null && $Object.hasOwnProperty.call(message, "operation"))
                object.operation = message.operation;
            if (message.difficulty != null && $Object.hasOwnProperty.call(message, "difficulty"))
                object.difficulty = message.difficulty;
            return object;
        };

        /**
         * Converts this AssemblyCommand to JSON.
         * @function toJSON
         * @memberof robomaster.AssemblyCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssemblyCommand.prototype.toJSON = function() {
            return AssemblyCommand.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AssemblyCommand
         * @function getTypeUrl
         * @memberof robomaster.AssemblyCommand
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AssemblyCommand.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.AssemblyCommand";
        };

        return AssemblyCommand;
    })();

    robomaster.RobotPerformanceSelectionCommand = (function() {

        /**
         * Properties of a RobotPerformanceSelectionCommand.
         * @typedef {Object} robomaster.RobotPerformanceSelectionCommand.$Properties
         * @property {number|null} [shooter] RobotPerformanceSelectionCommand shooter
         * @property {number|null} [chassis] RobotPerformanceSelectionCommand chassis
         * @property {number|null} [sentryControl] RobotPerformanceSelectionCommand sentryControl
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RobotPerformanceSelectionCommand.
         * @memberof robomaster
         * @interface IRobotPerformanceSelectionCommand
         * @augments robomaster.RobotPerformanceSelectionCommand.$Properties
         * @deprecated Use robomaster.RobotPerformanceSelectionCommand.$Properties instead.
         */

        /**
         * Shape of a RobotPerformanceSelectionCommand.
         * @typedef {robomaster.RobotPerformanceSelectionCommand.$Properties} robomaster.RobotPerformanceSelectionCommand.$Shape
         */

        /**
         * Constructs a new RobotPerformanceSelectionCommand.
         * @memberof robomaster
         * @classdesc Represents a RobotPerformanceSelectionCommand.
         * @constructor
         * @param {robomaster.RobotPerformanceSelectionCommand.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RobotPerformanceSelectionCommand = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RobotPerformanceSelectionCommand shooter.
         * @member {number|null|undefined} shooter
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @instance
         */
        RobotPerformanceSelectionCommand.prototype.shooter = null;

        /**
         * RobotPerformanceSelectionCommand chassis.
         * @member {number|null|undefined} chassis
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @instance
         */
        RobotPerformanceSelectionCommand.prototype.chassis = null;

        /**
         * RobotPerformanceSelectionCommand sentryControl.
         * @member {number|null|undefined} sentryControl
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @instance
         */
        RobotPerformanceSelectionCommand.prototype.sentryControl = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPerformanceSelectionCommand.prototype, "_shooter", {
            get: $util.oneOfGetter($oneOfFields = ["shooter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPerformanceSelectionCommand.prototype, "_chassis", {
            get: $util.oneOfGetter($oneOfFields = ["chassis"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPerformanceSelectionCommand.prototype, "_sentryControl", {
            get: $util.oneOfGetter($oneOfFields = ["sentryControl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RobotPerformanceSelectionCommand instance using the specified properties.
         * @function create
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @static
         * @param {robomaster.RobotPerformanceSelectionCommand.$Properties=} [properties] Properties to set
         * @returns {robomaster.RobotPerformanceSelectionCommand} RobotPerformanceSelectionCommand instance
         * @type {{
         *   (properties: robomaster.RobotPerformanceSelectionCommand.$Shape): robomaster.RobotPerformanceSelectionCommand & robomaster.RobotPerformanceSelectionCommand.$Shape;
         *   (properties?: robomaster.RobotPerformanceSelectionCommand.$Properties): robomaster.RobotPerformanceSelectionCommand;
         * }}
         */
        RobotPerformanceSelectionCommand.create = function(properties) {
            return new RobotPerformanceSelectionCommand(properties);
        };

        /**
         * Encodes the specified RobotPerformanceSelectionCommand message. Does not implicitly {@link robomaster.RobotPerformanceSelectionCommand.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @static
         * @param {robomaster.RobotPerformanceSelectionCommand.$Properties} message RobotPerformanceSelectionCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotPerformanceSelectionCommand.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.shooter != null && $Object.hasOwnProperty.call(message, "shooter"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.shooter);
            if (message.chassis != null && $Object.hasOwnProperty.call(message, "chassis"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.chassis);
            if (message.sentryControl != null && $Object.hasOwnProperty.call(message, "sentryControl"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.sentryControl);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RobotPerformanceSelectionCommand message, length delimited. Does not implicitly {@link robomaster.RobotPerformanceSelectionCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @static
         * @param {robomaster.RobotPerformanceSelectionCommand.$Properties} message RobotPerformanceSelectionCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotPerformanceSelectionCommand.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RobotPerformanceSelectionCommand message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RobotPerformanceSelectionCommand & robomaster.RobotPerformanceSelectionCommand.$Shape} RobotPerformanceSelectionCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotPerformanceSelectionCommand.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RobotPerformanceSelectionCommand();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.shooter = reader.uint32();
                        message._shooter = "shooter";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.chassis = reader.uint32();
                        message._chassis = "chassis";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.sentryControl = reader.uint32();
                        message._sentryControl = "sentryControl";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RobotPerformanceSelectionCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RobotPerformanceSelectionCommand & robomaster.RobotPerformanceSelectionCommand.$Shape} RobotPerformanceSelectionCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotPerformanceSelectionCommand.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotPerformanceSelectionCommand message.
         * @function verify
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotPerformanceSelectionCommand.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.shooter != null && $Object.hasOwnProperty.call(message, "shooter")) {
                properties._shooter = 1;
                if (!$util.isInteger(message.shooter))
                    return "shooter: integer expected";
            }
            if (message.chassis != null && $Object.hasOwnProperty.call(message, "chassis")) {
                properties._chassis = 1;
                if (!$util.isInteger(message.chassis))
                    return "chassis: integer expected";
            }
            if (message.sentryControl != null && $Object.hasOwnProperty.call(message, "sentryControl")) {
                properties._sentryControl = 1;
                if (!$util.isInteger(message.sentryControl))
                    return "sentryControl: integer expected";
            }
            return null;
        };

        /**
         * Creates a RobotPerformanceSelectionCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RobotPerformanceSelectionCommand} RobotPerformanceSelectionCommand
         */
        RobotPerformanceSelectionCommand.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RobotPerformanceSelectionCommand)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RobotPerformanceSelectionCommand: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RobotPerformanceSelectionCommand();
            if (object.shooter != null)
                message.shooter = object.shooter >>> 0;
            if (object.chassis != null)
                message.chassis = object.chassis >>> 0;
            if (object.sentryControl != null)
                message.sentryControl = object.sentryControl >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RobotPerformanceSelectionCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @static
         * @param {robomaster.RobotPerformanceSelectionCommand} message RobotPerformanceSelectionCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotPerformanceSelectionCommand.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.shooter != null && $Object.hasOwnProperty.call(message, "shooter"))
                object.shooter = message.shooter;
            if (message.chassis != null && $Object.hasOwnProperty.call(message, "chassis"))
                object.chassis = message.chassis;
            if (message.sentryControl != null && $Object.hasOwnProperty.call(message, "sentryControl"))
                object.sentryControl = message.sentryControl;
            return object;
        };

        /**
         * Converts this RobotPerformanceSelectionCommand to JSON.
         * @function toJSON
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotPerformanceSelectionCommand.prototype.toJSON = function() {
            return RobotPerformanceSelectionCommand.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RobotPerformanceSelectionCommand
         * @function getTypeUrl
         * @memberof robomaster.RobotPerformanceSelectionCommand
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RobotPerformanceSelectionCommand.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RobotPerformanceSelectionCommand";
        };

        return RobotPerformanceSelectionCommand;
    })();

    robomaster.CommonCommand = (function() {

        /**
         * Properties of a CommonCommand.
         * @typedef {Object} robomaster.CommonCommand.$Properties
         * @property {number|null} [cmdType] CommonCommand cmdType
         * @property {number|null} [param] CommonCommand param
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a CommonCommand.
         * @memberof robomaster
         * @interface ICommonCommand
         * @augments robomaster.CommonCommand.$Properties
         * @deprecated Use robomaster.CommonCommand.$Properties instead.
         */

        /**
         * Shape of a CommonCommand.
         * @typedef {robomaster.CommonCommand.$Properties} robomaster.CommonCommand.$Shape
         */

        /**
         * Constructs a new CommonCommand.
         * @memberof robomaster
         * @classdesc Represents a CommonCommand.
         * @constructor
         * @param {robomaster.CommonCommand.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const CommonCommand = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * CommonCommand cmdType.
         * @member {number|null|undefined} cmdType
         * @memberof robomaster.CommonCommand
         * @instance
         */
        CommonCommand.prototype.cmdType = null;

        /**
         * CommonCommand param.
         * @member {number|null|undefined} param
         * @memberof robomaster.CommonCommand
         * @instance
         */
        CommonCommand.prototype.param = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(CommonCommand.prototype, "_cmdType", {
            get: $util.oneOfGetter($oneOfFields = ["cmdType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(CommonCommand.prototype, "_param", {
            get: $util.oneOfGetter($oneOfFields = ["param"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CommonCommand instance using the specified properties.
         * @function create
         * @memberof robomaster.CommonCommand
         * @static
         * @param {robomaster.CommonCommand.$Properties=} [properties] Properties to set
         * @returns {robomaster.CommonCommand} CommonCommand instance
         * @type {{
         *   (properties: robomaster.CommonCommand.$Shape): robomaster.CommonCommand & robomaster.CommonCommand.$Shape;
         *   (properties?: robomaster.CommonCommand.$Properties): robomaster.CommonCommand;
         * }}
         */
        CommonCommand.create = function(properties) {
            return new CommonCommand(properties);
        };

        /**
         * Encodes the specified CommonCommand message. Does not implicitly {@link robomaster.CommonCommand.verify|verify} messages.
         * @function encode
         * @memberof robomaster.CommonCommand
         * @static
         * @param {robomaster.CommonCommand.$Properties} message CommonCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonCommand.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.cmdType != null && $Object.hasOwnProperty.call(message, "cmdType"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cmdType);
            if (message.param != null && $Object.hasOwnProperty.call(message, "param"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.param);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CommonCommand message, length delimited. Does not implicitly {@link robomaster.CommonCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.CommonCommand
         * @static
         * @param {robomaster.CommonCommand.$Properties} message CommonCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonCommand.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a CommonCommand message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.CommonCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.CommonCommand & robomaster.CommonCommand.$Shape} CommonCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonCommand.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.CommonCommand();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.cmdType = reader.uint32();
                        message._cmdType = "cmdType";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.param = reader.uint32();
                        message._param = "param";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a CommonCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.CommonCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.CommonCommand & robomaster.CommonCommand.$Shape} CommonCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonCommand.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonCommand message.
         * @function verify
         * @memberof robomaster.CommonCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonCommand.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.cmdType != null && $Object.hasOwnProperty.call(message, "cmdType")) {
                properties._cmdType = 1;
                if (!$util.isInteger(message.cmdType))
                    return "cmdType: integer expected";
            }
            if (message.param != null && $Object.hasOwnProperty.call(message, "param")) {
                properties._param = 1;
                if (!$util.isInteger(message.param))
                    return "param: integer expected";
            }
            return null;
        };

        /**
         * Creates a CommonCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.CommonCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.CommonCommand} CommonCommand
         */
        CommonCommand.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.CommonCommand)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.CommonCommand: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.CommonCommand();
            if (object.cmdType != null)
                message.cmdType = object.cmdType >>> 0;
            if (object.param != null)
                message.param = object.param >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CommonCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.CommonCommand
         * @static
         * @param {robomaster.CommonCommand} message CommonCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonCommand.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.cmdType != null && $Object.hasOwnProperty.call(message, "cmdType"))
                object.cmdType = message.cmdType;
            if (message.param != null && $Object.hasOwnProperty.call(message, "param"))
                object.param = message.param;
            return object;
        };

        /**
         * Converts this CommonCommand to JSON.
         * @function toJSON
         * @memberof robomaster.CommonCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonCommand.prototype.toJSON = function() {
            return CommonCommand.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CommonCommand
         * @function getTypeUrl
         * @memberof robomaster.CommonCommand
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CommonCommand.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.CommonCommand";
        };

        return CommonCommand;
    })();

    robomaster.HeroDeployModeEventCommand = (function() {

        /**
         * Properties of a HeroDeployModeEventCommand.
         * @typedef {Object} robomaster.HeroDeployModeEventCommand.$Properties
         * @property {number|null} [mode] HeroDeployModeEventCommand mode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a HeroDeployModeEventCommand.
         * @memberof robomaster
         * @interface IHeroDeployModeEventCommand
         * @augments robomaster.HeroDeployModeEventCommand.$Properties
         * @deprecated Use robomaster.HeroDeployModeEventCommand.$Properties instead.
         */

        /**
         * Shape of a HeroDeployModeEventCommand.
         * @typedef {robomaster.HeroDeployModeEventCommand.$Properties} robomaster.HeroDeployModeEventCommand.$Shape
         */

        /**
         * Constructs a new HeroDeployModeEventCommand.
         * @memberof robomaster
         * @classdesc Represents a HeroDeployModeEventCommand.
         * @constructor
         * @param {robomaster.HeroDeployModeEventCommand.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const HeroDeployModeEventCommand = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * HeroDeployModeEventCommand mode.
         * @member {number|null|undefined} mode
         * @memberof robomaster.HeroDeployModeEventCommand
         * @instance
         */
        HeroDeployModeEventCommand.prototype.mode = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(HeroDeployModeEventCommand.prototype, "_mode", {
            get: $util.oneOfGetter($oneOfFields = ["mode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new HeroDeployModeEventCommand instance using the specified properties.
         * @function create
         * @memberof robomaster.HeroDeployModeEventCommand
         * @static
         * @param {robomaster.HeroDeployModeEventCommand.$Properties=} [properties] Properties to set
         * @returns {robomaster.HeroDeployModeEventCommand} HeroDeployModeEventCommand instance
         * @type {{
         *   (properties: robomaster.HeroDeployModeEventCommand.$Shape): robomaster.HeroDeployModeEventCommand & robomaster.HeroDeployModeEventCommand.$Shape;
         *   (properties?: robomaster.HeroDeployModeEventCommand.$Properties): robomaster.HeroDeployModeEventCommand;
         * }}
         */
        HeroDeployModeEventCommand.create = function(properties) {
            return new HeroDeployModeEventCommand(properties);
        };

        /**
         * Encodes the specified HeroDeployModeEventCommand message. Does not implicitly {@link robomaster.HeroDeployModeEventCommand.verify|verify} messages.
         * @function encode
         * @memberof robomaster.HeroDeployModeEventCommand
         * @static
         * @param {robomaster.HeroDeployModeEventCommand.$Properties} message HeroDeployModeEventCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroDeployModeEventCommand.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified HeroDeployModeEventCommand message, length delimited. Does not implicitly {@link robomaster.HeroDeployModeEventCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.HeroDeployModeEventCommand
         * @static
         * @param {robomaster.HeroDeployModeEventCommand.$Properties} message HeroDeployModeEventCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroDeployModeEventCommand.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a HeroDeployModeEventCommand message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.HeroDeployModeEventCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.HeroDeployModeEventCommand & robomaster.HeroDeployModeEventCommand.$Shape} HeroDeployModeEventCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroDeployModeEventCommand.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.HeroDeployModeEventCommand();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.mode = reader.uint32();
                        message._mode = "mode";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a HeroDeployModeEventCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.HeroDeployModeEventCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.HeroDeployModeEventCommand & robomaster.HeroDeployModeEventCommand.$Shape} HeroDeployModeEventCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroDeployModeEventCommand.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroDeployModeEventCommand message.
         * @function verify
         * @memberof robomaster.HeroDeployModeEventCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroDeployModeEventCommand.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode")) {
                properties._mode = 1;
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            }
            return null;
        };

        /**
         * Creates a HeroDeployModeEventCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.HeroDeployModeEventCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.HeroDeployModeEventCommand} HeroDeployModeEventCommand
         */
        HeroDeployModeEventCommand.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.HeroDeployModeEventCommand)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.HeroDeployModeEventCommand: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.HeroDeployModeEventCommand();
            if (object.mode != null)
                message.mode = object.mode >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroDeployModeEventCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.HeroDeployModeEventCommand
         * @static
         * @param {robomaster.HeroDeployModeEventCommand} message HeroDeployModeEventCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroDeployModeEventCommand.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode"))
                object.mode = message.mode;
            return object;
        };

        /**
         * Converts this HeroDeployModeEventCommand to JSON.
         * @function toJSON
         * @memberof robomaster.HeroDeployModeEventCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroDeployModeEventCommand.prototype.toJSON = function() {
            return HeroDeployModeEventCommand.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for HeroDeployModeEventCommand
         * @function getTypeUrl
         * @memberof robomaster.HeroDeployModeEventCommand
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        HeroDeployModeEventCommand.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.HeroDeployModeEventCommand";
        };

        return HeroDeployModeEventCommand;
    })();

    robomaster.RuneActivateCommand = (function() {

        /**
         * Properties of a RuneActivateCommand.
         * @typedef {Object} robomaster.RuneActivateCommand.$Properties
         * @property {number|null} [activate] RuneActivateCommand activate
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RuneActivateCommand.
         * @memberof robomaster
         * @interface IRuneActivateCommand
         * @augments robomaster.RuneActivateCommand.$Properties
         * @deprecated Use robomaster.RuneActivateCommand.$Properties instead.
         */

        /**
         * Shape of a RuneActivateCommand.
         * @typedef {robomaster.RuneActivateCommand.$Properties} robomaster.RuneActivateCommand.$Shape
         */

        /**
         * Constructs a new RuneActivateCommand.
         * @memberof robomaster
         * @classdesc Represents a RuneActivateCommand.
         * @constructor
         * @param {robomaster.RuneActivateCommand.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RuneActivateCommand = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RuneActivateCommand activate.
         * @member {number|null|undefined} activate
         * @memberof robomaster.RuneActivateCommand
         * @instance
         */
        RuneActivateCommand.prototype.activate = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RuneActivateCommand.prototype, "_activate", {
            get: $util.oneOfGetter($oneOfFields = ["activate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RuneActivateCommand instance using the specified properties.
         * @function create
         * @memberof robomaster.RuneActivateCommand
         * @static
         * @param {robomaster.RuneActivateCommand.$Properties=} [properties] Properties to set
         * @returns {robomaster.RuneActivateCommand} RuneActivateCommand instance
         * @type {{
         *   (properties: robomaster.RuneActivateCommand.$Shape): robomaster.RuneActivateCommand & robomaster.RuneActivateCommand.$Shape;
         *   (properties?: robomaster.RuneActivateCommand.$Properties): robomaster.RuneActivateCommand;
         * }}
         */
        RuneActivateCommand.create = function(properties) {
            return new RuneActivateCommand(properties);
        };

        /**
         * Encodes the specified RuneActivateCommand message. Does not implicitly {@link robomaster.RuneActivateCommand.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RuneActivateCommand
         * @static
         * @param {robomaster.RuneActivateCommand.$Properties} message RuneActivateCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RuneActivateCommand.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.activate != null && $Object.hasOwnProperty.call(message, "activate"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.activate);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RuneActivateCommand message, length delimited. Does not implicitly {@link robomaster.RuneActivateCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RuneActivateCommand
         * @static
         * @param {robomaster.RuneActivateCommand.$Properties} message RuneActivateCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RuneActivateCommand.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RuneActivateCommand message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RuneActivateCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RuneActivateCommand & robomaster.RuneActivateCommand.$Shape} RuneActivateCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RuneActivateCommand.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RuneActivateCommand();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.activate = reader.uint32();
                        message._activate = "activate";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RuneActivateCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RuneActivateCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RuneActivateCommand & robomaster.RuneActivateCommand.$Shape} RuneActivateCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RuneActivateCommand.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RuneActivateCommand message.
         * @function verify
         * @memberof robomaster.RuneActivateCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RuneActivateCommand.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.activate != null && $Object.hasOwnProperty.call(message, "activate")) {
                properties._activate = 1;
                if (!$util.isInteger(message.activate))
                    return "activate: integer expected";
            }
            return null;
        };

        /**
         * Creates a RuneActivateCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RuneActivateCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RuneActivateCommand} RuneActivateCommand
         */
        RuneActivateCommand.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RuneActivateCommand)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RuneActivateCommand: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RuneActivateCommand();
            if (object.activate != null)
                message.activate = object.activate >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RuneActivateCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RuneActivateCommand
         * @static
         * @param {robomaster.RuneActivateCommand} message RuneActivateCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RuneActivateCommand.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.activate != null && $Object.hasOwnProperty.call(message, "activate"))
                object.activate = message.activate;
            return object;
        };

        /**
         * Converts this RuneActivateCommand to JSON.
         * @function toJSON
         * @memberof robomaster.RuneActivateCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RuneActivateCommand.prototype.toJSON = function() {
            return RuneActivateCommand.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RuneActivateCommand
         * @function getTypeUrl
         * @memberof robomaster.RuneActivateCommand
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RuneActivateCommand.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RuneActivateCommand";
        };

        return RuneActivateCommand;
    })();

    robomaster.DartCommand = (function() {

        /**
         * Properties of a DartCommand.
         * @typedef {Object} robomaster.DartCommand.$Properties
         * @property {number|null} [targetId] DartCommand targetId
         * @property {boolean|null} [open] DartCommand open
         * @property {boolean|null} [launchConfirm] DartCommand launchConfirm
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DartCommand.
         * @memberof robomaster
         * @interface IDartCommand
         * @augments robomaster.DartCommand.$Properties
         * @deprecated Use robomaster.DartCommand.$Properties instead.
         */

        /**
         * Shape of a DartCommand.
         * @typedef {robomaster.DartCommand.$Properties} robomaster.DartCommand.$Shape
         */

        /**
         * Constructs a new DartCommand.
         * @memberof robomaster
         * @classdesc Represents a DartCommand.
         * @constructor
         * @param {robomaster.DartCommand.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const DartCommand = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DartCommand targetId.
         * @member {number|null|undefined} targetId
         * @memberof robomaster.DartCommand
         * @instance
         */
        DartCommand.prototype.targetId = null;

        /**
         * DartCommand open.
         * @member {boolean|null|undefined} open
         * @memberof robomaster.DartCommand
         * @instance
         */
        DartCommand.prototype.open = null;

        /**
         * DartCommand launchConfirm.
         * @member {boolean|null|undefined} launchConfirm
         * @memberof robomaster.DartCommand
         * @instance
         */
        DartCommand.prototype.launchConfirm = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DartCommand.prototype, "_targetId", {
            get: $util.oneOfGetter($oneOfFields = ["targetId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DartCommand.prototype, "_open", {
            get: $util.oneOfGetter($oneOfFields = ["open"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DartCommand.prototype, "_launchConfirm", {
            get: $util.oneOfGetter($oneOfFields = ["launchConfirm"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DartCommand instance using the specified properties.
         * @function create
         * @memberof robomaster.DartCommand
         * @static
         * @param {robomaster.DartCommand.$Properties=} [properties] Properties to set
         * @returns {robomaster.DartCommand} DartCommand instance
         * @type {{
         *   (properties: robomaster.DartCommand.$Shape): robomaster.DartCommand & robomaster.DartCommand.$Shape;
         *   (properties?: robomaster.DartCommand.$Properties): robomaster.DartCommand;
         * }}
         */
        DartCommand.create = function(properties) {
            return new DartCommand(properties);
        };

        /**
         * Encodes the specified DartCommand message. Does not implicitly {@link robomaster.DartCommand.verify|verify} messages.
         * @function encode
         * @memberof robomaster.DartCommand
         * @static
         * @param {robomaster.DartCommand.$Properties} message DartCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DartCommand.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.targetId != null && $Object.hasOwnProperty.call(message, "targetId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.targetId);
            if (message.open != null && $Object.hasOwnProperty.call(message, "open"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.open);
            if (message.launchConfirm != null && $Object.hasOwnProperty.call(message, "launchConfirm"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.launchConfirm);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DartCommand message, length delimited. Does not implicitly {@link robomaster.DartCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.DartCommand
         * @static
         * @param {robomaster.DartCommand.$Properties} message DartCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DartCommand.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a DartCommand message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.DartCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.DartCommand & robomaster.DartCommand.$Shape} DartCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DartCommand.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.DartCommand();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.targetId = reader.uint32();
                        message._targetId = "targetId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.open = reader.bool();
                        message._open = "open";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.launchConfirm = reader.bool();
                        message._launchConfirm = "launchConfirm";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DartCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.DartCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.DartCommand & robomaster.DartCommand.$Shape} DartCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DartCommand.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DartCommand message.
         * @function verify
         * @memberof robomaster.DartCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DartCommand.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.targetId != null && $Object.hasOwnProperty.call(message, "targetId")) {
                properties._targetId = 1;
                if (!$util.isInteger(message.targetId))
                    return "targetId: integer expected";
            }
            if (message.open != null && $Object.hasOwnProperty.call(message, "open")) {
                properties._open = 1;
                if (typeof message.open !== "boolean")
                    return "open: boolean expected";
            }
            if (message.launchConfirm != null && $Object.hasOwnProperty.call(message, "launchConfirm")) {
                properties._launchConfirm = 1;
                if (typeof message.launchConfirm !== "boolean")
                    return "launchConfirm: boolean expected";
            }
            return null;
        };

        /**
         * Creates a DartCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.DartCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.DartCommand} DartCommand
         */
        DartCommand.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.DartCommand)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.DartCommand: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.DartCommand();
            if (object.targetId != null)
                message.targetId = object.targetId >>> 0;
            if (object.open != null)
                message.open = $Boolean(object.open);
            if (object.launchConfirm != null)
                message.launchConfirm = $Boolean(object.launchConfirm);
            return message;
        };

        /**
         * Creates a plain object from a DartCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.DartCommand
         * @static
         * @param {robomaster.DartCommand} message DartCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DartCommand.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.targetId != null && $Object.hasOwnProperty.call(message, "targetId"))
                object.targetId = message.targetId;
            if (message.open != null && $Object.hasOwnProperty.call(message, "open"))
                object.open = message.open;
            if (message.launchConfirm != null && $Object.hasOwnProperty.call(message, "launchConfirm"))
                object.launchConfirm = message.launchConfirm;
            return object;
        };

        /**
         * Converts this DartCommand to JSON.
         * @function toJSON
         * @memberof robomaster.DartCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DartCommand.prototype.toJSON = function() {
            return DartCommand.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DartCommand
         * @function getTypeUrl
         * @memberof robomaster.DartCommand
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DartCommand.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.DartCommand";
        };

        return DartCommand;
    })();

    robomaster.SentryCtrlCommand = (function() {

        /**
         * Properties of a SentryCtrlCommand.
         * @typedef {Object} robomaster.SentryCtrlCommand.$Properties
         * @property {number|null} [commandId] SentryCtrlCommand commandId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SentryCtrlCommand.
         * @memberof robomaster
         * @interface ISentryCtrlCommand
         * @augments robomaster.SentryCtrlCommand.$Properties
         * @deprecated Use robomaster.SentryCtrlCommand.$Properties instead.
         */

        /**
         * Shape of a SentryCtrlCommand.
         * @typedef {robomaster.SentryCtrlCommand.$Properties} robomaster.SentryCtrlCommand.$Shape
         */

        /**
         * Constructs a new SentryCtrlCommand.
         * @memberof robomaster
         * @classdesc Represents a SentryCtrlCommand.
         * @constructor
         * @param {robomaster.SentryCtrlCommand.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SentryCtrlCommand = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SentryCtrlCommand commandId.
         * @member {number|null|undefined} commandId
         * @memberof robomaster.SentryCtrlCommand
         * @instance
         */
        SentryCtrlCommand.prototype.commandId = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SentryCtrlCommand.prototype, "_commandId", {
            get: $util.oneOfGetter($oneOfFields = ["commandId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SentryCtrlCommand instance using the specified properties.
         * @function create
         * @memberof robomaster.SentryCtrlCommand
         * @static
         * @param {robomaster.SentryCtrlCommand.$Properties=} [properties] Properties to set
         * @returns {robomaster.SentryCtrlCommand} SentryCtrlCommand instance
         * @type {{
         *   (properties: robomaster.SentryCtrlCommand.$Shape): robomaster.SentryCtrlCommand & robomaster.SentryCtrlCommand.$Shape;
         *   (properties?: robomaster.SentryCtrlCommand.$Properties): robomaster.SentryCtrlCommand;
         * }}
         */
        SentryCtrlCommand.create = function(properties) {
            return new SentryCtrlCommand(properties);
        };

        /**
         * Encodes the specified SentryCtrlCommand message. Does not implicitly {@link robomaster.SentryCtrlCommand.verify|verify} messages.
         * @function encode
         * @memberof robomaster.SentryCtrlCommand
         * @static
         * @param {robomaster.SentryCtrlCommand.$Properties} message SentryCtrlCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SentryCtrlCommand.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.commandId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SentryCtrlCommand message, length delimited. Does not implicitly {@link robomaster.SentryCtrlCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.SentryCtrlCommand
         * @static
         * @param {robomaster.SentryCtrlCommand.$Properties} message SentryCtrlCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SentryCtrlCommand.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SentryCtrlCommand message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.SentryCtrlCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.SentryCtrlCommand & robomaster.SentryCtrlCommand.$Shape} SentryCtrlCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SentryCtrlCommand.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.SentryCtrlCommand();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.commandId = reader.uint32();
                        message._commandId = "commandId";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a SentryCtrlCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.SentryCtrlCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.SentryCtrlCommand & robomaster.SentryCtrlCommand.$Shape} SentryCtrlCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SentryCtrlCommand.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SentryCtrlCommand message.
         * @function verify
         * @memberof robomaster.SentryCtrlCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SentryCtrlCommand.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId")) {
                properties._commandId = 1;
                if (!$util.isInteger(message.commandId))
                    return "commandId: integer expected";
            }
            return null;
        };

        /**
         * Creates a SentryCtrlCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.SentryCtrlCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.SentryCtrlCommand} SentryCtrlCommand
         */
        SentryCtrlCommand.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.SentryCtrlCommand)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.SentryCtrlCommand: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.SentryCtrlCommand();
            if (object.commandId != null)
                message.commandId = object.commandId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SentryCtrlCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.SentryCtrlCommand
         * @static
         * @param {robomaster.SentryCtrlCommand} message SentryCtrlCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SentryCtrlCommand.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId"))
                object.commandId = message.commandId;
            return object;
        };

        /**
         * Converts this SentryCtrlCommand to JSON.
         * @function toJSON
         * @memberof robomaster.SentryCtrlCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SentryCtrlCommand.prototype.toJSON = function() {
            return SentryCtrlCommand.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SentryCtrlCommand
         * @function getTypeUrl
         * @memberof robomaster.SentryCtrlCommand
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SentryCtrlCommand.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.SentryCtrlCommand";
        };

        return SentryCtrlCommand;
    })();

    robomaster.AirSupportCommand = (function() {

        /**
         * Properties of an AirSupportCommand.
         * @typedef {Object} robomaster.AirSupportCommand.$Properties
         * @property {number|null} [commandId] AirSupportCommand commandId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AirSupportCommand.
         * @memberof robomaster
         * @interface IAirSupportCommand
         * @augments robomaster.AirSupportCommand.$Properties
         * @deprecated Use robomaster.AirSupportCommand.$Properties instead.
         */

        /**
         * Shape of an AirSupportCommand.
         * @typedef {robomaster.AirSupportCommand.$Properties} robomaster.AirSupportCommand.$Shape
         */

        /**
         * Constructs a new AirSupportCommand.
         * @memberof robomaster
         * @classdesc Represents an AirSupportCommand.
         * @constructor
         * @param {robomaster.AirSupportCommand.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AirSupportCommand = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AirSupportCommand commandId.
         * @member {number|null|undefined} commandId
         * @memberof robomaster.AirSupportCommand
         * @instance
         */
        AirSupportCommand.prototype.commandId = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AirSupportCommand.prototype, "_commandId", {
            get: $util.oneOfGetter($oneOfFields = ["commandId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AirSupportCommand instance using the specified properties.
         * @function create
         * @memberof robomaster.AirSupportCommand
         * @static
         * @param {robomaster.AirSupportCommand.$Properties=} [properties] Properties to set
         * @returns {robomaster.AirSupportCommand} AirSupportCommand instance
         * @type {{
         *   (properties: robomaster.AirSupportCommand.$Shape): robomaster.AirSupportCommand & robomaster.AirSupportCommand.$Shape;
         *   (properties?: robomaster.AirSupportCommand.$Properties): robomaster.AirSupportCommand;
         * }}
         */
        AirSupportCommand.create = function(properties) {
            return new AirSupportCommand(properties);
        };

        /**
         * Encodes the specified AirSupportCommand message. Does not implicitly {@link robomaster.AirSupportCommand.verify|verify} messages.
         * @function encode
         * @memberof robomaster.AirSupportCommand
         * @static
         * @param {robomaster.AirSupportCommand.$Properties} message AirSupportCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AirSupportCommand.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.commandId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AirSupportCommand message, length delimited. Does not implicitly {@link robomaster.AirSupportCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.AirSupportCommand
         * @static
         * @param {robomaster.AirSupportCommand.$Properties} message AirSupportCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AirSupportCommand.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an AirSupportCommand message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.AirSupportCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.AirSupportCommand & robomaster.AirSupportCommand.$Shape} AirSupportCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AirSupportCommand.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.AirSupportCommand();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.commandId = reader.uint32();
                        message._commandId = "commandId";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AirSupportCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.AirSupportCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.AirSupportCommand & robomaster.AirSupportCommand.$Shape} AirSupportCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AirSupportCommand.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AirSupportCommand message.
         * @function verify
         * @memberof robomaster.AirSupportCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AirSupportCommand.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId")) {
                properties._commandId = 1;
                if (!$util.isInteger(message.commandId))
                    return "commandId: integer expected";
            }
            return null;
        };

        /**
         * Creates an AirSupportCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.AirSupportCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.AirSupportCommand} AirSupportCommand
         */
        AirSupportCommand.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.AirSupportCommand)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.AirSupportCommand: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.AirSupportCommand();
            if (object.commandId != null)
                message.commandId = object.commandId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AirSupportCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.AirSupportCommand
         * @static
         * @param {robomaster.AirSupportCommand} message AirSupportCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AirSupportCommand.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId"))
                object.commandId = message.commandId;
            return object;
        };

        /**
         * Converts this AirSupportCommand to JSON.
         * @function toJSON
         * @memberof robomaster.AirSupportCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AirSupportCommand.prototype.toJSON = function() {
            return AirSupportCommand.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AirSupportCommand
         * @function getTypeUrl
         * @memberof robomaster.AirSupportCommand
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AirSupportCommand.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.AirSupportCommand";
        };

        return AirSupportCommand;
    })();

    robomaster.GameStatus = (function() {

        /**
         * Properties of a GameStatus.
         * @typedef {Object} robomaster.GameStatus.$Properties
         * @property {number|null} [currentRound] GameStatus currentRound
         * @property {number|null} [totalRounds] GameStatus totalRounds
         * @property {number|null} [redScore] GameStatus redScore
         * @property {number|null} [blueScore] GameStatus blueScore
         * @property {number|null} [currentStage] GameStatus currentStage
         * @property {number|null} [stageCountdownSec] GameStatus stageCountdownSec
         * @property {number|null} [stageElapsedSec] GameStatus stageElapsedSec
         * @property {boolean|null} [isPaused] GameStatus isPaused
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GameStatus.
         * @memberof robomaster
         * @interface IGameStatus
         * @augments robomaster.GameStatus.$Properties
         * @deprecated Use robomaster.GameStatus.$Properties instead.
         */

        /**
         * Shape of a GameStatus.
         * @typedef {robomaster.GameStatus.$Properties} robomaster.GameStatus.$Shape
         */

        /**
         * Constructs a new GameStatus.
         * @memberof robomaster
         * @classdesc Represents a GameStatus.
         * @constructor
         * @param {robomaster.GameStatus.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GameStatus = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GameStatus currentRound.
         * @member {number|null|undefined} currentRound
         * @memberof robomaster.GameStatus
         * @instance
         */
        GameStatus.prototype.currentRound = null;

        /**
         * GameStatus totalRounds.
         * @member {number|null|undefined} totalRounds
         * @memberof robomaster.GameStatus
         * @instance
         */
        GameStatus.prototype.totalRounds = null;

        /**
         * GameStatus redScore.
         * @member {number|null|undefined} redScore
         * @memberof robomaster.GameStatus
         * @instance
         */
        GameStatus.prototype.redScore = null;

        /**
         * GameStatus blueScore.
         * @member {number|null|undefined} blueScore
         * @memberof robomaster.GameStatus
         * @instance
         */
        GameStatus.prototype.blueScore = null;

        /**
         * GameStatus currentStage.
         * @member {number|null|undefined} currentStage
         * @memberof robomaster.GameStatus
         * @instance
         */
        GameStatus.prototype.currentStage = null;

        /**
         * GameStatus stageCountdownSec.
         * @member {number|null|undefined} stageCountdownSec
         * @memberof robomaster.GameStatus
         * @instance
         */
        GameStatus.prototype.stageCountdownSec = null;

        /**
         * GameStatus stageElapsedSec.
         * @member {number|null|undefined} stageElapsedSec
         * @memberof robomaster.GameStatus
         * @instance
         */
        GameStatus.prototype.stageElapsedSec = null;

        /**
         * GameStatus isPaused.
         * @member {boolean|null|undefined} isPaused
         * @memberof robomaster.GameStatus
         * @instance
         */
        GameStatus.prototype.isPaused = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GameStatus.prototype, "_currentRound", {
            get: $util.oneOfGetter($oneOfFields = ["currentRound"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GameStatus.prototype, "_totalRounds", {
            get: $util.oneOfGetter($oneOfFields = ["totalRounds"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GameStatus.prototype, "_redScore", {
            get: $util.oneOfGetter($oneOfFields = ["redScore"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GameStatus.prototype, "_blueScore", {
            get: $util.oneOfGetter($oneOfFields = ["blueScore"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GameStatus.prototype, "_currentStage", {
            get: $util.oneOfGetter($oneOfFields = ["currentStage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GameStatus.prototype, "_stageCountdownSec", {
            get: $util.oneOfGetter($oneOfFields = ["stageCountdownSec"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GameStatus.prototype, "_stageElapsedSec", {
            get: $util.oneOfGetter($oneOfFields = ["stageElapsedSec"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GameStatus.prototype, "_isPaused", {
            get: $util.oneOfGetter($oneOfFields = ["isPaused"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GameStatus instance using the specified properties.
         * @function create
         * @memberof robomaster.GameStatus
         * @static
         * @param {robomaster.GameStatus.$Properties=} [properties] Properties to set
         * @returns {robomaster.GameStatus} GameStatus instance
         * @type {{
         *   (properties: robomaster.GameStatus.$Shape): robomaster.GameStatus & robomaster.GameStatus.$Shape;
         *   (properties?: robomaster.GameStatus.$Properties): robomaster.GameStatus;
         * }}
         */
        GameStatus.create = function(properties) {
            return new GameStatus(properties);
        };

        /**
         * Encodes the specified GameStatus message. Does not implicitly {@link robomaster.GameStatus.verify|verify} messages.
         * @function encode
         * @memberof robomaster.GameStatus
         * @static
         * @param {robomaster.GameStatus.$Properties} message GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatus.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.currentRound != null && $Object.hasOwnProperty.call(message, "currentRound"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.currentRound);
            if (message.totalRounds != null && $Object.hasOwnProperty.call(message, "totalRounds"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.totalRounds);
            if (message.redScore != null && $Object.hasOwnProperty.call(message, "redScore"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.redScore);
            if (message.blueScore != null && $Object.hasOwnProperty.call(message, "blueScore"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.blueScore);
            if (message.currentStage != null && $Object.hasOwnProperty.call(message, "currentStage"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.currentStage);
            if (message.stageCountdownSec != null && $Object.hasOwnProperty.call(message, "stageCountdownSec"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.stageCountdownSec);
            if (message.stageElapsedSec != null && $Object.hasOwnProperty.call(message, "stageElapsedSec"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.stageElapsedSec);
            if (message.isPaused != null && $Object.hasOwnProperty.call(message, "isPaused"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isPaused);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GameStatus message, length delimited. Does not implicitly {@link robomaster.GameStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.GameStatus
         * @static
         * @param {robomaster.GameStatus.$Properties} message GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatus.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GameStatus message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.GameStatus & robomaster.GameStatus.$Shape} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatus.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.GameStatus();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.currentRound = reader.uint32();
                        message._currentRound = "currentRound";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.totalRounds = reader.uint32();
                        message._totalRounds = "totalRounds";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.redScore = reader.uint32();
                        message._redScore = "redScore";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.blueScore = reader.uint32();
                        message._blueScore = "blueScore";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.currentStage = reader.uint32();
                        message._currentStage = "currentStage";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.stageCountdownSec = reader.int32();
                        message._stageCountdownSec = "stageCountdownSec";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.stageElapsedSec = reader.int32();
                        message._stageElapsedSec = "stageElapsedSec";
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        message.isPaused = reader.bool();
                        message._isPaused = "isPaused";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GameStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.GameStatus & robomaster.GameStatus.$Shape} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatus.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStatus message.
         * @function verify
         * @memberof robomaster.GameStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStatus.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.currentRound != null && $Object.hasOwnProperty.call(message, "currentRound")) {
                properties._currentRound = 1;
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            }
            if (message.totalRounds != null && $Object.hasOwnProperty.call(message, "totalRounds")) {
                properties._totalRounds = 1;
                if (!$util.isInteger(message.totalRounds))
                    return "totalRounds: integer expected";
            }
            if (message.redScore != null && $Object.hasOwnProperty.call(message, "redScore")) {
                properties._redScore = 1;
                if (!$util.isInteger(message.redScore))
                    return "redScore: integer expected";
            }
            if (message.blueScore != null && $Object.hasOwnProperty.call(message, "blueScore")) {
                properties._blueScore = 1;
                if (!$util.isInteger(message.blueScore))
                    return "blueScore: integer expected";
            }
            if (message.currentStage != null && $Object.hasOwnProperty.call(message, "currentStage")) {
                properties._currentStage = 1;
                if (!$util.isInteger(message.currentStage))
                    return "currentStage: integer expected";
            }
            if (message.stageCountdownSec != null && $Object.hasOwnProperty.call(message, "stageCountdownSec")) {
                properties._stageCountdownSec = 1;
                if (!$util.isInteger(message.stageCountdownSec))
                    return "stageCountdownSec: integer expected";
            }
            if (message.stageElapsedSec != null && $Object.hasOwnProperty.call(message, "stageElapsedSec")) {
                properties._stageElapsedSec = 1;
                if (!$util.isInteger(message.stageElapsedSec))
                    return "stageElapsedSec: integer expected";
            }
            if (message.isPaused != null && $Object.hasOwnProperty.call(message, "isPaused")) {
                properties._isPaused = 1;
                if (typeof message.isPaused !== "boolean")
                    return "isPaused: boolean expected";
            }
            return null;
        };

        /**
         * Creates a GameStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.GameStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.GameStatus} GameStatus
         */
        GameStatus.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.GameStatus)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.GameStatus: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.GameStatus();
            if (object.currentRound != null)
                message.currentRound = object.currentRound >>> 0;
            if (object.totalRounds != null)
                message.totalRounds = object.totalRounds >>> 0;
            if (object.redScore != null)
                message.redScore = object.redScore >>> 0;
            if (object.blueScore != null)
                message.blueScore = object.blueScore >>> 0;
            if (object.currentStage != null)
                message.currentStage = object.currentStage >>> 0;
            if (object.stageCountdownSec != null)
                message.stageCountdownSec = object.stageCountdownSec | 0;
            if (object.stageElapsedSec != null)
                message.stageElapsedSec = object.stageElapsedSec | 0;
            if (object.isPaused != null)
                message.isPaused = $Boolean(object.isPaused);
            return message;
        };

        /**
         * Creates a plain object from a GameStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.GameStatus
         * @static
         * @param {robomaster.GameStatus} message GameStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStatus.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.currentRound != null && $Object.hasOwnProperty.call(message, "currentRound"))
                object.currentRound = message.currentRound;
            if (message.totalRounds != null && $Object.hasOwnProperty.call(message, "totalRounds"))
                object.totalRounds = message.totalRounds;
            if (message.redScore != null && $Object.hasOwnProperty.call(message, "redScore"))
                object.redScore = message.redScore;
            if (message.blueScore != null && $Object.hasOwnProperty.call(message, "blueScore"))
                object.blueScore = message.blueScore;
            if (message.currentStage != null && $Object.hasOwnProperty.call(message, "currentStage"))
                object.currentStage = message.currentStage;
            if (message.stageCountdownSec != null && $Object.hasOwnProperty.call(message, "stageCountdownSec"))
                object.stageCountdownSec = message.stageCountdownSec;
            if (message.stageElapsedSec != null && $Object.hasOwnProperty.call(message, "stageElapsedSec"))
                object.stageElapsedSec = message.stageElapsedSec;
            if (message.isPaused != null && $Object.hasOwnProperty.call(message, "isPaused"))
                object.isPaused = message.isPaused;
            return object;
        };

        /**
         * Converts this GameStatus to JSON.
         * @function toJSON
         * @memberof robomaster.GameStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStatus.prototype.toJSON = function() {
            return GameStatus.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for GameStatus
         * @function getTypeUrl
         * @memberof robomaster.GameStatus
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GameStatus.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.GameStatus";
        };

        return GameStatus;
    })();

    robomaster.GlobalUnitStatus = (function() {

        /**
         * Properties of a GlobalUnitStatus.
         * @typedef {Object} robomaster.GlobalUnitStatus.$Properties
         * @property {number|null} [baseHealth] GlobalUnitStatus baseHealth
         * @property {number|null} [baseStatus] GlobalUnitStatus baseStatus
         * @property {number|null} [baseShield] GlobalUnitStatus baseShield
         * @property {number|null} [outpostHealth] GlobalUnitStatus outpostHealth
         * @property {number|null} [outpostStatus] GlobalUnitStatus outpostStatus
         * @property {number|null} [enemyBaseHealth] GlobalUnitStatus enemyBaseHealth
         * @property {number|null} [enemyBaseStatus] GlobalUnitStatus enemyBaseStatus
         * @property {number|null} [enemyBaseShield] GlobalUnitStatus enemyBaseShield
         * @property {number|null} [enemyOutpostHealth] GlobalUnitStatus enemyOutpostHealth
         * @property {number|null} [enemyOutpostStatus] GlobalUnitStatus enemyOutpostStatus
         * @property {Array.<number>|null} [robotHealth] GlobalUnitStatus robotHealth
         * @property {Array.<number>|null} [robotBullets] GlobalUnitStatus robotBullets
         * @property {number|null} [totalDamageAlly] GlobalUnitStatus totalDamageAlly
         * @property {number|null} [totalDamageEnemy] GlobalUnitStatus totalDamageEnemy
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GlobalUnitStatus.
         * @memberof robomaster
         * @interface IGlobalUnitStatus
         * @augments robomaster.GlobalUnitStatus.$Properties
         * @deprecated Use robomaster.GlobalUnitStatus.$Properties instead.
         */

        /**
         * Shape of a GlobalUnitStatus.
         * @typedef {robomaster.GlobalUnitStatus.$Properties} robomaster.GlobalUnitStatus.$Shape
         */

        /**
         * Constructs a new GlobalUnitStatus.
         * @memberof robomaster
         * @classdesc Represents a GlobalUnitStatus.
         * @constructor
         * @param {robomaster.GlobalUnitStatus.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GlobalUnitStatus = function (properties) {
            this.robotHealth = [];
            this.robotBullets = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GlobalUnitStatus baseHealth.
         * @member {number|null|undefined} baseHealth
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.baseHealth = null;

        /**
         * GlobalUnitStatus baseStatus.
         * @member {number|null|undefined} baseStatus
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.baseStatus = null;

        /**
         * GlobalUnitStatus baseShield.
         * @member {number|null|undefined} baseShield
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.baseShield = null;

        /**
         * GlobalUnitStatus outpostHealth.
         * @member {number|null|undefined} outpostHealth
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.outpostHealth = null;

        /**
         * GlobalUnitStatus outpostStatus.
         * @member {number|null|undefined} outpostStatus
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.outpostStatus = null;

        /**
         * GlobalUnitStatus enemyBaseHealth.
         * @member {number|null|undefined} enemyBaseHealth
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.enemyBaseHealth = null;

        /**
         * GlobalUnitStatus enemyBaseStatus.
         * @member {number|null|undefined} enemyBaseStatus
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.enemyBaseStatus = null;

        /**
         * GlobalUnitStatus enemyBaseShield.
         * @member {number|null|undefined} enemyBaseShield
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.enemyBaseShield = null;

        /**
         * GlobalUnitStatus enemyOutpostHealth.
         * @member {number|null|undefined} enemyOutpostHealth
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.enemyOutpostHealth = null;

        /**
         * GlobalUnitStatus enemyOutpostStatus.
         * @member {number|null|undefined} enemyOutpostStatus
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.enemyOutpostStatus = null;

        /**
         * GlobalUnitStatus robotHealth.
         * @member {Array.<number>} robotHealth
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.robotHealth = $util.emptyArray;

        /**
         * GlobalUnitStatus robotBullets.
         * @member {Array.<number>} robotBullets
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.robotBullets = $util.emptyArray;

        /**
         * GlobalUnitStatus totalDamageAlly.
         * @member {number|null|undefined} totalDamageAlly
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.totalDamageAlly = null;

        /**
         * GlobalUnitStatus totalDamageEnemy.
         * @member {number|null|undefined} totalDamageEnemy
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         */
        GlobalUnitStatus.prototype.totalDamageEnemy = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_baseHealth", {
            get: $util.oneOfGetter($oneOfFields = ["baseHealth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_baseStatus", {
            get: $util.oneOfGetter($oneOfFields = ["baseStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_baseShield", {
            get: $util.oneOfGetter($oneOfFields = ["baseShield"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_outpostHealth", {
            get: $util.oneOfGetter($oneOfFields = ["outpostHealth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_outpostStatus", {
            get: $util.oneOfGetter($oneOfFields = ["outpostStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_enemyBaseHealth", {
            get: $util.oneOfGetter($oneOfFields = ["enemyBaseHealth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_enemyBaseStatus", {
            get: $util.oneOfGetter($oneOfFields = ["enemyBaseStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_enemyBaseShield", {
            get: $util.oneOfGetter($oneOfFields = ["enemyBaseShield"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_enemyOutpostHealth", {
            get: $util.oneOfGetter($oneOfFields = ["enemyOutpostHealth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_enemyOutpostStatus", {
            get: $util.oneOfGetter($oneOfFields = ["enemyOutpostStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_totalDamageAlly", {
            get: $util.oneOfGetter($oneOfFields = ["totalDamageAlly"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalUnitStatus.prototype, "_totalDamageEnemy", {
            get: $util.oneOfGetter($oneOfFields = ["totalDamageEnemy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GlobalUnitStatus instance using the specified properties.
         * @function create
         * @memberof robomaster.GlobalUnitStatus
         * @static
         * @param {robomaster.GlobalUnitStatus.$Properties=} [properties] Properties to set
         * @returns {robomaster.GlobalUnitStatus} GlobalUnitStatus instance
         * @type {{
         *   (properties: robomaster.GlobalUnitStatus.$Shape): robomaster.GlobalUnitStatus & robomaster.GlobalUnitStatus.$Shape;
         *   (properties?: robomaster.GlobalUnitStatus.$Properties): robomaster.GlobalUnitStatus;
         * }}
         */
        GlobalUnitStatus.create = function(properties) {
            return new GlobalUnitStatus(properties);
        };

        /**
         * Encodes the specified GlobalUnitStatus message. Does not implicitly {@link robomaster.GlobalUnitStatus.verify|verify} messages.
         * @function encode
         * @memberof robomaster.GlobalUnitStatus
         * @static
         * @param {robomaster.GlobalUnitStatus.$Properties} message GlobalUnitStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalUnitStatus.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.baseHealth != null && $Object.hasOwnProperty.call(message, "baseHealth"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.baseHealth);
            if (message.baseStatus != null && $Object.hasOwnProperty.call(message, "baseStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.baseStatus);
            if (message.baseShield != null && $Object.hasOwnProperty.call(message, "baseShield"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.baseShield);
            if (message.outpostHealth != null && $Object.hasOwnProperty.call(message, "outpostHealth"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.outpostHealth);
            if (message.outpostStatus != null && $Object.hasOwnProperty.call(message, "outpostStatus"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.outpostStatus);
            if (message.enemyBaseHealth != null && $Object.hasOwnProperty.call(message, "enemyBaseHealth"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.enemyBaseHealth);
            if (message.enemyBaseStatus != null && $Object.hasOwnProperty.call(message, "enemyBaseStatus"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.enemyBaseStatus);
            if (message.enemyBaseShield != null && $Object.hasOwnProperty.call(message, "enemyBaseShield"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.enemyBaseShield);
            if (message.enemyOutpostHealth != null && $Object.hasOwnProperty.call(message, "enemyOutpostHealth"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.enemyOutpostHealth);
            if (message.enemyOutpostStatus != null && $Object.hasOwnProperty.call(message, "enemyOutpostStatus"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.enemyOutpostStatus);
            if (message.robotHealth != null && message.robotHealth.length)
                writer.uint32(/* id 11, wireType 2 =*/90).uint32s(message.robotHealth);
            if (message.robotBullets != null && message.robotBullets.length)
                writer.uint32(/* id 12, wireType 2 =*/98).int32s(message.robotBullets);
            if (message.totalDamageAlly != null && $Object.hasOwnProperty.call(message, "totalDamageAlly"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.totalDamageAlly);
            if (message.totalDamageEnemy != null && $Object.hasOwnProperty.call(message, "totalDamageEnemy"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.totalDamageEnemy);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GlobalUnitStatus message, length delimited. Does not implicitly {@link robomaster.GlobalUnitStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.GlobalUnitStatus
         * @static
         * @param {robomaster.GlobalUnitStatus.$Properties} message GlobalUnitStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalUnitStatus.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GlobalUnitStatus message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.GlobalUnitStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.GlobalUnitStatus & robomaster.GlobalUnitStatus.$Shape} GlobalUnitStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalUnitStatus.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.GlobalUnitStatus();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.baseHealth = reader.uint32();
                        message._baseHealth = "baseHealth";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.baseStatus = reader.uint32();
                        message._baseStatus = "baseStatus";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.baseShield = reader.uint32();
                        message._baseShield = "baseShield";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.outpostHealth = reader.uint32();
                        message._outpostHealth = "outpostHealth";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.outpostStatus = reader.uint32();
                        message._outpostStatus = "outpostStatus";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.enemyBaseHealth = reader.uint32();
                        message._enemyBaseHealth = "enemyBaseHealth";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.enemyBaseStatus = reader.uint32();
                        message._enemyBaseStatus = "enemyBaseStatus";
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        message.enemyBaseShield = reader.uint32();
                        message._enemyBaseShield = "enemyBaseShield";
                        continue;
                    }
                case 9: {
                        if (wireType !== 0)
                            break;
                        message.enemyOutpostHealth = reader.uint32();
                        message._enemyOutpostHealth = "enemyOutpostHealth";
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        message.enemyOutpostStatus = reader.uint32();
                        message._enemyOutpostStatus = "enemyOutpostStatus";
                        continue;
                    }
                case 11: {
                        if (wireType === 2) {
                            if (!(message.robotHealth && message.robotHealth.length))
                                message.robotHealth = [];
                            reader.uint32s(message.robotHealth);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.robotHealth && message.robotHealth.length))
                            message.robotHealth = [];
                        message.robotHealth.push(reader.uint32());
                        continue;
                    }
                case 12: {
                        if (wireType === 2) {
                            if (!(message.robotBullets && message.robotBullets.length))
                                message.robotBullets = [];
                            reader.int32s(message.robotBullets);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.robotBullets && message.robotBullets.length))
                            message.robotBullets = [];
                        message.robotBullets.push(reader.int32());
                        continue;
                    }
                case 13: {
                        if (wireType !== 0)
                            break;
                        message.totalDamageAlly = reader.uint32();
                        message._totalDamageAlly = "totalDamageAlly";
                        continue;
                    }
                case 14: {
                        if (wireType !== 0)
                            break;
                        message.totalDamageEnemy = reader.uint32();
                        message._totalDamageEnemy = "totalDamageEnemy";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GlobalUnitStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.GlobalUnitStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.GlobalUnitStatus & robomaster.GlobalUnitStatus.$Shape} GlobalUnitStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalUnitStatus.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GlobalUnitStatus message.
         * @function verify
         * @memberof robomaster.GlobalUnitStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GlobalUnitStatus.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.baseHealth != null && $Object.hasOwnProperty.call(message, "baseHealth")) {
                properties._baseHealth = 1;
                if (!$util.isInteger(message.baseHealth))
                    return "baseHealth: integer expected";
            }
            if (message.baseStatus != null && $Object.hasOwnProperty.call(message, "baseStatus")) {
                properties._baseStatus = 1;
                if (!$util.isInteger(message.baseStatus))
                    return "baseStatus: integer expected";
            }
            if (message.baseShield != null && $Object.hasOwnProperty.call(message, "baseShield")) {
                properties._baseShield = 1;
                if (!$util.isInteger(message.baseShield))
                    return "baseShield: integer expected";
            }
            if (message.outpostHealth != null && $Object.hasOwnProperty.call(message, "outpostHealth")) {
                properties._outpostHealth = 1;
                if (!$util.isInteger(message.outpostHealth))
                    return "outpostHealth: integer expected";
            }
            if (message.outpostStatus != null && $Object.hasOwnProperty.call(message, "outpostStatus")) {
                properties._outpostStatus = 1;
                if (!$util.isInteger(message.outpostStatus))
                    return "outpostStatus: integer expected";
            }
            if (message.enemyBaseHealth != null && $Object.hasOwnProperty.call(message, "enemyBaseHealth")) {
                properties._enemyBaseHealth = 1;
                if (!$util.isInteger(message.enemyBaseHealth))
                    return "enemyBaseHealth: integer expected";
            }
            if (message.enemyBaseStatus != null && $Object.hasOwnProperty.call(message, "enemyBaseStatus")) {
                properties._enemyBaseStatus = 1;
                if (!$util.isInteger(message.enemyBaseStatus))
                    return "enemyBaseStatus: integer expected";
            }
            if (message.enemyBaseShield != null && $Object.hasOwnProperty.call(message, "enemyBaseShield")) {
                properties._enemyBaseShield = 1;
                if (!$util.isInteger(message.enemyBaseShield))
                    return "enemyBaseShield: integer expected";
            }
            if (message.enemyOutpostHealth != null && $Object.hasOwnProperty.call(message, "enemyOutpostHealth")) {
                properties._enemyOutpostHealth = 1;
                if (!$util.isInteger(message.enemyOutpostHealth))
                    return "enemyOutpostHealth: integer expected";
            }
            if (message.enemyOutpostStatus != null && $Object.hasOwnProperty.call(message, "enemyOutpostStatus")) {
                properties._enemyOutpostStatus = 1;
                if (!$util.isInteger(message.enemyOutpostStatus))
                    return "enemyOutpostStatus: integer expected";
            }
            if (message.robotHealth != null && $Object.hasOwnProperty.call(message, "robotHealth")) {
                if (!$Array.isArray(message.robotHealth))
                    return "robotHealth: array expected";
                for (let i = 0; i < message.robotHealth.length; ++i)
                    if (!$util.isInteger(message.robotHealth[i]))
                        return "robotHealth: integer[] expected";
            }
            if (message.robotBullets != null && $Object.hasOwnProperty.call(message, "robotBullets")) {
                if (!$Array.isArray(message.robotBullets))
                    return "robotBullets: array expected";
                for (let i = 0; i < message.robotBullets.length; ++i)
                    if (!$util.isInteger(message.robotBullets[i]))
                        return "robotBullets: integer[] expected";
            }
            if (message.totalDamageAlly != null && $Object.hasOwnProperty.call(message, "totalDamageAlly")) {
                properties._totalDamageAlly = 1;
                if (!$util.isInteger(message.totalDamageAlly))
                    return "totalDamageAlly: integer expected";
            }
            if (message.totalDamageEnemy != null && $Object.hasOwnProperty.call(message, "totalDamageEnemy")) {
                properties._totalDamageEnemy = 1;
                if (!$util.isInteger(message.totalDamageEnemy))
                    return "totalDamageEnemy: integer expected";
            }
            return null;
        };

        /**
         * Creates a GlobalUnitStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.GlobalUnitStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.GlobalUnitStatus} GlobalUnitStatus
         */
        GlobalUnitStatus.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.GlobalUnitStatus)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.GlobalUnitStatus: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.GlobalUnitStatus();
            if (object.baseHealth != null)
                message.baseHealth = object.baseHealth >>> 0;
            if (object.baseStatus != null)
                message.baseStatus = object.baseStatus >>> 0;
            if (object.baseShield != null)
                message.baseShield = object.baseShield >>> 0;
            if (object.outpostHealth != null)
                message.outpostHealth = object.outpostHealth >>> 0;
            if (object.outpostStatus != null)
                message.outpostStatus = object.outpostStatus >>> 0;
            if (object.enemyBaseHealth != null)
                message.enemyBaseHealth = object.enemyBaseHealth >>> 0;
            if (object.enemyBaseStatus != null)
                message.enemyBaseStatus = object.enemyBaseStatus >>> 0;
            if (object.enemyBaseShield != null)
                message.enemyBaseShield = object.enemyBaseShield >>> 0;
            if (object.enemyOutpostHealth != null)
                message.enemyOutpostHealth = object.enemyOutpostHealth >>> 0;
            if (object.enemyOutpostStatus != null)
                message.enemyOutpostStatus = object.enemyOutpostStatus >>> 0;
            if (object.robotHealth) {
                if (!$Array.isArray(object.robotHealth))
                    throw $TypeError(".robomaster.GlobalUnitStatus.robotHealth: array expected");
                message.robotHealth = $Array(object.robotHealth.length);
                for (let i = 0; i < object.robotHealth.length; ++i)
                    message.robotHealth[i] = object.robotHealth[i] >>> 0;
            }
            if (object.robotBullets) {
                if (!$Array.isArray(object.robotBullets))
                    throw $TypeError(".robomaster.GlobalUnitStatus.robotBullets: array expected");
                message.robotBullets = $Array(object.robotBullets.length);
                for (let i = 0; i < object.robotBullets.length; ++i)
                    message.robotBullets[i] = object.robotBullets[i] | 0;
            }
            if (object.totalDamageAlly != null)
                message.totalDamageAlly = object.totalDamageAlly >>> 0;
            if (object.totalDamageEnemy != null)
                message.totalDamageEnemy = object.totalDamageEnemy >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GlobalUnitStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.GlobalUnitStatus
         * @static
         * @param {robomaster.GlobalUnitStatus} message GlobalUnitStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GlobalUnitStatus.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults) {
                object.robotHealth = [];
                object.robotBullets = [];
            }
            if (message.baseHealth != null && $Object.hasOwnProperty.call(message, "baseHealth"))
                object.baseHealth = message.baseHealth;
            if (message.baseStatus != null && $Object.hasOwnProperty.call(message, "baseStatus"))
                object.baseStatus = message.baseStatus;
            if (message.baseShield != null && $Object.hasOwnProperty.call(message, "baseShield"))
                object.baseShield = message.baseShield;
            if (message.outpostHealth != null && $Object.hasOwnProperty.call(message, "outpostHealth"))
                object.outpostHealth = message.outpostHealth;
            if (message.outpostStatus != null && $Object.hasOwnProperty.call(message, "outpostStatus"))
                object.outpostStatus = message.outpostStatus;
            if (message.enemyBaseHealth != null && $Object.hasOwnProperty.call(message, "enemyBaseHealth"))
                object.enemyBaseHealth = message.enemyBaseHealth;
            if (message.enemyBaseStatus != null && $Object.hasOwnProperty.call(message, "enemyBaseStatus"))
                object.enemyBaseStatus = message.enemyBaseStatus;
            if (message.enemyBaseShield != null && $Object.hasOwnProperty.call(message, "enemyBaseShield"))
                object.enemyBaseShield = message.enemyBaseShield;
            if (message.enemyOutpostHealth != null && $Object.hasOwnProperty.call(message, "enemyOutpostHealth"))
                object.enemyOutpostHealth = message.enemyOutpostHealth;
            if (message.enemyOutpostStatus != null && $Object.hasOwnProperty.call(message, "enemyOutpostStatus"))
                object.enemyOutpostStatus = message.enemyOutpostStatus;
            if (message.robotHealth && message.robotHealth.length) {
                object.robotHealth = $Array(message.robotHealth.length);
                for (let j = 0; j < message.robotHealth.length; ++j)
                    object.robotHealth[j] = message.robotHealth[j];
            }
            if (message.robotBullets && message.robotBullets.length) {
                object.robotBullets = $Array(message.robotBullets.length);
                for (let j = 0; j < message.robotBullets.length; ++j)
                    object.robotBullets[j] = message.robotBullets[j];
            }
            if (message.totalDamageAlly != null && $Object.hasOwnProperty.call(message, "totalDamageAlly"))
                object.totalDamageAlly = message.totalDamageAlly;
            if (message.totalDamageEnemy != null && $Object.hasOwnProperty.call(message, "totalDamageEnemy"))
                object.totalDamageEnemy = message.totalDamageEnemy;
            return object;
        };

        /**
         * Converts this GlobalUnitStatus to JSON.
         * @function toJSON
         * @memberof robomaster.GlobalUnitStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GlobalUnitStatus.prototype.toJSON = function() {
            return GlobalUnitStatus.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for GlobalUnitStatus
         * @function getTypeUrl
         * @memberof robomaster.GlobalUnitStatus
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GlobalUnitStatus.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.GlobalUnitStatus";
        };

        return GlobalUnitStatus;
    })();

    robomaster.GlobalLogisticsStatus = (function() {

        /**
         * Properties of a GlobalLogisticsStatus.
         * @typedef {Object} robomaster.GlobalLogisticsStatus.$Properties
         * @property {number|null} [remainingEconomy] GlobalLogisticsStatus remainingEconomy
         * @property {number|Long|null} [totalEconomyObtained] GlobalLogisticsStatus totalEconomyObtained
         * @property {number|null} [techLevel] GlobalLogisticsStatus techLevel
         * @property {number|null} [encryptionLevel] GlobalLogisticsStatus encryptionLevel
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GlobalLogisticsStatus.
         * @memberof robomaster
         * @interface IGlobalLogisticsStatus
         * @augments robomaster.GlobalLogisticsStatus.$Properties
         * @deprecated Use robomaster.GlobalLogisticsStatus.$Properties instead.
         */

        /**
         * Shape of a GlobalLogisticsStatus.
         * @typedef {robomaster.GlobalLogisticsStatus.$Properties} robomaster.GlobalLogisticsStatus.$Shape
         */

        /**
         * Constructs a new GlobalLogisticsStatus.
         * @memberof robomaster
         * @classdesc Represents a GlobalLogisticsStatus.
         * @constructor
         * @param {robomaster.GlobalLogisticsStatus.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GlobalLogisticsStatus = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GlobalLogisticsStatus remainingEconomy.
         * @member {number|null|undefined} remainingEconomy
         * @memberof robomaster.GlobalLogisticsStatus
         * @instance
         */
        GlobalLogisticsStatus.prototype.remainingEconomy = null;

        /**
         * GlobalLogisticsStatus totalEconomyObtained.
         * @member {number|Long|null|undefined} totalEconomyObtained
         * @memberof robomaster.GlobalLogisticsStatus
         * @instance
         */
        GlobalLogisticsStatus.prototype.totalEconomyObtained = null;

        /**
         * GlobalLogisticsStatus techLevel.
         * @member {number|null|undefined} techLevel
         * @memberof robomaster.GlobalLogisticsStatus
         * @instance
         */
        GlobalLogisticsStatus.prototype.techLevel = null;

        /**
         * GlobalLogisticsStatus encryptionLevel.
         * @member {number|null|undefined} encryptionLevel
         * @memberof robomaster.GlobalLogisticsStatus
         * @instance
         */
        GlobalLogisticsStatus.prototype.encryptionLevel = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalLogisticsStatus.prototype, "_remainingEconomy", {
            get: $util.oneOfGetter($oneOfFields = ["remainingEconomy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalLogisticsStatus.prototype, "_totalEconomyObtained", {
            get: $util.oneOfGetter($oneOfFields = ["totalEconomyObtained"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalLogisticsStatus.prototype, "_techLevel", {
            get: $util.oneOfGetter($oneOfFields = ["techLevel"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(GlobalLogisticsStatus.prototype, "_encryptionLevel", {
            get: $util.oneOfGetter($oneOfFields = ["encryptionLevel"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GlobalLogisticsStatus instance using the specified properties.
         * @function create
         * @memberof robomaster.GlobalLogisticsStatus
         * @static
         * @param {robomaster.GlobalLogisticsStatus.$Properties=} [properties] Properties to set
         * @returns {robomaster.GlobalLogisticsStatus} GlobalLogisticsStatus instance
         * @type {{
         *   (properties: robomaster.GlobalLogisticsStatus.$Shape): robomaster.GlobalLogisticsStatus & robomaster.GlobalLogisticsStatus.$Shape;
         *   (properties?: robomaster.GlobalLogisticsStatus.$Properties): robomaster.GlobalLogisticsStatus;
         * }}
         */
        GlobalLogisticsStatus.create = function(properties) {
            return new GlobalLogisticsStatus(properties);
        };

        /**
         * Encodes the specified GlobalLogisticsStatus message. Does not implicitly {@link robomaster.GlobalLogisticsStatus.verify|verify} messages.
         * @function encode
         * @memberof robomaster.GlobalLogisticsStatus
         * @static
         * @param {robomaster.GlobalLogisticsStatus.$Properties} message GlobalLogisticsStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalLogisticsStatus.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.remainingEconomy != null && $Object.hasOwnProperty.call(message, "remainingEconomy"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.remainingEconomy);
            if (message.totalEconomyObtained != null && $Object.hasOwnProperty.call(message, "totalEconomyObtained"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.totalEconomyObtained);
            if (message.techLevel != null && $Object.hasOwnProperty.call(message, "techLevel"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.techLevel);
            if (message.encryptionLevel != null && $Object.hasOwnProperty.call(message, "encryptionLevel"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.encryptionLevel);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GlobalLogisticsStatus message, length delimited. Does not implicitly {@link robomaster.GlobalLogisticsStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.GlobalLogisticsStatus
         * @static
         * @param {robomaster.GlobalLogisticsStatus.$Properties} message GlobalLogisticsStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalLogisticsStatus.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GlobalLogisticsStatus message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.GlobalLogisticsStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.GlobalLogisticsStatus & robomaster.GlobalLogisticsStatus.$Shape} GlobalLogisticsStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalLogisticsStatus.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.GlobalLogisticsStatus();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.remainingEconomy = reader.uint32();
                        message._remainingEconomy = "remainingEconomy";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.totalEconomyObtained = reader.uint64();
                        message._totalEconomyObtained = "totalEconomyObtained";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.techLevel = reader.uint32();
                        message._techLevel = "techLevel";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.encryptionLevel = reader.uint32();
                        message._encryptionLevel = "encryptionLevel";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GlobalLogisticsStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.GlobalLogisticsStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.GlobalLogisticsStatus & robomaster.GlobalLogisticsStatus.$Shape} GlobalLogisticsStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalLogisticsStatus.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GlobalLogisticsStatus message.
         * @function verify
         * @memberof robomaster.GlobalLogisticsStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GlobalLogisticsStatus.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.remainingEconomy != null && $Object.hasOwnProperty.call(message, "remainingEconomy")) {
                properties._remainingEconomy = 1;
                if (!$util.isInteger(message.remainingEconomy))
                    return "remainingEconomy: integer expected";
            }
            if (message.totalEconomyObtained != null && $Object.hasOwnProperty.call(message, "totalEconomyObtained")) {
                properties._totalEconomyObtained = 1;
                if (!$util.isInteger(message.totalEconomyObtained) && !(message.totalEconomyObtained && $util.isInteger(message.totalEconomyObtained.low) && $util.isInteger(message.totalEconomyObtained.high)))
                    return "totalEconomyObtained: integer|Long expected";
            }
            if (message.techLevel != null && $Object.hasOwnProperty.call(message, "techLevel")) {
                properties._techLevel = 1;
                if (!$util.isInteger(message.techLevel))
                    return "techLevel: integer expected";
            }
            if (message.encryptionLevel != null && $Object.hasOwnProperty.call(message, "encryptionLevel")) {
                properties._encryptionLevel = 1;
                if (!$util.isInteger(message.encryptionLevel))
                    return "encryptionLevel: integer expected";
            }
            return null;
        };

        /**
         * Creates a GlobalLogisticsStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.GlobalLogisticsStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.GlobalLogisticsStatus} GlobalLogisticsStatus
         */
        GlobalLogisticsStatus.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.GlobalLogisticsStatus)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.GlobalLogisticsStatus: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.GlobalLogisticsStatus();
            if (object.remainingEconomy != null)
                message.remainingEconomy = object.remainingEconomy >>> 0;
            if (object.totalEconomyObtained != null)
                if ($util.Long)
                    message.totalEconomyObtained = $util.Long.fromValue(object.totalEconomyObtained, true);
                else if (typeof object.totalEconomyObtained === "string")
                    message.totalEconomyObtained = $parseInt(object.totalEconomyObtained, 10);
                else if (typeof object.totalEconomyObtained === "number")
                    message.totalEconomyObtained = object.totalEconomyObtained;
                else if (typeof object.totalEconomyObtained === "object")
                    message.totalEconomyObtained = new $util.LongBits(object.totalEconomyObtained.low >>> 0, object.totalEconomyObtained.high >>> 0).toNumber(true);
            if (object.techLevel != null)
                message.techLevel = object.techLevel >>> 0;
            if (object.encryptionLevel != null)
                message.encryptionLevel = object.encryptionLevel >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GlobalLogisticsStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.GlobalLogisticsStatus
         * @static
         * @param {robomaster.GlobalLogisticsStatus} message GlobalLogisticsStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GlobalLogisticsStatus.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.remainingEconomy != null && $Object.hasOwnProperty.call(message, "remainingEconomy"))
                object.remainingEconomy = message.remainingEconomy;
            if (message.totalEconomyObtained != null && $Object.hasOwnProperty.call(message, "totalEconomyObtained"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.totalEconomyObtained = typeof message.totalEconomyObtained === "number" ? $BigInt(message.totalEconomyObtained) : $util.Long.fromBits(message.totalEconomyObtained.low >>> 0, message.totalEconomyObtained.high >>> 0, true).toBigInt();
                else if (typeof message.totalEconomyObtained === "number")
                    object.totalEconomyObtained = options.longs === $String ? $String(message.totalEconomyObtained) : message.totalEconomyObtained;
                else
                    object.totalEconomyObtained = options.longs === $String ? $util.Long.prototype.toString.call(message.totalEconomyObtained) : options.longs === $Number ? new $util.LongBits(message.totalEconomyObtained.low >>> 0, message.totalEconomyObtained.high >>> 0).toNumber(true) : message.totalEconomyObtained;
            if (message.techLevel != null && $Object.hasOwnProperty.call(message, "techLevel"))
                object.techLevel = message.techLevel;
            if (message.encryptionLevel != null && $Object.hasOwnProperty.call(message, "encryptionLevel"))
                object.encryptionLevel = message.encryptionLevel;
            return object;
        };

        /**
         * Converts this GlobalLogisticsStatus to JSON.
         * @function toJSON
         * @memberof robomaster.GlobalLogisticsStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GlobalLogisticsStatus.prototype.toJSON = function() {
            return GlobalLogisticsStatus.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for GlobalLogisticsStatus
         * @function getTypeUrl
         * @memberof robomaster.GlobalLogisticsStatus
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GlobalLogisticsStatus.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.GlobalLogisticsStatus";
        };

        return GlobalLogisticsStatus;
    })();

    robomaster.GlobalSpecialMechanism = (function() {

        /**
         * Properties of a GlobalSpecialMechanism.
         * @typedef {Object} robomaster.GlobalSpecialMechanism.$Properties
         * @property {Array.<number>|null} [mechanismId] GlobalSpecialMechanism mechanismId
         * @property {Array.<number>|null} [mechanismTimeSec] GlobalSpecialMechanism mechanismTimeSec
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GlobalSpecialMechanism.
         * @memberof robomaster
         * @interface IGlobalSpecialMechanism
         * @augments robomaster.GlobalSpecialMechanism.$Properties
         * @deprecated Use robomaster.GlobalSpecialMechanism.$Properties instead.
         */

        /**
         * Shape of a GlobalSpecialMechanism.
         * @typedef {robomaster.GlobalSpecialMechanism.$Properties} robomaster.GlobalSpecialMechanism.$Shape
         */

        /**
         * Constructs a new GlobalSpecialMechanism.
         * @memberof robomaster
         * @classdesc Represents a GlobalSpecialMechanism.
         * @constructor
         * @param {robomaster.GlobalSpecialMechanism.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GlobalSpecialMechanism = function (properties) {
            this.mechanismId = [];
            this.mechanismTimeSec = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GlobalSpecialMechanism mechanismId.
         * @member {Array.<number>} mechanismId
         * @memberof robomaster.GlobalSpecialMechanism
         * @instance
         */
        GlobalSpecialMechanism.prototype.mechanismId = $util.emptyArray;

        /**
         * GlobalSpecialMechanism mechanismTimeSec.
         * @member {Array.<number>} mechanismTimeSec
         * @memberof robomaster.GlobalSpecialMechanism
         * @instance
         */
        GlobalSpecialMechanism.prototype.mechanismTimeSec = $util.emptyArray;

        /**
         * Creates a new GlobalSpecialMechanism instance using the specified properties.
         * @function create
         * @memberof robomaster.GlobalSpecialMechanism
         * @static
         * @param {robomaster.GlobalSpecialMechanism.$Properties=} [properties] Properties to set
         * @returns {robomaster.GlobalSpecialMechanism} GlobalSpecialMechanism instance
         * @type {{
         *   (properties: robomaster.GlobalSpecialMechanism.$Shape): robomaster.GlobalSpecialMechanism & robomaster.GlobalSpecialMechanism.$Shape;
         *   (properties?: robomaster.GlobalSpecialMechanism.$Properties): robomaster.GlobalSpecialMechanism;
         * }}
         */
        GlobalSpecialMechanism.create = function(properties) {
            return new GlobalSpecialMechanism(properties);
        };

        /**
         * Encodes the specified GlobalSpecialMechanism message. Does not implicitly {@link robomaster.GlobalSpecialMechanism.verify|verify} messages.
         * @function encode
         * @memberof robomaster.GlobalSpecialMechanism
         * @static
         * @param {robomaster.GlobalSpecialMechanism.$Properties} message GlobalSpecialMechanism message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalSpecialMechanism.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mechanismId != null && message.mechanismId.length)
                writer.uint32(/* id 1, wireType 2 =*/10).uint32s(message.mechanismId);
            if (message.mechanismTimeSec != null && message.mechanismTimeSec.length)
                writer.uint32(/* id 2, wireType 2 =*/18).int32s(message.mechanismTimeSec);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GlobalSpecialMechanism message, length delimited. Does not implicitly {@link robomaster.GlobalSpecialMechanism.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.GlobalSpecialMechanism
         * @static
         * @param {robomaster.GlobalSpecialMechanism.$Properties} message GlobalSpecialMechanism message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalSpecialMechanism.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GlobalSpecialMechanism message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.GlobalSpecialMechanism
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.GlobalSpecialMechanism & robomaster.GlobalSpecialMechanism.$Shape} GlobalSpecialMechanism
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalSpecialMechanism.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.GlobalSpecialMechanism();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType === 2) {
                            if (!(message.mechanismId && message.mechanismId.length))
                                message.mechanismId = [];
                            reader.uint32s(message.mechanismId);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.mechanismId && message.mechanismId.length))
                            message.mechanismId = [];
                        message.mechanismId.push(reader.uint32());
                        continue;
                    }
                case 2: {
                        if (wireType === 2) {
                            if (!(message.mechanismTimeSec && message.mechanismTimeSec.length))
                                message.mechanismTimeSec = [];
                            reader.int32s(message.mechanismTimeSec);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.mechanismTimeSec && message.mechanismTimeSec.length))
                            message.mechanismTimeSec = [];
                        message.mechanismTimeSec.push(reader.int32());
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GlobalSpecialMechanism message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.GlobalSpecialMechanism
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.GlobalSpecialMechanism & robomaster.GlobalSpecialMechanism.$Shape} GlobalSpecialMechanism
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalSpecialMechanism.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GlobalSpecialMechanism message.
         * @function verify
         * @memberof robomaster.GlobalSpecialMechanism
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GlobalSpecialMechanism.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.mechanismId != null && $Object.hasOwnProperty.call(message, "mechanismId")) {
                if (!$Array.isArray(message.mechanismId))
                    return "mechanismId: array expected";
                for (let i = 0; i < message.mechanismId.length; ++i)
                    if (!$util.isInteger(message.mechanismId[i]))
                        return "mechanismId: integer[] expected";
            }
            if (message.mechanismTimeSec != null && $Object.hasOwnProperty.call(message, "mechanismTimeSec")) {
                if (!$Array.isArray(message.mechanismTimeSec))
                    return "mechanismTimeSec: array expected";
                for (let i = 0; i < message.mechanismTimeSec.length; ++i)
                    if (!$util.isInteger(message.mechanismTimeSec[i]))
                        return "mechanismTimeSec: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a GlobalSpecialMechanism message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.GlobalSpecialMechanism
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.GlobalSpecialMechanism} GlobalSpecialMechanism
         */
        GlobalSpecialMechanism.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.GlobalSpecialMechanism)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.GlobalSpecialMechanism: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.GlobalSpecialMechanism();
            if (object.mechanismId) {
                if (!$Array.isArray(object.mechanismId))
                    throw $TypeError(".robomaster.GlobalSpecialMechanism.mechanismId: array expected");
                message.mechanismId = $Array(object.mechanismId.length);
                for (let i = 0; i < object.mechanismId.length; ++i)
                    message.mechanismId[i] = object.mechanismId[i] >>> 0;
            }
            if (object.mechanismTimeSec) {
                if (!$Array.isArray(object.mechanismTimeSec))
                    throw $TypeError(".robomaster.GlobalSpecialMechanism.mechanismTimeSec: array expected");
                message.mechanismTimeSec = $Array(object.mechanismTimeSec.length);
                for (let i = 0; i < object.mechanismTimeSec.length; ++i)
                    message.mechanismTimeSec[i] = object.mechanismTimeSec[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a GlobalSpecialMechanism message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.GlobalSpecialMechanism
         * @static
         * @param {robomaster.GlobalSpecialMechanism} message GlobalSpecialMechanism
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GlobalSpecialMechanism.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults) {
                object.mechanismId = [];
                object.mechanismTimeSec = [];
            }
            if (message.mechanismId && message.mechanismId.length) {
                object.mechanismId = $Array(message.mechanismId.length);
                for (let j = 0; j < message.mechanismId.length; ++j)
                    object.mechanismId[j] = message.mechanismId[j];
            }
            if (message.mechanismTimeSec && message.mechanismTimeSec.length) {
                object.mechanismTimeSec = $Array(message.mechanismTimeSec.length);
                for (let j = 0; j < message.mechanismTimeSec.length; ++j)
                    object.mechanismTimeSec[j] = message.mechanismTimeSec[j];
            }
            return object;
        };

        /**
         * Converts this GlobalSpecialMechanism to JSON.
         * @function toJSON
         * @memberof robomaster.GlobalSpecialMechanism
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GlobalSpecialMechanism.prototype.toJSON = function() {
            return GlobalSpecialMechanism.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for GlobalSpecialMechanism
         * @function getTypeUrl
         * @memberof robomaster.GlobalSpecialMechanism
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GlobalSpecialMechanism.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.GlobalSpecialMechanism";
        };

        return GlobalSpecialMechanism;
    })();

    robomaster.Event = (function() {

        /**
         * Properties of an Event.
         * @typedef {Object} robomaster.Event.$Properties
         * @property {number|null} [eventId] Event eventId
         * @property {string|null} [param] Event param
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an Event.
         * @memberof robomaster
         * @interface IEvent
         * @augments robomaster.Event.$Properties
         * @deprecated Use robomaster.Event.$Properties instead.
         */

        /**
         * Shape of an Event.
         * @typedef {robomaster.Event.$Properties} robomaster.Event.$Shape
         */

        /**
         * Constructs a new Event.
         * @memberof robomaster
         * @classdesc Represents an Event.
         * @constructor
         * @param {robomaster.Event.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Event = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Event eventId.
         * @member {number|null|undefined} eventId
         * @memberof robomaster.Event
         * @instance
         */
        Event.prototype.eventId = null;

        /**
         * Event param.
         * @member {string|null|undefined} param
         * @memberof robomaster.Event
         * @instance
         */
        Event.prototype.param = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(Event.prototype, "_eventId", {
            get: $util.oneOfGetter($oneOfFields = ["eventId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(Event.prototype, "_param", {
            get: $util.oneOfGetter($oneOfFields = ["param"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Event instance using the specified properties.
         * @function create
         * @memberof robomaster.Event
         * @static
         * @param {robomaster.Event.$Properties=} [properties] Properties to set
         * @returns {robomaster.Event} Event instance
         * @type {{
         *   (properties: robomaster.Event.$Shape): robomaster.Event & robomaster.Event.$Shape;
         *   (properties?: robomaster.Event.$Properties): robomaster.Event;
         * }}
         */
        Event.create = function(properties) {
            return new Event(properties);
        };

        /**
         * Encodes the specified Event message. Does not implicitly {@link robomaster.Event.verify|verify} messages.
         * @function encode
         * @memberof robomaster.Event
         * @static
         * @param {robomaster.Event.$Properties} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eventId);
            if (message.param != null && $Object.hasOwnProperty.call(message, "param"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.param);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link robomaster.Event.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.Event
         * @static
         * @param {robomaster.Event.$Properties} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.Event & robomaster.Event.$Shape} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.Event();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.eventId = reader.int32();
                        message._eventId = "eventId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.param = reader.stringVerify();
                        message._param = "param";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.Event & robomaster.Event.$Shape} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Event message.
         * @function verify
         * @memberof robomaster.Event
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Event.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId")) {
                properties._eventId = 1;
                if (!$util.isInteger(message.eventId))
                    return "eventId: integer expected";
            }
            if (message.param != null && $Object.hasOwnProperty.call(message, "param")) {
                properties._param = 1;
                if (!$util.isString(message.param))
                    return "param: string expected";
            }
            return null;
        };

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.Event
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.Event} Event
         */
        Event.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.Event)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.Event: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.Event();
            if (object.eventId != null)
                message.eventId = object.eventId | 0;
            if (object.param != null)
                message.param = $String(object.param);
            return message;
        };

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.Event
         * @static
         * @param {robomaster.Event} message Event
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Event.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                object.eventId = message.eventId;
            if (message.param != null && $Object.hasOwnProperty.call(message, "param"))
                object.param = message.param;
            return object;
        };

        /**
         * Converts this Event to JSON.
         * @function toJSON
         * @memberof robomaster.Event
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Event.prototype.toJSON = function() {
            return Event.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Event
         * @function getTypeUrl
         * @memberof robomaster.Event
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Event.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.Event";
        };

        return Event;
    })();

    robomaster.RobotInjuryStat = (function() {

        /**
         * Properties of a RobotInjuryStat.
         * @typedef {Object} robomaster.RobotInjuryStat.$Properties
         * @property {number|null} [totalDamage] RobotInjuryStat totalDamage
         * @property {number|null} [collisionDamage] RobotInjuryStat collisionDamage
         * @property {number|null} [smallProjectileDamage] RobotInjuryStat smallProjectileDamage
         * @property {number|null} [largeProjectileDamage] RobotInjuryStat largeProjectileDamage
         * @property {number|null} [dartSplashDamage] RobotInjuryStat dartSplashDamage
         * @property {number|null} [moduleOfflineDamage] RobotInjuryStat moduleOfflineDamage
         * @property {number|null} [offlineDamage] RobotInjuryStat offlineDamage
         * @property {number|null} [penaltyDamage] RobotInjuryStat penaltyDamage
         * @property {number|null} [serverKillDamage] RobotInjuryStat serverKillDamage
         * @property {number|null} [killerId] RobotInjuryStat killerId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RobotInjuryStat.
         * @memberof robomaster
         * @interface IRobotInjuryStat
         * @augments robomaster.RobotInjuryStat.$Properties
         * @deprecated Use robomaster.RobotInjuryStat.$Properties instead.
         */

        /**
         * Shape of a RobotInjuryStat.
         * @typedef {robomaster.RobotInjuryStat.$Properties} robomaster.RobotInjuryStat.$Shape
         */

        /**
         * Constructs a new RobotInjuryStat.
         * @memberof robomaster
         * @classdesc Represents a RobotInjuryStat.
         * @constructor
         * @param {robomaster.RobotInjuryStat.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RobotInjuryStat = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RobotInjuryStat totalDamage.
         * @member {number|null|undefined} totalDamage
         * @memberof robomaster.RobotInjuryStat
         * @instance
         */
        RobotInjuryStat.prototype.totalDamage = null;

        /**
         * RobotInjuryStat collisionDamage.
         * @member {number|null|undefined} collisionDamage
         * @memberof robomaster.RobotInjuryStat
         * @instance
         */
        RobotInjuryStat.prototype.collisionDamage = null;

        /**
         * RobotInjuryStat smallProjectileDamage.
         * @member {number|null|undefined} smallProjectileDamage
         * @memberof robomaster.RobotInjuryStat
         * @instance
         */
        RobotInjuryStat.prototype.smallProjectileDamage = null;

        /**
         * RobotInjuryStat largeProjectileDamage.
         * @member {number|null|undefined} largeProjectileDamage
         * @memberof robomaster.RobotInjuryStat
         * @instance
         */
        RobotInjuryStat.prototype.largeProjectileDamage = null;

        /**
         * RobotInjuryStat dartSplashDamage.
         * @member {number|null|undefined} dartSplashDamage
         * @memberof robomaster.RobotInjuryStat
         * @instance
         */
        RobotInjuryStat.prototype.dartSplashDamage = null;

        /**
         * RobotInjuryStat moduleOfflineDamage.
         * @member {number|null|undefined} moduleOfflineDamage
         * @memberof robomaster.RobotInjuryStat
         * @instance
         */
        RobotInjuryStat.prototype.moduleOfflineDamage = null;

        /**
         * RobotInjuryStat offlineDamage.
         * @member {number|null|undefined} offlineDamage
         * @memberof robomaster.RobotInjuryStat
         * @instance
         */
        RobotInjuryStat.prototype.offlineDamage = null;

        /**
         * RobotInjuryStat penaltyDamage.
         * @member {number|null|undefined} penaltyDamage
         * @memberof robomaster.RobotInjuryStat
         * @instance
         */
        RobotInjuryStat.prototype.penaltyDamage = null;

        /**
         * RobotInjuryStat serverKillDamage.
         * @member {number|null|undefined} serverKillDamage
         * @memberof robomaster.RobotInjuryStat
         * @instance
         */
        RobotInjuryStat.prototype.serverKillDamage = null;

        /**
         * RobotInjuryStat killerId.
         * @member {number|null|undefined} killerId
         * @memberof robomaster.RobotInjuryStat
         * @instance
         */
        RobotInjuryStat.prototype.killerId = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotInjuryStat.prototype, "_totalDamage", {
            get: $util.oneOfGetter($oneOfFields = ["totalDamage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotInjuryStat.prototype, "_collisionDamage", {
            get: $util.oneOfGetter($oneOfFields = ["collisionDamage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotInjuryStat.prototype, "_smallProjectileDamage", {
            get: $util.oneOfGetter($oneOfFields = ["smallProjectileDamage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotInjuryStat.prototype, "_largeProjectileDamage", {
            get: $util.oneOfGetter($oneOfFields = ["largeProjectileDamage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotInjuryStat.prototype, "_dartSplashDamage", {
            get: $util.oneOfGetter($oneOfFields = ["dartSplashDamage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotInjuryStat.prototype, "_moduleOfflineDamage", {
            get: $util.oneOfGetter($oneOfFields = ["moduleOfflineDamage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotInjuryStat.prototype, "_offlineDamage", {
            get: $util.oneOfGetter($oneOfFields = ["offlineDamage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotInjuryStat.prototype, "_penaltyDamage", {
            get: $util.oneOfGetter($oneOfFields = ["penaltyDamage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotInjuryStat.prototype, "_serverKillDamage", {
            get: $util.oneOfGetter($oneOfFields = ["serverKillDamage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotInjuryStat.prototype, "_killerId", {
            get: $util.oneOfGetter($oneOfFields = ["killerId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RobotInjuryStat instance using the specified properties.
         * @function create
         * @memberof robomaster.RobotInjuryStat
         * @static
         * @param {robomaster.RobotInjuryStat.$Properties=} [properties] Properties to set
         * @returns {robomaster.RobotInjuryStat} RobotInjuryStat instance
         * @type {{
         *   (properties: robomaster.RobotInjuryStat.$Shape): robomaster.RobotInjuryStat & robomaster.RobotInjuryStat.$Shape;
         *   (properties?: robomaster.RobotInjuryStat.$Properties): robomaster.RobotInjuryStat;
         * }}
         */
        RobotInjuryStat.create = function(properties) {
            return new RobotInjuryStat(properties);
        };

        /**
         * Encodes the specified RobotInjuryStat message. Does not implicitly {@link robomaster.RobotInjuryStat.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RobotInjuryStat
         * @static
         * @param {robomaster.RobotInjuryStat.$Properties} message RobotInjuryStat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotInjuryStat.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.totalDamage != null && $Object.hasOwnProperty.call(message, "totalDamage"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.totalDamage);
            if (message.collisionDamage != null && $Object.hasOwnProperty.call(message, "collisionDamage"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.collisionDamage);
            if (message.smallProjectileDamage != null && $Object.hasOwnProperty.call(message, "smallProjectileDamage"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.smallProjectileDamage);
            if (message.largeProjectileDamage != null && $Object.hasOwnProperty.call(message, "largeProjectileDamage"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.largeProjectileDamage);
            if (message.dartSplashDamage != null && $Object.hasOwnProperty.call(message, "dartSplashDamage"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.dartSplashDamage);
            if (message.moduleOfflineDamage != null && $Object.hasOwnProperty.call(message, "moduleOfflineDamage"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.moduleOfflineDamage);
            if (message.offlineDamage != null && $Object.hasOwnProperty.call(message, "offlineDamage"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.offlineDamage);
            if (message.penaltyDamage != null && $Object.hasOwnProperty.call(message, "penaltyDamage"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.penaltyDamage);
            if (message.serverKillDamage != null && $Object.hasOwnProperty.call(message, "serverKillDamage"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.serverKillDamage);
            if (message.killerId != null && $Object.hasOwnProperty.call(message, "killerId"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.killerId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RobotInjuryStat message, length delimited. Does not implicitly {@link robomaster.RobotInjuryStat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RobotInjuryStat
         * @static
         * @param {robomaster.RobotInjuryStat.$Properties} message RobotInjuryStat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotInjuryStat.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RobotInjuryStat message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RobotInjuryStat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RobotInjuryStat & robomaster.RobotInjuryStat.$Shape} RobotInjuryStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotInjuryStat.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RobotInjuryStat();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.totalDamage = reader.uint32();
                        message._totalDamage = "totalDamage";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.collisionDamage = reader.uint32();
                        message._collisionDamage = "collisionDamage";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.smallProjectileDamage = reader.uint32();
                        message._smallProjectileDamage = "smallProjectileDamage";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.largeProjectileDamage = reader.uint32();
                        message._largeProjectileDamage = "largeProjectileDamage";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.dartSplashDamage = reader.uint32();
                        message._dartSplashDamage = "dartSplashDamage";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.moduleOfflineDamage = reader.uint32();
                        message._moduleOfflineDamage = "moduleOfflineDamage";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.offlineDamage = reader.uint32();
                        message._offlineDamage = "offlineDamage";
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        message.penaltyDamage = reader.uint32();
                        message._penaltyDamage = "penaltyDamage";
                        continue;
                    }
                case 9: {
                        if (wireType !== 0)
                            break;
                        message.serverKillDamage = reader.uint32();
                        message._serverKillDamage = "serverKillDamage";
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        message.killerId = reader.uint32();
                        message._killerId = "killerId";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RobotInjuryStat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RobotInjuryStat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RobotInjuryStat & robomaster.RobotInjuryStat.$Shape} RobotInjuryStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotInjuryStat.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotInjuryStat message.
         * @function verify
         * @memberof robomaster.RobotInjuryStat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotInjuryStat.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.totalDamage != null && $Object.hasOwnProperty.call(message, "totalDamage")) {
                properties._totalDamage = 1;
                if (!$util.isInteger(message.totalDamage))
                    return "totalDamage: integer expected";
            }
            if (message.collisionDamage != null && $Object.hasOwnProperty.call(message, "collisionDamage")) {
                properties._collisionDamage = 1;
                if (!$util.isInteger(message.collisionDamage))
                    return "collisionDamage: integer expected";
            }
            if (message.smallProjectileDamage != null && $Object.hasOwnProperty.call(message, "smallProjectileDamage")) {
                properties._smallProjectileDamage = 1;
                if (!$util.isInteger(message.smallProjectileDamage))
                    return "smallProjectileDamage: integer expected";
            }
            if (message.largeProjectileDamage != null && $Object.hasOwnProperty.call(message, "largeProjectileDamage")) {
                properties._largeProjectileDamage = 1;
                if (!$util.isInteger(message.largeProjectileDamage))
                    return "largeProjectileDamage: integer expected";
            }
            if (message.dartSplashDamage != null && $Object.hasOwnProperty.call(message, "dartSplashDamage")) {
                properties._dartSplashDamage = 1;
                if (!$util.isInteger(message.dartSplashDamage))
                    return "dartSplashDamage: integer expected";
            }
            if (message.moduleOfflineDamage != null && $Object.hasOwnProperty.call(message, "moduleOfflineDamage")) {
                properties._moduleOfflineDamage = 1;
                if (!$util.isInteger(message.moduleOfflineDamage))
                    return "moduleOfflineDamage: integer expected";
            }
            if (message.offlineDamage != null && $Object.hasOwnProperty.call(message, "offlineDamage")) {
                properties._offlineDamage = 1;
                if (!$util.isInteger(message.offlineDamage))
                    return "offlineDamage: integer expected";
            }
            if (message.penaltyDamage != null && $Object.hasOwnProperty.call(message, "penaltyDamage")) {
                properties._penaltyDamage = 1;
                if (!$util.isInteger(message.penaltyDamage))
                    return "penaltyDamage: integer expected";
            }
            if (message.serverKillDamage != null && $Object.hasOwnProperty.call(message, "serverKillDamage")) {
                properties._serverKillDamage = 1;
                if (!$util.isInteger(message.serverKillDamage))
                    return "serverKillDamage: integer expected";
            }
            if (message.killerId != null && $Object.hasOwnProperty.call(message, "killerId")) {
                properties._killerId = 1;
                if (!$util.isInteger(message.killerId))
                    return "killerId: integer expected";
            }
            return null;
        };

        /**
         * Creates a RobotInjuryStat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RobotInjuryStat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RobotInjuryStat} RobotInjuryStat
         */
        RobotInjuryStat.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RobotInjuryStat)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RobotInjuryStat: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RobotInjuryStat();
            if (object.totalDamage != null)
                message.totalDamage = object.totalDamage >>> 0;
            if (object.collisionDamage != null)
                message.collisionDamage = object.collisionDamage >>> 0;
            if (object.smallProjectileDamage != null)
                message.smallProjectileDamage = object.smallProjectileDamage >>> 0;
            if (object.largeProjectileDamage != null)
                message.largeProjectileDamage = object.largeProjectileDamage >>> 0;
            if (object.dartSplashDamage != null)
                message.dartSplashDamage = object.dartSplashDamage >>> 0;
            if (object.moduleOfflineDamage != null)
                message.moduleOfflineDamage = object.moduleOfflineDamage >>> 0;
            if (object.offlineDamage != null)
                message.offlineDamage = object.offlineDamage >>> 0;
            if (object.penaltyDamage != null)
                message.penaltyDamage = object.penaltyDamage >>> 0;
            if (object.serverKillDamage != null)
                message.serverKillDamage = object.serverKillDamage >>> 0;
            if (object.killerId != null)
                message.killerId = object.killerId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RobotInjuryStat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RobotInjuryStat
         * @static
         * @param {robomaster.RobotInjuryStat} message RobotInjuryStat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotInjuryStat.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.totalDamage != null && $Object.hasOwnProperty.call(message, "totalDamage"))
                object.totalDamage = message.totalDamage;
            if (message.collisionDamage != null && $Object.hasOwnProperty.call(message, "collisionDamage"))
                object.collisionDamage = message.collisionDamage;
            if (message.smallProjectileDamage != null && $Object.hasOwnProperty.call(message, "smallProjectileDamage"))
                object.smallProjectileDamage = message.smallProjectileDamage;
            if (message.largeProjectileDamage != null && $Object.hasOwnProperty.call(message, "largeProjectileDamage"))
                object.largeProjectileDamage = message.largeProjectileDamage;
            if (message.dartSplashDamage != null && $Object.hasOwnProperty.call(message, "dartSplashDamage"))
                object.dartSplashDamage = message.dartSplashDamage;
            if (message.moduleOfflineDamage != null && $Object.hasOwnProperty.call(message, "moduleOfflineDamage"))
                object.moduleOfflineDamage = message.moduleOfflineDamage;
            if (message.offlineDamage != null && $Object.hasOwnProperty.call(message, "offlineDamage"))
                object.offlineDamage = message.offlineDamage;
            if (message.penaltyDamage != null && $Object.hasOwnProperty.call(message, "penaltyDamage"))
                object.penaltyDamage = message.penaltyDamage;
            if (message.serverKillDamage != null && $Object.hasOwnProperty.call(message, "serverKillDamage"))
                object.serverKillDamage = message.serverKillDamage;
            if (message.killerId != null && $Object.hasOwnProperty.call(message, "killerId"))
                object.killerId = message.killerId;
            return object;
        };

        /**
         * Converts this RobotInjuryStat to JSON.
         * @function toJSON
         * @memberof robomaster.RobotInjuryStat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotInjuryStat.prototype.toJSON = function() {
            return RobotInjuryStat.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RobotInjuryStat
         * @function getTypeUrl
         * @memberof robomaster.RobotInjuryStat
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RobotInjuryStat.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RobotInjuryStat";
        };

        return RobotInjuryStat;
    })();

    robomaster.RobotRespawnStatus = (function() {

        /**
         * Properties of a RobotRespawnStatus.
         * @typedef {Object} robomaster.RobotRespawnStatus.$Properties
         * @property {boolean|null} [isPendingRespawn] RobotRespawnStatus isPendingRespawn
         * @property {number|null} [totalRespawnProgress] RobotRespawnStatus totalRespawnProgress
         * @property {number|null} [currentRespawnProgress] RobotRespawnStatus currentRespawnProgress
         * @property {boolean|null} [canFreeRespawn] RobotRespawnStatus canFreeRespawn
         * @property {number|null} [goldCostForRespawn] RobotRespawnStatus goldCostForRespawn
         * @property {boolean|null} [canPayForRespawn] RobotRespawnStatus canPayForRespawn
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RobotRespawnStatus.
         * @memberof robomaster
         * @interface IRobotRespawnStatus
         * @augments robomaster.RobotRespawnStatus.$Properties
         * @deprecated Use robomaster.RobotRespawnStatus.$Properties instead.
         */

        /**
         * Shape of a RobotRespawnStatus.
         * @typedef {robomaster.RobotRespawnStatus.$Properties} robomaster.RobotRespawnStatus.$Shape
         */

        /**
         * Constructs a new RobotRespawnStatus.
         * @memberof robomaster
         * @classdesc Represents a RobotRespawnStatus.
         * @constructor
         * @param {robomaster.RobotRespawnStatus.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RobotRespawnStatus = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RobotRespawnStatus isPendingRespawn.
         * @member {boolean|null|undefined} isPendingRespawn
         * @memberof robomaster.RobotRespawnStatus
         * @instance
         */
        RobotRespawnStatus.prototype.isPendingRespawn = null;

        /**
         * RobotRespawnStatus totalRespawnProgress.
         * @member {number|null|undefined} totalRespawnProgress
         * @memberof robomaster.RobotRespawnStatus
         * @instance
         */
        RobotRespawnStatus.prototype.totalRespawnProgress = null;

        /**
         * RobotRespawnStatus currentRespawnProgress.
         * @member {number|null|undefined} currentRespawnProgress
         * @memberof robomaster.RobotRespawnStatus
         * @instance
         */
        RobotRespawnStatus.prototype.currentRespawnProgress = null;

        /**
         * RobotRespawnStatus canFreeRespawn.
         * @member {boolean|null|undefined} canFreeRespawn
         * @memberof robomaster.RobotRespawnStatus
         * @instance
         */
        RobotRespawnStatus.prototype.canFreeRespawn = null;

        /**
         * RobotRespawnStatus goldCostForRespawn.
         * @member {number|null|undefined} goldCostForRespawn
         * @memberof robomaster.RobotRespawnStatus
         * @instance
         */
        RobotRespawnStatus.prototype.goldCostForRespawn = null;

        /**
         * RobotRespawnStatus canPayForRespawn.
         * @member {boolean|null|undefined} canPayForRespawn
         * @memberof robomaster.RobotRespawnStatus
         * @instance
         */
        RobotRespawnStatus.prototype.canPayForRespawn = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotRespawnStatus.prototype, "_isPendingRespawn", {
            get: $util.oneOfGetter($oneOfFields = ["isPendingRespawn"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotRespawnStatus.prototype, "_totalRespawnProgress", {
            get: $util.oneOfGetter($oneOfFields = ["totalRespawnProgress"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotRespawnStatus.prototype, "_currentRespawnProgress", {
            get: $util.oneOfGetter($oneOfFields = ["currentRespawnProgress"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotRespawnStatus.prototype, "_canFreeRespawn", {
            get: $util.oneOfGetter($oneOfFields = ["canFreeRespawn"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotRespawnStatus.prototype, "_goldCostForRespawn", {
            get: $util.oneOfGetter($oneOfFields = ["goldCostForRespawn"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotRespawnStatus.prototype, "_canPayForRespawn", {
            get: $util.oneOfGetter($oneOfFields = ["canPayForRespawn"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RobotRespawnStatus instance using the specified properties.
         * @function create
         * @memberof robomaster.RobotRespawnStatus
         * @static
         * @param {robomaster.RobotRespawnStatus.$Properties=} [properties] Properties to set
         * @returns {robomaster.RobotRespawnStatus} RobotRespawnStatus instance
         * @type {{
         *   (properties: robomaster.RobotRespawnStatus.$Shape): robomaster.RobotRespawnStatus & robomaster.RobotRespawnStatus.$Shape;
         *   (properties?: robomaster.RobotRespawnStatus.$Properties): robomaster.RobotRespawnStatus;
         * }}
         */
        RobotRespawnStatus.create = function(properties) {
            return new RobotRespawnStatus(properties);
        };

        /**
         * Encodes the specified RobotRespawnStatus message. Does not implicitly {@link robomaster.RobotRespawnStatus.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RobotRespawnStatus
         * @static
         * @param {robomaster.RobotRespawnStatus.$Properties} message RobotRespawnStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotRespawnStatus.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.isPendingRespawn != null && $Object.hasOwnProperty.call(message, "isPendingRespawn"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isPendingRespawn);
            if (message.totalRespawnProgress != null && $Object.hasOwnProperty.call(message, "totalRespawnProgress"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.totalRespawnProgress);
            if (message.currentRespawnProgress != null && $Object.hasOwnProperty.call(message, "currentRespawnProgress"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.currentRespawnProgress);
            if (message.canFreeRespawn != null && $Object.hasOwnProperty.call(message, "canFreeRespawn"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.canFreeRespawn);
            if (message.goldCostForRespawn != null && $Object.hasOwnProperty.call(message, "goldCostForRespawn"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.goldCostForRespawn);
            if (message.canPayForRespawn != null && $Object.hasOwnProperty.call(message, "canPayForRespawn"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.canPayForRespawn);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RobotRespawnStatus message, length delimited. Does not implicitly {@link robomaster.RobotRespawnStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RobotRespawnStatus
         * @static
         * @param {robomaster.RobotRespawnStatus.$Properties} message RobotRespawnStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotRespawnStatus.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RobotRespawnStatus message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RobotRespawnStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RobotRespawnStatus & robomaster.RobotRespawnStatus.$Shape} RobotRespawnStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotRespawnStatus.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RobotRespawnStatus();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.isPendingRespawn = reader.bool();
                        message._isPendingRespawn = "isPendingRespawn";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.totalRespawnProgress = reader.uint32();
                        message._totalRespawnProgress = "totalRespawnProgress";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.currentRespawnProgress = reader.uint32();
                        message._currentRespawnProgress = "currentRespawnProgress";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.canFreeRespawn = reader.bool();
                        message._canFreeRespawn = "canFreeRespawn";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.goldCostForRespawn = reader.uint32();
                        message._goldCostForRespawn = "goldCostForRespawn";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.canPayForRespawn = reader.bool();
                        message._canPayForRespawn = "canPayForRespawn";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RobotRespawnStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RobotRespawnStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RobotRespawnStatus & robomaster.RobotRespawnStatus.$Shape} RobotRespawnStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotRespawnStatus.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotRespawnStatus message.
         * @function verify
         * @memberof robomaster.RobotRespawnStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotRespawnStatus.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.isPendingRespawn != null && $Object.hasOwnProperty.call(message, "isPendingRespawn")) {
                properties._isPendingRespawn = 1;
                if (typeof message.isPendingRespawn !== "boolean")
                    return "isPendingRespawn: boolean expected";
            }
            if (message.totalRespawnProgress != null && $Object.hasOwnProperty.call(message, "totalRespawnProgress")) {
                properties._totalRespawnProgress = 1;
                if (!$util.isInteger(message.totalRespawnProgress))
                    return "totalRespawnProgress: integer expected";
            }
            if (message.currentRespawnProgress != null && $Object.hasOwnProperty.call(message, "currentRespawnProgress")) {
                properties._currentRespawnProgress = 1;
                if (!$util.isInteger(message.currentRespawnProgress))
                    return "currentRespawnProgress: integer expected";
            }
            if (message.canFreeRespawn != null && $Object.hasOwnProperty.call(message, "canFreeRespawn")) {
                properties._canFreeRespawn = 1;
                if (typeof message.canFreeRespawn !== "boolean")
                    return "canFreeRespawn: boolean expected";
            }
            if (message.goldCostForRespawn != null && $Object.hasOwnProperty.call(message, "goldCostForRespawn")) {
                properties._goldCostForRespawn = 1;
                if (!$util.isInteger(message.goldCostForRespawn))
                    return "goldCostForRespawn: integer expected";
            }
            if (message.canPayForRespawn != null && $Object.hasOwnProperty.call(message, "canPayForRespawn")) {
                properties._canPayForRespawn = 1;
                if (typeof message.canPayForRespawn !== "boolean")
                    return "canPayForRespawn: boolean expected";
            }
            return null;
        };

        /**
         * Creates a RobotRespawnStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RobotRespawnStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RobotRespawnStatus} RobotRespawnStatus
         */
        RobotRespawnStatus.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RobotRespawnStatus)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RobotRespawnStatus: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RobotRespawnStatus();
            if (object.isPendingRespawn != null)
                message.isPendingRespawn = $Boolean(object.isPendingRespawn);
            if (object.totalRespawnProgress != null)
                message.totalRespawnProgress = object.totalRespawnProgress >>> 0;
            if (object.currentRespawnProgress != null)
                message.currentRespawnProgress = object.currentRespawnProgress >>> 0;
            if (object.canFreeRespawn != null)
                message.canFreeRespawn = $Boolean(object.canFreeRespawn);
            if (object.goldCostForRespawn != null)
                message.goldCostForRespawn = object.goldCostForRespawn >>> 0;
            if (object.canPayForRespawn != null)
                message.canPayForRespawn = $Boolean(object.canPayForRespawn);
            return message;
        };

        /**
         * Creates a plain object from a RobotRespawnStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RobotRespawnStatus
         * @static
         * @param {robomaster.RobotRespawnStatus} message RobotRespawnStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotRespawnStatus.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.isPendingRespawn != null && $Object.hasOwnProperty.call(message, "isPendingRespawn"))
                object.isPendingRespawn = message.isPendingRespawn;
            if (message.totalRespawnProgress != null && $Object.hasOwnProperty.call(message, "totalRespawnProgress"))
                object.totalRespawnProgress = message.totalRespawnProgress;
            if (message.currentRespawnProgress != null && $Object.hasOwnProperty.call(message, "currentRespawnProgress"))
                object.currentRespawnProgress = message.currentRespawnProgress;
            if (message.canFreeRespawn != null && $Object.hasOwnProperty.call(message, "canFreeRespawn"))
                object.canFreeRespawn = message.canFreeRespawn;
            if (message.goldCostForRespawn != null && $Object.hasOwnProperty.call(message, "goldCostForRespawn"))
                object.goldCostForRespawn = message.goldCostForRespawn;
            if (message.canPayForRespawn != null && $Object.hasOwnProperty.call(message, "canPayForRespawn"))
                object.canPayForRespawn = message.canPayForRespawn;
            return object;
        };

        /**
         * Converts this RobotRespawnStatus to JSON.
         * @function toJSON
         * @memberof robomaster.RobotRespawnStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotRespawnStatus.prototype.toJSON = function() {
            return RobotRespawnStatus.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RobotRespawnStatus
         * @function getTypeUrl
         * @memberof robomaster.RobotRespawnStatus
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RobotRespawnStatus.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RobotRespawnStatus";
        };

        return RobotRespawnStatus;
    })();

    robomaster.RobotStaticStatus = (function() {

        /**
         * Properties of a RobotStaticStatus.
         * @typedef {Object} robomaster.RobotStaticStatus.$Properties
         * @property {number|null} [connectionState] RobotStaticStatus connectionState
         * @property {number|null} [fieldState] RobotStaticStatus fieldState
         * @property {number|null} [aliveState] RobotStaticStatus aliveState
         * @property {number|null} [robotId] RobotStaticStatus robotId
         * @property {number|null} [robotType] RobotStaticStatus robotType
         * @property {number|null} [performanceSystemShooter] RobotStaticStatus performanceSystemShooter
         * @property {number|null} [performanceSystemChassis] RobotStaticStatus performanceSystemChassis
         * @property {number|null} [level] RobotStaticStatus level
         * @property {number|null} [maxHealth] RobotStaticStatus maxHealth
         * @property {number|null} [maxHeat] RobotStaticStatus maxHeat
         * @property {number|null} [heatCooldownRate] RobotStaticStatus heatCooldownRate
         * @property {number|null} [maxPower] RobotStaticStatus maxPower
         * @property {number|null} [maxBufferEnergy] RobotStaticStatus maxBufferEnergy
         * @property {number|null} [maxChassisEnergy] RobotStaticStatus maxChassisEnergy
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RobotStaticStatus.
         * @memberof robomaster
         * @interface IRobotStaticStatus
         * @augments robomaster.RobotStaticStatus.$Properties
         * @deprecated Use robomaster.RobotStaticStatus.$Properties instead.
         */

        /**
         * Shape of a RobotStaticStatus.
         * @typedef {robomaster.RobotStaticStatus.$Properties} robomaster.RobotStaticStatus.$Shape
         */

        /**
         * Constructs a new RobotStaticStatus.
         * @memberof robomaster
         * @classdesc Represents a RobotStaticStatus.
         * @constructor
         * @param {robomaster.RobotStaticStatus.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RobotStaticStatus = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RobotStaticStatus connectionState.
         * @member {number|null|undefined} connectionState
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.connectionState = null;

        /**
         * RobotStaticStatus fieldState.
         * @member {number|null|undefined} fieldState
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.fieldState = null;

        /**
         * RobotStaticStatus aliveState.
         * @member {number|null|undefined} aliveState
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.aliveState = null;

        /**
         * RobotStaticStatus robotId.
         * @member {number|null|undefined} robotId
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.robotId = null;

        /**
         * RobotStaticStatus robotType.
         * @member {number|null|undefined} robotType
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.robotType = null;

        /**
         * RobotStaticStatus performanceSystemShooter.
         * @member {number|null|undefined} performanceSystemShooter
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.performanceSystemShooter = null;

        /**
         * RobotStaticStatus performanceSystemChassis.
         * @member {number|null|undefined} performanceSystemChassis
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.performanceSystemChassis = null;

        /**
         * RobotStaticStatus level.
         * @member {number|null|undefined} level
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.level = null;

        /**
         * RobotStaticStatus maxHealth.
         * @member {number|null|undefined} maxHealth
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.maxHealth = null;

        /**
         * RobotStaticStatus maxHeat.
         * @member {number|null|undefined} maxHeat
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.maxHeat = null;

        /**
         * RobotStaticStatus heatCooldownRate.
         * @member {number|null|undefined} heatCooldownRate
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.heatCooldownRate = null;

        /**
         * RobotStaticStatus maxPower.
         * @member {number|null|undefined} maxPower
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.maxPower = null;

        /**
         * RobotStaticStatus maxBufferEnergy.
         * @member {number|null|undefined} maxBufferEnergy
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.maxBufferEnergy = null;

        /**
         * RobotStaticStatus maxChassisEnergy.
         * @member {number|null|undefined} maxChassisEnergy
         * @memberof robomaster.RobotStaticStatus
         * @instance
         */
        RobotStaticStatus.prototype.maxChassisEnergy = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_connectionState", {
            get: $util.oneOfGetter($oneOfFields = ["connectionState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_fieldState", {
            get: $util.oneOfGetter($oneOfFields = ["fieldState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_aliveState", {
            get: $util.oneOfGetter($oneOfFields = ["aliveState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_robotId", {
            get: $util.oneOfGetter($oneOfFields = ["robotId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_robotType", {
            get: $util.oneOfGetter($oneOfFields = ["robotType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_performanceSystemShooter", {
            get: $util.oneOfGetter($oneOfFields = ["performanceSystemShooter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_performanceSystemChassis", {
            get: $util.oneOfGetter($oneOfFields = ["performanceSystemChassis"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_level", {
            get: $util.oneOfGetter($oneOfFields = ["level"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_maxHealth", {
            get: $util.oneOfGetter($oneOfFields = ["maxHealth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_maxHeat", {
            get: $util.oneOfGetter($oneOfFields = ["maxHeat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_heatCooldownRate", {
            get: $util.oneOfGetter($oneOfFields = ["heatCooldownRate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_maxPower", {
            get: $util.oneOfGetter($oneOfFields = ["maxPower"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_maxBufferEnergy", {
            get: $util.oneOfGetter($oneOfFields = ["maxBufferEnergy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotStaticStatus.prototype, "_maxChassisEnergy", {
            get: $util.oneOfGetter($oneOfFields = ["maxChassisEnergy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RobotStaticStatus instance using the specified properties.
         * @function create
         * @memberof robomaster.RobotStaticStatus
         * @static
         * @param {robomaster.RobotStaticStatus.$Properties=} [properties] Properties to set
         * @returns {robomaster.RobotStaticStatus} RobotStaticStatus instance
         * @type {{
         *   (properties: robomaster.RobotStaticStatus.$Shape): robomaster.RobotStaticStatus & robomaster.RobotStaticStatus.$Shape;
         *   (properties?: robomaster.RobotStaticStatus.$Properties): robomaster.RobotStaticStatus;
         * }}
         */
        RobotStaticStatus.create = function(properties) {
            return new RobotStaticStatus(properties);
        };

        /**
         * Encodes the specified RobotStaticStatus message. Does not implicitly {@link robomaster.RobotStaticStatus.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RobotStaticStatus
         * @static
         * @param {robomaster.RobotStaticStatus.$Properties} message RobotStaticStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotStaticStatus.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.connectionState != null && $Object.hasOwnProperty.call(message, "connectionState"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.connectionState);
            if (message.fieldState != null && $Object.hasOwnProperty.call(message, "fieldState"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.fieldState);
            if (message.aliveState != null && $Object.hasOwnProperty.call(message, "aliveState"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.aliveState);
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.robotId);
            if (message.robotType != null && $Object.hasOwnProperty.call(message, "robotType"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.robotType);
            if (message.performanceSystemShooter != null && $Object.hasOwnProperty.call(message, "performanceSystemShooter"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.performanceSystemShooter);
            if (message.performanceSystemChassis != null && $Object.hasOwnProperty.call(message, "performanceSystemChassis"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.performanceSystemChassis);
            if (message.level != null && $Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.level);
            if (message.maxHealth != null && $Object.hasOwnProperty.call(message, "maxHealth"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.maxHealth);
            if (message.maxHeat != null && $Object.hasOwnProperty.call(message, "maxHeat"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.maxHeat);
            if (message.heatCooldownRate != null && $Object.hasOwnProperty.call(message, "heatCooldownRate"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.heatCooldownRate);
            if (message.maxPower != null && $Object.hasOwnProperty.call(message, "maxPower"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.maxPower);
            if (message.maxBufferEnergy != null && $Object.hasOwnProperty.call(message, "maxBufferEnergy"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.maxBufferEnergy);
            if (message.maxChassisEnergy != null && $Object.hasOwnProperty.call(message, "maxChassisEnergy"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.maxChassisEnergy);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RobotStaticStatus message, length delimited. Does not implicitly {@link robomaster.RobotStaticStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RobotStaticStatus
         * @static
         * @param {robomaster.RobotStaticStatus.$Properties} message RobotStaticStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotStaticStatus.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RobotStaticStatus message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RobotStaticStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RobotStaticStatus & robomaster.RobotStaticStatus.$Shape} RobotStaticStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotStaticStatus.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RobotStaticStatus();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.connectionState = reader.uint32();
                        message._connectionState = "connectionState";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.fieldState = reader.uint32();
                        message._fieldState = "fieldState";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.aliveState = reader.uint32();
                        message._aliveState = "aliveState";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.robotId = reader.uint32();
                        message._robotId = "robotId";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.robotType = reader.uint32();
                        message._robotType = "robotType";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.performanceSystemShooter = reader.uint32();
                        message._performanceSystemShooter = "performanceSystemShooter";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.performanceSystemChassis = reader.uint32();
                        message._performanceSystemChassis = "performanceSystemChassis";
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        message.level = reader.uint32();
                        message._level = "level";
                        continue;
                    }
                case 9: {
                        if (wireType !== 0)
                            break;
                        message.maxHealth = reader.uint32();
                        message._maxHealth = "maxHealth";
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        message.maxHeat = reader.uint32();
                        message._maxHeat = "maxHeat";
                        continue;
                    }
                case 11: {
                        if (wireType !== 5)
                            break;
                        message.heatCooldownRate = reader.float();
                        message._heatCooldownRate = "heatCooldownRate";
                        continue;
                    }
                case 12: {
                        if (wireType !== 0)
                            break;
                        message.maxPower = reader.uint32();
                        message._maxPower = "maxPower";
                        continue;
                    }
                case 13: {
                        if (wireType !== 0)
                            break;
                        message.maxBufferEnergy = reader.uint32();
                        message._maxBufferEnergy = "maxBufferEnergy";
                        continue;
                    }
                case 14: {
                        if (wireType !== 0)
                            break;
                        message.maxChassisEnergy = reader.uint32();
                        message._maxChassisEnergy = "maxChassisEnergy";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RobotStaticStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RobotStaticStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RobotStaticStatus & robomaster.RobotStaticStatus.$Shape} RobotStaticStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotStaticStatus.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotStaticStatus message.
         * @function verify
         * @memberof robomaster.RobotStaticStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotStaticStatus.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.connectionState != null && $Object.hasOwnProperty.call(message, "connectionState")) {
                properties._connectionState = 1;
                if (!$util.isInteger(message.connectionState))
                    return "connectionState: integer expected";
            }
            if (message.fieldState != null && $Object.hasOwnProperty.call(message, "fieldState")) {
                properties._fieldState = 1;
                if (!$util.isInteger(message.fieldState))
                    return "fieldState: integer expected";
            }
            if (message.aliveState != null && $Object.hasOwnProperty.call(message, "aliveState")) {
                properties._aliveState = 1;
                if (!$util.isInteger(message.aliveState))
                    return "aliveState: integer expected";
            }
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId")) {
                properties._robotId = 1;
                if (!$util.isInteger(message.robotId))
                    return "robotId: integer expected";
            }
            if (message.robotType != null && $Object.hasOwnProperty.call(message, "robotType")) {
                properties._robotType = 1;
                if (!$util.isInteger(message.robotType))
                    return "robotType: integer expected";
            }
            if (message.performanceSystemShooter != null && $Object.hasOwnProperty.call(message, "performanceSystemShooter")) {
                properties._performanceSystemShooter = 1;
                if (!$util.isInteger(message.performanceSystemShooter))
                    return "performanceSystemShooter: integer expected";
            }
            if (message.performanceSystemChassis != null && $Object.hasOwnProperty.call(message, "performanceSystemChassis")) {
                properties._performanceSystemChassis = 1;
                if (!$util.isInteger(message.performanceSystemChassis))
                    return "performanceSystemChassis: integer expected";
            }
            if (message.level != null && $Object.hasOwnProperty.call(message, "level")) {
                properties._level = 1;
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            }
            if (message.maxHealth != null && $Object.hasOwnProperty.call(message, "maxHealth")) {
                properties._maxHealth = 1;
                if (!$util.isInteger(message.maxHealth))
                    return "maxHealth: integer expected";
            }
            if (message.maxHeat != null && $Object.hasOwnProperty.call(message, "maxHeat")) {
                properties._maxHeat = 1;
                if (!$util.isInteger(message.maxHeat))
                    return "maxHeat: integer expected";
            }
            if (message.heatCooldownRate != null && $Object.hasOwnProperty.call(message, "heatCooldownRate")) {
                properties._heatCooldownRate = 1;
                if (typeof message.heatCooldownRate !== "number")
                    return "heatCooldownRate: number expected";
            }
            if (message.maxPower != null && $Object.hasOwnProperty.call(message, "maxPower")) {
                properties._maxPower = 1;
                if (!$util.isInteger(message.maxPower))
                    return "maxPower: integer expected";
            }
            if (message.maxBufferEnergy != null && $Object.hasOwnProperty.call(message, "maxBufferEnergy")) {
                properties._maxBufferEnergy = 1;
                if (!$util.isInteger(message.maxBufferEnergy))
                    return "maxBufferEnergy: integer expected";
            }
            if (message.maxChassisEnergy != null && $Object.hasOwnProperty.call(message, "maxChassisEnergy")) {
                properties._maxChassisEnergy = 1;
                if (!$util.isInteger(message.maxChassisEnergy))
                    return "maxChassisEnergy: integer expected";
            }
            return null;
        };

        /**
         * Creates a RobotStaticStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RobotStaticStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RobotStaticStatus} RobotStaticStatus
         */
        RobotStaticStatus.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RobotStaticStatus)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RobotStaticStatus: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RobotStaticStatus();
            if (object.connectionState != null)
                message.connectionState = object.connectionState >>> 0;
            if (object.fieldState != null)
                message.fieldState = object.fieldState >>> 0;
            if (object.aliveState != null)
                message.aliveState = object.aliveState >>> 0;
            if (object.robotId != null)
                message.robotId = object.robotId >>> 0;
            if (object.robotType != null)
                message.robotType = object.robotType >>> 0;
            if (object.performanceSystemShooter != null)
                message.performanceSystemShooter = object.performanceSystemShooter >>> 0;
            if (object.performanceSystemChassis != null)
                message.performanceSystemChassis = object.performanceSystemChassis >>> 0;
            if (object.level != null)
                message.level = object.level >>> 0;
            if (object.maxHealth != null)
                message.maxHealth = object.maxHealth >>> 0;
            if (object.maxHeat != null)
                message.maxHeat = object.maxHeat >>> 0;
            if (object.heatCooldownRate != null)
                message.heatCooldownRate = $Number(object.heatCooldownRate);
            if (object.maxPower != null)
                message.maxPower = object.maxPower >>> 0;
            if (object.maxBufferEnergy != null)
                message.maxBufferEnergy = object.maxBufferEnergy >>> 0;
            if (object.maxChassisEnergy != null)
                message.maxChassisEnergy = object.maxChassisEnergy >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RobotStaticStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RobotStaticStatus
         * @static
         * @param {robomaster.RobotStaticStatus} message RobotStaticStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotStaticStatus.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.connectionState != null && $Object.hasOwnProperty.call(message, "connectionState"))
                object.connectionState = message.connectionState;
            if (message.fieldState != null && $Object.hasOwnProperty.call(message, "fieldState"))
                object.fieldState = message.fieldState;
            if (message.aliveState != null && $Object.hasOwnProperty.call(message, "aliveState"))
                object.aliveState = message.aliveState;
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId"))
                object.robotId = message.robotId;
            if (message.robotType != null && $Object.hasOwnProperty.call(message, "robotType"))
                object.robotType = message.robotType;
            if (message.performanceSystemShooter != null && $Object.hasOwnProperty.call(message, "performanceSystemShooter"))
                object.performanceSystemShooter = message.performanceSystemShooter;
            if (message.performanceSystemChassis != null && $Object.hasOwnProperty.call(message, "performanceSystemChassis"))
                object.performanceSystemChassis = message.performanceSystemChassis;
            if (message.level != null && $Object.hasOwnProperty.call(message, "level"))
                object.level = message.level;
            if (message.maxHealth != null && $Object.hasOwnProperty.call(message, "maxHealth"))
                object.maxHealth = message.maxHealth;
            if (message.maxHeat != null && $Object.hasOwnProperty.call(message, "maxHeat"))
                object.maxHeat = message.maxHeat;
            if (message.heatCooldownRate != null && $Object.hasOwnProperty.call(message, "heatCooldownRate"))
                object.heatCooldownRate = options.json && !$isFinite(message.heatCooldownRate) ? $String(message.heatCooldownRate) : message.heatCooldownRate;
            if (message.maxPower != null && $Object.hasOwnProperty.call(message, "maxPower"))
                object.maxPower = message.maxPower;
            if (message.maxBufferEnergy != null && $Object.hasOwnProperty.call(message, "maxBufferEnergy"))
                object.maxBufferEnergy = message.maxBufferEnergy;
            if (message.maxChassisEnergy != null && $Object.hasOwnProperty.call(message, "maxChassisEnergy"))
                object.maxChassisEnergy = message.maxChassisEnergy;
            return object;
        };

        /**
         * Converts this RobotStaticStatus to JSON.
         * @function toJSON
         * @memberof robomaster.RobotStaticStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotStaticStatus.prototype.toJSON = function() {
            return RobotStaticStatus.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RobotStaticStatus
         * @function getTypeUrl
         * @memberof robomaster.RobotStaticStatus
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RobotStaticStatus.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RobotStaticStatus";
        };

        return RobotStaticStatus;
    })();

    robomaster.RobotDynamicStatus = (function() {

        /**
         * Properties of a RobotDynamicStatus.
         * @typedef {Object} robomaster.RobotDynamicStatus.$Properties
         * @property {number|null} [currentHealth] RobotDynamicStatus currentHealth
         * @property {number|null} [currentHeat] RobotDynamicStatus currentHeat
         * @property {number|null} [lastProjectileFireRate] RobotDynamicStatus lastProjectileFireRate
         * @property {number|null} [currentChassisEnergy] RobotDynamicStatus currentChassisEnergy
         * @property {number|null} [currentBufferEnergy] RobotDynamicStatus currentBufferEnergy
         * @property {number|null} [currentExperience] RobotDynamicStatus currentExperience
         * @property {number|null} [experienceForUpgrade] RobotDynamicStatus experienceForUpgrade
         * @property {number|null} [totalProjectilesFired] RobotDynamicStatus totalProjectilesFired
         * @property {number|null} [remainingAmmo] RobotDynamicStatus remainingAmmo
         * @property {boolean|null} [isOutOfCombat] RobotDynamicStatus isOutOfCombat
         * @property {number|null} [outOfCombatCountdown] RobotDynamicStatus outOfCombatCountdown
         * @property {boolean|null} [canRemoteHeal] RobotDynamicStatus canRemoteHeal
         * @property {boolean|null} [canRemoteAmmo] RobotDynamicStatus canRemoteAmmo
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RobotDynamicStatus.
         * @memberof robomaster
         * @interface IRobotDynamicStatus
         * @augments robomaster.RobotDynamicStatus.$Properties
         * @deprecated Use robomaster.RobotDynamicStatus.$Properties instead.
         */

        /**
         * Shape of a RobotDynamicStatus.
         * @typedef {robomaster.RobotDynamicStatus.$Properties} robomaster.RobotDynamicStatus.$Shape
         */

        /**
         * Constructs a new RobotDynamicStatus.
         * @memberof robomaster
         * @classdesc Represents a RobotDynamicStatus.
         * @constructor
         * @param {robomaster.RobotDynamicStatus.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RobotDynamicStatus = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RobotDynamicStatus currentHealth.
         * @member {number|null|undefined} currentHealth
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.currentHealth = null;

        /**
         * RobotDynamicStatus currentHeat.
         * @member {number|null|undefined} currentHeat
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.currentHeat = null;

        /**
         * RobotDynamicStatus lastProjectileFireRate.
         * @member {number|null|undefined} lastProjectileFireRate
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.lastProjectileFireRate = null;

        /**
         * RobotDynamicStatus currentChassisEnergy.
         * @member {number|null|undefined} currentChassisEnergy
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.currentChassisEnergy = null;

        /**
         * RobotDynamicStatus currentBufferEnergy.
         * @member {number|null|undefined} currentBufferEnergy
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.currentBufferEnergy = null;

        /**
         * RobotDynamicStatus currentExperience.
         * @member {number|null|undefined} currentExperience
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.currentExperience = null;

        /**
         * RobotDynamicStatus experienceForUpgrade.
         * @member {number|null|undefined} experienceForUpgrade
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.experienceForUpgrade = null;

        /**
         * RobotDynamicStatus totalProjectilesFired.
         * @member {number|null|undefined} totalProjectilesFired
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.totalProjectilesFired = null;

        /**
         * RobotDynamicStatus remainingAmmo.
         * @member {number|null|undefined} remainingAmmo
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.remainingAmmo = null;

        /**
         * RobotDynamicStatus isOutOfCombat.
         * @member {boolean|null|undefined} isOutOfCombat
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.isOutOfCombat = null;

        /**
         * RobotDynamicStatus outOfCombatCountdown.
         * @member {number|null|undefined} outOfCombatCountdown
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.outOfCombatCountdown = null;

        /**
         * RobotDynamicStatus canRemoteHeal.
         * @member {boolean|null|undefined} canRemoteHeal
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.canRemoteHeal = null;

        /**
         * RobotDynamicStatus canRemoteAmmo.
         * @member {boolean|null|undefined} canRemoteAmmo
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         */
        RobotDynamicStatus.prototype.canRemoteAmmo = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_currentHealth", {
            get: $util.oneOfGetter($oneOfFields = ["currentHealth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_currentHeat", {
            get: $util.oneOfGetter($oneOfFields = ["currentHeat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_lastProjectileFireRate", {
            get: $util.oneOfGetter($oneOfFields = ["lastProjectileFireRate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_currentChassisEnergy", {
            get: $util.oneOfGetter($oneOfFields = ["currentChassisEnergy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_currentBufferEnergy", {
            get: $util.oneOfGetter($oneOfFields = ["currentBufferEnergy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_currentExperience", {
            get: $util.oneOfGetter($oneOfFields = ["currentExperience"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_experienceForUpgrade", {
            get: $util.oneOfGetter($oneOfFields = ["experienceForUpgrade"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_totalProjectilesFired", {
            get: $util.oneOfGetter($oneOfFields = ["totalProjectilesFired"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_remainingAmmo", {
            get: $util.oneOfGetter($oneOfFields = ["remainingAmmo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_isOutOfCombat", {
            get: $util.oneOfGetter($oneOfFields = ["isOutOfCombat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_outOfCombatCountdown", {
            get: $util.oneOfGetter($oneOfFields = ["outOfCombatCountdown"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_canRemoteHeal", {
            get: $util.oneOfGetter($oneOfFields = ["canRemoteHeal"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotDynamicStatus.prototype, "_canRemoteAmmo", {
            get: $util.oneOfGetter($oneOfFields = ["canRemoteAmmo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RobotDynamicStatus instance using the specified properties.
         * @function create
         * @memberof robomaster.RobotDynamicStatus
         * @static
         * @param {robomaster.RobotDynamicStatus.$Properties=} [properties] Properties to set
         * @returns {robomaster.RobotDynamicStatus} RobotDynamicStatus instance
         * @type {{
         *   (properties: robomaster.RobotDynamicStatus.$Shape): robomaster.RobotDynamicStatus & robomaster.RobotDynamicStatus.$Shape;
         *   (properties?: robomaster.RobotDynamicStatus.$Properties): robomaster.RobotDynamicStatus;
         * }}
         */
        RobotDynamicStatus.create = function(properties) {
            return new RobotDynamicStatus(properties);
        };

        /**
         * Encodes the specified RobotDynamicStatus message. Does not implicitly {@link robomaster.RobotDynamicStatus.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RobotDynamicStatus
         * @static
         * @param {robomaster.RobotDynamicStatus.$Properties} message RobotDynamicStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotDynamicStatus.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.currentHealth != null && $Object.hasOwnProperty.call(message, "currentHealth"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.currentHealth);
            if (message.currentHeat != null && $Object.hasOwnProperty.call(message, "currentHeat"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.currentHeat);
            if (message.lastProjectileFireRate != null && $Object.hasOwnProperty.call(message, "lastProjectileFireRate"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.lastProjectileFireRate);
            if (message.currentChassisEnergy != null && $Object.hasOwnProperty.call(message, "currentChassisEnergy"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.currentChassisEnergy);
            if (message.currentBufferEnergy != null && $Object.hasOwnProperty.call(message, "currentBufferEnergy"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.currentBufferEnergy);
            if (message.currentExperience != null && $Object.hasOwnProperty.call(message, "currentExperience"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.currentExperience);
            if (message.experienceForUpgrade != null && $Object.hasOwnProperty.call(message, "experienceForUpgrade"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.experienceForUpgrade);
            if (message.totalProjectilesFired != null && $Object.hasOwnProperty.call(message, "totalProjectilesFired"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.totalProjectilesFired);
            if (message.remainingAmmo != null && $Object.hasOwnProperty.call(message, "remainingAmmo"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.remainingAmmo);
            if (message.isOutOfCombat != null && $Object.hasOwnProperty.call(message, "isOutOfCombat"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isOutOfCombat);
            if (message.outOfCombatCountdown != null && $Object.hasOwnProperty.call(message, "outOfCombatCountdown"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.outOfCombatCountdown);
            if (message.canRemoteHeal != null && $Object.hasOwnProperty.call(message, "canRemoteHeal"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.canRemoteHeal);
            if (message.canRemoteAmmo != null && $Object.hasOwnProperty.call(message, "canRemoteAmmo"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.canRemoteAmmo);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RobotDynamicStatus message, length delimited. Does not implicitly {@link robomaster.RobotDynamicStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RobotDynamicStatus
         * @static
         * @param {robomaster.RobotDynamicStatus.$Properties} message RobotDynamicStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotDynamicStatus.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RobotDynamicStatus message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RobotDynamicStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RobotDynamicStatus & robomaster.RobotDynamicStatus.$Shape} RobotDynamicStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotDynamicStatus.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RobotDynamicStatus();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.currentHealth = reader.uint32();
                        message._currentHealth = "currentHealth";
                        continue;
                    }
                case 2: {
                        if (wireType !== 5)
                            break;
                        message.currentHeat = reader.float();
                        message._currentHeat = "currentHeat";
                        continue;
                    }
                case 3: {
                        if (wireType !== 5)
                            break;
                        message.lastProjectileFireRate = reader.float();
                        message._lastProjectileFireRate = "lastProjectileFireRate";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.currentChassisEnergy = reader.uint32();
                        message._currentChassisEnergy = "currentChassisEnergy";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.currentBufferEnergy = reader.uint32();
                        message._currentBufferEnergy = "currentBufferEnergy";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.currentExperience = reader.uint32();
                        message._currentExperience = "currentExperience";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.experienceForUpgrade = reader.uint32();
                        message._experienceForUpgrade = "experienceForUpgrade";
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        message.totalProjectilesFired = reader.uint32();
                        message._totalProjectilesFired = "totalProjectilesFired";
                        continue;
                    }
                case 9: {
                        if (wireType !== 0)
                            break;
                        message.remainingAmmo = reader.uint32();
                        message._remainingAmmo = "remainingAmmo";
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        message.isOutOfCombat = reader.bool();
                        message._isOutOfCombat = "isOutOfCombat";
                        continue;
                    }
                case 11: {
                        if (wireType !== 0)
                            break;
                        message.outOfCombatCountdown = reader.uint32();
                        message._outOfCombatCountdown = "outOfCombatCountdown";
                        continue;
                    }
                case 12: {
                        if (wireType !== 0)
                            break;
                        message.canRemoteHeal = reader.bool();
                        message._canRemoteHeal = "canRemoteHeal";
                        continue;
                    }
                case 13: {
                        if (wireType !== 0)
                            break;
                        message.canRemoteAmmo = reader.bool();
                        message._canRemoteAmmo = "canRemoteAmmo";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RobotDynamicStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RobotDynamicStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RobotDynamicStatus & robomaster.RobotDynamicStatus.$Shape} RobotDynamicStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotDynamicStatus.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotDynamicStatus message.
         * @function verify
         * @memberof robomaster.RobotDynamicStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotDynamicStatus.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.currentHealth != null && $Object.hasOwnProperty.call(message, "currentHealth")) {
                properties._currentHealth = 1;
                if (!$util.isInteger(message.currentHealth))
                    return "currentHealth: integer expected";
            }
            if (message.currentHeat != null && $Object.hasOwnProperty.call(message, "currentHeat")) {
                properties._currentHeat = 1;
                if (typeof message.currentHeat !== "number")
                    return "currentHeat: number expected";
            }
            if (message.lastProjectileFireRate != null && $Object.hasOwnProperty.call(message, "lastProjectileFireRate")) {
                properties._lastProjectileFireRate = 1;
                if (typeof message.lastProjectileFireRate !== "number")
                    return "lastProjectileFireRate: number expected";
            }
            if (message.currentChassisEnergy != null && $Object.hasOwnProperty.call(message, "currentChassisEnergy")) {
                properties._currentChassisEnergy = 1;
                if (!$util.isInteger(message.currentChassisEnergy))
                    return "currentChassisEnergy: integer expected";
            }
            if (message.currentBufferEnergy != null && $Object.hasOwnProperty.call(message, "currentBufferEnergy")) {
                properties._currentBufferEnergy = 1;
                if (!$util.isInteger(message.currentBufferEnergy))
                    return "currentBufferEnergy: integer expected";
            }
            if (message.currentExperience != null && $Object.hasOwnProperty.call(message, "currentExperience")) {
                properties._currentExperience = 1;
                if (!$util.isInteger(message.currentExperience))
                    return "currentExperience: integer expected";
            }
            if (message.experienceForUpgrade != null && $Object.hasOwnProperty.call(message, "experienceForUpgrade")) {
                properties._experienceForUpgrade = 1;
                if (!$util.isInteger(message.experienceForUpgrade))
                    return "experienceForUpgrade: integer expected";
            }
            if (message.totalProjectilesFired != null && $Object.hasOwnProperty.call(message, "totalProjectilesFired")) {
                properties._totalProjectilesFired = 1;
                if (!$util.isInteger(message.totalProjectilesFired))
                    return "totalProjectilesFired: integer expected";
            }
            if (message.remainingAmmo != null && $Object.hasOwnProperty.call(message, "remainingAmmo")) {
                properties._remainingAmmo = 1;
                if (!$util.isInteger(message.remainingAmmo))
                    return "remainingAmmo: integer expected";
            }
            if (message.isOutOfCombat != null && $Object.hasOwnProperty.call(message, "isOutOfCombat")) {
                properties._isOutOfCombat = 1;
                if (typeof message.isOutOfCombat !== "boolean")
                    return "isOutOfCombat: boolean expected";
            }
            if (message.outOfCombatCountdown != null && $Object.hasOwnProperty.call(message, "outOfCombatCountdown")) {
                properties._outOfCombatCountdown = 1;
                if (!$util.isInteger(message.outOfCombatCountdown))
                    return "outOfCombatCountdown: integer expected";
            }
            if (message.canRemoteHeal != null && $Object.hasOwnProperty.call(message, "canRemoteHeal")) {
                properties._canRemoteHeal = 1;
                if (typeof message.canRemoteHeal !== "boolean")
                    return "canRemoteHeal: boolean expected";
            }
            if (message.canRemoteAmmo != null && $Object.hasOwnProperty.call(message, "canRemoteAmmo")) {
                properties._canRemoteAmmo = 1;
                if (typeof message.canRemoteAmmo !== "boolean")
                    return "canRemoteAmmo: boolean expected";
            }
            return null;
        };

        /**
         * Creates a RobotDynamicStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RobotDynamicStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RobotDynamicStatus} RobotDynamicStatus
         */
        RobotDynamicStatus.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RobotDynamicStatus)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RobotDynamicStatus: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RobotDynamicStatus();
            if (object.currentHealth != null)
                message.currentHealth = object.currentHealth >>> 0;
            if (object.currentHeat != null)
                message.currentHeat = $Number(object.currentHeat);
            if (object.lastProjectileFireRate != null)
                message.lastProjectileFireRate = $Number(object.lastProjectileFireRate);
            if (object.currentChassisEnergy != null)
                message.currentChassisEnergy = object.currentChassisEnergy >>> 0;
            if (object.currentBufferEnergy != null)
                message.currentBufferEnergy = object.currentBufferEnergy >>> 0;
            if (object.currentExperience != null)
                message.currentExperience = object.currentExperience >>> 0;
            if (object.experienceForUpgrade != null)
                message.experienceForUpgrade = object.experienceForUpgrade >>> 0;
            if (object.totalProjectilesFired != null)
                message.totalProjectilesFired = object.totalProjectilesFired >>> 0;
            if (object.remainingAmmo != null)
                message.remainingAmmo = object.remainingAmmo >>> 0;
            if (object.isOutOfCombat != null)
                message.isOutOfCombat = $Boolean(object.isOutOfCombat);
            if (object.outOfCombatCountdown != null)
                message.outOfCombatCountdown = object.outOfCombatCountdown >>> 0;
            if (object.canRemoteHeal != null)
                message.canRemoteHeal = $Boolean(object.canRemoteHeal);
            if (object.canRemoteAmmo != null)
                message.canRemoteAmmo = $Boolean(object.canRemoteAmmo);
            return message;
        };

        /**
         * Creates a plain object from a RobotDynamicStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RobotDynamicStatus
         * @static
         * @param {robomaster.RobotDynamicStatus} message RobotDynamicStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotDynamicStatus.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.currentHealth != null && $Object.hasOwnProperty.call(message, "currentHealth"))
                object.currentHealth = message.currentHealth;
            if (message.currentHeat != null && $Object.hasOwnProperty.call(message, "currentHeat"))
                object.currentHeat = options.json && !$isFinite(message.currentHeat) ? $String(message.currentHeat) : message.currentHeat;
            if (message.lastProjectileFireRate != null && $Object.hasOwnProperty.call(message, "lastProjectileFireRate"))
                object.lastProjectileFireRate = options.json && !$isFinite(message.lastProjectileFireRate) ? $String(message.lastProjectileFireRate) : message.lastProjectileFireRate;
            if (message.currentChassisEnergy != null && $Object.hasOwnProperty.call(message, "currentChassisEnergy"))
                object.currentChassisEnergy = message.currentChassisEnergy;
            if (message.currentBufferEnergy != null && $Object.hasOwnProperty.call(message, "currentBufferEnergy"))
                object.currentBufferEnergy = message.currentBufferEnergy;
            if (message.currentExperience != null && $Object.hasOwnProperty.call(message, "currentExperience"))
                object.currentExperience = message.currentExperience;
            if (message.experienceForUpgrade != null && $Object.hasOwnProperty.call(message, "experienceForUpgrade"))
                object.experienceForUpgrade = message.experienceForUpgrade;
            if (message.totalProjectilesFired != null && $Object.hasOwnProperty.call(message, "totalProjectilesFired"))
                object.totalProjectilesFired = message.totalProjectilesFired;
            if (message.remainingAmmo != null && $Object.hasOwnProperty.call(message, "remainingAmmo"))
                object.remainingAmmo = message.remainingAmmo;
            if (message.isOutOfCombat != null && $Object.hasOwnProperty.call(message, "isOutOfCombat"))
                object.isOutOfCombat = message.isOutOfCombat;
            if (message.outOfCombatCountdown != null && $Object.hasOwnProperty.call(message, "outOfCombatCountdown"))
                object.outOfCombatCountdown = message.outOfCombatCountdown;
            if (message.canRemoteHeal != null && $Object.hasOwnProperty.call(message, "canRemoteHeal"))
                object.canRemoteHeal = message.canRemoteHeal;
            if (message.canRemoteAmmo != null && $Object.hasOwnProperty.call(message, "canRemoteAmmo"))
                object.canRemoteAmmo = message.canRemoteAmmo;
            return object;
        };

        /**
         * Converts this RobotDynamicStatus to JSON.
         * @function toJSON
         * @memberof robomaster.RobotDynamicStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotDynamicStatus.prototype.toJSON = function() {
            return RobotDynamicStatus.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RobotDynamicStatus
         * @function getTypeUrl
         * @memberof robomaster.RobotDynamicStatus
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RobotDynamicStatus.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RobotDynamicStatus";
        };

        return RobotDynamicStatus;
    })();

    robomaster.RobotModuleStatus = (function() {

        /**
         * Properties of a RobotModuleStatus.
         * @typedef {Object} robomaster.RobotModuleStatus.$Properties
         * @property {number|null} [powerManager] RobotModuleStatus powerManager
         * @property {number|null} [rfid] RobotModuleStatus rfid
         * @property {number|null} [lightStrip] RobotModuleStatus lightStrip
         * @property {number|null} [smallShooter] RobotModuleStatus smallShooter
         * @property {number|null} [bigShooter] RobotModuleStatus bigShooter
         * @property {number|null} [uwb] RobotModuleStatus uwb
         * @property {number|null} [armor] RobotModuleStatus armor
         * @property {number|null} [videoTransmission] RobotModuleStatus videoTransmission
         * @property {number|null} [capacitor] RobotModuleStatus capacitor
         * @property {number|null} [mainController] RobotModuleStatus mainController
         * @property {number|null} [laserDetectionModule] RobotModuleStatus laserDetectionModule
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RobotModuleStatus.
         * @memberof robomaster
         * @interface IRobotModuleStatus
         * @augments robomaster.RobotModuleStatus.$Properties
         * @deprecated Use robomaster.RobotModuleStatus.$Properties instead.
         */

        /**
         * Shape of a RobotModuleStatus.
         * @typedef {robomaster.RobotModuleStatus.$Properties} robomaster.RobotModuleStatus.$Shape
         */

        /**
         * Constructs a new RobotModuleStatus.
         * @memberof robomaster
         * @classdesc Represents a RobotModuleStatus.
         * @constructor
         * @param {robomaster.RobotModuleStatus.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RobotModuleStatus = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RobotModuleStatus powerManager.
         * @member {number|null|undefined} powerManager
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.powerManager = null;

        /**
         * RobotModuleStatus rfid.
         * @member {number|null|undefined} rfid
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.rfid = null;

        /**
         * RobotModuleStatus lightStrip.
         * @member {number|null|undefined} lightStrip
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.lightStrip = null;

        /**
         * RobotModuleStatus smallShooter.
         * @member {number|null|undefined} smallShooter
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.smallShooter = null;

        /**
         * RobotModuleStatus bigShooter.
         * @member {number|null|undefined} bigShooter
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.bigShooter = null;

        /**
         * RobotModuleStatus uwb.
         * @member {number|null|undefined} uwb
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.uwb = null;

        /**
         * RobotModuleStatus armor.
         * @member {number|null|undefined} armor
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.armor = null;

        /**
         * RobotModuleStatus videoTransmission.
         * @member {number|null|undefined} videoTransmission
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.videoTransmission = null;

        /**
         * RobotModuleStatus capacitor.
         * @member {number|null|undefined} capacitor
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.capacitor = null;

        /**
         * RobotModuleStatus mainController.
         * @member {number|null|undefined} mainController
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.mainController = null;

        /**
         * RobotModuleStatus laserDetectionModule.
         * @member {number|null|undefined} laserDetectionModule
         * @memberof robomaster.RobotModuleStatus
         * @instance
         */
        RobotModuleStatus.prototype.laserDetectionModule = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_powerManager", {
            get: $util.oneOfGetter($oneOfFields = ["powerManager"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_rfid", {
            get: $util.oneOfGetter($oneOfFields = ["rfid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_lightStrip", {
            get: $util.oneOfGetter($oneOfFields = ["lightStrip"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_smallShooter", {
            get: $util.oneOfGetter($oneOfFields = ["smallShooter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_bigShooter", {
            get: $util.oneOfGetter($oneOfFields = ["bigShooter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_uwb", {
            get: $util.oneOfGetter($oneOfFields = ["uwb"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_armor", {
            get: $util.oneOfGetter($oneOfFields = ["armor"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_videoTransmission", {
            get: $util.oneOfGetter($oneOfFields = ["videoTransmission"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_capacitor", {
            get: $util.oneOfGetter($oneOfFields = ["capacitor"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_mainController", {
            get: $util.oneOfGetter($oneOfFields = ["mainController"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotModuleStatus.prototype, "_laserDetectionModule", {
            get: $util.oneOfGetter($oneOfFields = ["laserDetectionModule"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RobotModuleStatus instance using the specified properties.
         * @function create
         * @memberof robomaster.RobotModuleStatus
         * @static
         * @param {robomaster.RobotModuleStatus.$Properties=} [properties] Properties to set
         * @returns {robomaster.RobotModuleStatus} RobotModuleStatus instance
         * @type {{
         *   (properties: robomaster.RobotModuleStatus.$Shape): robomaster.RobotModuleStatus & robomaster.RobotModuleStatus.$Shape;
         *   (properties?: robomaster.RobotModuleStatus.$Properties): robomaster.RobotModuleStatus;
         * }}
         */
        RobotModuleStatus.create = function(properties) {
            return new RobotModuleStatus(properties);
        };

        /**
         * Encodes the specified RobotModuleStatus message. Does not implicitly {@link robomaster.RobotModuleStatus.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RobotModuleStatus
         * @static
         * @param {robomaster.RobotModuleStatus.$Properties} message RobotModuleStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotModuleStatus.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.powerManager != null && $Object.hasOwnProperty.call(message, "powerManager"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.powerManager);
            if (message.rfid != null && $Object.hasOwnProperty.call(message, "rfid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.rfid);
            if (message.lightStrip != null && $Object.hasOwnProperty.call(message, "lightStrip"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.lightStrip);
            if (message.smallShooter != null && $Object.hasOwnProperty.call(message, "smallShooter"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.smallShooter);
            if (message.bigShooter != null && $Object.hasOwnProperty.call(message, "bigShooter"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.bigShooter);
            if (message.uwb != null && $Object.hasOwnProperty.call(message, "uwb"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.uwb);
            if (message.armor != null && $Object.hasOwnProperty.call(message, "armor"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.armor);
            if (message.videoTransmission != null && $Object.hasOwnProperty.call(message, "videoTransmission"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.videoTransmission);
            if (message.capacitor != null && $Object.hasOwnProperty.call(message, "capacitor"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.capacitor);
            if (message.mainController != null && $Object.hasOwnProperty.call(message, "mainController"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.mainController);
            if (message.laserDetectionModule != null && $Object.hasOwnProperty.call(message, "laserDetectionModule"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.laserDetectionModule);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RobotModuleStatus message, length delimited. Does not implicitly {@link robomaster.RobotModuleStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RobotModuleStatus
         * @static
         * @param {robomaster.RobotModuleStatus.$Properties} message RobotModuleStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotModuleStatus.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RobotModuleStatus message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RobotModuleStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RobotModuleStatus & robomaster.RobotModuleStatus.$Shape} RobotModuleStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotModuleStatus.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RobotModuleStatus();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.powerManager = reader.uint32();
                        message._powerManager = "powerManager";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.rfid = reader.uint32();
                        message._rfid = "rfid";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.lightStrip = reader.uint32();
                        message._lightStrip = "lightStrip";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.smallShooter = reader.uint32();
                        message._smallShooter = "smallShooter";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.bigShooter = reader.uint32();
                        message._bigShooter = "bigShooter";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.uwb = reader.uint32();
                        message._uwb = "uwb";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.armor = reader.uint32();
                        message._armor = "armor";
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        message.videoTransmission = reader.uint32();
                        message._videoTransmission = "videoTransmission";
                        continue;
                    }
                case 9: {
                        if (wireType !== 0)
                            break;
                        message.capacitor = reader.uint32();
                        message._capacitor = "capacitor";
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        message.mainController = reader.uint32();
                        message._mainController = "mainController";
                        continue;
                    }
                case 11: {
                        if (wireType !== 0)
                            break;
                        message.laserDetectionModule = reader.uint32();
                        message._laserDetectionModule = "laserDetectionModule";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RobotModuleStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RobotModuleStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RobotModuleStatus & robomaster.RobotModuleStatus.$Shape} RobotModuleStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotModuleStatus.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotModuleStatus message.
         * @function verify
         * @memberof robomaster.RobotModuleStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotModuleStatus.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.powerManager != null && $Object.hasOwnProperty.call(message, "powerManager")) {
                properties._powerManager = 1;
                if (!$util.isInteger(message.powerManager))
                    return "powerManager: integer expected";
            }
            if (message.rfid != null && $Object.hasOwnProperty.call(message, "rfid")) {
                properties._rfid = 1;
                if (!$util.isInteger(message.rfid))
                    return "rfid: integer expected";
            }
            if (message.lightStrip != null && $Object.hasOwnProperty.call(message, "lightStrip")) {
                properties._lightStrip = 1;
                if (!$util.isInteger(message.lightStrip))
                    return "lightStrip: integer expected";
            }
            if (message.smallShooter != null && $Object.hasOwnProperty.call(message, "smallShooter")) {
                properties._smallShooter = 1;
                if (!$util.isInteger(message.smallShooter))
                    return "smallShooter: integer expected";
            }
            if (message.bigShooter != null && $Object.hasOwnProperty.call(message, "bigShooter")) {
                properties._bigShooter = 1;
                if (!$util.isInteger(message.bigShooter))
                    return "bigShooter: integer expected";
            }
            if (message.uwb != null && $Object.hasOwnProperty.call(message, "uwb")) {
                properties._uwb = 1;
                if (!$util.isInteger(message.uwb))
                    return "uwb: integer expected";
            }
            if (message.armor != null && $Object.hasOwnProperty.call(message, "armor")) {
                properties._armor = 1;
                if (!$util.isInteger(message.armor))
                    return "armor: integer expected";
            }
            if (message.videoTransmission != null && $Object.hasOwnProperty.call(message, "videoTransmission")) {
                properties._videoTransmission = 1;
                if (!$util.isInteger(message.videoTransmission))
                    return "videoTransmission: integer expected";
            }
            if (message.capacitor != null && $Object.hasOwnProperty.call(message, "capacitor")) {
                properties._capacitor = 1;
                if (!$util.isInteger(message.capacitor))
                    return "capacitor: integer expected";
            }
            if (message.mainController != null && $Object.hasOwnProperty.call(message, "mainController")) {
                properties._mainController = 1;
                if (!$util.isInteger(message.mainController))
                    return "mainController: integer expected";
            }
            if (message.laserDetectionModule != null && $Object.hasOwnProperty.call(message, "laserDetectionModule")) {
                properties._laserDetectionModule = 1;
                if (!$util.isInteger(message.laserDetectionModule))
                    return "laserDetectionModule: integer expected";
            }
            return null;
        };

        /**
         * Creates a RobotModuleStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RobotModuleStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RobotModuleStatus} RobotModuleStatus
         */
        RobotModuleStatus.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RobotModuleStatus)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RobotModuleStatus: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RobotModuleStatus();
            if (object.powerManager != null)
                message.powerManager = object.powerManager >>> 0;
            if (object.rfid != null)
                message.rfid = object.rfid >>> 0;
            if (object.lightStrip != null)
                message.lightStrip = object.lightStrip >>> 0;
            if (object.smallShooter != null)
                message.smallShooter = object.smallShooter >>> 0;
            if (object.bigShooter != null)
                message.bigShooter = object.bigShooter >>> 0;
            if (object.uwb != null)
                message.uwb = object.uwb >>> 0;
            if (object.armor != null)
                message.armor = object.armor >>> 0;
            if (object.videoTransmission != null)
                message.videoTransmission = object.videoTransmission >>> 0;
            if (object.capacitor != null)
                message.capacitor = object.capacitor >>> 0;
            if (object.mainController != null)
                message.mainController = object.mainController >>> 0;
            if (object.laserDetectionModule != null)
                message.laserDetectionModule = object.laserDetectionModule >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RobotModuleStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RobotModuleStatus
         * @static
         * @param {robomaster.RobotModuleStatus} message RobotModuleStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotModuleStatus.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.powerManager != null && $Object.hasOwnProperty.call(message, "powerManager"))
                object.powerManager = message.powerManager;
            if (message.rfid != null && $Object.hasOwnProperty.call(message, "rfid"))
                object.rfid = message.rfid;
            if (message.lightStrip != null && $Object.hasOwnProperty.call(message, "lightStrip"))
                object.lightStrip = message.lightStrip;
            if (message.smallShooter != null && $Object.hasOwnProperty.call(message, "smallShooter"))
                object.smallShooter = message.smallShooter;
            if (message.bigShooter != null && $Object.hasOwnProperty.call(message, "bigShooter"))
                object.bigShooter = message.bigShooter;
            if (message.uwb != null && $Object.hasOwnProperty.call(message, "uwb"))
                object.uwb = message.uwb;
            if (message.armor != null && $Object.hasOwnProperty.call(message, "armor"))
                object.armor = message.armor;
            if (message.videoTransmission != null && $Object.hasOwnProperty.call(message, "videoTransmission"))
                object.videoTransmission = message.videoTransmission;
            if (message.capacitor != null && $Object.hasOwnProperty.call(message, "capacitor"))
                object.capacitor = message.capacitor;
            if (message.mainController != null && $Object.hasOwnProperty.call(message, "mainController"))
                object.mainController = message.mainController;
            if (message.laserDetectionModule != null && $Object.hasOwnProperty.call(message, "laserDetectionModule"))
                object.laserDetectionModule = message.laserDetectionModule;
            return object;
        };

        /**
         * Converts this RobotModuleStatus to JSON.
         * @function toJSON
         * @memberof robomaster.RobotModuleStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotModuleStatus.prototype.toJSON = function() {
            return RobotModuleStatus.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RobotModuleStatus
         * @function getTypeUrl
         * @memberof robomaster.RobotModuleStatus
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RobotModuleStatus.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RobotModuleStatus";
        };

        return RobotModuleStatus;
    })();

    robomaster.RobotPosition = (function() {

        /**
         * Properties of a RobotPosition.
         * @typedef {Object} robomaster.RobotPosition.$Properties
         * @property {number|null} [x] RobotPosition x
         * @property {number|null} [y] RobotPosition y
         * @property {number|null} [z] RobotPosition z
         * @property {number|null} [yaw] RobotPosition yaw
         * @property {number|null} [robotId] RobotPosition robotId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RobotPosition.
         * @memberof robomaster
         * @interface IRobotPosition
         * @augments robomaster.RobotPosition.$Properties
         * @deprecated Use robomaster.RobotPosition.$Properties instead.
         */

        /**
         * Shape of a RobotPosition.
         * @typedef {robomaster.RobotPosition.$Properties} robomaster.RobotPosition.$Shape
         */

        /**
         * Constructs a new RobotPosition.
         * @memberof robomaster
         * @classdesc Represents a RobotPosition.
         * @constructor
         * @param {robomaster.RobotPosition.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RobotPosition = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RobotPosition x.
         * @member {number|null|undefined} x
         * @memberof robomaster.RobotPosition
         * @instance
         */
        RobotPosition.prototype.x = null;

        /**
         * RobotPosition y.
         * @member {number|null|undefined} y
         * @memberof robomaster.RobotPosition
         * @instance
         */
        RobotPosition.prototype.y = null;

        /**
         * RobotPosition z.
         * @member {number|null|undefined} z
         * @memberof robomaster.RobotPosition
         * @instance
         */
        RobotPosition.prototype.z = null;

        /**
         * RobotPosition yaw.
         * @member {number|null|undefined} yaw
         * @memberof robomaster.RobotPosition
         * @instance
         */
        RobotPosition.prototype.yaw = null;

        /**
         * RobotPosition robotId.
         * @member {number|null|undefined} robotId
         * @memberof robomaster.RobotPosition
         * @instance
         */
        RobotPosition.prototype.robotId = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPosition.prototype, "_x", {
            get: $util.oneOfGetter($oneOfFields = ["x"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPosition.prototype, "_y", {
            get: $util.oneOfGetter($oneOfFields = ["y"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPosition.prototype, "_z", {
            get: $util.oneOfGetter($oneOfFields = ["z"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPosition.prototype, "_yaw", {
            get: $util.oneOfGetter($oneOfFields = ["yaw"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPosition.prototype, "_robotId", {
            get: $util.oneOfGetter($oneOfFields = ["robotId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RobotPosition instance using the specified properties.
         * @function create
         * @memberof robomaster.RobotPosition
         * @static
         * @param {robomaster.RobotPosition.$Properties=} [properties] Properties to set
         * @returns {robomaster.RobotPosition} RobotPosition instance
         * @type {{
         *   (properties: robomaster.RobotPosition.$Shape): robomaster.RobotPosition & robomaster.RobotPosition.$Shape;
         *   (properties?: robomaster.RobotPosition.$Properties): robomaster.RobotPosition;
         * }}
         */
        RobotPosition.create = function(properties) {
            return new RobotPosition(properties);
        };

        /**
         * Encodes the specified RobotPosition message. Does not implicitly {@link robomaster.RobotPosition.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RobotPosition
         * @static
         * @param {robomaster.RobotPosition.$Properties} message RobotPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotPosition.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && $Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            if (message.yaw != null && $Object.hasOwnProperty.call(message, "yaw"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.yaw);
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.robotId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RobotPosition message, length delimited. Does not implicitly {@link robomaster.RobotPosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RobotPosition
         * @static
         * @param {robomaster.RobotPosition.$Properties} message RobotPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotPosition.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RobotPosition message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RobotPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RobotPosition & robomaster.RobotPosition.$Shape} RobotPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotPosition.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RobotPosition();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 5)
                            break;
                        message.x = reader.float();
                        message._x = "x";
                        continue;
                    }
                case 2: {
                        if (wireType !== 5)
                            break;
                        message.y = reader.float();
                        message._y = "y";
                        continue;
                    }
                case 3: {
                        if (wireType !== 5)
                            break;
                        message.z = reader.float();
                        message._z = "z";
                        continue;
                    }
                case 4: {
                        if (wireType !== 5)
                            break;
                        message.yaw = reader.float();
                        message._yaw = "yaw";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.robotId = reader.uint32();
                        message._robotId = "robotId";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RobotPosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RobotPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RobotPosition & robomaster.RobotPosition.$Shape} RobotPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotPosition.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotPosition message.
         * @function verify
         * @memberof robomaster.RobotPosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotPosition.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.x != null && $Object.hasOwnProperty.call(message, "x")) {
                properties._x = 1;
                if (typeof message.x !== "number")
                    return "x: number expected";
            }
            if (message.y != null && $Object.hasOwnProperty.call(message, "y")) {
                properties._y = 1;
                if (typeof message.y !== "number")
                    return "y: number expected";
            }
            if (message.z != null && $Object.hasOwnProperty.call(message, "z")) {
                properties._z = 1;
                if (typeof message.z !== "number")
                    return "z: number expected";
            }
            if (message.yaw != null && $Object.hasOwnProperty.call(message, "yaw")) {
                properties._yaw = 1;
                if (typeof message.yaw !== "number")
                    return "yaw: number expected";
            }
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId")) {
                properties._robotId = 1;
                if (!$util.isInteger(message.robotId))
                    return "robotId: integer expected";
            }
            return null;
        };

        /**
         * Creates a RobotPosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RobotPosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RobotPosition} RobotPosition
         */
        RobotPosition.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RobotPosition)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RobotPosition: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RobotPosition();
            if (object.x != null)
                message.x = $Number(object.x);
            if (object.y != null)
                message.y = $Number(object.y);
            if (object.z != null)
                message.z = $Number(object.z);
            if (object.yaw != null)
                message.yaw = $Number(object.yaw);
            if (object.robotId != null)
                message.robotId = object.robotId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RobotPosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RobotPosition
         * @static
         * @param {robomaster.RobotPosition} message RobotPosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotPosition.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.x != null && $Object.hasOwnProperty.call(message, "x"))
                object.x = options.json && !$isFinite(message.x) ? $String(message.x) : message.x;
            if (message.y != null && $Object.hasOwnProperty.call(message, "y"))
                object.y = options.json && !$isFinite(message.y) ? $String(message.y) : message.y;
            if (message.z != null && $Object.hasOwnProperty.call(message, "z"))
                object.z = options.json && !$isFinite(message.z) ? $String(message.z) : message.z;
            if (message.yaw != null && $Object.hasOwnProperty.call(message, "yaw"))
                object.yaw = options.json && !$isFinite(message.yaw) ? $String(message.yaw) : message.yaw;
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId"))
                object.robotId = message.robotId;
            return object;
        };

        /**
         * Converts this RobotPosition to JSON.
         * @function toJSON
         * @memberof robomaster.RobotPosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotPosition.prototype.toJSON = function() {
            return RobotPosition.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RobotPosition
         * @function getTypeUrl
         * @memberof robomaster.RobotPosition
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RobotPosition.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RobotPosition";
        };

        return RobotPosition;
    })();

    robomaster.Buff = (function() {

        /**
         * Properties of a Buff.
         * @typedef {Object} robomaster.Buff.$Properties
         * @property {number|null} [robotId] Buff robotId
         * @property {number|null} [buffType] Buff buffType
         * @property {number|null} [buffLevel] Buff buffLevel
         * @property {number|null} [buffMaxTime] Buff buffMaxTime
         * @property {number|null} [buffLeftTime] Buff buffLeftTime
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Buff.
         * @memberof robomaster
         * @interface IBuff
         * @augments robomaster.Buff.$Properties
         * @deprecated Use robomaster.Buff.$Properties instead.
         */

        /**
         * Shape of a Buff.
         * @typedef {robomaster.Buff.$Properties} robomaster.Buff.$Shape
         */

        /**
         * Constructs a new Buff.
         * @memberof robomaster
         * @classdesc Represents a Buff.
         * @constructor
         * @param {robomaster.Buff.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Buff = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Buff robotId.
         * @member {number|null|undefined} robotId
         * @memberof robomaster.Buff
         * @instance
         */
        Buff.prototype.robotId = null;

        /**
         * Buff buffType.
         * @member {number|null|undefined} buffType
         * @memberof robomaster.Buff
         * @instance
         */
        Buff.prototype.buffType = null;

        /**
         * Buff buffLevel.
         * @member {number|null|undefined} buffLevel
         * @memberof robomaster.Buff
         * @instance
         */
        Buff.prototype.buffLevel = null;

        /**
         * Buff buffMaxTime.
         * @member {number|null|undefined} buffMaxTime
         * @memberof robomaster.Buff
         * @instance
         */
        Buff.prototype.buffMaxTime = null;

        /**
         * Buff buffLeftTime.
         * @member {number|null|undefined} buffLeftTime
         * @memberof robomaster.Buff
         * @instance
         */
        Buff.prototype.buffLeftTime = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(Buff.prototype, "_robotId", {
            get: $util.oneOfGetter($oneOfFields = ["robotId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(Buff.prototype, "_buffType", {
            get: $util.oneOfGetter($oneOfFields = ["buffType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(Buff.prototype, "_buffLevel", {
            get: $util.oneOfGetter($oneOfFields = ["buffLevel"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(Buff.prototype, "_buffMaxTime", {
            get: $util.oneOfGetter($oneOfFields = ["buffMaxTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(Buff.prototype, "_buffLeftTime", {
            get: $util.oneOfGetter($oneOfFields = ["buffLeftTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Buff instance using the specified properties.
         * @function create
         * @memberof robomaster.Buff
         * @static
         * @param {robomaster.Buff.$Properties=} [properties] Properties to set
         * @returns {robomaster.Buff} Buff instance
         * @type {{
         *   (properties: robomaster.Buff.$Shape): robomaster.Buff & robomaster.Buff.$Shape;
         *   (properties?: robomaster.Buff.$Properties): robomaster.Buff;
         * }}
         */
        Buff.create = function(properties) {
            return new Buff(properties);
        };

        /**
         * Encodes the specified Buff message. Does not implicitly {@link robomaster.Buff.verify|verify} messages.
         * @function encode
         * @memberof robomaster.Buff
         * @static
         * @param {robomaster.Buff.$Properties} message Buff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Buff.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.robotId);
            if (message.buffType != null && $Object.hasOwnProperty.call(message, "buffType"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.buffType);
            if (message.buffLevel != null && $Object.hasOwnProperty.call(message, "buffLevel"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.buffLevel);
            if (message.buffMaxTime != null && $Object.hasOwnProperty.call(message, "buffMaxTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.buffMaxTime);
            if (message.buffLeftTime != null && $Object.hasOwnProperty.call(message, "buffLeftTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.buffLeftTime);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Buff message, length delimited. Does not implicitly {@link robomaster.Buff.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.Buff
         * @static
         * @param {robomaster.Buff.$Properties} message Buff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Buff.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Buff message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.Buff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.Buff & robomaster.Buff.$Shape} Buff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Buff.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.Buff();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.robotId = reader.uint32();
                        message._robotId = "robotId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.buffType = reader.uint32();
                        message._buffType = "buffType";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.buffLevel = reader.int32();
                        message._buffLevel = "buffLevel";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.buffMaxTime = reader.uint32();
                        message._buffMaxTime = "buffMaxTime";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.buffLeftTime = reader.uint32();
                        message._buffLeftTime = "buffLeftTime";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Buff message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.Buff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.Buff & robomaster.Buff.$Shape} Buff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Buff.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Buff message.
         * @function verify
         * @memberof robomaster.Buff
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Buff.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId")) {
                properties._robotId = 1;
                if (!$util.isInteger(message.robotId))
                    return "robotId: integer expected";
            }
            if (message.buffType != null && $Object.hasOwnProperty.call(message, "buffType")) {
                properties._buffType = 1;
                if (!$util.isInteger(message.buffType))
                    return "buffType: integer expected";
            }
            if (message.buffLevel != null && $Object.hasOwnProperty.call(message, "buffLevel")) {
                properties._buffLevel = 1;
                if (!$util.isInteger(message.buffLevel))
                    return "buffLevel: integer expected";
            }
            if (message.buffMaxTime != null && $Object.hasOwnProperty.call(message, "buffMaxTime")) {
                properties._buffMaxTime = 1;
                if (!$util.isInteger(message.buffMaxTime))
                    return "buffMaxTime: integer expected";
            }
            if (message.buffLeftTime != null && $Object.hasOwnProperty.call(message, "buffLeftTime")) {
                properties._buffLeftTime = 1;
                if (!$util.isInteger(message.buffLeftTime))
                    return "buffLeftTime: integer expected";
            }
            return null;
        };

        /**
         * Creates a Buff message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.Buff
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.Buff} Buff
         */
        Buff.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.Buff)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.Buff: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.Buff();
            if (object.robotId != null)
                message.robotId = object.robotId >>> 0;
            if (object.buffType != null)
                message.buffType = object.buffType >>> 0;
            if (object.buffLevel != null)
                message.buffLevel = object.buffLevel | 0;
            if (object.buffMaxTime != null)
                message.buffMaxTime = object.buffMaxTime >>> 0;
            if (object.buffLeftTime != null)
                message.buffLeftTime = object.buffLeftTime >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Buff message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.Buff
         * @static
         * @param {robomaster.Buff} message Buff
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Buff.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.robotId != null && $Object.hasOwnProperty.call(message, "robotId"))
                object.robotId = message.robotId;
            if (message.buffType != null && $Object.hasOwnProperty.call(message, "buffType"))
                object.buffType = message.buffType;
            if (message.buffLevel != null && $Object.hasOwnProperty.call(message, "buffLevel"))
                object.buffLevel = message.buffLevel;
            if (message.buffMaxTime != null && $Object.hasOwnProperty.call(message, "buffMaxTime"))
                object.buffMaxTime = message.buffMaxTime;
            if (message.buffLeftTime != null && $Object.hasOwnProperty.call(message, "buffLeftTime"))
                object.buffLeftTime = message.buffLeftTime;
            return object;
        };

        /**
         * Converts this Buff to JSON.
         * @function toJSON
         * @memberof robomaster.Buff
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Buff.prototype.toJSON = function() {
            return Buff.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Buff
         * @function getTypeUrl
         * @memberof robomaster.Buff
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Buff.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.Buff";
        };

        return Buff;
    })();

    robomaster.PenaltyInfo = (function() {

        /**
         * Properties of a PenaltyInfo.
         * @typedef {Object} robomaster.PenaltyInfo.$Properties
         * @property {number|null} [penaltyType] PenaltyInfo penaltyType
         * @property {number|null} [penaltyEffectSec] PenaltyInfo penaltyEffectSec
         * @property {number|null} [totalPenaltyNum] PenaltyInfo totalPenaltyNum
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PenaltyInfo.
         * @memberof robomaster
         * @interface IPenaltyInfo
         * @augments robomaster.PenaltyInfo.$Properties
         * @deprecated Use robomaster.PenaltyInfo.$Properties instead.
         */

        /**
         * Shape of a PenaltyInfo.
         * @typedef {robomaster.PenaltyInfo.$Properties} robomaster.PenaltyInfo.$Shape
         */

        /**
         * Constructs a new PenaltyInfo.
         * @memberof robomaster
         * @classdesc Represents a PenaltyInfo.
         * @constructor
         * @param {robomaster.PenaltyInfo.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PenaltyInfo = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * PenaltyInfo penaltyType.
         * @member {number|null|undefined} penaltyType
         * @memberof robomaster.PenaltyInfo
         * @instance
         */
        PenaltyInfo.prototype.penaltyType = null;

        /**
         * PenaltyInfo penaltyEffectSec.
         * @member {number|null|undefined} penaltyEffectSec
         * @memberof robomaster.PenaltyInfo
         * @instance
         */
        PenaltyInfo.prototype.penaltyEffectSec = null;

        /**
         * PenaltyInfo totalPenaltyNum.
         * @member {number|null|undefined} totalPenaltyNum
         * @memberof robomaster.PenaltyInfo
         * @instance
         */
        PenaltyInfo.prototype.totalPenaltyNum = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PenaltyInfo.prototype, "_penaltyType", {
            get: $util.oneOfGetter($oneOfFields = ["penaltyType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PenaltyInfo.prototype, "_penaltyEffectSec", {
            get: $util.oneOfGetter($oneOfFields = ["penaltyEffectSec"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PenaltyInfo.prototype, "_totalPenaltyNum", {
            get: $util.oneOfGetter($oneOfFields = ["totalPenaltyNum"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PenaltyInfo instance using the specified properties.
         * @function create
         * @memberof robomaster.PenaltyInfo
         * @static
         * @param {robomaster.PenaltyInfo.$Properties=} [properties] Properties to set
         * @returns {robomaster.PenaltyInfo} PenaltyInfo instance
         * @type {{
         *   (properties: robomaster.PenaltyInfo.$Shape): robomaster.PenaltyInfo & robomaster.PenaltyInfo.$Shape;
         *   (properties?: robomaster.PenaltyInfo.$Properties): robomaster.PenaltyInfo;
         * }}
         */
        PenaltyInfo.create = function(properties) {
            return new PenaltyInfo(properties);
        };

        /**
         * Encodes the specified PenaltyInfo message. Does not implicitly {@link robomaster.PenaltyInfo.verify|verify} messages.
         * @function encode
         * @memberof robomaster.PenaltyInfo
         * @static
         * @param {robomaster.PenaltyInfo.$Properties} message PenaltyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PenaltyInfo.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.penaltyType != null && $Object.hasOwnProperty.call(message, "penaltyType"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.penaltyType);
            if (message.penaltyEffectSec != null && $Object.hasOwnProperty.call(message, "penaltyEffectSec"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.penaltyEffectSec);
            if (message.totalPenaltyNum != null && $Object.hasOwnProperty.call(message, "totalPenaltyNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.totalPenaltyNum);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PenaltyInfo message, length delimited. Does not implicitly {@link robomaster.PenaltyInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.PenaltyInfo
         * @static
         * @param {robomaster.PenaltyInfo.$Properties} message PenaltyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PenaltyInfo.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a PenaltyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.PenaltyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.PenaltyInfo & robomaster.PenaltyInfo.$Shape} PenaltyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PenaltyInfo.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.PenaltyInfo();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.penaltyType = reader.uint32();
                        message._penaltyType = "penaltyType";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.penaltyEffectSec = reader.uint32();
                        message._penaltyEffectSec = "penaltyEffectSec";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.totalPenaltyNum = reader.uint32();
                        message._totalPenaltyNum = "totalPenaltyNum";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PenaltyInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.PenaltyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.PenaltyInfo & robomaster.PenaltyInfo.$Shape} PenaltyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PenaltyInfo.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PenaltyInfo message.
         * @function verify
         * @memberof robomaster.PenaltyInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PenaltyInfo.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.penaltyType != null && $Object.hasOwnProperty.call(message, "penaltyType")) {
                properties._penaltyType = 1;
                if (!$util.isInteger(message.penaltyType))
                    return "penaltyType: integer expected";
            }
            if (message.penaltyEffectSec != null && $Object.hasOwnProperty.call(message, "penaltyEffectSec")) {
                properties._penaltyEffectSec = 1;
                if (!$util.isInteger(message.penaltyEffectSec))
                    return "penaltyEffectSec: integer expected";
            }
            if (message.totalPenaltyNum != null && $Object.hasOwnProperty.call(message, "totalPenaltyNum")) {
                properties._totalPenaltyNum = 1;
                if (!$util.isInteger(message.totalPenaltyNum))
                    return "totalPenaltyNum: integer expected";
            }
            return null;
        };

        /**
         * Creates a PenaltyInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.PenaltyInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.PenaltyInfo} PenaltyInfo
         */
        PenaltyInfo.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.PenaltyInfo)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.PenaltyInfo: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.PenaltyInfo();
            if (object.penaltyType != null)
                message.penaltyType = object.penaltyType >>> 0;
            if (object.penaltyEffectSec != null)
                message.penaltyEffectSec = object.penaltyEffectSec >>> 0;
            if (object.totalPenaltyNum != null)
                message.totalPenaltyNum = object.totalPenaltyNum >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PenaltyInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.PenaltyInfo
         * @static
         * @param {robomaster.PenaltyInfo} message PenaltyInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PenaltyInfo.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.penaltyType != null && $Object.hasOwnProperty.call(message, "penaltyType"))
                object.penaltyType = message.penaltyType;
            if (message.penaltyEffectSec != null && $Object.hasOwnProperty.call(message, "penaltyEffectSec"))
                object.penaltyEffectSec = message.penaltyEffectSec;
            if (message.totalPenaltyNum != null && $Object.hasOwnProperty.call(message, "totalPenaltyNum"))
                object.totalPenaltyNum = message.totalPenaltyNum;
            return object;
        };

        /**
         * Converts this PenaltyInfo to JSON.
         * @function toJSON
         * @memberof robomaster.PenaltyInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PenaltyInfo.prototype.toJSON = function() {
            return PenaltyInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PenaltyInfo
         * @function getTypeUrl
         * @memberof robomaster.PenaltyInfo
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PenaltyInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.PenaltyInfo";
        };

        return PenaltyInfo;
    })();

    robomaster.RobotPathPlanInfo = (function() {

        /**
         * Properties of a RobotPathPlanInfo.
         * @typedef {Object} robomaster.RobotPathPlanInfo.$Properties
         * @property {number|null} [intention] RobotPathPlanInfo intention
         * @property {number|null} [startPosX] RobotPathPlanInfo startPosX
         * @property {number|null} [startPosY] RobotPathPlanInfo startPosY
         * @property {Array.<number>|null} [offsetX] RobotPathPlanInfo offsetX
         * @property {Array.<number>|null} [offsetY] RobotPathPlanInfo offsetY
         * @property {number|null} [senderId] RobotPathPlanInfo senderId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RobotPathPlanInfo.
         * @memberof robomaster
         * @interface IRobotPathPlanInfo
         * @augments robomaster.RobotPathPlanInfo.$Properties
         * @deprecated Use robomaster.RobotPathPlanInfo.$Properties instead.
         */

        /**
         * Shape of a RobotPathPlanInfo.
         * @typedef {robomaster.RobotPathPlanInfo.$Properties} robomaster.RobotPathPlanInfo.$Shape
         */

        /**
         * Constructs a new RobotPathPlanInfo.
         * @memberof robomaster
         * @classdesc Represents a RobotPathPlanInfo.
         * @constructor
         * @param {robomaster.RobotPathPlanInfo.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RobotPathPlanInfo = function (properties) {
            this.offsetX = [];
            this.offsetY = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RobotPathPlanInfo intention.
         * @member {number|null|undefined} intention
         * @memberof robomaster.RobotPathPlanInfo
         * @instance
         */
        RobotPathPlanInfo.prototype.intention = null;

        /**
         * RobotPathPlanInfo startPosX.
         * @member {number|null|undefined} startPosX
         * @memberof robomaster.RobotPathPlanInfo
         * @instance
         */
        RobotPathPlanInfo.prototype.startPosX = null;

        /**
         * RobotPathPlanInfo startPosY.
         * @member {number|null|undefined} startPosY
         * @memberof robomaster.RobotPathPlanInfo
         * @instance
         */
        RobotPathPlanInfo.prototype.startPosY = null;

        /**
         * RobotPathPlanInfo offsetX.
         * @member {Array.<number>} offsetX
         * @memberof robomaster.RobotPathPlanInfo
         * @instance
         */
        RobotPathPlanInfo.prototype.offsetX = $util.emptyArray;

        /**
         * RobotPathPlanInfo offsetY.
         * @member {Array.<number>} offsetY
         * @memberof robomaster.RobotPathPlanInfo
         * @instance
         */
        RobotPathPlanInfo.prototype.offsetY = $util.emptyArray;

        /**
         * RobotPathPlanInfo senderId.
         * @member {number|null|undefined} senderId
         * @memberof robomaster.RobotPathPlanInfo
         * @instance
         */
        RobotPathPlanInfo.prototype.senderId = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPathPlanInfo.prototype, "_intention", {
            get: $util.oneOfGetter($oneOfFields = ["intention"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPathPlanInfo.prototype, "_startPosX", {
            get: $util.oneOfGetter($oneOfFields = ["startPosX"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPathPlanInfo.prototype, "_startPosY", {
            get: $util.oneOfGetter($oneOfFields = ["startPosY"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPathPlanInfo.prototype, "_senderId", {
            get: $util.oneOfGetter($oneOfFields = ["senderId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RobotPathPlanInfo instance using the specified properties.
         * @function create
         * @memberof robomaster.RobotPathPlanInfo
         * @static
         * @param {robomaster.RobotPathPlanInfo.$Properties=} [properties] Properties to set
         * @returns {robomaster.RobotPathPlanInfo} RobotPathPlanInfo instance
         * @type {{
         *   (properties: robomaster.RobotPathPlanInfo.$Shape): robomaster.RobotPathPlanInfo & robomaster.RobotPathPlanInfo.$Shape;
         *   (properties?: robomaster.RobotPathPlanInfo.$Properties): robomaster.RobotPathPlanInfo;
         * }}
         */
        RobotPathPlanInfo.create = function(properties) {
            return new RobotPathPlanInfo(properties);
        };

        /**
         * Encodes the specified RobotPathPlanInfo message. Does not implicitly {@link robomaster.RobotPathPlanInfo.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RobotPathPlanInfo
         * @static
         * @param {robomaster.RobotPathPlanInfo.$Properties} message RobotPathPlanInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotPathPlanInfo.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.intention != null && $Object.hasOwnProperty.call(message, "intention"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.intention);
            if (message.startPosX != null && $Object.hasOwnProperty.call(message, "startPosX"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.startPosX);
            if (message.startPosY != null && $Object.hasOwnProperty.call(message, "startPosY"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.startPosY);
            if (message.offsetX != null && message.offsetX.length)
                writer.uint32(/* id 4, wireType 2 =*/34).int32s(message.offsetX);
            if (message.offsetY != null && message.offsetY.length)
                writer.uint32(/* id 5, wireType 2 =*/42).int32s(message.offsetY);
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.senderId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RobotPathPlanInfo message, length delimited. Does not implicitly {@link robomaster.RobotPathPlanInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RobotPathPlanInfo
         * @static
         * @param {robomaster.RobotPathPlanInfo.$Properties} message RobotPathPlanInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotPathPlanInfo.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RobotPathPlanInfo message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RobotPathPlanInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RobotPathPlanInfo & robomaster.RobotPathPlanInfo.$Shape} RobotPathPlanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotPathPlanInfo.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RobotPathPlanInfo();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.intention = reader.uint32();
                        message._intention = "intention";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.startPosX = reader.uint32();
                        message._startPosX = "startPosX";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.startPosY = reader.uint32();
                        message._startPosY = "startPosY";
                        continue;
                    }
                case 4: {
                        if (wireType === 2) {
                            if (!(message.offsetX && message.offsetX.length))
                                message.offsetX = [];
                            reader.int32s(message.offsetX);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.offsetX && message.offsetX.length))
                            message.offsetX = [];
                        message.offsetX.push(reader.int32());
                        continue;
                    }
                case 5: {
                        if (wireType === 2) {
                            if (!(message.offsetY && message.offsetY.length))
                                message.offsetY = [];
                            reader.int32s(message.offsetY);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.offsetY && message.offsetY.length))
                            message.offsetY = [];
                        message.offsetY.push(reader.int32());
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.senderId = reader.uint32();
                        message._senderId = "senderId";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RobotPathPlanInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RobotPathPlanInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RobotPathPlanInfo & robomaster.RobotPathPlanInfo.$Shape} RobotPathPlanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotPathPlanInfo.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotPathPlanInfo message.
         * @function verify
         * @memberof robomaster.RobotPathPlanInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotPathPlanInfo.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.intention != null && $Object.hasOwnProperty.call(message, "intention")) {
                properties._intention = 1;
                if (!$util.isInteger(message.intention))
                    return "intention: integer expected";
            }
            if (message.startPosX != null && $Object.hasOwnProperty.call(message, "startPosX")) {
                properties._startPosX = 1;
                if (!$util.isInteger(message.startPosX))
                    return "startPosX: integer expected";
            }
            if (message.startPosY != null && $Object.hasOwnProperty.call(message, "startPosY")) {
                properties._startPosY = 1;
                if (!$util.isInteger(message.startPosY))
                    return "startPosY: integer expected";
            }
            if (message.offsetX != null && $Object.hasOwnProperty.call(message, "offsetX")) {
                if (!$Array.isArray(message.offsetX))
                    return "offsetX: array expected";
                for (let i = 0; i < message.offsetX.length; ++i)
                    if (!$util.isInteger(message.offsetX[i]))
                        return "offsetX: integer[] expected";
            }
            if (message.offsetY != null && $Object.hasOwnProperty.call(message, "offsetY")) {
                if (!$Array.isArray(message.offsetY))
                    return "offsetY: array expected";
                for (let i = 0; i < message.offsetY.length; ++i)
                    if (!$util.isInteger(message.offsetY[i]))
                        return "offsetY: integer[] expected";
            }
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId")) {
                properties._senderId = 1;
                if (!$util.isInteger(message.senderId))
                    return "senderId: integer expected";
            }
            return null;
        };

        /**
         * Creates a RobotPathPlanInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RobotPathPlanInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RobotPathPlanInfo} RobotPathPlanInfo
         */
        RobotPathPlanInfo.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RobotPathPlanInfo)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RobotPathPlanInfo: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RobotPathPlanInfo();
            if (object.intention != null)
                message.intention = object.intention >>> 0;
            if (object.startPosX != null)
                message.startPosX = object.startPosX >>> 0;
            if (object.startPosY != null)
                message.startPosY = object.startPosY >>> 0;
            if (object.offsetX) {
                if (!$Array.isArray(object.offsetX))
                    throw $TypeError(".robomaster.RobotPathPlanInfo.offsetX: array expected");
                message.offsetX = $Array(object.offsetX.length);
                for (let i = 0; i < object.offsetX.length; ++i)
                    message.offsetX[i] = object.offsetX[i] | 0;
            }
            if (object.offsetY) {
                if (!$Array.isArray(object.offsetY))
                    throw $TypeError(".robomaster.RobotPathPlanInfo.offsetY: array expected");
                message.offsetY = $Array(object.offsetY.length);
                for (let i = 0; i < object.offsetY.length; ++i)
                    message.offsetY[i] = object.offsetY[i] | 0;
            }
            if (object.senderId != null)
                message.senderId = object.senderId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RobotPathPlanInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RobotPathPlanInfo
         * @static
         * @param {robomaster.RobotPathPlanInfo} message RobotPathPlanInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotPathPlanInfo.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults) {
                object.offsetX = [];
                object.offsetY = [];
            }
            if (message.intention != null && $Object.hasOwnProperty.call(message, "intention"))
                object.intention = message.intention;
            if (message.startPosX != null && $Object.hasOwnProperty.call(message, "startPosX"))
                object.startPosX = message.startPosX;
            if (message.startPosY != null && $Object.hasOwnProperty.call(message, "startPosY"))
                object.startPosY = message.startPosY;
            if (message.offsetX && message.offsetX.length) {
                object.offsetX = $Array(message.offsetX.length);
                for (let j = 0; j < message.offsetX.length; ++j)
                    object.offsetX[j] = message.offsetX[j];
            }
            if (message.offsetY && message.offsetY.length) {
                object.offsetY = $Array(message.offsetY.length);
                for (let j = 0; j < message.offsetY.length; ++j)
                    object.offsetY[j] = message.offsetY[j];
            }
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId"))
                object.senderId = message.senderId;
            return object;
        };

        /**
         * Converts this RobotPathPlanInfo to JSON.
         * @function toJSON
         * @memberof robomaster.RobotPathPlanInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotPathPlanInfo.prototype.toJSON = function() {
            return RobotPathPlanInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RobotPathPlanInfo
         * @function getTypeUrl
         * @memberof robomaster.RobotPathPlanInfo
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RobotPathPlanInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RobotPathPlanInfo";
        };

        return RobotPathPlanInfo;
    })();

    robomaster.RadarInfoToClient = (function() {

        /**
         * Properties of a RadarInfoToClient.
         * @typedef {Object} robomaster.RadarInfoToClient.$Properties
         * @property {Array.<robomaster.RadarSingleRobotInfo.$Properties>|null} [RadarSingleRobotInfo] RadarInfoToClient RadarSingleRobotInfo
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RadarInfoToClient.
         * @memberof robomaster
         * @interface IRadarInfoToClient
         * @augments robomaster.RadarInfoToClient.$Properties
         * @deprecated Use robomaster.RadarInfoToClient.$Properties instead.
         */

        /**
         * Shape of a RadarInfoToClient.
         * @typedef {robomaster.RadarInfoToClient.$Properties} robomaster.RadarInfoToClient.$Shape
         */

        /**
         * Constructs a new RadarInfoToClient.
         * @memberof robomaster
         * @classdesc Represents a RadarInfoToClient.
         * @constructor
         * @param {robomaster.RadarInfoToClient.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RadarInfoToClient = function (properties) {
            this.RadarSingleRobotInfo = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RadarInfoToClient RadarSingleRobotInfo.
         * @member {Array.<robomaster.RadarSingleRobotInfo.$Properties>} RadarSingleRobotInfo
         * @memberof robomaster.RadarInfoToClient
         * @instance
         */
        RadarInfoToClient.prototype.RadarSingleRobotInfo = $util.emptyArray;

        /**
         * Creates a new RadarInfoToClient instance using the specified properties.
         * @function create
         * @memberof robomaster.RadarInfoToClient
         * @static
         * @param {robomaster.RadarInfoToClient.$Properties=} [properties] Properties to set
         * @returns {robomaster.RadarInfoToClient} RadarInfoToClient instance
         * @type {{
         *   (properties: robomaster.RadarInfoToClient.$Shape): robomaster.RadarInfoToClient & robomaster.RadarInfoToClient.$Shape;
         *   (properties?: robomaster.RadarInfoToClient.$Properties): robomaster.RadarInfoToClient;
         * }}
         */
        RadarInfoToClient.create = function(properties) {
            return new RadarInfoToClient(properties);
        };

        /**
         * Encodes the specified RadarInfoToClient message. Does not implicitly {@link robomaster.RadarInfoToClient.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RadarInfoToClient
         * @static
         * @param {robomaster.RadarInfoToClient.$Properties} message RadarInfoToClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RadarInfoToClient.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.RadarSingleRobotInfo != null && message.RadarSingleRobotInfo.length)
                for (let i = 0; i < message.RadarSingleRobotInfo.length; ++i)
                    $root.robomaster.RadarSingleRobotInfo.encode(message.RadarSingleRobotInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RadarInfoToClient message, length delimited. Does not implicitly {@link robomaster.RadarInfoToClient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RadarInfoToClient
         * @static
         * @param {robomaster.RadarInfoToClient.$Properties} message RadarInfoToClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RadarInfoToClient.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RadarInfoToClient message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RadarInfoToClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RadarInfoToClient & robomaster.RadarInfoToClient.$Shape} RadarInfoToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RadarInfoToClient.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RadarInfoToClient();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.RadarSingleRobotInfo && message.RadarSingleRobotInfo.length))
                            message.RadarSingleRobotInfo = [];
                        message.RadarSingleRobotInfo.push($root.robomaster.RadarSingleRobotInfo.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RadarInfoToClient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RadarInfoToClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RadarInfoToClient & robomaster.RadarInfoToClient.$Shape} RadarInfoToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RadarInfoToClient.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RadarInfoToClient message.
         * @function verify
         * @memberof robomaster.RadarInfoToClient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RadarInfoToClient.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.RadarSingleRobotInfo != null && $Object.hasOwnProperty.call(message, "RadarSingleRobotInfo")) {
                if (!$Array.isArray(message.RadarSingleRobotInfo))
                    return "RadarSingleRobotInfo: array expected";
                for (let i = 0; i < message.RadarSingleRobotInfo.length; ++i) {
                    let error = $root.robomaster.RadarSingleRobotInfo.verify(message.RadarSingleRobotInfo[i], _depth + 1);
                    if (error)
                        return "RadarSingleRobotInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RadarInfoToClient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RadarInfoToClient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RadarInfoToClient} RadarInfoToClient
         */
        RadarInfoToClient.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RadarInfoToClient)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RadarInfoToClient: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RadarInfoToClient();
            if (object.RadarSingleRobotInfo) {
                if (!$Array.isArray(object.RadarSingleRobotInfo))
                    throw $TypeError(".robomaster.RadarInfoToClient.RadarSingleRobotInfo: array expected");
                message.RadarSingleRobotInfo = $Array(object.RadarSingleRobotInfo.length);
                for (let i = 0; i < object.RadarSingleRobotInfo.length; ++i) {
                    if (!$util.isObject(object.RadarSingleRobotInfo[i]))
                        throw $TypeError(".robomaster.RadarInfoToClient.RadarSingleRobotInfo: object expected");
                    message.RadarSingleRobotInfo[i] = $root.robomaster.RadarSingleRobotInfo.fromObject(object.RadarSingleRobotInfo[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RadarInfoToClient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RadarInfoToClient
         * @static
         * @param {robomaster.RadarInfoToClient} message RadarInfoToClient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RadarInfoToClient.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.RadarSingleRobotInfo = [];
            if (message.RadarSingleRobotInfo && message.RadarSingleRobotInfo.length) {
                object.RadarSingleRobotInfo = $Array(message.RadarSingleRobotInfo.length);
                for (let j = 0; j < message.RadarSingleRobotInfo.length; ++j)
                    object.RadarSingleRobotInfo[j] = $root.robomaster.RadarSingleRobotInfo.toObject(message.RadarSingleRobotInfo[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this RadarInfoToClient to JSON.
         * @function toJSON
         * @memberof robomaster.RadarInfoToClient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RadarInfoToClient.prototype.toJSON = function() {
            return RadarInfoToClient.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RadarInfoToClient
         * @function getTypeUrl
         * @memberof robomaster.RadarInfoToClient
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RadarInfoToClient.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RadarInfoToClient";
        };

        return RadarInfoToClient;
    })();

    robomaster.RadarSingleRobotInfo = (function() {

        /**
         * Properties of a RadarSingleRobotInfo.
         * @typedef {Object} robomaster.RadarSingleRobotInfo.$Properties
         * @property {number|null} [targetPosX] RadarSingleRobotInfo targetPosX
         * @property {number|null} [targetPosY] RadarSingleRobotInfo targetPosY
         * @property {number|null} [isHighLight] RadarSingleRobotInfo isHighLight
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RadarSingleRobotInfo.
         * @memberof robomaster
         * @interface IRadarSingleRobotInfo
         * @augments robomaster.RadarSingleRobotInfo.$Properties
         * @deprecated Use robomaster.RadarSingleRobotInfo.$Properties instead.
         */

        /**
         * Shape of a RadarSingleRobotInfo.
         * @typedef {robomaster.RadarSingleRobotInfo.$Properties} robomaster.RadarSingleRobotInfo.$Shape
         */

        /**
         * Constructs a new RadarSingleRobotInfo.
         * @memberof robomaster
         * @classdesc Represents a RadarSingleRobotInfo.
         * @constructor
         * @param {robomaster.RadarSingleRobotInfo.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RadarSingleRobotInfo = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RadarSingleRobotInfo targetPosX.
         * @member {number|null|undefined} targetPosX
         * @memberof robomaster.RadarSingleRobotInfo
         * @instance
         */
        RadarSingleRobotInfo.prototype.targetPosX = null;

        /**
         * RadarSingleRobotInfo targetPosY.
         * @member {number|null|undefined} targetPosY
         * @memberof robomaster.RadarSingleRobotInfo
         * @instance
         */
        RadarSingleRobotInfo.prototype.targetPosY = null;

        /**
         * RadarSingleRobotInfo isHighLight.
         * @member {number|null|undefined} isHighLight
         * @memberof robomaster.RadarSingleRobotInfo
         * @instance
         */
        RadarSingleRobotInfo.prototype.isHighLight = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RadarSingleRobotInfo.prototype, "_targetPosX", {
            get: $util.oneOfGetter($oneOfFields = ["targetPosX"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RadarSingleRobotInfo.prototype, "_targetPosY", {
            get: $util.oneOfGetter($oneOfFields = ["targetPosY"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RadarSingleRobotInfo.prototype, "_isHighLight", {
            get: $util.oneOfGetter($oneOfFields = ["isHighLight"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RadarSingleRobotInfo instance using the specified properties.
         * @function create
         * @memberof robomaster.RadarSingleRobotInfo
         * @static
         * @param {robomaster.RadarSingleRobotInfo.$Properties=} [properties] Properties to set
         * @returns {robomaster.RadarSingleRobotInfo} RadarSingleRobotInfo instance
         * @type {{
         *   (properties: robomaster.RadarSingleRobotInfo.$Shape): robomaster.RadarSingleRobotInfo & robomaster.RadarSingleRobotInfo.$Shape;
         *   (properties?: robomaster.RadarSingleRobotInfo.$Properties): robomaster.RadarSingleRobotInfo;
         * }}
         */
        RadarSingleRobotInfo.create = function(properties) {
            return new RadarSingleRobotInfo(properties);
        };

        /**
         * Encodes the specified RadarSingleRobotInfo message. Does not implicitly {@link robomaster.RadarSingleRobotInfo.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RadarSingleRobotInfo
         * @static
         * @param {robomaster.RadarSingleRobotInfo.$Properties} message RadarSingleRobotInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RadarSingleRobotInfo.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.targetPosX != null && $Object.hasOwnProperty.call(message, "targetPosX"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.targetPosX);
            if (message.targetPosY != null && $Object.hasOwnProperty.call(message, "targetPosY"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.targetPosY);
            if (message.isHighLight != null && $Object.hasOwnProperty.call(message, "isHighLight"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.isHighLight);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RadarSingleRobotInfo message, length delimited. Does not implicitly {@link robomaster.RadarSingleRobotInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RadarSingleRobotInfo
         * @static
         * @param {robomaster.RadarSingleRobotInfo.$Properties} message RadarSingleRobotInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RadarSingleRobotInfo.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RadarSingleRobotInfo message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RadarSingleRobotInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RadarSingleRobotInfo & robomaster.RadarSingleRobotInfo.$Shape} RadarSingleRobotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RadarSingleRobotInfo.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RadarSingleRobotInfo();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.targetPosX = reader.uint32();
                        message._targetPosX = "targetPosX";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.targetPosY = reader.uint32();
                        message._targetPosY = "targetPosY";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.isHighLight = reader.uint32();
                        message._isHighLight = "isHighLight";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RadarSingleRobotInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RadarSingleRobotInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RadarSingleRobotInfo & robomaster.RadarSingleRobotInfo.$Shape} RadarSingleRobotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RadarSingleRobotInfo.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RadarSingleRobotInfo message.
         * @function verify
         * @memberof robomaster.RadarSingleRobotInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RadarSingleRobotInfo.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.targetPosX != null && $Object.hasOwnProperty.call(message, "targetPosX")) {
                properties._targetPosX = 1;
                if (!$util.isInteger(message.targetPosX))
                    return "targetPosX: integer expected";
            }
            if (message.targetPosY != null && $Object.hasOwnProperty.call(message, "targetPosY")) {
                properties._targetPosY = 1;
                if (!$util.isInteger(message.targetPosY))
                    return "targetPosY: integer expected";
            }
            if (message.isHighLight != null && $Object.hasOwnProperty.call(message, "isHighLight")) {
                properties._isHighLight = 1;
                if (!$util.isInteger(message.isHighLight))
                    return "isHighLight: integer expected";
            }
            return null;
        };

        /**
         * Creates a RadarSingleRobotInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RadarSingleRobotInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RadarSingleRobotInfo} RadarSingleRobotInfo
         */
        RadarSingleRobotInfo.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RadarSingleRobotInfo)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RadarSingleRobotInfo: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RadarSingleRobotInfo();
            if (object.targetPosX != null)
                message.targetPosX = object.targetPosX >>> 0;
            if (object.targetPosY != null)
                message.targetPosY = object.targetPosY >>> 0;
            if (object.isHighLight != null)
                message.isHighLight = object.isHighLight >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RadarSingleRobotInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RadarSingleRobotInfo
         * @static
         * @param {robomaster.RadarSingleRobotInfo} message RadarSingleRobotInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RadarSingleRobotInfo.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.targetPosX != null && $Object.hasOwnProperty.call(message, "targetPosX"))
                object.targetPosX = message.targetPosX;
            if (message.targetPosY != null && $Object.hasOwnProperty.call(message, "targetPosY"))
                object.targetPosY = message.targetPosY;
            if (message.isHighLight != null && $Object.hasOwnProperty.call(message, "isHighLight"))
                object.isHighLight = message.isHighLight;
            return object;
        };

        /**
         * Converts this RadarSingleRobotInfo to JSON.
         * @function toJSON
         * @memberof robomaster.RadarSingleRobotInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RadarSingleRobotInfo.prototype.toJSON = function() {
            return RadarSingleRobotInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RadarSingleRobotInfo
         * @function getTypeUrl
         * @memberof robomaster.RadarSingleRobotInfo
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RadarSingleRobotInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RadarSingleRobotInfo";
        };

        return RadarSingleRobotInfo;
    })();

    robomaster.CustomByteBlock = (function() {

        /**
         * Properties of a CustomByteBlock.
         * @typedef {Object} robomaster.CustomByteBlock.$Properties
         * @property {Uint8Array|null} [data] CustomByteBlock data
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a CustomByteBlock.
         * @memberof robomaster
         * @interface ICustomByteBlock
         * @augments robomaster.CustomByteBlock.$Properties
         * @deprecated Use robomaster.CustomByteBlock.$Properties instead.
         */

        /**
         * Shape of a CustomByteBlock.
         * @typedef {robomaster.CustomByteBlock.$Properties} robomaster.CustomByteBlock.$Shape
         */

        /**
         * Constructs a new CustomByteBlock.
         * @memberof robomaster
         * @classdesc Represents a CustomByteBlock.
         * @constructor
         * @param {robomaster.CustomByteBlock.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const CustomByteBlock = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * CustomByteBlock data.
         * @member {Uint8Array|null|undefined} data
         * @memberof robomaster.CustomByteBlock
         * @instance
         */
        CustomByteBlock.prototype.data = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(CustomByteBlock.prototype, "_data", {
            get: $util.oneOfGetter($oneOfFields = ["data"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CustomByteBlock instance using the specified properties.
         * @function create
         * @memberof robomaster.CustomByteBlock
         * @static
         * @param {robomaster.CustomByteBlock.$Properties=} [properties] Properties to set
         * @returns {robomaster.CustomByteBlock} CustomByteBlock instance
         * @type {{
         *   (properties: robomaster.CustomByteBlock.$Shape): robomaster.CustomByteBlock & robomaster.CustomByteBlock.$Shape;
         *   (properties?: robomaster.CustomByteBlock.$Properties): robomaster.CustomByteBlock;
         * }}
         */
        CustomByteBlock.create = function(properties) {
            return new CustomByteBlock(properties);
        };

        /**
         * Encodes the specified CustomByteBlock message. Does not implicitly {@link robomaster.CustomByteBlock.verify|verify} messages.
         * @function encode
         * @memberof robomaster.CustomByteBlock
         * @static
         * @param {robomaster.CustomByteBlock.$Properties} message CustomByteBlock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomByteBlock.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CustomByteBlock message, length delimited. Does not implicitly {@link robomaster.CustomByteBlock.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.CustomByteBlock
         * @static
         * @param {robomaster.CustomByteBlock.$Properties} message CustomByteBlock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomByteBlock.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a CustomByteBlock message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.CustomByteBlock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.CustomByteBlock & robomaster.CustomByteBlock.$Shape} CustomByteBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomByteBlock.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.CustomByteBlock();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.data = reader.bytes();
                        message._data = "data";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a CustomByteBlock message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.CustomByteBlock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.CustomByteBlock & robomaster.CustomByteBlock.$Shape} CustomByteBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomByteBlock.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CustomByteBlock message.
         * @function verify
         * @memberof robomaster.CustomByteBlock
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomByteBlock.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.data != null && $Object.hasOwnProperty.call(message, "data")) {
                properties._data = 1;
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            }
            return null;
        };

        /**
         * Creates a CustomByteBlock message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.CustomByteBlock
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.CustomByteBlock} CustomByteBlock
         */
        CustomByteBlock.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.CustomByteBlock)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.CustomByteBlock: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.CustomByteBlock();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a CustomByteBlock message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.CustomByteBlock
         * @static
         * @param {robomaster.CustomByteBlock} message CustomByteBlock
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomByteBlock.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
                object.data = options.bytes === $String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this CustomByteBlock to JSON.
         * @function toJSON
         * @memberof robomaster.CustomByteBlock
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomByteBlock.prototype.toJSON = function() {
            return CustomByteBlock.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CustomByteBlock
         * @function getTypeUrl
         * @memberof robomaster.CustomByteBlock
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CustomByteBlock.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.CustomByteBlock";
        };

        return CustomByteBlock;
    })();

    robomaster.TechCoreMotionStateSync = (function() {

        /**
         * Properties of a TechCoreMotionStateSync.
         * @typedef {Object} robomaster.TechCoreMotionStateSync.$Properties
         * @property {number|null} [maximumDifficultyLevel] TechCoreMotionStateSync maximumDifficultyLevel
         * @property {number|null} [basicState] TechCoreMotionStateSync basicState
         * @property {number|null} [putinState] TechCoreMotionStateSync putinState
         * @property {number|null} [moveState] TechCoreMotionStateSync moveState
         * @property {number|null} [rotateState] TechCoreMotionStateSync rotateState
         * @property {number|null} [enemyCoreStatus] TechCoreMotionStateSync enemyCoreStatus
         * @property {number|null} [remainTimeAll] TechCoreMotionStateSync remainTimeAll
         * @property {number|null} [remainTimeStep] TechCoreMotionStateSync remainTimeStep
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a TechCoreMotionStateSync.
         * @memberof robomaster
         * @interface ITechCoreMotionStateSync
         * @augments robomaster.TechCoreMotionStateSync.$Properties
         * @deprecated Use robomaster.TechCoreMotionStateSync.$Properties instead.
         */

        /**
         * Shape of a TechCoreMotionStateSync.
         * @typedef {robomaster.TechCoreMotionStateSync.$Properties} robomaster.TechCoreMotionStateSync.$Shape
         */

        /**
         * Constructs a new TechCoreMotionStateSync.
         * @memberof robomaster
         * @classdesc Represents a TechCoreMotionStateSync.
         * @constructor
         * @param {robomaster.TechCoreMotionStateSync.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const TechCoreMotionStateSync = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * TechCoreMotionStateSync maximumDifficultyLevel.
         * @member {number|null|undefined} maximumDifficultyLevel
         * @memberof robomaster.TechCoreMotionStateSync
         * @instance
         */
        TechCoreMotionStateSync.prototype.maximumDifficultyLevel = null;

        /**
         * TechCoreMotionStateSync basicState.
         * @member {number|null|undefined} basicState
         * @memberof robomaster.TechCoreMotionStateSync
         * @instance
         */
        TechCoreMotionStateSync.prototype.basicState = null;

        /**
         * TechCoreMotionStateSync putinState.
         * @member {number|null|undefined} putinState
         * @memberof robomaster.TechCoreMotionStateSync
         * @instance
         */
        TechCoreMotionStateSync.prototype.putinState = null;

        /**
         * TechCoreMotionStateSync moveState.
         * @member {number|null|undefined} moveState
         * @memberof robomaster.TechCoreMotionStateSync
         * @instance
         */
        TechCoreMotionStateSync.prototype.moveState = null;

        /**
         * TechCoreMotionStateSync rotateState.
         * @member {number|null|undefined} rotateState
         * @memberof robomaster.TechCoreMotionStateSync
         * @instance
         */
        TechCoreMotionStateSync.prototype.rotateState = null;

        /**
         * TechCoreMotionStateSync enemyCoreStatus.
         * @member {number|null|undefined} enemyCoreStatus
         * @memberof robomaster.TechCoreMotionStateSync
         * @instance
         */
        TechCoreMotionStateSync.prototype.enemyCoreStatus = null;

        /**
         * TechCoreMotionStateSync remainTimeAll.
         * @member {number|null|undefined} remainTimeAll
         * @memberof robomaster.TechCoreMotionStateSync
         * @instance
         */
        TechCoreMotionStateSync.prototype.remainTimeAll = null;

        /**
         * TechCoreMotionStateSync remainTimeStep.
         * @member {number|null|undefined} remainTimeStep
         * @memberof robomaster.TechCoreMotionStateSync
         * @instance
         */
        TechCoreMotionStateSync.prototype.remainTimeStep = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(TechCoreMotionStateSync.prototype, "_maximumDifficultyLevel", {
            get: $util.oneOfGetter($oneOfFields = ["maximumDifficultyLevel"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(TechCoreMotionStateSync.prototype, "_basicState", {
            get: $util.oneOfGetter($oneOfFields = ["basicState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(TechCoreMotionStateSync.prototype, "_putinState", {
            get: $util.oneOfGetter($oneOfFields = ["putinState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(TechCoreMotionStateSync.prototype, "_moveState", {
            get: $util.oneOfGetter($oneOfFields = ["moveState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(TechCoreMotionStateSync.prototype, "_rotateState", {
            get: $util.oneOfGetter($oneOfFields = ["rotateState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(TechCoreMotionStateSync.prototype, "_enemyCoreStatus", {
            get: $util.oneOfGetter($oneOfFields = ["enemyCoreStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(TechCoreMotionStateSync.prototype, "_remainTimeAll", {
            get: $util.oneOfGetter($oneOfFields = ["remainTimeAll"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(TechCoreMotionStateSync.prototype, "_remainTimeStep", {
            get: $util.oneOfGetter($oneOfFields = ["remainTimeStep"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new TechCoreMotionStateSync instance using the specified properties.
         * @function create
         * @memberof robomaster.TechCoreMotionStateSync
         * @static
         * @param {robomaster.TechCoreMotionStateSync.$Properties=} [properties] Properties to set
         * @returns {robomaster.TechCoreMotionStateSync} TechCoreMotionStateSync instance
         * @type {{
         *   (properties: robomaster.TechCoreMotionStateSync.$Shape): robomaster.TechCoreMotionStateSync & robomaster.TechCoreMotionStateSync.$Shape;
         *   (properties?: robomaster.TechCoreMotionStateSync.$Properties): robomaster.TechCoreMotionStateSync;
         * }}
         */
        TechCoreMotionStateSync.create = function(properties) {
            return new TechCoreMotionStateSync(properties);
        };

        /**
         * Encodes the specified TechCoreMotionStateSync message. Does not implicitly {@link robomaster.TechCoreMotionStateSync.verify|verify} messages.
         * @function encode
         * @memberof robomaster.TechCoreMotionStateSync
         * @static
         * @param {robomaster.TechCoreMotionStateSync.$Properties} message TechCoreMotionStateSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TechCoreMotionStateSync.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.maximumDifficultyLevel != null && $Object.hasOwnProperty.call(message, "maximumDifficultyLevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.maximumDifficultyLevel);
            if (message.basicState != null && $Object.hasOwnProperty.call(message, "basicState"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.basicState);
            if (message.putinState != null && $Object.hasOwnProperty.call(message, "putinState"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.putinState);
            if (message.moveState != null && $Object.hasOwnProperty.call(message, "moveState"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.moveState);
            if (message.rotateState != null && $Object.hasOwnProperty.call(message, "rotateState"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.rotateState);
            if (message.enemyCoreStatus != null && $Object.hasOwnProperty.call(message, "enemyCoreStatus"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.enemyCoreStatus);
            if (message.remainTimeAll != null && $Object.hasOwnProperty.call(message, "remainTimeAll"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.remainTimeAll);
            if (message.remainTimeStep != null && $Object.hasOwnProperty.call(message, "remainTimeStep"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.remainTimeStep);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified TechCoreMotionStateSync message, length delimited. Does not implicitly {@link robomaster.TechCoreMotionStateSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.TechCoreMotionStateSync
         * @static
         * @param {robomaster.TechCoreMotionStateSync.$Properties} message TechCoreMotionStateSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TechCoreMotionStateSync.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a TechCoreMotionStateSync message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.TechCoreMotionStateSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.TechCoreMotionStateSync & robomaster.TechCoreMotionStateSync.$Shape} TechCoreMotionStateSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TechCoreMotionStateSync.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.TechCoreMotionStateSync();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.maximumDifficultyLevel = reader.uint32();
                        message._maximumDifficultyLevel = "maximumDifficultyLevel";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.basicState = reader.uint32();
                        message._basicState = "basicState";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.putinState = reader.uint32();
                        message._putinState = "putinState";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.moveState = reader.uint32();
                        message._moveState = "moveState";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.rotateState = reader.uint32();
                        message._rotateState = "rotateState";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.enemyCoreStatus = reader.uint32();
                        message._enemyCoreStatus = "enemyCoreStatus";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.remainTimeAll = reader.uint32();
                        message._remainTimeAll = "remainTimeAll";
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        message.remainTimeStep = reader.uint32();
                        message._remainTimeStep = "remainTimeStep";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a TechCoreMotionStateSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.TechCoreMotionStateSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.TechCoreMotionStateSync & robomaster.TechCoreMotionStateSync.$Shape} TechCoreMotionStateSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TechCoreMotionStateSync.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TechCoreMotionStateSync message.
         * @function verify
         * @memberof robomaster.TechCoreMotionStateSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TechCoreMotionStateSync.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.maximumDifficultyLevel != null && $Object.hasOwnProperty.call(message, "maximumDifficultyLevel")) {
                properties._maximumDifficultyLevel = 1;
                if (!$util.isInteger(message.maximumDifficultyLevel))
                    return "maximumDifficultyLevel: integer expected";
            }
            if (message.basicState != null && $Object.hasOwnProperty.call(message, "basicState")) {
                properties._basicState = 1;
                if (!$util.isInteger(message.basicState))
                    return "basicState: integer expected";
            }
            if (message.putinState != null && $Object.hasOwnProperty.call(message, "putinState")) {
                properties._putinState = 1;
                if (!$util.isInteger(message.putinState))
                    return "putinState: integer expected";
            }
            if (message.moveState != null && $Object.hasOwnProperty.call(message, "moveState")) {
                properties._moveState = 1;
                if (!$util.isInteger(message.moveState))
                    return "moveState: integer expected";
            }
            if (message.rotateState != null && $Object.hasOwnProperty.call(message, "rotateState")) {
                properties._rotateState = 1;
                if (!$util.isInteger(message.rotateState))
                    return "rotateState: integer expected";
            }
            if (message.enemyCoreStatus != null && $Object.hasOwnProperty.call(message, "enemyCoreStatus")) {
                properties._enemyCoreStatus = 1;
                if (!$util.isInteger(message.enemyCoreStatus))
                    return "enemyCoreStatus: integer expected";
            }
            if (message.remainTimeAll != null && $Object.hasOwnProperty.call(message, "remainTimeAll")) {
                properties._remainTimeAll = 1;
                if (!$util.isInteger(message.remainTimeAll))
                    return "remainTimeAll: integer expected";
            }
            if (message.remainTimeStep != null && $Object.hasOwnProperty.call(message, "remainTimeStep")) {
                properties._remainTimeStep = 1;
                if (!$util.isInteger(message.remainTimeStep))
                    return "remainTimeStep: integer expected";
            }
            return null;
        };

        /**
         * Creates a TechCoreMotionStateSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.TechCoreMotionStateSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.TechCoreMotionStateSync} TechCoreMotionStateSync
         */
        TechCoreMotionStateSync.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.TechCoreMotionStateSync)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.TechCoreMotionStateSync: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.TechCoreMotionStateSync();
            if (object.maximumDifficultyLevel != null)
                message.maximumDifficultyLevel = object.maximumDifficultyLevel >>> 0;
            if (object.basicState != null)
                message.basicState = object.basicState >>> 0;
            if (object.putinState != null)
                message.putinState = object.putinState >>> 0;
            if (object.moveState != null)
                message.moveState = object.moveState >>> 0;
            if (object.rotateState != null)
                message.rotateState = object.rotateState >>> 0;
            if (object.enemyCoreStatus != null)
                message.enemyCoreStatus = object.enemyCoreStatus >>> 0;
            if (object.remainTimeAll != null)
                message.remainTimeAll = object.remainTimeAll >>> 0;
            if (object.remainTimeStep != null)
                message.remainTimeStep = object.remainTimeStep >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a TechCoreMotionStateSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.TechCoreMotionStateSync
         * @static
         * @param {robomaster.TechCoreMotionStateSync} message TechCoreMotionStateSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TechCoreMotionStateSync.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.maximumDifficultyLevel != null && $Object.hasOwnProperty.call(message, "maximumDifficultyLevel"))
                object.maximumDifficultyLevel = message.maximumDifficultyLevel;
            if (message.basicState != null && $Object.hasOwnProperty.call(message, "basicState"))
                object.basicState = message.basicState;
            if (message.putinState != null && $Object.hasOwnProperty.call(message, "putinState"))
                object.putinState = message.putinState;
            if (message.moveState != null && $Object.hasOwnProperty.call(message, "moveState"))
                object.moveState = message.moveState;
            if (message.rotateState != null && $Object.hasOwnProperty.call(message, "rotateState"))
                object.rotateState = message.rotateState;
            if (message.enemyCoreStatus != null && $Object.hasOwnProperty.call(message, "enemyCoreStatus"))
                object.enemyCoreStatus = message.enemyCoreStatus;
            if (message.remainTimeAll != null && $Object.hasOwnProperty.call(message, "remainTimeAll"))
                object.remainTimeAll = message.remainTimeAll;
            if (message.remainTimeStep != null && $Object.hasOwnProperty.call(message, "remainTimeStep"))
                object.remainTimeStep = message.remainTimeStep;
            return object;
        };

        /**
         * Converts this TechCoreMotionStateSync to JSON.
         * @function toJSON
         * @memberof robomaster.TechCoreMotionStateSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TechCoreMotionStateSync.prototype.toJSON = function() {
            return TechCoreMotionStateSync.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for TechCoreMotionStateSync
         * @function getTypeUrl
         * @memberof robomaster.TechCoreMotionStateSync
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        TechCoreMotionStateSync.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.TechCoreMotionStateSync";
        };

        return TechCoreMotionStateSync;
    })();

    robomaster.RobotPerformanceSelectionSync = (function() {

        /**
         * Properties of a RobotPerformanceSelectionSync.
         * @typedef {Object} robomaster.RobotPerformanceSelectionSync.$Properties
         * @property {number|null} [shooter] RobotPerformanceSelectionSync shooter
         * @property {number|null} [chassis] RobotPerformanceSelectionSync chassis
         * @property {number|null} [sentryControl] RobotPerformanceSelectionSync sentryControl
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RobotPerformanceSelectionSync.
         * @memberof robomaster
         * @interface IRobotPerformanceSelectionSync
         * @augments robomaster.RobotPerformanceSelectionSync.$Properties
         * @deprecated Use robomaster.RobotPerformanceSelectionSync.$Properties instead.
         */

        /**
         * Shape of a RobotPerformanceSelectionSync.
         * @typedef {robomaster.RobotPerformanceSelectionSync.$Properties} robomaster.RobotPerformanceSelectionSync.$Shape
         */

        /**
         * Constructs a new RobotPerformanceSelectionSync.
         * @memberof robomaster
         * @classdesc Represents a RobotPerformanceSelectionSync.
         * @constructor
         * @param {robomaster.RobotPerformanceSelectionSync.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RobotPerformanceSelectionSync = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RobotPerformanceSelectionSync shooter.
         * @member {number|null|undefined} shooter
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @instance
         */
        RobotPerformanceSelectionSync.prototype.shooter = null;

        /**
         * RobotPerformanceSelectionSync chassis.
         * @member {number|null|undefined} chassis
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @instance
         */
        RobotPerformanceSelectionSync.prototype.chassis = null;

        /**
         * RobotPerformanceSelectionSync sentryControl.
         * @member {number|null|undefined} sentryControl
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @instance
         */
        RobotPerformanceSelectionSync.prototype.sentryControl = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPerformanceSelectionSync.prototype, "_shooter", {
            get: $util.oneOfGetter($oneOfFields = ["shooter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPerformanceSelectionSync.prototype, "_chassis", {
            get: $util.oneOfGetter($oneOfFields = ["chassis"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RobotPerformanceSelectionSync.prototype, "_sentryControl", {
            get: $util.oneOfGetter($oneOfFields = ["sentryControl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RobotPerformanceSelectionSync instance using the specified properties.
         * @function create
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @static
         * @param {robomaster.RobotPerformanceSelectionSync.$Properties=} [properties] Properties to set
         * @returns {robomaster.RobotPerformanceSelectionSync} RobotPerformanceSelectionSync instance
         * @type {{
         *   (properties: robomaster.RobotPerformanceSelectionSync.$Shape): robomaster.RobotPerformanceSelectionSync & robomaster.RobotPerformanceSelectionSync.$Shape;
         *   (properties?: robomaster.RobotPerformanceSelectionSync.$Properties): robomaster.RobotPerformanceSelectionSync;
         * }}
         */
        RobotPerformanceSelectionSync.create = function(properties) {
            return new RobotPerformanceSelectionSync(properties);
        };

        /**
         * Encodes the specified RobotPerformanceSelectionSync message. Does not implicitly {@link robomaster.RobotPerformanceSelectionSync.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @static
         * @param {robomaster.RobotPerformanceSelectionSync.$Properties} message RobotPerformanceSelectionSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotPerformanceSelectionSync.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.shooter != null && $Object.hasOwnProperty.call(message, "shooter"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.shooter);
            if (message.chassis != null && $Object.hasOwnProperty.call(message, "chassis"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.chassis);
            if (message.sentryControl != null && $Object.hasOwnProperty.call(message, "sentryControl"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.sentryControl);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RobotPerformanceSelectionSync message, length delimited. Does not implicitly {@link robomaster.RobotPerformanceSelectionSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @static
         * @param {robomaster.RobotPerformanceSelectionSync.$Properties} message RobotPerformanceSelectionSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RobotPerformanceSelectionSync.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RobotPerformanceSelectionSync message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RobotPerformanceSelectionSync & robomaster.RobotPerformanceSelectionSync.$Shape} RobotPerformanceSelectionSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotPerformanceSelectionSync.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RobotPerformanceSelectionSync();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.shooter = reader.uint32();
                        message._shooter = "shooter";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.chassis = reader.uint32();
                        message._chassis = "chassis";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.sentryControl = reader.uint32();
                        message._sentryControl = "sentryControl";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RobotPerformanceSelectionSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RobotPerformanceSelectionSync & robomaster.RobotPerformanceSelectionSync.$Shape} RobotPerformanceSelectionSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RobotPerformanceSelectionSync.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RobotPerformanceSelectionSync message.
         * @function verify
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RobotPerformanceSelectionSync.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.shooter != null && $Object.hasOwnProperty.call(message, "shooter")) {
                properties._shooter = 1;
                if (!$util.isInteger(message.shooter))
                    return "shooter: integer expected";
            }
            if (message.chassis != null && $Object.hasOwnProperty.call(message, "chassis")) {
                properties._chassis = 1;
                if (!$util.isInteger(message.chassis))
                    return "chassis: integer expected";
            }
            if (message.sentryControl != null && $Object.hasOwnProperty.call(message, "sentryControl")) {
                properties._sentryControl = 1;
                if (!$util.isInteger(message.sentryControl))
                    return "sentryControl: integer expected";
            }
            return null;
        };

        /**
         * Creates a RobotPerformanceSelectionSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RobotPerformanceSelectionSync} RobotPerformanceSelectionSync
         */
        RobotPerformanceSelectionSync.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RobotPerformanceSelectionSync)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RobotPerformanceSelectionSync: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RobotPerformanceSelectionSync();
            if (object.shooter != null)
                message.shooter = object.shooter >>> 0;
            if (object.chassis != null)
                message.chassis = object.chassis >>> 0;
            if (object.sentryControl != null)
                message.sentryControl = object.sentryControl >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RobotPerformanceSelectionSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @static
         * @param {robomaster.RobotPerformanceSelectionSync} message RobotPerformanceSelectionSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RobotPerformanceSelectionSync.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.shooter != null && $Object.hasOwnProperty.call(message, "shooter"))
                object.shooter = message.shooter;
            if (message.chassis != null && $Object.hasOwnProperty.call(message, "chassis"))
                object.chassis = message.chassis;
            if (message.sentryControl != null && $Object.hasOwnProperty.call(message, "sentryControl"))
                object.sentryControl = message.sentryControl;
            return object;
        };

        /**
         * Converts this RobotPerformanceSelectionSync to JSON.
         * @function toJSON
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RobotPerformanceSelectionSync.prototype.toJSON = function() {
            return RobotPerformanceSelectionSync.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RobotPerformanceSelectionSync
         * @function getTypeUrl
         * @memberof robomaster.RobotPerformanceSelectionSync
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RobotPerformanceSelectionSync.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RobotPerformanceSelectionSync";
        };

        return RobotPerformanceSelectionSync;
    })();

    robomaster.DeployModeStatusSync = (function() {

        /**
         * Properties of a DeployModeStatusSync.
         * @typedef {Object} robomaster.DeployModeStatusSync.$Properties
         * @property {number|null} [status] DeployModeStatusSync status
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DeployModeStatusSync.
         * @memberof robomaster
         * @interface IDeployModeStatusSync
         * @augments robomaster.DeployModeStatusSync.$Properties
         * @deprecated Use robomaster.DeployModeStatusSync.$Properties instead.
         */

        /**
         * Shape of a DeployModeStatusSync.
         * @typedef {robomaster.DeployModeStatusSync.$Properties} robomaster.DeployModeStatusSync.$Shape
         */

        /**
         * Constructs a new DeployModeStatusSync.
         * @memberof robomaster
         * @classdesc Represents a DeployModeStatusSync.
         * @constructor
         * @param {robomaster.DeployModeStatusSync.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const DeployModeStatusSync = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DeployModeStatusSync status.
         * @member {number|null|undefined} status
         * @memberof robomaster.DeployModeStatusSync
         * @instance
         */
        DeployModeStatusSync.prototype.status = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeployModeStatusSync.prototype, "_status", {
            get: $util.oneOfGetter($oneOfFields = ["status"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DeployModeStatusSync instance using the specified properties.
         * @function create
         * @memberof robomaster.DeployModeStatusSync
         * @static
         * @param {robomaster.DeployModeStatusSync.$Properties=} [properties] Properties to set
         * @returns {robomaster.DeployModeStatusSync} DeployModeStatusSync instance
         * @type {{
         *   (properties: robomaster.DeployModeStatusSync.$Shape): robomaster.DeployModeStatusSync & robomaster.DeployModeStatusSync.$Shape;
         *   (properties?: robomaster.DeployModeStatusSync.$Properties): robomaster.DeployModeStatusSync;
         * }}
         */
        DeployModeStatusSync.create = function(properties) {
            return new DeployModeStatusSync(properties);
        };

        /**
         * Encodes the specified DeployModeStatusSync message. Does not implicitly {@link robomaster.DeployModeStatusSync.verify|verify} messages.
         * @function encode
         * @memberof robomaster.DeployModeStatusSync
         * @static
         * @param {robomaster.DeployModeStatusSync.$Properties} message DeployModeStatusSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeployModeStatusSync.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DeployModeStatusSync message, length delimited. Does not implicitly {@link robomaster.DeployModeStatusSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.DeployModeStatusSync
         * @static
         * @param {robomaster.DeployModeStatusSync.$Properties} message DeployModeStatusSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeployModeStatusSync.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a DeployModeStatusSync message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.DeployModeStatusSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.DeployModeStatusSync & robomaster.DeployModeStatusSync.$Shape} DeployModeStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeployModeStatusSync.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.DeployModeStatusSync();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.status = reader.uint32();
                        message._status = "status";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DeployModeStatusSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.DeployModeStatusSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.DeployModeStatusSync & robomaster.DeployModeStatusSync.$Shape} DeployModeStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeployModeStatusSync.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeployModeStatusSync message.
         * @function verify
         * @memberof robomaster.DeployModeStatusSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeployModeStatusSync.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.status != null && $Object.hasOwnProperty.call(message, "status")) {
                properties._status = 1;
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            }
            return null;
        };

        /**
         * Creates a DeployModeStatusSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.DeployModeStatusSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.DeployModeStatusSync} DeployModeStatusSync
         */
        DeployModeStatusSync.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.DeployModeStatusSync)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.DeployModeStatusSync: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.DeployModeStatusSync();
            if (object.status != null)
                message.status = object.status >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a DeployModeStatusSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.DeployModeStatusSync
         * @static
         * @param {robomaster.DeployModeStatusSync} message DeployModeStatusSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeployModeStatusSync.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this DeployModeStatusSync to JSON.
         * @function toJSON
         * @memberof robomaster.DeployModeStatusSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeployModeStatusSync.prototype.toJSON = function() {
            return DeployModeStatusSync.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DeployModeStatusSync
         * @function getTypeUrl
         * @memberof robomaster.DeployModeStatusSync
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DeployModeStatusSync.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.DeployModeStatusSync";
        };

        return DeployModeStatusSync;
    })();

    robomaster.RuneStatusSync = (function() {

        /**
         * Properties of a RuneStatusSync.
         * @typedef {Object} robomaster.RuneStatusSync.$Properties
         * @property {number|null} [runeStatus] RuneStatusSync runeStatus
         * @property {number|null} [activatedArms] RuneStatusSync activatedArms
         * @property {number|null} [averageRings] RuneStatusSync averageRings
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RuneStatusSync.
         * @memberof robomaster
         * @interface IRuneStatusSync
         * @augments robomaster.RuneStatusSync.$Properties
         * @deprecated Use robomaster.RuneStatusSync.$Properties instead.
         */

        /**
         * Shape of a RuneStatusSync.
         * @typedef {robomaster.RuneStatusSync.$Properties} robomaster.RuneStatusSync.$Shape
         */

        /**
         * Constructs a new RuneStatusSync.
         * @memberof robomaster
         * @classdesc Represents a RuneStatusSync.
         * @constructor
         * @param {robomaster.RuneStatusSync.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RuneStatusSync = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RuneStatusSync runeStatus.
         * @member {number|null|undefined} runeStatus
         * @memberof robomaster.RuneStatusSync
         * @instance
         */
        RuneStatusSync.prototype.runeStatus = null;

        /**
         * RuneStatusSync activatedArms.
         * @member {number|null|undefined} activatedArms
         * @memberof robomaster.RuneStatusSync
         * @instance
         */
        RuneStatusSync.prototype.activatedArms = null;

        /**
         * RuneStatusSync averageRings.
         * @member {number|null|undefined} averageRings
         * @memberof robomaster.RuneStatusSync
         * @instance
         */
        RuneStatusSync.prototype.averageRings = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RuneStatusSync.prototype, "_runeStatus", {
            get: $util.oneOfGetter($oneOfFields = ["runeStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RuneStatusSync.prototype, "_activatedArms", {
            get: $util.oneOfGetter($oneOfFields = ["activatedArms"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RuneStatusSync.prototype, "_averageRings", {
            get: $util.oneOfGetter($oneOfFields = ["averageRings"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RuneStatusSync instance using the specified properties.
         * @function create
         * @memberof robomaster.RuneStatusSync
         * @static
         * @param {robomaster.RuneStatusSync.$Properties=} [properties] Properties to set
         * @returns {robomaster.RuneStatusSync} RuneStatusSync instance
         * @type {{
         *   (properties: robomaster.RuneStatusSync.$Shape): robomaster.RuneStatusSync & robomaster.RuneStatusSync.$Shape;
         *   (properties?: robomaster.RuneStatusSync.$Properties): robomaster.RuneStatusSync;
         * }}
         */
        RuneStatusSync.create = function(properties) {
            return new RuneStatusSync(properties);
        };

        /**
         * Encodes the specified RuneStatusSync message. Does not implicitly {@link robomaster.RuneStatusSync.verify|verify} messages.
         * @function encode
         * @memberof robomaster.RuneStatusSync
         * @static
         * @param {robomaster.RuneStatusSync.$Properties} message RuneStatusSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RuneStatusSync.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.runeStatus != null && $Object.hasOwnProperty.call(message, "runeStatus"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.runeStatus);
            if (message.activatedArms != null && $Object.hasOwnProperty.call(message, "activatedArms"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.activatedArms);
            if (message.averageRings != null && $Object.hasOwnProperty.call(message, "averageRings"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.averageRings);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RuneStatusSync message, length delimited. Does not implicitly {@link robomaster.RuneStatusSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.RuneStatusSync
         * @static
         * @param {robomaster.RuneStatusSync.$Properties} message RuneStatusSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RuneStatusSync.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RuneStatusSync message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.RuneStatusSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.RuneStatusSync & robomaster.RuneStatusSync.$Shape} RuneStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RuneStatusSync.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.RuneStatusSync();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.runeStatus = reader.uint32();
                        message._runeStatus = "runeStatus";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.activatedArms = reader.uint32();
                        message._activatedArms = "activatedArms";
                        continue;
                    }
                case 3: {
                        if (wireType !== 5)
                            break;
                        message.averageRings = reader.float();
                        message._averageRings = "averageRings";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RuneStatusSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.RuneStatusSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.RuneStatusSync & robomaster.RuneStatusSync.$Shape} RuneStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RuneStatusSync.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RuneStatusSync message.
         * @function verify
         * @memberof robomaster.RuneStatusSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RuneStatusSync.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.runeStatus != null && $Object.hasOwnProperty.call(message, "runeStatus")) {
                properties._runeStatus = 1;
                if (!$util.isInteger(message.runeStatus))
                    return "runeStatus: integer expected";
            }
            if (message.activatedArms != null && $Object.hasOwnProperty.call(message, "activatedArms")) {
                properties._activatedArms = 1;
                if (!$util.isInteger(message.activatedArms))
                    return "activatedArms: integer expected";
            }
            if (message.averageRings != null && $Object.hasOwnProperty.call(message, "averageRings")) {
                properties._averageRings = 1;
                if (typeof message.averageRings !== "number")
                    return "averageRings: number expected";
            }
            return null;
        };

        /**
         * Creates a RuneStatusSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.RuneStatusSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.RuneStatusSync} RuneStatusSync
         */
        RuneStatusSync.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.RuneStatusSync)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.RuneStatusSync: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.RuneStatusSync();
            if (object.runeStatus != null)
                message.runeStatus = object.runeStatus >>> 0;
            if (object.activatedArms != null)
                message.activatedArms = object.activatedArms >>> 0;
            if (object.averageRings != null)
                message.averageRings = $Number(object.averageRings);
            return message;
        };

        /**
         * Creates a plain object from a RuneStatusSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.RuneStatusSync
         * @static
         * @param {robomaster.RuneStatusSync} message RuneStatusSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RuneStatusSync.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.runeStatus != null && $Object.hasOwnProperty.call(message, "runeStatus"))
                object.runeStatus = message.runeStatus;
            if (message.activatedArms != null && $Object.hasOwnProperty.call(message, "activatedArms"))
                object.activatedArms = message.activatedArms;
            if (message.averageRings != null && $Object.hasOwnProperty.call(message, "averageRings"))
                object.averageRings = options.json && !$isFinite(message.averageRings) ? $String(message.averageRings) : message.averageRings;
            return object;
        };

        /**
         * Converts this RuneStatusSync to JSON.
         * @function toJSON
         * @memberof robomaster.RuneStatusSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RuneStatusSync.prototype.toJSON = function() {
            return RuneStatusSync.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RuneStatusSync
         * @function getTypeUrl
         * @memberof robomaster.RuneStatusSync
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RuneStatusSync.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.RuneStatusSync";
        };

        return RuneStatusSync;
    })();

    robomaster.SentryStatusSync = (function() {

        /**
         * Properties of a SentryStatusSync.
         * @typedef {Object} robomaster.SentryStatusSync.$Properties
         * @property {number|null} [postureId] SentryStatusSync postureId
         * @property {boolean|null} [isWeakened] SentryStatusSync isWeakened
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SentryStatusSync.
         * @memberof robomaster
         * @interface ISentryStatusSync
         * @augments robomaster.SentryStatusSync.$Properties
         * @deprecated Use robomaster.SentryStatusSync.$Properties instead.
         */

        /**
         * Shape of a SentryStatusSync.
         * @typedef {robomaster.SentryStatusSync.$Properties} robomaster.SentryStatusSync.$Shape
         */

        /**
         * Constructs a new SentryStatusSync.
         * @memberof robomaster
         * @classdesc Represents a SentryStatusSync.
         * @constructor
         * @param {robomaster.SentryStatusSync.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SentryStatusSync = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SentryStatusSync postureId.
         * @member {number|null|undefined} postureId
         * @memberof robomaster.SentryStatusSync
         * @instance
         */
        SentryStatusSync.prototype.postureId = null;

        /**
         * SentryStatusSync isWeakened.
         * @member {boolean|null|undefined} isWeakened
         * @memberof robomaster.SentryStatusSync
         * @instance
         */
        SentryStatusSync.prototype.isWeakened = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SentryStatusSync.prototype, "_postureId", {
            get: $util.oneOfGetter($oneOfFields = ["postureId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SentryStatusSync.prototype, "_isWeakened", {
            get: $util.oneOfGetter($oneOfFields = ["isWeakened"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SentryStatusSync instance using the specified properties.
         * @function create
         * @memberof robomaster.SentryStatusSync
         * @static
         * @param {robomaster.SentryStatusSync.$Properties=} [properties] Properties to set
         * @returns {robomaster.SentryStatusSync} SentryStatusSync instance
         * @type {{
         *   (properties: robomaster.SentryStatusSync.$Shape): robomaster.SentryStatusSync & robomaster.SentryStatusSync.$Shape;
         *   (properties?: robomaster.SentryStatusSync.$Properties): robomaster.SentryStatusSync;
         * }}
         */
        SentryStatusSync.create = function(properties) {
            return new SentryStatusSync(properties);
        };

        /**
         * Encodes the specified SentryStatusSync message. Does not implicitly {@link robomaster.SentryStatusSync.verify|verify} messages.
         * @function encode
         * @memberof robomaster.SentryStatusSync
         * @static
         * @param {robomaster.SentryStatusSync.$Properties} message SentryStatusSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SentryStatusSync.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.postureId != null && $Object.hasOwnProperty.call(message, "postureId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.postureId);
            if (message.isWeakened != null && $Object.hasOwnProperty.call(message, "isWeakened"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isWeakened);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SentryStatusSync message, length delimited. Does not implicitly {@link robomaster.SentryStatusSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.SentryStatusSync
         * @static
         * @param {robomaster.SentryStatusSync.$Properties} message SentryStatusSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SentryStatusSync.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SentryStatusSync message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.SentryStatusSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.SentryStatusSync & robomaster.SentryStatusSync.$Shape} SentryStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SentryStatusSync.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.SentryStatusSync();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.postureId = reader.uint32();
                        message._postureId = "postureId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.isWeakened = reader.bool();
                        message._isWeakened = "isWeakened";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a SentryStatusSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.SentryStatusSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.SentryStatusSync & robomaster.SentryStatusSync.$Shape} SentryStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SentryStatusSync.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SentryStatusSync message.
         * @function verify
         * @memberof robomaster.SentryStatusSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SentryStatusSync.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.postureId != null && $Object.hasOwnProperty.call(message, "postureId")) {
                properties._postureId = 1;
                if (!$util.isInteger(message.postureId))
                    return "postureId: integer expected";
            }
            if (message.isWeakened != null && $Object.hasOwnProperty.call(message, "isWeakened")) {
                properties._isWeakened = 1;
                if (typeof message.isWeakened !== "boolean")
                    return "isWeakened: boolean expected";
            }
            return null;
        };

        /**
         * Creates a SentryStatusSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.SentryStatusSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.SentryStatusSync} SentryStatusSync
         */
        SentryStatusSync.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.SentryStatusSync)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.SentryStatusSync: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.SentryStatusSync();
            if (object.postureId != null)
                message.postureId = object.postureId >>> 0;
            if (object.isWeakened != null)
                message.isWeakened = $Boolean(object.isWeakened);
            return message;
        };

        /**
         * Creates a plain object from a SentryStatusSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.SentryStatusSync
         * @static
         * @param {robomaster.SentryStatusSync} message SentryStatusSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SentryStatusSync.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.postureId != null && $Object.hasOwnProperty.call(message, "postureId"))
                object.postureId = message.postureId;
            if (message.isWeakened != null && $Object.hasOwnProperty.call(message, "isWeakened"))
                object.isWeakened = message.isWeakened;
            return object;
        };

        /**
         * Converts this SentryStatusSync to JSON.
         * @function toJSON
         * @memberof robomaster.SentryStatusSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SentryStatusSync.prototype.toJSON = function() {
            return SentryStatusSync.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SentryStatusSync
         * @function getTypeUrl
         * @memberof robomaster.SentryStatusSync
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SentryStatusSync.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.SentryStatusSync";
        };

        return SentryStatusSync;
    })();

    robomaster.DartSelectTargetStatusSync = (function() {

        /**
         * Properties of a DartSelectTargetStatusSync.
         * @typedef {Object} robomaster.DartSelectTargetStatusSync.$Properties
         * @property {number|null} [targetId] DartSelectTargetStatusSync targetId
         * @property {number|null} [open] DartSelectTargetStatusSync open
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DartSelectTargetStatusSync.
         * @memberof robomaster
         * @interface IDartSelectTargetStatusSync
         * @augments robomaster.DartSelectTargetStatusSync.$Properties
         * @deprecated Use robomaster.DartSelectTargetStatusSync.$Properties instead.
         */

        /**
         * Shape of a DartSelectTargetStatusSync.
         * @typedef {robomaster.DartSelectTargetStatusSync.$Properties} robomaster.DartSelectTargetStatusSync.$Shape
         */

        /**
         * Constructs a new DartSelectTargetStatusSync.
         * @memberof robomaster
         * @classdesc Represents a DartSelectTargetStatusSync.
         * @constructor
         * @param {robomaster.DartSelectTargetStatusSync.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const DartSelectTargetStatusSync = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DartSelectTargetStatusSync targetId.
         * @member {number|null|undefined} targetId
         * @memberof robomaster.DartSelectTargetStatusSync
         * @instance
         */
        DartSelectTargetStatusSync.prototype.targetId = null;

        /**
         * DartSelectTargetStatusSync open.
         * @member {number|null|undefined} open
         * @memberof robomaster.DartSelectTargetStatusSync
         * @instance
         */
        DartSelectTargetStatusSync.prototype.open = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DartSelectTargetStatusSync.prototype, "_targetId", {
            get: $util.oneOfGetter($oneOfFields = ["targetId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DartSelectTargetStatusSync.prototype, "_open", {
            get: $util.oneOfGetter($oneOfFields = ["open"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DartSelectTargetStatusSync instance using the specified properties.
         * @function create
         * @memberof robomaster.DartSelectTargetStatusSync
         * @static
         * @param {robomaster.DartSelectTargetStatusSync.$Properties=} [properties] Properties to set
         * @returns {robomaster.DartSelectTargetStatusSync} DartSelectTargetStatusSync instance
         * @type {{
         *   (properties: robomaster.DartSelectTargetStatusSync.$Shape): robomaster.DartSelectTargetStatusSync & robomaster.DartSelectTargetStatusSync.$Shape;
         *   (properties?: robomaster.DartSelectTargetStatusSync.$Properties): robomaster.DartSelectTargetStatusSync;
         * }}
         */
        DartSelectTargetStatusSync.create = function(properties) {
            return new DartSelectTargetStatusSync(properties);
        };

        /**
         * Encodes the specified DartSelectTargetStatusSync message. Does not implicitly {@link robomaster.DartSelectTargetStatusSync.verify|verify} messages.
         * @function encode
         * @memberof robomaster.DartSelectTargetStatusSync
         * @static
         * @param {robomaster.DartSelectTargetStatusSync.$Properties} message DartSelectTargetStatusSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DartSelectTargetStatusSync.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.targetId != null && $Object.hasOwnProperty.call(message, "targetId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.targetId);
            if (message.open != null && $Object.hasOwnProperty.call(message, "open"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.open);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DartSelectTargetStatusSync message, length delimited. Does not implicitly {@link robomaster.DartSelectTargetStatusSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.DartSelectTargetStatusSync
         * @static
         * @param {robomaster.DartSelectTargetStatusSync.$Properties} message DartSelectTargetStatusSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DartSelectTargetStatusSync.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a DartSelectTargetStatusSync message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.DartSelectTargetStatusSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.DartSelectTargetStatusSync & robomaster.DartSelectTargetStatusSync.$Shape} DartSelectTargetStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DartSelectTargetStatusSync.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.DartSelectTargetStatusSync();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.targetId = reader.uint32();
                        message._targetId = "targetId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.open = reader.uint32();
                        message._open = "open";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DartSelectTargetStatusSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.DartSelectTargetStatusSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.DartSelectTargetStatusSync & robomaster.DartSelectTargetStatusSync.$Shape} DartSelectTargetStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DartSelectTargetStatusSync.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DartSelectTargetStatusSync message.
         * @function verify
         * @memberof robomaster.DartSelectTargetStatusSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DartSelectTargetStatusSync.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.targetId != null && $Object.hasOwnProperty.call(message, "targetId")) {
                properties._targetId = 1;
                if (!$util.isInteger(message.targetId))
                    return "targetId: integer expected";
            }
            if (message.open != null && $Object.hasOwnProperty.call(message, "open")) {
                properties._open = 1;
                if (!$util.isInteger(message.open))
                    return "open: integer expected";
            }
            return null;
        };

        /**
         * Creates a DartSelectTargetStatusSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.DartSelectTargetStatusSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.DartSelectTargetStatusSync} DartSelectTargetStatusSync
         */
        DartSelectTargetStatusSync.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.DartSelectTargetStatusSync)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.DartSelectTargetStatusSync: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.DartSelectTargetStatusSync();
            if (object.targetId != null)
                message.targetId = object.targetId >>> 0;
            if (object.open != null)
                message.open = object.open >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a DartSelectTargetStatusSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.DartSelectTargetStatusSync
         * @static
         * @param {robomaster.DartSelectTargetStatusSync} message DartSelectTargetStatusSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DartSelectTargetStatusSync.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.targetId != null && $Object.hasOwnProperty.call(message, "targetId"))
                object.targetId = message.targetId;
            if (message.open != null && $Object.hasOwnProperty.call(message, "open"))
                object.open = message.open;
            return object;
        };

        /**
         * Converts this DartSelectTargetStatusSync to JSON.
         * @function toJSON
         * @memberof robomaster.DartSelectTargetStatusSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DartSelectTargetStatusSync.prototype.toJSON = function() {
            return DartSelectTargetStatusSync.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DartSelectTargetStatusSync
         * @function getTypeUrl
         * @memberof robomaster.DartSelectTargetStatusSync
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DartSelectTargetStatusSync.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.DartSelectTargetStatusSync";
        };

        return DartSelectTargetStatusSync;
    })();

    robomaster.SentryCtrlResult = (function() {

        /**
         * Properties of a SentryCtrlResult.
         * @typedef {Object} robomaster.SentryCtrlResult.$Properties
         * @property {number|null} [commandId] SentryCtrlResult commandId
         * @property {number|null} [resultCode] SentryCtrlResult resultCode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SentryCtrlResult.
         * @memberof robomaster
         * @interface ISentryCtrlResult
         * @augments robomaster.SentryCtrlResult.$Properties
         * @deprecated Use robomaster.SentryCtrlResult.$Properties instead.
         */

        /**
         * Shape of a SentryCtrlResult.
         * @typedef {robomaster.SentryCtrlResult.$Properties} robomaster.SentryCtrlResult.$Shape
         */

        /**
         * Constructs a new SentryCtrlResult.
         * @memberof robomaster
         * @classdesc Represents a SentryCtrlResult.
         * @constructor
         * @param {robomaster.SentryCtrlResult.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SentryCtrlResult = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SentryCtrlResult commandId.
         * @member {number|null|undefined} commandId
         * @memberof robomaster.SentryCtrlResult
         * @instance
         */
        SentryCtrlResult.prototype.commandId = null;

        /**
         * SentryCtrlResult resultCode.
         * @member {number|null|undefined} resultCode
         * @memberof robomaster.SentryCtrlResult
         * @instance
         */
        SentryCtrlResult.prototype.resultCode = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SentryCtrlResult.prototype, "_commandId", {
            get: $util.oneOfGetter($oneOfFields = ["commandId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SentryCtrlResult.prototype, "_resultCode", {
            get: $util.oneOfGetter($oneOfFields = ["resultCode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SentryCtrlResult instance using the specified properties.
         * @function create
         * @memberof robomaster.SentryCtrlResult
         * @static
         * @param {robomaster.SentryCtrlResult.$Properties=} [properties] Properties to set
         * @returns {robomaster.SentryCtrlResult} SentryCtrlResult instance
         * @type {{
         *   (properties: robomaster.SentryCtrlResult.$Shape): robomaster.SentryCtrlResult & robomaster.SentryCtrlResult.$Shape;
         *   (properties?: robomaster.SentryCtrlResult.$Properties): robomaster.SentryCtrlResult;
         * }}
         */
        SentryCtrlResult.create = function(properties) {
            return new SentryCtrlResult(properties);
        };

        /**
         * Encodes the specified SentryCtrlResult message. Does not implicitly {@link robomaster.SentryCtrlResult.verify|verify} messages.
         * @function encode
         * @memberof robomaster.SentryCtrlResult
         * @static
         * @param {robomaster.SentryCtrlResult.$Properties} message SentryCtrlResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SentryCtrlResult.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.commandId);
            if (message.resultCode != null && $Object.hasOwnProperty.call(message, "resultCode"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.resultCode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SentryCtrlResult message, length delimited. Does not implicitly {@link robomaster.SentryCtrlResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.SentryCtrlResult
         * @static
         * @param {robomaster.SentryCtrlResult.$Properties} message SentryCtrlResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SentryCtrlResult.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SentryCtrlResult message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.SentryCtrlResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.SentryCtrlResult & robomaster.SentryCtrlResult.$Shape} SentryCtrlResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SentryCtrlResult.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.SentryCtrlResult();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.commandId = reader.uint32();
                        message._commandId = "commandId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.resultCode = reader.uint32();
                        message._resultCode = "resultCode";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a SentryCtrlResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.SentryCtrlResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.SentryCtrlResult & robomaster.SentryCtrlResult.$Shape} SentryCtrlResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SentryCtrlResult.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SentryCtrlResult message.
         * @function verify
         * @memberof robomaster.SentryCtrlResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SentryCtrlResult.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId")) {
                properties._commandId = 1;
                if (!$util.isInteger(message.commandId))
                    return "commandId: integer expected";
            }
            if (message.resultCode != null && $Object.hasOwnProperty.call(message, "resultCode")) {
                properties._resultCode = 1;
                if (!$util.isInteger(message.resultCode))
                    return "resultCode: integer expected";
            }
            return null;
        };

        /**
         * Creates a SentryCtrlResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.SentryCtrlResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.SentryCtrlResult} SentryCtrlResult
         */
        SentryCtrlResult.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.SentryCtrlResult)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.SentryCtrlResult: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.SentryCtrlResult();
            if (object.commandId != null)
                message.commandId = object.commandId >>> 0;
            if (object.resultCode != null)
                message.resultCode = object.resultCode >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SentryCtrlResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.SentryCtrlResult
         * @static
         * @param {robomaster.SentryCtrlResult} message SentryCtrlResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SentryCtrlResult.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId"))
                object.commandId = message.commandId;
            if (message.resultCode != null && $Object.hasOwnProperty.call(message, "resultCode"))
                object.resultCode = message.resultCode;
            return object;
        };

        /**
         * Converts this SentryCtrlResult to JSON.
         * @function toJSON
         * @memberof robomaster.SentryCtrlResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SentryCtrlResult.prototype.toJSON = function() {
            return SentryCtrlResult.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SentryCtrlResult
         * @function getTypeUrl
         * @memberof robomaster.SentryCtrlResult
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SentryCtrlResult.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.SentryCtrlResult";
        };

        return SentryCtrlResult;
    })();

    robomaster.AirSupportStatusSync = (function() {

        /**
         * Properties of an AirSupportStatusSync.
         * @typedef {Object} robomaster.AirSupportStatusSync.$Properties
         * @property {number|null} [airsupportStatus] AirSupportStatusSync airsupportStatus
         * @property {number|null} [leftTime] AirSupportStatusSync leftTime
         * @property {number|null} [costCoins] AirSupportStatusSync costCoins
         * @property {number|null} [isBeingTargeted] AirSupportStatusSync isBeingTargeted
         * @property {number|null} [shooterStatus] AirSupportStatusSync shooterStatus
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AirSupportStatusSync.
         * @memberof robomaster
         * @interface IAirSupportStatusSync
         * @augments robomaster.AirSupportStatusSync.$Properties
         * @deprecated Use robomaster.AirSupportStatusSync.$Properties instead.
         */

        /**
         * Shape of an AirSupportStatusSync.
         * @typedef {robomaster.AirSupportStatusSync.$Properties} robomaster.AirSupportStatusSync.$Shape
         */

        /**
         * Constructs a new AirSupportStatusSync.
         * @memberof robomaster
         * @classdesc Represents an AirSupportStatusSync.
         * @constructor
         * @param {robomaster.AirSupportStatusSync.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AirSupportStatusSync = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AirSupportStatusSync airsupportStatus.
         * @member {number|null|undefined} airsupportStatus
         * @memberof robomaster.AirSupportStatusSync
         * @instance
         */
        AirSupportStatusSync.prototype.airsupportStatus = null;

        /**
         * AirSupportStatusSync leftTime.
         * @member {number|null|undefined} leftTime
         * @memberof robomaster.AirSupportStatusSync
         * @instance
         */
        AirSupportStatusSync.prototype.leftTime = null;

        /**
         * AirSupportStatusSync costCoins.
         * @member {number|null|undefined} costCoins
         * @memberof robomaster.AirSupportStatusSync
         * @instance
         */
        AirSupportStatusSync.prototype.costCoins = null;

        /**
         * AirSupportStatusSync isBeingTargeted.
         * @member {number|null|undefined} isBeingTargeted
         * @memberof robomaster.AirSupportStatusSync
         * @instance
         */
        AirSupportStatusSync.prototype.isBeingTargeted = null;

        /**
         * AirSupportStatusSync shooterStatus.
         * @member {number|null|undefined} shooterStatus
         * @memberof robomaster.AirSupportStatusSync
         * @instance
         */
        AirSupportStatusSync.prototype.shooterStatus = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AirSupportStatusSync.prototype, "_airsupportStatus", {
            get: $util.oneOfGetter($oneOfFields = ["airsupportStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AirSupportStatusSync.prototype, "_leftTime", {
            get: $util.oneOfGetter($oneOfFields = ["leftTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AirSupportStatusSync.prototype, "_costCoins", {
            get: $util.oneOfGetter($oneOfFields = ["costCoins"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AirSupportStatusSync.prototype, "_isBeingTargeted", {
            get: $util.oneOfGetter($oneOfFields = ["isBeingTargeted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(AirSupportStatusSync.prototype, "_shooterStatus", {
            get: $util.oneOfGetter($oneOfFields = ["shooterStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AirSupportStatusSync instance using the specified properties.
         * @function create
         * @memberof robomaster.AirSupportStatusSync
         * @static
         * @param {robomaster.AirSupportStatusSync.$Properties=} [properties] Properties to set
         * @returns {robomaster.AirSupportStatusSync} AirSupportStatusSync instance
         * @type {{
         *   (properties: robomaster.AirSupportStatusSync.$Shape): robomaster.AirSupportStatusSync & robomaster.AirSupportStatusSync.$Shape;
         *   (properties?: robomaster.AirSupportStatusSync.$Properties): robomaster.AirSupportStatusSync;
         * }}
         */
        AirSupportStatusSync.create = function(properties) {
            return new AirSupportStatusSync(properties);
        };

        /**
         * Encodes the specified AirSupportStatusSync message. Does not implicitly {@link robomaster.AirSupportStatusSync.verify|verify} messages.
         * @function encode
         * @memberof robomaster.AirSupportStatusSync
         * @static
         * @param {robomaster.AirSupportStatusSync.$Properties} message AirSupportStatusSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AirSupportStatusSync.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.airsupportStatus != null && $Object.hasOwnProperty.call(message, "airsupportStatus"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.airsupportStatus);
            if (message.leftTime != null && $Object.hasOwnProperty.call(message, "leftTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.leftTime);
            if (message.costCoins != null && $Object.hasOwnProperty.call(message, "costCoins"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.costCoins);
            if (message.isBeingTargeted != null && $Object.hasOwnProperty.call(message, "isBeingTargeted"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.isBeingTargeted);
            if (message.shooterStatus != null && $Object.hasOwnProperty.call(message, "shooterStatus"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.shooterStatus);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AirSupportStatusSync message, length delimited. Does not implicitly {@link robomaster.AirSupportStatusSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof robomaster.AirSupportStatusSync
         * @static
         * @param {robomaster.AirSupportStatusSync.$Properties} message AirSupportStatusSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AirSupportStatusSync.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an AirSupportStatusSync message from the specified reader or buffer.
         * @function decode
         * @memberof robomaster.AirSupportStatusSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {robomaster.AirSupportStatusSync & robomaster.AirSupportStatusSync.$Shape} AirSupportStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AirSupportStatusSync.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.robomaster.AirSupportStatusSync();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.airsupportStatus = reader.uint32();
                        message._airsupportStatus = "airsupportStatus";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.leftTime = reader.uint32();
                        message._leftTime = "leftTime";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.costCoins = reader.uint32();
                        message._costCoins = "costCoins";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.isBeingTargeted = reader.uint32();
                        message._isBeingTargeted = "isBeingTargeted";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.shooterStatus = reader.uint32();
                        message._shooterStatus = "shooterStatus";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AirSupportStatusSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof robomaster.AirSupportStatusSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {robomaster.AirSupportStatusSync & robomaster.AirSupportStatusSync.$Shape} AirSupportStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AirSupportStatusSync.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AirSupportStatusSync message.
         * @function verify
         * @memberof robomaster.AirSupportStatusSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AirSupportStatusSync.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.airsupportStatus != null && $Object.hasOwnProperty.call(message, "airsupportStatus")) {
                properties._airsupportStatus = 1;
                if (!$util.isInteger(message.airsupportStatus))
                    return "airsupportStatus: integer expected";
            }
            if (message.leftTime != null && $Object.hasOwnProperty.call(message, "leftTime")) {
                properties._leftTime = 1;
                if (!$util.isInteger(message.leftTime))
                    return "leftTime: integer expected";
            }
            if (message.costCoins != null && $Object.hasOwnProperty.call(message, "costCoins")) {
                properties._costCoins = 1;
                if (!$util.isInteger(message.costCoins))
                    return "costCoins: integer expected";
            }
            if (message.isBeingTargeted != null && $Object.hasOwnProperty.call(message, "isBeingTargeted")) {
                properties._isBeingTargeted = 1;
                if (!$util.isInteger(message.isBeingTargeted))
                    return "isBeingTargeted: integer expected";
            }
            if (message.shooterStatus != null && $Object.hasOwnProperty.call(message, "shooterStatus")) {
                properties._shooterStatus = 1;
                if (!$util.isInteger(message.shooterStatus))
                    return "shooterStatus: integer expected";
            }
            return null;
        };

        /**
         * Creates an AirSupportStatusSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof robomaster.AirSupportStatusSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {robomaster.AirSupportStatusSync} AirSupportStatusSync
         */
        AirSupportStatusSync.fromObject = function (object, _depth) {
            if (object instanceof $root.robomaster.AirSupportStatusSync)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".robomaster.AirSupportStatusSync: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.robomaster.AirSupportStatusSync();
            if (object.airsupportStatus != null)
                message.airsupportStatus = object.airsupportStatus >>> 0;
            if (object.leftTime != null)
                message.leftTime = object.leftTime >>> 0;
            if (object.costCoins != null)
                message.costCoins = object.costCoins >>> 0;
            if (object.isBeingTargeted != null)
                message.isBeingTargeted = object.isBeingTargeted >>> 0;
            if (object.shooterStatus != null)
                message.shooterStatus = object.shooterStatus >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AirSupportStatusSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof robomaster.AirSupportStatusSync
         * @static
         * @param {robomaster.AirSupportStatusSync} message AirSupportStatusSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AirSupportStatusSync.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (message.airsupportStatus != null && $Object.hasOwnProperty.call(message, "airsupportStatus"))
                object.airsupportStatus = message.airsupportStatus;
            if (message.leftTime != null && $Object.hasOwnProperty.call(message, "leftTime"))
                object.leftTime = message.leftTime;
            if (message.costCoins != null && $Object.hasOwnProperty.call(message, "costCoins"))
                object.costCoins = message.costCoins;
            if (message.isBeingTargeted != null && $Object.hasOwnProperty.call(message, "isBeingTargeted"))
                object.isBeingTargeted = message.isBeingTargeted;
            if (message.shooterStatus != null && $Object.hasOwnProperty.call(message, "shooterStatus"))
                object.shooterStatus = message.shooterStatus;
            return object;
        };

        /**
         * Converts this AirSupportStatusSync to JSON.
         * @function toJSON
         * @memberof robomaster.AirSupportStatusSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AirSupportStatusSync.prototype.toJSON = function() {
            return AirSupportStatusSync.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AirSupportStatusSync
         * @function getTypeUrl
         * @memberof robomaster.AirSupportStatusSync
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AirSupportStatusSync.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/robomaster.AirSupportStatusSync";
        };

        return AirSupportStatusSync;
    })();

    return robomaster;
})();

export {
  $root as default
};
