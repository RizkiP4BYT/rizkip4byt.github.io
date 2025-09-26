import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsBold = Poppins({
  weight: "600",
  variable: "--poppins-bold"
});

export const metadata: Metadata = {
  title: "M. Rizki Okta Reza - Introduction Web",
  description: "Welcome to my Introduction Website 👋 I'm M. Rizki Okta Reza!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
