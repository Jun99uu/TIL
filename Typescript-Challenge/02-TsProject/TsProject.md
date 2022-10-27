# 02. 타입스크립트로 프로젝트를 시작하는 방법

## 타입스크립트로 프로젝트 시작하기

### tsc

> 브라우저가 바로 ts를 읽을 수 없기때문에 `commpile` 과정이 필요하다.

- tsc 명령어 사용하기 위해 코드 작성 후 typescript install<br/>
  ![image](https://user-images.githubusercontent.com/44965706/198180851-c903591d-185f-4550-a7a3-a85111b2259c.png)<br/>
  ```
  & npm i typescript -g
  ```
- tsc로 `compile`
  ```
  & tsc index.ts
  ```

### webpack

`tsconfig.json`파일 생성 후 key:value 형태로 여러 속성 작성

```javascript
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noImplicitAny": true
  }
}
```

[타입스크립트 설정 파일 옵션](https://www.typescriptlang.org/docs/handbook/compiler-options.html)에서 tsconfig 옵션 확인<br/>
[타입스크립트 플레이그라운드](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)에서 ts->js 변환과정 확인<br/>
[자바스크립트 바벨](https://babeljs.io/)에서 최신 자바스크립트 문법 확인<br/>
