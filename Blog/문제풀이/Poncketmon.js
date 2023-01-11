function solution(nums) {
  let answer = 0;

  //폰켓못이 담길 object
  let myBag = new Map();

  //nums를 돌면서 key(폰켓몬 번호) : value(마릿수) 형태의 해시 생성
  nums.forEach((monster) => {
    if (myBag.get(monster)) myBag.set(monster, myBag.get(monster) + 1);
    else myBag.set(monster, 1);
  });

  //폰켓몬의 종류가 N/2 보다 크면, 최댓값인 N/2가 정답.
  //폰켓몬의 종류가 N/2 보다 작다면, 최댓값은 폰켓몬 종류의 수가 됨.
  if (myBag.size < nums.length / 2) answer = myBag.size;
  else answer = nums.length / 2;

  return answer;
}
