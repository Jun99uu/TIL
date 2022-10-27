# 타입스크립트의 인터페이스
## 변수와 함수에서 인터페이스
### 변수
- `interface`안에 변수 이름과, 해당 변수의 type을 함께 작성
    ```
    interface Person {
        age: number;
        name: string;
    }

    // 변수에 인터페이스 활용
    let rhon:Person = {
        age:24,
        name:"준규"
    }
    ```

### 함수
- 함수 자체에 인터페이스 활용
    ```
    function getPerson(person: Person) {
        console.log(person);
    }
    getPerson(rhon);
    ```
- 함수 스펙에 인터페이스 활용
    ```
    interface sumFunction {
    (a: number, b: number): number
    }

    let sum: sumFunction;
    sum = function(a: number, b: number): number {
        return a + b;
    }
    ```

## 인덱싱과 딕셔너리
### 인덱싱
- [배열의 인덱싱](https://m.blog.naver.com/dsz08082/221906136014) 방식에 `interface`를 적용할 수 있음
    ```
    interface StringArray {
    [index: number]: string;
    }

    let stringArr: StringArray = ['a','b','c'];
    stringArr[0] = 'd';
    ```

### 딕셔너리 패턴
- 딕셔너리 패턴은 `key:value` 형태에서 각각의 타입을 지정해줄 수 있는 것.
    ```
    interface StringRegexDictionary {
        [key: string]: RegExp
    }

    let objReg = {
        cssFile: /\.css$/,
        jsFile: /\.js$/,
    }

    Object.keys(objReg).forEach(function(value) {
        console.log(value);
    })
    ```
    - 위의 경우, `RegExp`(정규표현식)을 value로 가져야하는 딕셔너리 형태.

## 인터페이스 확장
### 확장(상속)
- 특정 인터페이스가 다른 인터페이스가 갖고있는 값을 동일하게 갖고있다면?
    ```
    interface CSPerson {
        name: string;
        age: number;
    }

    interface Developer{
        name: string;
        age: number;
        language: string;
    }
    ```
    이런 경우에, `extends`를 통해 상속(확장)을 할 수 있다.
    ```
    interface CSPerson {
        name: string;
        age: number;
    }

    interface Developer extends CSPerson{
        language: string;
    }

    let captainDev: Developer = {
        name: 'captain',
        age: 100,
        language: 'ts',
    }
    ```
    이렇게 사용 가능하다.