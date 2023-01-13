function solution(arr) {
  let answer = [];

  answer = arr.filter((el, index) => el !== arr[index - 1]);

  return answer;
}
