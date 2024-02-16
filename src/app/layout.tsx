import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUiProvider } from './_provider/NextUiProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vasyl Marchak",
  description: "Vasyl Marchak CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUiProvider>
          <main className="flex justify-center w-full h-[100dvh] light dark:dark">
            {children}
          </main>
        </NextUiProvider>
      </body>
    </html>
  );
}
