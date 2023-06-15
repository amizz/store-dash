import NextAuth from "next-auth";

declare module "@preline/dropdown";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
        };
    }
}
