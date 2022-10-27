// 함수의 파라미터와 반환값에 타입을 정의하는 방식
const sum = (a: number, b: number): number => {
  return a + b;
};
sum(10, 20);

// 옵셔널 파라미터 - 함수의 선택적 파라미터
const log = (a: string, b?: string, c?: string): void => {
  console.log("optional parameter");
};
log("hello");
log("hello", "world");
