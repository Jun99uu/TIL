type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type Last<T extends Array<any>> = T extends [...Array<any>, infer K]
  ? K
  : never;

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
