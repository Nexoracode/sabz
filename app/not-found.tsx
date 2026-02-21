import Link from "next/link";
import './globals.css';

export default function NotFound() {
    return (
        <div className="max-w-full h-screen flex flex-col items-center justify-center bg-gray-600 text-white font-bold gap-3">
            <p className="text-3xl font-semibold"> 404 </p>
            <p> صفحه یافت نشد </p>
            <p className="text-2xl"> صفحه ای که به دنبال آن هستید، وجود ندارد یا منتقل شده است.</p>
            <Link className="bg-gray-50 text-black py-1 px-2 rounded-md" href={'/'}>بازگشت به صفحه اصلی</Link>
        </div>
    )
}