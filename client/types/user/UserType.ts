export type SignUpType = {
  username: string;
  email: string;
  password: string;
  img: string;
  status?: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type BackendUserType = {
  id: number;
  username: string;
  email: string;
  password: string;
  img: string;
};
export type LoggedUserType = {
  status: string;
} & BackendUserType;

export type GuestUserType = {
  status: string;
};

export type FetchingUserType = {
  status: string;
};

export type UserType = LoggedUserType | GuestUserType | FetchingUserType;
