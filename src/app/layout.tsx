import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshay Kumar - Software Developer | React & Next.js Specialist",
  description: "Portfolio of Akshay Kumar, a passionate Software Developer specializing in React, Next.js, and modern web technologies. Based in Kasaragod, Kerala, India.",
  keywords: ["Akshay Kumar", "Software Developer", "React Developer", "Next.js", "Frontend Developer", "Web Development", "Portfolio"],
  authors: [{ name: "Akshay Kumar" }],
  openGraph: {
    title: "Akshay Kumar - Software Developer Portfolio",
    description: "Explore my portfolio showcasing modern web applications built with React, Next.js, and cutting-edge technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
