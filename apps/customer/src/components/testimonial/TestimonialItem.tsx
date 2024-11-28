import Image from "next/image";
import Rating from "../(popularPro)/Rating";

interface TestimonialItemProps {
    title: string;
    rating: number;
    avatar: string;
    name: string;
    role: string;
}

export default function TestimonialItem({ title, rating, avatar, name, role }: TestimonialItemProps) {
    return (
        <div className='rounded-md p-5 text-gray-900 flex flex-col  gap-3 bg-white min-w-[90%] md:min-w-[45%] lg:min-w-[%] xl:min-w-[33%]'>
            <Image src="/users/exclamation.svg" alt='exclamation' width={20} height={20} />
            <p className='text-left text-xs md:text-sm text-gray-700'>{title}</p>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <div className='rounded-full overflow-hidden'>
                        <Image src={avatar} alt='avatar' width={40} height={40} />
                    </div>
                    <div className='flex flex-col text-left'>
                        <p className='md:text-sm font-semibold leading-none truncate text-xs'>{name}</p>
                        <p className='md:text-sm text-gray-500 leading-none truncate text-xs'>{role}</p>
                    </div>
                </div>
                <div>
                    <Rating rating={rating} />
                </div>
            </div>
        </div>
    )
}
