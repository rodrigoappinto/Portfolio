import { storageRef } from "../db/firebase";
import Portfolio from "../Components/Portfolio";
import { getDownloadURL, listAll } from "firebase/storage";

export default async function PortfolioPage() {

  let photosUrls: string[] = [];
  
  try {
    const res = await listAll(storageRef);
    const downloadPromises = res.items
      .filter(itemRef => itemRef.name.endsWith('.jpg'))
      .map(itemRef => getDownloadURL(itemRef));

    photosUrls = await Promise.all(downloadPromises);
  } catch (error) {
    console.error("Error fetching image URLs:", error);
  }

  return (
    <div className="h-full w-full">
      <div className="mt-10 flex flex-wrap items-center justify-center px-2 sm:mt-4">
        <Portfolio urls={photosUrls} />
      </div>
      <div className="mx-6 my-3 flex items-center justify-between gap-2 text-center text-xs sm:text-base">
        <p>(:</p>
        <p>Proudly created by myself for my family, and friends!</p>
        <p>:)</p>
      </div>
    </div>
  );
}
