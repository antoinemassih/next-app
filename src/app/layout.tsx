import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "iPhone 16e - Latest iPhone. Greatest price.",
  description: "iPhone 16e. Built for Apple Intelligence. Big on the basics. Bold on battery. Beautifully bright.",
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
