export default function PorfolioItem(props: any) {
  // console.log(props.data)
  return (
    <div>
      <img
        className="z-0 w-[30rem] duration-200 hover:scale-[1.01] hover:opacity-90 hover:duration-200 sm:h-auto lg:h-[20rem] "
        src={props.url}
      />
    </div>
  );
}
