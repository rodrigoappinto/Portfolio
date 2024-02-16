'use server'
import PorfolioItem from "../Components/PortfolioItem";
import getPhotosUrls from "@/actions/backend";
import { motion } from "framer-motion";


export default async function PhotoPortfolio() {

    const photosUrls = await (await getPhotosUrls().then((data) => data)).filter((item) => item !== undefined)
    console.log(photosUrls)
    
    return (
            <div>
                <div className="h-12 w-full"></div>
                <div className="w-full flex flex-wrap items-center justify-center object-fit gap-3">

                    {photosUrls.map((url, i) => (
                        url !== undefined && <PorfolioItem key={i} data={url}/>
                    ))}

                </div>
                <div className="h-8 w-full"></div>
                <div className="h-fit w-full flex items-center justify-center ">
                        <p>(: Proudly created by myself for my family, girlfriend, and friends! :)</p>
                </div>
                <div className="h-8 w-full"></div>
            </div>
    );
  }
