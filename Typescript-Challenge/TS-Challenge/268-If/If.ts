type If<T extends boolean, S, R> = T extends true ? S : R;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
