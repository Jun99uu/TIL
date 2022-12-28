# GetReturnType

## 문제

[02-Get Return Type](https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.ko.md)

## 나의 답

```javascript
    const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
    };

    type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : undefined;

    type a = MyReturnType<typeof fn>; // should be "1 | 2"
```

## 해설

### 문제 이해

- **3312-Parameters**와 유사하다고 느껴졌습니다.
  - 차이점은 인자에서 추론하냐, 반환값에서 추론을 하냐 정도...!

### 구현 계획

- `T`는 역시 함수 타입을 상속받습니다.
  - 이 때, 인자는 몇 개가 올 지 모르니 `...args:any[]`로 지정해주었습니다.
- 반환부에서 추론된 타입을 표현해야하니, `=> infer P`로 지정한 후 P를 반환하게 했습니다.

## 후기

- 첫 미디엄..!!!!! 타입스크립트 챌린지 너무 무서워요 ㅠㅠ
