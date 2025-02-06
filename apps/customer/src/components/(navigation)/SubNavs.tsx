'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function SubNavs() {
    const pathname = usePathname();
    return (
        (pathname !== "/signin" && pathname !== "/signup") && (
            <div className="flex items-center justify-start gap-1 text-xs py-2 md:py-6 px-2 md:px-5 lg:px-20 xl:px-32 bg-[#f7f7f7]">
                <Link href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <Link href='/' className='hover:underline text-primary'>
                    <p>Vegetables</p>
                </Link>
            </div>
        )
    )
}
