import BannerItem from './BannerItem'

function Banner() {
    const banner = [
        {
            id: 1,
            message: '100% Vegetables',
            title: 'Best Deals',
            image: '/banner/vegetable.png',
            promotion: <span className="text-3xl font-extralight uppercase flex flex-row gap-2">00:00:00:00</span>,
            color: 'bg-white'
        },
        {
            id: 2,
            message: 'low-fat meat',
            title: '85% fat free',
            image: '/banner/meat.png',
            promotion: <span className="text-sm font-light flex flex-row gap-2">Started at <span className="text-warning font-bold">$79.99</span></span>,
            color: 'bg-white'
        },
        {
            id: 3,
            message: '100% fresh fruits',
            title: 'summer sale',
            image: '/banner/fruit.png',
            promotion: <span className='text-sm font-light flex flex-row gap-2 items-center text-foreground'>$14.99 <span className='bg-extra text-primary-extra bg-foreground rounded-sm px-2 py-1 capitalize font-medium'>daily freshness</span></span>,
            color: 'bg-gray-900'
        }
    ]
    return (
        <div className='py-3  px-2 md:px-5 lg:px-20 xl:px-32'>
            <div className='w-full flex flex-row justify-start gap-3 flex-nowrap overflow-x-auto lg:overflow-x-hidden lg:justify-between'>
                {banner.map((item) => (
                    <BannerItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Banner
