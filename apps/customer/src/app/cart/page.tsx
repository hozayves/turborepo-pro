import Cartcard from "../../components/wishlist/Cartcard";
import { Product } from "../../constants/product";

export default function Page() {
    return (
        <div className='flex flex-col gap-2 pb-5 relative'>
            <div className='py-2 flex md:justify-center'>
                <h4 className='text-xl md:text-2xl font-medium'>My Shopping Cart</h4>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-5">
                <div className="lg:w-[70%] lg:border lg:border-gray-100 lg:rounded-md text-gray-500 text-xs">
                    <div className="hidden lg:flex md:py-3 justify-between w-full flex-1 uppercase px-3 border-b border-gray-100">
                        <span className="lg:w-56 md:w-48 ">Product</span>
                        <div className="flex justify-between lg:w-52 md:w-56">
                            <span>Price</span>
                            <span>Quantity</span>
                        </div>
                        <div className="lg:w-24 md:w-20 justify-between ">
                            <span className="justify-end">Subtotal</span>
                            <span></span>
                        </div>
                    </div>
                    {Product.slice(0, 2).map((items) => (
                        <Cartcard key={items.id} {...items} />
                    ))}
                </div>
                <div className="w-full flex gap-3 flex-col border-t md:border border-gray-100 sticky bottom-0 left-0 bg-white md:rounded-md p-2 lg:h-fit lg:w-[30%] lg:p-6">
                    <h4 className="font-medium text-lg">Cart Total</h4>
                    <div className="flex flex-col">
                        <div className="flex justify-between text-sm font-light border-b border-gray-200 py-2">
                            <span>Subtotal</span>
                            <span className="font-normal">$57.00</span>
                        </div>
                        <div className="flex justify-between text-sm font-light border-b border-gray-200 py-2">
                            <span>Shipping</span>
                            <span className="font-normal">Free</span>
                        </div>
                        <div className="flex justify-between text-sm font-light last:border-b-0 border-gray-200 py-2">
                            <span>Total</span>
                            <span className="font-medium">$57.00</span>
                        </div>
                    </div>
                    <button type="button" className="px-7 md:px-5 bg-primary text-white rounded-full self-center py-3 text-sm mb-4 md:mb-0 md:w-full">Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}
