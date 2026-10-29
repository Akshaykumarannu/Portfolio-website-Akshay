import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Background3D from "@/components/Background3D";

export const metadata: Metadata = {
  title: "Akshay Kumar — Frontend Developer & Creative Builder",
  description:
    "Cinematic developer portfolio of Akshay Kumar, specializing in React.js, Next.js, Redux, and high-performance user interfaces. Software Developer at ViewMyRecords.",
  keywords: [
    "Akshay Kumar",
    "Software Developer",
    "Frontend Developer",
    "React Specialist",
    "Next.js",
    "ViewMyRecords",
    "Cinematic Portfolio",
  ],
  authors: [{ name: "Akshay Kumar" }],
  openGraph: {
    title: "Akshay Kumar — Frontend Developer & Creative Builder",
    description:
      "Crafting responsive interfaces, intelligent dashboards, and meaningful digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-[#080808] text-[#F5F5F5] selection:bg-sky-500/30 selection:text-white"
      >
        <Background3D />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
