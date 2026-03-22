import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "We Buy Houses Las Vegas | Fast Cash Home Buyers | No Fees",
  description:
    "Las Vegas #1 cash home buyers. We buy houses in any condition. Get a fair cash offer in 24 hours, close in 7 days. No fees, no repairs, no commissions.",
  keywords:
    "we buy houses Las Vegas, cash home buyers Las Vegas, sell my house fast Las Vegas, cash for houses Nevada",
  openGraph: {
    title: "We Buy Houses Las Vegas | Fast Cash Home Buyers",
    description:
      "Get a fair cash offer for your Las Vegas home in 24 hours. Close in 7 days. No fees, no repairs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
