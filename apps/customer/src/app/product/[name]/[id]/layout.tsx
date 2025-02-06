import SubNavs from "../../../../components/(navigation)/SubNavs";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SubNavs />
            <div className="bg-background text-gray-900 min-h-screen max-h-auto mt-5 px-2 md:px-5 lg:px-20 xl:px-32">
                {children}
            </div>
        </>
    )
}
