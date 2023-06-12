import { signOut } from "next-auth/react";
import Link from "next/link";

export default function DashNavbar({
    name,
    currentPage,
}: {
    name: string;
    currentPage: string;
}) {
    const logout = () => {
        signOut({
            callbackUrl: "/auth/login",
        });
    };
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-600 border-b border-white/[.5] text-sm py-3 sm:py-0">
            <nav
                className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex items-center justify-between">
                    <a
                        className="flex-none text-xl font-semibold text-white"
                        href="#"
                        aria-label="Brand"
                    >
                        StoreDash
                    </a>
                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                            data-hs-collapse="#navbar-collapse-with-animation"
                            aria-controls="navbar-collapse-with-animation"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="hs-collapse-open:hidden w-4 h-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                            <svg
                                className="hs-collapse-open:block hidden w-4 h-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id="navbar-collapse-with-animation"
                    className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
                >
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                        <Link
                            // className="font-medium text-white sm:py-6"
                            className={`font-medium text-white sm:py-6 ${
                                currentPage !== "dashboard"
                                    ? "text-white/[.8]"
                                    : ""
                            }`}
                            href="/dashboard"
                        >
                            Dashboard
                        </Link>
                        <Link
                            className={`font-medium text-white sm:py-6 ${
                                currentPage !== "products"
                                    ? "text-white/[.8]"
                                    : ""
                            }`}
                            href="/dashboard/products"
                        >
                            Products
                        </Link>
                        <Link
                            className={`font-medium text-white sm:py-6 ${
                                currentPage !== "teams" ? "text-white/[.8]" : ""
                            }`}
                            href="/dashboard/teams"
                        >
                            Teams
                        </Link>

                        <Link
                            className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-l sm:border-white/[.3] sm:my-6 sm:pl-6"
                            href="/dashboard/profiles"
                        >
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                            {name}
                        </Link>

                        <div className="p-3">
                            <button
                                type="button"
                                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                                onClick={logout}
                            >
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="96"
                                    height="96"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="m2 12 5 4v-3h9v-2H7V8z"
                                        fill="#fff"
                                    ></path>
                                    <path
                                        d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"
                                        fill="#fff"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
