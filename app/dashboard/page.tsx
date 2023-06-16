"use client";

import { usePathname } from "next/navigation";
import StatCards from "../components/dashboard/statcards";
import { useCompanyStore } from "../store/company";
import { getBlurClass, userHasAccess } from "./access";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession();
    const { currentCompany, setDefaultCompany } = useCompanyStore();
    const path = usePathname();
    const access = userHasAccess(path, session?.user, currentCompany);

    return (
        <main className="w-full max-w-5xl mx-auto py-5 px-5 sm:px-5 lg:px-1">
            <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
            <div
                id="content"
                className={getBlurClass(
                    "w-full max-w-5xl mx-auto py-5",
                    access
                )}
            >
                <StatCards></StatCards>
            </div>
        </main>
    );
}
