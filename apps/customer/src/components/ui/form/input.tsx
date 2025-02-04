

export default function Input(
    { label, placeholder, name, type, optional, className }:
        { label: string, placeholder: string, name: string, type: string, optional?: boolean, className?: string }
) {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <label htmlFor={name} className="font-normal text-xs flex gap-1">
                {label}
                {optional &&
                    <span className="text-gray-400 font-normal">(Optional)</span>
                }
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                className="border p-2 rounded-md font-normal outline-none border-border focus:border-primary-soft"
            />
        </div>
    )
}