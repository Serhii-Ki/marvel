export type SignUpType = {
  username: string;
  password: string;
  confirm_password: string;
};

export type SignInType = {
  username: string;
  password: string;
};

export type ResponseSignUpType = {
  id: string;
  jwt: string;
};

export type ResponseSignInType = {
  token: string;
};

export type ErrorType = {
  message: string;
};
