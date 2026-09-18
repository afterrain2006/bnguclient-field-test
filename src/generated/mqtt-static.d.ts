import * as $protobuf from "protobufjs/minimal.js";
import Long = require("long");

/** Namespace robomaster. */
export namespace robomaster {

    /**
     * Properties of a KeyboardMouseControl.
     * @deprecated Use robomaster.KeyboardMouseControl.$Properties instead.
     */
    interface IKeyboardMouseControl extends robomaster.KeyboardMouseControl.$Properties {
    }

    /** Represents a KeyboardMouseControl. */
    class KeyboardMouseControl {

        /**
         * Constructs a new KeyboardMouseControl.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.KeyboardMouseControl.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** KeyboardMouseControl mouseX. */
        mouseX?: (number|null);

        /** KeyboardMouseControl mouseY. */
        mouseY?: (number|null);

        /** KeyboardMouseControl mouseZ. */
        mouseZ?: (number|null);

        /** KeyboardMouseControl leftButtonDown. */
        leftButtonDown?: (boolean|null);

        /** KeyboardMouseControl rightButtonDown. */
        rightButtonDown?: (boolean|null);

        /** KeyboardMouseControl keyboardValue. */
        keyboardValue?: (number|null);

        /** KeyboardMouseControl midButtonDown. */
        midButtonDown?: (boolean|null);

        /**
         * Creates a new KeyboardMouseControl instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyboardMouseControl instance
         */
        static create(properties: robomaster.KeyboardMouseControl.$Shape): robomaster.KeyboardMouseControl & robomaster.KeyboardMouseControl.$Shape;
        static create(properties?: robomaster.KeyboardMouseControl.$Properties): robomaster.KeyboardMouseControl;

        /**
         * Encodes the specified KeyboardMouseControl message. Does not implicitly {@link robomaster.KeyboardMouseControl.verify|verify} messages.
         * @param message KeyboardMouseControl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.KeyboardMouseControl.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyboardMouseControl message, length delimited. Does not implicitly {@link robomaster.KeyboardMouseControl.verify|verify} messages.
         * @param message KeyboardMouseControl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.KeyboardMouseControl.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyboardMouseControl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.KeyboardMouseControl & robomaster.KeyboardMouseControl.$Shape} KeyboardMouseControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.KeyboardMouseControl & robomaster.KeyboardMouseControl.$Shape;

        /**
         * Decodes a KeyboardMouseControl message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.KeyboardMouseControl & robomaster.KeyboardMouseControl.$Shape} KeyboardMouseControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.KeyboardMouseControl & robomaster.KeyboardMouseControl.$Shape;

        /**
         * Verifies a KeyboardMouseControl message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyboardMouseControl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyboardMouseControl
         */
        static fromObject(object: { [k: string]: any }): robomaster.KeyboardMouseControl;

        /**
         * Creates a plain object from a KeyboardMouseControl message. Also converts values to other types if specified.
         * @param message KeyboardMouseControl
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.KeyboardMouseControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyboardMouseControl to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for KeyboardMouseControl
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace KeyboardMouseControl {

        /** Properties of a KeyboardMouseControl. */
        interface $Properties {

            /** KeyboardMouseControl mouseX */
            mouseX?: (number|null);

            /** KeyboardMouseControl mouseY */
            mouseY?: (number|null);

            /** KeyboardMouseControl mouseZ */
            mouseZ?: (number|null);

            /** KeyboardMouseControl leftButtonDown */
            leftButtonDown?: (boolean|null);

            /** KeyboardMouseControl rightButtonDown */
            rightButtonDown?: (boolean|null);

            /** KeyboardMouseControl keyboardValue */
            keyboardValue?: (number|null);

            /** KeyboardMouseControl midButtonDown */
            midButtonDown?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a KeyboardMouseControl. */
        type $Shape = robomaster.KeyboardMouseControl.$Properties;
    }

    /**
     * Properties of a CustomControl.
     * @deprecated Use robomaster.CustomControl.$Properties instead.
     */
    interface ICustomControl extends robomaster.CustomControl.$Properties {
    }

    /** Represents a CustomControl. */
    class CustomControl {

        /**
         * Constructs a new CustomControl.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.CustomControl.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CustomControl data. */
        data?: (Uint8Array|null);

        /**
         * Creates a new CustomControl instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomControl instance
         */
        static create(properties: robomaster.CustomControl.$Shape): robomaster.CustomControl & robomaster.CustomControl.$Shape;
        static create(properties?: robomaster.CustomControl.$Properties): robomaster.CustomControl;

        /**
         * Encodes the specified CustomControl message. Does not implicitly {@link robomaster.CustomControl.verify|verify} messages.
         * @param message CustomControl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.CustomControl.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomControl message, length delimited. Does not implicitly {@link robomaster.CustomControl.verify|verify} messages.
         * @param message CustomControl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.CustomControl.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomControl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.CustomControl & robomaster.CustomControl.$Shape} CustomControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.CustomControl & robomaster.CustomControl.$Shape;

        /**
         * Decodes a CustomControl message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.CustomControl & robomaster.CustomControl.$Shape} CustomControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.CustomControl & robomaster.CustomControl.$Shape;

        /**
         * Verifies a CustomControl message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CustomControl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomControl
         */
        static fromObject(object: { [k: string]: any }): robomaster.CustomControl;

        /**
         * Creates a plain object from a CustomControl message. Also converts values to other types if specified.
         * @param message CustomControl
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.CustomControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomControl to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CustomControl
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CustomControl {

        /** Properties of a CustomControl. */
        interface $Properties {

            /** CustomControl data */
            data?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CustomControl. */
        type $Shape = robomaster.CustomControl.$Properties;
    }

    /**
     * Properties of a MapClickInfo.
     * @deprecated Use robomaster.MapClickInfo.$Properties instead.
     */
    interface IMapClickInfo extends robomaster.MapClickInfo.$Properties {
    }

    /** Represents a MapClickInfo. */
    class MapClickInfo {

        /**
         * Constructs a new MapClickInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.MapClickInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MapClickInfo targetX. */
        targetX?: (number|null);

        /** MapClickInfo targetY. */
        targetY?: (number|null);

        /** MapClickInfo targetZ. */
        targetZ?: (number|null);

        /**
         * Creates a new MapClickInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MapClickInfo instance
         */
        static create(properties: robomaster.MapClickInfo.$Shape): robomaster.MapClickInfo & robomaster.MapClickInfo.$Shape;
        static create(properties?: robomaster.MapClickInfo.$Properties): robomaster.MapClickInfo;

        /**
         * Encodes the specified MapClickInfo message. Does not implicitly {@link robomaster.MapClickInfo.verify|verify} messages.
         * @param message MapClickInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.MapClickInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MapClickInfo message, length delimited. Does not implicitly {@link robomaster.MapClickInfo.verify|verify} messages.
         * @param message MapClickInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.MapClickInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MapClickInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.MapClickInfo & robomaster.MapClickInfo.$Shape} MapClickInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.MapClickInfo & robomaster.MapClickInfo.$Shape;

        /**
         * Decodes a MapClickInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.MapClickInfo & robomaster.MapClickInfo.$Shape} MapClickInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.MapClickInfo & robomaster.MapClickInfo.$Shape;

        /**
         * Verifies a MapClickInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MapClickInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MapClickInfo
         */
        static fromObject(object: { [k: string]: any }): robomaster.MapClickInfo;

        /**
         * Creates a plain object from a MapClickInfo message. Also converts values to other types if specified.
         * @param message MapClickInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.MapClickInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MapClickInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MapClickInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MapClickInfo {

        /** Properties of a MapClickInfo. */
        interface $Properties {

            /** MapClickInfo targetX */
            targetX?: (number|null);

            /** MapClickInfo targetY */
            targetY?: (number|null);

            /** MapClickInfo targetZ */
            targetZ?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MapClickInfo. */
        type $Shape = robomaster.MapClickInfo.$Properties;
    }

    /**
     * Properties of a MapClickInfoNotify.
     * @deprecated Use robomaster.MapClickInfoNotify.$Properties instead.
     */
    interface IMapClickInfoNotify extends robomaster.MapClickInfoNotify.$Properties {
    }

    /** Represents a MapClickInfoNotify. */
    class MapClickInfoNotify {

        /**
         * Constructs a new MapClickInfoNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.MapClickInfoNotify.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MapClickInfoNotify isSendAll. */
        isSendAll?: (number|null);

        /** MapClickInfoNotify robotId. */
        robotId?: (Uint8Array|null);

        /** MapClickInfoNotify mode. */
        mode?: (number|null);

        /** MapClickInfoNotify enemyId. */
        enemyId?: (number|null);

        /** MapClickInfoNotify ascii. */
        ascii?: (number|null);

        /** MapClickInfoNotify type. */
        type?: (number|null);

        /** MapClickInfoNotify mapX. */
        mapX?: (number|null);

        /** MapClickInfoNotify mapY. */
        mapY?: (number|null);

        /**
         * Creates a new MapClickInfoNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MapClickInfoNotify instance
         */
        static create(properties: robomaster.MapClickInfoNotify.$Shape): robomaster.MapClickInfoNotify & robomaster.MapClickInfoNotify.$Shape;
        static create(properties?: robomaster.MapClickInfoNotify.$Properties): robomaster.MapClickInfoNotify;

        /**
         * Encodes the specified MapClickInfoNotify message. Does not implicitly {@link robomaster.MapClickInfoNotify.verify|verify} messages.
         * @param message MapClickInfoNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.MapClickInfoNotify.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MapClickInfoNotify message, length delimited. Does not implicitly {@link robomaster.MapClickInfoNotify.verify|verify} messages.
         * @param message MapClickInfoNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.MapClickInfoNotify.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MapClickInfoNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.MapClickInfoNotify & robomaster.MapClickInfoNotify.$Shape} MapClickInfoNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.MapClickInfoNotify & robomaster.MapClickInfoNotify.$Shape;

        /**
         * Decodes a MapClickInfoNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.MapClickInfoNotify & robomaster.MapClickInfoNotify.$Shape} MapClickInfoNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.MapClickInfoNotify & robomaster.MapClickInfoNotify.$Shape;

        /**
         * Verifies a MapClickInfoNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MapClickInfoNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MapClickInfoNotify
         */
        static fromObject(object: { [k: string]: any }): robomaster.MapClickInfoNotify;

        /**
         * Creates a plain object from a MapClickInfoNotify message. Also converts values to other types if specified.
         * @param message MapClickInfoNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.MapClickInfoNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MapClickInfoNotify to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MapClickInfoNotify
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MapClickInfoNotify {

        /** Properties of a MapClickInfoNotify. */
        interface $Properties {

            /** MapClickInfoNotify isSendAll */
            isSendAll?: (number|null);

            /** MapClickInfoNotify robotId */
            robotId?: (Uint8Array|null);

            /** MapClickInfoNotify mode */
            mode?: (number|null);

            /** MapClickInfoNotify enemyId */
            enemyId?: (number|null);

            /** MapClickInfoNotify ascii */
            ascii?: (number|null);

            /** MapClickInfoNotify type */
            type?: (number|null);

            /** MapClickInfoNotify mapX */
            mapX?: (number|null);

            /** MapClickInfoNotify mapY */
            mapY?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MapClickInfoNotify. */
        type $Shape = robomaster.MapClickInfoNotify.$Properties;
    }

    /**
     * Properties of an AssemblyCommand.
     * @deprecated Use robomaster.AssemblyCommand.$Properties instead.
     */
    interface IAssemblyCommand extends robomaster.AssemblyCommand.$Properties {
    }

    /** Represents an AssemblyCommand. */
    class AssemblyCommand {

        /**
         * Constructs a new AssemblyCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.AssemblyCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AssemblyCommand operation. */
        operation?: (number|null);

        /** AssemblyCommand difficulty. */
        difficulty?: (number|null);

        /**
         * Creates a new AssemblyCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssemblyCommand instance
         */
        static create(properties: robomaster.AssemblyCommand.$Shape): robomaster.AssemblyCommand & robomaster.AssemblyCommand.$Shape;
        static create(properties?: robomaster.AssemblyCommand.$Properties): robomaster.AssemblyCommand;

        /**
         * Encodes the specified AssemblyCommand message. Does not implicitly {@link robomaster.AssemblyCommand.verify|verify} messages.
         * @param message AssemblyCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.AssemblyCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AssemblyCommand message, length delimited. Does not implicitly {@link robomaster.AssemblyCommand.verify|verify} messages.
         * @param message AssemblyCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.AssemblyCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AssemblyCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.AssemblyCommand & robomaster.AssemblyCommand.$Shape} AssemblyCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.AssemblyCommand & robomaster.AssemblyCommand.$Shape;

        /**
         * Decodes an AssemblyCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.AssemblyCommand & robomaster.AssemblyCommand.$Shape} AssemblyCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.AssemblyCommand & robomaster.AssemblyCommand.$Shape;

        /**
         * Verifies an AssemblyCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssemblyCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssemblyCommand
         */
        static fromObject(object: { [k: string]: any }): robomaster.AssemblyCommand;

        /**
         * Creates a plain object from an AssemblyCommand message. Also converts values to other types if specified.
         * @param message AssemblyCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.AssemblyCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssemblyCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AssemblyCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AssemblyCommand {

        /** Properties of an AssemblyCommand. */
        interface $Properties {

            /** AssemblyCommand operation */
            operation?: (number|null);

            /** AssemblyCommand difficulty */
            difficulty?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AssemblyCommand. */
        type $Shape = robomaster.AssemblyCommand.$Properties;
    }

    /**
     * Properties of a RobotPerformanceSelectionCommand.
     * @deprecated Use robomaster.RobotPerformanceSelectionCommand.$Properties instead.
     */
    interface IRobotPerformanceSelectionCommand extends robomaster.RobotPerformanceSelectionCommand.$Properties {
    }

    /** Represents a RobotPerformanceSelectionCommand. */
    class RobotPerformanceSelectionCommand {

        /**
         * Constructs a new RobotPerformanceSelectionCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RobotPerformanceSelectionCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RobotPerformanceSelectionCommand shooter. */
        shooter?: (number|null);

        /** RobotPerformanceSelectionCommand chassis. */
        chassis?: (number|null);

        /** RobotPerformanceSelectionCommand sentryControl. */
        sentryControl?: (number|null);

        /**
         * Creates a new RobotPerformanceSelectionCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotPerformanceSelectionCommand instance
         */
        static create(properties: robomaster.RobotPerformanceSelectionCommand.$Shape): robomaster.RobotPerformanceSelectionCommand & robomaster.RobotPerformanceSelectionCommand.$Shape;
        static create(properties?: robomaster.RobotPerformanceSelectionCommand.$Properties): robomaster.RobotPerformanceSelectionCommand;

        /**
         * Encodes the specified RobotPerformanceSelectionCommand message. Does not implicitly {@link robomaster.RobotPerformanceSelectionCommand.verify|verify} messages.
         * @param message RobotPerformanceSelectionCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RobotPerformanceSelectionCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotPerformanceSelectionCommand message, length delimited. Does not implicitly {@link robomaster.RobotPerformanceSelectionCommand.verify|verify} messages.
         * @param message RobotPerformanceSelectionCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RobotPerformanceSelectionCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotPerformanceSelectionCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RobotPerformanceSelectionCommand & robomaster.RobotPerformanceSelectionCommand.$Shape} RobotPerformanceSelectionCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RobotPerformanceSelectionCommand & robomaster.RobotPerformanceSelectionCommand.$Shape;

        /**
         * Decodes a RobotPerformanceSelectionCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RobotPerformanceSelectionCommand & robomaster.RobotPerformanceSelectionCommand.$Shape} RobotPerformanceSelectionCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RobotPerformanceSelectionCommand & robomaster.RobotPerformanceSelectionCommand.$Shape;

        /**
         * Verifies a RobotPerformanceSelectionCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotPerformanceSelectionCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotPerformanceSelectionCommand
         */
        static fromObject(object: { [k: string]: any }): robomaster.RobotPerformanceSelectionCommand;

        /**
         * Creates a plain object from a RobotPerformanceSelectionCommand message. Also converts values to other types if specified.
         * @param message RobotPerformanceSelectionCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RobotPerformanceSelectionCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotPerformanceSelectionCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RobotPerformanceSelectionCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RobotPerformanceSelectionCommand {

        /** Properties of a RobotPerformanceSelectionCommand. */
        interface $Properties {

            /** RobotPerformanceSelectionCommand shooter */
            shooter?: (number|null);

            /** RobotPerformanceSelectionCommand chassis */
            chassis?: (number|null);

            /** RobotPerformanceSelectionCommand sentryControl */
            sentryControl?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RobotPerformanceSelectionCommand. */
        type $Shape = robomaster.RobotPerformanceSelectionCommand.$Properties;
    }

    /**
     * Properties of a CommonCommand.
     * @deprecated Use robomaster.CommonCommand.$Properties instead.
     */
    interface ICommonCommand extends robomaster.CommonCommand.$Properties {
    }

    /** Represents a CommonCommand. */
    class CommonCommand {

        /**
         * Constructs a new CommonCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.CommonCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CommonCommand cmdType. */
        cmdType?: (number|null);

        /** CommonCommand param. */
        param?: (number|null);

        /**
         * Creates a new CommonCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonCommand instance
         */
        static create(properties: robomaster.CommonCommand.$Shape): robomaster.CommonCommand & robomaster.CommonCommand.$Shape;
        static create(properties?: robomaster.CommonCommand.$Properties): robomaster.CommonCommand;

        /**
         * Encodes the specified CommonCommand message. Does not implicitly {@link robomaster.CommonCommand.verify|verify} messages.
         * @param message CommonCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.CommonCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonCommand message, length delimited. Does not implicitly {@link robomaster.CommonCommand.verify|verify} messages.
         * @param message CommonCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.CommonCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.CommonCommand & robomaster.CommonCommand.$Shape} CommonCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.CommonCommand & robomaster.CommonCommand.$Shape;

        /**
         * Decodes a CommonCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.CommonCommand & robomaster.CommonCommand.$Shape} CommonCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.CommonCommand & robomaster.CommonCommand.$Shape;

        /**
         * Verifies a CommonCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonCommand
         */
        static fromObject(object: { [k: string]: any }): robomaster.CommonCommand;

        /**
         * Creates a plain object from a CommonCommand message. Also converts values to other types if specified.
         * @param message CommonCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.CommonCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CommonCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CommonCommand {

        /** Properties of a CommonCommand. */
        interface $Properties {

            /** CommonCommand cmdType */
            cmdType?: (number|null);

            /** CommonCommand param */
            param?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CommonCommand. */
        type $Shape = robomaster.CommonCommand.$Properties;
    }

    /**
     * Properties of a HeroDeployModeEventCommand.
     * @deprecated Use robomaster.HeroDeployModeEventCommand.$Properties instead.
     */
    interface IHeroDeployModeEventCommand extends robomaster.HeroDeployModeEventCommand.$Properties {
    }

    /** Represents a HeroDeployModeEventCommand. */
    class HeroDeployModeEventCommand {

        /**
         * Constructs a new HeroDeployModeEventCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.HeroDeployModeEventCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HeroDeployModeEventCommand mode. */
        mode?: (number|null);

        /**
         * Creates a new HeroDeployModeEventCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroDeployModeEventCommand instance
         */
        static create(properties: robomaster.HeroDeployModeEventCommand.$Shape): robomaster.HeroDeployModeEventCommand & robomaster.HeroDeployModeEventCommand.$Shape;
        static create(properties?: robomaster.HeroDeployModeEventCommand.$Properties): robomaster.HeroDeployModeEventCommand;

        /**
         * Encodes the specified HeroDeployModeEventCommand message. Does not implicitly {@link robomaster.HeroDeployModeEventCommand.verify|verify} messages.
         * @param message HeroDeployModeEventCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.HeroDeployModeEventCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroDeployModeEventCommand message, length delimited. Does not implicitly {@link robomaster.HeroDeployModeEventCommand.verify|verify} messages.
         * @param message HeroDeployModeEventCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.HeroDeployModeEventCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroDeployModeEventCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.HeroDeployModeEventCommand & robomaster.HeroDeployModeEventCommand.$Shape} HeroDeployModeEventCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.HeroDeployModeEventCommand & robomaster.HeroDeployModeEventCommand.$Shape;

        /**
         * Decodes a HeroDeployModeEventCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.HeroDeployModeEventCommand & robomaster.HeroDeployModeEventCommand.$Shape} HeroDeployModeEventCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.HeroDeployModeEventCommand & robomaster.HeroDeployModeEventCommand.$Shape;

        /**
         * Verifies a HeroDeployModeEventCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroDeployModeEventCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroDeployModeEventCommand
         */
        static fromObject(object: { [k: string]: any }): robomaster.HeroDeployModeEventCommand;

        /**
         * Creates a plain object from a HeroDeployModeEventCommand message. Also converts values to other types if specified.
         * @param message HeroDeployModeEventCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.HeroDeployModeEventCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroDeployModeEventCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for HeroDeployModeEventCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HeroDeployModeEventCommand {

        /** Properties of a HeroDeployModeEventCommand. */
        interface $Properties {

            /** HeroDeployModeEventCommand mode */
            mode?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HeroDeployModeEventCommand. */
        type $Shape = robomaster.HeroDeployModeEventCommand.$Properties;
    }

    /**
     * Properties of a RuneActivateCommand.
     * @deprecated Use robomaster.RuneActivateCommand.$Properties instead.
     */
    interface IRuneActivateCommand extends robomaster.RuneActivateCommand.$Properties {
    }

    /** Represents a RuneActivateCommand. */
    class RuneActivateCommand {

        /**
         * Constructs a new RuneActivateCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RuneActivateCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RuneActivateCommand activate. */
        activate?: (number|null);

        /**
         * Creates a new RuneActivateCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RuneActivateCommand instance
         */
        static create(properties: robomaster.RuneActivateCommand.$Shape): robomaster.RuneActivateCommand & robomaster.RuneActivateCommand.$Shape;
        static create(properties?: robomaster.RuneActivateCommand.$Properties): robomaster.RuneActivateCommand;

        /**
         * Encodes the specified RuneActivateCommand message. Does not implicitly {@link robomaster.RuneActivateCommand.verify|verify} messages.
         * @param message RuneActivateCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RuneActivateCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RuneActivateCommand message, length delimited. Does not implicitly {@link robomaster.RuneActivateCommand.verify|verify} messages.
         * @param message RuneActivateCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RuneActivateCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RuneActivateCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RuneActivateCommand & robomaster.RuneActivateCommand.$Shape} RuneActivateCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RuneActivateCommand & robomaster.RuneActivateCommand.$Shape;

        /**
         * Decodes a RuneActivateCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RuneActivateCommand & robomaster.RuneActivateCommand.$Shape} RuneActivateCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RuneActivateCommand & robomaster.RuneActivateCommand.$Shape;

        /**
         * Verifies a RuneActivateCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RuneActivateCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RuneActivateCommand
         */
        static fromObject(object: { [k: string]: any }): robomaster.RuneActivateCommand;

        /**
         * Creates a plain object from a RuneActivateCommand message. Also converts values to other types if specified.
         * @param message RuneActivateCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RuneActivateCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RuneActivateCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RuneActivateCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RuneActivateCommand {

        /** Properties of a RuneActivateCommand. */
        interface $Properties {

            /** RuneActivateCommand activate */
            activate?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RuneActivateCommand. */
        type $Shape = robomaster.RuneActivateCommand.$Properties;
    }

    /**
     * Properties of a DartCommand.
     * @deprecated Use robomaster.DartCommand.$Properties instead.
     */
    interface IDartCommand extends robomaster.DartCommand.$Properties {
    }

    /** Represents a DartCommand. */
    class DartCommand {

        /**
         * Constructs a new DartCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.DartCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DartCommand targetId. */
        targetId?: (number|null);

        /** DartCommand open. */
        open?: (boolean|null);

        /** DartCommand launchConfirm. */
        launchConfirm?: (boolean|null);

        /**
         * Creates a new DartCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DartCommand instance
         */
        static create(properties: robomaster.DartCommand.$Shape): robomaster.DartCommand & robomaster.DartCommand.$Shape;
        static create(properties?: robomaster.DartCommand.$Properties): robomaster.DartCommand;

        /**
         * Encodes the specified DartCommand message. Does not implicitly {@link robomaster.DartCommand.verify|verify} messages.
         * @param message DartCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.DartCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DartCommand message, length delimited. Does not implicitly {@link robomaster.DartCommand.verify|verify} messages.
         * @param message DartCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.DartCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DartCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.DartCommand & robomaster.DartCommand.$Shape} DartCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.DartCommand & robomaster.DartCommand.$Shape;

        /**
         * Decodes a DartCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.DartCommand & robomaster.DartCommand.$Shape} DartCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.DartCommand & robomaster.DartCommand.$Shape;

        /**
         * Verifies a DartCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DartCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DartCommand
         */
        static fromObject(object: { [k: string]: any }): robomaster.DartCommand;

        /**
         * Creates a plain object from a DartCommand message. Also converts values to other types if specified.
         * @param message DartCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.DartCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DartCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DartCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DartCommand {

        /** Properties of a DartCommand. */
        interface $Properties {

            /** DartCommand targetId */
            targetId?: (number|null);

            /** DartCommand open */
            open?: (boolean|null);

            /** DartCommand launchConfirm */
            launchConfirm?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DartCommand. */
        type $Shape = robomaster.DartCommand.$Properties;
    }

    /**
     * Properties of a SentryCtrlCommand.
     * @deprecated Use robomaster.SentryCtrlCommand.$Properties instead.
     */
    interface ISentryCtrlCommand extends robomaster.SentryCtrlCommand.$Properties {
    }

    /** Represents a SentryCtrlCommand. */
    class SentryCtrlCommand {

        /**
         * Constructs a new SentryCtrlCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.SentryCtrlCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SentryCtrlCommand commandId. */
        commandId?: (number|null);

        /**
         * Creates a new SentryCtrlCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SentryCtrlCommand instance
         */
        static create(properties: robomaster.SentryCtrlCommand.$Shape): robomaster.SentryCtrlCommand & robomaster.SentryCtrlCommand.$Shape;
        static create(properties?: robomaster.SentryCtrlCommand.$Properties): robomaster.SentryCtrlCommand;

        /**
         * Encodes the specified SentryCtrlCommand message. Does not implicitly {@link robomaster.SentryCtrlCommand.verify|verify} messages.
         * @param message SentryCtrlCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.SentryCtrlCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SentryCtrlCommand message, length delimited. Does not implicitly {@link robomaster.SentryCtrlCommand.verify|verify} messages.
         * @param message SentryCtrlCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.SentryCtrlCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SentryCtrlCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.SentryCtrlCommand & robomaster.SentryCtrlCommand.$Shape} SentryCtrlCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.SentryCtrlCommand & robomaster.SentryCtrlCommand.$Shape;

        /**
         * Decodes a SentryCtrlCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.SentryCtrlCommand & robomaster.SentryCtrlCommand.$Shape} SentryCtrlCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.SentryCtrlCommand & robomaster.SentryCtrlCommand.$Shape;

        /**
         * Verifies a SentryCtrlCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SentryCtrlCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SentryCtrlCommand
         */
        static fromObject(object: { [k: string]: any }): robomaster.SentryCtrlCommand;

        /**
         * Creates a plain object from a SentryCtrlCommand message. Also converts values to other types if specified.
         * @param message SentryCtrlCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.SentryCtrlCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SentryCtrlCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SentryCtrlCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SentryCtrlCommand {

        /** Properties of a SentryCtrlCommand. */
        interface $Properties {

            /** SentryCtrlCommand commandId */
            commandId?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SentryCtrlCommand. */
        type $Shape = robomaster.SentryCtrlCommand.$Properties;
    }

    /**
     * Properties of an AirSupportCommand.
     * @deprecated Use robomaster.AirSupportCommand.$Properties instead.
     */
    interface IAirSupportCommand extends robomaster.AirSupportCommand.$Properties {
    }

    /** Represents an AirSupportCommand. */
    class AirSupportCommand {

        /**
         * Constructs a new AirSupportCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.AirSupportCommand.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AirSupportCommand commandId. */
        commandId?: (number|null);

        /**
         * Creates a new AirSupportCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AirSupportCommand instance
         */
        static create(properties: robomaster.AirSupportCommand.$Shape): robomaster.AirSupportCommand & robomaster.AirSupportCommand.$Shape;
        static create(properties?: robomaster.AirSupportCommand.$Properties): robomaster.AirSupportCommand;

        /**
         * Encodes the specified AirSupportCommand message. Does not implicitly {@link robomaster.AirSupportCommand.verify|verify} messages.
         * @param message AirSupportCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.AirSupportCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AirSupportCommand message, length delimited. Does not implicitly {@link robomaster.AirSupportCommand.verify|verify} messages.
         * @param message AirSupportCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.AirSupportCommand.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AirSupportCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.AirSupportCommand & robomaster.AirSupportCommand.$Shape} AirSupportCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.AirSupportCommand & robomaster.AirSupportCommand.$Shape;

        /**
         * Decodes an AirSupportCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.AirSupportCommand & robomaster.AirSupportCommand.$Shape} AirSupportCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.AirSupportCommand & robomaster.AirSupportCommand.$Shape;

        /**
         * Verifies an AirSupportCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AirSupportCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AirSupportCommand
         */
        static fromObject(object: { [k: string]: any }): robomaster.AirSupportCommand;

        /**
         * Creates a plain object from an AirSupportCommand message. Also converts values to other types if specified.
         * @param message AirSupportCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.AirSupportCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AirSupportCommand to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AirSupportCommand
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AirSupportCommand {

        /** Properties of an AirSupportCommand. */
        interface $Properties {

            /** AirSupportCommand commandId */
            commandId?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AirSupportCommand. */
        type $Shape = robomaster.AirSupportCommand.$Properties;
    }

    /**
     * Properties of a GameStatus.
     * @deprecated Use robomaster.GameStatus.$Properties instead.
     */
    interface IGameStatus extends robomaster.GameStatus.$Properties {
    }

    /** Represents a GameStatus. */
    class GameStatus {

        /**
         * Constructs a new GameStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.GameStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GameStatus currentRound. */
        currentRound?: (number|null);

        /** GameStatus totalRounds. */
        totalRounds?: (number|null);

        /** GameStatus redScore. */
        redScore?: (number|null);

        /** GameStatus blueScore. */
        blueScore?: (number|null);

        /** GameStatus currentStage. */
        currentStage?: (number|null);

        /** GameStatus stageCountdownSec. */
        stageCountdownSec?: (number|null);

        /** GameStatus stageElapsedSec. */
        stageElapsedSec?: (number|null);

        /** GameStatus isPaused. */
        isPaused?: (boolean|null);

        /**
         * Creates a new GameStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStatus instance
         */
        static create(properties: robomaster.GameStatus.$Shape): robomaster.GameStatus & robomaster.GameStatus.$Shape;
        static create(properties?: robomaster.GameStatus.$Properties): robomaster.GameStatus;

        /**
         * Encodes the specified GameStatus message. Does not implicitly {@link robomaster.GameStatus.verify|verify} messages.
         * @param message GameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.GameStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStatus message, length delimited. Does not implicitly {@link robomaster.GameStatus.verify|verify} messages.
         * @param message GameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.GameStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.GameStatus & robomaster.GameStatus.$Shape} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.GameStatus & robomaster.GameStatus.$Shape;

        /**
         * Decodes a GameStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.GameStatus & robomaster.GameStatus.$Shape} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.GameStatus & robomaster.GameStatus.$Shape;

        /**
         * Verifies a GameStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStatus
         */
        static fromObject(object: { [k: string]: any }): robomaster.GameStatus;

        /**
         * Creates a plain object from a GameStatus message. Also converts values to other types if specified.
         * @param message GameStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.GameStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStatus to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GameStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameStatus {

        /** Properties of a GameStatus. */
        interface $Properties {

            /** GameStatus currentRound */
            currentRound?: (number|null);

            /** GameStatus totalRounds */
            totalRounds?: (number|null);

            /** GameStatus redScore */
            redScore?: (number|null);

            /** GameStatus blueScore */
            blueScore?: (number|null);

            /** GameStatus currentStage */
            currentStage?: (number|null);

            /** GameStatus stageCountdownSec */
            stageCountdownSec?: (number|null);

            /** GameStatus stageElapsedSec */
            stageElapsedSec?: (number|null);

            /** GameStatus isPaused */
            isPaused?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GameStatus. */
        type $Shape = robomaster.GameStatus.$Properties;
    }

    /**
     * Properties of a GlobalUnitStatus.
     * @deprecated Use robomaster.GlobalUnitStatus.$Properties instead.
     */
    interface IGlobalUnitStatus extends robomaster.GlobalUnitStatus.$Properties {
    }

    /** Represents a GlobalUnitStatus. */
    class GlobalUnitStatus {

        /**
         * Constructs a new GlobalUnitStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.GlobalUnitStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GlobalUnitStatus baseHealth. */
        baseHealth?: (number|null);

        /** GlobalUnitStatus baseStatus. */
        baseStatus?: (number|null);

        /** GlobalUnitStatus baseShield. */
        baseShield?: (number|null);

        /** GlobalUnitStatus outpostHealth. */
        outpostHealth?: (number|null);

        /** GlobalUnitStatus outpostStatus. */
        outpostStatus?: (number|null);

        /** GlobalUnitStatus enemyBaseHealth. */
        enemyBaseHealth?: (number|null);

        /** GlobalUnitStatus enemyBaseStatus. */
        enemyBaseStatus?: (number|null);

        /** GlobalUnitStatus enemyBaseShield. */
        enemyBaseShield?: (number|null);

        /** GlobalUnitStatus enemyOutpostHealth. */
        enemyOutpostHealth?: (number|null);

        /** GlobalUnitStatus enemyOutpostStatus. */
        enemyOutpostStatus?: (number|null);

        /** GlobalUnitStatus robotHealth. */
        robotHealth: number[];

        /** GlobalUnitStatus robotBullets. */
        robotBullets: number[];

        /** GlobalUnitStatus totalDamageAlly. */
        totalDamageAlly?: (number|null);

        /** GlobalUnitStatus totalDamageEnemy. */
        totalDamageEnemy?: (number|null);

        /**
         * Creates a new GlobalUnitStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GlobalUnitStatus instance
         */
        static create(properties: robomaster.GlobalUnitStatus.$Shape): robomaster.GlobalUnitStatus & robomaster.GlobalUnitStatus.$Shape;
        static create(properties?: robomaster.GlobalUnitStatus.$Properties): robomaster.GlobalUnitStatus;

        /**
         * Encodes the specified GlobalUnitStatus message. Does not implicitly {@link robomaster.GlobalUnitStatus.verify|verify} messages.
         * @param message GlobalUnitStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.GlobalUnitStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GlobalUnitStatus message, length delimited. Does not implicitly {@link robomaster.GlobalUnitStatus.verify|verify} messages.
         * @param message GlobalUnitStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.GlobalUnitStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GlobalUnitStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.GlobalUnitStatus & robomaster.GlobalUnitStatus.$Shape} GlobalUnitStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.GlobalUnitStatus & robomaster.GlobalUnitStatus.$Shape;

        /**
         * Decodes a GlobalUnitStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.GlobalUnitStatus & robomaster.GlobalUnitStatus.$Shape} GlobalUnitStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.GlobalUnitStatus & robomaster.GlobalUnitStatus.$Shape;

        /**
         * Verifies a GlobalUnitStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GlobalUnitStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GlobalUnitStatus
         */
        static fromObject(object: { [k: string]: any }): robomaster.GlobalUnitStatus;

        /**
         * Creates a plain object from a GlobalUnitStatus message. Also converts values to other types if specified.
         * @param message GlobalUnitStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.GlobalUnitStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GlobalUnitStatus to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GlobalUnitStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GlobalUnitStatus {

        /** Properties of a GlobalUnitStatus. */
        interface $Properties {

            /** GlobalUnitStatus baseHealth */
            baseHealth?: (number|null);

            /** GlobalUnitStatus baseStatus */
            baseStatus?: (number|null);

            /** GlobalUnitStatus baseShield */
            baseShield?: (number|null);

            /** GlobalUnitStatus outpostHealth */
            outpostHealth?: (number|null);

            /** GlobalUnitStatus outpostStatus */
            outpostStatus?: (number|null);

            /** GlobalUnitStatus enemyBaseHealth */
            enemyBaseHealth?: (number|null);

            /** GlobalUnitStatus enemyBaseStatus */
            enemyBaseStatus?: (number|null);

            /** GlobalUnitStatus enemyBaseShield */
            enemyBaseShield?: (number|null);

            /** GlobalUnitStatus enemyOutpostHealth */
            enemyOutpostHealth?: (number|null);

            /** GlobalUnitStatus enemyOutpostStatus */
            enemyOutpostStatus?: (number|null);

            /** GlobalUnitStatus robotHealth */
            robotHealth?: (number[]|null);

            /** GlobalUnitStatus robotBullets */
            robotBullets?: (number[]|null);

            /** GlobalUnitStatus totalDamageAlly */
            totalDamageAlly?: (number|null);

            /** GlobalUnitStatus totalDamageEnemy */
            totalDamageEnemy?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GlobalUnitStatus. */
        type $Shape = robomaster.GlobalUnitStatus.$Properties;
    }

    /**
     * Properties of a GlobalLogisticsStatus.
     * @deprecated Use robomaster.GlobalLogisticsStatus.$Properties instead.
     */
    interface IGlobalLogisticsStatus extends robomaster.GlobalLogisticsStatus.$Properties {
    }

    /** Represents a GlobalLogisticsStatus. */
    class GlobalLogisticsStatus {

        /**
         * Constructs a new GlobalLogisticsStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.GlobalLogisticsStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GlobalLogisticsStatus remainingEconomy. */
        remainingEconomy?: (number|null);

        /** GlobalLogisticsStatus totalEconomyObtained. */
        totalEconomyObtained?: (number|Long|null);

        /** GlobalLogisticsStatus techLevel. */
        techLevel?: (number|null);

        /** GlobalLogisticsStatus encryptionLevel. */
        encryptionLevel?: (number|null);

        /**
         * Creates a new GlobalLogisticsStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GlobalLogisticsStatus instance
         */
        static create(properties: robomaster.GlobalLogisticsStatus.$Shape): robomaster.GlobalLogisticsStatus & robomaster.GlobalLogisticsStatus.$Shape;
        static create(properties?: robomaster.GlobalLogisticsStatus.$Properties): robomaster.GlobalLogisticsStatus;

        /**
         * Encodes the specified GlobalLogisticsStatus message. Does not implicitly {@link robomaster.GlobalLogisticsStatus.verify|verify} messages.
         * @param message GlobalLogisticsStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.GlobalLogisticsStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GlobalLogisticsStatus message, length delimited. Does not implicitly {@link robomaster.GlobalLogisticsStatus.verify|verify} messages.
         * @param message GlobalLogisticsStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.GlobalLogisticsStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GlobalLogisticsStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.GlobalLogisticsStatus & robomaster.GlobalLogisticsStatus.$Shape} GlobalLogisticsStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.GlobalLogisticsStatus & robomaster.GlobalLogisticsStatus.$Shape;

        /**
         * Decodes a GlobalLogisticsStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.GlobalLogisticsStatus & robomaster.GlobalLogisticsStatus.$Shape} GlobalLogisticsStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.GlobalLogisticsStatus & robomaster.GlobalLogisticsStatus.$Shape;

        /**
         * Verifies a GlobalLogisticsStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GlobalLogisticsStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GlobalLogisticsStatus
         */
        static fromObject(object: { [k: string]: any }): robomaster.GlobalLogisticsStatus;

        /**
         * Creates a plain object from a GlobalLogisticsStatus message. Also converts values to other types if specified.
         * @param message GlobalLogisticsStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.GlobalLogisticsStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GlobalLogisticsStatus to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GlobalLogisticsStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GlobalLogisticsStatus {

        /** Properties of a GlobalLogisticsStatus. */
        interface $Properties {

            /** GlobalLogisticsStatus remainingEconomy */
            remainingEconomy?: (number|null);

            /** GlobalLogisticsStatus totalEconomyObtained */
            totalEconomyObtained?: (number|Long|null);

            /** GlobalLogisticsStatus techLevel */
            techLevel?: (number|null);

            /** GlobalLogisticsStatus encryptionLevel */
            encryptionLevel?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GlobalLogisticsStatus. */
        type $Shape = robomaster.GlobalLogisticsStatus.$Properties;
    }

    /**
     * Properties of a GlobalSpecialMechanism.
     * @deprecated Use robomaster.GlobalSpecialMechanism.$Properties instead.
     */
    interface IGlobalSpecialMechanism extends robomaster.GlobalSpecialMechanism.$Properties {
    }

    /** Represents a GlobalSpecialMechanism. */
    class GlobalSpecialMechanism {

        /**
         * Constructs a new GlobalSpecialMechanism.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.GlobalSpecialMechanism.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GlobalSpecialMechanism mechanismId. */
        mechanismId: number[];

        /** GlobalSpecialMechanism mechanismTimeSec. */
        mechanismTimeSec: number[];

        /**
         * Creates a new GlobalSpecialMechanism instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GlobalSpecialMechanism instance
         */
        static create(properties: robomaster.GlobalSpecialMechanism.$Shape): robomaster.GlobalSpecialMechanism & robomaster.GlobalSpecialMechanism.$Shape;
        static create(properties?: robomaster.GlobalSpecialMechanism.$Properties): robomaster.GlobalSpecialMechanism;

        /**
         * Encodes the specified GlobalSpecialMechanism message. Does not implicitly {@link robomaster.GlobalSpecialMechanism.verify|verify} messages.
         * @param message GlobalSpecialMechanism message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.GlobalSpecialMechanism.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GlobalSpecialMechanism message, length delimited. Does not implicitly {@link robomaster.GlobalSpecialMechanism.verify|verify} messages.
         * @param message GlobalSpecialMechanism message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.GlobalSpecialMechanism.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GlobalSpecialMechanism message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.GlobalSpecialMechanism & robomaster.GlobalSpecialMechanism.$Shape} GlobalSpecialMechanism
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.GlobalSpecialMechanism & robomaster.GlobalSpecialMechanism.$Shape;

        /**
         * Decodes a GlobalSpecialMechanism message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.GlobalSpecialMechanism & robomaster.GlobalSpecialMechanism.$Shape} GlobalSpecialMechanism
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.GlobalSpecialMechanism & robomaster.GlobalSpecialMechanism.$Shape;

        /**
         * Verifies a GlobalSpecialMechanism message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GlobalSpecialMechanism message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GlobalSpecialMechanism
         */
        static fromObject(object: { [k: string]: any }): robomaster.GlobalSpecialMechanism;

        /**
         * Creates a plain object from a GlobalSpecialMechanism message. Also converts values to other types if specified.
         * @param message GlobalSpecialMechanism
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.GlobalSpecialMechanism, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GlobalSpecialMechanism to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GlobalSpecialMechanism
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GlobalSpecialMechanism {

        /** Properties of a GlobalSpecialMechanism. */
        interface $Properties {

            /** GlobalSpecialMechanism mechanismId */
            mechanismId?: (number[]|null);

            /** GlobalSpecialMechanism mechanismTimeSec */
            mechanismTimeSec?: (number[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GlobalSpecialMechanism. */
        type $Shape = robomaster.GlobalSpecialMechanism.$Properties;
    }

    /**
     * Properties of an Event.
     * @deprecated Use robomaster.Event.$Properties instead.
     */
    interface IEvent extends robomaster.Event.$Properties {
    }

    /** Represents an Event. */
    class Event {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.Event.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Event eventId. */
        eventId?: (number|null);

        /** Event param. */
        param?: (string|null);

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        static create(properties: robomaster.Event.$Shape): robomaster.Event & robomaster.Event.$Shape;
        static create(properties?: robomaster.Event.$Properties): robomaster.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link robomaster.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.Event.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link robomaster.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.Event.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.Event & robomaster.Event.$Shape} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.Event & robomaster.Event.$Shape;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.Event & robomaster.Event.$Shape} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.Event & robomaster.Event.$Shape;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        static fromObject(object: { [k: string]: any }): robomaster.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Event
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Event {

        /** Properties of an Event. */
        interface $Properties {

            /** Event eventId */
            eventId?: (number|null);

            /** Event param */
            param?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an Event. */
        type $Shape = robomaster.Event.$Properties;
    }

    /**
     * Properties of a RobotInjuryStat.
     * @deprecated Use robomaster.RobotInjuryStat.$Properties instead.
     */
    interface IRobotInjuryStat extends robomaster.RobotInjuryStat.$Properties {
    }

    /** Represents a RobotInjuryStat. */
    class RobotInjuryStat {

        /**
         * Constructs a new RobotInjuryStat.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RobotInjuryStat.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RobotInjuryStat totalDamage. */
        totalDamage?: (number|null);

        /** RobotInjuryStat collisionDamage. */
        collisionDamage?: (number|null);

        /** RobotInjuryStat smallProjectileDamage. */
        smallProjectileDamage?: (number|null);

        /** RobotInjuryStat largeProjectileDamage. */
        largeProjectileDamage?: (number|null);

        /** RobotInjuryStat dartSplashDamage. */
        dartSplashDamage?: (number|null);

        /** RobotInjuryStat moduleOfflineDamage. */
        moduleOfflineDamage?: (number|null);

        /** RobotInjuryStat offlineDamage. */
        offlineDamage?: (number|null);

        /** RobotInjuryStat penaltyDamage. */
        penaltyDamage?: (number|null);

        /** RobotInjuryStat serverKillDamage. */
        serverKillDamage?: (number|null);

        /** RobotInjuryStat killerId. */
        killerId?: (number|null);

        /**
         * Creates a new RobotInjuryStat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotInjuryStat instance
         */
        static create(properties: robomaster.RobotInjuryStat.$Shape): robomaster.RobotInjuryStat & robomaster.RobotInjuryStat.$Shape;
        static create(properties?: robomaster.RobotInjuryStat.$Properties): robomaster.RobotInjuryStat;

        /**
         * Encodes the specified RobotInjuryStat message. Does not implicitly {@link robomaster.RobotInjuryStat.verify|verify} messages.
         * @param message RobotInjuryStat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RobotInjuryStat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotInjuryStat message, length delimited. Does not implicitly {@link robomaster.RobotInjuryStat.verify|verify} messages.
         * @param message RobotInjuryStat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RobotInjuryStat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotInjuryStat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RobotInjuryStat & robomaster.RobotInjuryStat.$Shape} RobotInjuryStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RobotInjuryStat & robomaster.RobotInjuryStat.$Shape;

        /**
         * Decodes a RobotInjuryStat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RobotInjuryStat & robomaster.RobotInjuryStat.$Shape} RobotInjuryStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RobotInjuryStat & robomaster.RobotInjuryStat.$Shape;

        /**
         * Verifies a RobotInjuryStat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotInjuryStat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotInjuryStat
         */
        static fromObject(object: { [k: string]: any }): robomaster.RobotInjuryStat;

        /**
         * Creates a plain object from a RobotInjuryStat message. Also converts values to other types if specified.
         * @param message RobotInjuryStat
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RobotInjuryStat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotInjuryStat to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RobotInjuryStat
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RobotInjuryStat {

        /** Properties of a RobotInjuryStat. */
        interface $Properties {

            /** RobotInjuryStat totalDamage */
            totalDamage?: (number|null);

            /** RobotInjuryStat collisionDamage */
            collisionDamage?: (number|null);

            /** RobotInjuryStat smallProjectileDamage */
            smallProjectileDamage?: (number|null);

            /** RobotInjuryStat largeProjectileDamage */
            largeProjectileDamage?: (number|null);

            /** RobotInjuryStat dartSplashDamage */
            dartSplashDamage?: (number|null);

            /** RobotInjuryStat moduleOfflineDamage */
            moduleOfflineDamage?: (number|null);

            /** RobotInjuryStat offlineDamage */
            offlineDamage?: (number|null);

            /** RobotInjuryStat penaltyDamage */
            penaltyDamage?: (number|null);

            /** RobotInjuryStat serverKillDamage */
            serverKillDamage?: (number|null);

            /** RobotInjuryStat killerId */
            killerId?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RobotInjuryStat. */
        type $Shape = robomaster.RobotInjuryStat.$Properties;
    }

    /**
     * Properties of a RobotRespawnStatus.
     * @deprecated Use robomaster.RobotRespawnStatus.$Properties instead.
     */
    interface IRobotRespawnStatus extends robomaster.RobotRespawnStatus.$Properties {
    }

    /** Represents a RobotRespawnStatus. */
    class RobotRespawnStatus {

        /**
         * Constructs a new RobotRespawnStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RobotRespawnStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RobotRespawnStatus isPendingRespawn. */
        isPendingRespawn?: (boolean|null);

        /** RobotRespawnStatus totalRespawnProgress. */
        totalRespawnProgress?: (number|null);

        /** RobotRespawnStatus currentRespawnProgress. */
        currentRespawnProgress?: (number|null);

        /** RobotRespawnStatus canFreeRespawn. */
        canFreeRespawn?: (boolean|null);

        /** RobotRespawnStatus goldCostForRespawn. */
        goldCostForRespawn?: (number|null);

        /** RobotRespawnStatus canPayForRespawn. */
        canPayForRespawn?: (boolean|null);

        /**
         * Creates a new RobotRespawnStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotRespawnStatus instance
         */
        static create(properties: robomaster.RobotRespawnStatus.$Shape): robomaster.RobotRespawnStatus & robomaster.RobotRespawnStatus.$Shape;
        static create(properties?: robomaster.RobotRespawnStatus.$Properties): robomaster.RobotRespawnStatus;

        /**
         * Encodes the specified RobotRespawnStatus message. Does not implicitly {@link robomaster.RobotRespawnStatus.verify|verify} messages.
         * @param message RobotRespawnStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RobotRespawnStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotRespawnStatus message, length delimited. Does not implicitly {@link robomaster.RobotRespawnStatus.verify|verify} messages.
         * @param message RobotRespawnStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RobotRespawnStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotRespawnStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RobotRespawnStatus & robomaster.RobotRespawnStatus.$Shape} RobotRespawnStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RobotRespawnStatus & robomaster.RobotRespawnStatus.$Shape;

        /**
         * Decodes a RobotRespawnStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RobotRespawnStatus & robomaster.RobotRespawnStatus.$Shape} RobotRespawnStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RobotRespawnStatus & robomaster.RobotRespawnStatus.$Shape;

        /**
         * Verifies a RobotRespawnStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotRespawnStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotRespawnStatus
         */
        static fromObject(object: { [k: string]: any }): robomaster.RobotRespawnStatus;

        /**
         * Creates a plain object from a RobotRespawnStatus message. Also converts values to other types if specified.
         * @param message RobotRespawnStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RobotRespawnStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotRespawnStatus to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RobotRespawnStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RobotRespawnStatus {

        /** Properties of a RobotRespawnStatus. */
        interface $Properties {

            /** RobotRespawnStatus isPendingRespawn */
            isPendingRespawn?: (boolean|null);

            /** RobotRespawnStatus totalRespawnProgress */
            totalRespawnProgress?: (number|null);

            /** RobotRespawnStatus currentRespawnProgress */
            currentRespawnProgress?: (number|null);

            /** RobotRespawnStatus canFreeRespawn */
            canFreeRespawn?: (boolean|null);

            /** RobotRespawnStatus goldCostForRespawn */
            goldCostForRespawn?: (number|null);

            /** RobotRespawnStatus canPayForRespawn */
            canPayForRespawn?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RobotRespawnStatus. */
        type $Shape = robomaster.RobotRespawnStatus.$Properties;
    }

    /**
     * Properties of a RobotStaticStatus.
     * @deprecated Use robomaster.RobotStaticStatus.$Properties instead.
     */
    interface IRobotStaticStatus extends robomaster.RobotStaticStatus.$Properties {
    }

    /** Represents a RobotStaticStatus. */
    class RobotStaticStatus {

        /**
         * Constructs a new RobotStaticStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RobotStaticStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RobotStaticStatus connectionState. */
        connectionState?: (number|null);

        /** RobotStaticStatus fieldState. */
        fieldState?: (number|null);

        /** RobotStaticStatus aliveState. */
        aliveState?: (number|null);

        /** RobotStaticStatus robotId. */
        robotId?: (number|null);

        /** RobotStaticStatus robotType. */
        robotType?: (number|null);

        /** RobotStaticStatus performanceSystemShooter. */
        performanceSystemShooter?: (number|null);

        /** RobotStaticStatus performanceSystemChassis. */
        performanceSystemChassis?: (number|null);

        /** RobotStaticStatus level. */
        level?: (number|null);

        /** RobotStaticStatus maxHealth. */
        maxHealth?: (number|null);

        /** RobotStaticStatus maxHeat. */
        maxHeat?: (number|null);

        /** RobotStaticStatus heatCooldownRate. */
        heatCooldownRate?: (number|null);

        /** RobotStaticStatus maxPower. */
        maxPower?: (number|null);

        /** RobotStaticStatus maxBufferEnergy. */
        maxBufferEnergy?: (number|null);

        /** RobotStaticStatus maxChassisEnergy. */
        maxChassisEnergy?: (number|null);

        /**
         * Creates a new RobotStaticStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotStaticStatus instance
         */
        static create(properties: robomaster.RobotStaticStatus.$Shape): robomaster.RobotStaticStatus & robomaster.RobotStaticStatus.$Shape;
        static create(properties?: robomaster.RobotStaticStatus.$Properties): robomaster.RobotStaticStatus;

        /**
         * Encodes the specified RobotStaticStatus message. Does not implicitly {@link robomaster.RobotStaticStatus.verify|verify} messages.
         * @param message RobotStaticStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RobotStaticStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotStaticStatus message, length delimited. Does not implicitly {@link robomaster.RobotStaticStatus.verify|verify} messages.
         * @param message RobotStaticStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RobotStaticStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotStaticStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RobotStaticStatus & robomaster.RobotStaticStatus.$Shape} RobotStaticStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RobotStaticStatus & robomaster.RobotStaticStatus.$Shape;

        /**
         * Decodes a RobotStaticStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RobotStaticStatus & robomaster.RobotStaticStatus.$Shape} RobotStaticStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RobotStaticStatus & robomaster.RobotStaticStatus.$Shape;

        /**
         * Verifies a RobotStaticStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotStaticStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotStaticStatus
         */
        static fromObject(object: { [k: string]: any }): robomaster.RobotStaticStatus;

        /**
         * Creates a plain object from a RobotStaticStatus message. Also converts values to other types if specified.
         * @param message RobotStaticStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RobotStaticStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotStaticStatus to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RobotStaticStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RobotStaticStatus {

        /** Properties of a RobotStaticStatus. */
        interface $Properties {

            /** RobotStaticStatus connectionState */
            connectionState?: (number|null);

            /** RobotStaticStatus fieldState */
            fieldState?: (number|null);

            /** RobotStaticStatus aliveState */
            aliveState?: (number|null);

            /** RobotStaticStatus robotId */
            robotId?: (number|null);

            /** RobotStaticStatus robotType */
            robotType?: (number|null);

            /** RobotStaticStatus performanceSystemShooter */
            performanceSystemShooter?: (number|null);

            /** RobotStaticStatus performanceSystemChassis */
            performanceSystemChassis?: (number|null);

            /** RobotStaticStatus level */
            level?: (number|null);

            /** RobotStaticStatus maxHealth */
            maxHealth?: (number|null);

            /** RobotStaticStatus maxHeat */
            maxHeat?: (number|null);

            /** RobotStaticStatus heatCooldownRate */
            heatCooldownRate?: (number|null);

            /** RobotStaticStatus maxPower */
            maxPower?: (number|null);

            /** RobotStaticStatus maxBufferEnergy */
            maxBufferEnergy?: (number|null);

            /** RobotStaticStatus maxChassisEnergy */
            maxChassisEnergy?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RobotStaticStatus. */
        type $Shape = robomaster.RobotStaticStatus.$Properties;
    }

    /**
     * Properties of a RobotDynamicStatus.
     * @deprecated Use robomaster.RobotDynamicStatus.$Properties instead.
     */
    interface IRobotDynamicStatus extends robomaster.RobotDynamicStatus.$Properties {
    }

    /** Represents a RobotDynamicStatus. */
    class RobotDynamicStatus {

        /**
         * Constructs a new RobotDynamicStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RobotDynamicStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RobotDynamicStatus currentHealth. */
        currentHealth?: (number|null);

        /** RobotDynamicStatus currentHeat. */
        currentHeat?: (number|null);

        /** RobotDynamicStatus lastProjectileFireRate. */
        lastProjectileFireRate?: (number|null);

        /** RobotDynamicStatus currentChassisEnergy. */
        currentChassisEnergy?: (number|null);

        /** RobotDynamicStatus currentBufferEnergy. */
        currentBufferEnergy?: (number|null);

        /** RobotDynamicStatus currentExperience. */
        currentExperience?: (number|null);

        /** RobotDynamicStatus experienceForUpgrade. */
        experienceForUpgrade?: (number|null);

        /** RobotDynamicStatus totalProjectilesFired. */
        totalProjectilesFired?: (number|null);

        /** RobotDynamicStatus remainingAmmo. */
        remainingAmmo?: (number|null);

        /** RobotDynamicStatus isOutOfCombat. */
        isOutOfCombat?: (boolean|null);

        /** RobotDynamicStatus outOfCombatCountdown. */
        outOfCombatCountdown?: (number|null);

        /** RobotDynamicStatus canRemoteHeal. */
        canRemoteHeal?: (boolean|null);

        /** RobotDynamicStatus canRemoteAmmo. */
        canRemoteAmmo?: (boolean|null);

        /**
         * Creates a new RobotDynamicStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotDynamicStatus instance
         */
        static create(properties: robomaster.RobotDynamicStatus.$Shape): robomaster.RobotDynamicStatus & robomaster.RobotDynamicStatus.$Shape;
        static create(properties?: robomaster.RobotDynamicStatus.$Properties): robomaster.RobotDynamicStatus;

        /**
         * Encodes the specified RobotDynamicStatus message. Does not implicitly {@link robomaster.RobotDynamicStatus.verify|verify} messages.
         * @param message RobotDynamicStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RobotDynamicStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotDynamicStatus message, length delimited. Does not implicitly {@link robomaster.RobotDynamicStatus.verify|verify} messages.
         * @param message RobotDynamicStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RobotDynamicStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotDynamicStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RobotDynamicStatus & robomaster.RobotDynamicStatus.$Shape} RobotDynamicStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RobotDynamicStatus & robomaster.RobotDynamicStatus.$Shape;

        /**
         * Decodes a RobotDynamicStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RobotDynamicStatus & robomaster.RobotDynamicStatus.$Shape} RobotDynamicStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RobotDynamicStatus & robomaster.RobotDynamicStatus.$Shape;

        /**
         * Verifies a RobotDynamicStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotDynamicStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotDynamicStatus
         */
        static fromObject(object: { [k: string]: any }): robomaster.RobotDynamicStatus;

        /**
         * Creates a plain object from a RobotDynamicStatus message. Also converts values to other types if specified.
         * @param message RobotDynamicStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RobotDynamicStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotDynamicStatus to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RobotDynamicStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RobotDynamicStatus {

        /** Properties of a RobotDynamicStatus. */
        interface $Properties {

            /** RobotDynamicStatus currentHealth */
            currentHealth?: (number|null);

            /** RobotDynamicStatus currentHeat */
            currentHeat?: (number|null);

            /** RobotDynamicStatus lastProjectileFireRate */
            lastProjectileFireRate?: (number|null);

            /** RobotDynamicStatus currentChassisEnergy */
            currentChassisEnergy?: (number|null);

            /** RobotDynamicStatus currentBufferEnergy */
            currentBufferEnergy?: (number|null);

            /** RobotDynamicStatus currentExperience */
            currentExperience?: (number|null);

            /** RobotDynamicStatus experienceForUpgrade */
            experienceForUpgrade?: (number|null);

            /** RobotDynamicStatus totalProjectilesFired */
            totalProjectilesFired?: (number|null);

            /** RobotDynamicStatus remainingAmmo */
            remainingAmmo?: (number|null);

            /** RobotDynamicStatus isOutOfCombat */
            isOutOfCombat?: (boolean|null);

            /** RobotDynamicStatus outOfCombatCountdown */
            outOfCombatCountdown?: (number|null);

            /** RobotDynamicStatus canRemoteHeal */
            canRemoteHeal?: (boolean|null);

            /** RobotDynamicStatus canRemoteAmmo */
            canRemoteAmmo?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RobotDynamicStatus. */
        type $Shape = robomaster.RobotDynamicStatus.$Properties;
    }

    /**
     * Properties of a RobotModuleStatus.
     * @deprecated Use robomaster.RobotModuleStatus.$Properties instead.
     */
    interface IRobotModuleStatus extends robomaster.RobotModuleStatus.$Properties {
    }

    /** Represents a RobotModuleStatus. */
    class RobotModuleStatus {

        /**
         * Constructs a new RobotModuleStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RobotModuleStatus.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RobotModuleStatus powerManager. */
        powerManager?: (number|null);

        /** RobotModuleStatus rfid. */
        rfid?: (number|null);

        /** RobotModuleStatus lightStrip. */
        lightStrip?: (number|null);

        /** RobotModuleStatus smallShooter. */
        smallShooter?: (number|null);

        /** RobotModuleStatus bigShooter. */
        bigShooter?: (number|null);

        /** RobotModuleStatus uwb. */
        uwb?: (number|null);

        /** RobotModuleStatus armor. */
        armor?: (number|null);

        /** RobotModuleStatus videoTransmission. */
        videoTransmission?: (number|null);

        /** RobotModuleStatus capacitor. */
        capacitor?: (number|null);

        /** RobotModuleStatus mainController. */
        mainController?: (number|null);

        /** RobotModuleStatus laserDetectionModule. */
        laserDetectionModule?: (number|null);

        /**
         * Creates a new RobotModuleStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotModuleStatus instance
         */
        static create(properties: robomaster.RobotModuleStatus.$Shape): robomaster.RobotModuleStatus & robomaster.RobotModuleStatus.$Shape;
        static create(properties?: robomaster.RobotModuleStatus.$Properties): robomaster.RobotModuleStatus;

        /**
         * Encodes the specified RobotModuleStatus message. Does not implicitly {@link robomaster.RobotModuleStatus.verify|verify} messages.
         * @param message RobotModuleStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RobotModuleStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotModuleStatus message, length delimited. Does not implicitly {@link robomaster.RobotModuleStatus.verify|verify} messages.
         * @param message RobotModuleStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RobotModuleStatus.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotModuleStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RobotModuleStatus & robomaster.RobotModuleStatus.$Shape} RobotModuleStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RobotModuleStatus & robomaster.RobotModuleStatus.$Shape;

        /**
         * Decodes a RobotModuleStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RobotModuleStatus & robomaster.RobotModuleStatus.$Shape} RobotModuleStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RobotModuleStatus & robomaster.RobotModuleStatus.$Shape;

        /**
         * Verifies a RobotModuleStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotModuleStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotModuleStatus
         */
        static fromObject(object: { [k: string]: any }): robomaster.RobotModuleStatus;

        /**
         * Creates a plain object from a RobotModuleStatus message. Also converts values to other types if specified.
         * @param message RobotModuleStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RobotModuleStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotModuleStatus to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RobotModuleStatus
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RobotModuleStatus {

        /** Properties of a RobotModuleStatus. */
        interface $Properties {

            /** RobotModuleStatus powerManager */
            powerManager?: (number|null);

            /** RobotModuleStatus rfid */
            rfid?: (number|null);

            /** RobotModuleStatus lightStrip */
            lightStrip?: (number|null);

            /** RobotModuleStatus smallShooter */
            smallShooter?: (number|null);

            /** RobotModuleStatus bigShooter */
            bigShooter?: (number|null);

            /** RobotModuleStatus uwb */
            uwb?: (number|null);

            /** RobotModuleStatus armor */
            armor?: (number|null);

            /** RobotModuleStatus videoTransmission */
            videoTransmission?: (number|null);

            /** RobotModuleStatus capacitor */
            capacitor?: (number|null);

            /** RobotModuleStatus mainController */
            mainController?: (number|null);

            /** RobotModuleStatus laserDetectionModule */
            laserDetectionModule?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RobotModuleStatus. */
        type $Shape = robomaster.RobotModuleStatus.$Properties;
    }

    /**
     * Properties of a RobotPosition.
     * @deprecated Use robomaster.RobotPosition.$Properties instead.
     */
    interface IRobotPosition extends robomaster.RobotPosition.$Properties {
    }

    /** Represents a RobotPosition. */
    class RobotPosition {

        /**
         * Constructs a new RobotPosition.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RobotPosition.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RobotPosition x. */
        x?: (number|null);

        /** RobotPosition y. */
        y?: (number|null);

        /** RobotPosition z. */
        z?: (number|null);

        /** RobotPosition yaw. */
        yaw?: (number|null);

        /** RobotPosition robotId. */
        robotId?: (number|null);

        /**
         * Creates a new RobotPosition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotPosition instance
         */
        static create(properties: robomaster.RobotPosition.$Shape): robomaster.RobotPosition & robomaster.RobotPosition.$Shape;
        static create(properties?: robomaster.RobotPosition.$Properties): robomaster.RobotPosition;

        /**
         * Encodes the specified RobotPosition message. Does not implicitly {@link robomaster.RobotPosition.verify|verify} messages.
         * @param message RobotPosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RobotPosition.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotPosition message, length delimited. Does not implicitly {@link robomaster.RobotPosition.verify|verify} messages.
         * @param message RobotPosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RobotPosition.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotPosition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RobotPosition & robomaster.RobotPosition.$Shape} RobotPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RobotPosition & robomaster.RobotPosition.$Shape;

        /**
         * Decodes a RobotPosition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RobotPosition & robomaster.RobotPosition.$Shape} RobotPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RobotPosition & robomaster.RobotPosition.$Shape;

        /**
         * Verifies a RobotPosition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotPosition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotPosition
         */
        static fromObject(object: { [k: string]: any }): robomaster.RobotPosition;

        /**
         * Creates a plain object from a RobotPosition message. Also converts values to other types if specified.
         * @param message RobotPosition
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RobotPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotPosition to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RobotPosition
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RobotPosition {

        /** Properties of a RobotPosition. */
        interface $Properties {

            /** RobotPosition x */
            x?: (number|null);

            /** RobotPosition y */
            y?: (number|null);

            /** RobotPosition z */
            z?: (number|null);

            /** RobotPosition yaw */
            yaw?: (number|null);

            /** RobotPosition robotId */
            robotId?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RobotPosition. */
        type $Shape = robomaster.RobotPosition.$Properties;
    }

    /**
     * Properties of a Buff.
     * @deprecated Use robomaster.Buff.$Properties instead.
     */
    interface IBuff extends robomaster.Buff.$Properties {
    }

    /** Represents a Buff. */
    class Buff {

        /**
         * Constructs a new Buff.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.Buff.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Buff robotId. */
        robotId?: (number|null);

        /** Buff buffType. */
        buffType?: (number|null);

        /** Buff buffLevel. */
        buffLevel?: (number|null);

        /** Buff buffMaxTime. */
        buffMaxTime?: (number|null);

        /** Buff buffLeftTime. */
        buffLeftTime?: (number|null);

        /**
         * Creates a new Buff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Buff instance
         */
        static create(properties: robomaster.Buff.$Shape): robomaster.Buff & robomaster.Buff.$Shape;
        static create(properties?: robomaster.Buff.$Properties): robomaster.Buff;

        /**
         * Encodes the specified Buff message. Does not implicitly {@link robomaster.Buff.verify|verify} messages.
         * @param message Buff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.Buff.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Buff message, length delimited. Does not implicitly {@link robomaster.Buff.verify|verify} messages.
         * @param message Buff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.Buff.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Buff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.Buff & robomaster.Buff.$Shape} Buff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.Buff & robomaster.Buff.$Shape;

        /**
         * Decodes a Buff message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.Buff & robomaster.Buff.$Shape} Buff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.Buff & robomaster.Buff.$Shape;

        /**
         * Verifies a Buff message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Buff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Buff
         */
        static fromObject(object: { [k: string]: any }): robomaster.Buff;

        /**
         * Creates a plain object from a Buff message. Also converts values to other types if specified.
         * @param message Buff
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.Buff, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Buff to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Buff
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Buff {

        /** Properties of a Buff. */
        interface $Properties {

            /** Buff robotId */
            robotId?: (number|null);

            /** Buff buffType */
            buffType?: (number|null);

            /** Buff buffLevel */
            buffLevel?: (number|null);

            /** Buff buffMaxTime */
            buffMaxTime?: (number|null);

            /** Buff buffLeftTime */
            buffLeftTime?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Buff. */
        type $Shape = robomaster.Buff.$Properties;
    }

    /**
     * Properties of a PenaltyInfo.
     * @deprecated Use robomaster.PenaltyInfo.$Properties instead.
     */
    interface IPenaltyInfo extends robomaster.PenaltyInfo.$Properties {
    }

    /** Represents a PenaltyInfo. */
    class PenaltyInfo {

        /**
         * Constructs a new PenaltyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.PenaltyInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PenaltyInfo penaltyType. */
        penaltyType?: (number|null);

        /** PenaltyInfo penaltyEffectSec. */
        penaltyEffectSec?: (number|null);

        /** PenaltyInfo totalPenaltyNum. */
        totalPenaltyNum?: (number|null);

        /**
         * Creates a new PenaltyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PenaltyInfo instance
         */
        static create(properties: robomaster.PenaltyInfo.$Shape): robomaster.PenaltyInfo & robomaster.PenaltyInfo.$Shape;
        static create(properties?: robomaster.PenaltyInfo.$Properties): robomaster.PenaltyInfo;

        /**
         * Encodes the specified PenaltyInfo message. Does not implicitly {@link robomaster.PenaltyInfo.verify|verify} messages.
         * @param message PenaltyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.PenaltyInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PenaltyInfo message, length delimited. Does not implicitly {@link robomaster.PenaltyInfo.verify|verify} messages.
         * @param message PenaltyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.PenaltyInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PenaltyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.PenaltyInfo & robomaster.PenaltyInfo.$Shape} PenaltyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.PenaltyInfo & robomaster.PenaltyInfo.$Shape;

        /**
         * Decodes a PenaltyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.PenaltyInfo & robomaster.PenaltyInfo.$Shape} PenaltyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.PenaltyInfo & robomaster.PenaltyInfo.$Shape;

        /**
         * Verifies a PenaltyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PenaltyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PenaltyInfo
         */
        static fromObject(object: { [k: string]: any }): robomaster.PenaltyInfo;

        /**
         * Creates a plain object from a PenaltyInfo message. Also converts values to other types if specified.
         * @param message PenaltyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.PenaltyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PenaltyInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PenaltyInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PenaltyInfo {

        /** Properties of a PenaltyInfo. */
        interface $Properties {

            /** PenaltyInfo penaltyType */
            penaltyType?: (number|null);

            /** PenaltyInfo penaltyEffectSec */
            penaltyEffectSec?: (number|null);

            /** PenaltyInfo totalPenaltyNum */
            totalPenaltyNum?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PenaltyInfo. */
        type $Shape = robomaster.PenaltyInfo.$Properties;
    }

    /**
     * Properties of a RobotPathPlanInfo.
     * @deprecated Use robomaster.RobotPathPlanInfo.$Properties instead.
     */
    interface IRobotPathPlanInfo extends robomaster.RobotPathPlanInfo.$Properties {
    }

    /** Represents a RobotPathPlanInfo. */
    class RobotPathPlanInfo {

        /**
         * Constructs a new RobotPathPlanInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RobotPathPlanInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RobotPathPlanInfo intention. */
        intention?: (number|null);

        /** RobotPathPlanInfo startPosX. */
        startPosX?: (number|null);

        /** RobotPathPlanInfo startPosY. */
        startPosY?: (number|null);

        /** RobotPathPlanInfo offsetX. */
        offsetX: number[];

        /** RobotPathPlanInfo offsetY. */
        offsetY: number[];

        /** RobotPathPlanInfo senderId. */
        senderId?: (number|null);

        /**
         * Creates a new RobotPathPlanInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotPathPlanInfo instance
         */
        static create(properties: robomaster.RobotPathPlanInfo.$Shape): robomaster.RobotPathPlanInfo & robomaster.RobotPathPlanInfo.$Shape;
        static create(properties?: robomaster.RobotPathPlanInfo.$Properties): robomaster.RobotPathPlanInfo;

        /**
         * Encodes the specified RobotPathPlanInfo message. Does not implicitly {@link robomaster.RobotPathPlanInfo.verify|verify} messages.
         * @param message RobotPathPlanInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RobotPathPlanInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotPathPlanInfo message, length delimited. Does not implicitly {@link robomaster.RobotPathPlanInfo.verify|verify} messages.
         * @param message RobotPathPlanInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RobotPathPlanInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotPathPlanInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RobotPathPlanInfo & robomaster.RobotPathPlanInfo.$Shape} RobotPathPlanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RobotPathPlanInfo & robomaster.RobotPathPlanInfo.$Shape;

        /**
         * Decodes a RobotPathPlanInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RobotPathPlanInfo & robomaster.RobotPathPlanInfo.$Shape} RobotPathPlanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RobotPathPlanInfo & robomaster.RobotPathPlanInfo.$Shape;

        /**
         * Verifies a RobotPathPlanInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotPathPlanInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotPathPlanInfo
         */
        static fromObject(object: { [k: string]: any }): robomaster.RobotPathPlanInfo;

        /**
         * Creates a plain object from a RobotPathPlanInfo message. Also converts values to other types if specified.
         * @param message RobotPathPlanInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RobotPathPlanInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotPathPlanInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RobotPathPlanInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RobotPathPlanInfo {

        /** Properties of a RobotPathPlanInfo. */
        interface $Properties {

            /** RobotPathPlanInfo intention */
            intention?: (number|null);

            /** RobotPathPlanInfo startPosX */
            startPosX?: (number|null);

            /** RobotPathPlanInfo startPosY */
            startPosY?: (number|null);

            /** RobotPathPlanInfo offsetX */
            offsetX?: (number[]|null);

            /** RobotPathPlanInfo offsetY */
            offsetY?: (number[]|null);

            /** RobotPathPlanInfo senderId */
            senderId?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RobotPathPlanInfo. */
        type $Shape = robomaster.RobotPathPlanInfo.$Properties;
    }

    /**
     * Properties of a RadarInfoToClient.
     * @deprecated Use robomaster.RadarInfoToClient.$Properties instead.
     */
    interface IRadarInfoToClient extends robomaster.RadarInfoToClient.$Properties {
    }

    /** Represents a RadarInfoToClient. */
    class RadarInfoToClient {

        /**
         * Constructs a new RadarInfoToClient.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RadarInfoToClient.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RadarInfoToClient RadarSingleRobotInfo. */
        RadarSingleRobotInfo: robomaster.RadarSingleRobotInfo.$Properties[];

        /**
         * Creates a new RadarInfoToClient instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RadarInfoToClient instance
         */
        static create(properties: robomaster.RadarInfoToClient.$Shape): robomaster.RadarInfoToClient & robomaster.RadarInfoToClient.$Shape;
        static create(properties?: robomaster.RadarInfoToClient.$Properties): robomaster.RadarInfoToClient;

        /**
         * Encodes the specified RadarInfoToClient message. Does not implicitly {@link robomaster.RadarInfoToClient.verify|verify} messages.
         * @param message RadarInfoToClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RadarInfoToClient.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RadarInfoToClient message, length delimited. Does not implicitly {@link robomaster.RadarInfoToClient.verify|verify} messages.
         * @param message RadarInfoToClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RadarInfoToClient.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RadarInfoToClient message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RadarInfoToClient & robomaster.RadarInfoToClient.$Shape} RadarInfoToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RadarInfoToClient & robomaster.RadarInfoToClient.$Shape;

        /**
         * Decodes a RadarInfoToClient message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RadarInfoToClient & robomaster.RadarInfoToClient.$Shape} RadarInfoToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RadarInfoToClient & robomaster.RadarInfoToClient.$Shape;

        /**
         * Verifies a RadarInfoToClient message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RadarInfoToClient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RadarInfoToClient
         */
        static fromObject(object: { [k: string]: any }): robomaster.RadarInfoToClient;

        /**
         * Creates a plain object from a RadarInfoToClient message. Also converts values to other types if specified.
         * @param message RadarInfoToClient
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RadarInfoToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RadarInfoToClient to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RadarInfoToClient
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RadarInfoToClient {

        /** Properties of a RadarInfoToClient. */
        interface $Properties {

            /** RadarInfoToClient RadarSingleRobotInfo */
            RadarSingleRobotInfo?: (robomaster.RadarSingleRobotInfo.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RadarInfoToClient. */
        type $Shape = robomaster.RadarInfoToClient.$Properties;
    }

    /**
     * Properties of a RadarSingleRobotInfo.
     * @deprecated Use robomaster.RadarSingleRobotInfo.$Properties instead.
     */
    interface IRadarSingleRobotInfo extends robomaster.RadarSingleRobotInfo.$Properties {
    }

    /** Represents a RadarSingleRobotInfo. */
    class RadarSingleRobotInfo {

        /**
         * Constructs a new RadarSingleRobotInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RadarSingleRobotInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RadarSingleRobotInfo targetPosX. */
        targetPosX?: (number|null);

        /** RadarSingleRobotInfo targetPosY. */
        targetPosY?: (number|null);

        /** RadarSingleRobotInfo isHighLight. */
        isHighLight?: (number|null);

        /**
         * Creates a new RadarSingleRobotInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RadarSingleRobotInfo instance
         */
        static create(properties: robomaster.RadarSingleRobotInfo.$Shape): robomaster.RadarSingleRobotInfo & robomaster.RadarSingleRobotInfo.$Shape;
        static create(properties?: robomaster.RadarSingleRobotInfo.$Properties): robomaster.RadarSingleRobotInfo;

        /**
         * Encodes the specified RadarSingleRobotInfo message. Does not implicitly {@link robomaster.RadarSingleRobotInfo.verify|verify} messages.
         * @param message RadarSingleRobotInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RadarSingleRobotInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RadarSingleRobotInfo message, length delimited. Does not implicitly {@link robomaster.RadarSingleRobotInfo.verify|verify} messages.
         * @param message RadarSingleRobotInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RadarSingleRobotInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RadarSingleRobotInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RadarSingleRobotInfo & robomaster.RadarSingleRobotInfo.$Shape} RadarSingleRobotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RadarSingleRobotInfo & robomaster.RadarSingleRobotInfo.$Shape;

        /**
         * Decodes a RadarSingleRobotInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RadarSingleRobotInfo & robomaster.RadarSingleRobotInfo.$Shape} RadarSingleRobotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RadarSingleRobotInfo & robomaster.RadarSingleRobotInfo.$Shape;

        /**
         * Verifies a RadarSingleRobotInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RadarSingleRobotInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RadarSingleRobotInfo
         */
        static fromObject(object: { [k: string]: any }): robomaster.RadarSingleRobotInfo;

        /**
         * Creates a plain object from a RadarSingleRobotInfo message. Also converts values to other types if specified.
         * @param message RadarSingleRobotInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RadarSingleRobotInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RadarSingleRobotInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RadarSingleRobotInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RadarSingleRobotInfo {

        /** Properties of a RadarSingleRobotInfo. */
        interface $Properties {

            /** RadarSingleRobotInfo targetPosX */
            targetPosX?: (number|null);

            /** RadarSingleRobotInfo targetPosY */
            targetPosY?: (number|null);

            /** RadarSingleRobotInfo isHighLight */
            isHighLight?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RadarSingleRobotInfo. */
        type $Shape = robomaster.RadarSingleRobotInfo.$Properties;
    }

    /**
     * Properties of a CustomByteBlock.
     * @deprecated Use robomaster.CustomByteBlock.$Properties instead.
     */
    interface ICustomByteBlock extends robomaster.CustomByteBlock.$Properties {
    }

    /** Represents a CustomByteBlock. */
    class CustomByteBlock {

        /**
         * Constructs a new CustomByteBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.CustomByteBlock.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CustomByteBlock data. */
        data?: (Uint8Array|null);

        /**
         * Creates a new CustomByteBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomByteBlock instance
         */
        static create(properties: robomaster.CustomByteBlock.$Shape): robomaster.CustomByteBlock & robomaster.CustomByteBlock.$Shape;
        static create(properties?: robomaster.CustomByteBlock.$Properties): robomaster.CustomByteBlock;

        /**
         * Encodes the specified CustomByteBlock message. Does not implicitly {@link robomaster.CustomByteBlock.verify|verify} messages.
         * @param message CustomByteBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.CustomByteBlock.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomByteBlock message, length delimited. Does not implicitly {@link robomaster.CustomByteBlock.verify|verify} messages.
         * @param message CustomByteBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.CustomByteBlock.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomByteBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.CustomByteBlock & robomaster.CustomByteBlock.$Shape} CustomByteBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.CustomByteBlock & robomaster.CustomByteBlock.$Shape;

        /**
         * Decodes a CustomByteBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.CustomByteBlock & robomaster.CustomByteBlock.$Shape} CustomByteBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.CustomByteBlock & robomaster.CustomByteBlock.$Shape;

        /**
         * Verifies a CustomByteBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CustomByteBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomByteBlock
         */
        static fromObject(object: { [k: string]: any }): robomaster.CustomByteBlock;

        /**
         * Creates a plain object from a CustomByteBlock message. Also converts values to other types if specified.
         * @param message CustomByteBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.CustomByteBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomByteBlock to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CustomByteBlock
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CustomByteBlock {

        /** Properties of a CustomByteBlock. */
        interface $Properties {

            /** CustomByteBlock data */
            data?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CustomByteBlock. */
        type $Shape = robomaster.CustomByteBlock.$Properties;
    }

    /**
     * Properties of a TechCoreMotionStateSync.
     * @deprecated Use robomaster.TechCoreMotionStateSync.$Properties instead.
     */
    interface ITechCoreMotionStateSync extends robomaster.TechCoreMotionStateSync.$Properties {
    }

    /** Represents a TechCoreMotionStateSync. */
    class TechCoreMotionStateSync {

        /**
         * Constructs a new TechCoreMotionStateSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.TechCoreMotionStateSync.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** TechCoreMotionStateSync maximumDifficultyLevel. */
        maximumDifficultyLevel?: (number|null);

        /** TechCoreMotionStateSync basicState. */
        basicState?: (number|null);

        /** TechCoreMotionStateSync putinState. */
        putinState?: (number|null);

        /** TechCoreMotionStateSync moveState. */
        moveState?: (number|null);

        /** TechCoreMotionStateSync rotateState. */
        rotateState?: (number|null);

        /** TechCoreMotionStateSync enemyCoreStatus. */
        enemyCoreStatus?: (number|null);

        /** TechCoreMotionStateSync remainTimeAll. */
        remainTimeAll?: (number|null);

        /** TechCoreMotionStateSync remainTimeStep. */
        remainTimeStep?: (number|null);

        /**
         * Creates a new TechCoreMotionStateSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TechCoreMotionStateSync instance
         */
        static create(properties: robomaster.TechCoreMotionStateSync.$Shape): robomaster.TechCoreMotionStateSync & robomaster.TechCoreMotionStateSync.$Shape;
        static create(properties?: robomaster.TechCoreMotionStateSync.$Properties): robomaster.TechCoreMotionStateSync;

        /**
         * Encodes the specified TechCoreMotionStateSync message. Does not implicitly {@link robomaster.TechCoreMotionStateSync.verify|verify} messages.
         * @param message TechCoreMotionStateSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.TechCoreMotionStateSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TechCoreMotionStateSync message, length delimited. Does not implicitly {@link robomaster.TechCoreMotionStateSync.verify|verify} messages.
         * @param message TechCoreMotionStateSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.TechCoreMotionStateSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TechCoreMotionStateSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.TechCoreMotionStateSync & robomaster.TechCoreMotionStateSync.$Shape} TechCoreMotionStateSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.TechCoreMotionStateSync & robomaster.TechCoreMotionStateSync.$Shape;

        /**
         * Decodes a TechCoreMotionStateSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.TechCoreMotionStateSync & robomaster.TechCoreMotionStateSync.$Shape} TechCoreMotionStateSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.TechCoreMotionStateSync & robomaster.TechCoreMotionStateSync.$Shape;

        /**
         * Verifies a TechCoreMotionStateSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TechCoreMotionStateSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TechCoreMotionStateSync
         */
        static fromObject(object: { [k: string]: any }): robomaster.TechCoreMotionStateSync;

        /**
         * Creates a plain object from a TechCoreMotionStateSync message. Also converts values to other types if specified.
         * @param message TechCoreMotionStateSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.TechCoreMotionStateSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TechCoreMotionStateSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TechCoreMotionStateSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace TechCoreMotionStateSync {

        /** Properties of a TechCoreMotionStateSync. */
        interface $Properties {

            /** TechCoreMotionStateSync maximumDifficultyLevel */
            maximumDifficultyLevel?: (number|null);

            /** TechCoreMotionStateSync basicState */
            basicState?: (number|null);

            /** TechCoreMotionStateSync putinState */
            putinState?: (number|null);

            /** TechCoreMotionStateSync moveState */
            moveState?: (number|null);

            /** TechCoreMotionStateSync rotateState */
            rotateState?: (number|null);

            /** TechCoreMotionStateSync enemyCoreStatus */
            enemyCoreStatus?: (number|null);

            /** TechCoreMotionStateSync remainTimeAll */
            remainTimeAll?: (number|null);

            /** TechCoreMotionStateSync remainTimeStep */
            remainTimeStep?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a TechCoreMotionStateSync. */
        type $Shape = robomaster.TechCoreMotionStateSync.$Properties;
    }

    /**
     * Properties of a RobotPerformanceSelectionSync.
     * @deprecated Use robomaster.RobotPerformanceSelectionSync.$Properties instead.
     */
    interface IRobotPerformanceSelectionSync extends robomaster.RobotPerformanceSelectionSync.$Properties {
    }

    /** Represents a RobotPerformanceSelectionSync. */
    class RobotPerformanceSelectionSync {

        /**
         * Constructs a new RobotPerformanceSelectionSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RobotPerformanceSelectionSync.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RobotPerformanceSelectionSync shooter. */
        shooter?: (number|null);

        /** RobotPerformanceSelectionSync chassis. */
        chassis?: (number|null);

        /** RobotPerformanceSelectionSync sentryControl. */
        sentryControl?: (number|null);

        /**
         * Creates a new RobotPerformanceSelectionSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotPerformanceSelectionSync instance
         */
        static create(properties: robomaster.RobotPerformanceSelectionSync.$Shape): robomaster.RobotPerformanceSelectionSync & robomaster.RobotPerformanceSelectionSync.$Shape;
        static create(properties?: robomaster.RobotPerformanceSelectionSync.$Properties): robomaster.RobotPerformanceSelectionSync;

        /**
         * Encodes the specified RobotPerformanceSelectionSync message. Does not implicitly {@link robomaster.RobotPerformanceSelectionSync.verify|verify} messages.
         * @param message RobotPerformanceSelectionSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RobotPerformanceSelectionSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotPerformanceSelectionSync message, length delimited. Does not implicitly {@link robomaster.RobotPerformanceSelectionSync.verify|verify} messages.
         * @param message RobotPerformanceSelectionSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RobotPerformanceSelectionSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotPerformanceSelectionSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RobotPerformanceSelectionSync & robomaster.RobotPerformanceSelectionSync.$Shape} RobotPerformanceSelectionSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RobotPerformanceSelectionSync & robomaster.RobotPerformanceSelectionSync.$Shape;

        /**
         * Decodes a RobotPerformanceSelectionSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RobotPerformanceSelectionSync & robomaster.RobotPerformanceSelectionSync.$Shape} RobotPerformanceSelectionSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RobotPerformanceSelectionSync & robomaster.RobotPerformanceSelectionSync.$Shape;

        /**
         * Verifies a RobotPerformanceSelectionSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotPerformanceSelectionSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotPerformanceSelectionSync
         */
        static fromObject(object: { [k: string]: any }): robomaster.RobotPerformanceSelectionSync;

        /**
         * Creates a plain object from a RobotPerformanceSelectionSync message. Also converts values to other types if specified.
         * @param message RobotPerformanceSelectionSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RobotPerformanceSelectionSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotPerformanceSelectionSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RobotPerformanceSelectionSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RobotPerformanceSelectionSync {

        /** Properties of a RobotPerformanceSelectionSync. */
        interface $Properties {

            /** RobotPerformanceSelectionSync shooter */
            shooter?: (number|null);

            /** RobotPerformanceSelectionSync chassis */
            chassis?: (number|null);

            /** RobotPerformanceSelectionSync sentryControl */
            sentryControl?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RobotPerformanceSelectionSync. */
        type $Shape = robomaster.RobotPerformanceSelectionSync.$Properties;
    }

    /**
     * Properties of a DeployModeStatusSync.
     * @deprecated Use robomaster.DeployModeStatusSync.$Properties instead.
     */
    interface IDeployModeStatusSync extends robomaster.DeployModeStatusSync.$Properties {
    }

    /** Represents a DeployModeStatusSync. */
    class DeployModeStatusSync {

        /**
         * Constructs a new DeployModeStatusSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.DeployModeStatusSync.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DeployModeStatusSync status. */
        status?: (number|null);

        /**
         * Creates a new DeployModeStatusSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeployModeStatusSync instance
         */
        static create(properties: robomaster.DeployModeStatusSync.$Shape): robomaster.DeployModeStatusSync & robomaster.DeployModeStatusSync.$Shape;
        static create(properties?: robomaster.DeployModeStatusSync.$Properties): robomaster.DeployModeStatusSync;

        /**
         * Encodes the specified DeployModeStatusSync message. Does not implicitly {@link robomaster.DeployModeStatusSync.verify|verify} messages.
         * @param message DeployModeStatusSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.DeployModeStatusSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeployModeStatusSync message, length delimited. Does not implicitly {@link robomaster.DeployModeStatusSync.verify|verify} messages.
         * @param message DeployModeStatusSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.DeployModeStatusSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeployModeStatusSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.DeployModeStatusSync & robomaster.DeployModeStatusSync.$Shape} DeployModeStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.DeployModeStatusSync & robomaster.DeployModeStatusSync.$Shape;

        /**
         * Decodes a DeployModeStatusSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.DeployModeStatusSync & robomaster.DeployModeStatusSync.$Shape} DeployModeStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.DeployModeStatusSync & robomaster.DeployModeStatusSync.$Shape;

        /**
         * Verifies a DeployModeStatusSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeployModeStatusSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeployModeStatusSync
         */
        static fromObject(object: { [k: string]: any }): robomaster.DeployModeStatusSync;

        /**
         * Creates a plain object from a DeployModeStatusSync message. Also converts values to other types if specified.
         * @param message DeployModeStatusSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.DeployModeStatusSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeployModeStatusSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DeployModeStatusSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DeployModeStatusSync {

        /** Properties of a DeployModeStatusSync. */
        interface $Properties {

            /** DeployModeStatusSync status */
            status?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DeployModeStatusSync. */
        type $Shape = robomaster.DeployModeStatusSync.$Properties;
    }

    /**
     * Properties of a RuneStatusSync.
     * @deprecated Use robomaster.RuneStatusSync.$Properties instead.
     */
    interface IRuneStatusSync extends robomaster.RuneStatusSync.$Properties {
    }

    /** Represents a RuneStatusSync. */
    class RuneStatusSync {

        /**
         * Constructs a new RuneStatusSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.RuneStatusSync.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RuneStatusSync runeStatus. */
        runeStatus?: (number|null);

        /** RuneStatusSync activatedArms. */
        activatedArms?: (number|null);

        /** RuneStatusSync averageRings. */
        averageRings?: (number|null);

        /**
         * Creates a new RuneStatusSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RuneStatusSync instance
         */
        static create(properties: robomaster.RuneStatusSync.$Shape): robomaster.RuneStatusSync & robomaster.RuneStatusSync.$Shape;
        static create(properties?: robomaster.RuneStatusSync.$Properties): robomaster.RuneStatusSync;

        /**
         * Encodes the specified RuneStatusSync message. Does not implicitly {@link robomaster.RuneStatusSync.verify|verify} messages.
         * @param message RuneStatusSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.RuneStatusSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RuneStatusSync message, length delimited. Does not implicitly {@link robomaster.RuneStatusSync.verify|verify} messages.
         * @param message RuneStatusSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.RuneStatusSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RuneStatusSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.RuneStatusSync & robomaster.RuneStatusSync.$Shape} RuneStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.RuneStatusSync & robomaster.RuneStatusSync.$Shape;

        /**
         * Decodes a RuneStatusSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.RuneStatusSync & robomaster.RuneStatusSync.$Shape} RuneStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.RuneStatusSync & robomaster.RuneStatusSync.$Shape;

        /**
         * Verifies a RuneStatusSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RuneStatusSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RuneStatusSync
         */
        static fromObject(object: { [k: string]: any }): robomaster.RuneStatusSync;

        /**
         * Creates a plain object from a RuneStatusSync message. Also converts values to other types if specified.
         * @param message RuneStatusSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.RuneStatusSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RuneStatusSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RuneStatusSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RuneStatusSync {

        /** Properties of a RuneStatusSync. */
        interface $Properties {

            /** RuneStatusSync runeStatus */
            runeStatus?: (number|null);

            /** RuneStatusSync activatedArms */
            activatedArms?: (number|null);

            /** RuneStatusSync averageRings */
            averageRings?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RuneStatusSync. */
        type $Shape = robomaster.RuneStatusSync.$Properties;
    }

    /**
     * Properties of a SentryStatusSync.
     * @deprecated Use robomaster.SentryStatusSync.$Properties instead.
     */
    interface ISentryStatusSync extends robomaster.SentryStatusSync.$Properties {
    }

    /** Represents a SentryStatusSync. */
    class SentryStatusSync {

        /**
         * Constructs a new SentryStatusSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.SentryStatusSync.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SentryStatusSync postureId. */
        postureId?: (number|null);

        /** SentryStatusSync isWeakened. */
        isWeakened?: (boolean|null);

        /**
         * Creates a new SentryStatusSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SentryStatusSync instance
         */
        static create(properties: robomaster.SentryStatusSync.$Shape): robomaster.SentryStatusSync & robomaster.SentryStatusSync.$Shape;
        static create(properties?: robomaster.SentryStatusSync.$Properties): robomaster.SentryStatusSync;

        /**
         * Encodes the specified SentryStatusSync message. Does not implicitly {@link robomaster.SentryStatusSync.verify|verify} messages.
         * @param message SentryStatusSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.SentryStatusSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SentryStatusSync message, length delimited. Does not implicitly {@link robomaster.SentryStatusSync.verify|verify} messages.
         * @param message SentryStatusSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.SentryStatusSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SentryStatusSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.SentryStatusSync & robomaster.SentryStatusSync.$Shape} SentryStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.SentryStatusSync & robomaster.SentryStatusSync.$Shape;

        /**
         * Decodes a SentryStatusSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.SentryStatusSync & robomaster.SentryStatusSync.$Shape} SentryStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.SentryStatusSync & robomaster.SentryStatusSync.$Shape;

        /**
         * Verifies a SentryStatusSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SentryStatusSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SentryStatusSync
         */
        static fromObject(object: { [k: string]: any }): robomaster.SentryStatusSync;

        /**
         * Creates a plain object from a SentryStatusSync message. Also converts values to other types if specified.
         * @param message SentryStatusSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.SentryStatusSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SentryStatusSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SentryStatusSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SentryStatusSync {

        /** Properties of a SentryStatusSync. */
        interface $Properties {

            /** SentryStatusSync postureId */
            postureId?: (number|null);

            /** SentryStatusSync isWeakened */
            isWeakened?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SentryStatusSync. */
        type $Shape = robomaster.SentryStatusSync.$Properties;
    }

    /**
     * Properties of a DartSelectTargetStatusSync.
     * @deprecated Use robomaster.DartSelectTargetStatusSync.$Properties instead.
     */
    interface IDartSelectTargetStatusSync extends robomaster.DartSelectTargetStatusSync.$Properties {
    }

    /** Represents a DartSelectTargetStatusSync. */
    class DartSelectTargetStatusSync {

        /**
         * Constructs a new DartSelectTargetStatusSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.DartSelectTargetStatusSync.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DartSelectTargetStatusSync targetId. */
        targetId?: (number|null);

        /** DartSelectTargetStatusSync open. */
        open?: (number|null);

        /**
         * Creates a new DartSelectTargetStatusSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DartSelectTargetStatusSync instance
         */
        static create(properties: robomaster.DartSelectTargetStatusSync.$Shape): robomaster.DartSelectTargetStatusSync & robomaster.DartSelectTargetStatusSync.$Shape;
        static create(properties?: robomaster.DartSelectTargetStatusSync.$Properties): robomaster.DartSelectTargetStatusSync;

        /**
         * Encodes the specified DartSelectTargetStatusSync message. Does not implicitly {@link robomaster.DartSelectTargetStatusSync.verify|verify} messages.
         * @param message DartSelectTargetStatusSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.DartSelectTargetStatusSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DartSelectTargetStatusSync message, length delimited. Does not implicitly {@link robomaster.DartSelectTargetStatusSync.verify|verify} messages.
         * @param message DartSelectTargetStatusSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.DartSelectTargetStatusSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DartSelectTargetStatusSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.DartSelectTargetStatusSync & robomaster.DartSelectTargetStatusSync.$Shape} DartSelectTargetStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.DartSelectTargetStatusSync & robomaster.DartSelectTargetStatusSync.$Shape;

        /**
         * Decodes a DartSelectTargetStatusSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.DartSelectTargetStatusSync & robomaster.DartSelectTargetStatusSync.$Shape} DartSelectTargetStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.DartSelectTargetStatusSync & robomaster.DartSelectTargetStatusSync.$Shape;

        /**
         * Verifies a DartSelectTargetStatusSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DartSelectTargetStatusSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DartSelectTargetStatusSync
         */
        static fromObject(object: { [k: string]: any }): robomaster.DartSelectTargetStatusSync;

        /**
         * Creates a plain object from a DartSelectTargetStatusSync message. Also converts values to other types if specified.
         * @param message DartSelectTargetStatusSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.DartSelectTargetStatusSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DartSelectTargetStatusSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DartSelectTargetStatusSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DartSelectTargetStatusSync {

        /** Properties of a DartSelectTargetStatusSync. */
        interface $Properties {

            /** DartSelectTargetStatusSync targetId */
            targetId?: (number|null);

            /** DartSelectTargetStatusSync open */
            open?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DartSelectTargetStatusSync. */
        type $Shape = robomaster.DartSelectTargetStatusSync.$Properties;
    }

    /**
     * Properties of a SentryCtrlResult.
     * @deprecated Use robomaster.SentryCtrlResult.$Properties instead.
     */
    interface ISentryCtrlResult extends robomaster.SentryCtrlResult.$Properties {
    }

    /** Represents a SentryCtrlResult. */
    class SentryCtrlResult {

        /**
         * Constructs a new SentryCtrlResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.SentryCtrlResult.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SentryCtrlResult commandId. */
        commandId?: (number|null);

        /** SentryCtrlResult resultCode. */
        resultCode?: (number|null);

        /**
         * Creates a new SentryCtrlResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SentryCtrlResult instance
         */
        static create(properties: robomaster.SentryCtrlResult.$Shape): robomaster.SentryCtrlResult & robomaster.SentryCtrlResult.$Shape;
        static create(properties?: robomaster.SentryCtrlResult.$Properties): robomaster.SentryCtrlResult;

        /**
         * Encodes the specified SentryCtrlResult message. Does not implicitly {@link robomaster.SentryCtrlResult.verify|verify} messages.
         * @param message SentryCtrlResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.SentryCtrlResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SentryCtrlResult message, length delimited. Does not implicitly {@link robomaster.SentryCtrlResult.verify|verify} messages.
         * @param message SentryCtrlResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.SentryCtrlResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SentryCtrlResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.SentryCtrlResult & robomaster.SentryCtrlResult.$Shape} SentryCtrlResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.SentryCtrlResult & robomaster.SentryCtrlResult.$Shape;

        /**
         * Decodes a SentryCtrlResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.SentryCtrlResult & robomaster.SentryCtrlResult.$Shape} SentryCtrlResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.SentryCtrlResult & robomaster.SentryCtrlResult.$Shape;

        /**
         * Verifies a SentryCtrlResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SentryCtrlResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SentryCtrlResult
         */
        static fromObject(object: { [k: string]: any }): robomaster.SentryCtrlResult;

        /**
         * Creates a plain object from a SentryCtrlResult message. Also converts values to other types if specified.
         * @param message SentryCtrlResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.SentryCtrlResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SentryCtrlResult to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SentryCtrlResult
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SentryCtrlResult {

        /** Properties of a SentryCtrlResult. */
        interface $Properties {

            /** SentryCtrlResult commandId */
            commandId?: (number|null);

            /** SentryCtrlResult resultCode */
            resultCode?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SentryCtrlResult. */
        type $Shape = robomaster.SentryCtrlResult.$Properties;
    }

    /**
     * Properties of an AirSupportStatusSync.
     * @deprecated Use robomaster.AirSupportStatusSync.$Properties instead.
     */
    interface IAirSupportStatusSync extends robomaster.AirSupportStatusSync.$Properties {
    }

    /** Represents an AirSupportStatusSync. */
    class AirSupportStatusSync {

        /**
         * Constructs a new AirSupportStatusSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: robomaster.AirSupportStatusSync.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AirSupportStatusSync airsupportStatus. */
        airsupportStatus?: (number|null);

        /** AirSupportStatusSync leftTime. */
        leftTime?: (number|null);

        /** AirSupportStatusSync costCoins. */
        costCoins?: (number|null);

        /** AirSupportStatusSync isBeingTargeted. */
        isBeingTargeted?: (number|null);

        /** AirSupportStatusSync shooterStatus. */
        shooterStatus?: (number|null);

        /**
         * Creates a new AirSupportStatusSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AirSupportStatusSync instance
         */
        static create(properties: robomaster.AirSupportStatusSync.$Shape): robomaster.AirSupportStatusSync & robomaster.AirSupportStatusSync.$Shape;
        static create(properties?: robomaster.AirSupportStatusSync.$Properties): robomaster.AirSupportStatusSync;

        /**
         * Encodes the specified AirSupportStatusSync message. Does not implicitly {@link robomaster.AirSupportStatusSync.verify|verify} messages.
         * @param message AirSupportStatusSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: robomaster.AirSupportStatusSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AirSupportStatusSync message, length delimited. Does not implicitly {@link robomaster.AirSupportStatusSync.verify|verify} messages.
         * @param message AirSupportStatusSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: robomaster.AirSupportStatusSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AirSupportStatusSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {robomaster.AirSupportStatusSync & robomaster.AirSupportStatusSync.$Shape} AirSupportStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): robomaster.AirSupportStatusSync & robomaster.AirSupportStatusSync.$Shape;

        /**
         * Decodes an AirSupportStatusSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {robomaster.AirSupportStatusSync & robomaster.AirSupportStatusSync.$Shape} AirSupportStatusSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): robomaster.AirSupportStatusSync & robomaster.AirSupportStatusSync.$Shape;

        /**
         * Verifies an AirSupportStatusSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AirSupportStatusSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AirSupportStatusSync
         */
        static fromObject(object: { [k: string]: any }): robomaster.AirSupportStatusSync;

        /**
         * Creates a plain object from an AirSupportStatusSync message. Also converts values to other types if specified.
         * @param message AirSupportStatusSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: robomaster.AirSupportStatusSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AirSupportStatusSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AirSupportStatusSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AirSupportStatusSync {

        /** Properties of an AirSupportStatusSync. */
        interface $Properties {

            /** AirSupportStatusSync airsupportStatus */
            airsupportStatus?: (number|null);

            /** AirSupportStatusSync leftTime */
            leftTime?: (number|null);

            /** AirSupportStatusSync costCoins */
            costCoins?: (number|null);

            /** AirSupportStatusSync isBeingTargeted */
            isBeingTargeted?: (number|null);

            /** AirSupportStatusSync shooterStatus */
            shooterStatus?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AirSupportStatusSync. */
        type $Shape = robomaster.AirSupportStatusSync.$Properties;
    }
}
