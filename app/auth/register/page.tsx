import Navbar from "@/app/components/home/navbar";
import { User } from "@/app/interfaces/model";
import { prisma } from "@/app/lib/db";
import { hash } from "bcryptjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Register({
    searchParams,
}: {
    searchParams: { error: string };
}) {
    const err =
        searchParams.error && searchParams.error === "ERR_USER_REGISTERED";

    async function submit(data: FormData) {
        "use server";

        const input = {
            email: data.get("email")?.toString() ?? "",
            password: await hash(data.get("password")?.toString()!, 12),
            name: data.get("name")?.toString() ?? "",
        };

        const user = await prisma.user.findFirst({
            where: {
                email: input.email,
            },
        });

        if (user) {
            redirect("/auth/register?error=ERR_USER_REGISTERED");
        }

        const userInsert = await prisma.user.create({
            data: {
                name: input.name,
                email: input.email,
                password: input.password,
            },
        });

        if (userInsert) {
            redirect("/auth/login");
        }
    }

    function validateForm(data: Partial<User & { [key: string]: any }>) {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const element = data[key];
            }
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <main className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800">
                                Sign up
                            </h1>
                            <p className="mt-2 text-sm text-gray-600">
                                Already have an account?
                                <Link
                                    className="text-blue-600 decoration-2 hover:underline font-medium"
                                    href="/auth/login"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>

                        <div className="mt-5">
                            <form action={submit}>
                                <div className="grid gap-y-4">
                                    {err && (
                                        <div
                                            className="bg-red-50 border border-red-200 text-sm text-red-600 rounded-md p-4 my-5"
                                            role="alert"
                                        >
                                            Email or password is invalid
                                        </div>
                                    )}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm mb-2"
                                        >
                                            Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                                                required
                                                aria-describedby="name-error"
                                            />
                                            <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p
                                            className="hidden text-xs text-red-600 mt-2"
                                            id="name-error"
                                        >
                                            Please include a valid name
                                        </p>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm mb-2"
                                        >
                                            Email address
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                                                required
                                                aria-describedby="email-error"
                                            />
                                            <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p
                                            className="hidden text-xs text-red-600 mt-2"
                                            id="email-error"
                                        >
                                            Please include a valid email address
                                            so we can get back to you
                                        </p>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-sm mb-2"
                                        >
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                                                required
                                                aria-describedby="password-error"
                                            />
                                            <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p
                                            className="hidden text-xs text-red-600 mt-2"
                                            id="password-error"
                                        >
                                            8+ characters required
                                        </p>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="confirm-password"
                                            className="block text-sm mb-2"
                                        >
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                id="confirm-password"
                                                name="confirm-password"
                                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                                                required
                                                aria-describedby="confirm-password-error"
                                            />
                                            <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p
                                            className="hidden text-xs text-red-600 mt-2"
                                            id="confirm-password-error"
                                        >
                                            Password does not match the password
                                        </p>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <label
                                                htmlFor="remember-me"
                                                className="text-sm"
                                            >
                                                I accept the{" "}
                                                <a
                                                    className="text-blue-600 decoration-2 hover:underline font-medium"
                                                    href="#"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
