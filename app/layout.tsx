import "./globals.css"
import SideBar from "./SideBar/page"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex font-MajorMonoDisplay text-[#776B5D] bg-[#F3EEEA]">
          <SideBar/>
          {/* <div className="inline-block h-full w-[0.1rem] self-stretch bg-black opacity-100 dark:opacity-50"></div>           */}
          <main className="w-full flex">
            {children}
          </main>
        </div>
        <div className="flex justify-end bg-[#F3EEEA]">
        </div>
      </body>
    </html>
  )
}