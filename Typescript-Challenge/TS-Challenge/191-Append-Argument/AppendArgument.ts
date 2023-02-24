type Fn = (a: number, b: string) => number;

type AppendArgument<F, A> = F extends (...args: infer P) => infer R
  ? (args: P, value: A) => R
  : never;

type Result = AppendArgument<Fn, boolean>;
// 기대되는 결과는 (a: number, b: string, x: boolean) => number 입니다.
