# 24 클로저

`클로저`는 자바스크립트 고유의 개념이 아니다.

함수를 일급 객체로 취급하는 함수형 프로그래밍 언어(하스켈, 리스프, 스칼라 등)에서 사용되는 공통된 특성이다.

## 📌 24.0 클로저를 공부하기 전에

클로저는 자바스크립트 고유의 개념이 아니므로, ECMAScript 사양에 등장하지 않는다.

> 클로저는 **함수**와 그 **함수가 선언된 렉시컬 환경**과의 조합이다.<br/> _MDN에서 말하는 클로저의 정의_

낯선 문장이지만, 키포인트는 **함수가 선언된 렉시컬 환경**이다.

### ✅ 함수가 선연된 렉시컬 환경

```javascript
const x = 1;

function outerFunc() {
  const x = 10;
  innerFunc();
}

function innerFunc() {
  console.log(x); // 1
}

outerFunc();
```

**렉시컬 환경**이란, 특정 코드가 작성되고 선언된 환경(장소)을 의미한다.

위의 소스코드에서 `innerFunc`는 `outerFunc` 함수의 내부에서 정의된 중첩 함수가 아니다.<br/>
떄문에, `innerFunc`를 `outerFunc` 내부에서 호출한다해도, `outerFunc` 함수의 변수에 접근할 수 없다.

이러한 현상이 발생하는 이유는 **렉시컬 스코프** 때문이다.

## 📌 24.1 렉시컬 스코프

`렉시컬 스코프(정적 스코프)`란 함수를 호출한 위치가 아닌, 함수를 정의한 위치에 따라 상위 스코프를 결정하는 것을 의미한다.

```javascript
const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x); // 1
}
```

- 두 함수는 모두 전역에서 정의되었다.
- 하지만, `bar`은 `foo`의 내부에서 호출되었다.
  - 호출 위치는 함수의 상위 스코프 결정에 어떠한 영향도 미치지 않는다.
  - 결국 두 함수의 상위 스코프는 **전역 스코프**이다.
- 렉시컬 환경은, 자신의 상위 렉시컬 환경과 연결된다.
  - 이것을 **스코프 체인**이라고 한다.
- **즉, 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경에 의해 결정된다.**

> _추신) 원문에서 같은 말을 어렵게, 또 어렵게 반복해서 설명하고 있다. 이것도 나름 엄청나게 요약했다...<br/> 쉽게 이야기하면, **상위 스코프에서 생성된 값을 참조할 때는 함수가 정의된 시점을 기준으로 한다는 것.**_

## 📌 24.2 함수 객체의 내부 슬롯 [[Environment]]

위의 예제처럼 함수가 호출되는 위치와 정의되는 위치가 다를 수 있다.

**때문에, 해당 함수의 상위 스코프(정의된 환경)의 참조가 저장된 내부슬롯이 `[[Environment]]`이다.**

따라서 함수 객체가 존재하는 한, 렉시컬 환경의 참조(상위 스코프)를 기억할 수 있다.

### ✅ 예제

```javascript
const x = 1;

function foo() {
  const x = 10;

  // 상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
  // 함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
  bar();
}

// 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 [[Environment]]에 저장하여 기억한다.
function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?
```

![image](https://user-images.githubusercontent.com/44965706/218244264-dd22225c-cf21-47e4-bd1f-7aafa087d5e1.png)

- `foo`와 `bar`은 모든 전역에서 함수 선언문으로 정의되었다.
- 전역 코드가 평가되는 시점에 함수 객체가 생성된다.
  - 전역 객체 `window`의 메서드가 된다.
- `[[Environment]]`에는 **전역 렉시컬 환경**의 참조가 저장된다.
  - 함수 정의가 평가된 시점에 실행 중인 실행 컨텍스트의 렉시컬 환경
  - 전역 코드 평가 시점에 실행 중인 실행 컨텍스트의 렉시컬 환경
  - 모두 **전역 렉시컬 환경**과 같은 말이다.
  - ~~비문학인가..?~~
- 함수가 호출되면 함수 내부로 코드 제어권이 이동한다.
- 이후 함수 코드를 평가하기 시작한다.
  1. 함수 실행 컨텍스트 생성된
  2. 함수 렉시컬 환경 생성
     1. 함수 환경 레코드 생성
     2. this 바인딩
     3. 외부 렉시컬 환경에 대한 참조 결정
- 외부 렉시컬 환경에 대한 참조에는, `[[Environment]]`에 저장된 렉시컬 환경의 참조가 할당된다.

### ✅ 요약

요약하자면, `[[Environment]]`에 저장된 렉시컬 환경의 참조는 상위 스코프를 의미한다.<br/>그리고 그것이 함수 정의 위치에 따라 상위 스코프를 결정하는 렉시컬 스코프이다.

## 24.3 클로저와 렉시컬 환경

```javascript
const x = 1;

// ①
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  }; // ②
  return inner;
}

// outer 함수를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer(); // ③
innerFunc(); // ④ 10
```

- `outer` 함수가 호출되고 생명주기를 마감한다.
  - 실행 컨텍스트에서 `outer` 함수의 실행 컨텍스트가 제거된다.
- 하지만 `outer` 함수의 지역 변수 값인 `x`가 출력된다.(④)

이처럼, 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부함수의 변수를 참조할 수 있다.

**이러한 중첩 함수를 `클로저(closure)`라고 한다.**

### ✅ 그림 24-2 ~ 24-5 요약

<details>
<summary>그림(구토 주의)</summary>

![image](https://user-images.githubusercontent.com/44965706/218247204-0a8aac56-52c1-47b0-8ab1-ec40d1e4a8ca.png)

![image](https://user-images.githubusercontent.com/44965706/218247284-eb8e34a8-29bd-447c-bb72-62dbdf2c3989.png)

![image](https://user-images.githubusercontent.com/44965706/218247290-b5cac97a-4ab4-4737-8e50-bd1af9405de3.png)

![image](https://user-images.githubusercontent.com/44965706/218247295-e709bc2d-08ac-4ec4-a5ad-71db96f840a3.png)

</details>

위의 예제의 경우 아래와 같은 순서대로 실행된다.

1. 전역 코드의 실행 (`outer` 객체 생성)
2. `outer` 함수 호출(`inner` 객체 생성 및 반환)
   - `outer` 함수가 호출되고, 실행 컨텍스트 스택에서 제거되었다.
   - 하지만 렉시컬 환경까지 소멸한 것은 아니다.
   - 다른 누군가가 해당 함수를 참조하고 있다면 가비지 컬렉션의 대상이 아니기 때문이다.
3. `innerFunc` 전역 변수에 `inner` 함수 참조 할당
4. `innerFunc` 호출로 `inner` 함수의 렉시컬 환경 생성(`inner` 함수 객체의 `[[Environment]]` 내부 슬롯 참조)

### ✅ 자유 변수

클로저에 의해 참조되는 상위 스코프의 변수를 `자유 변수(free variable)`라고 한다.

- 클로저란, **함수가 자유변수에 대해 닫혀있다**는 의미이다.
  - **자유 변수에 묶여있는 함수**라고 볼 수 있다.

## 📌 24.4 클로저의 활용

클로저는 상태를 안전하게 변경하고 유지하기 위해 사용한다.

다시 말해, 상태를 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하기 위해 사용한다.

### 👎 나쁜 예

```javascript
// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가 시킨다.
  return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
```

- 위 소스코드가 올바르게 작동하기 위해선 두가지 조건이 만족해야한다.
  - `num`이 `increase` 호출 전까지 변경되지 않고 유지되어야한다.
  - 이를 위해 `num`은 `increase`만 변경할 수 있어야한다.
- 떄문에 올바르지 못한 코드이다.

### ✅ 수정 과정

1.  함수의 지역 변수로 관리
    <details>
    <summary>소스코드</summary>

    ```javascript
    // 카운트 상태 변경 함수
    const increase = function () {
      // 카운트 상태 변수
      let num = 0;

      // 카운트 상태를 1만큼 증가 시킨다.
      return ++num;
    };

    // 이전 상태를 유지하지 못한다.
    console.log(increase()); // 1
    console.log(increase()); // 1
    console.log(increase()); // 1
    ```

    </details>

    - 함수가 호출될 때마다 `num`이 초기화된다.
    - 상태유지 ❌

2.  클로저 활용
    <details>
    <summary>소스코드</summary>

    ```javascript
    // 카운트 상태 변경 함수
    const increase = (function () {
      // 카운트 상태 변수
      let num = 0;

      // 클로저
      return function () {
        // 카운트 상태를 1만큼 증가 시킨다.
        return ++num;
      };
    })();

    console.log(increase()); // 1
    console.log(increase()); // 2
    console.log(increase()); // 3
    ```

    </details>

    - 클로저를 통해 `num`의 `state`를 은닉하였다.
    - 특정 함수에게만 상태 변경을 허용한다.
      - 상태가 의도치 않게 변경되는 것을 방지한다.

3.  감소 기능 추가(클로저)
    <details>
    <summary>소스코드</summary>

    ```javascript
    const counter = (function () {
      // 카운트 상태 변수
      let num = 0;

      // 클로저인 메서드를 갖는 객체를 반환한다.
      // 객체 리터럴은 스코프를 만들지 않는다.
      // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
      return {
        // num: 0, // 프로퍼티는 public하므로 은닉되지 않는다.
        increase() {
          return ++num;
        },
        decrease() {
          return num > 0 ? --num : 0;
        },
      };
    })();

    console.log(counter.increase()); // 1
    console.log(counter.increase()); // 2

    console.log(counter.decrease()); // 1
    console.log(counter.decrease()); // 0
    ```

    </details>

4.  생성자 함수로 표현(클로저)
    <details>
    <summary>소스코드</summary>

    ```javascript
    const Counter = (function () {
      // ① 카운트 상태 변수
      let num = 0;

      function Counter() {
        // this.num = 0; // ② 프로퍼티는 public하므로 은닉되지 않는다.
      }

      Counter.prototype.increase = function () {
        return ++num;
      };

      Counter.prototype.decrease = function () {
        return num > 0 ? --num : 0;
      };

      return Counter;
    })();

    const counter = new Counter();

    console.log(counter.increase()); // 1
    console.log(counter.increase()); // 2

    console.log(counter.decrease()); // 1
    console.log(counter.decrease()); // 0
    ```

    </details>

    - `increase` `decrease` 메서드는 프로토타입 메서드이다.
      - 두 메서드는 즉시 실행 함수의 실행 컨텍스트의 렉시컬 환경을 기억하는 클로저이다.
      - 즉, `num`의 값은 `increase`와 `decrease`만이 변경할 수 있다.

5.  고차 함수 활용한 클로저(클로저)
    <details>
       <summary>수정 전 소스코드</summary>

    ```javascript
    // 함수를 인수로 전달받고 함수를 반환하는 고차 함수
    // 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
    function makeCounter(predicate) {
      // 카운트 상태를 유지하기 위한 자유 변수
      let counter = 0;

      // 클로저를 반환
      return function () {
        // 인수로 전달 받은 보조 함수에 상태 변경을 위임한다.
        counter = predicate(counter);
        return counter;
      };
    }

    // 보조 함수
    function increase(n) {
      return ++n;
    }

    // 보조 함수
    function decrease(n) {
      return --n;
    }

    // 함수로 함수를 생성한다.
    // makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다
    const increaser = makeCounter(increase); // ①
    console.log(increaser()); // 1
    console.log(increaser()); // 2

    // increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
    const decreaser = makeCounter(decrease); // ②
    console.log(decreaser()); // -1
    console.log(decreaser()); // -2
    ```

       </details>

       <details>
       <summary>수정 후 소스코드</summary>

    ```javascript
    // 함수를 반환하는 고차 함수
    // 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
    const counter = (function () {
      // 카운트 상태를 유지하기 위한 자유 변수
      let counter = 0;

      // 함수를 인수로 전달받는 클로저를 반환
      return function (aux) {
        // 인수로 전달 받은 보조 함수에 상태 변경을 위임한다.
        counter = aux(counter);
        return counter;
      };
    })();

    // 보조 함수
    function increase(n) {
      return ++n;
    }

    // 보조 함수
    function decrease(n) {
      return --n;
    }

    // 보조 함수를 전달하여 호출
    console.log(counter(increase)); // 1
    console.log(counter(increase)); // 2

    // 자유 변수를 공유한다.
    console.log(counter(decrease)); // 1
    console.log(counter(decrease)); // 0
    ```

       </details>

    - `makeCounter` 함수를 호출할 때 마다 새로운 독립된 렉시컬 환경을 갖는다.
    - 때문에 자유변수 `Counter`를 공유하지 못하여 연동 ❌
    - 해당 부분을 수정한다.

## 📌 24.5 캡슐화와 정보 은닉

객체의 상태를 나타내는 `프로퍼티`와, 프로퍼티를 탐조하고 조작할 수 있는 동작인 `메서드`를 하나로 묶는 것을 **캡슐화(encapsulation)** 라한다.

**캡슐화**는 객체의 특정 `프로퍼티`나 `메서드`를 감출 목적으로 사용하기도 하는데 이를 **정보 은닉(information hiding)** 이라 한다.

- 정보 은닉을 통해 몇가지 효과를 얻을 수 있다.
  - 정보를 보호할 수 있다.
  - 객체간의 상호 의존성을 낮출 수 있다.
    - 결합도를 낮출 수 있다.
- 타 객체지향 언어와는 다르게, 접근 제한자를 제공하지 않는다.
  - 기본적으로 모두 `public`이다.

### ✅ 인스턴스 메서드에서 지역 변수 참조

```javascript
function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  // 인스턴스 메서드
  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };
}

const me = new Person("Lee", 20);
me.sayHi(); // Hi! My name is Lee. I am 20.
console.log(me.name); // Lee
console.log(me._age); // undefined

const you = new Person("Kim", 30);
you.sayHi(); // Hi! My name is Kim. I am 30.
console.log(you.name); // Kim
console.log(you._age); // undefined
```

- `name`의 프로퍼티가 `public`하다.
  - 하지만 `_age`는 `private`하다.
- `sayHi` 메서드가 프로토타입 메서드이므로 Person 객체가 생성될 때마다 중복 생성된다.

### ✅ 프로토타입 메서드에서 지역 변수 참조

```javascript
function Person(name, age) {
  this.name = name; // public
  let _age = age; // private
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
  // Person 생성자 함수의 지역 변수 _age를 참조할 수 없다
  console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
};
```

- `Person.prototype.sayHi` 메서드에서 `_age`를 참조할 수 없다.

### ✅ 프로토타입 메서드를 클로저로 활용

```javascript
const Person = (function () {
  let _age = 0; // private

  // 생성자 함수
  function Person(name, age) {
    this.name = name; // public
    _age = age;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };

  // 생성자 함수를 반환
  return Person;
})();

const me = new Person("Lee", 20);
me.sayHi(); // Hi! My name is Lee. I am 20.

const you = new Person("Kim", 30);
you.sayHi(); // Hi! My name is Kim. I am 30.

// _age 변수 값이 변경된다!
me.sayHi(); // Hi! My name is Lee. I am 30.
```

- `_age`를 즉시 실행 함수로 감싼 후 선언한다.
  - 그 안에 `Person` 생성자 함수와 프로토타입 메서드를 선언한다.
  - 이후 생성자 함수를 반환한다.
- 즉시 실행 함수는 종료되었지만, `Person` 생성자 함수가 여전히 `_age`를 참조할 수 있는 클로저이다.
- `Person` 생성자 함수가 여러개의 인스턴스를 생성해도 `_age` 변수의 상태가 유지된다.

## 📌 24.6 자주 발생하는 실수

`for`문 내부에 함수를 선언하는 경우, 기대하지 않은 값이 나타날 수 있다.

### ✅ `let`키워드 사용하기

```javascript
const funcs = [];

for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}

for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i]()); // 0 1 2
}
```

- `let` 키워드는 블록 레벨 스코프를 따른다.
- 때문에, 반복할 때마다 새로운 렉시컬 환경이 생성된다.

## ✅ 고차 함수 사용하기

```javascript
// 요소가 3개인 배열을 생성하고 배열의 인덱스를 반환하는 함수를 요소로 추가한다.
// 배열의 요소로 추가된 함수들은 모두 클로저다.
const funcs = Array.from(new Array(3), (_, i) => () => i); // (3) [ƒ, ƒ, ƒ]

// 배열의 요소로 추가된 함수 들을 순차적으로 호출한다.
funcs.forEach((f) => console.log(f())); // 0 1 2
```
