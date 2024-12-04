import SectionTitle from "../(titles)/SectionTitle"
import { Product } from "../../constants/product"
import ProductItem from "./ProductItem"

function ProductPopular({ column = false }: { column?: boolean }) {
    return (
        <div className="px-2 md:px-5 lg:px-20 xl:px-32">
            {!column && <SectionTitle title="Popular Products" />}
            <div className={`flex  gap-3 md:gap-0 w-full p-1 md:flex-wrap md:justify-between  ${column ? 'flex-col md:flex-row' : ' flex-nowrap overflow-x-auto md:overflow-x-hidden flex-row'}`}>
                {Product.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductPopular
