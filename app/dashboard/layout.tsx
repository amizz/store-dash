"use client";

import { useSession } from "next-auth/react";
import DashNavbar from "../components/dashboard/dashnavbar";
import { redirect, usePathname } from "next/navigation";
import SubsNotice from "../components/dashboard/subsnotice";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useCompanyStore } from "../store/company";
import { Companies } from "../controllers/company";
import { AccessType, userHasAccess } from "./access";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [companies, setCompanies] = useState<Companies>([]);
    const [isLoading, setLoading] = useState(false);
    const { currentCompany, setDefaultCompany } = useCompanyStore();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/auth/login?callbackUrl=/dashboard/products");
        },
    });
    const access = userHasAccess(pathname, session?.user, currentCompany);

    useEffect(() => {
        setLoading(true);
        fetch("/api/companies")
            .then((res) => res.json())
            .then((data) => {
                setCompanies(data);
                setDefaultCompany(data);
            })
            .finally(() => setLoading(false));
    }, [setDefaultCompany]);

    if (status === "loading" || isLoading) {
        return (
            <div>
                <DashNavbar
                    name={session?.user?.name ?? ""}
                    companies={companies}
                    currentCompany={currentCompany}
                ></DashNavbar>
                <div className="w-full max-w-5xl mx-auto py-5 px-5 sm:px-5 lg:px-1">
                    <div className="flex animate-pulse">
                        <div className="ml-4 mt-2 w-full">
                            <h3 className="h-4 bg-gray-200 rounded-md"></h3>

                            <ul className="mt-5 space-y-3">
                                <li className="w-10/12 h-4 bg-gray-200 rounded-md"></li>
                                <li className="w-5/12 h-4 bg-gray-200 rounded-md"></li>
                                <li className="w-full h-4 bg-gray-200 rounded-md"></li>
                                <li className="w-8/12 h-4 bg-gray-200 rounded-md"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Script src="https://cdn.jsdelivr.net/npm/@preline/dropdown@1.3.0/index.min.js"></Script>
            <DashNavbar
                name={session?.user?.name ?? ""}
                companies={companies}
                currentCompany={currentCompany}
            ></DashNavbar>
            {access === AccessType.PARTIAL && (
                <div>
                    <SubsNotice></SubsNotice>
                    <div className="z-50 w-full h-full absolute"></div>
                </div>
            )}
            <section>{children}</section>
        </div>
    );
}
