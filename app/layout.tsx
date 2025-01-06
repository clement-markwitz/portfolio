import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import {Anek_Telugu} from 'next/font/google'
import { cn } from "@/lib/utils";

const AnekTelugu= Anek_Telugu({subsets: ['latin'], variable: '--font-caption'})
export const metadata: Metadata = {
  title: "Markwitz Clement - Web Developer",
  description: "étudiant en but informatique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={cn(GeistMono.variable, GeistSans.variable,AnekTelugu.variable, "font-sans bg-background text-foreground h-full  scroll-smooth" )}
      >
        {children}
      </body>
    </html>
  );
}
