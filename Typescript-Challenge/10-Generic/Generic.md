# Generics(제네릭)

## 제네릭이란

- `C#` `Java` 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징이다.
- 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용된다.
  - 타입을 마치 함수의 파라미터 개념으로 받는 것이 바로 제네릭이다.

## 제네릭 기초

- 아래와 같은 예제 코드가 있다.
  ```javascript
  const logText = (text) => {
    console.log(text);
    return text;
  };
  logText(10); // 숫자 10
  logText("ㅎㅇ"); //문자열 ㅎㅇ
  logText(true); // 진위값 true 반환
  ```
  - 모두 인자로 받을 수 있는 것은 암묵적으로 `any` 타입이 지정되어있기 때문
- 예제코드에 제네릭을 추가하였다.
  ```javascript
  const logText = <T>(text: T): T => {
    console.log(text);
    return text;
  };
  logText < string > "ㅎㅇ"; //문자열 ㅎㅇ가 호출되므로, 반환도 문자열이 된다고 알려주고 있다.
  ```
  ![image](https://user-images.githubusercontent.com/44965706/198485550-1a428380-2aef-45fc-a0fc-b7dac7092e8a.png)<br/> - 위와 같이, 타입이 모두 `string`으로 지정된 것을 알 수 있다.

### 제네릭을 사용하는 이유

- 로직이 같고 인자(혹은 반환 값)의 타입만 다른 경우, 함수를 따로 선언해주는 것은 유지보수 측면에서 효용성이 떨어진다.
  - `union`타입으로 여러 타입의 인자를 받을 수 있긴 하지만, 내부 로직에서 api를 활용할 때 문제가 발생할 수 있다.

## 제네릭 사용

- 타입을 비워놓고 무엇이 들어갈지 호출하는 시점에서 정의할 수 있다.

  - 타입 정의에 대한 이점을 가져갈 수 있음.

  ```javascript
  const logText = <T>(text: T): T => {
    console.log(text);
    return text;
  };

  const num = logText < number > 10; // 제네릭으로 타입이 number, 인자가 10
  const str = logText < string > "ㅎㅇ"; // 제네릭으로 타입이 string, 인자가 ㅎㅇ

  str.split(""); //문자열로 사용가능
  ```

### 제네릭 실제 사용 예제

- 예제코드 `dropdown-generic.ts`에서 타입을 정의하기 위해 인터페이스를 적용했다.

  ```javascript
  interface Email {
    value: string;
    selected: boolean;
  }

  interface ProductNumber {
    value: number;
    selected: boolean;
  }
  ```

  - `value` 속성이 겹치지만 타입이 다르다는 이유로 두개의 인터페이스가 정의되었다.
  - 이런경우 `Generic`으로 해결 가능하다.

  ```javascript
  interface Dropdown {
    value: string;
    selected: boolean;
  }
  const obj: Dropdown = { value: 10, selected: false }; //타입 에러(value는 string이 와야함)

  interface Dropdown<T> {
    value: T;
    selected: boolean;
  }
  const obj: Dropdown<number> = { value: 10, selected: false }; //타입에러 안남!
  ```

### 제네릭의 타입 제한

- 제네릭을 조금 더 엄격하게 제한할 수 있음.
  ```javascript
  const logTextLength = <T>(text: T): T => {
    console.log(text.length);
    return text;
  };
  logTextLength("ㅎㅇ");
  ```
  - 이 경우, 분명 `text` 인자가 `string`타입인 것은 알지만 에러가 발생함.<br/>
    ![image](https://user-images.githubusercontent.com/44965706/198498733-b23556e8-fb4f-4fa4-a529-9d072801a74e.png)<br/> - 제네릭을 사용했기 때문에, 시스템은 해당 인자가 string인 것을 알 수 없기 때문에 발생하는 에러. - 타입에 제한(`힌트`)을 두어서 이 문제를 해결한다.

### 제네릭의 타입 제한

- 정의된 타입을 이용하는 방법이 있다.
  ```javascript
  interface LengthType {
  length: number;
  }
  const logTextLength = <T extends LengthType>(text: T): T => {
  text.length;
  return text;
  };
  ```
  - 이 경우, 인자는 반드시 `LengthType`의 하위 타입일 것이라고 제한하는 것이다.
  - `LengthType`의 속성은 모두 갖고 있고, 추가적으로 다른 속성을 받을 수 있다고 제한하는 것이다.
- `keyof`를 활용하여 제네릭의 타입을 제한할 수 있다.
  - 상속받는 `interface`의 key들 중 하나가 제네릭의 속성이 될 것임을 명시하는 것.
  ```javascript
  //keyof
  interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
  }
  const getShoppingItemOption = <T extends keyof ShoppingItem>(
  itemOption: T
  ): T => {
  return itemOption;
  };
  getShoppingItemOption("name");
  ```
  - 작성한 함수를 사용할 때, 인자에 커서를 두고 `ctrl + space` 누르면 사용가능한 속성들이 나열됨.
    - 충분히 제네릭을 안전하게 사용할 수 있다.
    - 목적하는 곳에 타입을 제한할 수 있다.
