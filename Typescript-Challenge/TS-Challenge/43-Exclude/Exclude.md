# Exclude

## 문제

[43-Exclude](https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.ko.md)

## 답

```javascript
    type MyExclude<T, U> = T extends U ? never : T;
    type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

## 해설

### 문제이해

- 타입스크립트의 `Exclude<"a"|"b"|"c">`를 직접 구현하는 문제이다.

### 구현계획

- 어떻게 구현해야할지 감이 잘 안잡혀서 고민하다가, 결국 구글링을 하고 말았다...
- 그리고 구현 로직에 대해 알 수 있었다.
  - `T`와 `U` 타입을 제네릭으로 받는다.
  - `union type`으로 들어온 `T`와 `U`를 비교하여 `never`를 반환할지, `T`를 반환할지 결정한다.
- 최종 코드
  ```javascript
  type MyExclude<T, U> = T extends U ? never : T;
  type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
  ```
  ![image](https://user-images.githubusercontent.com/44965706/200991803-9259df6f-317e-4faf-99ca-7b03815db94d.png)

## 후기

- 제네릭으로 타입을 두개 받아와서, 유니온 타입의 첫 인자를 두 번째 인자에게 상속받은 후 이를 비교하는 방식이라고 이해했는데, 이게 정확히 맞는지는 잘 모르겠습니다.
- 뭔가 이렇게 제네릭을 활용하는게 느낌으로는 와닿지만, 정확한 용어나 방식이 헷갈리는 것이... 아직은 개념이 모자라다고 느낍니다.
- 지금은 프로젝트에서 항상 간단한 타입스크립트 개념만 사용하고 있는데, 스터디에서 체화한 타입스크립트 스킬을 프로젝트에서도 적용할 수 있도록... 정진해야겠씁니다😂
