# Replace All

## 문제

[119-Replace All](https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.ko.md)

## 답

```typescript
type ReplaceAll<
  T extends string,
  From extends string,
  To extends string
> = T extends `${infer P}${From}${infer N}`
  ? `${P}${To}${ReplaceAll<N, From, To>}`
  : T;

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
```

## 해설

### 문제 이해

- `Replace`와 유사하게, 문자열에서 `From`을 `To`로 변환하는 문제이다.
  - 다른점은, `From`이 여러번 나올 수 있다는 점이다.

### 구현 계획

- 처음에는 어떻게 접근을해야할지 고민했다.
- 재귀적으로 호출을 해봐야겠다 생각하고 접근해봤는데, 생각보다 잘 됐다!
  - `${P}${To}${ReplaceAll<N, From, To>}`
  - `ReplaceAll`을 다시 호출할 때 나머지 `N`을 넣어주는 것이 핵심이었다.

## 후기

- 어찌어찌 풀긴했는데... 너무 우연히 맞아버린 듯한 느낌이 있네욥...
