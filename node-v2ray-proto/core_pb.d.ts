import * as $protobuf from "protobufjs";
/** Namespace v2ray. */
export namespace v2ray {

    /** Namespace core. */
    namespace core {

        /** Namespace app. */
        namespace app {

            /** Namespace commander. */
            namespace commander {

                /** Properties of a Config. */
                interface IConfig {

                    /** Config tag */
                    tag?: (string|null);

                    /** Config service */
                    service?: (v2ray.core.common.serial.ITypedMessage[]|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.commander.IConfig);

                    /** Config tag. */
                    public tag: string;

                    /** Config service. */
                    public service: v2ray.core.common.serial.ITypedMessage[];

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.app.commander.IConfig): v2ray.core.app.commander.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.commander.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.commander.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.commander.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.commander.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.commander.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.commander.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.commander.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.commander.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace dispatcher. */
            namespace dispatcher {

                /** Properties of a SessionConfig. */
                interface ISessionConfig {
                }

                /** Represents a SessionConfig. */
                class SessionConfig implements ISessionConfig {

                    /**
                     * Constructs a new SessionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.dispatcher.ISessionConfig);

                    /**
                     * Creates a new SessionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SessionConfig instance
                     */
                    public static create(properties?: v2ray.core.app.dispatcher.ISessionConfig): v2ray.core.app.dispatcher.SessionConfig;

                    /**
                     * Encodes the specified SessionConfig message. Does not implicitly {@link v2ray.core.app.dispatcher.SessionConfig.verify|verify} messages.
                     * @param message SessionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.dispatcher.ISessionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SessionConfig message, length delimited. Does not implicitly {@link v2ray.core.app.dispatcher.SessionConfig.verify|verify} messages.
                     * @param message SessionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.dispatcher.ISessionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SessionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SessionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.dispatcher.SessionConfig;

                    /**
                     * Decodes a SessionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SessionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.dispatcher.SessionConfig;

                    /**
                     * Verifies a SessionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SessionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SessionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.dispatcher.SessionConfig;

                    /**
                     * Creates a plain object from a SessionConfig message. Also converts values to other types if specified.
                     * @param message SessionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.dispatcher.SessionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SessionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config settings */
                    settings?: (v2ray.core.app.dispatcher.ISessionConfig|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.dispatcher.IConfig);

                    /** Config settings. */
                    public settings?: (v2ray.core.app.dispatcher.ISessionConfig|null);

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.app.dispatcher.IConfig): v2ray.core.app.dispatcher.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.dispatcher.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.dispatcher.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.dispatcher.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.dispatcher.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.dispatcher.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.dispatcher.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.dispatcher.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.dispatcher.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace dns. */
            namespace dns {

                /** Properties of a NameServer. */
                interface INameServer {

                    /** NameServer address */
                    address?: (v2ray.core.common.net.IEndpoint|null);

                    /** NameServer prioritizedDomain */
                    prioritizedDomain?: (v2ray.core.app.dns.NameServer.IPriorityDomain[]|null);
                }

                /** Represents a NameServer. */
                class NameServer implements INameServer {

                    /**
                     * Constructs a new NameServer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.dns.INameServer);

                    /** NameServer address. */
                    public address?: (v2ray.core.common.net.IEndpoint|null);

                    /** NameServer prioritizedDomain. */
                    public prioritizedDomain: v2ray.core.app.dns.NameServer.IPriorityDomain[];

                    /**
                     * Creates a new NameServer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NameServer instance
                     */
                    public static create(properties?: v2ray.core.app.dns.INameServer): v2ray.core.app.dns.NameServer;

                    /**
                     * Encodes the specified NameServer message. Does not implicitly {@link v2ray.core.app.dns.NameServer.verify|verify} messages.
                     * @param message NameServer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.dns.INameServer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NameServer message, length delimited. Does not implicitly {@link v2ray.core.app.dns.NameServer.verify|verify} messages.
                     * @param message NameServer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.dns.INameServer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NameServer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NameServer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.dns.NameServer;

                    /**
                     * Decodes a NameServer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NameServer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.dns.NameServer;

                    /**
                     * Verifies a NameServer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NameServer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NameServer
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.dns.NameServer;

                    /**
                     * Creates a plain object from a NameServer message. Also converts values to other types if specified.
                     * @param message NameServer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.dns.NameServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NameServer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace NameServer {

                    /** Properties of a PriorityDomain. */
                    interface IPriorityDomain {

                        /** PriorityDomain type */
                        type?: (v2ray.core.app.dns.DomainMatchingType|null);

                        /** PriorityDomain domain */
                        domain?: (string|null);
                    }

                    /** Represents a PriorityDomain. */
                    class PriorityDomain implements IPriorityDomain {

                        /**
                         * Constructs a new PriorityDomain.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.dns.NameServer.IPriorityDomain);

                        /** PriorityDomain type. */
                        public type: v2ray.core.app.dns.DomainMatchingType;

                        /** PriorityDomain domain. */
                        public domain: string;

                        /**
                         * Creates a new PriorityDomain instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PriorityDomain instance
                         */
                        public static create(properties?: v2ray.core.app.dns.NameServer.IPriorityDomain): v2ray.core.app.dns.NameServer.PriorityDomain;

                        /**
                         * Encodes the specified PriorityDomain message. Does not implicitly {@link v2ray.core.app.dns.NameServer.PriorityDomain.verify|verify} messages.
                         * @param message PriorityDomain message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.dns.NameServer.IPriorityDomain, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PriorityDomain message, length delimited. Does not implicitly {@link v2ray.core.app.dns.NameServer.PriorityDomain.verify|verify} messages.
                         * @param message PriorityDomain message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.dns.NameServer.IPriorityDomain, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PriorityDomain message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PriorityDomain
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.dns.NameServer.PriorityDomain;

                        /**
                         * Decodes a PriorityDomain message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PriorityDomain
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.dns.NameServer.PriorityDomain;

                        /**
                         * Verifies a PriorityDomain message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PriorityDomain message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PriorityDomain
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.dns.NameServer.PriorityDomain;

                        /**
                         * Creates a plain object from a PriorityDomain message. Also converts values to other types if specified.
                         * @param message PriorityDomain
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.dns.NameServer.PriorityDomain, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PriorityDomain to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** DomainMatchingType enum. */
                enum DomainMatchingType {
                    Full = 0,
                    Subdomain = 1,
                    Keyword = 2,
                    Regex = 3
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config NameServers */
                    NameServers?: (v2ray.core.common.net.IEndpoint[]|null);

                    /** Config nameServer */
                    nameServer?: (v2ray.core.app.dns.INameServer[]|null);

                    /** Config Hosts */
                    Hosts?: ({ [k: string]: v2ray.core.common.net.IIPOrDomain }|null);

                    /** Config clientIp */
                    clientIp?: (Uint8Array|null);

                    /** Config staticHosts */
                    staticHosts?: (v2ray.core.app.dns.Config.IHostMapping[]|null);

                    /** Config tag */
                    tag?: (string|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.dns.IConfig);

                    /** Config NameServers. */
                    public NameServers: v2ray.core.common.net.IEndpoint[];

                    /** Config nameServer. */
                    public nameServer: v2ray.core.app.dns.INameServer[];

                    /** Config Hosts. */
                    public Hosts: { [k: string]: v2ray.core.common.net.IIPOrDomain };

                    /** Config clientIp. */
                    public clientIp: Uint8Array;

                    /** Config staticHosts. */
                    public staticHosts: v2ray.core.app.dns.Config.IHostMapping[];

                    /** Config tag. */
                    public tag: string;

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.app.dns.IConfig): v2ray.core.app.dns.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.dns.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.dns.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.dns.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.dns.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.dns.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.dns.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.dns.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.dns.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Config {

                    /** Properties of a HostMapping. */
                    interface IHostMapping {

                        /** HostMapping type */
                        type?: (v2ray.core.app.dns.DomainMatchingType|null);

                        /** HostMapping domain */
                        domain?: (string|null);

                        /** HostMapping ip */
                        ip?: (Uint8Array[]|null);

                        /** HostMapping proxiedDomain */
                        proxiedDomain?: (string|null);
                    }

                    /** Represents a HostMapping. */
                    class HostMapping implements IHostMapping {

                        /**
                         * Constructs a new HostMapping.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.dns.Config.IHostMapping);

                        /** HostMapping type. */
                        public type: v2ray.core.app.dns.DomainMatchingType;

                        /** HostMapping domain. */
                        public domain: string;

                        /** HostMapping ip. */
                        public ip: Uint8Array[];

                        /** HostMapping proxiedDomain. */
                        public proxiedDomain: string;

                        /**
                         * Creates a new HostMapping instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HostMapping instance
                         */
                        public static create(properties?: v2ray.core.app.dns.Config.IHostMapping): v2ray.core.app.dns.Config.HostMapping;

                        /**
                         * Encodes the specified HostMapping message. Does not implicitly {@link v2ray.core.app.dns.Config.HostMapping.verify|verify} messages.
                         * @param message HostMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.dns.Config.IHostMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HostMapping message, length delimited. Does not implicitly {@link v2ray.core.app.dns.Config.HostMapping.verify|verify} messages.
                         * @param message HostMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.dns.Config.IHostMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HostMapping message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HostMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.dns.Config.HostMapping;

                        /**
                         * Decodes a HostMapping message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HostMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.dns.Config.HostMapping;

                        /**
                         * Verifies a HostMapping message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HostMapping message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HostMapping
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.dns.Config.HostMapping;

                        /**
                         * Creates a plain object from a HostMapping message. Also converts values to other types if specified.
                         * @param message HostMapping
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.dns.Config.HostMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HostMapping to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace log. */
            namespace log {

                /** Namespace command. */
                namespace command {

                    /** Properties of a Config. */
                    interface IConfig {
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.log.command.IConfig);

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.app.log.command.IConfig): v2ray.core.app.log.command.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.log.command.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.log.command.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.log.command.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.log.command.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.log.command.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.log.command.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.log.command.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.log.command.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RestartLoggerRequest. */
                    interface IRestartLoggerRequest {
                    }

                    /** Represents a RestartLoggerRequest. */
                    class RestartLoggerRequest implements IRestartLoggerRequest {

                        /**
                         * Constructs a new RestartLoggerRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.log.command.IRestartLoggerRequest);

                        /**
                         * Creates a new RestartLoggerRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RestartLoggerRequest instance
                         */
                        public static create(properties?: v2ray.core.app.log.command.IRestartLoggerRequest): v2ray.core.app.log.command.RestartLoggerRequest;

                        /**
                         * Encodes the specified RestartLoggerRequest message. Does not implicitly {@link v2ray.core.app.log.command.RestartLoggerRequest.verify|verify} messages.
                         * @param message RestartLoggerRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.log.command.IRestartLoggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RestartLoggerRequest message, length delimited. Does not implicitly {@link v2ray.core.app.log.command.RestartLoggerRequest.verify|verify} messages.
                         * @param message RestartLoggerRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.log.command.IRestartLoggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RestartLoggerRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RestartLoggerRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.log.command.RestartLoggerRequest;

                        /**
                         * Decodes a RestartLoggerRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RestartLoggerRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.log.command.RestartLoggerRequest;

                        /**
                         * Verifies a RestartLoggerRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RestartLoggerRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RestartLoggerRequest
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.log.command.RestartLoggerRequest;

                        /**
                         * Creates a plain object from a RestartLoggerRequest message. Also converts values to other types if specified.
                         * @param message RestartLoggerRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.log.command.RestartLoggerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RestartLoggerRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RestartLoggerResponse. */
                    interface IRestartLoggerResponse {
                    }

                    /** Represents a RestartLoggerResponse. */
                    class RestartLoggerResponse implements IRestartLoggerResponse {

                        /**
                         * Constructs a new RestartLoggerResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.log.command.IRestartLoggerResponse);

                        /**
                         * Creates a new RestartLoggerResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RestartLoggerResponse instance
                         */
                        public static create(properties?: v2ray.core.app.log.command.IRestartLoggerResponse): v2ray.core.app.log.command.RestartLoggerResponse;

                        /**
                         * Encodes the specified RestartLoggerResponse message. Does not implicitly {@link v2ray.core.app.log.command.RestartLoggerResponse.verify|verify} messages.
                         * @param message RestartLoggerResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.log.command.IRestartLoggerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RestartLoggerResponse message, length delimited. Does not implicitly {@link v2ray.core.app.log.command.RestartLoggerResponse.verify|verify} messages.
                         * @param message RestartLoggerResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.log.command.IRestartLoggerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RestartLoggerResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RestartLoggerResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.log.command.RestartLoggerResponse;

                        /**
                         * Decodes a RestartLoggerResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RestartLoggerResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.log.command.RestartLoggerResponse;

                        /**
                         * Verifies a RestartLoggerResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RestartLoggerResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RestartLoggerResponse
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.log.command.RestartLoggerResponse;

                        /**
                         * Creates a plain object from a RestartLoggerResponse message. Also converts values to other types if specified.
                         * @param message RestartLoggerResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.log.command.RestartLoggerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RestartLoggerResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Represents a LoggerService */
                    class LoggerService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new LoggerService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new LoggerService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LoggerService;

                        /**
                         * Calls RestartLogger.
                         * @param request RestartLoggerRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and RestartLoggerResponse
                         */
                        public restartLogger(request: v2ray.core.app.log.command.IRestartLoggerRequest, callback: v2ray.core.app.log.command.LoggerService.RestartLoggerCallback): void;

                        /**
                         * Calls RestartLogger.
                         * @param request RestartLoggerRequest message or plain object
                         * @returns Promise
                         */
                        public restartLogger(request: v2ray.core.app.log.command.IRestartLoggerRequest): Promise<v2ray.core.app.log.command.RestartLoggerResponse>;
                    }

                    namespace LoggerService {

                        /**
                         * Callback as used by {@link v2ray.core.app.log.command.LoggerService#restartLogger}.
                         * @param error Error, if any
                         * @param [response] RestartLoggerResponse
                         */
                        type RestartLoggerCallback = (error: (Error|null), response?: v2ray.core.app.log.command.RestartLoggerResponse) => void;
                    }
                }

                /** LogType enum. */
                enum LogType {
                    None = 0,
                    Console = 1,
                    File = 2,
                    Event = 3
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config errorLogType */
                    errorLogType?: (v2ray.core.app.log.LogType|null);

                    /** Config errorLogLevel */
                    errorLogLevel?: (v2ray.core.common.log.Severity|null);

                    /** Config errorLogPath */
                    errorLogPath?: (string|null);

                    /** Config accessLogType */
                    accessLogType?: (v2ray.core.app.log.LogType|null);

                    /** Config accessLogPath */
                    accessLogPath?: (string|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.log.IConfig);

                    /** Config errorLogType. */
                    public errorLogType: v2ray.core.app.log.LogType;

                    /** Config errorLogLevel. */
                    public errorLogLevel: v2ray.core.common.log.Severity;

                    /** Config errorLogPath. */
                    public errorLogPath: string;

                    /** Config accessLogType. */
                    public accessLogType: v2ray.core.app.log.LogType;

                    /** Config accessLogPath. */
                    public accessLogPath: string;

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.app.log.IConfig): v2ray.core.app.log.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.log.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.log.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.log.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.log.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.log.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.log.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.log.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.log.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace policy. */
            namespace policy {

                /** Properties of a Second. */
                interface ISecond {

                    /** Second value */
                    value?: (number|null);
                }

                /** Represents a Second. */
                class Second implements ISecond {

                    /**
                     * Constructs a new Second.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.policy.ISecond);

                    /** Second value. */
                    public value: number;

                    /**
                     * Creates a new Second instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Second instance
                     */
                    public static create(properties?: v2ray.core.app.policy.ISecond): v2ray.core.app.policy.Second;

                    /**
                     * Encodes the specified Second message. Does not implicitly {@link v2ray.core.app.policy.Second.verify|verify} messages.
                     * @param message Second message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.policy.ISecond, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Second message, length delimited. Does not implicitly {@link v2ray.core.app.policy.Second.verify|verify} messages.
                     * @param message Second message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.policy.ISecond, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Second message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Second
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.policy.Second;

                    /**
                     * Decodes a Second message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Second
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.policy.Second;

                    /**
                     * Verifies a Second message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Second message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Second
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.policy.Second;

                    /**
                     * Creates a plain object from a Second message. Also converts values to other types if specified.
                     * @param message Second
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.policy.Second, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Second to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Policy. */
                interface IPolicy {

                    /** Policy timeout */
                    timeout?: (v2ray.core.app.policy.Policy.ITimeout|null);

                    /** Policy stats */
                    stats?: (v2ray.core.app.policy.Policy.IStats|null);

                    /** Policy buffer */
                    buffer?: (v2ray.core.app.policy.Policy.IBuffer|null);
                }

                /** Represents a Policy. */
                class Policy implements IPolicy {

                    /**
                     * Constructs a new Policy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.policy.IPolicy);

                    /** Policy timeout. */
                    public timeout?: (v2ray.core.app.policy.Policy.ITimeout|null);

                    /** Policy stats. */
                    public stats?: (v2ray.core.app.policy.Policy.IStats|null);

                    /** Policy buffer. */
                    public buffer?: (v2ray.core.app.policy.Policy.IBuffer|null);

                    /**
                     * Creates a new Policy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Policy instance
                     */
                    public static create(properties?: v2ray.core.app.policy.IPolicy): v2ray.core.app.policy.Policy;

                    /**
                     * Encodes the specified Policy message. Does not implicitly {@link v2ray.core.app.policy.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.policy.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Policy message, length delimited. Does not implicitly {@link v2ray.core.app.policy.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.policy.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Policy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.policy.Policy;

                    /**
                     * Decodes a Policy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.policy.Policy;

                    /**
                     * Verifies a Policy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Policy
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.policy.Policy;

                    /**
                     * Creates a plain object from a Policy message. Also converts values to other types if specified.
                     * @param message Policy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.policy.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Policy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Policy {

                    /** Properties of a Timeout. */
                    interface ITimeout {

                        /** Timeout handshake */
                        handshake?: (v2ray.core.app.policy.ISecond|null);

                        /** Timeout connectionIdle */
                        connectionIdle?: (v2ray.core.app.policy.ISecond|null);

                        /** Timeout uplinkOnly */
                        uplinkOnly?: (v2ray.core.app.policy.ISecond|null);

                        /** Timeout downlinkOnly */
                        downlinkOnly?: (v2ray.core.app.policy.ISecond|null);
                    }

                    /** Represents a Timeout. */
                    class Timeout implements ITimeout {

                        /**
                         * Constructs a new Timeout.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.policy.Policy.ITimeout);

                        /** Timeout handshake. */
                        public handshake?: (v2ray.core.app.policy.ISecond|null);

                        /** Timeout connectionIdle. */
                        public connectionIdle?: (v2ray.core.app.policy.ISecond|null);

                        /** Timeout uplinkOnly. */
                        public uplinkOnly?: (v2ray.core.app.policy.ISecond|null);

                        /** Timeout downlinkOnly. */
                        public downlinkOnly?: (v2ray.core.app.policy.ISecond|null);

                        /**
                         * Creates a new Timeout instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Timeout instance
                         */
                        public static create(properties?: v2ray.core.app.policy.Policy.ITimeout): v2ray.core.app.policy.Policy.Timeout;

                        /**
                         * Encodes the specified Timeout message. Does not implicitly {@link v2ray.core.app.policy.Policy.Timeout.verify|verify} messages.
                         * @param message Timeout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.policy.Policy.ITimeout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Timeout message, length delimited. Does not implicitly {@link v2ray.core.app.policy.Policy.Timeout.verify|verify} messages.
                         * @param message Timeout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.policy.Policy.ITimeout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Timeout message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Timeout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.policy.Policy.Timeout;

                        /**
                         * Decodes a Timeout message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Timeout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.policy.Policy.Timeout;

                        /**
                         * Verifies a Timeout message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Timeout message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Timeout
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.policy.Policy.Timeout;

                        /**
                         * Creates a plain object from a Timeout message. Also converts values to other types if specified.
                         * @param message Timeout
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.policy.Policy.Timeout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Timeout to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Stats. */
                    interface IStats {

                        /** Stats userUplink */
                        userUplink?: (boolean|null);

                        /** Stats userDownlink */
                        userDownlink?: (boolean|null);
                    }

                    /** Represents a Stats. */
                    class Stats implements IStats {

                        /**
                         * Constructs a new Stats.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.policy.Policy.IStats);

                        /** Stats userUplink. */
                        public userUplink: boolean;

                        /** Stats userDownlink. */
                        public userDownlink: boolean;

                        /**
                         * Creates a new Stats instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Stats instance
                         */
                        public static create(properties?: v2ray.core.app.policy.Policy.IStats): v2ray.core.app.policy.Policy.Stats;

                        /**
                         * Encodes the specified Stats message. Does not implicitly {@link v2ray.core.app.policy.Policy.Stats.verify|verify} messages.
                         * @param message Stats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.policy.Policy.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Stats message, length delimited. Does not implicitly {@link v2ray.core.app.policy.Policy.Stats.verify|verify} messages.
                         * @param message Stats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.policy.Policy.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Stats message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Stats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.policy.Policy.Stats;

                        /**
                         * Decodes a Stats message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Stats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.policy.Policy.Stats;

                        /**
                         * Verifies a Stats message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Stats message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Stats
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.policy.Policy.Stats;

                        /**
                         * Creates a plain object from a Stats message. Also converts values to other types if specified.
                         * @param message Stats
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.policy.Policy.Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Stats to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Buffer. */
                    interface IBuffer {

                        /** Buffer connection */
                        connection?: (number|null);
                    }

                    /** Represents a Buffer. */
                    class Buffer implements IBuffer {

                        /**
                         * Constructs a new Buffer.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.policy.Policy.IBuffer);

                        /** Buffer connection. */
                        public connection: number;

                        /**
                         * Creates a new Buffer instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Buffer instance
                         */
                        public static create(properties?: v2ray.core.app.policy.Policy.IBuffer): v2ray.core.app.policy.Policy.Buffer;

                        /**
                         * Encodes the specified Buffer message. Does not implicitly {@link v2ray.core.app.policy.Policy.Buffer.verify|verify} messages.
                         * @param message Buffer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.policy.Policy.IBuffer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Buffer message, length delimited. Does not implicitly {@link v2ray.core.app.policy.Policy.Buffer.verify|verify} messages.
                         * @param message Buffer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.policy.Policy.IBuffer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Buffer message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Buffer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.policy.Policy.Buffer;

                        /**
                         * Decodes a Buffer message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Buffer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.policy.Policy.Buffer;

                        /**
                         * Verifies a Buffer message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Buffer message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Buffer
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.policy.Policy.Buffer;

                        /**
                         * Creates a plain object from a Buffer message. Also converts values to other types if specified.
                         * @param message Buffer
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.policy.Policy.Buffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Buffer to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SystemPolicy. */
                interface ISystemPolicy {

                    /** SystemPolicy stats */
                    stats?: (v2ray.core.app.policy.SystemPolicy.IStats|null);
                }

                /** Represents a SystemPolicy. */
                class SystemPolicy implements ISystemPolicy {

                    /**
                     * Constructs a new SystemPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.policy.ISystemPolicy);

                    /** SystemPolicy stats. */
                    public stats?: (v2ray.core.app.policy.SystemPolicy.IStats|null);

                    /**
                     * Creates a new SystemPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SystemPolicy instance
                     */
                    public static create(properties?: v2ray.core.app.policy.ISystemPolicy): v2ray.core.app.policy.SystemPolicy;

                    /**
                     * Encodes the specified SystemPolicy message. Does not implicitly {@link v2ray.core.app.policy.SystemPolicy.verify|verify} messages.
                     * @param message SystemPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.policy.ISystemPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SystemPolicy message, length delimited. Does not implicitly {@link v2ray.core.app.policy.SystemPolicy.verify|verify} messages.
                     * @param message SystemPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.policy.ISystemPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SystemPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SystemPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.policy.SystemPolicy;

                    /**
                     * Decodes a SystemPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SystemPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.policy.SystemPolicy;

                    /**
                     * Verifies a SystemPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SystemPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SystemPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.policy.SystemPolicy;

                    /**
                     * Creates a plain object from a SystemPolicy message. Also converts values to other types if specified.
                     * @param message SystemPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.policy.SystemPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SystemPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SystemPolicy {

                    /** Properties of a Stats. */
                    interface IStats {

                        /** Stats inboundUplink */
                        inboundUplink?: (boolean|null);

                        /** Stats inboundDownlink */
                        inboundDownlink?: (boolean|null);
                    }

                    /** Represents a Stats. */
                    class Stats implements IStats {

                        /**
                         * Constructs a new Stats.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.policy.SystemPolicy.IStats);

                        /** Stats inboundUplink. */
                        public inboundUplink: boolean;

                        /** Stats inboundDownlink. */
                        public inboundDownlink: boolean;

                        /**
                         * Creates a new Stats instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Stats instance
                         */
                        public static create(properties?: v2ray.core.app.policy.SystemPolicy.IStats): v2ray.core.app.policy.SystemPolicy.Stats;

                        /**
                         * Encodes the specified Stats message. Does not implicitly {@link v2ray.core.app.policy.SystemPolicy.Stats.verify|verify} messages.
                         * @param message Stats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.policy.SystemPolicy.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Stats message, length delimited. Does not implicitly {@link v2ray.core.app.policy.SystemPolicy.Stats.verify|verify} messages.
                         * @param message Stats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.policy.SystemPolicy.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Stats message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Stats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.policy.SystemPolicy.Stats;

                        /**
                         * Decodes a Stats message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Stats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.policy.SystemPolicy.Stats;

                        /**
                         * Verifies a Stats message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Stats message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Stats
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.policy.SystemPolicy.Stats;

                        /**
                         * Creates a plain object from a Stats message. Also converts values to other types if specified.
                         * @param message Stats
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.policy.SystemPolicy.Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Stats to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config level */
                    level?: ({ [k: string]: v2ray.core.app.policy.IPolicy }|null);

                    /** Config system */
                    system?: (v2ray.core.app.policy.ISystemPolicy|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.policy.IConfig);

                    /** Config level. */
                    public level: { [k: string]: v2ray.core.app.policy.IPolicy };

                    /** Config system. */
                    public system?: (v2ray.core.app.policy.ISystemPolicy|null);

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.app.policy.IConfig): v2ray.core.app.policy.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.policy.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.policy.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.policy.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.policy.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.policy.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.policy.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.policy.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.policy.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace proxyman. */
            namespace proxyman {

                /** Namespace command. */
                namespace command {

                    /** Properties of an AddUserOperation. */
                    interface IAddUserOperation {

                        /** AddUserOperation user */
                        user?: (v2ray.core.common.protocol.IUser|null);
                    }

                    /** Represents an AddUserOperation. */
                    class AddUserOperation implements IAddUserOperation {

                        /**
                         * Constructs a new AddUserOperation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IAddUserOperation);

                        /** AddUserOperation user. */
                        public user?: (v2ray.core.common.protocol.IUser|null);

                        /**
                         * Creates a new AddUserOperation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AddUserOperation instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IAddUserOperation): v2ray.core.app.proxyman.command.AddUserOperation;

                        /**
                         * Encodes the specified AddUserOperation message. Does not implicitly {@link v2ray.core.app.proxyman.command.AddUserOperation.verify|verify} messages.
                         * @param message AddUserOperation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IAddUserOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AddUserOperation message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.AddUserOperation.verify|verify} messages.
                         * @param message AddUserOperation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IAddUserOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AddUserOperation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AddUserOperation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.AddUserOperation;

                        /**
                         * Decodes an AddUserOperation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AddUserOperation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.AddUserOperation;

                        /**
                         * Verifies an AddUserOperation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AddUserOperation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AddUserOperation
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.AddUserOperation;

                        /**
                         * Creates a plain object from an AddUserOperation message. Also converts values to other types if specified.
                         * @param message AddUserOperation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.AddUserOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AddUserOperation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RemoveUserOperation. */
                    interface IRemoveUserOperation {

                        /** RemoveUserOperation email */
                        email?: (string|null);
                    }

                    /** Represents a RemoveUserOperation. */
                    class RemoveUserOperation implements IRemoveUserOperation {

                        /**
                         * Constructs a new RemoveUserOperation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IRemoveUserOperation);

                        /** RemoveUserOperation email. */
                        public email: string;

                        /**
                         * Creates a new RemoveUserOperation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RemoveUserOperation instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IRemoveUserOperation): v2ray.core.app.proxyman.command.RemoveUserOperation;

                        /**
                         * Encodes the specified RemoveUserOperation message. Does not implicitly {@link v2ray.core.app.proxyman.command.RemoveUserOperation.verify|verify} messages.
                         * @param message RemoveUserOperation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IRemoveUserOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RemoveUserOperation message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.RemoveUserOperation.verify|verify} messages.
                         * @param message RemoveUserOperation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IRemoveUserOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RemoveUserOperation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RemoveUserOperation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.RemoveUserOperation;

                        /**
                         * Decodes a RemoveUserOperation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RemoveUserOperation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.RemoveUserOperation;

                        /**
                         * Verifies a RemoveUserOperation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RemoveUserOperation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RemoveUserOperation
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.RemoveUserOperation;

                        /**
                         * Creates a plain object from a RemoveUserOperation message. Also converts values to other types if specified.
                         * @param message RemoveUserOperation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.RemoveUserOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RemoveUserOperation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AddInboundRequest. */
                    interface IAddInboundRequest {

                        /** AddInboundRequest inbound */
                        inbound?: (v2ray.core.IInboundHandlerConfig|null);
                    }

                    /** Represents an AddInboundRequest. */
                    class AddInboundRequest implements IAddInboundRequest {

                        /**
                         * Constructs a new AddInboundRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IAddInboundRequest);

                        /** AddInboundRequest inbound. */
                        public inbound?: (v2ray.core.IInboundHandlerConfig|null);

                        /**
                         * Creates a new AddInboundRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AddInboundRequest instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IAddInboundRequest): v2ray.core.app.proxyman.command.AddInboundRequest;

                        /**
                         * Encodes the specified AddInboundRequest message. Does not implicitly {@link v2ray.core.app.proxyman.command.AddInboundRequest.verify|verify} messages.
                         * @param message AddInboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IAddInboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AddInboundRequest message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.AddInboundRequest.verify|verify} messages.
                         * @param message AddInboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IAddInboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AddInboundRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AddInboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.AddInboundRequest;

                        /**
                         * Decodes an AddInboundRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AddInboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.AddInboundRequest;

                        /**
                         * Verifies an AddInboundRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AddInboundRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AddInboundRequest
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.AddInboundRequest;

                        /**
                         * Creates a plain object from an AddInboundRequest message. Also converts values to other types if specified.
                         * @param message AddInboundRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.AddInboundRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AddInboundRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AddInboundResponse. */
                    interface IAddInboundResponse {
                    }

                    /** Represents an AddInboundResponse. */
                    class AddInboundResponse implements IAddInboundResponse {

                        /**
                         * Constructs a new AddInboundResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IAddInboundResponse);

                        /**
                         * Creates a new AddInboundResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AddInboundResponse instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IAddInboundResponse): v2ray.core.app.proxyman.command.AddInboundResponse;

                        /**
                         * Encodes the specified AddInboundResponse message. Does not implicitly {@link v2ray.core.app.proxyman.command.AddInboundResponse.verify|verify} messages.
                         * @param message AddInboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IAddInboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AddInboundResponse message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.AddInboundResponse.verify|verify} messages.
                         * @param message AddInboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IAddInboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AddInboundResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AddInboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.AddInboundResponse;

                        /**
                         * Decodes an AddInboundResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AddInboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.AddInboundResponse;

                        /**
                         * Verifies an AddInboundResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AddInboundResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AddInboundResponse
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.AddInboundResponse;

                        /**
                         * Creates a plain object from an AddInboundResponse message. Also converts values to other types if specified.
                         * @param message AddInboundResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.AddInboundResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AddInboundResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RemoveInboundRequest. */
                    interface IRemoveInboundRequest {

                        /** RemoveInboundRequest tag */
                        tag?: (string|null);
                    }

                    /** Represents a RemoveInboundRequest. */
                    class RemoveInboundRequest implements IRemoveInboundRequest {

                        /**
                         * Constructs a new RemoveInboundRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IRemoveInboundRequest);

                        /** RemoveInboundRequest tag. */
                        public tag: string;

                        /**
                         * Creates a new RemoveInboundRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RemoveInboundRequest instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IRemoveInboundRequest): v2ray.core.app.proxyman.command.RemoveInboundRequest;

                        /**
                         * Encodes the specified RemoveInboundRequest message. Does not implicitly {@link v2ray.core.app.proxyman.command.RemoveInboundRequest.verify|verify} messages.
                         * @param message RemoveInboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IRemoveInboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RemoveInboundRequest message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.RemoveInboundRequest.verify|verify} messages.
                         * @param message RemoveInboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IRemoveInboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RemoveInboundRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RemoveInboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.RemoveInboundRequest;

                        /**
                         * Decodes a RemoveInboundRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RemoveInboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.RemoveInboundRequest;

                        /**
                         * Verifies a RemoveInboundRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RemoveInboundRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RemoveInboundRequest
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.RemoveInboundRequest;

                        /**
                         * Creates a plain object from a RemoveInboundRequest message. Also converts values to other types if specified.
                         * @param message RemoveInboundRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.RemoveInboundRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RemoveInboundRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RemoveInboundResponse. */
                    interface IRemoveInboundResponse {
                    }

                    /** Represents a RemoveInboundResponse. */
                    class RemoveInboundResponse implements IRemoveInboundResponse {

                        /**
                         * Constructs a new RemoveInboundResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IRemoveInboundResponse);

                        /**
                         * Creates a new RemoveInboundResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RemoveInboundResponse instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IRemoveInboundResponse): v2ray.core.app.proxyman.command.RemoveInboundResponse;

                        /**
                         * Encodes the specified RemoveInboundResponse message. Does not implicitly {@link v2ray.core.app.proxyman.command.RemoveInboundResponse.verify|verify} messages.
                         * @param message RemoveInboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IRemoveInboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RemoveInboundResponse message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.RemoveInboundResponse.verify|verify} messages.
                         * @param message RemoveInboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IRemoveInboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RemoveInboundResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RemoveInboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.RemoveInboundResponse;

                        /**
                         * Decodes a RemoveInboundResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RemoveInboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.RemoveInboundResponse;

                        /**
                         * Verifies a RemoveInboundResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RemoveInboundResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RemoveInboundResponse
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.RemoveInboundResponse;

                        /**
                         * Creates a plain object from a RemoveInboundResponse message. Also converts values to other types if specified.
                         * @param message RemoveInboundResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.RemoveInboundResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RemoveInboundResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AlterInboundRequest. */
                    interface IAlterInboundRequest {

                        /** AlterInboundRequest tag */
                        tag?: (string|null);

                        /** AlterInboundRequest operation */
                        operation?: (v2ray.core.common.serial.ITypedMessage|null);
                    }

                    /** Represents an AlterInboundRequest. */
                    class AlterInboundRequest implements IAlterInboundRequest {

                        /**
                         * Constructs a new AlterInboundRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IAlterInboundRequest);

                        /** AlterInboundRequest tag. */
                        public tag: string;

                        /** AlterInboundRequest operation. */
                        public operation?: (v2ray.core.common.serial.ITypedMessage|null);

                        /**
                         * Creates a new AlterInboundRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AlterInboundRequest instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IAlterInboundRequest): v2ray.core.app.proxyman.command.AlterInboundRequest;

                        /**
                         * Encodes the specified AlterInboundRequest message. Does not implicitly {@link v2ray.core.app.proxyman.command.AlterInboundRequest.verify|verify} messages.
                         * @param message AlterInboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IAlterInboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AlterInboundRequest message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.AlterInboundRequest.verify|verify} messages.
                         * @param message AlterInboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IAlterInboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AlterInboundRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AlterInboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.AlterInboundRequest;

                        /**
                         * Decodes an AlterInboundRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AlterInboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.AlterInboundRequest;

                        /**
                         * Verifies an AlterInboundRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AlterInboundRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AlterInboundRequest
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.AlterInboundRequest;

                        /**
                         * Creates a plain object from an AlterInboundRequest message. Also converts values to other types if specified.
                         * @param message AlterInboundRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.AlterInboundRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AlterInboundRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AlterInboundResponse. */
                    interface IAlterInboundResponse {
                    }

                    /** Represents an AlterInboundResponse. */
                    class AlterInboundResponse implements IAlterInboundResponse {

                        /**
                         * Constructs a new AlterInboundResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IAlterInboundResponse);

                        /**
                         * Creates a new AlterInboundResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AlterInboundResponse instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IAlterInboundResponse): v2ray.core.app.proxyman.command.AlterInboundResponse;

                        /**
                         * Encodes the specified AlterInboundResponse message. Does not implicitly {@link v2ray.core.app.proxyman.command.AlterInboundResponse.verify|verify} messages.
                         * @param message AlterInboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IAlterInboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AlterInboundResponse message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.AlterInboundResponse.verify|verify} messages.
                         * @param message AlterInboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IAlterInboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AlterInboundResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AlterInboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.AlterInboundResponse;

                        /**
                         * Decodes an AlterInboundResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AlterInboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.AlterInboundResponse;

                        /**
                         * Verifies an AlterInboundResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AlterInboundResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AlterInboundResponse
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.AlterInboundResponse;

                        /**
                         * Creates a plain object from an AlterInboundResponse message. Also converts values to other types if specified.
                         * @param message AlterInboundResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.AlterInboundResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AlterInboundResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AddOutboundRequest. */
                    interface IAddOutboundRequest {

                        /** AddOutboundRequest outbound */
                        outbound?: (v2ray.core.IOutboundHandlerConfig|null);
                    }

                    /** Represents an AddOutboundRequest. */
                    class AddOutboundRequest implements IAddOutboundRequest {

                        /**
                         * Constructs a new AddOutboundRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IAddOutboundRequest);

                        /** AddOutboundRequest outbound. */
                        public outbound?: (v2ray.core.IOutboundHandlerConfig|null);

                        /**
                         * Creates a new AddOutboundRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AddOutboundRequest instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IAddOutboundRequest): v2ray.core.app.proxyman.command.AddOutboundRequest;

                        /**
                         * Encodes the specified AddOutboundRequest message. Does not implicitly {@link v2ray.core.app.proxyman.command.AddOutboundRequest.verify|verify} messages.
                         * @param message AddOutboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IAddOutboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AddOutboundRequest message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.AddOutboundRequest.verify|verify} messages.
                         * @param message AddOutboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IAddOutboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AddOutboundRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AddOutboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.AddOutboundRequest;

                        /**
                         * Decodes an AddOutboundRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AddOutboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.AddOutboundRequest;

                        /**
                         * Verifies an AddOutboundRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AddOutboundRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AddOutboundRequest
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.AddOutboundRequest;

                        /**
                         * Creates a plain object from an AddOutboundRequest message. Also converts values to other types if specified.
                         * @param message AddOutboundRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.AddOutboundRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AddOutboundRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AddOutboundResponse. */
                    interface IAddOutboundResponse {
                    }

                    /** Represents an AddOutboundResponse. */
                    class AddOutboundResponse implements IAddOutboundResponse {

                        /**
                         * Constructs a new AddOutboundResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IAddOutboundResponse);

                        /**
                         * Creates a new AddOutboundResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AddOutboundResponse instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IAddOutboundResponse): v2ray.core.app.proxyman.command.AddOutboundResponse;

                        /**
                         * Encodes the specified AddOutboundResponse message. Does not implicitly {@link v2ray.core.app.proxyman.command.AddOutboundResponse.verify|verify} messages.
                         * @param message AddOutboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IAddOutboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AddOutboundResponse message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.AddOutboundResponse.verify|verify} messages.
                         * @param message AddOutboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IAddOutboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AddOutboundResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AddOutboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.AddOutboundResponse;

                        /**
                         * Decodes an AddOutboundResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AddOutboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.AddOutboundResponse;

                        /**
                         * Verifies an AddOutboundResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AddOutboundResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AddOutboundResponse
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.AddOutboundResponse;

                        /**
                         * Creates a plain object from an AddOutboundResponse message. Also converts values to other types if specified.
                         * @param message AddOutboundResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.AddOutboundResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AddOutboundResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RemoveOutboundRequest. */
                    interface IRemoveOutboundRequest {

                        /** RemoveOutboundRequest tag */
                        tag?: (string|null);
                    }

                    /** Represents a RemoveOutboundRequest. */
                    class RemoveOutboundRequest implements IRemoveOutboundRequest {

                        /**
                         * Constructs a new RemoveOutboundRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IRemoveOutboundRequest);

                        /** RemoveOutboundRequest tag. */
                        public tag: string;

                        /**
                         * Creates a new RemoveOutboundRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RemoveOutboundRequest instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IRemoveOutboundRequest): v2ray.core.app.proxyman.command.RemoveOutboundRequest;

                        /**
                         * Encodes the specified RemoveOutboundRequest message. Does not implicitly {@link v2ray.core.app.proxyman.command.RemoveOutboundRequest.verify|verify} messages.
                         * @param message RemoveOutboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IRemoveOutboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RemoveOutboundRequest message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.RemoveOutboundRequest.verify|verify} messages.
                         * @param message RemoveOutboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IRemoveOutboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RemoveOutboundRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RemoveOutboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.RemoveOutboundRequest;

                        /**
                         * Decodes a RemoveOutboundRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RemoveOutboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.RemoveOutboundRequest;

                        /**
                         * Verifies a RemoveOutboundRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RemoveOutboundRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RemoveOutboundRequest
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.RemoveOutboundRequest;

                        /**
                         * Creates a plain object from a RemoveOutboundRequest message. Also converts values to other types if specified.
                         * @param message RemoveOutboundRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.RemoveOutboundRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RemoveOutboundRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RemoveOutboundResponse. */
                    interface IRemoveOutboundResponse {
                    }

                    /** Represents a RemoveOutboundResponse. */
                    class RemoveOutboundResponse implements IRemoveOutboundResponse {

                        /**
                         * Constructs a new RemoveOutboundResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IRemoveOutboundResponse);

                        /**
                         * Creates a new RemoveOutboundResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RemoveOutboundResponse instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IRemoveOutboundResponse): v2ray.core.app.proxyman.command.RemoveOutboundResponse;

                        /**
                         * Encodes the specified RemoveOutboundResponse message. Does not implicitly {@link v2ray.core.app.proxyman.command.RemoveOutboundResponse.verify|verify} messages.
                         * @param message RemoveOutboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IRemoveOutboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RemoveOutboundResponse message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.RemoveOutboundResponse.verify|verify} messages.
                         * @param message RemoveOutboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IRemoveOutboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RemoveOutboundResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RemoveOutboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.RemoveOutboundResponse;

                        /**
                         * Decodes a RemoveOutboundResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RemoveOutboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.RemoveOutboundResponse;

                        /**
                         * Verifies a RemoveOutboundResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RemoveOutboundResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RemoveOutboundResponse
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.RemoveOutboundResponse;

                        /**
                         * Creates a plain object from a RemoveOutboundResponse message. Also converts values to other types if specified.
                         * @param message RemoveOutboundResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.RemoveOutboundResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RemoveOutboundResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AlterOutboundRequest. */
                    interface IAlterOutboundRequest {

                        /** AlterOutboundRequest tag */
                        tag?: (string|null);

                        /** AlterOutboundRequest operation */
                        operation?: (v2ray.core.common.serial.ITypedMessage|null);
                    }

                    /** Represents an AlterOutboundRequest. */
                    class AlterOutboundRequest implements IAlterOutboundRequest {

                        /**
                         * Constructs a new AlterOutboundRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IAlterOutboundRequest);

                        /** AlterOutboundRequest tag. */
                        public tag: string;

                        /** AlterOutboundRequest operation. */
                        public operation?: (v2ray.core.common.serial.ITypedMessage|null);

                        /**
                         * Creates a new AlterOutboundRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AlterOutboundRequest instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IAlterOutboundRequest): v2ray.core.app.proxyman.command.AlterOutboundRequest;

                        /**
                         * Encodes the specified AlterOutboundRequest message. Does not implicitly {@link v2ray.core.app.proxyman.command.AlterOutboundRequest.verify|verify} messages.
                         * @param message AlterOutboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IAlterOutboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AlterOutboundRequest message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.AlterOutboundRequest.verify|verify} messages.
                         * @param message AlterOutboundRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IAlterOutboundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AlterOutboundRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AlterOutboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.AlterOutboundRequest;

                        /**
                         * Decodes an AlterOutboundRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AlterOutboundRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.AlterOutboundRequest;

                        /**
                         * Verifies an AlterOutboundRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AlterOutboundRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AlterOutboundRequest
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.AlterOutboundRequest;

                        /**
                         * Creates a plain object from an AlterOutboundRequest message. Also converts values to other types if specified.
                         * @param message AlterOutboundRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.AlterOutboundRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AlterOutboundRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AlterOutboundResponse. */
                    interface IAlterOutboundResponse {
                    }

                    /** Represents an AlterOutboundResponse. */
                    class AlterOutboundResponse implements IAlterOutboundResponse {

                        /**
                         * Constructs a new AlterOutboundResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IAlterOutboundResponse);

                        /**
                         * Creates a new AlterOutboundResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AlterOutboundResponse instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IAlterOutboundResponse): v2ray.core.app.proxyman.command.AlterOutboundResponse;

                        /**
                         * Encodes the specified AlterOutboundResponse message. Does not implicitly {@link v2ray.core.app.proxyman.command.AlterOutboundResponse.verify|verify} messages.
                         * @param message AlterOutboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IAlterOutboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AlterOutboundResponse message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.AlterOutboundResponse.verify|verify} messages.
                         * @param message AlterOutboundResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IAlterOutboundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AlterOutboundResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AlterOutboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.AlterOutboundResponse;

                        /**
                         * Decodes an AlterOutboundResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AlterOutboundResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.AlterOutboundResponse;

                        /**
                         * Verifies an AlterOutboundResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AlterOutboundResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AlterOutboundResponse
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.AlterOutboundResponse;

                        /**
                         * Creates a plain object from an AlterOutboundResponse message. Also converts values to other types if specified.
                         * @param message AlterOutboundResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.AlterOutboundResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AlterOutboundResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Represents a HandlerService */
                    class HandlerService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new HandlerService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new HandlerService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HandlerService;

                        /**
                         * Calls AddInbound.
                         * @param request AddInboundRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and AddInboundResponse
                         */
                        public addInbound(request: v2ray.core.app.proxyman.command.IAddInboundRequest, callback: v2ray.core.app.proxyman.command.HandlerService.AddInboundCallback): void;

                        /**
                         * Calls AddInbound.
                         * @param request AddInboundRequest message or plain object
                         * @returns Promise
                         */
                        public addInbound(request: v2ray.core.app.proxyman.command.IAddInboundRequest): Promise<v2ray.core.app.proxyman.command.AddInboundResponse>;

                        /**
                         * Calls RemoveInbound.
                         * @param request RemoveInboundRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and RemoveInboundResponse
                         */
                        public removeInbound(request: v2ray.core.app.proxyman.command.IRemoveInboundRequest, callback: v2ray.core.app.proxyman.command.HandlerService.RemoveInboundCallback): void;

                        /**
                         * Calls RemoveInbound.
                         * @param request RemoveInboundRequest message or plain object
                         * @returns Promise
                         */
                        public removeInbound(request: v2ray.core.app.proxyman.command.IRemoveInboundRequest): Promise<v2ray.core.app.proxyman.command.RemoveInboundResponse>;

                        /**
                         * Calls AlterInbound.
                         * @param request AlterInboundRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and AlterInboundResponse
                         */
                        public alterInbound(request: v2ray.core.app.proxyman.command.IAlterInboundRequest, callback: v2ray.core.app.proxyman.command.HandlerService.AlterInboundCallback): void;

                        /**
                         * Calls AlterInbound.
                         * @param request AlterInboundRequest message or plain object
                         * @returns Promise
                         */
                        public alterInbound(request: v2ray.core.app.proxyman.command.IAlterInboundRequest): Promise<v2ray.core.app.proxyman.command.AlterInboundResponse>;

                        /**
                         * Calls AddOutbound.
                         * @param request AddOutboundRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and AddOutboundResponse
                         */
                        public addOutbound(request: v2ray.core.app.proxyman.command.IAddOutboundRequest, callback: v2ray.core.app.proxyman.command.HandlerService.AddOutboundCallback): void;

                        /**
                         * Calls AddOutbound.
                         * @param request AddOutboundRequest message or plain object
                         * @returns Promise
                         */
                        public addOutbound(request: v2ray.core.app.proxyman.command.IAddOutboundRequest): Promise<v2ray.core.app.proxyman.command.AddOutboundResponse>;

                        /**
                         * Calls RemoveOutbound.
                         * @param request RemoveOutboundRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and RemoveOutboundResponse
                         */
                        public removeOutbound(request: v2ray.core.app.proxyman.command.IRemoveOutboundRequest, callback: v2ray.core.app.proxyman.command.HandlerService.RemoveOutboundCallback): void;

                        /**
                         * Calls RemoveOutbound.
                         * @param request RemoveOutboundRequest message or plain object
                         * @returns Promise
                         */
                        public removeOutbound(request: v2ray.core.app.proxyman.command.IRemoveOutboundRequest): Promise<v2ray.core.app.proxyman.command.RemoveOutboundResponse>;

                        /**
                         * Calls AlterOutbound.
                         * @param request AlterOutboundRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and AlterOutboundResponse
                         */
                        public alterOutbound(request: v2ray.core.app.proxyman.command.IAlterOutboundRequest, callback: v2ray.core.app.proxyman.command.HandlerService.AlterOutboundCallback): void;

                        /**
                         * Calls AlterOutbound.
                         * @param request AlterOutboundRequest message or plain object
                         * @returns Promise
                         */
                        public alterOutbound(request: v2ray.core.app.proxyman.command.IAlterOutboundRequest): Promise<v2ray.core.app.proxyman.command.AlterOutboundResponse>;
                    }

                    namespace HandlerService {

                        /**
                         * Callback as used by {@link v2ray.core.app.proxyman.command.HandlerService#addInbound}.
                         * @param error Error, if any
                         * @param [response] AddInboundResponse
                         */
                        type AddInboundCallback = (error: (Error|null), response?: v2ray.core.app.proxyman.command.AddInboundResponse) => void;

                        /**
                         * Callback as used by {@link v2ray.core.app.proxyman.command.HandlerService#removeInbound}.
                         * @param error Error, if any
                         * @param [response] RemoveInboundResponse
                         */
                        type RemoveInboundCallback = (error: (Error|null), response?: v2ray.core.app.proxyman.command.RemoveInboundResponse) => void;

                        /**
                         * Callback as used by {@link v2ray.core.app.proxyman.command.HandlerService#alterInbound}.
                         * @param error Error, if any
                         * @param [response] AlterInboundResponse
                         */
                        type AlterInboundCallback = (error: (Error|null), response?: v2ray.core.app.proxyman.command.AlterInboundResponse) => void;

                        /**
                         * Callback as used by {@link v2ray.core.app.proxyman.command.HandlerService#addOutbound}.
                         * @param error Error, if any
                         * @param [response] AddOutboundResponse
                         */
                        type AddOutboundCallback = (error: (Error|null), response?: v2ray.core.app.proxyman.command.AddOutboundResponse) => void;

                        /**
                         * Callback as used by {@link v2ray.core.app.proxyman.command.HandlerService#removeOutbound}.
                         * @param error Error, if any
                         * @param [response] RemoveOutboundResponse
                         */
                        type RemoveOutboundCallback = (error: (Error|null), response?: v2ray.core.app.proxyman.command.RemoveOutboundResponse) => void;

                        /**
                         * Callback as used by {@link v2ray.core.app.proxyman.command.HandlerService#alterOutbound}.
                         * @param error Error, if any
                         * @param [response] AlterOutboundResponse
                         */
                        type AlterOutboundCallback = (error: (Error|null), response?: v2ray.core.app.proxyman.command.AlterOutboundResponse) => void;
                    }

                    /** Properties of a Config. */
                    interface IConfig {
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.command.IConfig);

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.command.IConfig): v2ray.core.app.proxyman.command.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.proxyman.command.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.command.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.command.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.command.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.command.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.command.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.command.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.command.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an InboundConfig. */
                interface IInboundConfig {
                }

                /** Represents an InboundConfig. */
                class InboundConfig implements IInboundConfig {

                    /**
                     * Constructs a new InboundConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.proxyman.IInboundConfig);

                    /**
                     * Creates a new InboundConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InboundConfig instance
                     */
                    public static create(properties?: v2ray.core.app.proxyman.IInboundConfig): v2ray.core.app.proxyman.InboundConfig;

                    /**
                     * Encodes the specified InboundConfig message. Does not implicitly {@link v2ray.core.app.proxyman.InboundConfig.verify|verify} messages.
                     * @param message InboundConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.proxyman.IInboundConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InboundConfig message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.InboundConfig.verify|verify} messages.
                     * @param message InboundConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.proxyman.IInboundConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InboundConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InboundConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.InboundConfig;

                    /**
                     * Decodes an InboundConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InboundConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.InboundConfig;

                    /**
                     * Verifies an InboundConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InboundConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InboundConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.InboundConfig;

                    /**
                     * Creates a plain object from an InboundConfig message. Also converts values to other types if specified.
                     * @param message InboundConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.proxyman.InboundConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InboundConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AllocationStrategy. */
                interface IAllocationStrategy {

                    /** AllocationStrategy type */
                    type?: (v2ray.core.app.proxyman.AllocationStrategy.Type|null);

                    /** AllocationStrategy concurrency */
                    concurrency?: (v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyConcurrency|null);

                    /** AllocationStrategy refresh */
                    refresh?: (v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyRefresh|null);
                }

                /** Represents an AllocationStrategy. */
                class AllocationStrategy implements IAllocationStrategy {

                    /**
                     * Constructs a new AllocationStrategy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.proxyman.IAllocationStrategy);

                    /** AllocationStrategy type. */
                    public type: v2ray.core.app.proxyman.AllocationStrategy.Type;

                    /** AllocationStrategy concurrency. */
                    public concurrency?: (v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyConcurrency|null);

                    /** AllocationStrategy refresh. */
                    public refresh?: (v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyRefresh|null);

                    /**
                     * Creates a new AllocationStrategy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AllocationStrategy instance
                     */
                    public static create(properties?: v2ray.core.app.proxyman.IAllocationStrategy): v2ray.core.app.proxyman.AllocationStrategy;

                    /**
                     * Encodes the specified AllocationStrategy message. Does not implicitly {@link v2ray.core.app.proxyman.AllocationStrategy.verify|verify} messages.
                     * @param message AllocationStrategy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.proxyman.IAllocationStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AllocationStrategy message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.AllocationStrategy.verify|verify} messages.
                     * @param message AllocationStrategy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.proxyman.IAllocationStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AllocationStrategy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AllocationStrategy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.AllocationStrategy;

                    /**
                     * Decodes an AllocationStrategy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AllocationStrategy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.AllocationStrategy;

                    /**
                     * Verifies an AllocationStrategy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AllocationStrategy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AllocationStrategy
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.AllocationStrategy;

                    /**
                     * Creates a plain object from an AllocationStrategy message. Also converts values to other types if specified.
                     * @param message AllocationStrategy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.proxyman.AllocationStrategy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AllocationStrategy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AllocationStrategy {

                    /** Type enum. */
                    enum Type {
                        Always = 0,
                        Random = 1,
                        External = 2
                    }

                    /** Properties of an AllocationStrategyConcurrency. */
                    interface IAllocationStrategyConcurrency {

                        /** AllocationStrategyConcurrency value */
                        value?: (number|null);
                    }

                    /** Represents an AllocationStrategyConcurrency. */
                    class AllocationStrategyConcurrency implements IAllocationStrategyConcurrency {

                        /**
                         * Constructs a new AllocationStrategyConcurrency.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyConcurrency);

                        /** AllocationStrategyConcurrency value. */
                        public value: number;

                        /**
                         * Creates a new AllocationStrategyConcurrency instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AllocationStrategyConcurrency instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyConcurrency): v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyConcurrency;

                        /**
                         * Encodes the specified AllocationStrategyConcurrency message. Does not implicitly {@link v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyConcurrency.verify|verify} messages.
                         * @param message AllocationStrategyConcurrency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyConcurrency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AllocationStrategyConcurrency message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyConcurrency.verify|verify} messages.
                         * @param message AllocationStrategyConcurrency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyConcurrency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AllocationStrategyConcurrency message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AllocationStrategyConcurrency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyConcurrency;

                        /**
                         * Decodes an AllocationStrategyConcurrency message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AllocationStrategyConcurrency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyConcurrency;

                        /**
                         * Verifies an AllocationStrategyConcurrency message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AllocationStrategyConcurrency message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AllocationStrategyConcurrency
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyConcurrency;

                        /**
                         * Creates a plain object from an AllocationStrategyConcurrency message. Also converts values to other types if specified.
                         * @param message AllocationStrategyConcurrency
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyConcurrency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AllocationStrategyConcurrency to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AllocationStrategyRefresh. */
                    interface IAllocationStrategyRefresh {

                        /** AllocationStrategyRefresh value */
                        value?: (number|null);
                    }

                    /** Represents an AllocationStrategyRefresh. */
                    class AllocationStrategyRefresh implements IAllocationStrategyRefresh {

                        /**
                         * Constructs a new AllocationStrategyRefresh.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyRefresh);

                        /** AllocationStrategyRefresh value. */
                        public value: number;

                        /**
                         * Creates a new AllocationStrategyRefresh instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AllocationStrategyRefresh instance
                         */
                        public static create(properties?: v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyRefresh): v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyRefresh;

                        /**
                         * Encodes the specified AllocationStrategyRefresh message. Does not implicitly {@link v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyRefresh.verify|verify} messages.
                         * @param message AllocationStrategyRefresh message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyRefresh, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AllocationStrategyRefresh message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyRefresh.verify|verify} messages.
                         * @param message AllocationStrategyRefresh message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.proxyman.AllocationStrategy.IAllocationStrategyRefresh, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AllocationStrategyRefresh message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AllocationStrategyRefresh
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyRefresh;

                        /**
                         * Decodes an AllocationStrategyRefresh message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AllocationStrategyRefresh
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyRefresh;

                        /**
                         * Verifies an AllocationStrategyRefresh message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AllocationStrategyRefresh message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AllocationStrategyRefresh
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyRefresh;

                        /**
                         * Creates a plain object from an AllocationStrategyRefresh message. Also converts values to other types if specified.
                         * @param message AllocationStrategyRefresh
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.proxyman.AllocationStrategy.AllocationStrategyRefresh, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AllocationStrategyRefresh to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** KnownProtocols enum. */
                enum KnownProtocols {
                    HTTP = 0,
                    TLS = 1
                }

                /** Properties of a SniffingConfig. */
                interface ISniffingConfig {

                    /** SniffingConfig enabled */
                    enabled?: (boolean|null);

                    /** SniffingConfig destinationOverride */
                    destinationOverride?: (string[]|null);
                }

                /** Represents a SniffingConfig. */
                class SniffingConfig implements ISniffingConfig {

                    /**
                     * Constructs a new SniffingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.proxyman.ISniffingConfig);

                    /** SniffingConfig enabled. */
                    public enabled: boolean;

                    /** SniffingConfig destinationOverride. */
                    public destinationOverride: string[];

                    /**
                     * Creates a new SniffingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SniffingConfig instance
                     */
                    public static create(properties?: v2ray.core.app.proxyman.ISniffingConfig): v2ray.core.app.proxyman.SniffingConfig;

                    /**
                     * Encodes the specified SniffingConfig message. Does not implicitly {@link v2ray.core.app.proxyman.SniffingConfig.verify|verify} messages.
                     * @param message SniffingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.proxyman.ISniffingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SniffingConfig message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.SniffingConfig.verify|verify} messages.
                     * @param message SniffingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.proxyman.ISniffingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SniffingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SniffingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.SniffingConfig;

                    /**
                     * Decodes a SniffingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SniffingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.SniffingConfig;

                    /**
                     * Verifies a SniffingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SniffingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SniffingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.SniffingConfig;

                    /**
                     * Creates a plain object from a SniffingConfig message. Also converts values to other types if specified.
                     * @param message SniffingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.proxyman.SniffingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SniffingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReceiverConfig. */
                interface IReceiverConfig {

                    /** ReceiverConfig portRange */
                    portRange?: (v2ray.core.common.net.IPortRange|null);

                    /** ReceiverConfig listen */
                    listen?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** ReceiverConfig allocationStrategy */
                    allocationStrategy?: (v2ray.core.app.proxyman.IAllocationStrategy|null);

                    /** ReceiverConfig streamSettings */
                    streamSettings?: (v2ray.core.transport.internet.IStreamConfig|null);

                    /** ReceiverConfig receiveOriginalDestination */
                    receiveOriginalDestination?: (boolean|null);

                    /** ReceiverConfig domainOverride */
                    domainOverride?: (v2ray.core.app.proxyman.KnownProtocols[]|null);

                    /** ReceiverConfig sniffingSettings */
                    sniffingSettings?: (v2ray.core.app.proxyman.ISniffingConfig|null);
                }

                /** Represents a ReceiverConfig. */
                class ReceiverConfig implements IReceiverConfig {

                    /**
                     * Constructs a new ReceiverConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.proxyman.IReceiverConfig);

                    /** ReceiverConfig portRange. */
                    public portRange?: (v2ray.core.common.net.IPortRange|null);

                    /** ReceiverConfig listen. */
                    public listen?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** ReceiverConfig allocationStrategy. */
                    public allocationStrategy?: (v2ray.core.app.proxyman.IAllocationStrategy|null);

                    /** ReceiverConfig streamSettings. */
                    public streamSettings?: (v2ray.core.transport.internet.IStreamConfig|null);

                    /** ReceiverConfig receiveOriginalDestination. */
                    public receiveOriginalDestination: boolean;

                    /** ReceiverConfig domainOverride. */
                    public domainOverride: v2ray.core.app.proxyman.KnownProtocols[];

                    /** ReceiverConfig sniffingSettings. */
                    public sniffingSettings?: (v2ray.core.app.proxyman.ISniffingConfig|null);

                    /**
                     * Creates a new ReceiverConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReceiverConfig instance
                     */
                    public static create(properties?: v2ray.core.app.proxyman.IReceiverConfig): v2ray.core.app.proxyman.ReceiverConfig;

                    /**
                     * Encodes the specified ReceiverConfig message. Does not implicitly {@link v2ray.core.app.proxyman.ReceiverConfig.verify|verify} messages.
                     * @param message ReceiverConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.proxyman.IReceiverConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReceiverConfig message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.ReceiverConfig.verify|verify} messages.
                     * @param message ReceiverConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.proxyman.IReceiverConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReceiverConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReceiverConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.ReceiverConfig;

                    /**
                     * Decodes a ReceiverConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReceiverConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.ReceiverConfig;

                    /**
                     * Verifies a ReceiverConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReceiverConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReceiverConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.ReceiverConfig;

                    /**
                     * Creates a plain object from a ReceiverConfig message. Also converts values to other types if specified.
                     * @param message ReceiverConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.proxyman.ReceiverConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReceiverConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InboundHandlerConfig. */
                interface IInboundHandlerConfig {

                    /** InboundHandlerConfig tag */
                    tag?: (string|null);

                    /** InboundHandlerConfig receiverSettings */
                    receiverSettings?: (v2ray.core.common.serial.ITypedMessage|null);

                    /** InboundHandlerConfig proxySettings */
                    proxySettings?: (v2ray.core.common.serial.ITypedMessage|null);
                }

                /** Represents an InboundHandlerConfig. */
                class InboundHandlerConfig implements IInboundHandlerConfig {

                    /**
                     * Constructs a new InboundHandlerConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.proxyman.IInboundHandlerConfig);

                    /** InboundHandlerConfig tag. */
                    public tag: string;

                    /** InboundHandlerConfig receiverSettings. */
                    public receiverSettings?: (v2ray.core.common.serial.ITypedMessage|null);

                    /** InboundHandlerConfig proxySettings. */
                    public proxySettings?: (v2ray.core.common.serial.ITypedMessage|null);

                    /**
                     * Creates a new InboundHandlerConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InboundHandlerConfig instance
                     */
                    public static create(properties?: v2ray.core.app.proxyman.IInboundHandlerConfig): v2ray.core.app.proxyman.InboundHandlerConfig;

                    /**
                     * Encodes the specified InboundHandlerConfig message. Does not implicitly {@link v2ray.core.app.proxyman.InboundHandlerConfig.verify|verify} messages.
                     * @param message InboundHandlerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.proxyman.IInboundHandlerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InboundHandlerConfig message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.InboundHandlerConfig.verify|verify} messages.
                     * @param message InboundHandlerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.proxyman.IInboundHandlerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InboundHandlerConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InboundHandlerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.InboundHandlerConfig;

                    /**
                     * Decodes an InboundHandlerConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InboundHandlerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.InboundHandlerConfig;

                    /**
                     * Verifies an InboundHandlerConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InboundHandlerConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InboundHandlerConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.InboundHandlerConfig;

                    /**
                     * Creates a plain object from an InboundHandlerConfig message. Also converts values to other types if specified.
                     * @param message InboundHandlerConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.proxyman.InboundHandlerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InboundHandlerConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OutboundConfig. */
                interface IOutboundConfig {
                }

                /** Represents an OutboundConfig. */
                class OutboundConfig implements IOutboundConfig {

                    /**
                     * Constructs a new OutboundConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.proxyman.IOutboundConfig);

                    /**
                     * Creates a new OutboundConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutboundConfig instance
                     */
                    public static create(properties?: v2ray.core.app.proxyman.IOutboundConfig): v2ray.core.app.proxyman.OutboundConfig;

                    /**
                     * Encodes the specified OutboundConfig message. Does not implicitly {@link v2ray.core.app.proxyman.OutboundConfig.verify|verify} messages.
                     * @param message OutboundConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.proxyman.IOutboundConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutboundConfig message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.OutboundConfig.verify|verify} messages.
                     * @param message OutboundConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.proxyman.IOutboundConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutboundConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutboundConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.OutboundConfig;

                    /**
                     * Decodes an OutboundConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutboundConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.OutboundConfig;

                    /**
                     * Verifies an OutboundConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutboundConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutboundConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.OutboundConfig;

                    /**
                     * Creates a plain object from an OutboundConfig message. Also converts values to other types if specified.
                     * @param message OutboundConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.proxyman.OutboundConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutboundConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SenderConfig. */
                interface ISenderConfig {

                    /** SenderConfig via */
                    via?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** SenderConfig streamSettings */
                    streamSettings?: (v2ray.core.transport.internet.IStreamConfig|null);

                    /** SenderConfig proxySettings */
                    proxySettings?: (v2ray.core.transport.internet.IProxyConfig|null);

                    /** SenderConfig multiplexSettings */
                    multiplexSettings?: (v2ray.core.app.proxyman.IMultiplexingConfig|null);
                }

                /** Represents a SenderConfig. */
                class SenderConfig implements ISenderConfig {

                    /**
                     * Constructs a new SenderConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.proxyman.ISenderConfig);

                    /** SenderConfig via. */
                    public via?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** SenderConfig streamSettings. */
                    public streamSettings?: (v2ray.core.transport.internet.IStreamConfig|null);

                    /** SenderConfig proxySettings. */
                    public proxySettings?: (v2ray.core.transport.internet.IProxyConfig|null);

                    /** SenderConfig multiplexSettings. */
                    public multiplexSettings?: (v2ray.core.app.proxyman.IMultiplexingConfig|null);

                    /**
                     * Creates a new SenderConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SenderConfig instance
                     */
                    public static create(properties?: v2ray.core.app.proxyman.ISenderConfig): v2ray.core.app.proxyman.SenderConfig;

                    /**
                     * Encodes the specified SenderConfig message. Does not implicitly {@link v2ray.core.app.proxyman.SenderConfig.verify|verify} messages.
                     * @param message SenderConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.proxyman.ISenderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SenderConfig message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.SenderConfig.verify|verify} messages.
                     * @param message SenderConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.proxyman.ISenderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SenderConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SenderConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.SenderConfig;

                    /**
                     * Decodes a SenderConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SenderConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.SenderConfig;

                    /**
                     * Verifies a SenderConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SenderConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SenderConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.SenderConfig;

                    /**
                     * Creates a plain object from a SenderConfig message. Also converts values to other types if specified.
                     * @param message SenderConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.proxyman.SenderConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SenderConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MultiplexingConfig. */
                interface IMultiplexingConfig {

                    /** MultiplexingConfig enabled */
                    enabled?: (boolean|null);

                    /** MultiplexingConfig concurrency */
                    concurrency?: (number|null);
                }

                /** Represents a MultiplexingConfig. */
                class MultiplexingConfig implements IMultiplexingConfig {

                    /**
                     * Constructs a new MultiplexingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.proxyman.IMultiplexingConfig);

                    /** MultiplexingConfig enabled. */
                    public enabled: boolean;

                    /** MultiplexingConfig concurrency. */
                    public concurrency: number;

                    /**
                     * Creates a new MultiplexingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MultiplexingConfig instance
                     */
                    public static create(properties?: v2ray.core.app.proxyman.IMultiplexingConfig): v2ray.core.app.proxyman.MultiplexingConfig;

                    /**
                     * Encodes the specified MultiplexingConfig message. Does not implicitly {@link v2ray.core.app.proxyman.MultiplexingConfig.verify|verify} messages.
                     * @param message MultiplexingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.proxyman.IMultiplexingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MultiplexingConfig message, length delimited. Does not implicitly {@link v2ray.core.app.proxyman.MultiplexingConfig.verify|verify} messages.
                     * @param message MultiplexingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.proxyman.IMultiplexingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MultiplexingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MultiplexingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.proxyman.MultiplexingConfig;

                    /**
                     * Decodes a MultiplexingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MultiplexingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.proxyman.MultiplexingConfig;

                    /**
                     * Verifies a MultiplexingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MultiplexingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MultiplexingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.proxyman.MultiplexingConfig;

                    /**
                     * Creates a plain object from a MultiplexingConfig message. Also converts values to other types if specified.
                     * @param message MultiplexingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.proxyman.MultiplexingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MultiplexingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace reverse. */
            namespace reverse {

                /** Properties of a Control. */
                interface IControl {

                    /** Control state */
                    state?: (v2ray.core.app.reverse.Control.State|null);

                    /** Control random */
                    random?: (Uint8Array|null);
                }

                /** Represents a Control. */
                class Control implements IControl {

                    /**
                     * Constructs a new Control.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.reverse.IControl);

                    /** Control state. */
                    public state: v2ray.core.app.reverse.Control.State;

                    /** Control random. */
                    public random: Uint8Array;

                    /**
                     * Creates a new Control instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Control instance
                     */
                    public static create(properties?: v2ray.core.app.reverse.IControl): v2ray.core.app.reverse.Control;

                    /**
                     * Encodes the specified Control message. Does not implicitly {@link v2ray.core.app.reverse.Control.verify|verify} messages.
                     * @param message Control message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.reverse.IControl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Control message, length delimited. Does not implicitly {@link v2ray.core.app.reverse.Control.verify|verify} messages.
                     * @param message Control message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.reverse.IControl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Control message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Control
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.reverse.Control;

                    /**
                     * Decodes a Control message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Control
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.reverse.Control;

                    /**
                     * Verifies a Control message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Control message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Control
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.reverse.Control;

                    /**
                     * Creates a plain object from a Control message. Also converts values to other types if specified.
                     * @param message Control
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.reverse.Control, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Control to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Control {

                    /** State enum. */
                    enum State {
                        ACTIVE = 0,
                        DRAIN = 1
                    }
                }

                /** Properties of a BridgeConfig. */
                interface IBridgeConfig {

                    /** BridgeConfig tag */
                    tag?: (string|null);

                    /** BridgeConfig domain */
                    domain?: (string|null);
                }

                /** Represents a BridgeConfig. */
                class BridgeConfig implements IBridgeConfig {

                    /**
                     * Constructs a new BridgeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.reverse.IBridgeConfig);

                    /** BridgeConfig tag. */
                    public tag: string;

                    /** BridgeConfig domain. */
                    public domain: string;

                    /**
                     * Creates a new BridgeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BridgeConfig instance
                     */
                    public static create(properties?: v2ray.core.app.reverse.IBridgeConfig): v2ray.core.app.reverse.BridgeConfig;

                    /**
                     * Encodes the specified BridgeConfig message. Does not implicitly {@link v2ray.core.app.reverse.BridgeConfig.verify|verify} messages.
                     * @param message BridgeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.reverse.IBridgeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BridgeConfig message, length delimited. Does not implicitly {@link v2ray.core.app.reverse.BridgeConfig.verify|verify} messages.
                     * @param message BridgeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.reverse.IBridgeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BridgeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BridgeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.reverse.BridgeConfig;

                    /**
                     * Decodes a BridgeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BridgeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.reverse.BridgeConfig;

                    /**
                     * Verifies a BridgeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BridgeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BridgeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.reverse.BridgeConfig;

                    /**
                     * Creates a plain object from a BridgeConfig message. Also converts values to other types if specified.
                     * @param message BridgeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.reverse.BridgeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BridgeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PortalConfig. */
                interface IPortalConfig {

                    /** PortalConfig tag */
                    tag?: (string|null);

                    /** PortalConfig domain */
                    domain?: (string|null);
                }

                /** Represents a PortalConfig. */
                class PortalConfig implements IPortalConfig {

                    /**
                     * Constructs a new PortalConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.reverse.IPortalConfig);

                    /** PortalConfig tag. */
                    public tag: string;

                    /** PortalConfig domain. */
                    public domain: string;

                    /**
                     * Creates a new PortalConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PortalConfig instance
                     */
                    public static create(properties?: v2ray.core.app.reverse.IPortalConfig): v2ray.core.app.reverse.PortalConfig;

                    /**
                     * Encodes the specified PortalConfig message. Does not implicitly {@link v2ray.core.app.reverse.PortalConfig.verify|verify} messages.
                     * @param message PortalConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.reverse.IPortalConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PortalConfig message, length delimited. Does not implicitly {@link v2ray.core.app.reverse.PortalConfig.verify|verify} messages.
                     * @param message PortalConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.reverse.IPortalConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PortalConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PortalConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.reverse.PortalConfig;

                    /**
                     * Decodes a PortalConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PortalConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.reverse.PortalConfig;

                    /**
                     * Verifies a PortalConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PortalConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PortalConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.reverse.PortalConfig;

                    /**
                     * Creates a plain object from a PortalConfig message. Also converts values to other types if specified.
                     * @param message PortalConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.reverse.PortalConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PortalConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config bridgeConfig */
                    bridgeConfig?: (v2ray.core.app.reverse.IBridgeConfig[]|null);

                    /** Config portalConfig */
                    portalConfig?: (v2ray.core.app.reverse.IPortalConfig[]|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.reverse.IConfig);

                    /** Config bridgeConfig. */
                    public bridgeConfig: v2ray.core.app.reverse.IBridgeConfig[];

                    /** Config portalConfig. */
                    public portalConfig: v2ray.core.app.reverse.IPortalConfig[];

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.app.reverse.IConfig): v2ray.core.app.reverse.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.reverse.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.reverse.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.reverse.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.reverse.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.reverse.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.reverse.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.reverse.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.reverse.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace router. */
            namespace router {

                /** Properties of a Domain. */
                interface IDomain {

                    /** Domain type */
                    type?: (v2ray.core.app.router.Domain.Type|null);

                    /** Domain value */
                    value?: (string|null);

                    /** Domain attribute */
                    attribute?: (v2ray.core.app.router.Domain.IAttribute[]|null);
                }

                /** Represents a Domain. */
                class Domain implements IDomain {

                    /**
                     * Constructs a new Domain.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.router.IDomain);

                    /** Domain type. */
                    public type: v2ray.core.app.router.Domain.Type;

                    /** Domain value. */
                    public value: string;

                    /** Domain attribute. */
                    public attribute: v2ray.core.app.router.Domain.IAttribute[];

                    /**
                     * Creates a new Domain instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Domain instance
                     */
                    public static create(properties?: v2ray.core.app.router.IDomain): v2ray.core.app.router.Domain;

                    /**
                     * Encodes the specified Domain message. Does not implicitly {@link v2ray.core.app.router.Domain.verify|verify} messages.
                     * @param message Domain message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.router.IDomain, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Domain message, length delimited. Does not implicitly {@link v2ray.core.app.router.Domain.verify|verify} messages.
                     * @param message Domain message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.router.IDomain, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Domain message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Domain
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.router.Domain;

                    /**
                     * Decodes a Domain message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Domain
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.router.Domain;

                    /**
                     * Verifies a Domain message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Domain message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Domain
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.router.Domain;

                    /**
                     * Creates a plain object from a Domain message. Also converts values to other types if specified.
                     * @param message Domain
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.router.Domain, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Domain to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Domain {

                    /** Type enum. */
                    enum Type {
                        Plain = 0,
                        Regex = 1,
                        Domain = 2,
                        Full = 3
                    }

                    /** Properties of an Attribute. */
                    interface IAttribute {

                        /** Attribute key */
                        key?: (string|null);

                        /** Attribute boolValue */
                        boolValue?: (boolean|null);

                        /** Attribute intValue */
                        intValue?: (number|Long|null);
                    }

                    /** Represents an Attribute. */
                    class Attribute implements IAttribute {

                        /**
                         * Constructs a new Attribute.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.router.Domain.IAttribute);

                        /** Attribute key. */
                        public key: string;

                        /** Attribute boolValue. */
                        public boolValue: boolean;

                        /** Attribute intValue. */
                        public intValue: (number|Long);

                        /** Attribute typedValue. */
                        public typedValue?: ("boolValue"|"intValue");

                        /**
                         * Creates a new Attribute instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Attribute instance
                         */
                        public static create(properties?: v2ray.core.app.router.Domain.IAttribute): v2ray.core.app.router.Domain.Attribute;

                        /**
                         * Encodes the specified Attribute message. Does not implicitly {@link v2ray.core.app.router.Domain.Attribute.verify|verify} messages.
                         * @param message Attribute message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.router.Domain.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Attribute message, length delimited. Does not implicitly {@link v2ray.core.app.router.Domain.Attribute.verify|verify} messages.
                         * @param message Attribute message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.router.Domain.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Attribute message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Attribute
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.router.Domain.Attribute;

                        /**
                         * Decodes an Attribute message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Attribute
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.router.Domain.Attribute;

                        /**
                         * Verifies an Attribute message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Attribute message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Attribute
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.router.Domain.Attribute;

                        /**
                         * Creates a plain object from an Attribute message. Also converts values to other types if specified.
                         * @param message Attribute
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.router.Domain.Attribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Attribute to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a CIDR. */
                interface ICIDR {

                    /** CIDR ip */
                    ip?: (Uint8Array|null);

                    /** CIDR prefix */
                    prefix?: (number|null);
                }

                /** Represents a CIDR. */
                class CIDR implements ICIDR {

                    /**
                     * Constructs a new CIDR.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.router.ICIDR);

                    /** CIDR ip. */
                    public ip: Uint8Array;

                    /** CIDR prefix. */
                    public prefix: number;

                    /**
                     * Creates a new CIDR instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CIDR instance
                     */
                    public static create(properties?: v2ray.core.app.router.ICIDR): v2ray.core.app.router.CIDR;

                    /**
                     * Encodes the specified CIDR message. Does not implicitly {@link v2ray.core.app.router.CIDR.verify|verify} messages.
                     * @param message CIDR message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.router.ICIDR, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CIDR message, length delimited. Does not implicitly {@link v2ray.core.app.router.CIDR.verify|verify} messages.
                     * @param message CIDR message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.router.ICIDR, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CIDR message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CIDR
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.router.CIDR;

                    /**
                     * Decodes a CIDR message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CIDR
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.router.CIDR;

                    /**
                     * Verifies a CIDR message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CIDR message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CIDR
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.router.CIDR;

                    /**
                     * Creates a plain object from a CIDR message. Also converts values to other types if specified.
                     * @param message CIDR
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.router.CIDR, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CIDR to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GeoIP. */
                interface IGeoIP {

                    /** GeoIP countryCode */
                    countryCode?: (string|null);

                    /** GeoIP cidr */
                    cidr?: (v2ray.core.app.router.ICIDR[]|null);
                }

                /** Represents a GeoIP. */
                class GeoIP implements IGeoIP {

                    /**
                     * Constructs a new GeoIP.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.router.IGeoIP);

                    /** GeoIP countryCode. */
                    public countryCode: string;

                    /** GeoIP cidr. */
                    public cidr: v2ray.core.app.router.ICIDR[];

                    /**
                     * Creates a new GeoIP instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GeoIP instance
                     */
                    public static create(properties?: v2ray.core.app.router.IGeoIP): v2ray.core.app.router.GeoIP;

                    /**
                     * Encodes the specified GeoIP message. Does not implicitly {@link v2ray.core.app.router.GeoIP.verify|verify} messages.
                     * @param message GeoIP message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.router.IGeoIP, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GeoIP message, length delimited. Does not implicitly {@link v2ray.core.app.router.GeoIP.verify|verify} messages.
                     * @param message GeoIP message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.router.IGeoIP, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GeoIP message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GeoIP
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.router.GeoIP;

                    /**
                     * Decodes a GeoIP message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GeoIP
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.router.GeoIP;

                    /**
                     * Verifies a GeoIP message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GeoIP message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GeoIP
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.router.GeoIP;

                    /**
                     * Creates a plain object from a GeoIP message. Also converts values to other types if specified.
                     * @param message GeoIP
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.router.GeoIP, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GeoIP to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GeoIPList. */
                interface IGeoIPList {

                    /** GeoIPList entry */
                    entry?: (v2ray.core.app.router.IGeoIP[]|null);
                }

                /** Represents a GeoIPList. */
                class GeoIPList implements IGeoIPList {

                    /**
                     * Constructs a new GeoIPList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.router.IGeoIPList);

                    /** GeoIPList entry. */
                    public entry: v2ray.core.app.router.IGeoIP[];

                    /**
                     * Creates a new GeoIPList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GeoIPList instance
                     */
                    public static create(properties?: v2ray.core.app.router.IGeoIPList): v2ray.core.app.router.GeoIPList;

                    /**
                     * Encodes the specified GeoIPList message. Does not implicitly {@link v2ray.core.app.router.GeoIPList.verify|verify} messages.
                     * @param message GeoIPList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.router.IGeoIPList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GeoIPList message, length delimited. Does not implicitly {@link v2ray.core.app.router.GeoIPList.verify|verify} messages.
                     * @param message GeoIPList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.router.IGeoIPList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GeoIPList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GeoIPList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.router.GeoIPList;

                    /**
                     * Decodes a GeoIPList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GeoIPList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.router.GeoIPList;

                    /**
                     * Verifies a GeoIPList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GeoIPList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GeoIPList
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.router.GeoIPList;

                    /**
                     * Creates a plain object from a GeoIPList message. Also converts values to other types if specified.
                     * @param message GeoIPList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.router.GeoIPList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GeoIPList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GeoSite. */
                interface IGeoSite {

                    /** GeoSite countryCode */
                    countryCode?: (string|null);

                    /** GeoSite domain */
                    domain?: (v2ray.core.app.router.IDomain[]|null);
                }

                /** Represents a GeoSite. */
                class GeoSite implements IGeoSite {

                    /**
                     * Constructs a new GeoSite.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.router.IGeoSite);

                    /** GeoSite countryCode. */
                    public countryCode: string;

                    /** GeoSite domain. */
                    public domain: v2ray.core.app.router.IDomain[];

                    /**
                     * Creates a new GeoSite instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GeoSite instance
                     */
                    public static create(properties?: v2ray.core.app.router.IGeoSite): v2ray.core.app.router.GeoSite;

                    /**
                     * Encodes the specified GeoSite message. Does not implicitly {@link v2ray.core.app.router.GeoSite.verify|verify} messages.
                     * @param message GeoSite message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.router.IGeoSite, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GeoSite message, length delimited. Does not implicitly {@link v2ray.core.app.router.GeoSite.verify|verify} messages.
                     * @param message GeoSite message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.router.IGeoSite, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GeoSite message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GeoSite
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.router.GeoSite;

                    /**
                     * Decodes a GeoSite message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GeoSite
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.router.GeoSite;

                    /**
                     * Verifies a GeoSite message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GeoSite message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GeoSite
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.router.GeoSite;

                    /**
                     * Creates a plain object from a GeoSite message. Also converts values to other types if specified.
                     * @param message GeoSite
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.router.GeoSite, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GeoSite to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GeoSiteList. */
                interface IGeoSiteList {

                    /** GeoSiteList entry */
                    entry?: (v2ray.core.app.router.IGeoSite[]|null);
                }

                /** Represents a GeoSiteList. */
                class GeoSiteList implements IGeoSiteList {

                    /**
                     * Constructs a new GeoSiteList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.router.IGeoSiteList);

                    /** GeoSiteList entry. */
                    public entry: v2ray.core.app.router.IGeoSite[];

                    /**
                     * Creates a new GeoSiteList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GeoSiteList instance
                     */
                    public static create(properties?: v2ray.core.app.router.IGeoSiteList): v2ray.core.app.router.GeoSiteList;

                    /**
                     * Encodes the specified GeoSiteList message. Does not implicitly {@link v2ray.core.app.router.GeoSiteList.verify|verify} messages.
                     * @param message GeoSiteList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.router.IGeoSiteList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GeoSiteList message, length delimited. Does not implicitly {@link v2ray.core.app.router.GeoSiteList.verify|verify} messages.
                     * @param message GeoSiteList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.router.IGeoSiteList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GeoSiteList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GeoSiteList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.router.GeoSiteList;

                    /**
                     * Decodes a GeoSiteList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GeoSiteList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.router.GeoSiteList;

                    /**
                     * Verifies a GeoSiteList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GeoSiteList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GeoSiteList
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.router.GeoSiteList;

                    /**
                     * Creates a plain object from a GeoSiteList message. Also converts values to other types if specified.
                     * @param message GeoSiteList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.router.GeoSiteList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GeoSiteList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RoutingRule. */
                interface IRoutingRule {

                    /** RoutingRule tag */
                    tag?: (string|null);

                    /** RoutingRule balancingTag */
                    balancingTag?: (string|null);

                    /** RoutingRule domain */
                    domain?: (v2ray.core.app.router.IDomain[]|null);

                    /** RoutingRule cidr */
                    cidr?: (v2ray.core.app.router.ICIDR[]|null);

                    /** RoutingRule geoip */
                    geoip?: (v2ray.core.app.router.IGeoIP[]|null);

                    /** RoutingRule portRange */
                    portRange?: (v2ray.core.common.net.IPortRange|null);

                    /** RoutingRule portList */
                    portList?: (v2ray.core.common.net.IPortList|null);

                    /** RoutingRule networkList */
                    networkList?: (v2ray.core.common.net.INetworkList|null);

                    /** RoutingRule networks */
                    networks?: (v2ray.core.common.net.Network[]|null);

                    /** RoutingRule sourceCidr */
                    sourceCidr?: (v2ray.core.app.router.ICIDR[]|null);

                    /** RoutingRule sourceGeoip */
                    sourceGeoip?: (v2ray.core.app.router.IGeoIP[]|null);

                    /** RoutingRule userEmail */
                    userEmail?: (string[]|null);

                    /** RoutingRule inboundTag */
                    inboundTag?: (string[]|null);

                    /** RoutingRule protocol */
                    protocol?: (string[]|null);

                    /** RoutingRule attributes */
                    attributes?: (string|null);
                }

                /** Represents a RoutingRule. */
                class RoutingRule implements IRoutingRule {

                    /**
                     * Constructs a new RoutingRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.router.IRoutingRule);

                    /** RoutingRule tag. */
                    public tag: string;

                    /** RoutingRule balancingTag. */
                    public balancingTag: string;

                    /** RoutingRule domain. */
                    public domain: v2ray.core.app.router.IDomain[];

                    /** RoutingRule cidr. */
                    public cidr: v2ray.core.app.router.ICIDR[];

                    /** RoutingRule geoip. */
                    public geoip: v2ray.core.app.router.IGeoIP[];

                    /** RoutingRule portRange. */
                    public portRange?: (v2ray.core.common.net.IPortRange|null);

                    /** RoutingRule portList. */
                    public portList?: (v2ray.core.common.net.IPortList|null);

                    /** RoutingRule networkList. */
                    public networkList?: (v2ray.core.common.net.INetworkList|null);

                    /** RoutingRule networks. */
                    public networks: v2ray.core.common.net.Network[];

                    /** RoutingRule sourceCidr. */
                    public sourceCidr: v2ray.core.app.router.ICIDR[];

                    /** RoutingRule sourceGeoip. */
                    public sourceGeoip: v2ray.core.app.router.IGeoIP[];

                    /** RoutingRule userEmail. */
                    public userEmail: string[];

                    /** RoutingRule inboundTag. */
                    public inboundTag: string[];

                    /** RoutingRule protocol. */
                    public protocol: string[];

                    /** RoutingRule attributes. */
                    public attributes: string;

                    /** RoutingRule targetTag. */
                    public targetTag?: ("tag"|"balancingTag");

                    /**
                     * Creates a new RoutingRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoutingRule instance
                     */
                    public static create(properties?: v2ray.core.app.router.IRoutingRule): v2ray.core.app.router.RoutingRule;

                    /**
                     * Encodes the specified RoutingRule message. Does not implicitly {@link v2ray.core.app.router.RoutingRule.verify|verify} messages.
                     * @param message RoutingRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.router.IRoutingRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoutingRule message, length delimited. Does not implicitly {@link v2ray.core.app.router.RoutingRule.verify|verify} messages.
                     * @param message RoutingRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.router.IRoutingRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoutingRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoutingRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.router.RoutingRule;

                    /**
                     * Decodes a RoutingRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoutingRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.router.RoutingRule;

                    /**
                     * Verifies a RoutingRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoutingRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoutingRule
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.router.RoutingRule;

                    /**
                     * Creates a plain object from a RoutingRule message. Also converts values to other types if specified.
                     * @param message RoutingRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.router.RoutingRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoutingRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BalancingRule. */
                interface IBalancingRule {

                    /** BalancingRule tag */
                    tag?: (string|null);

                    /** BalancingRule outboundSelector */
                    outboundSelector?: (string[]|null);
                }

                /** Represents a BalancingRule. */
                class BalancingRule implements IBalancingRule {

                    /**
                     * Constructs a new BalancingRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.router.IBalancingRule);

                    /** BalancingRule tag. */
                    public tag: string;

                    /** BalancingRule outboundSelector. */
                    public outboundSelector: string[];

                    /**
                     * Creates a new BalancingRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BalancingRule instance
                     */
                    public static create(properties?: v2ray.core.app.router.IBalancingRule): v2ray.core.app.router.BalancingRule;

                    /**
                     * Encodes the specified BalancingRule message. Does not implicitly {@link v2ray.core.app.router.BalancingRule.verify|verify} messages.
                     * @param message BalancingRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.router.IBalancingRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BalancingRule message, length delimited. Does not implicitly {@link v2ray.core.app.router.BalancingRule.verify|verify} messages.
                     * @param message BalancingRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.router.IBalancingRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BalancingRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BalancingRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.router.BalancingRule;

                    /**
                     * Decodes a BalancingRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BalancingRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.router.BalancingRule;

                    /**
                     * Verifies a BalancingRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BalancingRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BalancingRule
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.router.BalancingRule;

                    /**
                     * Creates a plain object from a BalancingRule message. Also converts values to other types if specified.
                     * @param message BalancingRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.router.BalancingRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BalancingRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config domainStrategy */
                    domainStrategy?: (v2ray.core.app.router.Config.DomainStrategy|null);

                    /** Config rule */
                    rule?: (v2ray.core.app.router.IRoutingRule[]|null);

                    /** Config balancingRule */
                    balancingRule?: (v2ray.core.app.router.IBalancingRule[]|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.router.IConfig);

                    /** Config domainStrategy. */
                    public domainStrategy: v2ray.core.app.router.Config.DomainStrategy;

                    /** Config rule. */
                    public rule: v2ray.core.app.router.IRoutingRule[];

                    /** Config balancingRule. */
                    public balancingRule: v2ray.core.app.router.IBalancingRule[];

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.app.router.IConfig): v2ray.core.app.router.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.router.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.router.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.router.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.router.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.router.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.router.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.router.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.router.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Config {

                    /** DomainStrategy enum. */
                    enum DomainStrategy {
                        AsIs = 0,
                        UseIp = 1,
                        IpIfNonMatch = 2,
                        IpOnDemand = 3
                    }
                }
            }

            /** Namespace stats. */
            namespace stats {

                /** Namespace command. */
                namespace command {

                    /** Properties of a GetStatsRequest. */
                    interface IGetStatsRequest {

                        /** GetStatsRequest name */
                        name?: (string|null);

                        /** GetStatsRequest reset */
                        reset?: (boolean|null);
                    }

                    /** Represents a GetStatsRequest. */
                    class GetStatsRequest implements IGetStatsRequest {

                        /**
                         * Constructs a new GetStatsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.stats.command.IGetStatsRequest);

                        /** GetStatsRequest name. */
                        public name: string;

                        /** GetStatsRequest reset. */
                        public reset: boolean;

                        /**
                         * Creates a new GetStatsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetStatsRequest instance
                         */
                        public static create(properties?: v2ray.core.app.stats.command.IGetStatsRequest): v2ray.core.app.stats.command.GetStatsRequest;

                        /**
                         * Encodes the specified GetStatsRequest message. Does not implicitly {@link v2ray.core.app.stats.command.GetStatsRequest.verify|verify} messages.
                         * @param message GetStatsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.stats.command.IGetStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetStatsRequest message, length delimited. Does not implicitly {@link v2ray.core.app.stats.command.GetStatsRequest.verify|verify} messages.
                         * @param message GetStatsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.stats.command.IGetStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetStatsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetStatsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.stats.command.GetStatsRequest;

                        /**
                         * Decodes a GetStatsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetStatsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.stats.command.GetStatsRequest;

                        /**
                         * Verifies a GetStatsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetStatsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetStatsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.stats.command.GetStatsRequest;

                        /**
                         * Creates a plain object from a GetStatsRequest message. Also converts values to other types if specified.
                         * @param message GetStatsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.stats.command.GetStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetStatsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Stat. */
                    interface IStat {

                        /** Stat name */
                        name?: (string|null);

                        /** Stat value */
                        value?: (number|Long|null);
                    }

                    /** Represents a Stat. */
                    class Stat implements IStat {

                        /**
                         * Constructs a new Stat.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.stats.command.IStat);

                        /** Stat name. */
                        public name: string;

                        /** Stat value. */
                        public value: (number|Long);

                        /**
                         * Creates a new Stat instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Stat instance
                         */
                        public static create(properties?: v2ray.core.app.stats.command.IStat): v2ray.core.app.stats.command.Stat;

                        /**
                         * Encodes the specified Stat message. Does not implicitly {@link v2ray.core.app.stats.command.Stat.verify|verify} messages.
                         * @param message Stat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.stats.command.IStat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Stat message, length delimited. Does not implicitly {@link v2ray.core.app.stats.command.Stat.verify|verify} messages.
                         * @param message Stat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.stats.command.IStat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Stat message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Stat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.stats.command.Stat;

                        /**
                         * Decodes a Stat message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Stat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.stats.command.Stat;

                        /**
                         * Verifies a Stat message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Stat message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Stat
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.stats.command.Stat;

                        /**
                         * Creates a plain object from a Stat message. Also converts values to other types if specified.
                         * @param message Stat
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.stats.command.Stat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Stat to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetStatsResponse. */
                    interface IGetStatsResponse {

                        /** GetStatsResponse stat */
                        stat?: (v2ray.core.app.stats.command.IStat|null);
                    }

                    /** Represents a GetStatsResponse. */
                    class GetStatsResponse implements IGetStatsResponse {

                        /**
                         * Constructs a new GetStatsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.stats.command.IGetStatsResponse);

                        /** GetStatsResponse stat. */
                        public stat?: (v2ray.core.app.stats.command.IStat|null);

                        /**
                         * Creates a new GetStatsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetStatsResponse instance
                         */
                        public static create(properties?: v2ray.core.app.stats.command.IGetStatsResponse): v2ray.core.app.stats.command.GetStatsResponse;

                        /**
                         * Encodes the specified GetStatsResponse message. Does not implicitly {@link v2ray.core.app.stats.command.GetStatsResponse.verify|verify} messages.
                         * @param message GetStatsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.stats.command.IGetStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetStatsResponse message, length delimited. Does not implicitly {@link v2ray.core.app.stats.command.GetStatsResponse.verify|verify} messages.
                         * @param message GetStatsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.stats.command.IGetStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetStatsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetStatsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.stats.command.GetStatsResponse;

                        /**
                         * Decodes a GetStatsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetStatsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.stats.command.GetStatsResponse;

                        /**
                         * Verifies a GetStatsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetStatsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetStatsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.stats.command.GetStatsResponse;

                        /**
                         * Creates a plain object from a GetStatsResponse message. Also converts values to other types if specified.
                         * @param message GetStatsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.stats.command.GetStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetStatsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a QueryStatsRequest. */
                    interface IQueryStatsRequest {

                        /** QueryStatsRequest pattern */
                        pattern?: (string|null);

                        /** QueryStatsRequest reset */
                        reset?: (boolean|null);
                    }

                    /** Represents a QueryStatsRequest. */
                    class QueryStatsRequest implements IQueryStatsRequest {

                        /**
                         * Constructs a new QueryStatsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.stats.command.IQueryStatsRequest);

                        /** QueryStatsRequest pattern. */
                        public pattern: string;

                        /** QueryStatsRequest reset. */
                        public reset: boolean;

                        /**
                         * Creates a new QueryStatsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns QueryStatsRequest instance
                         */
                        public static create(properties?: v2ray.core.app.stats.command.IQueryStatsRequest): v2ray.core.app.stats.command.QueryStatsRequest;

                        /**
                         * Encodes the specified QueryStatsRequest message. Does not implicitly {@link v2ray.core.app.stats.command.QueryStatsRequest.verify|verify} messages.
                         * @param message QueryStatsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.stats.command.IQueryStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified QueryStatsRequest message, length delimited. Does not implicitly {@link v2ray.core.app.stats.command.QueryStatsRequest.verify|verify} messages.
                         * @param message QueryStatsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.stats.command.IQueryStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a QueryStatsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QueryStatsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.stats.command.QueryStatsRequest;

                        /**
                         * Decodes a QueryStatsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns QueryStatsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.stats.command.QueryStatsRequest;

                        /**
                         * Verifies a QueryStatsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a QueryStatsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns QueryStatsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.stats.command.QueryStatsRequest;

                        /**
                         * Creates a plain object from a QueryStatsRequest message. Also converts values to other types if specified.
                         * @param message QueryStatsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.stats.command.QueryStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this QueryStatsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a QueryStatsResponse. */
                    interface IQueryStatsResponse {

                        /** QueryStatsResponse stat */
                        stat?: (v2ray.core.app.stats.command.IStat[]|null);
                    }

                    /** Represents a QueryStatsResponse. */
                    class QueryStatsResponse implements IQueryStatsResponse {

                        /**
                         * Constructs a new QueryStatsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.stats.command.IQueryStatsResponse);

                        /** QueryStatsResponse stat. */
                        public stat: v2ray.core.app.stats.command.IStat[];

                        /**
                         * Creates a new QueryStatsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns QueryStatsResponse instance
                         */
                        public static create(properties?: v2ray.core.app.stats.command.IQueryStatsResponse): v2ray.core.app.stats.command.QueryStatsResponse;

                        /**
                         * Encodes the specified QueryStatsResponse message. Does not implicitly {@link v2ray.core.app.stats.command.QueryStatsResponse.verify|verify} messages.
                         * @param message QueryStatsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.stats.command.IQueryStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified QueryStatsResponse message, length delimited. Does not implicitly {@link v2ray.core.app.stats.command.QueryStatsResponse.verify|verify} messages.
                         * @param message QueryStatsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.stats.command.IQueryStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a QueryStatsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QueryStatsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.stats.command.QueryStatsResponse;

                        /**
                         * Decodes a QueryStatsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns QueryStatsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.stats.command.QueryStatsResponse;

                        /**
                         * Verifies a QueryStatsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a QueryStatsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns QueryStatsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.stats.command.QueryStatsResponse;

                        /**
                         * Creates a plain object from a QueryStatsResponse message. Also converts values to other types if specified.
                         * @param message QueryStatsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.stats.command.QueryStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this QueryStatsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Represents a StatsService */
                    class StatsService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new StatsService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new StatsService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): StatsService;

                        /**
                         * Calls GetStats.
                         * @param request GetStatsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetStatsResponse
                         */
                        public getStats(request: v2ray.core.app.stats.command.IGetStatsRequest, callback: v2ray.core.app.stats.command.StatsService.GetStatsCallback): void;

                        /**
                         * Calls GetStats.
                         * @param request GetStatsRequest message or plain object
                         * @returns Promise
                         */
                        public getStats(request: v2ray.core.app.stats.command.IGetStatsRequest): Promise<v2ray.core.app.stats.command.GetStatsResponse>;

                        /**
                         * Calls QueryStats.
                         * @param request QueryStatsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and QueryStatsResponse
                         */
                        public queryStats(request: v2ray.core.app.stats.command.IQueryStatsRequest, callback: v2ray.core.app.stats.command.StatsService.QueryStatsCallback): void;

                        /**
                         * Calls QueryStats.
                         * @param request QueryStatsRequest message or plain object
                         * @returns Promise
                         */
                        public queryStats(request: v2ray.core.app.stats.command.IQueryStatsRequest): Promise<v2ray.core.app.stats.command.QueryStatsResponse>;
                    }

                    namespace StatsService {

                        /**
                         * Callback as used by {@link v2ray.core.app.stats.command.StatsService#getStats}.
                         * @param error Error, if any
                         * @param [response] GetStatsResponse
                         */
                        type GetStatsCallback = (error: (Error|null), response?: v2ray.core.app.stats.command.GetStatsResponse) => void;

                        /**
                         * Callback as used by {@link v2ray.core.app.stats.command.StatsService#queryStats}.
                         * @param error Error, if any
                         * @param [response] QueryStatsResponse
                         */
                        type QueryStatsCallback = (error: (Error|null), response?: v2ray.core.app.stats.command.QueryStatsResponse) => void;
                    }

                    /** Properties of a Config. */
                    interface IConfig {
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.app.stats.command.IConfig);

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.app.stats.command.IConfig): v2ray.core.app.stats.command.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.stats.command.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.app.stats.command.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.stats.command.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.app.stats.command.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.stats.command.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.stats.command.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.app.stats.command.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.app.stats.command.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Config. */
                interface IConfig {
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.app.stats.IConfig);

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.app.stats.IConfig): v2ray.core.app.stats.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.app.stats.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.app.stats.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.app.stats.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.app.stats.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.app.stats.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.app.stats.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.app.stats.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.app.stats.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Namespace common. */
        namespace common {

            /** Namespace log. */
            namespace log {

                /** Severity enum. */
                enum Severity {
                    Unknown = 0,
                    Error = 1,
                    Warning = 2,
                    Info = 3,
                    Debug = 4
                }
            }

            /** Namespace net. */
            namespace net {

                /** Properties of a IPOrDomain. */
                interface IIPOrDomain {

                    /** IPOrDomain ip */
                    ip?: (Uint8Array|null);

                    /** IPOrDomain domain */
                    domain?: (string|null);
                }

                /** Represents a IPOrDomain. */
                class IPOrDomain implements IIPOrDomain {

                    /**
                     * Constructs a new IPOrDomain.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.common.net.IIPOrDomain);

                    /** IPOrDomain ip. */
                    public ip: Uint8Array;

                    /** IPOrDomain domain. */
                    public domain: string;

                    /** IPOrDomain address. */
                    public address?: ("ip"|"domain");

                    /**
                     * Creates a new IPOrDomain instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IPOrDomain instance
                     */
                    public static create(properties?: v2ray.core.common.net.IIPOrDomain): v2ray.core.common.net.IPOrDomain;

                    /**
                     * Encodes the specified IPOrDomain message. Does not implicitly {@link v2ray.core.common.net.IPOrDomain.verify|verify} messages.
                     * @param message IPOrDomain message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.common.net.IIPOrDomain, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IPOrDomain message, length delimited. Does not implicitly {@link v2ray.core.common.net.IPOrDomain.verify|verify} messages.
                     * @param message IPOrDomain message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.common.net.IIPOrDomain, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a IPOrDomain message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IPOrDomain
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.common.net.IPOrDomain;

                    /**
                     * Decodes a IPOrDomain message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IPOrDomain
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.common.net.IPOrDomain;

                    /**
                     * Verifies a IPOrDomain message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a IPOrDomain message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IPOrDomain
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.common.net.IPOrDomain;

                    /**
                     * Creates a plain object from a IPOrDomain message. Also converts values to other types if specified.
                     * @param message IPOrDomain
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.common.net.IPOrDomain, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IPOrDomain to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Endpoint. */
                interface IEndpoint {

                    /** Endpoint network */
                    network?: (v2ray.core.common.net.Network|null);

                    /** Endpoint address */
                    address?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** Endpoint port */
                    port?: (number|null);
                }

                /** Represents an Endpoint. */
                class Endpoint implements IEndpoint {

                    /**
                     * Constructs a new Endpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.common.net.IEndpoint);

                    /** Endpoint network. */
                    public network: v2ray.core.common.net.Network;

                    /** Endpoint address. */
                    public address?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** Endpoint port. */
                    public port: number;

                    /**
                     * Creates a new Endpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Endpoint instance
                     */
                    public static create(properties?: v2ray.core.common.net.IEndpoint): v2ray.core.common.net.Endpoint;

                    /**
                     * Encodes the specified Endpoint message. Does not implicitly {@link v2ray.core.common.net.Endpoint.verify|verify} messages.
                     * @param message Endpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.common.net.IEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Endpoint message, length delimited. Does not implicitly {@link v2ray.core.common.net.Endpoint.verify|verify} messages.
                     * @param message Endpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.common.net.IEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Endpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Endpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.common.net.Endpoint;

                    /**
                     * Decodes an Endpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Endpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.common.net.Endpoint;

                    /**
                     * Verifies an Endpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Endpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Endpoint
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.common.net.Endpoint;

                    /**
                     * Creates a plain object from an Endpoint message. Also converts values to other types if specified.
                     * @param message Endpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.common.net.Endpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Endpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Network enum. */
                enum Network {
                    Unknown = 0,
                    RawTCP = 1,
                    TCP = 2,
                    UDP = 3
                }

                /** Properties of a NetworkList. */
                interface INetworkList {

                    /** NetworkList network */
                    network?: (v2ray.core.common.net.Network[]|null);
                }

                /** Represents a NetworkList. */
                class NetworkList implements INetworkList {

                    /**
                     * Constructs a new NetworkList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.common.net.INetworkList);

                    /** NetworkList network. */
                    public network: v2ray.core.common.net.Network[];

                    /**
                     * Creates a new NetworkList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkList instance
                     */
                    public static create(properties?: v2ray.core.common.net.INetworkList): v2ray.core.common.net.NetworkList;

                    /**
                     * Encodes the specified NetworkList message. Does not implicitly {@link v2ray.core.common.net.NetworkList.verify|verify} messages.
                     * @param message NetworkList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.common.net.INetworkList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkList message, length delimited. Does not implicitly {@link v2ray.core.common.net.NetworkList.verify|verify} messages.
                     * @param message NetworkList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.common.net.INetworkList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.common.net.NetworkList;

                    /**
                     * Decodes a NetworkList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.common.net.NetworkList;

                    /**
                     * Verifies a NetworkList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkList
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.common.net.NetworkList;

                    /**
                     * Creates a plain object from a NetworkList message. Also converts values to other types if specified.
                     * @param message NetworkList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.common.net.NetworkList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PortRange. */
                interface IPortRange {

                    /** PortRange From */
                    From?: (number|null);

                    /** PortRange To */
                    To?: (number|null);
                }

                /** Represents a PortRange. */
                class PortRange implements IPortRange {

                    /**
                     * Constructs a new PortRange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.common.net.IPortRange);

                    /** PortRange From. */
                    public From: number;

                    /** PortRange To. */
                    public To: number;

                    /**
                     * Creates a new PortRange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PortRange instance
                     */
                    public static create(properties?: v2ray.core.common.net.IPortRange): v2ray.core.common.net.PortRange;

                    /**
                     * Encodes the specified PortRange message. Does not implicitly {@link v2ray.core.common.net.PortRange.verify|verify} messages.
                     * @param message PortRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.common.net.IPortRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PortRange message, length delimited. Does not implicitly {@link v2ray.core.common.net.PortRange.verify|verify} messages.
                     * @param message PortRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.common.net.IPortRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PortRange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PortRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.common.net.PortRange;

                    /**
                     * Decodes a PortRange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PortRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.common.net.PortRange;

                    /**
                     * Verifies a PortRange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PortRange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PortRange
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.common.net.PortRange;

                    /**
                     * Creates a plain object from a PortRange message. Also converts values to other types if specified.
                     * @param message PortRange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.common.net.PortRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PortRange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PortList. */
                interface IPortList {

                    /** PortList range */
                    range?: (v2ray.core.common.net.IPortRange[]|null);
                }

                /** Represents a PortList. */
                class PortList implements IPortList {

                    /**
                     * Constructs a new PortList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.common.net.IPortList);

                    /** PortList range. */
                    public range: v2ray.core.common.net.IPortRange[];

                    /**
                     * Creates a new PortList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PortList instance
                     */
                    public static create(properties?: v2ray.core.common.net.IPortList): v2ray.core.common.net.PortList;

                    /**
                     * Encodes the specified PortList message. Does not implicitly {@link v2ray.core.common.net.PortList.verify|verify} messages.
                     * @param message PortList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.common.net.IPortList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PortList message, length delimited. Does not implicitly {@link v2ray.core.common.net.PortList.verify|verify} messages.
                     * @param message PortList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.common.net.IPortList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PortList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PortList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.common.net.PortList;

                    /**
                     * Decodes a PortList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PortList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.common.net.PortList;

                    /**
                     * Verifies a PortList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PortList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PortList
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.common.net.PortList;

                    /**
                     * Creates a plain object from a PortList message. Also converts values to other types if specified.
                     * @param message PortList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.common.net.PortList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PortList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace protocol. */
            namespace protocol {

                /** SecurityType enum. */
                enum SecurityType {
                    UNKNOWN = 0,
                    LEGACY = 1,
                    AUTO = 2,
                    AES128_GCM = 3,
                    CHACHA20_POLY1305 = 4,
                    NONE = 5
                }

                /** Properties of a SecurityConfig. */
                interface ISecurityConfig {

                    /** SecurityConfig type */
                    type?: (v2ray.core.common.protocol.SecurityType|null);
                }

                /** Represents a SecurityConfig. */
                class SecurityConfig implements ISecurityConfig {

                    /**
                     * Constructs a new SecurityConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.common.protocol.ISecurityConfig);

                    /** SecurityConfig type. */
                    public type: v2ray.core.common.protocol.SecurityType;

                    /**
                     * Creates a new SecurityConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityConfig instance
                     */
                    public static create(properties?: v2ray.core.common.protocol.ISecurityConfig): v2ray.core.common.protocol.SecurityConfig;

                    /**
                     * Encodes the specified SecurityConfig message. Does not implicitly {@link v2ray.core.common.protocol.SecurityConfig.verify|verify} messages.
                     * @param message SecurityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.common.protocol.ISecurityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityConfig message, length delimited. Does not implicitly {@link v2ray.core.common.protocol.SecurityConfig.verify|verify} messages.
                     * @param message SecurityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.common.protocol.ISecurityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.common.protocol.SecurityConfig;

                    /**
                     * Decodes a SecurityConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.common.protocol.SecurityConfig;

                    /**
                     * Verifies a SecurityConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.common.protocol.SecurityConfig;

                    /**
                     * Creates a plain object from a SecurityConfig message. Also converts values to other types if specified.
                     * @param message SecurityConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.common.protocol.SecurityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ServerEndpoint. */
                interface IServerEndpoint {

                    /** ServerEndpoint address */
                    address?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** ServerEndpoint port */
                    port?: (number|null);

                    /** ServerEndpoint user */
                    user?: (v2ray.core.common.protocol.IUser[]|null);
                }

                /** Represents a ServerEndpoint. */
                class ServerEndpoint implements IServerEndpoint {

                    /**
                     * Constructs a new ServerEndpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.common.protocol.IServerEndpoint);

                    /** ServerEndpoint address. */
                    public address?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** ServerEndpoint port. */
                    public port: number;

                    /** ServerEndpoint user. */
                    public user: v2ray.core.common.protocol.IUser[];

                    /**
                     * Creates a new ServerEndpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerEndpoint instance
                     */
                    public static create(properties?: v2ray.core.common.protocol.IServerEndpoint): v2ray.core.common.protocol.ServerEndpoint;

                    /**
                     * Encodes the specified ServerEndpoint message. Does not implicitly {@link v2ray.core.common.protocol.ServerEndpoint.verify|verify} messages.
                     * @param message ServerEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.common.protocol.IServerEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerEndpoint message, length delimited. Does not implicitly {@link v2ray.core.common.protocol.ServerEndpoint.verify|verify} messages.
                     * @param message ServerEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.common.protocol.IServerEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerEndpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.common.protocol.ServerEndpoint;

                    /**
                     * Decodes a ServerEndpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.common.protocol.ServerEndpoint;

                    /**
                     * Verifies a ServerEndpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServerEndpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServerEndpoint
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.common.protocol.ServerEndpoint;

                    /**
                     * Creates a plain object from a ServerEndpoint message. Also converts values to other types if specified.
                     * @param message ServerEndpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.common.protocol.ServerEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerEndpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a User. */
                interface IUser {

                    /** User level */
                    level?: (number|null);

                    /** User email */
                    email?: (string|null);

                    /** User account */
                    account?: (v2ray.core.common.serial.ITypedMessage|null);
                }

                /** Represents a User. */
                class User implements IUser {

                    /**
                     * Constructs a new User.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.common.protocol.IUser);

                    /** User level. */
                    public level: number;

                    /** User email. */
                    public email: string;

                    /** User account. */
                    public account?: (v2ray.core.common.serial.ITypedMessage|null);

                    /**
                     * Creates a new User instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns User instance
                     */
                    public static create(properties?: v2ray.core.common.protocol.IUser): v2ray.core.common.protocol.User;

                    /**
                     * Encodes the specified User message. Does not implicitly {@link v2ray.core.common.protocol.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.common.protocol.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified User message, length delimited. Does not implicitly {@link v2ray.core.common.protocol.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.common.protocol.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.common.protocol.User;

                    /**
                     * Decodes a User message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.common.protocol.User;

                    /**
                     * Verifies a User message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a User message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns User
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.common.protocol.User;

                    /**
                     * Creates a plain object from a User message. Also converts values to other types if specified.
                     * @param message User
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.common.protocol.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this User to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace serial. */
            namespace serial {

                /** Properties of a TypedMessage. */
                interface ITypedMessage {

                    /** TypedMessage type */
                    type?: (string|null);

                    /** TypedMessage value */
                    value?: (Uint8Array|null);
                }

                /** Represents a TypedMessage. */
                class TypedMessage implements ITypedMessage {

                    /**
                     * Constructs a new TypedMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.common.serial.ITypedMessage);

                    /** TypedMessage type. */
                    public type: string;

                    /** TypedMessage value. */
                    public value: Uint8Array;

                    /**
                     * Creates a new TypedMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TypedMessage instance
                     */
                    public static create(properties?: v2ray.core.common.serial.ITypedMessage): v2ray.core.common.serial.TypedMessage;

                    /**
                     * Encodes the specified TypedMessage message. Does not implicitly {@link v2ray.core.common.serial.TypedMessage.verify|verify} messages.
                     * @param message TypedMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.common.serial.ITypedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TypedMessage message, length delimited. Does not implicitly {@link v2ray.core.common.serial.TypedMessage.verify|verify} messages.
                     * @param message TypedMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.common.serial.ITypedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TypedMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TypedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.common.serial.TypedMessage;

                    /**
                     * Decodes a TypedMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TypedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.common.serial.TypedMessage;

                    /**
                     * Verifies a TypedMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TypedMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TypedMessage
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.common.serial.TypedMessage;

                    /**
                     * Creates a plain object from a TypedMessage message. Also converts values to other types if specified.
                     * @param message TypedMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.common.serial.TypedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TypedMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Properties of a Config. */
        interface IConfig {

            /** Config inbound */
            inbound?: (v2ray.core.IInboundHandlerConfig[]|null);

            /** Config outbound */
            outbound?: (v2ray.core.IOutboundHandlerConfig[]|null);

            /** Config app */
            app?: (v2ray.core.common.serial.ITypedMessage[]|null);

            /** Config transport */
            transport?: (v2ray.core.transport.IConfig|null);

            /** Config extension */
            extension?: (v2ray.core.common.serial.ITypedMessage[]|null);
        }

        /** Represents a Config. */
        class Config implements IConfig {

            /**
             * Constructs a new Config.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2ray.core.IConfig);

            /** Config inbound. */
            public inbound: v2ray.core.IInboundHandlerConfig[];

            /** Config outbound. */
            public outbound: v2ray.core.IOutboundHandlerConfig[];

            /** Config app. */
            public app: v2ray.core.common.serial.ITypedMessage[];

            /** Config transport. */
            public transport?: (v2ray.core.transport.IConfig|null);

            /** Config extension. */
            public extension: v2ray.core.common.serial.ITypedMessage[];

            /**
             * Creates a new Config instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Config instance
             */
            public static create(properties?: v2ray.core.IConfig): v2ray.core.Config;

            /**
             * Encodes the specified Config message. Does not implicitly {@link v2ray.core.Config.verify|verify} messages.
             * @param message Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2ray.core.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.Config.verify|verify} messages.
             * @param message Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2ray.core.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Config message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.Config;

            /**
             * Decodes a Config message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.Config;

            /**
             * Verifies a Config message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Config message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Config
             */
            public static fromObject(object: { [k: string]: any }): v2ray.core.Config;

            /**
             * Creates a plain object from a Config message. Also converts values to other types if specified.
             * @param message Config
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2ray.core.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Config to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InboundHandlerConfig. */
        interface IInboundHandlerConfig {

            /** InboundHandlerConfig tag */
            tag?: (string|null);

            /** InboundHandlerConfig receiverSettings */
            receiverSettings?: (v2ray.core.common.serial.ITypedMessage|null);

            /** InboundHandlerConfig proxySettings */
            proxySettings?: (v2ray.core.common.serial.ITypedMessage|null);
        }

        /** Represents an InboundHandlerConfig. */
        class InboundHandlerConfig implements IInboundHandlerConfig {

            /**
             * Constructs a new InboundHandlerConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2ray.core.IInboundHandlerConfig);

            /** InboundHandlerConfig tag. */
            public tag: string;

            /** InboundHandlerConfig receiverSettings. */
            public receiverSettings?: (v2ray.core.common.serial.ITypedMessage|null);

            /** InboundHandlerConfig proxySettings. */
            public proxySettings?: (v2ray.core.common.serial.ITypedMessage|null);

            /**
             * Creates a new InboundHandlerConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InboundHandlerConfig instance
             */
            public static create(properties?: v2ray.core.IInboundHandlerConfig): v2ray.core.InboundHandlerConfig;

            /**
             * Encodes the specified InboundHandlerConfig message. Does not implicitly {@link v2ray.core.InboundHandlerConfig.verify|verify} messages.
             * @param message InboundHandlerConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2ray.core.IInboundHandlerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InboundHandlerConfig message, length delimited. Does not implicitly {@link v2ray.core.InboundHandlerConfig.verify|verify} messages.
             * @param message InboundHandlerConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2ray.core.IInboundHandlerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InboundHandlerConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InboundHandlerConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.InboundHandlerConfig;

            /**
             * Decodes an InboundHandlerConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InboundHandlerConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.InboundHandlerConfig;

            /**
             * Verifies an InboundHandlerConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InboundHandlerConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InboundHandlerConfig
             */
            public static fromObject(object: { [k: string]: any }): v2ray.core.InboundHandlerConfig;

            /**
             * Creates a plain object from an InboundHandlerConfig message. Also converts values to other types if specified.
             * @param message InboundHandlerConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2ray.core.InboundHandlerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InboundHandlerConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OutboundHandlerConfig. */
        interface IOutboundHandlerConfig {

            /** OutboundHandlerConfig tag */
            tag?: (string|null);

            /** OutboundHandlerConfig senderSettings */
            senderSettings?: (v2ray.core.common.serial.ITypedMessage|null);

            /** OutboundHandlerConfig proxySettings */
            proxySettings?: (v2ray.core.common.serial.ITypedMessage|null);

            /** OutboundHandlerConfig expire */
            expire?: (number|Long|null);

            /** OutboundHandlerConfig comment */
            comment?: (string|null);
        }

        /** Represents an OutboundHandlerConfig. */
        class OutboundHandlerConfig implements IOutboundHandlerConfig {

            /**
             * Constructs a new OutboundHandlerConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2ray.core.IOutboundHandlerConfig);

            /** OutboundHandlerConfig tag. */
            public tag: string;

            /** OutboundHandlerConfig senderSettings. */
            public senderSettings?: (v2ray.core.common.serial.ITypedMessage|null);

            /** OutboundHandlerConfig proxySettings. */
            public proxySettings?: (v2ray.core.common.serial.ITypedMessage|null);

            /** OutboundHandlerConfig expire. */
            public expire: (number|Long);

            /** OutboundHandlerConfig comment. */
            public comment: string;

            /**
             * Creates a new OutboundHandlerConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OutboundHandlerConfig instance
             */
            public static create(properties?: v2ray.core.IOutboundHandlerConfig): v2ray.core.OutboundHandlerConfig;

            /**
             * Encodes the specified OutboundHandlerConfig message. Does not implicitly {@link v2ray.core.OutboundHandlerConfig.verify|verify} messages.
             * @param message OutboundHandlerConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2ray.core.IOutboundHandlerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OutboundHandlerConfig message, length delimited. Does not implicitly {@link v2ray.core.OutboundHandlerConfig.verify|verify} messages.
             * @param message OutboundHandlerConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v2ray.core.IOutboundHandlerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OutboundHandlerConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OutboundHandlerConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.OutboundHandlerConfig;

            /**
             * Decodes an OutboundHandlerConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OutboundHandlerConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.OutboundHandlerConfig;

            /**
             * Verifies an OutboundHandlerConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OutboundHandlerConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OutboundHandlerConfig
             */
            public static fromObject(object: { [k: string]: any }): v2ray.core.OutboundHandlerConfig;

            /**
             * Creates a plain object from an OutboundHandlerConfig message. Also converts values to other types if specified.
             * @param message OutboundHandlerConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v2ray.core.OutboundHandlerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OutboundHandlerConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Namespace proxy. */
        namespace proxy {

            /** Namespace blackhole. */
            namespace blackhole {

                /** Properties of a NoneResponse. */
                interface INoneResponse {
                }

                /** Represents a NoneResponse. */
                class NoneResponse implements INoneResponse {

                    /**
                     * Constructs a new NoneResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.blackhole.INoneResponse);

                    /**
                     * Creates a new NoneResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NoneResponse instance
                     */
                    public static create(properties?: v2ray.core.proxy.blackhole.INoneResponse): v2ray.core.proxy.blackhole.NoneResponse;

                    /**
                     * Encodes the specified NoneResponse message. Does not implicitly {@link v2ray.core.proxy.blackhole.NoneResponse.verify|verify} messages.
                     * @param message NoneResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.blackhole.INoneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NoneResponse message, length delimited. Does not implicitly {@link v2ray.core.proxy.blackhole.NoneResponse.verify|verify} messages.
                     * @param message NoneResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.blackhole.INoneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NoneResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NoneResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.blackhole.NoneResponse;

                    /**
                     * Decodes a NoneResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NoneResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.blackhole.NoneResponse;

                    /**
                     * Verifies a NoneResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NoneResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NoneResponse
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.blackhole.NoneResponse;

                    /**
                     * Creates a plain object from a NoneResponse message. Also converts values to other types if specified.
                     * @param message NoneResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.blackhole.NoneResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NoneResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HTTPResponse. */
                interface IHTTPResponse {
                }

                /** Represents a HTTPResponse. */
                class HTTPResponse implements IHTTPResponse {

                    /**
                     * Constructs a new HTTPResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.blackhole.IHTTPResponse);

                    /**
                     * Creates a new HTTPResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HTTPResponse instance
                     */
                    public static create(properties?: v2ray.core.proxy.blackhole.IHTTPResponse): v2ray.core.proxy.blackhole.HTTPResponse;

                    /**
                     * Encodes the specified HTTPResponse message. Does not implicitly {@link v2ray.core.proxy.blackhole.HTTPResponse.verify|verify} messages.
                     * @param message HTTPResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.blackhole.IHTTPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HTTPResponse message, length delimited. Does not implicitly {@link v2ray.core.proxy.blackhole.HTTPResponse.verify|verify} messages.
                     * @param message HTTPResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.blackhole.IHTTPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HTTPResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HTTPResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.blackhole.HTTPResponse;

                    /**
                     * Decodes a HTTPResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HTTPResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.blackhole.HTTPResponse;

                    /**
                     * Verifies a HTTPResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HTTPResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HTTPResponse
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.blackhole.HTTPResponse;

                    /**
                     * Creates a plain object from a HTTPResponse message. Also converts values to other types if specified.
                     * @param message HTTPResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.blackhole.HTTPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HTTPResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config response */
                    response?: (v2ray.core.common.serial.ITypedMessage|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.blackhole.IConfig);

                    /** Config response. */
                    public response?: (v2ray.core.common.serial.ITypedMessage|null);

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.proxy.blackhole.IConfig): v2ray.core.proxy.blackhole.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.proxy.blackhole.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.blackhole.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.proxy.blackhole.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.blackhole.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.blackhole.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.blackhole.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.blackhole.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.blackhole.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace dns. */
            namespace dns {

                /** Properties of a Config. */
                interface IConfig {

                    /** Config server */
                    server?: (v2ray.core.common.net.IEndpoint|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.dns.IConfig);

                    /** Config server. */
                    public server?: (v2ray.core.common.net.IEndpoint|null);

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.proxy.dns.IConfig): v2ray.core.proxy.dns.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.proxy.dns.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.dns.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.proxy.dns.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.dns.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.dns.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.dns.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.dns.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.dns.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace dokodemo. */
            namespace dokodemo {

                /** Properties of a Config. */
                interface IConfig {

                    /** Config address */
                    address?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** Config port */
                    port?: (number|null);

                    /** Config networkList */
                    networkList?: (v2ray.core.common.net.INetworkList|null);

                    /** Config networks */
                    networks?: (v2ray.core.common.net.Network[]|null);

                    /** Config timeout */
                    timeout?: (number|null);

                    /** Config followRedirect */
                    followRedirect?: (boolean|null);

                    /** Config userLevel */
                    userLevel?: (number|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.dokodemo.IConfig);

                    /** Config address. */
                    public address?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** Config port. */
                    public port: number;

                    /** Config networkList. */
                    public networkList?: (v2ray.core.common.net.INetworkList|null);

                    /** Config networks. */
                    public networks: v2ray.core.common.net.Network[];

                    /** Config timeout. */
                    public timeout: number;

                    /** Config followRedirect. */
                    public followRedirect: boolean;

                    /** Config userLevel. */
                    public userLevel: number;

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.proxy.dokodemo.IConfig): v2ray.core.proxy.dokodemo.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.proxy.dokodemo.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.dokodemo.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.proxy.dokodemo.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.dokodemo.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.dokodemo.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.dokodemo.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.dokodemo.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.dokodemo.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace freedom. */
            namespace freedom {

                /** Properties of a DestinationOverride. */
                interface IDestinationOverride {

                    /** DestinationOverride server */
                    server?: (v2ray.core.common.protocol.IServerEndpoint|null);
                }

                /** Represents a DestinationOverride. */
                class DestinationOverride implements IDestinationOverride {

                    /**
                     * Constructs a new DestinationOverride.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.freedom.IDestinationOverride);

                    /** DestinationOverride server. */
                    public server?: (v2ray.core.common.protocol.IServerEndpoint|null);

                    /**
                     * Creates a new DestinationOverride instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DestinationOverride instance
                     */
                    public static create(properties?: v2ray.core.proxy.freedom.IDestinationOverride): v2ray.core.proxy.freedom.DestinationOverride;

                    /**
                     * Encodes the specified DestinationOverride message. Does not implicitly {@link v2ray.core.proxy.freedom.DestinationOverride.verify|verify} messages.
                     * @param message DestinationOverride message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.freedom.IDestinationOverride, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DestinationOverride message, length delimited. Does not implicitly {@link v2ray.core.proxy.freedom.DestinationOverride.verify|verify} messages.
                     * @param message DestinationOverride message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.freedom.IDestinationOverride, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DestinationOverride message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DestinationOverride
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.freedom.DestinationOverride;

                    /**
                     * Decodes a DestinationOverride message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DestinationOverride
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.freedom.DestinationOverride;

                    /**
                     * Verifies a DestinationOverride message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DestinationOverride message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DestinationOverride
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.freedom.DestinationOverride;

                    /**
                     * Creates a plain object from a DestinationOverride message. Also converts values to other types if specified.
                     * @param message DestinationOverride
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.freedom.DestinationOverride, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DestinationOverride to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config domainStrategy */
                    domainStrategy?: (v2ray.core.proxy.freedom.Config.DomainStrategy|null);

                    /** Config timeout */
                    timeout?: (number|null);

                    /** Config destinationOverride */
                    destinationOverride?: (v2ray.core.proxy.freedom.IDestinationOverride|null);

                    /** Config userLevel */
                    userLevel?: (number|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.freedom.IConfig);

                    /** Config domainStrategy. */
                    public domainStrategy: v2ray.core.proxy.freedom.Config.DomainStrategy;

                    /** Config timeout. */
                    public timeout: number;

                    /** Config destinationOverride. */
                    public destinationOverride?: (v2ray.core.proxy.freedom.IDestinationOverride|null);

                    /** Config userLevel. */
                    public userLevel: number;

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: v2ray.core.proxy.freedom.IConfig): v2ray.core.proxy.freedom.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link v2ray.core.proxy.freedom.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.freedom.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.proxy.freedom.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.freedom.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.freedom.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.freedom.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.freedom.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.freedom.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Config {

                    /** DomainStrategy enum. */
                    enum DomainStrategy {
                        AS_IS = 0,
                        USE_IP = 1,
                        USE_IP4 = 2,
                        USE_IP6 = 3
                    }
                }
            }

            /** Namespace http. */
            namespace http {

                /** Properties of a ServerConfig. */
                interface IServerConfig {

                    /** ServerConfig timeout */
                    timeout?: (number|null);

                    /** ServerConfig accounts */
                    accounts?: ({ [k: string]: string }|null);

                    /** ServerConfig allowTransparent */
                    allowTransparent?: (boolean|null);

                    /** ServerConfig userLevel */
                    userLevel?: (number|null);
                }

                /** Represents a ServerConfig. */
                class ServerConfig implements IServerConfig {

                    /**
                     * Constructs a new ServerConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.http.IServerConfig);

                    /** ServerConfig timeout. */
                    public timeout: number;

                    /** ServerConfig accounts. */
                    public accounts: { [k: string]: string };

                    /** ServerConfig allowTransparent. */
                    public allowTransparent: boolean;

                    /** ServerConfig userLevel. */
                    public userLevel: number;

                    /**
                     * Creates a new ServerConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerConfig instance
                     */
                    public static create(properties?: v2ray.core.proxy.http.IServerConfig): v2ray.core.proxy.http.ServerConfig;

                    /**
                     * Encodes the specified ServerConfig message. Does not implicitly {@link v2ray.core.proxy.http.ServerConfig.verify|verify} messages.
                     * @param message ServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.http.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerConfig message, length delimited. Does not implicitly {@link v2ray.core.proxy.http.ServerConfig.verify|verify} messages.
                     * @param message ServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.http.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.http.ServerConfig;

                    /**
                     * Decodes a ServerConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.http.ServerConfig;

                    /**
                     * Verifies a ServerConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServerConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServerConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.http.ServerConfig;

                    /**
                     * Creates a plain object from a ServerConfig message. Also converts values to other types if specified.
                     * @param message ServerConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.http.ServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClientConfig. */
                interface IClientConfig {
                }

                /** Represents a ClientConfig. */
                class ClientConfig implements IClientConfig {

                    /**
                     * Constructs a new ClientConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.http.IClientConfig);

                    /**
                     * Creates a new ClientConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientConfig instance
                     */
                    public static create(properties?: v2ray.core.proxy.http.IClientConfig): v2ray.core.proxy.http.ClientConfig;

                    /**
                     * Encodes the specified ClientConfig message. Does not implicitly {@link v2ray.core.proxy.http.ClientConfig.verify|verify} messages.
                     * @param message ClientConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.http.IClientConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientConfig message, length delimited. Does not implicitly {@link v2ray.core.proxy.http.ClientConfig.verify|verify} messages.
                     * @param message ClientConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.http.IClientConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.http.ClientConfig;

                    /**
                     * Decodes a ClientConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.http.ClientConfig;

                    /**
                     * Verifies a ClientConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.http.ClientConfig;

                    /**
                     * Creates a plain object from a ClientConfig message. Also converts values to other types if specified.
                     * @param message ClientConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.http.ClientConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace mtproto. */
            namespace mtproto {

                /** Properties of an Account. */
                interface IAccount {

                    /** Account secret */
                    secret?: (Uint8Array|null);
                }

                /** Represents an Account. */
                class Account implements IAccount {

                    /**
                     * Constructs a new Account.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.mtproto.IAccount);

                    /** Account secret. */
                    public secret: Uint8Array;

                    /**
                     * Creates a new Account instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Account instance
                     */
                    public static create(properties?: v2ray.core.proxy.mtproto.IAccount): v2ray.core.proxy.mtproto.Account;

                    /**
                     * Encodes the specified Account message. Does not implicitly {@link v2ray.core.proxy.mtproto.Account.verify|verify} messages.
                     * @param message Account message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.mtproto.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Account message, length delimited. Does not implicitly {@link v2ray.core.proxy.mtproto.Account.verify|verify} messages.
                     * @param message Account message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.mtproto.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Account message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Account
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.mtproto.Account;

                    /**
                     * Decodes an Account message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Account
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.mtproto.Account;

                    /**
                     * Verifies an Account message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Account message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Account
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.mtproto.Account;

                    /**
                     * Creates a plain object from an Account message. Also converts values to other types if specified.
                     * @param message Account
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.mtproto.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Account to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ServerConfig. */
                interface IServerConfig {

                    /** ServerConfig user */
                    user?: (v2ray.core.common.protocol.IUser[]|null);
                }

                /** Represents a ServerConfig. */
                class ServerConfig implements IServerConfig {

                    /**
                     * Constructs a new ServerConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.mtproto.IServerConfig);

                    /** ServerConfig user. */
                    public user: v2ray.core.common.protocol.IUser[];

                    /**
                     * Creates a new ServerConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerConfig instance
                     */
                    public static create(properties?: v2ray.core.proxy.mtproto.IServerConfig): v2ray.core.proxy.mtproto.ServerConfig;

                    /**
                     * Encodes the specified ServerConfig message. Does not implicitly {@link v2ray.core.proxy.mtproto.ServerConfig.verify|verify} messages.
                     * @param message ServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.mtproto.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerConfig message, length delimited. Does not implicitly {@link v2ray.core.proxy.mtproto.ServerConfig.verify|verify} messages.
                     * @param message ServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.mtproto.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.mtproto.ServerConfig;

                    /**
                     * Decodes a ServerConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.mtproto.ServerConfig;

                    /**
                     * Verifies a ServerConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServerConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServerConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.mtproto.ServerConfig;

                    /**
                     * Creates a plain object from a ServerConfig message. Also converts values to other types if specified.
                     * @param message ServerConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.mtproto.ServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClientConfig. */
                interface IClientConfig {
                }

                /** Represents a ClientConfig. */
                class ClientConfig implements IClientConfig {

                    /**
                     * Constructs a new ClientConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.mtproto.IClientConfig);

                    /**
                     * Creates a new ClientConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientConfig instance
                     */
                    public static create(properties?: v2ray.core.proxy.mtproto.IClientConfig): v2ray.core.proxy.mtproto.ClientConfig;

                    /**
                     * Encodes the specified ClientConfig message. Does not implicitly {@link v2ray.core.proxy.mtproto.ClientConfig.verify|verify} messages.
                     * @param message ClientConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.mtproto.IClientConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientConfig message, length delimited. Does not implicitly {@link v2ray.core.proxy.mtproto.ClientConfig.verify|verify} messages.
                     * @param message ClientConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.mtproto.IClientConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.mtproto.ClientConfig;

                    /**
                     * Decodes a ClientConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.mtproto.ClientConfig;

                    /**
                     * Verifies a ClientConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.mtproto.ClientConfig;

                    /**
                     * Creates a plain object from a ClientConfig message. Also converts values to other types if specified.
                     * @param message ClientConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.mtproto.ClientConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace shadowsocks. */
            namespace shadowsocks {

                /** Properties of an Account. */
                interface IAccount {

                    /** Account password */
                    password?: (string|null);

                    /** Account cipherType */
                    cipherType?: (v2ray.core.proxy.shadowsocks.CipherType|null);

                    /** Account ota */
                    ota?: (v2ray.core.proxy.shadowsocks.Account.OneTimeAuth|null);
                }

                /** Represents an Account. */
                class Account implements IAccount {

                    /**
                     * Constructs a new Account.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.shadowsocks.IAccount);

                    /** Account password. */
                    public password: string;

                    /** Account cipherType. */
                    public cipherType: v2ray.core.proxy.shadowsocks.CipherType;

                    /** Account ota. */
                    public ota: v2ray.core.proxy.shadowsocks.Account.OneTimeAuth;

                    /**
                     * Creates a new Account instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Account instance
                     */
                    public static create(properties?: v2ray.core.proxy.shadowsocks.IAccount): v2ray.core.proxy.shadowsocks.Account;

                    /**
                     * Encodes the specified Account message. Does not implicitly {@link v2ray.core.proxy.shadowsocks.Account.verify|verify} messages.
                     * @param message Account message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.shadowsocks.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Account message, length delimited. Does not implicitly {@link v2ray.core.proxy.shadowsocks.Account.verify|verify} messages.
                     * @param message Account message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.shadowsocks.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Account message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Account
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.shadowsocks.Account;

                    /**
                     * Decodes an Account message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Account
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.shadowsocks.Account;

                    /**
                     * Verifies an Account message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Account message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Account
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.shadowsocks.Account;

                    /**
                     * Creates a plain object from an Account message. Also converts values to other types if specified.
                     * @param message Account
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.shadowsocks.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Account to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Account {

                    /** OneTimeAuth enum. */
                    enum OneTimeAuth {
                        Auto = 0,
                        Disabled = 1,
                        Enabled = 2
                    }
                }

                /** CipherType enum. */
                enum CipherType {
                    UNKNOWN = 0,
                    AES_128_CFB = 1,
                    AES_256_CFB = 2,
                    CHACHA20 = 3,
                    CHACHA20_IETF = 4,
                    AES_128_GCM = 5,
                    AES_256_GCM = 6,
                    CHACHA20_POLY1305 = 7,
                    NONE = 8
                }

                /** Properties of a ServerConfig. */
                interface IServerConfig {

                    /** ServerConfig udpEnabled */
                    udpEnabled?: (boolean|null);

                    /** ServerConfig user */
                    user?: (v2ray.core.common.protocol.IUser|null);

                    /** ServerConfig network */
                    network?: (v2ray.core.common.net.Network[]|null);
                }

                /** Represents a ServerConfig. */
                class ServerConfig implements IServerConfig {

                    /**
                     * Constructs a new ServerConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.shadowsocks.IServerConfig);

                    /** ServerConfig udpEnabled. */
                    public udpEnabled: boolean;

                    /** ServerConfig user. */
                    public user?: (v2ray.core.common.protocol.IUser|null);

                    /** ServerConfig network. */
                    public network: v2ray.core.common.net.Network[];

                    /**
                     * Creates a new ServerConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerConfig instance
                     */
                    public static create(properties?: v2ray.core.proxy.shadowsocks.IServerConfig): v2ray.core.proxy.shadowsocks.ServerConfig;

                    /**
                     * Encodes the specified ServerConfig message. Does not implicitly {@link v2ray.core.proxy.shadowsocks.ServerConfig.verify|verify} messages.
                     * @param message ServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.shadowsocks.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerConfig message, length delimited. Does not implicitly {@link v2ray.core.proxy.shadowsocks.ServerConfig.verify|verify} messages.
                     * @param message ServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.shadowsocks.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.shadowsocks.ServerConfig;

                    /**
                     * Decodes a ServerConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.shadowsocks.ServerConfig;

                    /**
                     * Verifies a ServerConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServerConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServerConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.shadowsocks.ServerConfig;

                    /**
                     * Creates a plain object from a ServerConfig message. Also converts values to other types if specified.
                     * @param message ServerConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.shadowsocks.ServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClientConfig. */
                interface IClientConfig {

                    /** ClientConfig server */
                    server?: (v2ray.core.common.protocol.IServerEndpoint[]|null);
                }

                /** Represents a ClientConfig. */
                class ClientConfig implements IClientConfig {

                    /**
                     * Constructs a new ClientConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.shadowsocks.IClientConfig);

                    /** ClientConfig server. */
                    public server: v2ray.core.common.protocol.IServerEndpoint[];

                    /**
                     * Creates a new ClientConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientConfig instance
                     */
                    public static create(properties?: v2ray.core.proxy.shadowsocks.IClientConfig): v2ray.core.proxy.shadowsocks.ClientConfig;

                    /**
                     * Encodes the specified ClientConfig message. Does not implicitly {@link v2ray.core.proxy.shadowsocks.ClientConfig.verify|verify} messages.
                     * @param message ClientConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.shadowsocks.IClientConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientConfig message, length delimited. Does not implicitly {@link v2ray.core.proxy.shadowsocks.ClientConfig.verify|verify} messages.
                     * @param message ClientConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.shadowsocks.IClientConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.shadowsocks.ClientConfig;

                    /**
                     * Decodes a ClientConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.shadowsocks.ClientConfig;

                    /**
                     * Verifies a ClientConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.shadowsocks.ClientConfig;

                    /**
                     * Creates a plain object from a ClientConfig message. Also converts values to other types if specified.
                     * @param message ClientConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.shadowsocks.ClientConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace socks. */
            namespace socks {

                /** Properties of an Account. */
                interface IAccount {

                    /** Account username */
                    username?: (string|null);

                    /** Account password */
                    password?: (string|null);
                }

                /** Represents an Account. */
                class Account implements IAccount {

                    /**
                     * Constructs a new Account.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.socks.IAccount);

                    /** Account username. */
                    public username: string;

                    /** Account password. */
                    public password: string;

                    /**
                     * Creates a new Account instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Account instance
                     */
                    public static create(properties?: v2ray.core.proxy.socks.IAccount): v2ray.core.proxy.socks.Account;

                    /**
                     * Encodes the specified Account message. Does not implicitly {@link v2ray.core.proxy.socks.Account.verify|verify} messages.
                     * @param message Account message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.socks.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Account message, length delimited. Does not implicitly {@link v2ray.core.proxy.socks.Account.verify|verify} messages.
                     * @param message Account message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.socks.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Account message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Account
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.socks.Account;

                    /**
                     * Decodes an Account message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Account
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.socks.Account;

                    /**
                     * Verifies an Account message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Account message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Account
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.socks.Account;

                    /**
                     * Creates a plain object from an Account message. Also converts values to other types if specified.
                     * @param message Account
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.socks.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Account to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** AuthType enum. */
                enum AuthType {
                    NO_AUTH = 0,
                    PASSWORD = 1
                }

                /** Properties of a ServerConfig. */
                interface IServerConfig {

                    /** ServerConfig authType */
                    authType?: (v2ray.core.proxy.socks.AuthType|null);

                    /** ServerConfig accounts */
                    accounts?: ({ [k: string]: string }|null);

                    /** ServerConfig address */
                    address?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** ServerConfig udpEnabled */
                    udpEnabled?: (boolean|null);

                    /** ServerConfig timeout */
                    timeout?: (number|null);

                    /** ServerConfig userLevel */
                    userLevel?: (number|null);
                }

                /** Represents a ServerConfig. */
                class ServerConfig implements IServerConfig {

                    /**
                     * Constructs a new ServerConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.socks.IServerConfig);

                    /** ServerConfig authType. */
                    public authType: v2ray.core.proxy.socks.AuthType;

                    /** ServerConfig accounts. */
                    public accounts: { [k: string]: string };

                    /** ServerConfig address. */
                    public address?: (v2ray.core.common.net.IIPOrDomain|null);

                    /** ServerConfig udpEnabled. */
                    public udpEnabled: boolean;

                    /** ServerConfig timeout. */
                    public timeout: number;

                    /** ServerConfig userLevel. */
                    public userLevel: number;

                    /**
                     * Creates a new ServerConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerConfig instance
                     */
                    public static create(properties?: v2ray.core.proxy.socks.IServerConfig): v2ray.core.proxy.socks.ServerConfig;

                    /**
                     * Encodes the specified ServerConfig message. Does not implicitly {@link v2ray.core.proxy.socks.ServerConfig.verify|verify} messages.
                     * @param message ServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.socks.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerConfig message, length delimited. Does not implicitly {@link v2ray.core.proxy.socks.ServerConfig.verify|verify} messages.
                     * @param message ServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.socks.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.socks.ServerConfig;

                    /**
                     * Decodes a ServerConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.socks.ServerConfig;

                    /**
                     * Verifies a ServerConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServerConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServerConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.socks.ServerConfig;

                    /**
                     * Creates a plain object from a ServerConfig message. Also converts values to other types if specified.
                     * @param message ServerConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.socks.ServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClientConfig. */
                interface IClientConfig {

                    /** ClientConfig server */
                    server?: (v2ray.core.common.protocol.IServerEndpoint[]|null);
                }

                /** Represents a ClientConfig. */
                class ClientConfig implements IClientConfig {

                    /**
                     * Constructs a new ClientConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.socks.IClientConfig);

                    /** ClientConfig server. */
                    public server: v2ray.core.common.protocol.IServerEndpoint[];

                    /**
                     * Creates a new ClientConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientConfig instance
                     */
                    public static create(properties?: v2ray.core.proxy.socks.IClientConfig): v2ray.core.proxy.socks.ClientConfig;

                    /**
                     * Encodes the specified ClientConfig message. Does not implicitly {@link v2ray.core.proxy.socks.ClientConfig.verify|verify} messages.
                     * @param message ClientConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.socks.IClientConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientConfig message, length delimited. Does not implicitly {@link v2ray.core.proxy.socks.ClientConfig.verify|verify} messages.
                     * @param message ClientConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.socks.IClientConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.socks.ClientConfig;

                    /**
                     * Decodes a ClientConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.socks.ClientConfig;

                    /**
                     * Verifies a ClientConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.socks.ClientConfig;

                    /**
                     * Creates a plain object from a ClientConfig message. Also converts values to other types if specified.
                     * @param message ClientConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.socks.ClientConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace vmess. */
            namespace vmess {

                /** Properties of an Account. */
                interface IAccount {

                    /** Account id */
                    id?: (string|null);

                    /** Account alterId */
                    alterId?: (number|null);

                    /** Account securitySettings */
                    securitySettings?: (v2ray.core.common.protocol.ISecurityConfig|null);
                }

                /** Represents an Account. */
                class Account implements IAccount {

                    /**
                     * Constructs a new Account.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.proxy.vmess.IAccount);

                    /** Account id. */
                    public id: string;

                    /** Account alterId. */
                    public alterId: number;

                    /** Account securitySettings. */
                    public securitySettings?: (v2ray.core.common.protocol.ISecurityConfig|null);

                    /**
                     * Creates a new Account instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Account instance
                     */
                    public static create(properties?: v2ray.core.proxy.vmess.IAccount): v2ray.core.proxy.vmess.Account;

                    /**
                     * Encodes the specified Account message. Does not implicitly {@link v2ray.core.proxy.vmess.Account.verify|verify} messages.
                     * @param message Account message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.proxy.vmess.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Account message, length delimited. Does not implicitly {@link v2ray.core.proxy.vmess.Account.verify|verify} messages.
                     * @param message Account message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.proxy.vmess.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Account message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Account
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.vmess.Account;

                    /**
                     * Decodes an Account message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Account
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.vmess.Account;

                    /**
                     * Verifies an Account message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Account message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Account
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.vmess.Account;

                    /**
                     * Creates a plain object from an Account message. Also converts values to other types if specified.
                     * @param message Account
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.proxy.vmess.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Account to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Namespace inbound. */
                namespace inbound {

                    /** Properties of a DetourConfig. */
                    interface IDetourConfig {

                        /** DetourConfig to */
                        to?: (string|null);
                    }

                    /** Represents a DetourConfig. */
                    class DetourConfig implements IDetourConfig {

                        /**
                         * Constructs a new DetourConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.proxy.vmess.inbound.IDetourConfig);

                        /** DetourConfig to. */
                        public to: string;

                        /**
                         * Creates a new DetourConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DetourConfig instance
                         */
                        public static create(properties?: v2ray.core.proxy.vmess.inbound.IDetourConfig): v2ray.core.proxy.vmess.inbound.DetourConfig;

                        /**
                         * Encodes the specified DetourConfig message. Does not implicitly {@link v2ray.core.proxy.vmess.inbound.DetourConfig.verify|verify} messages.
                         * @param message DetourConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.proxy.vmess.inbound.IDetourConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DetourConfig message, length delimited. Does not implicitly {@link v2ray.core.proxy.vmess.inbound.DetourConfig.verify|verify} messages.
                         * @param message DetourConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.proxy.vmess.inbound.IDetourConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DetourConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DetourConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.vmess.inbound.DetourConfig;

                        /**
                         * Decodes a DetourConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DetourConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.vmess.inbound.DetourConfig;

                        /**
                         * Verifies a DetourConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DetourConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DetourConfig
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.vmess.inbound.DetourConfig;

                        /**
                         * Creates a plain object from a DetourConfig message. Also converts values to other types if specified.
                         * @param message DetourConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.proxy.vmess.inbound.DetourConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DetourConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DefaultConfig. */
                    interface IDefaultConfig {

                        /** DefaultConfig alterId */
                        alterId?: (number|null);

                        /** DefaultConfig level */
                        level?: (number|null);
                    }

                    /** Represents a DefaultConfig. */
                    class DefaultConfig implements IDefaultConfig {

                        /**
                         * Constructs a new DefaultConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.proxy.vmess.inbound.IDefaultConfig);

                        /** DefaultConfig alterId. */
                        public alterId: number;

                        /** DefaultConfig level. */
                        public level: number;

                        /**
                         * Creates a new DefaultConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DefaultConfig instance
                         */
                        public static create(properties?: v2ray.core.proxy.vmess.inbound.IDefaultConfig): v2ray.core.proxy.vmess.inbound.DefaultConfig;

                        /**
                         * Encodes the specified DefaultConfig message. Does not implicitly {@link v2ray.core.proxy.vmess.inbound.DefaultConfig.verify|verify} messages.
                         * @param message DefaultConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.proxy.vmess.inbound.IDefaultConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DefaultConfig message, length delimited. Does not implicitly {@link v2ray.core.proxy.vmess.inbound.DefaultConfig.verify|verify} messages.
                         * @param message DefaultConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.proxy.vmess.inbound.IDefaultConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DefaultConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DefaultConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.vmess.inbound.DefaultConfig;

                        /**
                         * Decodes a DefaultConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DefaultConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.vmess.inbound.DefaultConfig;

                        /**
                         * Verifies a DefaultConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DefaultConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DefaultConfig
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.vmess.inbound.DefaultConfig;

                        /**
                         * Creates a plain object from a DefaultConfig message. Also converts values to other types if specified.
                         * @param message DefaultConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.proxy.vmess.inbound.DefaultConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DefaultConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Config. */
                    interface IConfig {

                        /** Config user */
                        user?: (v2ray.core.common.protocol.IUser[]|null);

                        /** Config default */
                        "default"?: (v2ray.core.proxy.vmess.inbound.IDefaultConfig|null);

                        /** Config detour */
                        detour?: (v2ray.core.proxy.vmess.inbound.IDetourConfig|null);

                        /** Config secureEncryptionOnly */
                        secureEncryptionOnly?: (boolean|null);
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.proxy.vmess.inbound.IConfig);

                        /** Config user. */
                        public user: v2ray.core.common.protocol.IUser[];

                        /** Config default. */
                        public default?: (v2ray.core.proxy.vmess.inbound.IDefaultConfig|null);

                        /** Config detour. */
                        public detour?: (v2ray.core.proxy.vmess.inbound.IDetourConfig|null);

                        /** Config secureEncryptionOnly. */
                        public secureEncryptionOnly: boolean;

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.proxy.vmess.inbound.IConfig): v2ray.core.proxy.vmess.inbound.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.proxy.vmess.inbound.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.proxy.vmess.inbound.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.proxy.vmess.inbound.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.proxy.vmess.inbound.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.vmess.inbound.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.vmess.inbound.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.vmess.inbound.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.proxy.vmess.inbound.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace outbound. */
                namespace outbound {

                    /** Properties of a Config. */
                    interface IConfig {

                        /** Config Receiver */
                        Receiver?: (v2ray.core.common.protocol.IServerEndpoint[]|null);
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.proxy.vmess.outbound.IConfig);

                        /** Config Receiver. */
                        public Receiver: v2ray.core.common.protocol.IServerEndpoint[];

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.proxy.vmess.outbound.IConfig): v2ray.core.proxy.vmess.outbound.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.proxy.vmess.outbound.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.proxy.vmess.outbound.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.proxy.vmess.outbound.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.proxy.vmess.outbound.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.proxy.vmess.outbound.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.proxy.vmess.outbound.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.proxy.vmess.outbound.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.proxy.vmess.outbound.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }

        /** Namespace transport. */
        namespace transport {

            /** Properties of a Config. */
            interface IConfig {

                /** Config transportSettings */
                transportSettings?: (v2ray.core.transport.internet.ITransportConfig[]|null);
            }

            /** Represents a Config. */
            class Config implements IConfig {

                /**
                 * Constructs a new Config.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v2ray.core.transport.IConfig);

                /** Config transportSettings. */
                public transportSettings: v2ray.core.transport.internet.ITransportConfig[];

                /**
                 * Creates a new Config instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Config instance
                 */
                public static create(properties?: v2ray.core.transport.IConfig): v2ray.core.transport.Config;

                /**
                 * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.Config.verify|verify} messages.
                 * @param message Config message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v2ray.core.transport.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.Config.verify|verify} messages.
                 * @param message Config message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v2ray.core.transport.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Config message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Config
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.Config;

                /**
                 * Decodes a Config message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Config
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.Config;

                /**
                 * Verifies a Config message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Config message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Config
                 */
                public static fromObject(object: { [k: string]: any }): v2ray.core.transport.Config;

                /**
                 * Creates a plain object from a Config message. Also converts values to other types if specified.
                 * @param message Config
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v2ray.core.transport.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Config to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Namespace internet. */
            namespace internet {

                /** TransportProtocol enum. */
                enum TransportProtocol {
                    TCP = 0,
                    UDP = 1,
                    MKCP = 2,
                    WebSocket = 3,
                    HTTP = 4,
                    DomainSocket = 5
                }

                /** Properties of a TransportConfig. */
                interface ITransportConfig {

                    /** TransportConfig protocol */
                    protocol?: (v2ray.core.transport.internet.TransportProtocol|null);

                    /** TransportConfig protocolName */
                    protocolName?: (string|null);

                    /** TransportConfig settings */
                    settings?: (v2ray.core.common.serial.ITypedMessage|null);
                }

                /** Represents a TransportConfig. */
                class TransportConfig implements ITransportConfig {

                    /**
                     * Constructs a new TransportConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.transport.internet.ITransportConfig);

                    /** TransportConfig protocol. */
                    public protocol: v2ray.core.transport.internet.TransportProtocol;

                    /** TransportConfig protocolName. */
                    public protocolName: string;

                    /** TransportConfig settings. */
                    public settings?: (v2ray.core.common.serial.ITypedMessage|null);

                    /**
                     * Creates a new TransportConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransportConfig instance
                     */
                    public static create(properties?: v2ray.core.transport.internet.ITransportConfig): v2ray.core.transport.internet.TransportConfig;

                    /**
                     * Encodes the specified TransportConfig message. Does not implicitly {@link v2ray.core.transport.internet.TransportConfig.verify|verify} messages.
                     * @param message TransportConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.transport.internet.ITransportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransportConfig message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.TransportConfig.verify|verify} messages.
                     * @param message TransportConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.transport.internet.ITransportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransportConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransportConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.TransportConfig;

                    /**
                     * Decodes a TransportConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransportConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.TransportConfig;

                    /**
                     * Verifies a TransportConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransportConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransportConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.TransportConfig;

                    /**
                     * Creates a plain object from a TransportConfig message. Also converts values to other types if specified.
                     * @param message TransportConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.transport.internet.TransportConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransportConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StreamConfig. */
                interface IStreamConfig {

                    /** StreamConfig protocol */
                    protocol?: (v2ray.core.transport.internet.TransportProtocol|null);

                    /** StreamConfig protocolName */
                    protocolName?: (string|null);

                    /** StreamConfig transportSettings */
                    transportSettings?: (v2ray.core.transport.internet.ITransportConfig[]|null);

                    /** StreamConfig securityType */
                    securityType?: (string|null);

                    /** StreamConfig securitySettings */
                    securitySettings?: (v2ray.core.common.serial.ITypedMessage[]|null);

                    /** StreamConfig socketSettings */
                    socketSettings?: (v2ray.core.transport.internet.ISocketConfig|null);
                }

                /** Represents a StreamConfig. */
                class StreamConfig implements IStreamConfig {

                    /**
                     * Constructs a new StreamConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.transport.internet.IStreamConfig);

                    /** StreamConfig protocol. */
                    public protocol: v2ray.core.transport.internet.TransportProtocol;

                    /** StreamConfig protocolName. */
                    public protocolName: string;

                    /** StreamConfig transportSettings. */
                    public transportSettings: v2ray.core.transport.internet.ITransportConfig[];

                    /** StreamConfig securityType. */
                    public securityType: string;

                    /** StreamConfig securitySettings. */
                    public securitySettings: v2ray.core.common.serial.ITypedMessage[];

                    /** StreamConfig socketSettings. */
                    public socketSettings?: (v2ray.core.transport.internet.ISocketConfig|null);

                    /**
                     * Creates a new StreamConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamConfig instance
                     */
                    public static create(properties?: v2ray.core.transport.internet.IStreamConfig): v2ray.core.transport.internet.StreamConfig;

                    /**
                     * Encodes the specified StreamConfig message. Does not implicitly {@link v2ray.core.transport.internet.StreamConfig.verify|verify} messages.
                     * @param message StreamConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.transport.internet.IStreamConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamConfig message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.StreamConfig.verify|verify} messages.
                     * @param message StreamConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.transport.internet.IStreamConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.StreamConfig;

                    /**
                     * Decodes a StreamConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.StreamConfig;

                    /**
                     * Verifies a StreamConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.StreamConfig;

                    /**
                     * Creates a plain object from a StreamConfig message. Also converts values to other types if specified.
                     * @param message StreamConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.transport.internet.StreamConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProxyConfig. */
                interface IProxyConfig {

                    /** ProxyConfig tag */
                    tag?: (string|null);
                }

                /** Represents a ProxyConfig. */
                class ProxyConfig implements IProxyConfig {

                    /**
                     * Constructs a new ProxyConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.transport.internet.IProxyConfig);

                    /** ProxyConfig tag. */
                    public tag: string;

                    /**
                     * Creates a new ProxyConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProxyConfig instance
                     */
                    public static create(properties?: v2ray.core.transport.internet.IProxyConfig): v2ray.core.transport.internet.ProxyConfig;

                    /**
                     * Encodes the specified ProxyConfig message. Does not implicitly {@link v2ray.core.transport.internet.ProxyConfig.verify|verify} messages.
                     * @param message ProxyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.transport.internet.IProxyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProxyConfig message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.ProxyConfig.verify|verify} messages.
                     * @param message ProxyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.transport.internet.IProxyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProxyConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProxyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.ProxyConfig;

                    /**
                     * Decodes a ProxyConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProxyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.ProxyConfig;

                    /**
                     * Verifies a ProxyConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProxyConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProxyConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.ProxyConfig;

                    /**
                     * Creates a plain object from a ProxyConfig message. Also converts values to other types if specified.
                     * @param message ProxyConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.transport.internet.ProxyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProxyConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SocketConfig. */
                interface ISocketConfig {

                    /** SocketConfig mark */
                    mark?: (number|null);

                    /** SocketConfig tfo */
                    tfo?: (v2ray.core.transport.internet.SocketConfig.TCPFastOpenState|null);

                    /** SocketConfig tproxy */
                    tproxy?: (v2ray.core.transport.internet.SocketConfig.TProxyMode|null);

                    /** SocketConfig receiveOriginalDestAddress */
                    receiveOriginalDestAddress?: (boolean|null);

                    /** SocketConfig bindAddress */
                    bindAddress?: (Uint8Array|null);

                    /** SocketConfig bindPort */
                    bindPort?: (number|null);
                }

                /** Represents a SocketConfig. */
                class SocketConfig implements ISocketConfig {

                    /**
                     * Constructs a new SocketConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: v2ray.core.transport.internet.ISocketConfig);

                    /** SocketConfig mark. */
                    public mark: number;

                    /** SocketConfig tfo. */
                    public tfo: v2ray.core.transport.internet.SocketConfig.TCPFastOpenState;

                    /** SocketConfig tproxy. */
                    public tproxy: v2ray.core.transport.internet.SocketConfig.TProxyMode;

                    /** SocketConfig receiveOriginalDestAddress. */
                    public receiveOriginalDestAddress: boolean;

                    /** SocketConfig bindAddress. */
                    public bindAddress: Uint8Array;

                    /** SocketConfig bindPort. */
                    public bindPort: number;

                    /**
                     * Creates a new SocketConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SocketConfig instance
                     */
                    public static create(properties?: v2ray.core.transport.internet.ISocketConfig): v2ray.core.transport.internet.SocketConfig;

                    /**
                     * Encodes the specified SocketConfig message. Does not implicitly {@link v2ray.core.transport.internet.SocketConfig.verify|verify} messages.
                     * @param message SocketConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: v2ray.core.transport.internet.ISocketConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SocketConfig message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.SocketConfig.verify|verify} messages.
                     * @param message SocketConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: v2ray.core.transport.internet.ISocketConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SocketConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SocketConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.SocketConfig;

                    /**
                     * Decodes a SocketConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SocketConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.SocketConfig;

                    /**
                     * Verifies a SocketConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SocketConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SocketConfig
                     */
                    public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.SocketConfig;

                    /**
                     * Creates a plain object from a SocketConfig message. Also converts values to other types if specified.
                     * @param message SocketConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: v2ray.core.transport.internet.SocketConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SocketConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SocketConfig {

                    /** TCPFastOpenState enum. */
                    enum TCPFastOpenState {
                        AsIs = 0,
                        Enable = 1,
                        Disable = 2
                    }

                    /** TProxyMode enum. */
                    enum TProxyMode {
                        Off = 0,
                        TProxy = 1,
                        Redirect = 2
                    }
                }

                /** Namespace domainsocket. */
                namespace domainsocket {

                    /** Properties of a Config. */
                    interface IConfig {

                        /** Config path */
                        path?: (string|null);

                        /** Config abstract */
                        abstract?: (boolean|null);
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.domainsocket.IConfig);

                        /** Config path. */
                        public path: string;

                        /** Config abstract. */
                        public abstract: boolean;

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.domainsocket.IConfig): v2ray.core.transport.internet.domainsocket.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.domainsocket.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.domainsocket.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.domainsocket.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.domainsocket.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.domainsocket.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.domainsocket.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.domainsocket.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.domainsocket.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace headers. */
                namespace headers {

                    /** Namespace http. */
                    namespace http {

                        /** Properties of a Header. */
                        interface IHeader {

                            /** Header name */
                            name?: (string|null);

                            /** Header value */
                            value?: (string[]|null);
                        }

                        /** Represents a Header. */
                        class Header implements IHeader {

                            /**
                             * Constructs a new Header.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.http.IHeader);

                            /** Header name. */
                            public name: string;

                            /** Header value. */
                            public value: string[];

                            /**
                             * Creates a new Header instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Header instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.http.IHeader): v2ray.core.transport.internet.headers.http.Header;

                            /**
                             * Encodes the specified Header message. Does not implicitly {@link v2ray.core.transport.internet.headers.http.Header.verify|verify} messages.
                             * @param message Header message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.http.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Header message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.http.Header.verify|verify} messages.
                             * @param message Header message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.http.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Header message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Header
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.http.Header;

                            /**
                             * Decodes a Header message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Header
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.http.Header;

                            /**
                             * Verifies a Header message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Header message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Header
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.http.Header;

                            /**
                             * Creates a plain object from a Header message. Also converts values to other types if specified.
                             * @param message Header
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.http.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Header to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Version. */
                        interface IVersion {

                            /** Version value */
                            value?: (string|null);
                        }

                        /** Represents a Version. */
                        class Version implements IVersion {

                            /**
                             * Constructs a new Version.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.http.IVersion);

                            /** Version value. */
                            public value: string;

                            /**
                             * Creates a new Version instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Version instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.http.IVersion): v2ray.core.transport.internet.headers.http.Version;

                            /**
                             * Encodes the specified Version message. Does not implicitly {@link v2ray.core.transport.internet.headers.http.Version.verify|verify} messages.
                             * @param message Version message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.http.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Version message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.http.Version.verify|verify} messages.
                             * @param message Version message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.http.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Version message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Version
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.http.Version;

                            /**
                             * Decodes a Version message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Version
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.http.Version;

                            /**
                             * Verifies a Version message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Version message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Version
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.http.Version;

                            /**
                             * Creates a plain object from a Version message. Also converts values to other types if specified.
                             * @param message Version
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.http.Version, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Version to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Method. */
                        interface IMethod {

                            /** Method value */
                            value?: (string|null);
                        }

                        /** Represents a Method. */
                        class Method implements IMethod {

                            /**
                             * Constructs a new Method.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.http.IMethod);

                            /** Method value. */
                            public value: string;

                            /**
                             * Creates a new Method instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Method instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.http.IMethod): v2ray.core.transport.internet.headers.http.Method;

                            /**
                             * Encodes the specified Method message. Does not implicitly {@link v2ray.core.transport.internet.headers.http.Method.verify|verify} messages.
                             * @param message Method message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.http.IMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Method message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.http.Method.verify|verify} messages.
                             * @param message Method message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.http.IMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Method message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Method
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.http.Method;

                            /**
                             * Decodes a Method message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Method
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.http.Method;

                            /**
                             * Verifies a Method message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Method message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Method
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.http.Method;

                            /**
                             * Creates a plain object from a Method message. Also converts values to other types if specified.
                             * @param message Method
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.http.Method, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Method to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a RequestConfig. */
                        interface IRequestConfig {

                            /** RequestConfig version */
                            version?: (v2ray.core.transport.internet.headers.http.IVersion|null);

                            /** RequestConfig method */
                            method?: (v2ray.core.transport.internet.headers.http.IMethod|null);

                            /** RequestConfig uri */
                            uri?: (string[]|null);

                            /** RequestConfig header */
                            header?: (v2ray.core.transport.internet.headers.http.IHeader[]|null);
                        }

                        /** Represents a RequestConfig. */
                        class RequestConfig implements IRequestConfig {

                            /**
                             * Constructs a new RequestConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.http.IRequestConfig);

                            /** RequestConfig version. */
                            public version?: (v2ray.core.transport.internet.headers.http.IVersion|null);

                            /** RequestConfig method. */
                            public method?: (v2ray.core.transport.internet.headers.http.IMethod|null);

                            /** RequestConfig uri. */
                            public uri: string[];

                            /** RequestConfig header. */
                            public header: v2ray.core.transport.internet.headers.http.IHeader[];

                            /**
                             * Creates a new RequestConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RequestConfig instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.http.IRequestConfig): v2ray.core.transport.internet.headers.http.RequestConfig;

                            /**
                             * Encodes the specified RequestConfig message. Does not implicitly {@link v2ray.core.transport.internet.headers.http.RequestConfig.verify|verify} messages.
                             * @param message RequestConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.http.IRequestConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RequestConfig message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.http.RequestConfig.verify|verify} messages.
                             * @param message RequestConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.http.IRequestConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RequestConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RequestConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.http.RequestConfig;

                            /**
                             * Decodes a RequestConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RequestConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.http.RequestConfig;

                            /**
                             * Verifies a RequestConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RequestConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RequestConfig
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.http.RequestConfig;

                            /**
                             * Creates a plain object from a RequestConfig message. Also converts values to other types if specified.
                             * @param message RequestConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.http.RequestConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RequestConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Status. */
                        interface IStatus {

                            /** Status code */
                            code?: (string|null);

                            /** Status reason */
                            reason?: (string|null);
                        }

                        /** Represents a Status. */
                        class Status implements IStatus {

                            /**
                             * Constructs a new Status.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.http.IStatus);

                            /** Status code. */
                            public code: string;

                            /** Status reason. */
                            public reason: string;

                            /**
                             * Creates a new Status instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Status instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.http.IStatus): v2ray.core.transport.internet.headers.http.Status;

                            /**
                             * Encodes the specified Status message. Does not implicitly {@link v2ray.core.transport.internet.headers.http.Status.verify|verify} messages.
                             * @param message Status message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.http.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Status message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.http.Status.verify|verify} messages.
                             * @param message Status message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.http.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Status message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Status
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.http.Status;

                            /**
                             * Decodes a Status message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Status
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.http.Status;

                            /**
                             * Verifies a Status message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Status message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Status
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.http.Status;

                            /**
                             * Creates a plain object from a Status message. Also converts values to other types if specified.
                             * @param message Status
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.http.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Status to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ResponseConfig. */
                        interface IResponseConfig {

                            /** ResponseConfig version */
                            version?: (v2ray.core.transport.internet.headers.http.IVersion|null);

                            /** ResponseConfig status */
                            status?: (v2ray.core.transport.internet.headers.http.IStatus|null);

                            /** ResponseConfig header */
                            header?: (v2ray.core.transport.internet.headers.http.IHeader[]|null);
                        }

                        /** Represents a ResponseConfig. */
                        class ResponseConfig implements IResponseConfig {

                            /**
                             * Constructs a new ResponseConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.http.IResponseConfig);

                            /** ResponseConfig version. */
                            public version?: (v2ray.core.transport.internet.headers.http.IVersion|null);

                            /** ResponseConfig status. */
                            public status?: (v2ray.core.transport.internet.headers.http.IStatus|null);

                            /** ResponseConfig header. */
                            public header: v2ray.core.transport.internet.headers.http.IHeader[];

                            /**
                             * Creates a new ResponseConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ResponseConfig instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.http.IResponseConfig): v2ray.core.transport.internet.headers.http.ResponseConfig;

                            /**
                             * Encodes the specified ResponseConfig message. Does not implicitly {@link v2ray.core.transport.internet.headers.http.ResponseConfig.verify|verify} messages.
                             * @param message ResponseConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.http.IResponseConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ResponseConfig message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.http.ResponseConfig.verify|verify} messages.
                             * @param message ResponseConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.http.IResponseConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ResponseConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ResponseConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.http.ResponseConfig;

                            /**
                             * Decodes a ResponseConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ResponseConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.http.ResponseConfig;

                            /**
                             * Verifies a ResponseConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ResponseConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ResponseConfig
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.http.ResponseConfig;

                            /**
                             * Creates a plain object from a ResponseConfig message. Also converts values to other types if specified.
                             * @param message ResponseConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.http.ResponseConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ResponseConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Config. */
                        interface IConfig {

                            /** Config request */
                            request?: (v2ray.core.transport.internet.headers.http.IRequestConfig|null);

                            /** Config response */
                            response?: (v2ray.core.transport.internet.headers.http.IResponseConfig|null);
                        }

                        /** Represents a Config. */
                        class Config implements IConfig {

                            /**
                             * Constructs a new Config.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.http.IConfig);

                            /** Config request. */
                            public request?: (v2ray.core.transport.internet.headers.http.IRequestConfig|null);

                            /** Config response. */
                            public response?: (v2ray.core.transport.internet.headers.http.IResponseConfig|null);

                            /**
                             * Creates a new Config instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Config instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.http.IConfig): v2ray.core.transport.internet.headers.http.Config;

                            /**
                             * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.headers.http.Config.verify|verify} messages.
                             * @param message Config message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.http.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.http.Config.verify|verify} messages.
                             * @param message Config message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.http.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Config message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Config
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.http.Config;

                            /**
                             * Decodes a Config message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Config
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.http.Config;

                            /**
                             * Verifies a Config message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Config message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Config
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.http.Config;

                            /**
                             * Creates a plain object from a Config message. Also converts values to other types if specified.
                             * @param message Config
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.http.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Config to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Namespace noop. */
                    namespace noop {

                        /** Properties of a Config. */
                        interface IConfig {
                        }

                        /** Represents a Config. */
                        class Config implements IConfig {

                            /**
                             * Constructs a new Config.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.noop.IConfig);

                            /**
                             * Creates a new Config instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Config instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.noop.IConfig): v2ray.core.transport.internet.headers.noop.Config;

                            /**
                             * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.headers.noop.Config.verify|verify} messages.
                             * @param message Config message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.noop.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.noop.Config.verify|verify} messages.
                             * @param message Config message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.noop.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Config message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Config
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.noop.Config;

                            /**
                             * Decodes a Config message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Config
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.noop.Config;

                            /**
                             * Verifies a Config message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Config message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Config
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.noop.Config;

                            /**
                             * Creates a plain object from a Config message. Also converts values to other types if specified.
                             * @param message Config
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.noop.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Config to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ConnectionConfig. */
                        interface IConnectionConfig {
                        }

                        /** Represents a ConnectionConfig. */
                        class ConnectionConfig implements IConnectionConfig {

                            /**
                             * Constructs a new ConnectionConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.noop.IConnectionConfig);

                            /**
                             * Creates a new ConnectionConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ConnectionConfig instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.noop.IConnectionConfig): v2ray.core.transport.internet.headers.noop.ConnectionConfig;

                            /**
                             * Encodes the specified ConnectionConfig message. Does not implicitly {@link v2ray.core.transport.internet.headers.noop.ConnectionConfig.verify|verify} messages.
                             * @param message ConnectionConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.noop.IConnectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ConnectionConfig message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.noop.ConnectionConfig.verify|verify} messages.
                             * @param message ConnectionConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.noop.IConnectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ConnectionConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ConnectionConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.noop.ConnectionConfig;

                            /**
                             * Decodes a ConnectionConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ConnectionConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.noop.ConnectionConfig;

                            /**
                             * Verifies a ConnectionConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ConnectionConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ConnectionConfig
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.noop.ConnectionConfig;

                            /**
                             * Creates a plain object from a ConnectionConfig message. Also converts values to other types if specified.
                             * @param message ConnectionConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.noop.ConnectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ConnectionConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Namespace srtp. */
                    namespace srtp {

                        /** Properties of a Config. */
                        interface IConfig {

                            /** Config version */
                            version?: (number|null);

                            /** Config padding */
                            padding?: (boolean|null);

                            /** Config extension */
                            extension?: (boolean|null);

                            /** Config csrcCount */
                            csrcCount?: (number|null);

                            /** Config marker */
                            marker?: (boolean|null);

                            /** Config payloadType */
                            payloadType?: (number|null);
                        }

                        /** Represents a Config. */
                        class Config implements IConfig {

                            /**
                             * Constructs a new Config.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.srtp.IConfig);

                            /** Config version. */
                            public version: number;

                            /** Config padding. */
                            public padding: boolean;

                            /** Config extension. */
                            public extension: boolean;

                            /** Config csrcCount. */
                            public csrcCount: number;

                            /** Config marker. */
                            public marker: boolean;

                            /** Config payloadType. */
                            public payloadType: number;

                            /**
                             * Creates a new Config instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Config instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.srtp.IConfig): v2ray.core.transport.internet.headers.srtp.Config;

                            /**
                             * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.headers.srtp.Config.verify|verify} messages.
                             * @param message Config message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.srtp.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.srtp.Config.verify|verify} messages.
                             * @param message Config message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.srtp.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Config message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Config
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.srtp.Config;

                            /**
                             * Decodes a Config message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Config
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.srtp.Config;

                            /**
                             * Verifies a Config message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Config message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Config
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.srtp.Config;

                            /**
                             * Creates a plain object from a Config message. Also converts values to other types if specified.
                             * @param message Config
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.srtp.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Config to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Namespace tls. */
                    namespace tls {

                        /** Properties of a PacketConfig. */
                        interface IPacketConfig {
                        }

                        /** Represents a PacketConfig. */
                        class PacketConfig implements IPacketConfig {

                            /**
                             * Constructs a new PacketConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.tls.IPacketConfig);

                            /**
                             * Creates a new PacketConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PacketConfig instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.tls.IPacketConfig): v2ray.core.transport.internet.headers.tls.PacketConfig;

                            /**
                             * Encodes the specified PacketConfig message. Does not implicitly {@link v2ray.core.transport.internet.headers.tls.PacketConfig.verify|verify} messages.
                             * @param message PacketConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.tls.IPacketConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PacketConfig message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.tls.PacketConfig.verify|verify} messages.
                             * @param message PacketConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.tls.IPacketConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PacketConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PacketConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.tls.PacketConfig;

                            /**
                             * Decodes a PacketConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PacketConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.tls.PacketConfig;

                            /**
                             * Verifies a PacketConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PacketConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PacketConfig
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.tls.PacketConfig;

                            /**
                             * Creates a plain object from a PacketConfig message. Also converts values to other types if specified.
                             * @param message PacketConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.tls.PacketConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PacketConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Namespace utp. */
                    namespace utp {

                        /** Properties of a Config. */
                        interface IConfig {

                            /** Config version */
                            version?: (number|null);
                        }

                        /** Represents a Config. */
                        class Config implements IConfig {

                            /**
                             * Constructs a new Config.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.utp.IConfig);

                            /** Config version. */
                            public version: number;

                            /**
                             * Creates a new Config instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Config instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.utp.IConfig): v2ray.core.transport.internet.headers.utp.Config;

                            /**
                             * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.headers.utp.Config.verify|verify} messages.
                             * @param message Config message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.utp.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.utp.Config.verify|verify} messages.
                             * @param message Config message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.utp.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Config message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Config
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.utp.Config;

                            /**
                             * Decodes a Config message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Config
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.utp.Config;

                            /**
                             * Verifies a Config message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Config message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Config
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.utp.Config;

                            /**
                             * Creates a plain object from a Config message. Also converts values to other types if specified.
                             * @param message Config
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.utp.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Config to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Namespace wechat. */
                    namespace wechat {

                        /** Properties of a VideoConfig. */
                        interface IVideoConfig {
                        }

                        /** Represents a VideoConfig. */
                        class VideoConfig implements IVideoConfig {

                            /**
                             * Constructs a new VideoConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.wechat.IVideoConfig);

                            /**
                             * Creates a new VideoConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns VideoConfig instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.wechat.IVideoConfig): v2ray.core.transport.internet.headers.wechat.VideoConfig;

                            /**
                             * Encodes the specified VideoConfig message. Does not implicitly {@link v2ray.core.transport.internet.headers.wechat.VideoConfig.verify|verify} messages.
                             * @param message VideoConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.wechat.IVideoConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified VideoConfig message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.wechat.VideoConfig.verify|verify} messages.
                             * @param message VideoConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.wechat.IVideoConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a VideoConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns VideoConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.wechat.VideoConfig;

                            /**
                             * Decodes a VideoConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns VideoConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.wechat.VideoConfig;

                            /**
                             * Verifies a VideoConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a VideoConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns VideoConfig
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.wechat.VideoConfig;

                            /**
                             * Creates a plain object from a VideoConfig message. Also converts values to other types if specified.
                             * @param message VideoConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.wechat.VideoConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this VideoConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Namespace wireguard. */
                    namespace wireguard {

                        /** Properties of a WireguardConfig. */
                        interface IWireguardConfig {
                        }

                        /** Represents a WireguardConfig. */
                        class WireguardConfig implements IWireguardConfig {

                            /**
                             * Constructs a new WireguardConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: v2ray.core.transport.internet.headers.wireguard.IWireguardConfig);

                            /**
                             * Creates a new WireguardConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns WireguardConfig instance
                             */
                            public static create(properties?: v2ray.core.transport.internet.headers.wireguard.IWireguardConfig): v2ray.core.transport.internet.headers.wireguard.WireguardConfig;

                            /**
                             * Encodes the specified WireguardConfig message. Does not implicitly {@link v2ray.core.transport.internet.headers.wireguard.WireguardConfig.verify|verify} messages.
                             * @param message WireguardConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: v2ray.core.transport.internet.headers.wireguard.IWireguardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified WireguardConfig message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.headers.wireguard.WireguardConfig.verify|verify} messages.
                             * @param message WireguardConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: v2ray.core.transport.internet.headers.wireguard.IWireguardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a WireguardConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns WireguardConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.headers.wireguard.WireguardConfig;

                            /**
                             * Decodes a WireguardConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns WireguardConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.headers.wireguard.WireguardConfig;

                            /**
                             * Verifies a WireguardConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a WireguardConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns WireguardConfig
                             */
                            public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.headers.wireguard.WireguardConfig;

                            /**
                             * Creates a plain object from a WireguardConfig message. Also converts values to other types if specified.
                             * @param message WireguardConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: v2ray.core.transport.internet.headers.wireguard.WireguardConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this WireguardConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Namespace http. */
                namespace http {

                    /** Properties of a Config. */
                    interface IConfig {

                        /** Config host */
                        host?: (string[]|null);

                        /** Config path */
                        path?: (string|null);
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.http.IConfig);

                        /** Config host. */
                        public host: string[];

                        /** Config path. */
                        public path: string;

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.http.IConfig): v2ray.core.transport.internet.http.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.http.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.http.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.http.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.http.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.http.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.http.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.http.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.http.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace kcp. */
                namespace kcp {

                    /** Properties of a MTU. */
                    interface IMTU {

                        /** MTU value */
                        value?: (number|null);
                    }

                    /** Represents a MTU. */
                    class MTU implements IMTU {

                        /**
                         * Constructs a new MTU.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.kcp.IMTU);

                        /** MTU value. */
                        public value: number;

                        /**
                         * Creates a new MTU instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MTU instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.kcp.IMTU): v2ray.core.transport.internet.kcp.MTU;

                        /**
                         * Encodes the specified MTU message. Does not implicitly {@link v2ray.core.transport.internet.kcp.MTU.verify|verify} messages.
                         * @param message MTU message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.kcp.IMTU, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MTU message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.kcp.MTU.verify|verify} messages.
                         * @param message MTU message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.kcp.IMTU, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MTU message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MTU
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.kcp.MTU;

                        /**
                         * Decodes a MTU message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MTU
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.kcp.MTU;

                        /**
                         * Verifies a MTU message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MTU message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MTU
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.kcp.MTU;

                        /**
                         * Creates a plain object from a MTU message. Also converts values to other types if specified.
                         * @param message MTU
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.kcp.MTU, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MTU to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a TTI. */
                    interface ITTI {

                        /** TTI value */
                        value?: (number|null);
                    }

                    /** Represents a TTI. */
                    class TTI implements ITTI {

                        /**
                         * Constructs a new TTI.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.kcp.ITTI);

                        /** TTI value. */
                        public value: number;

                        /**
                         * Creates a new TTI instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TTI instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.kcp.ITTI): v2ray.core.transport.internet.kcp.TTI;

                        /**
                         * Encodes the specified TTI message. Does not implicitly {@link v2ray.core.transport.internet.kcp.TTI.verify|verify} messages.
                         * @param message TTI message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.kcp.ITTI, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TTI message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.kcp.TTI.verify|verify} messages.
                         * @param message TTI message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.kcp.ITTI, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TTI message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TTI
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.kcp.TTI;

                        /**
                         * Decodes a TTI message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TTI
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.kcp.TTI;

                        /**
                         * Verifies a TTI message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TTI message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TTI
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.kcp.TTI;

                        /**
                         * Creates a plain object from a TTI message. Also converts values to other types if specified.
                         * @param message TTI
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.kcp.TTI, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TTI to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UplinkCapacity. */
                    interface IUplinkCapacity {

                        /** UplinkCapacity value */
                        value?: (number|null);
                    }

                    /** Represents an UplinkCapacity. */
                    class UplinkCapacity implements IUplinkCapacity {

                        /**
                         * Constructs a new UplinkCapacity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.kcp.IUplinkCapacity);

                        /** UplinkCapacity value. */
                        public value: number;

                        /**
                         * Creates a new UplinkCapacity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UplinkCapacity instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.kcp.IUplinkCapacity): v2ray.core.transport.internet.kcp.UplinkCapacity;

                        /**
                         * Encodes the specified UplinkCapacity message. Does not implicitly {@link v2ray.core.transport.internet.kcp.UplinkCapacity.verify|verify} messages.
                         * @param message UplinkCapacity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.kcp.IUplinkCapacity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UplinkCapacity message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.kcp.UplinkCapacity.verify|verify} messages.
                         * @param message UplinkCapacity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.kcp.IUplinkCapacity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UplinkCapacity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UplinkCapacity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.kcp.UplinkCapacity;

                        /**
                         * Decodes an UplinkCapacity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UplinkCapacity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.kcp.UplinkCapacity;

                        /**
                         * Verifies an UplinkCapacity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UplinkCapacity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UplinkCapacity
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.kcp.UplinkCapacity;

                        /**
                         * Creates a plain object from an UplinkCapacity message. Also converts values to other types if specified.
                         * @param message UplinkCapacity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.kcp.UplinkCapacity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UplinkCapacity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DownlinkCapacity. */
                    interface IDownlinkCapacity {

                        /** DownlinkCapacity value */
                        value?: (number|null);
                    }

                    /** Represents a DownlinkCapacity. */
                    class DownlinkCapacity implements IDownlinkCapacity {

                        /**
                         * Constructs a new DownlinkCapacity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.kcp.IDownlinkCapacity);

                        /** DownlinkCapacity value. */
                        public value: number;

                        /**
                         * Creates a new DownlinkCapacity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DownlinkCapacity instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.kcp.IDownlinkCapacity): v2ray.core.transport.internet.kcp.DownlinkCapacity;

                        /**
                         * Encodes the specified DownlinkCapacity message. Does not implicitly {@link v2ray.core.transport.internet.kcp.DownlinkCapacity.verify|verify} messages.
                         * @param message DownlinkCapacity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.kcp.IDownlinkCapacity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DownlinkCapacity message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.kcp.DownlinkCapacity.verify|verify} messages.
                         * @param message DownlinkCapacity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.kcp.IDownlinkCapacity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DownlinkCapacity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DownlinkCapacity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.kcp.DownlinkCapacity;

                        /**
                         * Decodes a DownlinkCapacity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DownlinkCapacity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.kcp.DownlinkCapacity;

                        /**
                         * Verifies a DownlinkCapacity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DownlinkCapacity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DownlinkCapacity
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.kcp.DownlinkCapacity;

                        /**
                         * Creates a plain object from a DownlinkCapacity message. Also converts values to other types if specified.
                         * @param message DownlinkCapacity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.kcp.DownlinkCapacity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DownlinkCapacity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a WriteBuffer. */
                    interface IWriteBuffer {

                        /** WriteBuffer size */
                        size?: (number|null);
                    }

                    /** Represents a WriteBuffer. */
                    class WriteBuffer implements IWriteBuffer {

                        /**
                         * Constructs a new WriteBuffer.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.kcp.IWriteBuffer);

                        /** WriteBuffer size. */
                        public size: number;

                        /**
                         * Creates a new WriteBuffer instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WriteBuffer instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.kcp.IWriteBuffer): v2ray.core.transport.internet.kcp.WriteBuffer;

                        /**
                         * Encodes the specified WriteBuffer message. Does not implicitly {@link v2ray.core.transport.internet.kcp.WriteBuffer.verify|verify} messages.
                         * @param message WriteBuffer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.kcp.IWriteBuffer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WriteBuffer message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.kcp.WriteBuffer.verify|verify} messages.
                         * @param message WriteBuffer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.kcp.IWriteBuffer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WriteBuffer message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WriteBuffer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.kcp.WriteBuffer;

                        /**
                         * Decodes a WriteBuffer message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WriteBuffer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.kcp.WriteBuffer;

                        /**
                         * Verifies a WriteBuffer message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WriteBuffer message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WriteBuffer
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.kcp.WriteBuffer;

                        /**
                         * Creates a plain object from a WriteBuffer message. Also converts values to other types if specified.
                         * @param message WriteBuffer
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.kcp.WriteBuffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WriteBuffer to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ReadBuffer. */
                    interface IReadBuffer {

                        /** ReadBuffer size */
                        size?: (number|null);
                    }

                    /** Represents a ReadBuffer. */
                    class ReadBuffer implements IReadBuffer {

                        /**
                         * Constructs a new ReadBuffer.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.kcp.IReadBuffer);

                        /** ReadBuffer size. */
                        public size: number;

                        /**
                         * Creates a new ReadBuffer instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadBuffer instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.kcp.IReadBuffer): v2ray.core.transport.internet.kcp.ReadBuffer;

                        /**
                         * Encodes the specified ReadBuffer message. Does not implicitly {@link v2ray.core.transport.internet.kcp.ReadBuffer.verify|verify} messages.
                         * @param message ReadBuffer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.kcp.IReadBuffer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReadBuffer message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.kcp.ReadBuffer.verify|verify} messages.
                         * @param message ReadBuffer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.kcp.IReadBuffer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadBuffer message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadBuffer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.kcp.ReadBuffer;

                        /**
                         * Decodes a ReadBuffer message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReadBuffer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.kcp.ReadBuffer;

                        /**
                         * Verifies a ReadBuffer message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReadBuffer message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReadBuffer
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.kcp.ReadBuffer;

                        /**
                         * Creates a plain object from a ReadBuffer message. Also converts values to other types if specified.
                         * @param message ReadBuffer
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.kcp.ReadBuffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReadBuffer to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ConnectionReuse. */
                    interface IConnectionReuse {

                        /** ConnectionReuse enable */
                        enable?: (boolean|null);
                    }

                    /** Represents a ConnectionReuse. */
                    class ConnectionReuse implements IConnectionReuse {

                        /**
                         * Constructs a new ConnectionReuse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.kcp.IConnectionReuse);

                        /** ConnectionReuse enable. */
                        public enable: boolean;

                        /**
                         * Creates a new ConnectionReuse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConnectionReuse instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.kcp.IConnectionReuse): v2ray.core.transport.internet.kcp.ConnectionReuse;

                        /**
                         * Encodes the specified ConnectionReuse message. Does not implicitly {@link v2ray.core.transport.internet.kcp.ConnectionReuse.verify|verify} messages.
                         * @param message ConnectionReuse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.kcp.IConnectionReuse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConnectionReuse message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.kcp.ConnectionReuse.verify|verify} messages.
                         * @param message ConnectionReuse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.kcp.IConnectionReuse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConnectionReuse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConnectionReuse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.kcp.ConnectionReuse;

                        /**
                         * Decodes a ConnectionReuse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConnectionReuse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.kcp.ConnectionReuse;

                        /**
                         * Verifies a ConnectionReuse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConnectionReuse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConnectionReuse
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.kcp.ConnectionReuse;

                        /**
                         * Creates a plain object from a ConnectionReuse message. Also converts values to other types if specified.
                         * @param message ConnectionReuse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.kcp.ConnectionReuse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConnectionReuse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Config. */
                    interface IConfig {

                        /** Config mtu */
                        mtu?: (v2ray.core.transport.internet.kcp.IMTU|null);

                        /** Config tti */
                        tti?: (v2ray.core.transport.internet.kcp.ITTI|null);

                        /** Config uplinkCapacity */
                        uplinkCapacity?: (v2ray.core.transport.internet.kcp.IUplinkCapacity|null);

                        /** Config downlinkCapacity */
                        downlinkCapacity?: (v2ray.core.transport.internet.kcp.IDownlinkCapacity|null);

                        /** Config congestion */
                        congestion?: (boolean|null);

                        /** Config writeBuffer */
                        writeBuffer?: (v2ray.core.transport.internet.kcp.IWriteBuffer|null);

                        /** Config readBuffer */
                        readBuffer?: (v2ray.core.transport.internet.kcp.IReadBuffer|null);

                        /** Config headerConfig */
                        headerConfig?: (v2ray.core.common.serial.ITypedMessage|null);
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.kcp.IConfig);

                        /** Config mtu. */
                        public mtu?: (v2ray.core.transport.internet.kcp.IMTU|null);

                        /** Config tti. */
                        public tti?: (v2ray.core.transport.internet.kcp.ITTI|null);

                        /** Config uplinkCapacity. */
                        public uplinkCapacity?: (v2ray.core.transport.internet.kcp.IUplinkCapacity|null);

                        /** Config downlinkCapacity. */
                        public downlinkCapacity?: (v2ray.core.transport.internet.kcp.IDownlinkCapacity|null);

                        /** Config congestion. */
                        public congestion: boolean;

                        /** Config writeBuffer. */
                        public writeBuffer?: (v2ray.core.transport.internet.kcp.IWriteBuffer|null);

                        /** Config readBuffer. */
                        public readBuffer?: (v2ray.core.transport.internet.kcp.IReadBuffer|null);

                        /** Config headerConfig. */
                        public headerConfig?: (v2ray.core.common.serial.ITypedMessage|null);

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.kcp.IConfig): v2ray.core.transport.internet.kcp.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.kcp.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.kcp.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.kcp.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.kcp.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.kcp.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.kcp.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.kcp.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.kcp.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace quic. */
                namespace quic {

                    /** Properties of a Config. */
                    interface IConfig {

                        /** Config key */
                        key?: (string|null);

                        /** Config security */
                        security?: (v2ray.core.common.protocol.ISecurityConfig|null);

                        /** Config header */
                        header?: (v2ray.core.common.serial.ITypedMessage|null);
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.quic.IConfig);

                        /** Config key. */
                        public key: string;

                        /** Config security. */
                        public security?: (v2ray.core.common.protocol.ISecurityConfig|null);

                        /** Config header. */
                        public header?: (v2ray.core.common.serial.ITypedMessage|null);

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.quic.IConfig): v2ray.core.transport.internet.quic.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.quic.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.quic.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.quic.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.quic.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.quic.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.quic.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.quic.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.quic.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace tcp. */
                namespace tcp {

                    /** Properties of a Config. */
                    interface IConfig {

                        /** Config headerSettings */
                        headerSettings?: (v2ray.core.common.serial.ITypedMessage|null);
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.tcp.IConfig);

                        /** Config headerSettings. */
                        public headerSettings?: (v2ray.core.common.serial.ITypedMessage|null);

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.tcp.IConfig): v2ray.core.transport.internet.tcp.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.tcp.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.tcp.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.tcp.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.tcp.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.tcp.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.tcp.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.tcp.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.tcp.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace tls. */
                namespace tls {

                    /** Properties of a Certificate. */
                    interface ICertificate {

                        /** Certificate Certificate */
                        Certificate?: (Uint8Array|null);

                        /** Certificate Key */
                        Key?: (Uint8Array|null);

                        /** Certificate usage */
                        usage?: (v2ray.core.transport.internet.tls.Certificate.Usage|null);
                    }

                    /** Represents a Certificate. */
                    class Certificate implements ICertificate {

                        /**
                         * Constructs a new Certificate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.tls.ICertificate);

                        /** Certificate Certificate. */
                        public Certificate: Uint8Array;

                        /** Certificate Key. */
                        public Key: Uint8Array;

                        /** Certificate usage. */
                        public usage: v2ray.core.transport.internet.tls.Certificate.Usage;

                        /**
                         * Creates a new Certificate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Certificate instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.tls.ICertificate): v2ray.core.transport.internet.tls.Certificate;

                        /**
                         * Encodes the specified Certificate message. Does not implicitly {@link v2ray.core.transport.internet.tls.Certificate.verify|verify} messages.
                         * @param message Certificate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.tls.ICertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Certificate message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.tls.Certificate.verify|verify} messages.
                         * @param message Certificate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.tls.ICertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Certificate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Certificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.tls.Certificate;

                        /**
                         * Decodes a Certificate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Certificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.tls.Certificate;

                        /**
                         * Verifies a Certificate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Certificate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Certificate
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.tls.Certificate;

                        /**
                         * Creates a plain object from a Certificate message. Also converts values to other types if specified.
                         * @param message Certificate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.tls.Certificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Certificate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Certificate {

                        /** Usage enum. */
                        enum Usage {
                            ENCIPHERMENT = 0,
                            AUTHORITY_VERIFY = 1,
                            AUTHORITY_ISSUE = 2
                        }
                    }

                    /** Properties of a Config. */
                    interface IConfig {

                        /** Config allowInsecure */
                        allowInsecure?: (boolean|null);

                        /** Config allowInsecureCiphers */
                        allowInsecureCiphers?: (boolean|null);

                        /** Config certificate */
                        certificate?: (v2ray.core.transport.internet.tls.ICertificate[]|null);

                        /** Config serverName */
                        serverName?: (string|null);

                        /** Config nextProtocol */
                        nextProtocol?: (string[]|null);

                        /** Config disableSessionResumption */
                        disableSessionResumption?: (boolean|null);

                        /** Config disableSystemRoot */
                        disableSystemRoot?: (boolean|null);
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.tls.IConfig);

                        /** Config allowInsecure. */
                        public allowInsecure: boolean;

                        /** Config allowInsecureCiphers. */
                        public allowInsecureCiphers: boolean;

                        /** Config certificate. */
                        public certificate: v2ray.core.transport.internet.tls.ICertificate[];

                        /** Config serverName. */
                        public serverName: string;

                        /** Config nextProtocol. */
                        public nextProtocol: string[];

                        /** Config disableSessionResumption. */
                        public disableSessionResumption: boolean;

                        /** Config disableSystemRoot. */
                        public disableSystemRoot: boolean;

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.tls.IConfig): v2ray.core.transport.internet.tls.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.tls.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.tls.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.tls.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.tls.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.tls.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.tls.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.tls.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.tls.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace udp. */
                namespace udp {

                    /** Properties of a Config. */
                    interface IConfig {
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.udp.IConfig);

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.udp.IConfig): v2ray.core.transport.internet.udp.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.udp.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.udp.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.udp.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.udp.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.udp.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.udp.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.udp.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.udp.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace websocket. */
                namespace websocket {

                    /** Properties of a Header. */
                    interface IHeader {

                        /** Header key */
                        key?: (string|null);

                        /** Header value */
                        value?: (string|null);
                    }

                    /** Represents a Header. */
                    class Header implements IHeader {

                        /**
                         * Constructs a new Header.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.websocket.IHeader);

                        /** Header key. */
                        public key: string;

                        /** Header value. */
                        public value: string;

                        /**
                         * Creates a new Header instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Header instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.websocket.IHeader): v2ray.core.transport.internet.websocket.Header;

                        /**
                         * Encodes the specified Header message. Does not implicitly {@link v2ray.core.transport.internet.websocket.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.websocket.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Header message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.websocket.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.websocket.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Header message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.websocket.Header;

                        /**
                         * Decodes a Header message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.websocket.Header;

                        /**
                         * Verifies a Header message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Header message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Header
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.websocket.Header;

                        /**
                         * Creates a plain object from a Header message. Also converts values to other types if specified.
                         * @param message Header
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.websocket.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Header to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Config. */
                    interface IConfig {

                        /** Config path */
                        path?: (string|null);

                        /** Config header */
                        header?: (v2ray.core.transport.internet.websocket.IHeader[]|null);
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: v2ray.core.transport.internet.websocket.IConfig);

                        /** Config path. */
                        public path: string;

                        /** Config header. */
                        public header: v2ray.core.transport.internet.websocket.IHeader[];

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: v2ray.core.transport.internet.websocket.IConfig): v2ray.core.transport.internet.websocket.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link v2ray.core.transport.internet.websocket.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: v2ray.core.transport.internet.websocket.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link v2ray.core.transport.internet.websocket.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: v2ray.core.transport.internet.websocket.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2ray.core.transport.internet.websocket.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v2ray.core.transport.internet.websocket.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): v2ray.core.transport.internet.websocket.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: v2ray.core.transport.internet.websocket.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }
}
