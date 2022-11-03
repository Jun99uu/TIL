# Tuple to object

## 문제

[11-Tuple to Object](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.ko.md)

## 답

```javascript
    type TupleToObject<T extends readonly string[]> = {
        [A in keyof T] : T[A]
    }
```

## 해설

- 문제 이해
  - 특정 배열의 원소들을 `key : value`로 갖는 객체 타입을 만들라는 문제이다.
- 구현 계획
  - 우선 타입의 제네릭을 `readonly string[]`으로 제한해야겠다고 생각했다.
  - [제네릭의 타입제한](https://github.com/Jun99uu/TIL/blob/master/Typescript-Challenge/10-Generic/Generic.md)
    - `extends` 연산자를 활용하여 `T`를 `readonly string[]`으로 제한하였다.
    ```javascript
    type TupleToObject<T extends readonly string[]> = {
        [A in keyof T] : T[A]
    }
    ```
    - 위와 같이 코들르 작성했더니, 문제에서 의도한 답변이 나오지 않는다는 것을 확인했다.<br/>
      ![image](https://user-images.githubusercontent.com/44965706/199640894-3c6abd22-a563-42cc-a189-566414eae8af.png)<br/>
    - 위와 같은 문제를 해결하기 위해 또 **`GDSC SSU 이강현` 학우님**의 풀이를 참고하였다. ~~감사합니다~~
  - `T[number]` 키워드를 사용하면 `T`가 유니온 타입으로 반환된다.
    - 이제 `Mapped Type`을 적용하여 아래와 같이 작성할 수 있다.
    ```javascript
    type TupleToObject<T extends readonly string[]> = {
        [A in T[number]]: A;
    };
    ```
    ![image](https://user-images.githubusercontent.com/44965706/199647630-93c73627-5c63-4066-9393-98ca1924f2d2.png)
    - 위와 같은 결과를 확인할 수 있다.

## 후기

T를 유니온 타입으로 반환하는 과정에서 강현님의 풀이를 참고하였는데, 큰 도움이 되었습니다!<br/>
그러나 예제코드에 치중해서 **배열에 모든 원소를 받을 수 있도록 처리**해주는 과정을 미처 생각하지 못했기에...<br/>
추후에 첨삭하도록 하겠숩니다..!!
