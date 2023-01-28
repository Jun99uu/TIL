# Trim Left

## 문제

[106-Trim Left](https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.ko.md)

## 답

```typescript
type LookUp<T, K> = T extends { type: K } ? T : never;
```

## 해설

### 문제 이해

- 인자로 들어오는 문자열을, 공백을 제외하여 반환하는 문제이다.

### 구현 계획

- `T`는 문자열이다,
- Type Lookup 문제처럼, `extends`를 이용해볼까 하는 생각이 들었다.
- 첫 번째 답
  ```typescript
  type TrimLeft<T> = T extends " " ? never : T;
  ```
  - 어림도 없었다.
- 뭔가 상속 테스트를 하는게 맞는 것 같은데 뭘 해야할까 하고 이것저것 테스트
- `infer`를 사용할 수 있음을 알게되었다.
- 두 번째 답
  ```typescript
  type TrimLeft<T> = T extends ` ${infer Rest}` | `${infer Rest} `
    ? TrimLeft<Rest>
    : T;
  ```
  - 얏호

## 후기

- `infer` 멈춰~
