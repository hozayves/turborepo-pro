import Image from "next/image"


interface Product {
    name: string,
    price: number,
    image: string,
    stock: number
}
export default function Cartcard({ name, price, image }: Product) {
    return (
        <div className='flex flex-col gap-4 relative py-5 md:px-3 rounded-md border border-gray-100 md:flex-row md:py-1 md:justify-between md:items-center md:border-b md:last:border-none md:border-gray-100 md:border-0 md:rounded-none'>
            <div className='flex justify-center relative items-center md:w-20 md:h-20 w-full h-44'>
                <Image src={image} fill className='object-cover' alt="" />
            </div>
            <div className='flex flex-col p-1 px-2 gap-4 text-gray-900 font-normal text-sm md:flex-row md:justify-between md:flex-1'>
                <div className='flex justify-between md:items-center'>
                    <span className='md:hidden'>Product</span>
                    <span className='font-regular text-sm capitalize'>{name}</span>
                </div>
                <div className='flex flex-col md:flex-row gap-3 w-full justify-between md:w-52'>
                    <div className='flex justify-between md:items-center'>
                        <span className='md:hidden'>Price</span>
                        <span>${price}</span>
                    </div>
                    <div className='flex justify-between md:items-center'>
                        <span className='md:hidden'>Quantity</span>
                        <div className="flex items-center justify-center gap-2 border border-gray-100 p-1 rounded-full">
                            <button type="button" className="p-1 rounded-full border border-gray-100 hover:border-gray hover:bg-gray-100 bg-gray w-6 h-6 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                            </button>
                            <span>0</span>
                            <button type="button" className="p-1 rounded-full border border-gray-100 hover:border-gray hover:bg-gray-100 bg-gray w-6 h-6 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-medium md:w-10 md:justify-center md:items-center'>
                    <span className="md:hidden">Subtotal</span>
                    <span>$54</span>
                </div>
            </div>
            <div className='flex justify-between px-2 md:justify-end md:hidden'>
                <button type="button" className='bg-primary hover:bg-primary-soft transition-all duration-100 delay-150 text-gray-100 rounded-full px-5 cursor-pointer py-2 text-xs font-medium md:h-8 md:px-6 flex justify-center items-center'>Return to shop</button>
                <button type="button" className='bg-gray-100 hover:bg-gray-50 transition-all duration-100 delay-150 text-gray-900 rounded-full px-5 text-xs cursor-pointer py-2 font-medium md:h-8 md:px-6 flex justify-center items-center'>Update Cart</button>
            </div>
            <button type="button" className='flex absolute right-2 top-2 border border-gray-100 rounded-full p-1 md:relative md:h-7 md:w-7 md:top-0 md:right-1 justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}
