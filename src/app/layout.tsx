import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";
import "./globals.css";

const abeezee = ABeeZee({
  weight: "400",
  variable: "--font-aclonica",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "My person portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${abeezee.variable} ${abeezee.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
