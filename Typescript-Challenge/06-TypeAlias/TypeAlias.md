# 타입 별칭 (Type Aliases)

## 타입 별칭이란?

> 타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.

```javascript
// string 타입을 사용할 때,
const name:string = "capt";

// 타입 별칭을 사용할 때,
tpe MyName = string;
const name:MyName = "capt";
```

- `string`과 `number`같은 간단한 타입부터 `interface` 레벨의 복잡한 타입에도 별칭을 부여할 수 있다.
- 타입을 부여할 수 있는 거의 모든 곳에 타입 별칭 설정 가능.

## 개괄

### 인터페이스와 차이점

- 사용시 차이점
  - `interface` 사용시<br/>
    ![image](https://user-images.githubusercontent.com/44965706/198196261-0fc7bf5d-368a-4b55-897f-aba4cf7e2bea.png)<br/>
    - 타입 내부의 모습을 바로 볼 수 없다.
  - `type` 사용시<br/>
    ![image](https://user-images.githubusercontent.com/44965706/198196409-f0930143-5b93-4a60-a54c-512f9fa007c1.png)<br/>
    - 타입 내부의 모습을 볼 수 있다.
- 개념적 차이점
  - `타입 별칭`은 **새로운 타입 값을 하나 생성하는 것이 아니라** 정확한 타입에 대해 나중에 쉽게 참고할 수 있도록 이름을 부여하는 것.
  - 둘의 가장 큰 차이점은 **타입의 확장 가능여부** 이다.
    - `interface`는 확장이 가능하다.
    - `type`은 확장이 불가능하다.
    - [공식적으로 interface의 사용을 권장하고 있다.](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
