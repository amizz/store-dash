import NextAuth, { Awaitable, RequestInternal } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connection as db } from "mongoose";
import { User } from "@/app/interfaces/model";

const handler = NextAuth({
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
                    const userRes = await db.collection<User>("user").findOne({
                        email: credentials?.username,
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
                            id: userRes._id.toHexString(),
                            name: userRes.name,
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
});

export { handler as GET, handler as POST };
