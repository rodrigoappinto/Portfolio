export default function PorfolioItem(props:any) {
    // console.log(props.data)
    return (
        <div>
            <img className="h-auto w-[40rem] hover:scale-[1.01] hover:duration-200 duration-200 hover:opacity-90" src={props.data}/>
        </div>
        );
}