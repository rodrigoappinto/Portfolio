import { db } from "../db/firebase";
import Portfolio from "../Components/Portfolio";
import { collection, getDocs, query } from 'firebase/firestore';

export default async function PortfolioPage() {
  let data = [];

  async function fetchData() {
    const q = query(collection(db, 'Portfolio'));
    const querySnapshot = await getDocs(q);
    const dataArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return dataArray.sort((a, b) => a.id > b.id ? 1 : -1);
  }

  data = await fetchData();
  return (
    <div className="h-full w-full">
      <div className="mt-10 flex flex-wrap items-center justify-center px-2 sm:mt-4">
        <Portfolio data={data} />
      </div>
      <div className="mx-6 my-3 flex items-center justify-between gap-2 text-center sm:text-base text-xs ">
        <p>(:</p>
        <p>Proudly created by myself for my family, and friends!</p>
        <p>:)</p>
      </div>
    </div>
  );
}
