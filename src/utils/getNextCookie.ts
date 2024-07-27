'use server';
import { cookies } from "next/headers";

export default async function getNextCookie(name: string){
  return cookies().get(name);
}