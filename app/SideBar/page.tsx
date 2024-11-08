"use client";

import { useRouter } from "next/navigation";
import SideBarButton from "../Components/SideBarButton";
import Link from "next/link";

export default function SideBar() {
  const router = useRouter();

  return (
    <div className="sticky top-0 hidden h-screen max-w-96 min-w-36 justify-center gap-y-0 sm:visible sm:flex">
      <div className="w-1/8">
        <Link href="/">
          <div
            onClick={() => router.refresh()}
            className="mt-24 flex h-32 w-full flex-col items-center justify-center p-2 text-center align-middle sm:h-[8rem]"
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 522 402"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M307.203 34.0929L342.666 23.5355L375.942 17.0371C376.068 17.0124 376.197 17 376.326 17H406.458C406.553 17 406.648 17.0068 406.742 17.0204L451.819 23.5017C451.975 23.5242 452.128 23.5651 452.275 23.6236L503.741 44.1481C504.501 44.4513 505 45.1873 505 46.0059V381.934C505 383.378 503.516 384.346 502.194 383.764L489.175 378.032C489.069 377.985 488.96 377.948 488.848 377.92L436.307 364.949C436.15 364.91 435.989 364.891 435.827 364.891H376.132H358.89C358.731 364.891 358.572 364.91 358.416 364.948L276.468 384.943C276.313 384.981 276.154 385 275.994 385H240.442C240.328 385 240.215 384.99 240.103 384.971L123.747 364.952C123.511 364.911 123.271 364.913 123.036 364.958L19.3714 384.552C18.1398 384.785 17 383.84 17 382.587V45.8761C17 45.1239 17.4221 44.4353 18.0923 44.0939L58.0298 23.7534C58.311 23.6102 58.622 23.5355 58.9375 23.5355H107.407H151.362H187.016C187.221 23.5355 187.425 23.567 187.62 23.6288L274.838 51.2464C275.669 51.5096 276.234 52.2811 276.234 53.1531V192.202V332.716"
                stroke="#776B5D"
                strokeWidth="33"
                strokeLinecap="round"
              />
              <path
                d="M109.464 272V149.504H160.68C169.245 149.504 176.637 151.088 182.856 154.256C190.013 157.893 195.704 163.115 199.928 169.92C204.152 176.608 206.264 184 206.264 192.096C206.264 200.192 204.152 207.643 199.928 214.448C195.821 221.253 190.189 226.475 183.032 230.112C176.931 233.28 169.48 234.864 160.68 234.864H141.496V272H109.464Z"
                fill="#776B5D"
              />
              <path
                d="M350.12 272V149.504H395.704C404.621 149.504 412.835 151.733 420.344 156.192C427.971 160.651 434.013 166.693 438.472 174.32C442.931 181.829 445.16 190.043 445.16 198.96V222.544C445.16 231.461 442.931 239.733 438.472 247.36C434.013 254.869 427.971 260.853 420.344 265.312C412.835 269.771 404.621 272 395.704 272H350.12Z"
                fill="#776B5D"
              />
            </svg>
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
      {/* <div className="h-screen w-1 bg-[#726455]"></div> */}
    </div>
  );
}
