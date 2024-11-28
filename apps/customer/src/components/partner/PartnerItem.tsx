import Image from "next/image";


export default function PartnerItem({ image, name }: { image: string, name: string }) {
    return (
        <div className="flex gap-2 justify-center items-center md:px-10 px-2 h-10 border-r last:border-r-0">
            <Image src={image} width={60} height={60} className="h-8 w-20" alt={name} />
        </div>
    )
}
