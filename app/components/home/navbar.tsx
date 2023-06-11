import Link from "next/link";

export default function Navbar() {
    return (
        <div className="overflow-hidden">
            <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0">
                <nav
                    className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8 pt-3"
                    aria-label="Global"
                >
                    <div className="relative md:flex md:items-center md:justify-between">
                        <div className="flex items-center justify-between">
                            <Link className="flex-none" href="/">
                                <h1 className="text-lg">StoreDash</h1>
                            </Link>

                            <div className="md:hidden">
                                <button
                                    type="button"
                                    className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-900 transition-all text-sm      "
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
                                            fillRule="evenodd"
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
                            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
                        >
                            <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid ">
                                    <div className="p-3">
                                        <Link
                                            className="inline-flex justify-center items-center gap-x-2 text-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-2.5 px-3"
                                            href="/auth/login"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
