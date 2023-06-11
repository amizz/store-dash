export default function PricingSection() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
                    Pricing
                </h2>
                <p className="mt-1 text-gray-600 ">
                    Unbeatable price for all businesses
                </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 lg:px-60 gap-6 lg:items-center">
                <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 ">
                    <h4 className="font-medium text-lg text-gray-800 ">
                        Free trial
                    </h4>
                    <span className="mt-5 font-bold text-5xl text-gray-800 ">
                        <span className="font-bold text-2xl mr-2">$</span>0
                    </span>
                    <p className="mt-2 text-sm text-gray-500">for 30 days</p>

                    <ul className="mt-7 space-y-2.5 text-sm">
                        <li className="flex space-x-2">
                            <svg
                                className="flex-shrink-0 h-5 w-5 text-blue-600"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span className="text-gray-800 ">1 user</span>
                        </li>

                        <li className="flex space-x-2">
                            <svg
                                className="flex-shrink-0 h-5 w-5 text-blue-600"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span className="text-gray-800 ">
                                Product support
                            </span>
                        </li>
                    </ul>

                    <a
                        className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4   "
                        href="#"
                    >
                        Sign up
                    </a>
                </div>

                <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 ">
                    <p className="mb-3">
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs uppercase font-semibold bg-blue-100 text-blue-800  ">
                            Most popular
                        </span>
                    </p>
                    <h4 className="font-medium text-lg text-gray-800 ">
                        Business
                    </h4>
                    <span className="mt-5 font-bold text-5xl text-gray-800 ">
                        <span className="font-bold text-2xl mr-2">$</span>9
                    </span>
                    <p className="mt-2 text-sm text-gray-500">per month</p>

                    <ul className="mt-7 space-y-2.5 text-sm">
                        <li className="flex space-x-2">
                            <svg
                                className="flex-shrink-0 h-5 w-5 text-blue-600"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span className="text-gray-800 ">2 users</span>
                        </li>

                        <li className="flex space-x-2">
                            <svg
                                className="flex-shrink-0 h-5 w-5 text-blue-600"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span className="text-gray-800 ">
                                Product support
                            </span>
                        </li>
                    </ul>

                    <a
                        className="mt-5 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
                        href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}
