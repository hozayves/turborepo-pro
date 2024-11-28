'use client'
import Image from "next/image";


export default function Marketing() {
    return (
        <div className="px-2 md:px-5 lg:px-20 xl:px-32 py-5 flex flex-col-reverse gap-5 lg:flex-row 
            lg:bg-[url('/marketing/vector-right.png'),url('/marketing/vector-left.png'),url('/marketing/vector-left-bottom.png')] 
            lg:bg-no-repeat 
            lg:bg-[position:right,left_top,left_bottom]
            lg:bg-[length:100px_200px,200px_100px,100px_100px]">
            <div className="h-64 md:h-96 rounded-md md:flex md:gap-10 lg:flex-1 lg:gap-2">
                <div className="hidden md:flex md:w-[60%] md:relative md:h-[90%] md:self-center">
                    <Image src="/marketing/image-2.png" fill alt="" className="object-cover rounded-md" />
                </div>
                <div className="w-full h-full relative rounded-md">
                    <Image
                        src="/marketing/image1.png"
                        alt=""
                        fill
                        className="object-cover lg:object-fill rounded-md"
                    />
                </div>
            </div>
            <div className="text-gray-500 flex flex-col gap-4 text-left lg:flex-1">
                <h4 className="font-semibold text-3xl text-foreground text-left">100% Trusted<br /> Organic Food Store</h4>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <span className="p-1 flex justify-center items-center self-start bg-primary text-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>
                        <div className="flex flex-col gap-3">
                            <h6 className="text-foreground font-medium">Healthy & natural food for lovers of healthy food.</h6>
                            <p className="text-xs md:text-sm">Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className="p-1 flex justify-center items-center self-start bg-primary text-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>
                        <div className="flex flex-col gap-3">
                            <h6 className="text-foreground font-medium">Healthy & natural food for lovers of healthy food.</h6>
                            <p className="text-xs md:text-sm">Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. </p>
                        </div>
                    </div>
                </div>
                <button type="button" className="rounded-full  px-6 py-3 bg-primary text-white self-start font-medium flex gap-1 justify-between hover:bg-primary-soft">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </button>
            </div>
        </div>
    )
}
