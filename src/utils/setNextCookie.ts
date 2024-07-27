'use server';
import { cookies } from "next/headers";

export default async function setNextCookie(name: string, value: string){
  cookies().set(name, value);
}