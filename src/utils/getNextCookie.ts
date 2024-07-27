'use server';
import { cookies } from "next/headers";

export default function getNextCookie(name: string){
  return cookies().get(name);
}