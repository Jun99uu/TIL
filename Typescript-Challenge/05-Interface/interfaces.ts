interface Person {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let rhon:Person = {
    age:24,
    name:"준규"
}

// 함수에 인터페이스 활용
function getPerson(person: Person) {
    console.log(person);
}
getPerson(rhon);

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
    (a: number, b: number): number
}

let sum: sumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let stringArr: StringArray = ['a','b','c'];
stringArr[0] = 'd';

// 인터페이스 딕셔너리 패턴
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

// 인터페이스 확장 (상속)
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