import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Web-Store",
  description: "Online Store",
};
const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
