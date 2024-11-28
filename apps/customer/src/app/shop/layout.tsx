
import Image from "next/image";
import SubNavs from "../../components/(navigation)/SubNavs";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SubNavs />
            <div className="px-2 md:px-5 lg:px-20 xl:px-32">
                <div className="flex h-32 md:h-40 lg:h-52 xl:h-64 relative">
                    <Image
                        src="/vegetables.png"
                        alt="vegetables"
                        fill
                        className="object-cover w-full h-full top-0 left-0"
                    />
                </div>
                <div className="flex flex-col gap-2 text-xs font-light text-gray-500 py-3 md:justify-between md:flex-row md:py-5">
                    <div className="flex gap-2 flex-wrap ">
                        <select name="" id="" className="border border-gray-300 rounded-md p-1 bg-white outline-none">
                            <option value="1">Select Category</option>
                            <option value="2">River fish</option>
                            <option value="3">Land fish</option>
                        </select>
                        <select name="" id="" className="border border-gray-300 rounded-md p-1 bg-white outline-none">
                            <option value="1">Select Price</option>
                            <option value="2">Below 100</option>
                            <option value="3">100 - 200</option>
                        </select>
                        <select name="" id="" className="border border-gray-300 rounded-md p-1 bg-white outline-none">
                            <option value="1">Select Rating</option>
                            <option value="2">4 & Above</option>
                            <option value="3">3 & Above</option>
                        </select>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <select name="" id="" className="border border-gray-300 rounded-md p-1 bg-white outline-none">
                            <option value="1">Sort by: Latest</option>
                            <option value="2">Sort by: Oldest</option>
                            <option value="3">Sort by: Price: Low to High</option>
                            <option value="4">Sort by: Price: High to Low</option>
                        </select>
                        <select name="" id="" className="border border-gray-300 rounded-md p-1 bg-white outline-none">
                            <option value="1">Show 12</option>
                            <option value="2">Show 24</option>
                            <option value="3">Show 36</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between items-center py-4 border-b-[0.5px] border-gray-200 border-t-[0.5px] text-[10px] text-gray-500">
                    <div className="flex items-center gap-2">
                        <p>Active Filter: </p>
                        <span className="flex items-center gap-1 text-gray-900">
                            Vegetables
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex items-center gap-1 font-medium">
                        <span className="text-gray-900">1234</span>
                        <span>Results Found</span>
                    </div>
                </div>
            </div>
            <div className='bg-background text-gray-900 min-h-screen max-h-auto mt-10'>
                {children}
            </div>
        </>
    )
}
