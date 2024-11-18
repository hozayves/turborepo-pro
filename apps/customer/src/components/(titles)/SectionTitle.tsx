import Link from "next/link"

function SectionTitle({ title }: { title: string }) {
  return (
    <div className='flex justify-between items-center px-5 py-3'>
      <h2 className="font-medium text-2xl">{title}</h2>
      <div>
        <Link href="/category" className="hidden md:flex">View All</Link>
        <button type="button" className="md:hidden border rounded-full p-[6px] border-gray-200 flex items-center justify-center h-10 w-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SectionTitle