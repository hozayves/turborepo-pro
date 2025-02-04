/* eslint-disable eslint-comments/require-description */
/* eslint-disable react/jsx-no-leaked-render */
/* eslint-disable react/self-closing-comp */


export default function Textarea(
    { label, name, optional, className, placeholder }:
        { label: string, name: string, optional?: boolean, className?: string, placeholder: string }) {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <label htmlFor={name} className="font-normal text-xs flex gap-1">
                {label}
                {optional &&
                    <span className="text-gray-400 font-normal">(Optional)</span>
                }
            </label>
            <textarea id="notes" name="notes" placeholder={placeholder} cols={6} className="border p-2 rounded-md font-normal outline-none border-border focus:border-primary-soft resize-none"></textarea>
        </div>
    )
}