export type SignUpType = {
  username: string;
  email: string;
  password: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type UserType = {
  id: number;
  username: string;
  img: string;
  status: string;
  crown: number;
};
