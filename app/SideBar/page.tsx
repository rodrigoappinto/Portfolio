'use client'

import { useRouter } from "next/navigation";
import SideBarButton from "../Components/SideBarButton"
import Link from 'next/link'

export default function SideBar() {

    const router = useRouter();

    return (
        <div className="hidden sm:visible sm:flex h-screen sticky top-0 my-2">
            <div className="w-1/8 text-[#726455]">
                <Link href="/" >
                <div onClick={() => router.refresh()}className="w-full h-24 mt-24 flex text-center items-center justify-center bg-[#F3EEEA] ">
                    <div className="w-fit text-center">
                        Pinto Digital Journal
                    </div>
                    {/* <div>
                        Symbol
                    </div> */}
                </div>
                </Link>
                <div className="h-[calc(100%-17rem)] w-full flex flex-col justify-center items-center gap-4">
                    <Link href="/Portfolio">
                        <SideBarButton name="PoRtFoLio"/>
                    </Link>
                    <Link href="/About">
                        <SideBarButton name="AboUt Me"/>
                    </Link>
                </div>
            </div>
            {/* <div className="h-screen w-1 bg-[#726455]"></div> */}
        </div>
    );
  }
