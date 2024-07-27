'use server';

import { cookies } from "next/headers";
import { envConfig } from "../config/env.config";

interface LoginResponse {
  token: string;
  user: User;
}

interface RegisterResponse {
  user: User;
}

interface User {
  email: string;
  password: string;
}


export const login = async (email: string, password: string) => {
  const user = { email, password };
  const response = await fetch(`${envConfig.DB_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = (await response.json() as LoginResponse);
  cookies().set('token', data.token);
  return data;
}

export const register = async (email: string, password: string) => {
  const user = { email, password };
  const response = await fetch(`${envConfig.DB_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = (await response.json() as RegisterResponse);
  return data;
}