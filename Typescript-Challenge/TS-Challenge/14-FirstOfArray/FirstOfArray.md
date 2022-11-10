# First of Array

## 문제

[14-First of Array](https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.ko.md)

## 나의 답

```javascript
type First<T extends Array<any>> = T extends Array<T> ? never : T[0];

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```

## 해설

### 문제이해

- 배열`T`의 첫번째 원소의 타입을 반환하는 타입 `First`를 구현하는 것이다.

### 구현 계획

- 예제 코드에 타입이 지정되지 않은 배열 `T`를 이용하고 있으므로, `T`가 `Array<any>` 제네릭을 상속 받고 있다고 생각했다.
- `T`의 첫 번째 요소의 타입을 반환하면 되니까, `T[0]`를 반환하면 된다고 생각했다.
- 첫 번째 결과 코드

  ```javascript
  type First<T extends Array<any>> = T[0];

  type arr1 = ["a", "b", "c"];
  type arr2 = [3, 2, 1];

  type head1 = First<arr1>; // expected to be 'a'
  type head2 = First<arr2>; // expected to be 3
  ```

  - 예제 코드의 경우 `arr1`과 `arr2`는 배열에 요소가 차있기 때문에 문제가 발생하지 않았다.
  - 하지만 답을 확인해보니 `never`키워드로 배열의 empty 여부를 검사하고 있음을 알 수 있었다.

- 두 번째 수정 코드

  ```javascript
  type First<T extends Array<any>> = T extends Array<any> ? never : T[0];

  type arr1 = ["a", "b", "c"];
  type arr2 = [3, 2, 1];

  type head1 = First<arr1>; // expected to be 'a'
  type head2 = First<arr2>; // expected to be 3
  ```

  - 위 결과를 확인해보니 `head1`과 `head2`에서 `never`를 반환하고 있음을 알 수 있었다.
  - 해당 문제의 원인을 생각해보았다.
    - 반환하는 값이 `Array<any>`를 상속받고 있기 때문에, `T`의 요소를 검사하지 않고 있다는 것을 알 수 있었다.
    - 때문에 이를 `Array<T>`를 상속받게 수정하였다.

- 최종 답안 코드

  ```javascript
  type First<T extends Array<any>> = T extends Array<T> ? never : T[0];

  type arr1 = ["a", "b", "c"];
  type arr2 = [3, 2, 1];

  type head1 = First<arr1>; // expected to be 'a'
  type head2 = First<arr2>; // expected to be 3
  ```

  ![image](https://user-images.githubusercontent.com/44965706/200983305-4d515c88-ac9e-40bf-b8bb-d4ab1bbd5ea2.png)<br/>
  ![image](https://user-images.githubusercontent.com/44965706/200983358-942c8262-61aa-4ae2-80ed-4c16e02a205b.png)<br/>

## 후기

- 뭔가 문제가 발생해서 해결해나가는 과정이 꽤 재미있었습니다.
- 아직 `easy`인데도 이렇게 어려우면,,, 조금 무섭습니다.
