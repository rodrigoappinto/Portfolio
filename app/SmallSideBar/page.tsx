"use client";

import SideBarButton from "../Components/SideBarButton";
import React, { useState } from "react";
import Link from "next/link";
import IconLogo from "../Components/MainLogo";

export default function SideBar() {
  return (
    <div>
      <div className="z-99 fixed flex h-14 w-full items-center justify-center gap-x-5 bg-[#F3EEEA] pt-1 sm:hidden">
        <Link href="/PortfolioPage">
          <SideBarButton name="PoRtFoLio" />
        </Link>
        <Link href="/">
          <IconLogo width="50px" height="50px"/>
        </Link>
        <Link href="/About">
          <SideBarButton name="AboUt Me" />
        </Link>
      </div>
    </div>
  );
}
