
import Link from "next/link"

interface BannerItemProps {
    message: string
    title: string
    image: string
    promotion: React.ReactNode
    color: string
}

function BannerItem({ message, title, image, promotion, color }: BannerItemProps) {
    return (
        <div className={`rounded-md min-w-[19rem] lg:min-w-[20rem] 2xl:min-w-[23rem] min-h-[25rem] flex flex-col justify-start items-center py-4 gap-2 bg-cover bg-center ${color}`} style={{ backgroundImage: `url(${image})` }}>
            <span className='text-[10px] font-normal uppercase'>{title}</span>
            <h1 className="font-bold text-3xl">{message}</h1>
            <div>
                <span>{promotion}</span>
            </div>
            <div className="mt-7">
                <Link className='bg-white text-primary py-2 rounded-full p-2 px-6 flex flex-row gap-2 items-center justify-center group' href=''>
                    <span className='text-sm font-semibold'>Shop Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default BannerItem
