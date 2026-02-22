import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import FromInput from "../ui/form-input";

type Props = {
    children: React.ReactNode,
    type: 'login' | 'register'
}

export default function AuthForm({ children, type }: Props) {
    return (
        <div className="min-h-screen flex justify-start items-center flex-col pt-10">
            <Image alt="hello" src={'logo.svg'} width={180} height={180} />
            <div className="w-76 h-32 bg-green-600 relative mt-10 rounded-lg">
                <div className="absolute flex flex-col gap-8 top-4 right-4 left-4">
                    <div className="bg-white shadow-md rounded-md py-7 px-7 flex flex-col justify-start items-center">
                        <span className="text-lg font-bold">
                            {type === 'login' ? 'ورود به حساب کاربری' : 'ساخت حساب کاربری جدید'}
                        </span>
                        <div className="flex items-center justify-center text-[11px] text-gray-800 gap-1 mt-1">
                            <span>
                                {type === 'login' ? 'هنوز ثبت نام نکرده اید؟' : 'قبلا ثبت نام کرده اید؟'}
                            </span>
                            {type === 'login' ? <Link className="text-green-600" href="/register">ثبت نام</Link>
                                : <Link className="text-green-600" href="/login">وارد شوید</Link>}
                        </div>
                        <div className="mt-10 w-full">
                            {children}
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-xs text-gray-900 text-center gap-1">
                        <span>با عضویت در سایت،</span>
                        <Link className="text-[10px] underline text-green-600" href={'/roles'}>قوانین و شرایط</Link>
                        <span>سبزلرن را پذیرفته اید.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}