import Image from "next/image";

interface PhotoPreviewProps {
  url: string;
  priority?: boolean;
}

export default function PhotoPreview({ url, priority = false }: PhotoPreviewProps) {
  return (
    <div className="relative w-[calc(100vw-1rem)] lg:w-[20rem] 2xl:w-[25rem] 3xl:w-[40rem] aspect-[3/2] overflow-hidden duration-200 hover:scale-[1.01] hover:opacity-90 hover:duration-200">
      <Image
        src={url}
        alt="Portfolio photo"
        fill
        sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 20rem, 25rem"
        className="object-cover"
        quality={50}
        priority={priority}
      />
    </div>
  );
}
