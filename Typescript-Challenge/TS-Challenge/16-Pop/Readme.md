# Pop

## 문제

[16-Pop](https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ko.md)

## 나의 답

```typescript
type Pop<T extends Array<any>> = T extends [...infer K, any] ? [...K] : never;
```

## 해설

### 문제이해

- 배열`T`의 마지막 원소를 제외한 나머지 요소를 반환하는 타입 `Pop`을 구현하는 것이다.

### 구현 계획

- **14-Last of Array**와 굉장히 유사한 문제이다.
  - 순서만 바꾸면 되는듯한!
- 실제로 순서만 바꾸었더니 해결할 수 있었다.

## 후기

- 오 14번을 풀고오니 너무 쉬운 문제였네요! 옴뇸뇸 잘먹었습니당
