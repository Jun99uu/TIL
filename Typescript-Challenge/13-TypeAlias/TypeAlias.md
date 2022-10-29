# 타입 별칭(Type Aliases)

> 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.

```javascript
// string 타입을 사용할 때
const name: string = "capt";

// 타입 별칭을 사용할 때
type MyName = string;
const name: MyName = "capt";
```

- 위 코드블럭처럼, `string` `number`와 같은 간단한 타입부터 `interface`레벨의 복잡한 타입에도 별칭을 부여할 수 있다.
- 타입 별칭에 제네릭을 사용할 수도 있다.

## 타입 별칭(Type Aliases)의 특징

- 타입을 생성하는 것이 아니다.
  - 나중에 쉽게 참고할 수 있도록 이름을 부여하는 것이다.

## type과 interface의 차이점

- 가장 큰 차이점은, 타입의 **확장 가능여부**이다.
  - `interface`의 경우 확장이 가능하다.
  - `type`의 경우 확장이 불가능하다.
    - 따라서 `interface`의 사용을 지향한다.
