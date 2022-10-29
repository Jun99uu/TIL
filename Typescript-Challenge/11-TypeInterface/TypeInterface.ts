let x = 3;
// 따로 타입을 지정하지 않아도 number로 추론됨.

let arr = [0, 1, null];

window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button); //<- OK
  console.log(mouseEvent.kangaroo); //<- Error!
};

window.onscroll = function (uiEvent) {
  console.log(uiEvent.button); //<- Error!
};
