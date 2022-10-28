# Enums(이넘)

## Enums이란

- 이넘은 특정 값들의 집합을 의미하는 자료형이다.

### 숫자형 이넘

- 타입스크립트에서 숫자형 이넘은 아래와 같이 선언한다.

  ```javascript
  enum Shose {
  Nike = 0,
  Adidas, //1
  Puma, //2
  }

  let myShose = Shose.Nike;
  console.log(myShose); //0이 출력됨
  ```

- 아래와 같이 값을 선언하지 않으면 0부터 차례로 1씩 증가한다.

  ```javascript
  enum Shose {
  Nike,
  Adidas,
  Puma,
  }

  let myShose = Shose.Nike;
  console.log(myShose); //0이 출력됨
  //이넘을 사용할 때 별도의 값을 지정하지 않으면 전부 숫자형 이넘으로 취급
  ```

### 문자형 이넘

- 타입스크립트에서 문자형 이넘은 아래와 같이 선언한다.

  ```javascript
  enum Shose {
  Nike = '나이키',
  Adidas = '아디다스',
  Puma = '퓨마',
  }

  let myShose = Shose.Nike;
  console.log(myShose); //'나이키'가 출력됨
  ```

## 어디에 활용되는가

- 아래 블록에 간단한 예제 함수가 있다.

  ```javascript
  const askQuestion = (answer: string) => {
    if (answer === "yes") {
      console.log("정답");
    }
    if (answer === "no") {
      console.log("오답");
    }
  };
  ```

  - 이 경우, `answer` 인자에서 긍정 표현은 오직 `yes`만 확인할 수 있다. `y` `예스` `ㅇㅇ`와 같은 표현은 전부 인지하지 못한다.

  ```javascript
  enum Answer {
  Yes = "Y",
  No = "N",
  }

  const askQuestion = (answer: Answer) => {
  if (answer === Answer.Yes) {
      console.log("정답");
  }
  if (answer === Answer.No) {
      console.log("오답");
  }
  };

  askQuestion(Answer.Yes);
  askQuestion(Answer.No);
  ```

  - 이런식으로 `enum`을 확용할 수 있다.

- `드롭다운` 등 어떠한 목록이 필요한 경우에서 사용하면, 예외처리 등의 문제를 해결할 수 있다.
