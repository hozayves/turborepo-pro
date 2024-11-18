
import { category } from "../../constants/category"
import SectionTitle from "../(titles)/SectionTitle"
import CategoryItem from "./Category-item"

function Category() {
    return (
        <div className="px-2">
            <SectionTitle title="Shop by Category" />
            <div className="flex flex-row gap-4 w-full">
                <button type="button" className="border rounded-full p-[6px] border-gray-200 items-center justify-center h-10 w-10 hover:bg-gray-100 self-center hidden md:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <div className="w-full flex flex-row gap-3 flex-nowrap overflow-x-auto p-2">
                    {category.map((item) => (
                        <CategoryItem key={item.id} {...item} />
                    ))}
                </div>
                <button type="button" className="border rounded-full p-[6px] border-gray-200 items-center justify-center h-10 w-10 hover:bg-gray-100 self-center justify-self-end hidden md:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default Category