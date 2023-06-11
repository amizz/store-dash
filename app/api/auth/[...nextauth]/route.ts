import NextAuth, { Awaitable, RequestInternal, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
                const users = [
                    {
                        id: "1",
                        name: "Amirul",
                        email: "mail@mail.com",
                        password: "12345678",
                    },
                ];

                const user = users.find(
                    (val) =>
                        val.email === credentials?.username &&
                        val.password === credentials.password
                );

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
});

export { handler as GET, handler as POST };
