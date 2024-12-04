'use client'
import Image from "next/image";
import { useState } from "react";

interface Social {
    name: string,
    image: string,
    imageHover: string
}

export default function SocialLink({ name, image, imageHover }: Social) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='text-gray-700 rounded-full w-10 h-10 flex justify-center items-center hover:bg-primary p-1'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={isHovered ? imageHover : image}
                width="20"
                height="20"
                alt={name}
                className="w-5 h-5"
            />
        </div>
    )
}
