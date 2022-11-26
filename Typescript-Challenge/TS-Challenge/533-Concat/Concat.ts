type Concat<T extends Array<unknown>, U extends Array<unknown>> = [...T, ...U];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
