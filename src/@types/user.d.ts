type UserData = {
  name: string;
  email: string;
  avatar_url?: string;
};

type UserSignUpRequest = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type UserSignUpResponse = {
  id: string;
  name: string;
  password: string;
  email: string;
  balance: number;
  is_admin: boolean;
  avatar: string;
  created_at: Date;
}

type UserLoginRequest = { email: string; password: string };

type UserLoginResponse = {
  token: string;
  refresh_token: string;
  user: UserData;
};
  