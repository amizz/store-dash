"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import DashNavbar from "../../components/dashnavbar";

export default function Products() {
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
                currentPage="products"
            ></DashNavbar>
            <h1>Products</h1>
        </div>
    );
}
