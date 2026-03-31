import { Analytics } from "@vercel/analytics/react";
import WelcomingPage from "./page";
import PortfolioPage from "./PortfolioPage/page";
import localFont from "next/font/local";
import About from "./About/page";
import "./globals.css";
import type { Metadata } from "next";

const majorMono = localFont({
  src: "../public/fonts/MajorMonoDisplayRegular.ttf",
  variable: "--font-major",
});

export const metadata: Metadata = {
  title: "Pinto Digital Journal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={majorMono.variable}>
          <div className="h-full w-full select-none font-majorMono text-[#776B5D] bg-[#F3EEEA]">
            <WelcomingPage />
            <PortfolioPage />
            <About />
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}