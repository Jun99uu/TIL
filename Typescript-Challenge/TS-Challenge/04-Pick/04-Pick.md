# Pick

## 문제

[04-Pick](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ko.md)

## 답

```javascript
type MyPick <T, K extends keyof T> = {
  [A in K] : T[A]
}
```

## 해설

- **`Pick`** 은 타입스크립트에서 몇 개의 속성을 서택하여 타입을 정의하는 유틸리티 타입입니다.
- 그리고 이 것을 사용하지 않고 직접 구현하는 것이 문제입니다.
- 예제코드

  ```javascript
  interface Todo {
      title: string
      description: string
      completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

- 문제 이해
  - 문제에서 인터페이스 `T`에서 `K` 프로퍼티를 가져온다고 명시되어있다.
  - 이에따라, 예제코드를 보면 제네릭의 `두 번째 인자`에 `첫 번째 인자(인터페이스)`의 속성 키 값이 들어와있는 것을 확인할 수 있다.
    - **`extends`와 `keyof`를 활용하여 제네릭의 타입을 제한해야겠다고 생각했다.**
    - [제네릭의 타입제한](https://github.com/Jun99uu/TIL/blob/master/Typescript-Challenge/10-Generic/Generic.md)
  - `MyPick` 타입의 제네릭은 어떻게 가져올지 알겠으나, 내부 속성 타입을 어떻게 설정해야할지 모르겠어 **`GDSC SSU 이강현` 학우**님의 풀이를 참고하였다.
    - `Mapped Type`을 이용하면 타입에서 `map API`를 활용한 것과 같은 효과를 낼 수 있다는 것을 알 수 있었다.
    - [Mapped Type](https://joshua1988.github.io/ts/usage/mapped-type.html#%EB%A7%B5%EB%93%9C-%ED%83%80%EC%9E%85-mapped-type-%EC%9D%B4%EB%9E%80)
  - [유니온타입](https://github.com/Jun99uu/TIL/blob/master/Typescript-Challenge/07-UnionType/UnionType.md)인 `K`를 순회하도록 `in` 연산자를 사용하여 `A`를 만들고, `A`의 타입은 `A`에 대한 타입을 반환하도록 `T[A]`로 설정하였다.

## 후기

`easy`난이도의 첫 번째 문제라 별 생각 없이 문제를 봤는데, 생각보다 ~~너무~~ 어려워서 충격받았습니다😂<br/>
강현님의 풀이가 없었다면 아마 며칠 고민하고... 풀지 못하지 않았을까 싶습니다...
