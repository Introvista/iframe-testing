import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiger System",
  description: "Tiger System",
  manifest: "/manifest.json", // Add manifest link
  themeColor: "#000000", // Define theme color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo.png"></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
