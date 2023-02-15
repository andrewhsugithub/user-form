type User = {
  username: string;
  age: string;
};

type RawUser = {
  id: string;
} & User;
