type MyAwaited<T> = T extends Promise<infer T> ? Awaited<T> : Promise<T>;

type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string
