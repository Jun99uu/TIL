// string 타입을 사용할 때
// const name: string = 'capt';

// 타입 별칭을 사용할 때
// type MyName = string;
// const name: MyName = 'capt';

type Developer = {
  name: string;
  skill: string;
};

type User<T> = {
  name: T;
};
