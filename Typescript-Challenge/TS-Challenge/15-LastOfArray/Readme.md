# Last Of Array

## 문제

[15-Last Of Array](https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.ko.md)

## 나의 답

```typescript
type Last<T extends Array<any>> = T extends [...Array<any>, infer K]
  ? K
  : never;
```

## 해설

### 문제이해

- 배열`T`의 마지막 원소를 반환하는 타입 `Last`를 구현하는 것이다.

### 구현 계획

- 예제 코드에 타입이 지정되지 않은 배열 `T`를 이용하고 있으므로, `T`가 `Array<any>` 제네릭을 상속 받고 있다고 생각했다.
- `T`의 마지막 요소를 반환하면 되니까, `[...Array<any>, K] ? K : never`를 반환하면 된다고 생각했다.
- 첫 번째 결과 코드

  ```typescript
  type Last<T extends Array<any>> = T extends [...Array<any>, K] ? K : never;
  ```

  - 아예 `K`를 읽지 못하는 오류가 뜬다.

- 최종 답안 코드

  ```typescript
  type Last<T extends Array<any>> = T extends [...Array<any>, infer K]
    ? K
    : never;
  ```

  - `infer`를 이용하여 `K`를 추론하는 과정이 필요했다.
  - 해당 키워드 추가 후, 올바르게 적용되는 것을 확인할 수 있었다.

## 후기

- `infer`은 왜이렇게 딱 깔끔하게 와닿는 느낌이 아닌걸까요...
- 그냥 떠올리기가 어렵네요ㅠ.ㅠ
