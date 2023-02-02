# Capitalize

## 문제

[110-Capitalize](https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.ko.md)

## 답

```typescript
type CustomCapitalize<T> = T extends `${infer K}${infer R}`
  ? `${Uppercase<K>}${R}`
  : never;
```

## 해설

### 문제 이해

- 인자로 들어온 문자열의 첫 글자를 대문자로 바꾸는 문제이다.

### 구현 계획

- 문자열을 분해해서 아스키코드와 연관지어야겠다고 생각했다.
  - `소문자 아스키코드` - 32 === `대문자 아스키코드`
- 우선 문자열을 맨 첫글자와 나머지로 분해를 했다.
  ```typescript
  type CustomCapitalize<T> = T extends `${infer K}${infer R}`
    ? `${K}${R}`
    : never;
  ```
  - 그러나 여기서 `K`를 아스키코드로 변환하고, 계산하는 과정이 떠오르지 않았다.
  - 그래서 어쩔 수 없이 힌트를 조금 훔쳐봤다ㅎ
- `Uppercase` 유틸의 존재를 알게되었다.
  ```typescript
  type CustomCapitalize<T> = T extends `${infer K}${infer R}`
    ? `${Uppercase<K>}${R}`
    : never;
  ```

## 후기

- 타챌은 뭔가 로직 자체를 떠올리는 것 보다 유틸을 얼마나 잘 활용하냐가 중요한 것 같아서,, 오히려 더 좋은 것 같아요.
