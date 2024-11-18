import Image from "next/image"
import Link from "next/link"

interface Product {
    id: number
    name: string
    price: number
    image: string
}

interface ProductItemProps {
    product: Product
}

function ProductItem({ product }: ProductItemProps) {
    return (
        <Link href="/" className='border hover:border-primary-hard hover:shadow-[0px_0px_6px_0px_rgba(0,178,7,1)] min-w-[65%] flex flex-col items-center p-3 relative transition-all duration-300 cursor-pointer'>
            <div className="flex flex-col gap-3 w-full">
                <Image src={product.image} alt={product.name} width={200} height={300} />
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col gap-1 items-start">
                        <p className="text-sm">{product.name}</p>
                        <span className="text-sm">${product.price}</span>
                        <span className="text-sm">rating...</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="button" className="border border-gray-200 rounded-full p-[6px] hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 absolute top-2 right-2">
                <button type="button" className="hover:bg-gray-100 rounded-full p-[6px] border border-gray-100 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
                <button type="button" className="hover:bg-gray-100 rounded-full p-[6px] border border-gray-100 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </button>
            </div>
        </Link>
    )
}

export default ProductItem