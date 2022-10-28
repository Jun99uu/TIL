// const logText = (text) => {
//   console.log(text);
//   return text;
// };
// logText(10); // 숫자 10
// logText("ㅎㅇ"); //문자열 ㅎㅇ
// logText(true); // 진위값 true 반환

// const logText = <T>(text: T): T => {
//   console.log(text);
//   return text;
// };
// logText<string>("ㅎㅇ"); //문자열 ㅎㅇ가 호출되므로, 반환도 문자열이 된다고 알려주고 있다.

const logText = <T>(text: T): T => {
  console.log(text);
  return text;
};

const num = logText<number>(10); // 제네릭으로 타입이 number, 인자가 10
const str = logText<string>("ㅎㅇ"); // 제네릭으로 타입이 string, 인자가 ㅎㅇ

str.split(""); //문자열로 사용가능

// interface Dropdown{
//     value:string;
//     selected:boolean
// }
// const obj:Dropdown = {value:10, selected:false}; //타입 에러(value는 string이 와야함)

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<number> = { value: 10, selected: false }; //타입에러 안남!

// const logTextLength = <T>(text: T): T => {
//   console.log(text.length);
//   return text;
// };
// logTextLength("ㅎㅇ");

interface LengthType {
  length: number;
}
const logTextLength = <T extends LengthType>(text: T): T => {
  text.length;
  return text;
};
logTextLength({ length: 10 });

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
