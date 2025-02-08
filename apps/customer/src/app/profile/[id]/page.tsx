import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../../../components/(titles)/SectionTitle";


export default function page() {
    return (
        <>
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex flex-col items-center md:border md:border-gray-100 md:rounded-md p-3 md:w-[57%]">
                    <Image className="rounded-full w-10 h-10" src="/profile-icon/profile.png" alt="" width={40} height={40} />
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl font-semibold m-0">Proxy Oragnics</h1>
                        <span className="text-gray-400">Customer</span>
                        <button type="button" className="mt-2 font-semibold text-semibold text-primary hover:cursor-pointer">Edit Profile</button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 rounded-md p-3 md:border md:border-gray-100 md:w-[40%]">
                    <span className="uppercase text-gray-300 text-sm">billing address</span>
                    <div>
                        <h2 className="font-semibold text-xl">Proxy Organics</h2>
                        <span className="text-gray-400 text-sm">40 Accacia, Acasia street</span>
                    </div>
                    <div>
                        <h2 className="font-medium text-base">chafetz2025@example.com</h2>
                        <span className="text-sm">(256) 756788-001</span>
                    </div>
                    <button type="button" className="mt-2 font-semibold text-semibold text-primary hover:cursor-pointer self-start">Edit Address</button>
                </div>
            </div>
            <div className="flex- flex-col p-3 md:border md:border-gray-100 rounded-md">
                <SectionTitle title="Recent Order History" />
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>OrderId</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>#004</th>
                                <td>7 Sept 2020</td>
                                <td>$345(5 Product)</td>
                                <td>Processing</td>
                                <td>
                                    <Link href="#" className="text-primary font-semibold">View Details</Link>
                                </td>
                            </tr>
                            <tr>
                                <th>#004</th>
                                <td>7 Sept 2020</td>
                                <td>$345(5 Product)</td>
                                <td>Processing</td>
                                <td>
                                    <Link href="#" className="text-primary font-semibold">View Details</Link>
                                </td>
                            </tr>
                            <tr>
                                <th>#004</th>
                                <td>7 Sept 2020</td>
                                <td>$345(5 Product)</td>
                                <td>Processing</td>
                                <td>
                                    <Link href="#" className="text-primary font-semibold">View Details</Link>
                                </td>
                            </tr>
                            <tr>
                                <th>#004</th>
                                <td>7 Sept 2020</td>
                                <td>$345(5 Product)</td>
                                <td>Processing</td>
                                <td>
                                    <Link href="#" className="text-primary font-semibold">View Details</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}