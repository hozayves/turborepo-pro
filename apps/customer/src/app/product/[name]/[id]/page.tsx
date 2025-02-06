import Image from "next/image"
import InputButton from "../../../../components/ui/form/button"
import AdjustQty from "../../../../components/wishlist/adjustQty"

export default function page() {
    return (
        <div className="flex flex-col gap-10 border border-red-500 md:flex-row md:px-5">
            <div className="flex flex-col gap-2 md:flex-1 md:flex-row md:items-center">
                <div className="w-full h-52 md:order-2">
                    <Image
                        src="/product/cabbage.svg"
                        alt=""
                        width={50}
                        height={50}
                        className="w-full h-52"
                    />
                </div>
                <div className="flex gap-1 justify-center md:order-1 border border-red-500">
                    <div className="flex justify-between md:flex-col">
                        {[1, 2, 3, 4].map(item => (
                            <div key={item} className={`w-16 h-20 hover:cursor-pointer hover:border-primary-secondary rounded-sm ${item === 1 ? 'border border-primary-soft' : ''}`}>
                                <Image
                                    src="/product/cabbage.svg"
                                    alt=""
                                    width={10}
                                    height={10}
                                    className="w-full h-20"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 md:flex-1 md:px-3">
                <div className="flex gap-2 items-baseline">
                    <h1 className="text-3xl font-bold">Chinesse Cabbage</h1>
                    <span className="bg-primary-soft rounded-md text-xs p-1 px-2 font-semibold text-primary-hard">In Stock</span>
                </div>
                <div className="flex flex-col gap-4 pb-3">
                    <span className="font-semibold text-sm">SKU: <span className="text-gray-500">2.51,543</span></span>
                    <div className="flex gap-1 text-xl font-semibold items-baseline">
                        <span className="text-gray-500 line-through">$42.00</span>
                        <span className="text-primary-hard text-2xl">$17.25</span>
                    </div>
                </div>
                <div className="border-y border-gray-100 py-5">
                    <p className="text-ellipsis leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam tenetur molestiae rerum expedita at nisi soluta, atque itaque voluptatum!</p>
                </div>
                <div className="flex justify-between mt-3 items-center pb-2">
                    <AdjustQty />
                    <div className="flex-1 mx-3">
                        <InputButton type="button" value="Add to Cart" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>} />
                    </div>
                    <button type="button" className={`border rounded-full p-2  cursor-pointer hover:scale-110 transition-all duration-300 ${false ? 'bg-primary text-white border-primary' : 'border-primary-soft bg-primary-soft '} `}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-1 pt-2 text-lg border-t border-gray-100">
                    <div className="flex gap-1">
                        <span className="font-bold">Category:</span>
                        <span>Vegetable</span>
                    </div>
                    <div className="flex gap-1">
                        <span className="font-bold">Tag:</span>
                        <span>Vegetable</span>
                    </div>
                </div>
            </div>
        </div>
    )
}