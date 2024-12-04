import Image from "next/image"

interface Category {
    id: number
    name: string
    image: string
    productCount: number
}
export default function CategoryItem({ name, image, productCount }: Category) {
    return (
        <div className="flex flex-col items-center gap-1 justify-center border border-gray-border rounded-md py-4 px-2 min-w-[49%] md:min-w-[28%] lg:min-w-[23%] xl:min-w-[18%] hover:border-primary-hard hover:shadow-[0px_0px_6px_0px_rgba(0,178,7,1)] group transition-all duration-300 cursor-pointer">
            <Image src={image} alt="category" width={60} height={60} />
            <p className="text-lg text-gray-900 group-hover:text-primary-hard capitalize md:text-sm truncate">{name}</p>
            <span className="text-sm text-gray-700 md:text-xs">{productCount} Products</span>
        </div>
    )
}