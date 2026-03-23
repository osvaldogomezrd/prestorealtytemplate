import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Presto Realty Las Vegas | Fast Cash Home Buyers | No Fees",
  description:
    "Presto Realty — Las Vegas #1 cash home buyers. We buy houses in any condition. Get a fair cash offer in 24 hours, close in 7 days. No fees, no repairs, no commissions.",
  keywords:
    "Presto Realty, we buy houses Las Vegas, cash home buyers Las Vegas, sell my house fast Las Vegas, cash for houses Nevada",
  openGraph: {
    title: "Presto Realty Las Vegas | Fast Cash Home Buyers",
    description:
      "Get a fair cash offer from Presto Realty for your Las Vegas home in 24 hours. Close in 7 days. No fees, no repairs.",
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
      <body className="min-h-full flex flex-col">
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
          <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
