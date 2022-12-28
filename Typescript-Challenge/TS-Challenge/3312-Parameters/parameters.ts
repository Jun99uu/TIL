const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T> = T extends (...args: infer P) => void ? P : undefined;
type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
