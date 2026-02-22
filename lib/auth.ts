import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from 'zod';

const loginSchema = z.object({
    email : z.string().email(),
    password : z.string().min(6)
})

export const { handlers , auth , signIn , signOut } = NextAuth({
    session : {
        strategy : "jwt"
    },
    pages : {
        signIn : '/login',
    },
    callbacks : {
        async jwt({ token , user}) {
            if(user){
                token.sub = user.id
                token.role = user.role
            }
            return token;
        },
        async session({session , token}) {
            session.user.id = token.id as string
            session.user.role = token.role as string
            return session;
        }
    },
    providers : [
        Credentials({
            async authorize(credentials) {
                const parsed = loginSchema.safeParse(credentials)
                if(!parsed.success) return null
                const { email , password } = parsed.data;
                const user = await prisma.user.findUniqe({
                    where : { email }
                })
                if(!user || !user.password) return null
                const isValid = await bcrypt.compare(password , user.password);
                if(!isValid) return null
                return {
                    id : user.id,
                    name : user.name,
                    email : user.email,
                    role : user.role,
                }
            }
        })
    ]
})