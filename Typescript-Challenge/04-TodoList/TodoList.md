# 타입스크립트로 Todo app 만들기
## 기본 설정
### npm
기본 제공 소스에서 `npm i` 실행<br/>
_모듈 설치_
### ESLint
> 자바스크립트를 분석하여 코딩 컨벤션에 위배되는 코드나 안티패턴을 자동 검출하는 정적 도구
- 일관된 코드 스타일 작성 가능
- 해당 프로젝트에서는 `Prettier`와 같은 컨벤션 익스텐션은 off 해야함.
    - `ctrl + ,` 후 `format on save` 체크박스 해제
- [ESLint](https://eslint.org/)
## any / void
- `tsconfig.json` 내부 `"noImplicitAny": true`를 설정하면
    - `any` 타입이라도 설정해야함. 암묵적 타입 설정이 불가능.
- `any`는 말 그대로 어떤 타입이든 가능.
    - _any를 사용하면 js와 다를 것이 없다._
- `void`는 반환 값이 없는 함수의 반환 형으로 사용 가능.
### filter api
> 배열에서 조건으로 필터링할 수 있는 Api. 아주 많이 쓰인다.
```
a.js ...

let arr = [
    { gender: 'male', name: 'john' },
    { gender: 'female', name: 'sarah' },
    { gender: 'male', name: 'bone' },
];

let filtered = arr.filter(function(item) {
    if (item.gender === 'female') {
        return item;
    }
});
console.log(filtered); // sarah
```
## 원시적인 방법으로 타입 설정하기
- 타입이 필요한 부분에 명확한 타입을 명시해주었다.
    ```
    index.ts
    ...
    let todoItems:Array<{id:number, title:string, done:boolean}>;

    // api
    function fetchTodoItems():Array<{id:number, title:string, done:boolean}> {
    const todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
    ];
    return todos;
    }

    // crud methods
    function fetchTodos():Array<{id:number, title:string, done:boolean}> {
    const todos = fetchTodoItems();
    return todos;
    }

    function addTodo(todo:{id:number, title:string, done:boolean}):void {
    todoItems.push(todo);
    }

    function deleteTodo(index:number) {
    todoItems.splice(index, 1);
    }

    function completeTodo(index:number, todo:{id:number, title:string, done:boolean}) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
    }

    // business logic
    function logFirstTodo():{id:number, title:string, done:boolean} {
    return todoItems[0];
    }

    function showCompleted():Array<{id:number, title:string, done:boolean}>{
    return todoItems.filter(item => item.done);
    }

    // TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
    function addTwoTodoItems() {
    // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
    const item1 = {
        id:4,
        title:"배고파",
        done:false
    }
    addTodo(item1);
    }

    // NOTE: 유틸 함수
    function log() {
    console.log(todoItems);
    }

    todoItems = fetchTodoItems();
    addTwoTodoItems();
    log();
    ```
    - 분명 타입을 명시했으나 너무 길고 복잡함. 생산성이 떨어지는 문제가 발생함.
    - `interface`의 등장!