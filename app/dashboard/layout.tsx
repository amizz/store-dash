"use client";

import { useSession } from "next-auth/react";
import DashNavbar from "../components/dashboard/dashnavbar";
import { redirect } from "next/navigation";
import SubsNotice from "../components/dashboard/subsnotice";
import Script from "next/script";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/auth/login?callbackUrl=/dashboard/products");
        },
    });

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Script src="https://cdn.jsdelivr.net/npm/@preline/dropdown@1.3.0/index.min.js"></Script>
            <DashNavbar name={session?.user?.name ?? ""}></DashNavbar>
            <SubsNotice></SubsNotice>
            <section>{children}</section>
        </div>
    );
}
