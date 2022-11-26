# Concat

## 문제

[533-Concat](https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.ko.md)

## 나의 답

```javascript

```

## 해설

## 문제 이해

- `javascript`의 배열 관련 API인 **concat**을 직접 구현하는 문제이다

## 구현 계획

- 우선 concat이 뭐하는 놈인가 알아봅시댜
  - `Array.concat(Arr1, Arr2, ...)`일 때, `Arr1`과 `Arr2`등 파라미터로 받은 모든 배열을 합쳐서 새로운 배열을 리턴하는 것
  - 원본 배열에 영향 X
- 일단 문제의 예제처럼 `number` 배열인 두개의 인자를 상속받아, 이것을 합쳐서 반환해야겠다고 생각했습니다.
  ```javascript
  type Concat<T extends Array<number>, U extends Array<number>> = [...T, ...U]
  ```
  - `spread`연산자가 타입에도 적용될지 몰랐지만, 되길래 바로 써먹었습니다.
- 답안을 확인하다보니, 하나 잘못된게 있었습니다!
  - `number`로 받으면 모든 배열의 타입이 강제되기 때문에, `unknown`으로 받아야 하는 것이었습니다.
  ```javascript
  type Concat<T extends Array<unknown>, U extends Array<unknown>> = [...T, ...U]
  ```

## 후기

- 사실 중간에 인자를 2개만 받으면 되는지 모르고 약간의 삽질을 쫌...
- 부끄러우니 그 과정은 올리지 않았어요ㅎ
