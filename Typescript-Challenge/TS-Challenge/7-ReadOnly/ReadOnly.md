# ReadOnly

## 문제

[07-ReadOnly](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md)

## 답

```javascript
    type MyReadonly<T> = {
        readonly [A in keyof T]: T[A];
    };
```

## 해설

- 문제 이해
  - `04-Pick`과 마찬가지로, 특정 인터페이스의 프로퍼티를 읽기 전용으로 지정할 수 있는 [유틸리티 타입 Readonly<T>](https://velog.io/@heony/typescript-utility-types)를 직접 구현하는 문제이다.
- 구현 계획
  - `04-Pick`에서 사용했던 [Mapped Type](https://joshua1988.github.io/ts/usage/mapped-type.html#%EB%A7%B5%EB%93%9C-%ED%83%80%EC%9E%85-%EA%B8%B0%EB%B3%B8-%EC%98%88%EC%A0%9C)과, [제네릭의 타입제한](https://github.com/Jun99uu/TIL/blob/master/Typescript-Challenge/10-Generic/Generic.md)을 이용하면 쉽게 구현할 수 있겠다고 생각했다.
  ```javascript
  type MyReadonly<T> = {
      [A in keyof T]: T[A];
  };
  ```
  - 그러나 위와같이 `MyReadonly`를 작성하면, 예제코드의 아래부분에서 에러가 발생하지 않았다.
    - 즉, 문제에서 말하는 **읽기전용**이 불가능하기 때문에, [readonly 속성](https://radlohead.gitbook.io/typescript-deep-dive/type-system/readonly)을 이용해야겠다고 생각했다.
    ```javascript
        type MyReadonly<T> = {
            readonly [A in keyof T]: T[A];
        };
    ```
    - 위와 같이 `readonly`를 지정하면 올바르게 에러가 발생하는 것을 확인할 수 있었다.

## 후기

4번 문제에서 `Mapped Type`과 `제네릭의 타입제한`을 복습하고 넘어와서인지, 다행히 보다 쉽게 문제를 풀 수 있었다.
