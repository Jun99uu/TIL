const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x); // 1
}

bar();
