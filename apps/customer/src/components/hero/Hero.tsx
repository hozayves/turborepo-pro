import Image from "next/image";

export default function Hero() {
    const heroes = [
        {
            id: 1,
            title: "",
            subtitle: "Fresh & Healthy Organic Food",
            description: "100% Freshness",
            image: "/hero/1.png",
            type: "hero",

        },
        {
            id: 2,
            title: "NEW PRODUCE",
            subtitle: "100% Fresh",
            description: "Only fruit & vegetables",
            image: "/hero/2.png",
            type: "fresh",
        },
        {
            id: 3,
            title: "BEST DEALS",
            subtitle: "special products new of the month",
            description: "",
            image: "/hero/3.png",
            type: "fruit",
        }
    ]
    return (
        <div className="px-2 py-5 md:px-5 lg:px-20 xl:px-32 text-gray-900">
            <div className="flex flex-col gap-3 h-60 md:flex-row md:h-[25rem]">
                <div className="hidden md:flex bg-[url('/hero/1.png')] bg-cover bg-center md:w-3/5 text-white flex-col text-left p-5 justify-center">
                    <div className="flex flex-col gap-3 justify-center">
                        <h4 className="text-3xl font-bold w-64">{heroes[0].subtitle}</h4>
                        <p className="text-xs text-warning border-l-2 border-primary py-3 w-auto px-2 font-medium uppercase">{heroes[0].description}</p>
                        <button type="button" className="rounded-full py-2 px-4 text-white bg-primary font-medium mt-2 w-32 text-sm flex items-center justify-between gap-2 self-left">
                            Shop Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex h-full md:w-2/5 md:flex-col gap-3">
                    <div className="w-full h-full bg-[url('/hero/2.png')] bg-cover bg-center text-left p-3 flex flex-col flex-1 rounded-l-md" >
                        <span className="uppercase text-[10px] font-medium">{heroes[1].title}</span>
                        <h4 className="text-2xl font-bold">{heroes[1].subtitle}</h4>
                        <p className="text-xs">{heroes[1].description}</p>
                        <button type="button" className="rounded-full py-2 bg-transparent text-primary font-medium mt-2 w-24 text-sm flex items-center justify-between gap-2 text-left">
                            Shop Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex bg-[url('/hero/3.png')] bg-cover bg-center flex-1 rounded-l-md text-white p-3 flex-col justify-center items-center">
                        <span className="uppercase text-[10px] font-medium">{heroes[2].title}</span>
                        <h4 className="text-2xl font-bold w-56 capitalize">{heroes[2].subtitle}</h4>
                        <p className="text-xs">{heroes[2].description}</p>
                        <button type="button" className="rounded-full py-2 bg-transparent text-primary font-medium mt-2 w-24 text-sm flex items-center justify-between gap-2 self-center">
                            Shop Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
