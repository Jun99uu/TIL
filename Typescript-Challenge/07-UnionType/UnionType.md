# 연산자를 이용한 타입 정의(Union Type)

## Union Type

### Union Type 이란?

- 특정 타입에서, `|`를 사용하여 하나 이상의 타입을 사용할 수 있게 해주는 것.

  ```
  const logMessage= (value:string) => {
      console.log(value)
  }
  logMessage("해위");
  // logMessage(100); //에러남

  const editedLogMessage= (value:string | number) => {
      console.log(value)
  }
  editedLogMessage("해위요");
  editedLogMessage(100); //에러 안남
  ```

  위의 `logMessage`는 Union Type이 아니기에 에러가나지만,<br/>`editedLogMessage`는 Union Type이기에 에러가 나지 않는다.

### 장점

- 타입을 활용하여 각종 api를 사용하는 타입스크립트의 이점을 살리면서, 여러 타입을 사용할 수 있다.
  ![image](https://user-images.githubusercontent.com/44965706/198199076-8fc88d04-aa95-482d-9593-f373a361606d.png)
  `number`에 대한 api나 속성들을 활용할 수 있다.

### 특징

- 여러가지 `interface`를 `Union Type`으로 사용한다면, 공통된 내부 타입만 사용할 수 있다.
  - `Union Type`은 사용된 모든 타입에 맞아야하기 때문이다.

## Intersection Type

### Intersection Type 이란?

- 특정 타입에서, `&`를 사용하여 하나 이상의 타입을 사용할 수 있게 해주는 것.
- `Union Type`과 다른 점은, 여러가지 `interface`를 `Intersection Type`으로 사용한다면, 내부의 모든 타입을 사용할 수 있다는 점이다.
  ![image](https://user-images.githubusercontent.com/44965706/198201043-e4b6fd10-102c-48dd-bb66-3987f669c3c7.png)
- **두가지 타입이 합쳐진 하나의 타입이라고 생각하면 된다.**
