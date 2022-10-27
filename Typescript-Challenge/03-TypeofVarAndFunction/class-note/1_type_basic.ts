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

// TS 튜플
let tsAddress: [string, number] = ["강남", 13];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: '중규리',
//     age: 24,
// };
// 객체를 조금 더 자세히 작성하고 싶다면 아래처럼

let person: { name: string; age: number } = {
  name: "중규리",
  age: 24,
};

// TS 진위 값
let show: boolean = true;
