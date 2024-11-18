import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/Header";

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '500', '900'], display: 'swap' })

export const metadata: Metadata = {
  title: "Movies App",
  description: "Movies app created by Jairo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {roboto.className} >
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
