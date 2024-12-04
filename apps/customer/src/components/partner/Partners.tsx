import PartnerItem from "./PartnerItem"

export default function Partners() {
    const partnerItem = [
        {
            id: 1,
            image: './partner/foods.svg',
            name: 'foods'
        },
        {
            id: 2,
            image: './partner/food.svg',
            name: 'food'
        },
        {
            id: 3,
            image: './partner/bookoff.svg',
            name: 'Bookoff'
        },
        {
            id: 4,
            image: './partner/mango.svg',
            name: 'Mango'
        },
        {
            id: 5,
            image: './partner/series.svg',
            name: 'foods'
        },
        {
            id: 6,
            image: './partner/steps.svg',
            name: 'foods'
        }
    ]
    return (
        <div className="px-2 md:px-5 lg:px-20 xl:px-32 py-10">
            <div className="flex justify-between items-center overflow-x-auto w-full flex-nowrap text-gray-700">
                {partnerItem.map(item => (
                    <PartnerItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}
