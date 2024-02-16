'use client'

import { useRouter } from "next/navigation";
import SideBarButton from "../Components/SideBarButton"
import Link from 'next/link'

export default function SideBar() {

    const router = useRouter();

    return (
        <div className="h-screen flex sticky top-0 my-2">
            <div className="w-1/8 text-[#726455]">
                <Link href="/" >
                <div onClick={() => router.refresh()}className="w-full h-24 mt-24 flex text-center items-center justify-center bg-[#F3EEEA] ">
                    <div className="w-1/3 text-left">
                        Pinto Digital Journal
                    </div>
                    <div>
                        Symbol
                    </div>
                </div>
                </Link>
                <div className="h-[calc(100%-17rem)] w-full flex flex-col justify-center items-center gap-4">
                    <Link href="/Portfolio">
                        <SideBarButton name="portfolio"/>
                    </Link>
                    <Link href="/About">
                        <SideBarButton name="About Me"/>
                    </Link>
                </div>
            </div>
            {/* <div className="h-screen w-1 bg-[#726455]"></div> */}
        </div>
    );
  }
