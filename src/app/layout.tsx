import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";
import { META_DESCRIPTION, META_FAV_ICON, META_TITLE } from "~/data";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  icons: {
    icon: META_FAV_ICON,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bitter.variable} antialiased`}>{children}</body>
    </html>
  );
}
