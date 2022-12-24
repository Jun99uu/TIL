//O(1)
const findO1 = (arr) => {
  //배열의 첫 번째 인자가 0이면 true, 아니면 false 반환
  return arr[0] === 0 ? true : false;
};

//O(n)
const findO2 = (arr) => {
  //arr 배열을 돌면서 원소 모두 출력
  arr.map((a) => console.log(a));
};

//O(n^2)
const findO3 = (array) => {
  array.forEach((arr) => {
    arr.forEach((a) => {
      console.log(a);
    });
  });
};

//O(2^n)
const findO4 = (n) => {
  //피보나치 수열
  if (n <= 0) return 0;
  else if (n === 1) return 1;
  return findO4(n - 1) + find(n - 2);
};

//O(logn)
const findO5 = (key, start, end) => {
  for (let i = start; i <= end; i++) {
    arr.push(i);
    let m = (start + end) / 2;

    if (arr[m] === key) {
      console.log(m);
    } else if (arr[m] > key) {
      return findO5(key, start, m - 1);
    } else {
      return findO5(key, m + 1, end);
    }
  }
};

//O(sqrt(n))
const isPrime = (num) => {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

//Drop Constant
const findO6 = (arr) => {
  //arr 배열을 돌면서 원소 모두 출력
  arr.map((a) => console.log(a));
  arr.map((a) => console.log(a));
};

//공간 복잡도
const spaceComplexity = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

const spaceComplexity2 = (array) => {
  let result;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
};

const spaceComplexity3 = (n) => {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = i;
  }
  return array;
};
