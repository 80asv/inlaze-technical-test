import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/home-page/header";
import { getAuth } from "../actions/auth";
import GetLikedMovies from "../components/liked-movies/get-liked-movies";
import getNextCookie from "../utils/getNextCookie";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inlaze Movies",
  description: "A movie database",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = await getAuth();
  const token = await getNextCookie("token");
  const sessionExpired = Boolean(token) && !auth; 
  return (
    <html lang="en">
      <body className={inter.className}>
        <GetLikedMovies />
        <Header auth={auth} sessionExpired={sessionExpired} />
        {children}
      </body>
    </html>
  );
}
