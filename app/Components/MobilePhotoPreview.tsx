export default function MobilePorfolioItem(props: any) {
    return (
        <div className="relative">
            <img
                className="w-[30rem] duration-200 hover:scale-[1.01] opacity-10 hover:duration-200"
                src={props.url}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-wrap text-s">{props.desc}</p>
                <p className="text-wrap text-xs">{props.loc}</p>
            </div>
        </div>
    );
}
