import SubNavs from "../../../components/(navigation)/SubNavs";
import ProfileNav from "./profileNav";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SubNavs />
            <div className="flex flex-col mt-5 px-2 md:px-5 lg:px-20 xl:px-32 lg:flex-row">
                <ProfileNav />
                <div className="bg-background text-gray-900 min-h-screen max-h-auto w-full flex flex-col gap-4 px-3">
                    {children}
                </div>
            </div>
        </>
    )
}
