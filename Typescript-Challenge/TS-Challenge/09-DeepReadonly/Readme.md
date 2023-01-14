# DeepReadonly

## 문제

[09-DeepReadonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.ko.md)

## 나의 답

```javascript
    type DeepReadonly<T> = {
        readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
    };
```

## 해설

### 문제 이해

- `T` 객체의 프로퍼티와 하위 객체 모두를 `readonly`로 만드는 문제입니다.

### 구현 계획

- 사실 처음에는 프로퍼티만 `readonly`로 바꾸면 되는거라 생각하였습니다.
  ```javascript
  type DeepReadonly<T> = {
      readonly [P in keyof T]: T[P]
  }
  ```
  - 때문에 Readonly2에서 했던 것 처럼, 맵드 타입을 이용하여 전체를 `readonly`로 바꾸었습니다.
  - 당연히 이것은 정답이 아니었습니다.
- 우선 문제에서 `T`는 객체 타입으로 제한되고 있습니다.
  - `T`가 객체임을 검사하기 위해서는?
    - `object`인지 검사 => `extends object`
    ```javascript
    type DeepReadonly<T> = {
        readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
    };
    ```

## 후기

- 문제에 있는 테스트 케이스에선 정답인 것 처럼 보이는데... 확실한 정답인지는 모르겠습니다ㅠㅠ.
- 혹시 이 코드에서 잘못된 부분이나 고려해야할 부분이 있다면 더 알려주시면 감사하겠습니다!
