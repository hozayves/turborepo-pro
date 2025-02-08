import Image from "next/image"
import SectionTitle from "../../../../components/(titles)/SectionTitle"
import ProductItem from "../../../../components/(popularPro)/ProductItem"
import { Product } from "../../../../constants/product"
import ProductPreview from "../../../../components/(popularPro)/productPreview"

export default function page() {
    return (
        <div className="flex flex-col gap-10">
            {/* product preview */}
            <ProductPreview />
            <div className="flex flex-col gap-3">
                {/* Product description */}
                <div role="tablist" className="tabs tabs-bordered tabs-lg w-full">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Descriptions" defaultChecked />
                    <div role="tabpanel" className="tab-content p-2">
                        <div className="flex flex-col md:flex-row justify-between gap-2">
                            <div className="w-full lg:w-1/2 md:[40%] flex-initial">Description dolor sit amet consectetur adipisicing elit. Accusamus temporibus laboriosam voluptas, molestiae reprehenderit quia repellat necessitatibus? Odit nesciunt at quia illum nihil fugit minus, excepturi, dicta nulla deleniti quos dolorum natus, minima temporibus numquam fuga! Delectus quibusdam, Inventore, blanditiis quae.</div>
                            <div className="w-full lg:w-[45%] md:[50%] flex-initial flex flex-col gap-3">
                                <Image src="/product/video.png" className="w-full rounded-md" alt="" width={100} height={100} />
                                <div className="flex flex-col xl:flex-row justify-between gap-2 rounded-md p-2 border border-gray-200">
                                    <div className="flex gap-2 xl:justify-between items-center border-b border-gray-200 pb-2 xl:pb-0 xl:border-none">
                                        <Image src="/product/apple.svg" alt="" width={50} height={50} />
                                        <div className="flex flex-col">
                                            <h3 className="font-semibold m-0 text-base">100% New on shelf</h3>
                                            <span className="text-gray-500 text-sm">Get fresh products with us</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 xl:justify-between items-center">
                                        <Image src="/product/apple.svg" alt="" width={50} height={50} />
                                        <div className="flex flex-col">
                                            <h3 className="font-semibold m-0 text-base">100% New on shelf</h3>
                                            <span className="text-gray-500 text-sm">Get fresh products with us</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab after:w-[180px] px-4"
                        aria-label="Additional information"
                    />
                    <div role="tabpanel" className="tab-content p-2">
                        <div className="flex flex-col md:flex-row justify-between gap-2">
                            <div className="w-full lg:w-1/2 md:[40%] flex-initial">Additional information dolor sit amet consectetur adipisicing elit. Accusamus temporibus laboriosam voluptas, molestiae reprehenderit quia repellat necessitatibus? Odit nesciunt at quia illum nihil fugit minus, excepturi, dicta nulla deleniti quos dolorum natus, minima temporibus numquam fuga! Delectus quibusdam, Inventore, blanditiis quae.</div>
                            <div className="w-full lg:w-[45%] md:[50%] flex-initial flex flex-col gap-3">
                                <Image src="/product/video.png" className="w-full rounded-md" alt="" width={100} height={100} />
                                <div className="flex flex-col xl:flex-row justify-between gap-2 rounded-md p-2 border border-gray-200">
                                    <div className="flex gap-2 xl:justify-between items-center border-b border-gray-200 pb-2 xl:pb-0 xl:border-none">
                                        <Image src="/product/apple.svg" alt="" width={50} height={50} />
                                        <div className="flex flex-col">
                                            <h3 className="font-semibold m-0 text-base">100% New on shelf</h3>
                                            <span className="text-gray-500 text-sm">Get fresh products with us</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 xl:justify-between items-center">
                                        <Image src="/product/apple.svg" alt="" width={50} height={50} />
                                        <div className="flex flex-col">
                                            <h3 className="font-semibold m-0 text-base">100% New on shelf</h3>
                                            <span className="text-gray-500 text-sm">Get fresh products with us</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Related products */}
                <div>
                    <SectionTitle title="Related Products" />
                    <div className="flex gap-4 justify-start md:justify-around flex-wrap content-start">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                            <ProductItem key={item} product={Product[0]} className="w-full md:w-[45%] lg:w-[22%]" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}