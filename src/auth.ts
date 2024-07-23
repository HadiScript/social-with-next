import NextAuth from "next-auth";
import Github from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from "./db";


const GItHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GItHUB_CLIENT_SECRET = process.env.GItHUB_CLIENT_SECRET;

if (!GItHUB_CLIENT_ID || !GItHUB_CLIENT_SECRET) {
  throw new Error("Missing github auth credentials")
}

export const { handlers: { GET, POST }, auth, signOut, signIn } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: GItHUB_CLIENT_ID,
      clientSecret: GItHUB_CLIENT_SECRET
    })
  ],
  callbacks: {

    // usually not needed, here we are fixing a bug in nextAuth
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id
      }

      return session;
    }
  }

})