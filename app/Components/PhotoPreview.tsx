export default function PorfolioItem(props: any) {
  // console.log(props.data)
  return (
    <div>
      <img
        className="w-[40rem] duration-200 hover:scale-[1.01] hover:opacity-90 hover:duration-200 sm:h-auto lg:h-[25rem] "
        src={props.url}
      />
    </div>
  );
}
