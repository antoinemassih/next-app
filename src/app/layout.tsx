import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Rudy Series 10",
  description: "Rudy Series 10. Built for Actual Intelligence. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-background text-foreground antialiased min-h-dvh font-apple`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
