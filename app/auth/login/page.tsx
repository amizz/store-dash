"use client";

import Navbar from "@/app/components/home/navbar";
import { SignInResponse, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Login() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [signInRes, setSignInRes] = useState<SignInResponse>();

    const email = useRef("");
    const password = useRef("");

    if (session?.user) {
        router.push("/dashboard");
    }

    const onSubmit = async () => {
        const result = await signIn("credentials", {
            username: email.current,
            password: password.current,
            redirect: false,
        });

        if (result?.ok && result.error == null) {
            router.push("/dashboard");
        }

        setSignInRes(result);
    };

    return (
        <div>
            <Navbar></Navbar>
            <main className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm  ">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 ">
                                Sign in
                            </h1>
                            <p className="mt-2 text-sm text-gray-600 ">
                                Don&apos;t have an account yet?
                                <a
                                    className="text-blue-600 decoration-2 hover:underline font-medium"
                                    href="../examples/html/signup.html"
                                >
                                    Sign up here
                                </a>
                            </p>
                        </div>

                        <div className="mt-5">
                            {signInRes?.error && (
                                <div
                                    className="bg-red-50 border border-red-200 text-sm text-red-600 rounded-md p-4 my-5"
                                    role="alert"
                                >
                                    Email or password is invalid
                                </div>
                            )}
                            <div className="grid gap-y-4">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm mb-2 "
                                    >
                                        Email address
                                    </label>
                                    <div className="relative">
                                        <input
                                            onChange={(e) => {
                                                email.current = e.target.value;
                                                setSignInRes(undefined);
                                            }}
                                            type="email"
                                            id="email"
                                            name="username"
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
                                        Please include a valid email address so
                                        we can get back to you
                                    </p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm mb-2 "
                                        >
                                            Password
                                        </label>
                                        <a
                                            className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                            href="../examples/html/recover-account.html"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <input
                                            onChange={(e) => {
                                                password.current =
                                                    e.target.value;
                                                setSignInRes(undefined);
                                            }}
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
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

                                <div className="flex items-center">
                                    <div className="flex">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="shrink-0 mt-0.5 border-2 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <label
                                            htmlFor="remember-me"
                                            className="text-sm "
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
                                    onClick={onSubmit}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
