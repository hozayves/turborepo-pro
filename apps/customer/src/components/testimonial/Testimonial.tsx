import SectionTitle from "../(titles)/SectionTitle";
import { testimonial } from "../../constants/testimonial";
import TestimonialItem from "./TestimonialItem";

export default function Testimonial() {
    return (
        <div className='py-8 md:14  px-2 md:px-5 lg:px-20 xl:px-32 bg-gray'>
            <SectionTitle title='Client Testimonial' />
            <div className='flex flex-row gap-3 md:gap-5 w-full overflow-x-auto flex-nowrap'>
                {testimonial.map((item) => (
                    <TestimonialItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}
