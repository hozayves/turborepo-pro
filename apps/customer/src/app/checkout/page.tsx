import Link from "next/link"
import Input from "../../components/ui/form/input"
import Select from "../../components/ui/form/select"
import CheckoutProduct from "../../components/checkout/product"
import Textarea from "../../components/ui/form/Textarea"

export default function page() {
    return (
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
            <form className="flex flex-col gap-5 md:w-3/4 lg:w-10/12">
                <section>
                    <h1 className="text-2xl font-semibold">Billing information</h1>
                </section>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 lg:flex-row">
                        <Input className="flex-grow" label="First name" name="firstname" placeholder="Your first name" type="text" />
                        <Input className="flex-grow" label="Last name" name="lastname" placeholder="Your last name" type="text" />
                        <Input className="flex-grow" label="Company name" name="company" placeholder="Company name" type="text" optional />
                    </div>
                    <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
                        <Input className="lg:w-2/3" label="Street Address" name="street" placeholder="Street address" type="text" />
                        <Select className="lg:w-2/6" label="Country / Region" name="country" />
                    </div>
                    <div className="flex flex-col gap-2 lg:flex-row">
                        <Input className="lg:w-1/2" label="Email" placeholder="Email Address" type="email" name="email" />
                        <Input className="lg:w-1/2" label="Phone" placeholder="Phone number" type="phone" name="phone" />
                    </div>
                    <div className="flex gap-2 items-center pb-5 py-2 border-b border-gray-100">
                        <input type="checkbox" name="another-address" value="another-address" id="another-address" />
                        <label htmlFor="another-address">Ship to a different address</label>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">Order Summary</h2>
                        <Textarea placeholder="Notes about your order, e.g. special notes for delivery" name="notes" label="Order Notes" optional />
                    </div>
                </div>
            </form>
            <div className="flex flex-col border border-gray-100 rounded-md p-2 md:w-2/6 md:px-5 md:pt-0">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <div>
                    <div className="flex flex-col mt-1">
                        {[1, 2, 3].map(item => (
                            <CheckoutProduct key={item} />
                        ))
                        }
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center mt-3 py-1">
                            <span>Subtotal:</span>
                            <span className="font-semibold">$84.00</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-y border-gray-200">
                            <span>Shipping:</span>
                            <span className="font-semibold">Free</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                            <span>Total:</span>
                            <span className="font-semibold">$84.00</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 mt-1">
                        <h2 className="text-xl font-semibold">Payment Method</h2>
                        <div className="flex flex-col gap-[2px]">
                            <div className="flex gap-1 text-lg items-center">
                                <input className="" type="radio" name="payment" value="cash" id="cash" />
                                <label htmlFor="cash">Cash on Delivery</label>
                            </div>
                            <div className="flex gap-1 text-lg items-center">
                                <input className="" type="radio" name="payment" value="mobile" id="mobile" />
                                <label htmlFor="mobile">Mobile Money</label>
                            </div>
                            <div className="flex gap-1 text-lg items-center">
                                <input className="" type="radio" name="payment" value="card" id="card" />
                                <label htmlFor="card">Credit Card</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-2">
                        <Link href="/checkout" className="px-7 w-full md:px-5 bg-primary text-white rounded-full self-center py-3 text-sm md:mb-0 md:w-full text-center">Place Order</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}