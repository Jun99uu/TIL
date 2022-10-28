enum Shose {
  Nike,
  Adidas,
  Puma,
}

let myShose = Shose.Nike;
console.log(myShose); //0이 출력됨
//이넘을 사용할 때 별도의 값을 지정하지 않으면 전부 숫자형 이넘으로 취급

enum Answer {
  Yes = "Y",
  No = "N",
}

const askQuestion = (answer: Answer) => {
  if (answer === Answer.Yes) {
    console.log("정답");
  }
  if (answer === Answer.No) {
    console.log("오답");
  }
};

askQuestion(Answer.Yes);
askQuestion(Answer.No);
