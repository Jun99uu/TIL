type Trim<T> = T extends ` ${infer Rest}` | `${infer Rest} ` ? Trim<Rest> : T;

type trimmed = Trim<"  Hello World  ">; // 기대되는 결과는 'Hello World'입니다.
