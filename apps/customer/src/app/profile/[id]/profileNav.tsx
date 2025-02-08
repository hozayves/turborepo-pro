'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navData = [
    {
        title: 'Dashboard',
        link: "/profile/231",
        icon: "/profile-icon/dash.png"
    }, {
        title: "Order History",
        link: "/profile/234/order",
        icon: "/profile-icon/order.png"
    }, {
        title: "Wishlist",
        link: "/profile/234/wishlist",
        icon: "/profile-icon/wish.png"
    }, {
        title: "Shopping Cart",
        link: "/profile/234/shopping-cart",
        icon: "/profile-icon/bag.png"
    }, {
        title: "Settings",
        link: "/profile/234/settings",
        icon: "/profile-icon/settings.png"
    }, {
        title: "Log out",
        link: "/",
        icon: "/profile-icon/logout.png"
    }
]


export default function ProfileNav() {
    const pathname = usePathname()
    return (
        <div className="flex border border-gray-100 rounded-md h-auto py-2 lg:w-[37%] lg:h-1/2">
            <ul className="flex flex-wrap lg:flex-col lg:w-full">
                {navData.map(item => (
                    <li key={item.link}>
                        <Nav title={item.title} link={item.link} icon={item.icon} className={pathname === item.link ? 'border-l-2 border-primary bg-gray-100' : 'border-transparent'} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
function Nav({ title, link, icon, className }: { title: string, link: string, icon: string, className: string }) {
    return (
        <Link href={link} className={`flex gap-2 lg:w-full text-lg font-base items-center p-1 px-4 lg:py-2 border-l-2  hover:border-primary hover:bg-gray-100  ${className}`}>
            <Image src={icon} alt="" width={10} height={10} className="w-4 h-4" />
            <span>{title}</span>
        </Link>
    )
}