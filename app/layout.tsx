import "./globals.css"
import SideBar from "./SideBar/page"
import SmallSideBar from "./SmallSideBar/page"
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="sm:flex sm:flex-row flex flex-col font-MajorMonoDisplay text-[#776B5D] bg-[#F3EEEA]">
          <SmallSideBar/>
          <SideBar/>
          <main className="w-full h-full">
            {children}
          <Analytics />
          </main>
        </div>
        <div className="flex justify-end bg-[#F3EEEA]">
        </div>
      </body>
    </html>
  )
}