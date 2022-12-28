# Parameters

## 문제

[3312-Parameters](https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.ko.md)

## 나의 답

```javascript
    const foo = (arg1: string, arg2: number): void => {};

    type MyParameters<T> = T extends (...args: infer P) => void ? P : undefined;
    type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
```

## 해설

### 문제 이해

- 타입스크립트의 유틸리티 타입 `Parameters`를 직접 구현하는 문제이다.
  - [Parameters](https://www.typescriptlang.org/ko/docs/handbook/utility-types.html#parameterstype)
- `T`는 `any[]`를 인자로 갖는 함수를 상속받는다.
  - 각 인자의 타입은 `infer` 키워드를 통해 추론한다.

### 구현 계획

- 문제 이해에서는 쉬운 것 처럼 썼지만, 굉장히 고민했습니다 :(
- 특히 `infer` 키워드가 기억이 나지 않아서, [189-Awaited](https://github.com/Jun99uu/TIL/blob/176648e880f894aa5c4fc695aef3de15becab672/Typescript-Challenge/TS-Challenge/189-Awaited/Awaited.md)를 참고했습니다.

![image](https://user-images.githubusercontent.com/44965706/209784767-a4b1e2e3-cbbc-43e3-ace2-adfd9fcad558.png)

## 후기

- 생각보다 엄청 어려운 문제는 아니었던 것 같은데...
- 모든 테케를 통과할 수 있는지는 잘 모르겠습니다...
