// import Image from "next/image";


export default function InputButton(
    { type = "submit", value = "Login", className, icon }:
        { type?: string, value?: string, className?: string, icon?: JSX.Element }
) {
    return (
        <div className={`px-7 w-full md:px-5 bg-primary text-white rounded-full self-center py-3 text-sm md:mb-0 md:w-full text-center flex justify-center items-center gap-1 ${className}`}>
            <input
                type={type}
                value={value} />
            {icon && <span>{icon}</span>}
        </div>
    )
}