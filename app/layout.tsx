import Provider from "./components/main/provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "StoreDash",
    description: "E-commerce solution for small and medium businesses",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
