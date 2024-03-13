import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUiProvider } from './_provider/NextUiProvider';
import Bubbles from "./_component/Bubbles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vasyl Marchak",
  description: "Vasyl Marchak CV",
  icons:[
    {
      rel: "icon",
      url: "https://storage.googleapis.com/bonuslite1/vasyl_marchak_favicon.ico",
    },
  ],
    openGraph: {
      type: "website",
      url: 'https://vasylmarchak.com',
      images: [
        {
          url: 'https://storage.googleapis.com/bonuslite1/avatar.jpeg',
          width: 800,
          height: 600,
        },
        {
          url: 'https://storage.googleapis.com/bonuslite1/avatar.jpeg',
          width: 1800,
          height: 1600,
          alt: 'Vasyl Marchak',
        },
      ],
      siteName: "Vasyl Marchak",
      title: "Vasyl Marchak",
      description: "Vasyl Marchak CV",
      locale: 'en_US',
    },
    twitter: {
      card: "summary",
      title: "Vasyl Marchak",
      description: "Vasyl Marchak CV",
      images: ['https://storage.googleapis.com/bonuslite1/avatar.jpeg'],
    },
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
