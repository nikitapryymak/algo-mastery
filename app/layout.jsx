import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Algo Mastery",
  description: "Master data structures, algorithms and design patterns!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-4`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
