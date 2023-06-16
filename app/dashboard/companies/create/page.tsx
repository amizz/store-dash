"use client";
import { useRef } from "react";

export default async function Companies() {
    // const name = useRef("");
    // const planId = useRef("");

    // const submit = () => {
    //     fetch("/api/companies", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             name: name.current,
    //             planId: planId.current,
    //         }),
    //     });
    // };

    return (
        <main className="w-full max-w-5xl mx-auto py-5 px-5 sm:px-5 lg:px-1">
            <h1 className="text-lg font-semibold text-gray-800">
                Create Companies
            </h1>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="mx-auto max-w-2xl">
                    <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10">
                        <form>
                            <div className="mb-4 sm:mb-8">
                                <label
                                    htmlFor="hs-feedback-post-comment-name-1"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="hs-feedback-post-comment-name-1"
                                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                                    placeholder="Full name"
                                />
                            </div>

                            <div></div>

                            <div className="mt-6 grid">
                                <button
                                    type="submit"
                                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
