# Replace

## 문제

[116-Replace](https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.ko.md)

## 답

```typescript
type Replace<
  T extends string,
  From extends string,
  To extends string
> = T extends `${infer P}${From}${infer N}` ? `${P}${To}${N}` : never;
type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
```

## 해설

### 문제 이해

- 문자열 `T` 속 `From`을 `To`로 바꾸어주는 문제입니다.

### 구현 계획

- 지난 번에 풀었던 문자열 관련 문제들과 완전 비슷한 유형의 문제였습니다.
- 변형하고자 하는 문자열을 제외한 나머지를 `infer`로 받아놓고, 변형하는 것이 키포인트 였던 것 같습니다.

## 후기

- 쏘 나이스한 문제여씀다!
