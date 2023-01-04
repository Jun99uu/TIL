type MyOmit<T, K extends keyof T> = {
  [A in Exclude<keyof T, K>]: T[A];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
