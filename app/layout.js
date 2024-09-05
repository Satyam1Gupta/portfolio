import { Calistoga, Inter } from "next/font/google";
import {twMerge} from 'tailwind-merge'
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable:"--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable:"--font-serif", weight:["400"] });

export const metadata = {
  title: "Satyam Kumar Portfolio",
  description: "Devloper Portfolio website devloped using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable,'bg-gray-900 text-white antialiased font-sans')}>{children}</body>
    </html>
  );
}
