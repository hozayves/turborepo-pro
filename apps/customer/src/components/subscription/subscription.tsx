
import SocialLink from './SocialLink'

export default function Subscription() {
    const social = [
        {
            id: 1,
            image: "./social/facebook-dark.svg",
            imageHover: './social/facebook.svg',
            name: 'facebook'
        },
        {
            id: 2,
            image: "./social/twitter.svg",
            imageHover: './social/twitter-2.svg',
            name: 'Twitter'
        },
        {
            id: 3,
            image: "./social/pinterest.svg",
            imageHover: './social/pinterest-2.svg',
            name: 'Pinterest'
        },
        {
            id: 4,
            image: "./social/insta.svg",
            imageHover: './social/insta-2.svg',
            name: 'Instagram'
        }
    ]
    return (
        <div className='px-2 md:px-5 lg:px-20 xl:px-32 text-left pb-10 pt-5 bg-white'>
            <div className='flex flex-col gap-3 md:flex-row md:justify-between'>
                <div className='flex flex-col md:min-w-[50%] lg:min-w-[40%]'>
                    <h4 className='text-foreground text-lg'>Subscription our Newsletter</h4>
                    <p className='text-gray-400 text-left text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
                <div className='flex flex-col md:min-w-[50%] md:gap-3 lg:min-w-[60%] lg:flex-row'>
                    <div className="border border-gray-100 w-full rounded-full text-white md:h-10">
                        <div className='flex flex-row justify-between items-center'>
                            <input type='text' placeholder='Your email address' className='py-3 lg:py-1 rounded-l-full bg-white pl-3 outline-none text-gray-800 text-base w-full tracking-wider' />
                            <button type='submit' className='bg-primary text-white rounded-full px-5 py-3 lg:py-2 lg:px-8 font-semibold'>Subscribe</button>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-2 h-10 md:items-start'>
                        {social.map((item) => (
                            <SocialLink key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
