# 35 스프레드 문법

## 📌 35.0 스프레드 문법을 공부하기 전에

ES6에 도입된 스프레드 문법(전개 문법)은, **순회할 수 있는 이터러블을 펼쳐서 개별적인 값들의 목록으로 만드는 문법**이다.

### ✅ 순회 가능한 이터러블

- `Array`
- `String`
- `Map`
- `Set`
- `DOM 컬렉션`
  - NodeList
  - HTMLCollection
  - arguments
  - for ... of

### ✅ 예제

```javascript
// ...[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]); // 1 2 3

// 문자열은 이터러블이다.
console.log(..."Hello"); // H e l l o

// Map과 Set은 이터러블이다.
console.log(
  ...new Map([
    ["a", "1"],
    ["b", "2"],
  ])
); // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3])); // 1 2 3

// 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
console.log(...{ a: 1, b: 2 });
// TypeError: Found non-callable @@iterator
```

위 값의 _1 2 3_ 은 값이 아닌 **값들의 목록**이다.

즉, **스프레드 문법의 결과는 값이 아니며 이는 곧 스프레드 문법이 연산자가 아님을 의미**한다.

따라서 스프레드 문법의 결과는 변수에 할당할 수 없다.

### ✅ 스프레드 문법의 사용

- 함수 호출문의 인수 목록
- 배열 리터럴의 요소 목록
- 객체 리터럴의 프로퍼티 목록

## 📌 35.1 함수 호출문의 인수 목록에서 사용하는 경우

`Array`과 같은 요소들의 집합에서, 값들을 목록으로 만든 후 인수로 전달하는 경우가 있다.

```javascript
const arr = [1, 2, 3];

// 배열 arr의 요소 중에서 최대값을 구하기 위해 Math.max를 사용한다.
const max = Math.max(arr); // -> NaN
```

`Math.max`와 같은 가변인자 함수의 경우 `Array` 내부 값의 목록을 스프레드 문법으로 전달할 수 있다.

### ✅ 스프레드 문법이 나오기 전

```javascript
var arr = [1, 2, 3];

// apply 함수의 2번째 인수(배열)는 apply 함수가 호출하는 함수의 인수 목록이다.
// 따라서 배열이 펼쳐져서 인수로 전달되는 효과가 있다.
var max = Math.max.apply(null, arr); // -> 3
```

스프레드 문법이 나오기 전, `Array`를 펼쳐서 요소의 목록을 함수의 인자로 전달하고 싶은 경우 `Function.prototype.apply`를 사용했다.

### ✅ Rest와의 혼동

스프레드 문법은 `Rest 파라미터`와 형태가 동일하다.

```javascript
const arr = [1, 2, 3];

// 스프레드 문법을 사용하여 배열 arr을 1, 2, 3으로 펼쳐서 Math.max에 전달한다.
// Math.max(...[1, 2, 3])은 Math.max(1, 2, 3)과 같다.
const max = Math.max(...arr); // -> 3
```

`Rest 파라미터`는 함수에 전달된 인수들의 목록을 배열로 전달받기 위해 매개변수 이름 앞에 `...`을 붙이는 것이다.

이미 하나의 값으로 뭉쳐있는 배열을 값의 목록으로 변환하는 `스프레드 문법`과는 반대의 개념이다.

때문에 혼동에 유의해야한다.

## 📌 35.2 배열 리터럴 내부에서 사용하는 경우

> ES5에서 복잡한 방식을, 스프레드 문법으로 해결할 수 있다.

### ✅ concat

`concat`은 2개의 배열을 1개로 결합할 때 사용하는 메서드이다.

이것은 스프레드 문법으로 간단히 대체될 수 있다.

```javascript
// ES5
var arr = [1, 2].concat([3, 4]);
console.log(arr); // [1, 2, 3, 4]

---

// ES6
const arr = [...[1, 2], ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]
```

### ✅ splice

`splice`는 배열 내부에 다른 배열의 요소들을 추가하거나 제거할 때 사용하는 메서드이다.

`splice` 메서드의 세 번째 인수로 값을 전달하면, 기존 배열에 값이 추가된다.

하지만, 인수로 배열을 전달하면 배열 자체가 추가된다.

떄문에 `Function.prototype.apply`을 사용해서 값의 목록을 전달해야했다.

```javascript
// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];

// 세 번째 인수 arr2를 해체하여 전달해야 한다.
// 그렇지 않으면 arr1에 arr2 배열 자체가 추가된다.
arr1.splice(1, 0, arr2);

// 기대한 결과는 [1, [2, 3], 4]가 아니라 [1, 2, 3, 4]다.
console.log(arr1); // [1, [2, 3], 4]

---

// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];

/*
apply 메서드의 2번째 인수(배열)는 apply 메서드가 호출한 splice 메서드의 인수 목록이다.
apply 메서드의 2번째 인수 [1, 0].concat(arr2)는 [1, 0, 2, 3]으로 평가된다.
따라서 splice 메서드에 apply 메서드의 2번째 인수 [1, 0, 2, 3]이 해체되어 전달된다.
즉, arr1[1]부터 0개의 요소를 제거하고 그 자리(arr1[1])에 새로운 요소(2, 3)를 삽입한다.
*/
Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1); // [1, 2, 3, 4]
```

하지만 스프레드 문법으로 간단하게 대체할 수 있다.

```javascript
// ES6
const arr1 = [1, 4];
const arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1); // [1, 2, 3, 4]
```

### ✅ 배열 복사

ES5에선 배열을 복사하기 위해 `splice`를 사용하였다.

하지만 ES6에선 스프레드 문법으로 간단하게 대체할 수 있다.

```javascript
// ES6
const origin = [1, 2];
const copy = [...origin];

console.log(copy); // [1, 2]
console.log(copy === origin); // false
```

### ✅ 이터러블을 배열로 변환

- ES5에서 이터러블을 배열로 전환하는 방법
  - `slice` 메서드 호출
    - `Function.prototype.apply`
    - `Function.prototype.call`
    - 해당 방식은 **이터러블이 아닌 유사 배열 객체**에서도 사용이 가능하다.
- ES6에서 이터러블을 배열로 전환하는 법
  - `스프레드` 문법
    - **이터러블 + 유사 배열 객체**에서는 사용이 가능하다.
    - **이터러블이 아닌 유사 배열 객체**에서는 사용이 불가능하다.
  - `Rest` 문법
- **이터러블이 아니면서 유사 배열 객체**인 경우

  - ES6의 `Array.from`을 사용한다.

<details>
<summary>예제 코드</summary>

- `slice` 메서드 호출하여 전환하기

  ```javascript
  // ES5
    function sum() {
    // 이터러블이면서 유사 배열 객체인 arguments를 배열로 변환
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
    }

    console.log(sum(1, 2, 3)); // 6

    ---

    // 이터러블이 아닌 유사 배열 객체
    const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
    };

    const arr = Array.prototype.slice.call(arrayLike); // -> [1, 2, 3]
    console.log(Array.isArray(arr)); // true
  ```

- `스프레드` 문법으로 배열 전환하기

  - 이터러블이면서 유사 배열 객체인 경우

    ```javascript
    // ES6
    function sum() {
      // 이터러블이면서 유사 배열 객체인 arguments를 배열로 변환
      return [...arguments].reduce((pre, cur) => pre + cur, 0);
    }

    console.log(sum(1, 2, 3)); // 6
    ```

  - 이터러블이 아니면서 유사 배열 객체인 경우

    ```javascript
    // 이터러블이 아닌 유사 배열 객체
    const arrayLike = {
      0: 1,
      1: 2,
      2: 3,
      length: 3,
    };

    const arr = [...arrayLike];
    // TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
    ```

- `Rest` 문법으로 배열 전환하기

  ```javascript
  // Rest 파라미터 args는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
  const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);

  console.log(sum(1, 2, 3)); // 6
  ```

- `Array.from` 으로 배열 전환하기
  ```javascript
  // Array.from은 유사 배열 객체 또는 이터러블을 배열로 변환한다
  Array.from(arrayLike); // -> [1, 2, 3]
  ```
  </details>

## 📌 35.3 객체 리터럴 내부에서 사용하는 경우

`스프레드 프로퍼티`를 사용하면, 객체 리터럴의 프로퍼티 목록에도 스프레드 문법을 사용할 수 있다.

**스프레드 문법의 대상은 이터러블이어야 하지만, 스프레드 프로퍼티 제안은 일반 객체를 대상으로도 스프레드 문법의 사용을 허용한다.**

> 이것은 `Rest 프로퍼티`와 함께 TC39 프로세스의 stage 4(Finished) 단계에 제안되어 있다.

```javascript
// 스프레드 프로퍼티
// 객체 복사(얕은 복사)
const obj = { x: 1, y: 2 };
const copy = { ...obj };
console.log(copy); // { x: 1, y: 2 }
console.log(obj === copy); // false

// 객체 병합
const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }
```

스프레드 프로퍼티는 `Object.assign` 메서드를 대체할 수 있는 간편한 문법이다.

```javascript
// 객체 병합. 프로퍼티가 중복되는 경우, 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{ x: 1, y: 2 }, y: 100 };
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } }
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 };
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log(added); // { x: 1, y: 2, z: 0 }
```
