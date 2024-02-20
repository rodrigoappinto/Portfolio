'use server'
import PorfolioItem from "../Components/PortfolioItem";
import getPhotosUrls from "@/actions/backend";


export default async function PhotoPortfolio() {

    const photosUrls = await (await getPhotosUrls()).filter((item) => item !== undefined)
    // console.log(photosUrls)
    
    
    return (
            <div className="p-8">

                <div className="z-99 w-full flex flex-wrap items-center justify-center gap-3 mt-4">

                    {photosUrls.map((url, i) => (
                        url !== undefined && <PorfolioItem key={i} data={url}/>))
                    }

                </div>

                <div className="w-full flex items-center justify-center text-center sm:text-base text-xs my-4">
                        <p>(: Proudly created by myself for my family, and friends! :)</p>
                </div>

            </div>
    );
  }
