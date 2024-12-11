"use client";

import { useRouter } from "next/navigation";
import SideBarButton from "../Components/SideBarButton";
import Link from "next/link";
import IconLogo from "../Components/MainLogo";

export default function SideBar() {
  const router = useRouter();

  return (
    <div className="sticky top-0 hidden h-screen max-w-96 min-w-36 justify-center gap-y-0 sm:visible sm:flex">
      <div className="w-1/8">
        <Link href="/">
          <div
            onClick={() => router.refresh()}
            className="flex flex-col mt-14 items-center align-middle"
          >
            <IconLogo width="20%"/>
            <div className="w-fit justify-center p-2 text-center">
              Pinto Digital Journal
            </div>
          </div>
        </Link>
        <div className="flex h-[calc(100%-17rem)] w-full flex-col items-center justify-center gap-4">
          <Link href="/PortfolioPage">
            <SideBarButton name="PoRtFoLio" />
          </Link>
          <Link href="/About">
            <SideBarButton name="AboUt Me" />
          </Link>
        </div>
      </div>
´    </div>
  );
}
