# Length of Tuple

## 문제

[18-Length of Tuple](https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.ko.md)

## 답

```javascript
    type Length<T extends Array<any>> = T["length"];

    type tesla = ["tesla", "model 3", "model X", "model Y"];
    type spaceX = [
    "FALCON 9",
    "FALCON HEAVY",
    "DRAGON",
    "STARSHIP",
    "HUMAN SPACEFLIGHT"
    ];

    type teslaLength = Length<tesla>; // expected 4
    type spaceXLength = Length<spaceX>; // expected 5
```

## 해설

### 문제 이해

- 튜플 `T`를 상속받아서 길이를 반환하는 타입 `Length`를 구현하는 것이다.

### 구현 계획

- `T`가 `Array<any>`를 상속받고 상속받은 T에 `length` 적용하여 길이를 반환하면 되겠다고 생각했다.
- 첫 번째 답

  ```javascript
  type Length<T extends Array<any>> = T.length

  type tesla = ["tesla", "model 3", "model X", "model Y"];
  type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
  ];

  type teslaLength = Length<tesla>; // expected 4
  type spaceXLength = Length<spaceX>; // expected 5
  ```

  - 하지만 위의 경우, `length` 속성 사용할 수 없었다.
  - 타입스크립트에서 제네릭 튜플의 길이를 확인할 때는 `T["length"]`를 사용하면 된다는 것을 알아냈다.

- 최종 답안

  ```javascript
  type Length<T extends Array<any>> = T["length"];

  type tesla = ["tesla", "model 3", "model X", "model Y"];
  type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
  ];

  type teslaLength = Length<tesla>; // expected 4
  type spaceXLength = Length<spaceX>; // expected 5
  ```

  ![image](https://user-images.githubusercontent.com/44965706/200987853-5f49819d-5d5d-48cd-89ad-b7d4ac3e0c01.png)<br/>
  ![image](https://user-images.githubusercontent.com/44965706/200987896-36cf3907-5ce5-4d5f-bf4c-c92448c5fa12.png)<br/>

- 그러나 답안을 보고, `as const`가 단언되어있다면 `Array<any>`를 상속받을 때 `readonly` 속성을 붙여야한다는 것을 알 수 있었다.

  ```javascript
  type Length<T extends readonly any []> = T["length"];

  type tesla = ["tesla", "model 3", "model X", "model Y"];
  type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
  ];

  type teslaLength = Length<tesla>; // expected 4
  type spaceXLength = Length<spaceX>; // expected 5
  ```

  - `readonly`를 사용하면 배열 제네릭을 상속받을 수 없고, 리터럴만 상속받아야하기 때문에 `Array<any>`가 아닌 `any []`를 상속받았다.

## 후기

- 제네릭에서 튜플의 길이를 받아올 때 `["length"]`를 사용해야한다는 것을 알 수 있었습니다.
- 그런데 저런 것들을 뭐라고 명칭하는지 잘 모르겠습니다. `keyword`...? `api`...? 아신다면 답변 부탁드려요😭
