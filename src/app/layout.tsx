import { HeaderComponent } from "@/components/HeaderComponent";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankith Ganganna",
  description: "The Pathway of Ankith G's Life",
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-slate-300 text-center py-4 font-PPMori">
      <p className="text-sm">
      Copyright &copy; {new Date().getFullYear()} Ankith G. All rights reserved.
      </p>
    </footer>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className + " select-none"}>
        <HeaderComponent />
        {children}
        <Footer />


        </body>
    </html>
  );
}
