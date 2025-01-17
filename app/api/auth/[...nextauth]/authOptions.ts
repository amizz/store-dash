import { prisma } from "@/app/lib/db";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
    secret: "uiwgsbkfuajsuiugbkus",
    pages: {
        signIn: "/auth/login",
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    const userRes = await prisma.user.findFirst({
                        where: {
                            email: credentials?.username,
                        },
                    });

                    if (!userRes) {
                        throw new Error("Email or password is invalid");
                    }

                    const passwordVerify = await bcrypt.compare(
                        credentials?.password ?? "",
                        userRes.password
                    );

                    if (passwordVerify) {
                        return {
                            id: userRes.id,
                            name: userRes.name,
                            email: userRes.email,
                        };
                    } else {
                        throw new Error("Email or password is invalid");
                    }
                } catch (error) {
                    throw new Error("Email or password is invalid");
                }
            },
        }),
    ],
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.uid as string;
            }
            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
    },
    session: {
        strategy: "jwt",
    },
};
