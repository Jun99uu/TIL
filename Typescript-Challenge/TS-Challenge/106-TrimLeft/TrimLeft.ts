type TrimLeft<T> = T extends ` ${infer Rest}` | `${infer Rest} `
  ? TrimLeft<Rest>
  : T;
type trimed = TrimLeft<"  Hello World  ">; // 기대되는 결과는 'Hello World  '입니다.
