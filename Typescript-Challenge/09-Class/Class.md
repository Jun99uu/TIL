# Class(클래스)

## 자바스크립트에서 클래스

- `ES6`부터 지원 시작
- `constuctor`에 필요한 정보나 api를 넘겨서 생성

  ```javascript
  class Person {
    constructor(name, age) {
      console.log("생성완료");
      this.name = name;
      this.age = age;
    }
  }

  let rhon = new Person("준규", 24);

  console.log(rhon); //Person에 rhon의 정보가 담겨서 출력됨
  ```

### Hook 기반의 함수형 코드

```javascript
// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {
  // ...
}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
  return <div>Hello world</div>;
}
```

## 자바스크립트에서 프로토타입

- 프로토타입을 이용한 상속<br/>
  ![image](https://user-images.githubusercontent.com/44965706/198465763-90ea715e-bbe6-488f-ac01-bf1f3bba28b0.png)<br/>
- 필요한 속성은 추가, 기존에 상속받은 속성은 그대로<br/>
  ![image](https://user-images.githubusercontent.com/44965706/198466690-32cdb592-fd22-4f62-b7d9-387960b14e42.png)<br/>

## 프로토타입과 클래스의 관계

- `class`는 `constructor`를 이용했을 뿐 `ES6`이전의 생성자 함수와 기능의 차이가 없다.
- 기존 프로토타입 기반의 상속은 function, class에서도 유지 되었다.

  ```javascript
  // Before ES6
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  var jimin = new Person("지민", 23);

  // After ES6
  class Person {
    constructor(name, age) {
      this.name;
      this.age;
    }
  }
  let jimin = new Person("지민", 23);
  ```

## 타입스크립트의 클래스 문법

- 자바스크립트와 다르게 클래스의 최상단에 사용하고자 하는 속성(멤버 변수)을 정의해주어야한다.
- 각 멤버 변수의 유효범위까지 설정할 수 있다. (`public`, `private`, `protected` ...)

  ```javascript
      class Person {
      public name: string;
      private age: number;
      constructor(name: string, age: number) {
          console.log("생성완료");
          this.name = name;
          this.age = age;
      }
      }

      let rhon = new Person("준규", 24);

      console.log(rhon);
  ```
