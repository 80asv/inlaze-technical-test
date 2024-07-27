'use server';
import { cookies } from "next/headers"

export const removeNextCookie = (name: string) => {
  cookies().delete(name);
}