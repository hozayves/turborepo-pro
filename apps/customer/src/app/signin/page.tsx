import Link from "next/link";
import InputButton from "../../components/ui/form/button";
import Input from "../../components/ui/form/input";


export default function page() {
    return (
        <div className="flex flex-col gap-4 mt-16 md:w-[65%] lg:w-[30vw] md:mx-auto shadow-md p-5 rounded-lg">
            <h1 className="text-center font-semibold text-3xl">Sign In</h1>
            <form className="flex flex-col gap-3">
                <Input name="phone" placeholder="Phone Number" type="text" />
                <Input name="password" placeholder="Password" type="password" />
                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                    <div className="flex gap-1 items-center">
                        <input type="checkbox" id="terms" name="terms" value="terms" />
                        <label htmlFor="terms">Accept all terms & conditions</label>
                    </div>
                    <Link href="#" className="hover:underline">Forgot Password</Link>
                </div>
                <InputButton />
                <div className="flex gap-1 mt-3 justify-center text-sm">
                    <p>Dont have an account?</p>
                    <Link href="/signup" className="hover:underline font-semibold">Register</Link>
                </div>
            </form>
        </div>
    )
}