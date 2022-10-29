# 타입 추론(Type Interface)

> 타입스크립트가 코드를 해석해 나가는 동작을 의미함

## 타입 추론(Type Interface)의 기본

- 타입을 따로 지정하지 않아도 타입이 지정되는 경우가 있다.
  ```javascript
  let x = 3;
  ```
  ![image](https://user-images.githubusercontent.com/44965706/198829416-460fd003-b841-46cc-a003-089f4ff79acc.png)<br/>
  이런 경우, 타입을 별도로 지정하지 않아도 `number`로 타입이 추론되는 것을 확인할 수 있다.

## 가장 적절한 타입(Best Common Type)

- 타입은 보통 몇개의 표현식을 바탕으로 추론된다.
- 이 중 가장 근접한 타입을 `Best Common Type`이라고 한다.
  - ![image](https://user-images.githubusercontent.com/44965706/198829505-4822e7db-4a85-4bf7-a870-758d8eb4464f.png)
  - 위의 사진과 같이 배열 내부의 요소를 파악하여 `number|null`로 추론된 것을 알 수 있다.

## 문맥상의 타이핑(Contextual Typing)

- `Best Common Type` 이외에 문맥상으로 타입이 결정되는 경우도 있다.
- 이를 `Contextual Typing`(문맥상의 타이핑)이라고 한다.
  ```javascript
  window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- OK
    console.log(mouseEvent.kangaroo); //<- Error!
  };
  ```
  - 위 코드의 경우, `mouseEvent`는 `window.onmousedown`때문에 마우스 이벤트와 연관되어 있다고 추론된다. 때문에 `button`속성은 확인할 수 있지만, `kangaroo`속성은 시스템에서 없다고 결론을 내린다.
  ```javascript
  window.onscroll = function (uiEvent) {
    console.log(uiEvent.button); //<- Error!
  };
  ```
  - 위의 코드블럭도 동일하다.
  ```javascript
  const handler = function (uiEvent) {
    console.log(uiEvent.button); //<- OK
  };
  ```
  - 위의 코드블럭은 타입을 추론할 수 없어 `any` 타입이 부여된다.
    - 에러가 발생하지 않는다.
    - `--noImplicitAny` 옵션을 사용하면 에러가 발생한다.

## 타입체킹

- 타입스크립트에서 타입체킹은 `value`형태에 기반하여 이루어져야한다.
- 이를 [Duck Typing](https://ko.wikipedia.org/wiki/%EB%8D%95_%ED%83%80%EC%9D%B4%ED%95%91) 또는 [Structural Subtyping](https://en.wikipedia.org/wiki/Structural_type_system)이라고 한다.
