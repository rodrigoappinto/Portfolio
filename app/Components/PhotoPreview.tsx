export default function PorfolioItem(props: any) {
  return (
      <img
        className="w-full lg:max-w-[20rem] 2xl:max-w-[25rem] 3xl:min-w-[46rem] h-auto aspect-[3/2] object-cover duration-200 hover:scale-[1.01] hover:opacity-90 hover:duration-200"
        src={props.url}
      />
  );
}
