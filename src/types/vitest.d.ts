declare module 'vitest' {
  export const vi: {
    fn: <T extends (...args: unknown[]) => unknown>(
      impl?: T
    ) => ((...args: Parameters<T>) => ReturnType<T>) & {
      mockClear: () => void;
      mockResolvedValue?: (v: unknown) => void;
    };
    mock: (...args: unknown[]) => unknown;
    [key: string]: unknown;
  };
  export const describe: (name: string, fn: () => void) => void;
  export const it: (name: string, fn: () => Promise<void> | void) => void;
  export type Matcher = {
    toEqual: (expected: unknown) => void;
    toHaveBeenCalled: () => void;
    toHaveBeenCalledWith: (...args: unknown[]) => void;
    toHaveProperty: (key: string) => void;
    toBe: (expected: unknown) => void;
  };

  export type Expect = (received: unknown) => Matcher & { not: Matcher };
  export const expect: Expect;
  export const beforeEach: (fn: () => void) => void;
  export const afterEach: (fn: () => void) => void;
}

declare module 'vitest/globals' {
  export * from 'vitest';
}
