import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";

export function HeroSection() {
    return (
        <section className="flex flex-col-reverse lg:flex-row relative pb-32">
            <div className="flex items-center justify-center md:justify-end flex-col pt-7 gap-2">
                <div className='group font-black text-2xl lg:text-4xl leading-14 lg:leading-18  text-gray-800 text-center lg:text-start'>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <div className='bg-gray-300/10 border border-gray-300 px-5 ml-2 relative'>
                            <h1 className='text-green-600'>برنامه‌نویسی</h1>
                            <div className='size-2 bg-gray-300 absolute -top-1 -right-1' />
                            <div className='size-2 bg-gray-300 absolute -top-1 -left-1' />
                            <div className='size-2 bg-gray-300 absolute -bottom-1 -left-1' />
                            <div className='size-2 bg-gray-300 absolute -bottom-1 -right-1' />
                        </div>
                        <span>رو همین امروز </span>
                    </div>
                    <span className="text-4xl font-black bg-linear-to-r from-purple-500 
         to-pink-500 bg-clip-text text-transparent">شروع‌کن و آینده شغلیت رو بساز!</span>
                </div>
                <p className='text-lg leading-10 w-[90%] text-center lg:text-start text-gray-600'>با آموزش‌های پروژه‌محور و فارسی سبــزلرن، قدم‌به‌قدم تا بازار کار در کنار تو هستیم. بدون اتلاف وقت، یاد بگیر و وارد دنیای برنامه‌نویسی شو.</p>
                <form className='relative flex items-center justify-between w-full bg-white rounded-lg gap-2 p-2 mt-2 self-start'>
                    <input className='outline-none h-full w-full mr-3 placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium' placeholder='دنبال چه دوره ای میگردی؟' type='text' />
                    <div className='flex justify-center items-center bg-green-500/10 p-4 rounded-lg text-green-500 cursor-pointer border border-transparent hover:border-green-500 transition-color duration-300'>
                        <IoSearchOutline size={20} />
                    </div>
                    <svg className="hidden xl:block absolute -left-26 top-2 rotate-45 text-gray-300" fill="currentColor" height="75" viewBox="0 0 100 100" width="75" xmlns="http://www.w3.org/2000/svg"><path d="m73.63 39.36c-.61 5.44-2.44 10.69-4.64 15.67-2.02 4.6-4.3 9.2-7.43 13.16-5.47 6.92-14.97 12.45-23.75 8.23-9.86-4.74-8.5-17.86-4.27-26.05 2.34-4.53 4.8-8.85 5.34-14.03.49-4.64-.77-9.42-4.13-12.77-3.38-3.37-8.29-4.61-12.73-2.68-4.49 1.95-7.45 6.32-9.82 10.41-1.1 1.9 1.84 3.62 2.94 1.72 2.03-3.5 4.59-7.64 8.55-9.16 4.1-1.57 8.28.76 10.37 4.37 2.57 4.45 1.55 10.13-.46 14.58-2.18 4.82-5.12 9.12-6.14 14.41-.96 4.98-.8 10.41 1.42 15.05 1.9 3.97 5.57 6.76 9.7 8.11 9.19 2.98 18.67-1.87 24.61-8.83 3.69-4.33 6.34-9.39 8.63-14.56 2.51-5.65 4.52-11.46 5.21-17.63.25-2.18-3.16-2.16-3.4 0z"></path><path d="m87.75 48.51c-1.29-5.17-5.1-20.51-5.72-23.01-.53-2.14-.82-4.22-2.65-5.63-.72-.55-1.83-.05-2.33.61-6.66 8.79-11.48 15.32-17.24 25.22-1.1 1.9 2.05 2.7 3.29.91 5.51-7.93 9.93-14 15.28-21.78.04.2 4.93 19.95 6.08 24.59.53 2.12 3.82 1.22 3.29-.91z"></path></svg>
                </form>
                <div className='flex items-center justify-center md:justify-center gap-10 w-full mt-4'>
                    <div className='flex items-center justify-start gap-2 text-[13px]'>
                        <IoSearchOutline />
                        <span>+80 موضوع مختلف</span>
                    </div>
                    <div className='flex items-center justify-start gap-2 text-[13px]'>
                        <IoSearchOutline />
                        <span>آموزش ویژه بازار کار</span>
                    </div>
                    <div className='flex items-center justify-start gap-2 text-[13px]'>
                        <IoSearchOutline />
                        <span>مجهز به هوش مصنوعی</span>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center md:justify-end items-center'>
                <Image className='w-full md:w-2/3 lg:w-3/4' src={'/young-man.png'} alt='mean' width={500} height={500} />
            </div>
        </section>
    )
}