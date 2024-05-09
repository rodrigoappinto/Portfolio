import { useState } from "react";
import createSupabaseClient from "../db/supabase";
import Portfolio from "../Components/Portfolio";
import { unstable_noStore } from "next/cache";

export default async function PortfolioPage() {
  const supabase = createSupabaseClient();

  console.log(supabase);
  unstable_noStore();
  const { data } = await supabase.storage.from("Portfolio").list("", {
    limit: 100,
    offset: 0,
    sortBy: { column: "name", order: "asc" },
  });

  console.log(data);

  const photosUrls: any = data
    ?.map((item) => {
      const result = supabase.storage.from("Portfolio").getPublicUrl(item.name);
      if (result.data.publicUrl.endsWith(".jpg")) {
        return result.data.publicUrl;
      }
    })
    .filter((item) => item !== undefined);

  console.log(photosUrls);
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
