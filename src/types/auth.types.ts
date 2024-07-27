export interface AuthType {
  type: string;
  message: string | null;
}

export interface Auth {
  _id: string;
  email: string;
  password: string;
  __v: number;
}