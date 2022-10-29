# 타입 호환(Type Compatibility)

> 티압스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미한다.

```javascript
interface Ironman {
  name: string;
}

class Avengers {
  name: string;
}

let i: Ironman;
i = new Avengers(); // OK, because of structural typing
```

- 위 코드에서 에러가 발생하지 않는 이유는 `Structural Typing` 때문이다.

## 구조적 타이핑(Structural Typing)

- **코드 구조 관점**에서 타입이 서로 호환되는지 여부를 판단하는 것이다.

## Soundness

- 컴파일 시점에 타입을 추론할 수 없는 특정 타입에 대해서 일단 안전하다고 보는 특징을 말한다.
