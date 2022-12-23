# Push

## 문제

[3057-Push](https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.ko.md)

## 나의 답

```javascript
type Push<T extends Array<any>, K> = [...T, K]
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```

## 해설

### 문제 이해

- `Array.push`를 제네릭으로 구현하는 문제이다.
- 문제에 있는 예제를 보면 ~~문제 자체는~~이해가 잘 된다.

### 구현 계획

- 우선 두개의 인자를 받고 있으니 `type Push<T, K>` 라고 생각한다.
- 그런데 이 중 첫 번째 인자는 배열 형태이다.
  - `type Push<T extends Array<number>, K>` 이렇게 될 것이다.
  - 문제에는 숫자 배열이 왔지만, 어떤 값이든 올 수 있다고 생각한다면
    - `number`를 `any`로 바꾼다.
- [Concat](https://github.com/Jun99uu/TIL/tree/master/Typescript-Challenge/TS-Challenge/533-Concat)에서 써먹었던 `spread` 연산자로 `T`의 원소들을 뿌려준다.
- 여기까지 하면, 아래와 같은 타입이 생성된다.

```javascript
type Push<T extends Array<any>, K> = [...T, K]
```

![image](https://user-images.githubusercontent.com/44965706/209283785-4a24d397-4250-426c-ae7f-35a79270ae6d.png)

- 그렇다면 정답인지 확인을 해보면..!!!
  - 오 웬열 맞는 것 같다 **1트 성공**

## 후기

- 헉 대박 역대급으로 쉬운 문제였습니다 옴호놔
