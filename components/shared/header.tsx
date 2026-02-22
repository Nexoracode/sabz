import Image from "next/image";
import Link from "next/link";
import { LuShoppingBasket } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { auth } from "@/lib/auth";
import { AiOutlineBook, AiOutlineDashboard, AiOutlineIdcard, AiOutlineQuestion, AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import LogoutButton from "../ui/logout-button";

const profileItems = [
    { id: 1, title: 'پیشخوان', href: '/dashboard', icon: <AiOutlineDashboard /> },
    { id: 2, title: 'دوره های من', href: '/', icon: <AiOutlineBook /> },
    { id: 3, title: 'اشتراک و تراکنش', href: '/', icon: <AiOutlineIdcard /> },
    { id: 4, title: 'پرسش و پاسخ', href: '/', icon: <AiOutlineQuestion /> },
]


export async function Header() {
    const session = await auth();
    return (
        <header className="border-b border-gray-200 w-full">
            <div className="flex items-center justify-between px-8 py-7 max-w-7xl mx-auto">
                <div className='flex items-center justify-center gap-8'>
                    <BiMenu className="block lg:hidden cursor-pointer" size={30} />
                    <Link href={'/'}><Image alt='tet' src={'./logo.svg'} width={160} height={160} /></Link>
                    <div className='hidden font-semibold text-sm lg:flex items-center justify-center gap-8'>
                        <div className="group  hover:text-green-700 transition-color duration-300 relative">
                            <Link className='flex justify-center items-center gap-1' href={'/products'}>
                                دوره های آموزشی
                                <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-200" />
                            </Link>
                            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 w-145 h-96 absolute top-full pt-5">
                                <div className="w-full h-full bg-white rounded-lg shadow-xs shadow-gray-950/10 border border-gray-200">

                                </div>
                            </div>
                        </div>
                        <Link className='hover:text-green-700' href={'/'}>شروع برنامه نویسی</Link>
                        <Link className='hover:text-green-700' href={'/'}>مقالات</Link>
                        <Link className='hover:text-green-700' href={'/'}>درباره ما</Link>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-5 relative'>
                    <Link href={'/'}><AiOutlineShop size={30} className='text-gray-500' /></Link>
                    {session ?
                        <div className="group hover:opacity-100 transition-opacity duration-300">
                            <AiOutlineUser size={30} className="cursor-pointer group-hover:text-green-500" />
                            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-transparent absolute top-full left-0 pt-7 z-10 transition-opacity duration-300">
                                <div className=" bg-white rounded-md shadow-md flex flex-col justify-center items-start py-3">
                                    <div className="flex items-center justify-start border-b border-b-gray-300 w-full px-3 pb-3 gap-1">
                                        <div className="bg-gray-300 rounded-full size-10" />
                                        <div className="flex flex-col text-xs">
                                            <span>{session.user.name}</span>
                                            <span>{session.user.email}</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex flex-col px-5 w-full border-b border-b-gray-300 pb-2">
                                        {profileItems.map((item) => (
                                            <Link href={item.href} key={item.id} className="flex justify-start items-center gap-1 hover:bg-green-200/40 px-2 py-2 space-y-1 rounded-md cursor-pointer">
                                                {item.icon}
                                                <span className="text-xs">{item.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                    <LogoutButton />
                                </div>
                            </div>
                        </div> :
                        <Link className='px-4 py-2 border border-green-600 hover:bg-green-600/10 rounded-md text-green-600' href={'/login'}>ورود | ثبت نام</Link>
                    }
                </div>
            </div>
        </header>
    )
}