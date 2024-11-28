
import WishProduct from '../../components/wishlist/WishProduct'
import { Product } from '../../constants/product'

export default function Page() {
    return (
        <div className='flex flex-col gap-2 pb-5'>
            <div className='py-2'>
                <h4 className='text-2xl font-medium'>Wishlist</h4>
            </div>
            {Product.map((items) => (
                <WishProduct key={items.id} {...items} />
            ))}
        </div>
    )
}
