import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Piyush Prajapati | Portfolio",
  description:
    "Second-year Computer Science Engineering student at Chitkara University. Crafting high-end digital solutions.",
  openGraph: {
    title: "Piyush Prajapati | Portfolio",
    description:
      "Crafting high-end digital solutions. Frontend Engineering, Backend Integration, Web Optimization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${epilogue.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface font-body text-on-surface">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
