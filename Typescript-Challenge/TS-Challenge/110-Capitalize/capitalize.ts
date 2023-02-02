type CustomCapitalize<T> = T extends `${infer K}${infer R}`
  ? `${Uppercase<K>}${R}`
  : never;
type capitalized = CustomCapitalize<"hello world">; // expected to be 'Hello world'
