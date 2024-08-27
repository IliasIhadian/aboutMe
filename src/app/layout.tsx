import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ihadian.com"),
  keywords: [
    "Ilias",
    "ilias",
    "Ihadian",
    "ihadian",
    "ihadin",
    "Ihadin",
    "Ilias Ihadian",
    "ilias ihadian",
    "Ilias Ihadian Lebenslauf",
    "ilias ihadian lebenslauf",
    "Ilias Ihadian Portfolio",
    "ilias ihadian portfolio",
  ],
  title: "Ilias Ihadian",
  description: "Portfolio by Ilias Ihadian",
  icons: "icon.ico",
  openGraph: {
    description: "Hi I am Ilias Ihadian and this is my portfolio website.",
    images: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
