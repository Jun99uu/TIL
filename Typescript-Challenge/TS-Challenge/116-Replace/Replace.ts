type Replace<
  T extends string,
  From extends string,
  To extends string
> = T extends `${infer P}${From}${infer N}` ? `${P}${To}${N}` : never;
type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
