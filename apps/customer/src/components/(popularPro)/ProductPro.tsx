import SectionTitle from "../(titles)/SectionTitle"
import { Product } from "../../constants/product"
import ProductItem from "./ProductItem"

function ProductPopular() {
    return (
        <div className="px-2">
            <SectionTitle title="Popular Products" />
            <div className="flex flex-row gap-3 w-full flex-nowrap overflow-x-auto p-2">
                {Product.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductPopular
