let arr = [9, 7, 8, 10, 5, 1, 3, 4, 2, 6];
console.log(arr);

//버블소트
const bubbleSort = (array) => {
  const length = array.length;
  let i, j, temp;
  for (i = 0; i < length - 1; i++) {
    // 순차적으로 비교하기 위한 반복문
    for (j = 0; j < length - 1 - i; j++) {
      // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
      if (array[j] > array[j + 1]) {
        // 두 수를 비교하여 앞 수가 뒷 수보다 크면
        temp = array[j]; // 두 수를 서로 바꿔준다
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

// const newArr = bubbleSort(arr);
// console.log(newArr);

//삽입정렬
const insertionSort = (array) => {
  const length = array.length;
  let i;
  for (i = 1; i < length; i++) {
    let cur = array[i];
    let left = i - 1;

    while (left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = cur;
  }
  return array;
};
// console.log(insertionSort(arr));

//선택정렬
const selectionSort = (array) => {
  const length = array.length;
  let i, j;
  for (i = 0; i < length; i++) {
    let minIndex = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let swap = array[minIndex];
      array[minIndex] = array[i];
      array[i] = swap;
    }
  }
  return array;
};
console.log(selectionSort(arr));
