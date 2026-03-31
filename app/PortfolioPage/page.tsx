import { db } from "../db/firebase";
import Portfolio from "../Components/Portfolio";
import { collection, getDocs } from 'firebase/firestore';

export default async function PortfolioPage() {
  const querySnapshot = await getDocs(collection(db, 'Portfolio'));
  const data = querySnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() } as { id: string; url: string; desc: string; loc: string }))
    .sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <div id="portfolio" className="h-full w-full">
      <div className="mt-10 flex flex-wrap items-center justify-center px-2 sm:mt-4">
        <Portfolio data={data} />
      </div>
    </div>
  );
}
