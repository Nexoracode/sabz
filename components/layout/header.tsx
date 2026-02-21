import Image from "next/image";
import Link from "next/link";
import { LuShoppingBasket } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenu } from "react-icons/bi";


export function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-7 border-b border-b-gray-200 gap-10">
            <div className='flex items-center justify-center gap-8'>
                <BiMenu className="block lg:hidden cursor-pointer" size={30} />
                <Link href={'/'}><Image alt='tet' src={'./logo.svg'} width={160} height={160} /></Link>
                <div className='hidden lg:flex items-center justify-center gap-8'>
                    <div className="group hover:text-green-700 transition-color duration-300 relative">
                        <Link className='flex justify-center items-center gap-1' href={'/products'}>
                            دوره های آموزشی
                            <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-200" />
                        </Link>
                        <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 w-145 h-96 absolute top-full pt-5">
                            <div className="sw-full h-full bg-white rounded-lg shadow-xs shadow-gray-950/10 border border-gray-200">

                            </div>
                        </div>
                    </div>
                    <Link className='hover:text-green-700' href={'/'}>شروع برنامه نویسی</Link>
                    <Link className='hover:text-green-700' href={'/'}>مقالات</Link>
                    <Link className='hover:text-green-700' href={'/'}>درباره ما</Link>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <Link href={'/'}><LuShoppingBasket size={30} className='text-gray-700' /></Link>
                <Link className='px-4 py-2 border border-green-600 hover:bg-green-600/10 rounded-md text-green-600' href={'/login'}>ورود | ثبت نام</Link>
            </div>
        </header>
    )
}