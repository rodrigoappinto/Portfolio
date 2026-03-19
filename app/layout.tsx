import { Analytics } from "@vercel/analytics/react";
import SmallSideBar from "./SmallSideBar/page";
import WelcomingPage from "./page";
import PortfolioPage from "./PortfolioPage/page";
import localFont from "next/font/local";
import SideBar from "./SideBar/page";
import { Suspense } from "react";
import About from "./About/page";
import Loading from "./loading";
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
        <div className={`${majorMono.variable}`}>
          <div className="h-full w-full select-none	font-majorMono text-[#776B5D] bg-[#F3EEEA]">
            <WelcomingPage />
            <PortfolioPage />
            <About />
            {/* <SmallSideBar /> */}
            {/* <SideBar /> */}
            {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}