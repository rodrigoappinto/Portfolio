'use client'

import SideBarButton from '../Components/SideBarButton'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'


export default function SideBar() {


    return (
        <div>
            <div className="z-999 sticky h-9 w-full flex items-center justify-center gap-x-16 sm:hidden bg-[#F3EEEA]" >
                <Link href="/Portfolio">
                    <SideBarButton name="PoRtFoLio"/>
                </Link>
                <Link href="/About">
                    <SideBarButton name="AboUt Me"/>
                </Link>
            </div>
        </div>
    );
  }
  
