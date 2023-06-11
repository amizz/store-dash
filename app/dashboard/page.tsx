"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import DashNavbar from "../components/dashboard/DashNavbar";

export default function Dashboard() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/auth/login?callbackUrl=/dashboard");
        },
    });

    const logout = () => {
        signOut({
            callbackUrl: "/auth/login",
        });
    };

    return (
        <div>
            <DashNavbar name={session?.user?.name ?? ""}></DashNavbar>
            <h1>Dashboard</h1>
        </div>
    );
}
