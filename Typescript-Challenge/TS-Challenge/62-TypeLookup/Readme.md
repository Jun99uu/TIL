# Type Lookup

## 문제

[62-Type Lookup](https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.ko.md)

## 답

```typescript
type LookUp<T, K> = T extends { type: K } ? T : never;
```

## 해설

### 문제 이해

- 첫 번째 인자의 값 속, `type`이 두번째 인자와 동일한 값을 찾아 반환하는 것이다.

### 구현 계획

- 우선 각 인자는 순서대로 `T`와 `K`라고 하였다.
- `T`가 `{ type:K }`를 상속 받는지를 확인해야했다.
- 어떻게 확인해야하지 하고 참고하니... `extends`를 활용하는 것이었다.
- 첫 번째 답
  ```typescript
  type LookUp<T, K> = T extends { type: K } ? T : never;
  ```
  - 오잉 이게 끝이었다!

## 후기

- 오잉 20번 무서워서 튀었는데 도망친 곳에 천국이 있었네요
