function solution(progresses, speeds) {
  let answer = [];
  //100이 넘은 값을 제외한 시작 인덱스
  let number = 0;
  //연속으로 배포할 수 있는 개수
  let cnt = 0;

  while (true) {
    if (number === progresses.length) {
      //모든 인덱스를 돌고 끝났을 때
      answer.push(cnt);
      break;
    }

    if (progresses[number] >= 100) {
      //검사하는 인덱스의 값이 100보다 크다면, 시작인덱스와 배포 개수를 1씩 증가
      number++;
      cnt++;
      continue;
    } else {
      //배포 개수가 0개보다 클 때만 answer에 담음
      if (cnt > 0) answer.push(cnt);
      cnt = 0;
    }

    for (let i = number; i < progresses.length; i++) {
      //100이 넘을 때까지 반복하며 더해줌
      progresses[i] += speeds[i];
    }
  }

  return answer;
}

function solution2(progresses, speeds) {
  let answer = [];
  //남은 일수를 담은 배열
  let days = progresses.map((el, index) =>
    Math.ceil((100 - el) / speeds[index])
  );
  let max = days[0];
  let cnt = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[i] <= max) {
      cnt++;
    } else {
      max = days[i];
      answer.push(cnt);
      cnt = 1;
    }
  }
  answer.push(cnt);

  return answer;
}
