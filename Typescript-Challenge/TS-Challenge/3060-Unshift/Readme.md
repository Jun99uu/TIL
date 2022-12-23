# Unshift

## 문제

[3060-Unshift](https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.ko.md)

## 나의 답

```javascript
type Unshift<T extends Array<any>, K> = [K, ...T];
type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
```

## 해설

### 문제 이해

- `Array.unshift`를 제네릭으로 구현하는 문제이다.
- `Push`와 마찬가지로, 문제에 있는 예제를 보면 ~~문제 자체는~~이해가 잘 된다.
  - `Unshift`는 `Push`와 다르게, 배열 시작점에 원소를 추가하는 메소드이다.

### 구현 계획

- 어라라..? `Push`와 순서만 다르고 동일해 보이는데..?!
  - 한 번 해보았다.
    `javascript
    type Unshift<T extends Array<any>, K> = [K, ...T];
    type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
    `
    ![image](https://user-images.githubusercontent.com/44965706/209284885-107bd5c5-9b83-4c48-956e-9afdedbde40e.png)
- 띠용 결과가 잘 나오긴한다. 답을 보고와야겠다.
  - 엥 또 맞았네

## 후기

- 아놔 시험기간에 바빠서 그냥 포기했는데... 그냥 풀걸 후회되네요 ㅋ.ㅋ
