"use client";

import { useSession } from "next-auth/react";
import DashNavbar from "../components/dashboard/dashnavbar";
import { redirect } from "next/navigation";

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
            <DashNavbar name={session?.user?.name ?? ""}></DashNavbar>
            <section>{children}</section>
        </div>
    );
}
