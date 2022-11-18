# If

## 문제

[268-If](https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.ko.md)

## 나의 답

```javascript
    type If<T extends boolean, S, R> = T extends true ? S : R;

    type A = If<true, "a", "b">; // expected to be 'a'
    type B = If<false, "a", "b">; // expected to be 'b'
```

## 해설

### 문제 이해

- 3개의 `parameter`를 갖는 타입에서, 첫 번째에 들어온 `boolean` 타입을 통해 반환할 타입을 선택하는 문제이다.

### 구현 계획

- 뭔가 생각보다 쉬운 느낌이 들어서 작성해보았습니다.
  ```javascript
      type If<T, S, R> = T extends true ? S : R;
  ```
  ![image](https://user-images.githubusercontent.com/44965706/202705959-864a8011-5e28-4215-951a-3da453a3f115.png)<br/>
  ![image](https://user-images.githubusercontent.com/44965706/202706034-f358bd71-9482-46ab-8077-91c0a73a1a4e.png)<br/>
  - `이왜진`?
- 진짜 답인가 하여 답안을 확인해보았습니다.
  - `GDSC SSU 이강현 학우`님의 답안을 확인해본 결과, 위 코드에서 `T`의 타입을 `boolean`으로 강제하였습니다.
    ```javascript
        type If<T extends boolean, S, R> = T extends true ? S : R;
    ```
    - 정답!

## 후기

- 오잉 타입스크립트 챌린지 풀면서 가장 쉬웠던 문제였습니다...!!!!!!!!!!!!!!!!
- `enum`들 easy가 뭔지 모르는줄 알았는데 알긴 아는구나!
