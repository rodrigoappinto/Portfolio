export default function MobilePorfolioItem(props: any) {
    return (
        <div className="relative flex">
            <img
                className="w-full duration-200 opacity-10 hover:duration-200 hover:z-0"
                src={props.url}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-wrap text-s">{props.desc}</p>
                <p className="text-wrap text-xs">{props.loc}</p>
            </div>
        </div>
    );
}
