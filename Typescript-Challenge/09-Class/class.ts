class Person {
  public name: string;
  private age: number;
  constructor(name: string, age: number) {
    console.log("생성완료");
    this.name = name;
    this.age = age;
  }
}

let rhon = new Person("준규", 24);

console.log(rhon);
