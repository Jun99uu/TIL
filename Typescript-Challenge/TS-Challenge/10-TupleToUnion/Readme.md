# Tuple To Union

## 문제

[10-Tuple To Union](https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.ko.md)

## 나의 답

```javascript
    type TupleToUnion<T extends string[]> = T[number];
```

## 해설

### 문제 이해

- 배열로 들어온 값을 기반으로 유니온 타입을 생성하는 문제 입니다.
- [11-TupleToObject](https://github.com/Jun99uu/TIL/blob/master/Typescript-Challenge/TS-Challenge/11-TupleToObject/TupleToObject.md)과 유사하다고 느껴졌습니다.
  - 해당 풀이를 참고하여 풀었습니다.

### 구현 계획

- [11-TupleToObject](https://github.com/Jun99uu/TIL/blob/master/Typescript-Challenge/TS-Challenge/11-TupleToObject/TupleToObject.md)처럼 우선 `extends`를 통해, `T`의 타입을 `string[]`으로 제한합니다.
- 이후 `number`를 통해 `T`를 유니온 타입으로 반환합니다.

## 후기

- 이전 번호 문제인 `DeepReadonly`보다 훨씬 쉬웠습니다!
- 오히려 `easy`인 `TupleToObject`보다 쉬운 느낌..!
