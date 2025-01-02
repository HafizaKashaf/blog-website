import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConfigSite  from "@/config/site";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: ConfigSite.title,
  description: ConfigSite.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning className="scroll-py-20 scroll-smooth" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <NavBar />
        {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
