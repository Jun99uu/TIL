# 03. 변수와 함수 타입 정의하기

## 기본 타입

### 문자열, 숫자, 배열

```javascript
// JS 문자열 선언
let jStr = "hello";

// TS 문자열 선언
let tStr: string = "hello";

// TS 숫자 선언
let num: number = 10;

// TS 배열 선언
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["captain", "thor", "hulk"];
let items: number[] = [1, 2, 3];
```

### 튜플, 객체, 진위값

```javascript
// TS 튜플
let tsAddress: [string, number] = ["강남", 13];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: '중규리',
//     age: 24,
// };
// 객체를 조금 더 자세히 작성하고 싶다면 아래처럼

let person: { name: string, age: number } = {
  name: "중규리",
  age: 24,
};

// TS 진위 값
let show: boolean = true;
```

### 함수

```javascript
// 함수의 파라미터와 반환값에 타입을 정의하는 방식
const sum = (a: number, b: number): number => {
  return a + b;
};
sum(10, 20);

// 옵셔널 파라미터 - 함수의 선택적 파라미터
const log = (a: string, b?: string, c?: string): void => {
  console.log("optional parameter");
};
log("hello");
log("hello", "world");
```

- 옵셔널 파라미터의 경우, 선택적으로 넣어도 되고 안넣어도 되는 인자에 `?` 붙임
