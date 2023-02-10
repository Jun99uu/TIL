type ReplaceAll<
  T extends string,
  From extends string,
  To extends string
> = T extends `${infer P}${From}${infer N}`
  ? `${P}${To}${ReplaceAll<N, From, To>}`
  : T;

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
