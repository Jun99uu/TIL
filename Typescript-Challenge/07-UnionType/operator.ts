const logMessage = (value: string) => {
  console.log(value);
};
logMessage("해위");
// logMessage(100); //에러남

const editedLogMessage = (value: string | number) => {
  console.log(value);
  if (typeof value === "number") {
  }
};
editedLogMessage("해위요");
editedLogMessage(100); //에러 안남

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const askSomeone = (someone: Developer | Person) => {
  someone.name; // someone은 name만 접근할 수 있다!!!
  //   someone.skill;
  //   someone.age;
};

const askSomeoneIntersection = (someone: Developer & Person) => {
  someone.name; // someone은 모두 접근 가능하다.
  someone.skill;
  someone.age;
};
