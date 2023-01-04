# Omit

## 문제

[03-Omit](https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.ko.md)

## 나의 답

```javascript
    type MyOmit<T, K extends keyof T> = {
    [A in Exclude<keyof T, K>]: T[A];
    };

    interface Todo {
    title: string;
    description: string;
    completed: boolean;
    }

    type TodoPreview = MyOmit<Todo, "description" | "title">;

    const todo: TodoPreview = {
    completed: false,
    };
```

## 해설

### 문제 이해

- 내장 제네릭 `Omit<T, K>`는 `T`에서 `K` 프로퍼티를 제거한 타입을 반환합니다.
- 해당 `Omit`을 직접 구현하는 것이 문제입니다.

### 구현 계획

- [04-Pick](https://github.com/Jun99uu/TIL/blob/master/Typescript-Challenge/TS-Challenge/04-Pick/04-Pick.md)과 유사하다고 느껴졌습니다.
  - 때문에 `in`을 이용해 `K` 프로퍼티를 가져오는 `Pick`과 다르게, `in`을 이용해 `K` 프로퍼티를 제외하면 되겠다라고 생각했습니다.
  ```javascript
      type MyOmit<T, K extends keyof T> = {
          [A in K]: T[A];
      };
  ```
  - 위 코드에서 변형을 주어야겠다 생각했습니다.
- 삼항 연산자나 `never`를 써봐도 사라지지 않는 빨간 줄...
- 결국 다른 분들의 풀이를 참고했습니다🙄
  - 강현님의 풀이에서 `Exclude`라는 힌트를 얻고, [43-Exclude](https://github.com/Jun99uu/TIL/blob/master/Typescript-Challenge/TS-Challenge/43-Exclude/Exclude.md)를 다시 보러갔습니다.
  ```javascript
      type MyOmit<T, K extends keyof T> = {
          [A in Exclude<keyof T, K>]: T[A];
      };
  ```

## 후기

- `Exclude`없이 풀 수 있을 것 같은데... 조금 더 고민해봐야겠습니다!
