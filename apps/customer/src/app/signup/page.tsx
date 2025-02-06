import Link from "next/link";
import InputButton from "../../components/ui/form/button";
import Input from "../../components/ui/form/input";


export default function page() {
    return (
        <div className="flex flex-col gap-4 mt-16 md:w-[65%] lg:w-[30vw] md:mx-auto shadow-md p-5 rounded-lg">
            <h1 className="text-center font-semibold text-3xl">Create Account</h1>
            <form className="flex flex-col gap-3">
                <Input name="phone" placeholder="Phone Number" type="text" />
                <Input name="password" placeholder="Password" type="password" />
                <Input name="repeat-password" placeholder="Confirm Password" type="password" />
                <div className="flex gap-3 items-center text-gray-600 text-sm">
                    <input type="checkbox" id="terms" name="terms" value="terms" />
                    <label htmlFor="terms">Accept all terms & conditions</label>
                </div>
                <InputButton />
                <div className="flex gap-1 mt-3 justify-center text-sm">
                    <p>Already have an account?</p>
                    <Link href="/signin" className="hover:underline font-semibold">Login</Link>
                </div>
            </form>
        </div>
    )
}