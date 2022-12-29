//join
let arr1 = ["a", "b", "c"];
// console.log(arr1.join());

//split
let arr2 = "a,b,c";
// console.log(arr2.split(","));

//reverse
let arr3 = ["a", "b", "c"].reverse();
// console.log(arr3);

//slice
let arr4 = ["a", "b", "c"];
const slice = arr4.slice(1, 2);
// console.log(arr4);
// console.log(slice);

//splice
let arr5 = ["a", "b", "c", "d", "e"];
const splice = arr5.splice(1, 2);
// console.log(arr5);
// console.log(splice);

//find
let arr6 = ["a", "b", "c", "d", "e"];
// const find = arr6.find((element, index) => {
//   console.log(`element : ${element}  |  index : ${index}`);
// });

// const find2 = arr6.find((element) => {
//   return element === "b";
// });
// console.log(find2);

//filter
let arr7 = ["a", "b", "c", "c", "c", "c", "d"];
const filter = arr7.filter((element, index) => element === "c");
// console.log(filter);

//map
let arr8 = ["a", "b", "c", "c", "c", "c", "d"];
const map = arr8.map((element, index) => `내 성적 ${element}`);
// console.log(map);

//some
let arr9 = ["a", "b", "c", "c", "c", "c", "d"];
const isThereA = arr9.some((element, index) => element === "a");
const isThereF = arr9.some((element, index) => element === "f");
// console.log(isThereA, isThereF);

//reduce
let arr10 = ["a", "b", "c", "c", "c", "c", "d"];
// const reduce = arr10.reduce((prev, cur) => {
//   console.log(prev);
//   console.log(cur);
//   return prev + cur;
// }, "hello, ");
// console.log(reduce);

//sort
let arr11 = ["f", "z", "e", "a", "b", "d", "i", "s"];
//asc
arr11.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  if (a === b) return 0;
});
console.log(arr11);
//desc
arr11.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  if (a === b) return 0;
});
console.log(arr11);
