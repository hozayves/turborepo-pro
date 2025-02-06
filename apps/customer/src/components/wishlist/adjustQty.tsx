

export default function AdjustQty() {
    return (
        <div className="flex items-center justify-center gap-2 border border-gray-100 p-1 rounded-full w-20 h-10">
            <button type="button" className="p-1 rounded-full border border-gray-100 hover:border-gray hover:bg-gray-100 bg-gray w-6 h-6 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
            </button>
            <span>0</span>
            <button type="button" className="p-1 rounded-full border border-gray-100 hover:border-gray hover:bg-gray-100 bg-gray w-6 h-6 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </button>
        </div>
    )
}