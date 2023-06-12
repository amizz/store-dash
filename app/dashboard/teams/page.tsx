"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import DashNavbar from "../../components/dashboard/dashnavbar";

export default function Teams() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/auth/login?callbackUrl=/dashboard/teams");
        },
    });

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <DashNavbar
                name={session?.user?.name ?? ""}
                currentPage="teams"
            ></DashNavbar>
            <h1>Teams</h1>
        </div>
    );
}
