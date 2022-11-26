# Includes

## 문제

[898-Includes](https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.ko.md)

## 나의 답

```javascript
type Includes<T extends Array<unknown>, U> = T[number] extends U ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
```

## 해설

### 문제 이해

- `javascript`의 `includes` API와 동일한 기능의 타입을 만드는 문제이다.

### 구현 계획

- 정석적인 방법은 배열을 상속받은 첫 번째 인자를 순회하여, 두번째 인자를 상속받는 경우가 있다면 `true`, 그렇지 않다면 `false`를 반환하는 것이라고 생각했습니다.
- ~~그치만,, 생각만하면 뭐해... 구현이안되는걸...~~
- 처음에는 이전에 풀었던 문제중 number 키워드를 썼던 [Tuple to object](https://github.com/Jun99uu/TIL/blob/master/Typescript-Challenge/TS-Challenge/11-TupleToObject/TupleToObject.md)를 참고해야겠다고 생각했습니다.
  - 그렇게 저 문제에서 작성한 type을 갖고 계속 커스텀 해봤으나, 계속된 빨간줄...
- 결국 참을 수 없던 저는 그만 답을 보고 말았습니다.
  ![image](https://i.pinimg.com/474x/42/d9/2b/42d92b4d351ab29b278f609ec7e339c5.jpg)
- 굳이 `T[number]`를 `A`에 담지 않고.. 그 자체로 `extends`하는지 검사하면 되는거였습니다..!
  - Tuple to object에 나오는 녀석들
  ```javascript
  type Includes<T extends Array<unknown>, U> = T[number] extends U ? true : false
  ```
  - 와웅

## 후기

- 정신을 잃고 답안을 봐버리는 습관을 고쳐야할 것 같습니다.
