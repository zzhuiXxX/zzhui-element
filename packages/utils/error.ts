import { isString } from "lodash-es";

class ZzUIError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "ZzUIError";
  }
}

export function throwError(scope: string, msg: string) {
  throw new ZzUIError(`[${scope}] ${msg}`);
}

export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== "production") {
    const err = isString(scope) ? new Error(`[${scope}] ${msg}`) : scope;
    console.warn(err);
  }
}
