'use client'

import { useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import Rating from "./Rating"
import ProductPreview from './productPreview'

interface Product {
    id: number
    name: string
    price: number
    image: string,
    cart: boolean,
    wishList: boolean,
    discount: number,
    rating: number
}

interface ProductItemProps {
    product: Product,
    className?: string
}

function ProductItem({ product, className }: ProductItemProps) {
    // Client-side only code: Open the modal when button is clicked
    const openModal = () => {
        const modalElement = document.getElementById('my_modal_2') as HTMLDialogElement;
        if (modalElement) {
            modalElement.showModal();  // Open the modal
        }
    }

    useEffect(() => {
        // This ensures that the modal is accessible on the client side
        const modalElement = document.getElementById('my_modal_2');
        if (modalElement) {
            // Handle any other client-side logic if needed
        }
    }, []);  // Empty dependency array ensures this only runs on mount

    return (
        <div className={`border hover:border-primary-hard hover:shadow-[0px_0px_6px_0px_rgba(0,178,7,1)] min-w-[65%] md:min-w-[32%] lg:min-w-[24%] xl:min-w-[19.1%]  md:mb-3 flex items-center p-3 relative transition-all duration-300 cursor-pointer bg-white group rounded-md ${className}`}>
            <div className="flex flex-col gap-3 w-full">
                <Link href={`/product/${product.name}/${product.id}`}>
                    <Image src={product.image} alt={product.name} width={200} height={200} className="w-full  md:h-40 self-center" />
                </Link>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col gap-1 items-start">
                        <p className="text-sm text-gray-700 capitalize group-hover:text-primary-hard transition-all duration-300">{product.name}</p>
                        <div className="flex flex-row gap-1">
                            <span className="text-sm text-gray-900">${product.price}</span>
                            <span className="text-sm text-gray-400 line-through">{product.discount !== 0 ? `$${product.discount}` : ''}</span>
                        </div>
                        <Rating rating={product.rating} />
                    </div>
                    <div className="flex items-center justify-center text-gray-800">
                        <button type="button" className={`rounded-full p-2  cursor-pointer hover:scale-110 transition-all duration-300 ${product.cart ? 'bg-primary text-white border-primary border' : 'bg-gray-100'} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 absolute top-2 right-2 text-gray-800">
                <button type="button" className={`border rounded-full p-2   cursor-pointer hover:scale-110 transition-all duration-300 ${product.wishList ? 'bg-primary text-white border-primary' : 'border-gray-200 hover:bg-gray-100'} `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
                <button
                    onClick={openModal}
                    type="button"
                    className="hover:bg-gray-100 rounded-full p-2 border border-gray-100 bg-white cursor-pointer hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </button>

                {/* Modal Dialog */}
                <dialog id="my_modal_2" className="modal px-1 ">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <ProductPreview />
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button type='button'>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    )
}

export default ProductItem
