import { Analytics } from "@vercel/analytics/react";
import SmallSideBar from "./SmallSideBar/page";
import WelcomingPage from "./page";
import PortfolioPage from "./PortfolioPage/page";
import localFont from "@next/font/local";
import SideBar from "./SideBar/page";
import { Suspense } from "react";
import About from "./About/page";
import Loading from "./loading";
import "./globals.css";

// Font files can be colocated inside of `pages`
const majorMono = localFont({
  src: "../public/fonts/MajorMonoDisplayRegular.ttf",
  variable: "--font-major",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Pinto Digital Journal</title>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <div className={`${majorMono.variable}`}>
          <div className="h-full w-full select-none	 font-majorMono text-[#776B5D] bg-[#F3EEEA]">
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