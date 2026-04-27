import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import css from "@/app/globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/providers/TanStackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
     subsets: ["latin"],
 weight: ["400"],
   });
export const metadata: Metadata = {
  title: "Music TaNyasha's World",
  description: "Welcome to Tanyasha's World - a space of music, emotions, and songs. Originals and covers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable}`}>
      <body>
         <TanStackProvider>
        <Header />
        <main>{children}</main>
</TanStackProvider>
      </body>
     
    </html>
  );
}
