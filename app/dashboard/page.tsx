"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import DashNavbar from "../components/dashnavbar";

export default function Dashboard() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/auth/login?callbackUrl=/dashboard");
        },
    });

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    const logout = () => {
        signOut({
            callbackUrl: "/auth/login",
        });
    };

    return (
        <div>
            <DashNavbar
                name={session?.user?.name ?? ""}
                currentPage="dashboard"
            ></DashNavbar>
            <h1>Dashboard</h1>
        </div>
    );
}
