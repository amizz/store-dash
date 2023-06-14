import NextAuth, { Awaitable, RequestInternal } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connection as db } from "mongoose";
import { User } from "@/app/interfaces/model";
import connectDB from "@/app/lib/mongoose";

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
                    await connectDB();
                    const userRes = await db.collection<User>("user").findOne({
                        email: credentials?.username,
                    });
                    console.log("userRes", userRes);

                    if (!userRes) {
                        throw new Error("Email or password is invalid");
                    }

                    const passwordVerify = await bcrypt.compare(
                        credentials?.password ?? "",
                        userRes.password
                    );
                    console.log("passwordVerify", passwordVerify);

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
