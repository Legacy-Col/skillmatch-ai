import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AOSProvider from "@/components/Providers";
import './globals.css';
import Providers from "./providers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillMatch AI",
  description: "A Learning, skill matching platform thats connects learners to employers",
  icons: {
    icon: "/comments.png",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider>
          <Providers>
            {children}
          </Providers>
        </AOSProvider>
      </body>
    </html>
  );
}
