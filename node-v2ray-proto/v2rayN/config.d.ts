export type V2rayNConfig = import("./v2rayN.type").Config;

export function ToConfig<T extends keyof V2rayNConfig>(protocol: T, args: string): import("./v2rayN.type").Config[T];
export function ToVNext<T extends keyof V2rayNConfig>(type: T, config: import("./v2rayN.type").Config[T]): string;
