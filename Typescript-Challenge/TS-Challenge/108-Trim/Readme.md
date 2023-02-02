# Trim Left

## 문제

[108-Trim](https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.ko.md)

## 답

```typescript
type Trim<T> = T extends ` ${infer Rest}` | `${infer Rest} ` ? Trim<Rest> : T;
```

## 해설

### 문제 이해

- 인자로 들어오는 문자열의 양쪽 공백을 제외하고 반환하는 문제이다.

### 구현 계획

- 문제를 읽어보면서 이상한 것을 느꼈다...
  - [106-Trim Left](https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.ko.md)를 이 문제로 풀었다.
  - 해당 문제에서 작성한 타입을 가져와봤ㄷㅏ..
  ```typescript
  type Trim<T> = T extends ` ${infer Rest}` | `${infer Rest} ` ? Trim<Rest> : T;
  ```
  - 실화인가?

## 후기

- 않이 지난주 문제를 이상하게 풀었었네요................................
- 지난주 문제의 심화 버전이 이 문제인듯한데..😭
