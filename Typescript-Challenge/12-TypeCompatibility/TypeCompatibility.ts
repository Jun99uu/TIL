// interface Ironman {
//   name: string;
// }

// class Avengers {
//   name: string;
// }

// let i: Ironman;
// i = new Avengers(); // OK, because of structural typing

interface Avengers {
  name: string;
}

let hero: Avengers;
// 타입스크립트가 추론한 y의 타입은 { name: string; location: string; } 입니다.
let capt = { name: "Captain", location: "Pangyo" };
hero = capt;
