
export default function Video() {
    const video = '/banner/thumnail.png'
    return (
        <div className="px-2 md:px-5 lg:px-20 xl:px-32 py-5">
            <div className='w-full min-h-[13rem] bg-cover bg-center rounded-md flex flex-col justify-center items-center gap-5' style={{ backgroundImage: `url(${video})` }}>
                <p className='text-white text-lg leading-5 font-medium flex justify-center flex-col'><span>We&apos;re the Best Organic</span> <span>Shop in the World</span></p>
                <button type='button' className='rounded-full p-3 border border-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
