"use client";

import { useSession } from "next-auth/react";
import DashNavbar from "../components/dashboard/dashnavbar";
import { redirect, usePathname } from "next/navigation";
import SubsNotice from "../components/dashboard/subsnotice";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useCompanyStore } from "../store/company";
import { Companies } from "../controllers/company";

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
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Script src="https://cdn.jsdelivr.net/npm/@preline/dropdown@1.3.0/index.min.js"></Script>
            <DashNavbar
                name={session?.user?.name ?? ""}
                companies={companies}
            ></DashNavbar>
            {!currentCompany?.active && (
                <div>
                    <SubsNotice></SubsNotice>
                    <div className="z-50 w-full h-full absolute"></div>
                </div>
            )}
            <section>{children}</section>
        </div>
    );
}
