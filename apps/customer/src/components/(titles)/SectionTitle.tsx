import Link from "next/link"

function SectionTitle({ title }: { title: string }) {
  return (
    <div className='flex justify-between items-center py-3 text-gray-900'>
      <h2 className="font-medium md:text-2xl text-lg">{title}</h2>
      <div className="md:flex md:flex-row md:justify-center md:items-center md:gap-2 cursor-pointer md:text-primary">
        <Link href="/category" className="hidden md:flex md:text-sm">View All</Link>
        <button type="button" className="border rounded-full p-2 border-gray-200 flex items-center justify-center h-8 w-8 md:border-none md:p-0 md:h-auto md:w-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SectionTitle