//프로그래머스 - 완주하지 못한 선수

function solution(participant, completion) {
  let answer = "";

  //     //map 생성
  //     const runnerMap = new Map();

  //     //participant 돌면서 map에 넣기
  //     participant.forEach((member) => {
  //         //runnerMap에 등록된 동명이인이 있다면, value를 +1
  //         //없다면 등록
  //         if(runnerMap.get(member)) runnerMap.set(member, runnerMap.get(member) + 1);
  //         else runnerMap.set(member, 1);
  //     });

  //     //완주자는 runnerMap에서 제거
  //     completion.forEach((comp) => {
  //         //완주자 명단의 이름이 runnerMap에 있다면, value를 1씩 낮춰줌
  //         if(runnerMap.get(comp)) runnerMap.set(comp, runnerMap.get(comp) - 1);
  //     })

  //     //participant 돌면서 0명보다 많이 남아있는 인원 찾아내기
  //     participant.forEach((member) => {
  //         if(runnerMap.get(member) > 0) answer = member;
  //     })

  let runnerObj = [];

  participant.forEach((member) => {
    runnerObj[member] = runnerObj[member] ? runnerObj[member] + 1 : 1;
  });

  completion.forEach((comp) => {
    runnerObj[comp] = runnerObj[comp] - 1;
  });

  for (let name in runnerObj) {
    if (runnerObj[name] > 0) {
      answer = name;
      break;
    }
  }

  return answer;
}
