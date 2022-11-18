# Awaited

## 문제

[189-Awaited](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.ko.md)

## 나의 답

```javascript
  type MyAwaited<T> = T extends Promise<infer T> ? Awaited<T> : Promise<T>;

  type ExampleType = Promise<string>;

  type Result = MyAwaited<ExampleType>; // string
```

## 해설

### 문제 이해

- 타입을 감싸고 있는 타입을 구현
- 외부 타입은 내부 타입이 무엇인지 알 수 있는 타입이어야 함

### 구현 계획

- 전혀 감이 안오니까 일단 무작정 코드 써보기!
  ```javascript
  type MyAwaited<T> = T;
  ```
  - 역시 이렇게 쉬우면 `타입스크립트 챌린지`가 아니었습니다.
- 뭐라도 상속 받아보기...?
  ```javascript
      type MyAwaited<T> = T extends T ? Promise<T> : T;
  ```
  - 문제에서 `Promise<T>`를 사용하고 있기에, 내부 타입이 `Promise<T>`인 경우 `T`타입이 반환되게 하였습니다.
  - 하지만 이렇게 쉬우면 `타입스크립트 챌린지`가 아니었습니다.
  - 이후 접근 방법을 모르겠어서, `GDSC SSU 유지민 학우`의 해설을 슬쩍 훔쳐봤습니다.
- `infer` 키워드 사용
  - 조건부 타입의 조건식이 참으로 평가될 때 사용할 수 있는 키워드
    - `Element<number> extends Element<infer U>`와 같은 타입에서 `U`타입은 `number`로 추론됨.
    - 즉 `U`가 추론 가능하면 **참**, 아니면 **거짓**
  - `infer` 키워드를 문제에 적용하여 보았습니다.
    - 조건식에 있어야 하니까 위에서 작성한 코드와 조금 상이해집니다.
    ```javascript
        type MyAwaited<T> = T extends Promise<infer T> ? T : Promise<T>;
    ```
    ![image](https://user-images.githubusercontent.com/44965706/202699178-b07c6e99-16b6-4126-a083-651c09a096de.png)
    - 이제 문제에서 나온 예제 코드에서 `string`이 정상적으로 나와서 정답인줄 알았
    - 는데 이렇게 쉬우면 `타입스크립트 챌린지`가 아니었습니다.
- 타입의 재귀적 언래핑
  - `Promise<Promise<T>>`타입의 경우 `string`이 나오기 위해서, `Awaited` 타입을 이용합니다.
    - `Awaited` 타입 자체가, 해당 챕터와 같이 재귀적으로 래핑되어 있는 타입을 꺼내주는 역할이라고 합니다.
    - [참고자료](https://jaeheon.kr/239)
    ```javascript
        type MyAwaited<T> = T extends Promise<infer T> ? Awaited<T> : Promise<T>;
    ```
    ![image](https://user-images.githubusercontent.com/44965706/202699024-97de380c-973f-456d-b1dd-f20674866689.png)

## 후기

- 이게 어떻게 `easy`인지 모르겠으나,,
- 타입스크립트의 깊은 개념을 다루는 뿌듯함이 있습니다.
- `infer`같은 키워드들을 모아서 공부해야겠습니다.
  - 한가해지면...ㅎㅎ
