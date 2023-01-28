interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type LookUp<T, K> = T extends { type: K } ? T : never;

type MyDogType = LookUp<Cat | Dog, "dog">; // 기대되는 결과는 `Dog`입니다.
