import Image from 'next/image'

export default function CheckoutProduct() {
    return (
        <div className="flex items-center gap-2">
            <Image src="/product/apple.svg" className="w-15 h-15" alt="" width="40" height="40" />
            <div className="flex gap-1 text-base flex-1 items-center">
                <h3 className="text-base">Apple</h3>
                <span className="text-sm">x1</span>
            </div>
            <span className="font-semibold">$80.00</span>
        </div>
    )
}