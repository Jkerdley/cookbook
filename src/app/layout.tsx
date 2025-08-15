import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/UI/Header/Header";
import { HeroProvider } from "./providers/providers";
import { siteConfig } from "./config/site.config";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <HeroProvider>
                    <Header />
                    <section className="flex align-center justify-center bg-blue-900 mb-8 color-red">{children}</section>
                </HeroProvider>
            </body>
        </html>
    );
}
