import Image from "next/image";

interface MobilePhotoPreviewProps {
  url: string;
  desc: string;
  loc: string;
}

export default function MobilePhotoPreview({ url, desc, loc }: MobilePhotoPreviewProps) {
  return (
    <div className="relative w-[calc(100vw-1rem)] aspect-[3/2]">
      <Image
        src={url}
        alt="Portfolio photo"
        fill
        sizes="100vw"
        className="opacity-10 object-cover"
        quality={50}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-wrap text-s">{desc}</p>
        <p className="text-wrap text-xs">{loc}</p>
      </div>
    </div>
  );
}
