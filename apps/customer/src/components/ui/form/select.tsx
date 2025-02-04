

export default function Select(
    { name, label, className, ...props }: { name: string, label: string, className?: string }
) {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <label htmlFor={name} className="font-normal text-xs flex gap-1">{label}</label>
            <select {...props} className="border p-2 rounded-md font-normal outline-none border-border focus:border-primary-soft">
                <option>Rwanda</option>
            </select>
        </div>
    )
}