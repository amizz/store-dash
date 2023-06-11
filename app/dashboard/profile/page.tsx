"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import DashNavbar from "../../components/dashboard/DashNavbar";

export default function Profile() {
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
            <DashNavbar
                name={session?.user?.name ?? ""}
                currentPage="profile"
            ></DashNavbar>
            <h1>Profile</h1>
        </div>
    );
}
