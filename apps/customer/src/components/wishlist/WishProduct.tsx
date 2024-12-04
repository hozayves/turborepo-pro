
import Image from 'next/image'

interface Product {
    image: string,
    price: number,
    stock: number,
    name: string
}

export default function WishProduct({ image, price, stock, name }: Product) {
    return (
        <div className='flex flex-col gap-4 relative py-5 rounded-md border border-gray-100 md:flex-row md:py-1 md:items-center md:border-b md:border-gray-100 md:border-0 md:rounded-none'>
            <div className='flex justify-center relative items-center md:w-20 md:h-20 w-full h-44'>
                <Image src={image} fill className='object-contain' alt="" />
            </div>
            <div className='flex flex-col p-1 px-2 gap-4 text-gray-900 font-normal text-sm md:flex-row md:justify-between md:flex-1'>
                <div className='flex justify-between'>
                    <span className='md:hidden'>Product</span>
                    <span className='font-regular text-sm capitalize'>{name}</span>
                </div>
                <div className='flex flex-col md:flex-row gap-3 w-72 justify-between'>
                    <div className='flex justify-between'>
                        <span className='md:hidden'>Price</span>
                        <span>${price}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='md:hidden'>Quantity</span>
                        <span className={`rounded-lg text-xs font-light px-3 py-[2px] bg-opacity-40 md:h-6 flex justify-center items-center  ${stock > 0 ? 'text-danger bg-danger' : 'bg-primary text-primary'}`}>{stock > 0 ? 'Out of Stock' : "In stock"}</span>
                    </div>
                </div>
                <div className='flex justify-between font-medium md:hidden'>
                    <span>Subtotal</span>
                    <span>$54</span>
                </div>
            </div>
            <div className='flex justify-center md:justify-end'>
                <button type="button" className='bg-primary hover:bg-primary-soft transition-all duration-100 delay-150 text-white rounded-full px-10 cursor-pointer py-2 text-sm font-medium md:h-8 md:px-6 flex justify-center items-center'>Add Cart</button>
            </div>
            <button type="button" className='flex absolute right-2 top-2 border border-gray-100 rounded-full p-1 md:relative md:h-7 md:w-7 md:top-0 md:right-1 justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}
