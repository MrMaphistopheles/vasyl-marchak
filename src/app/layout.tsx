import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUiProvider } from './_provider/NextUiProvider';
import Bubbles from "./_component/Bubbles";

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
      
        <Bubbles>
         
        <main className="flex justify-center light overflow-y-scroll hide-scroll glass h-[100dvh]">
              {children}
        </main>
          </Bubbles>
     
        </NextUiProvider>
      </body>
    </html>
  );
}
