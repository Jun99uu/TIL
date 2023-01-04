# ReadOnly2

## 문제

[08-ReadOnly2](https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.ko.md)

## 나의 답

```javascript
    type MyReadonly2<T, K extends keyof T = keyof T> = {
        readonly [P in K]: T[P];
    } & {
        [P in Exclude<keyof T, K>]: T[P];
    };
```

## 해설

### 문제 이해

- `T` 프로퍼티 중, `K` 프로퍼티만 읽기 전용으로 만들면 되는 문제입니다.

### 구현 계획

- 처음에 유틸리티 타입 생각도 안하고 끙끙거리다가...
  - 다른 분들의 해설을 참고하여 유틸리티 타입을 적용해서 풀어야겠다고 생각했습니다!
- 우선 [07-Readonly]()에서 풀었던 것 처럼 `맵드타입`을 이용하여 전체를 `Readonly`로 바꾸는 것은 성공!
  ```javascript
      type MyReadonly2<T, K extends keyof T = keyof T> = {
          readonly [P in K]: T[P];
      }
  ```
  - 그러나 이렇게 풀면, `K`에 없는 속성은 들어가지도 못하는 불상사가 일어납니다 호곡
- 그렇게 또 다시 해설을 탐방 중, 유지민 학우의 해설에서 `&`의 힌트를 얻었습니다!
  - 더불어 유틸리티 타입인 `Exclude`를 활용하여 `K`에 없는 `T` 내부 속성은, 그냥 받아오도록 설정하였습니다.
  ```javascript
      type MyReadonly2<T, K extends keyof T = keyof T> = {
          readonly [P in K]: T[P];
      } & {
          [P in Exclude<keyof T, K>]: T[P];
      };
  ```
- 성공!

## 후기

- 갑자기 `medium` 난이도인게 체감이 확 되네욥... 어려운 문제였습니다.
