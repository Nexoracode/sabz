import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";

export function HeroSection() {
    return (
        <section className="flex flex-col-reverse lg:flex-row relative pb-32">
            <div className="flex items-center justify-center md:justify-end flex-col pt-7 gap-2">
                <div className='flex flex-col gap-2 items-start font-bold text-2xl lg:text-3xl leading-14 lg:leading-18  text-gray-800 text-center lg:text-start'>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <div className='bg-green-300/10 border border-gray-300 px-5 ml-2 relative'>
                            <h1 className='text-green-600'>برنامه‌نویسی</h1>
                            <div className='size-2 bg-gray-300 absolute -top-1 -right-1' />
                            <div className='size-2 bg-gray-300 absolute -top-1 -left-1' />
                            <div className='size-2 bg-gray-300 absolute -bottom-1 -left-1' />
                            <div className='size-2 bg-gray-300 absolute -bottom-1 -right-1' />
                        </div>
                        <span>رو همین امروز </span>
                    </div>
                    <span className="text-3xl font-black bg-linear-to-r from-purple-500 
         to-pink-500 bg-clip-text text-transparent">شروع‌کن و آینده شغلی‌ات رو بساز!</span>
                </div>
                <p className='text-md leading-10 w-full text-center lg:text-start text-gray-600'>با آموزش‌های پروژه‌محور و فارسی سبــزلرن، قدم‌به‌قدم تا بازار کار در کنار تو هستیم. بدون اتلاف وقت، یاد بگیر و وارد دنیای برنامه‌نویسی شو.</p>
                <form className='relative flex items-center justify-between w-full bg-white rounded-lg gap-2 p-2 mt-4 self-start'>
                    <input className='outline-none h-full w-full mr-3 placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium' placeholder='دنبال چه دوره ای میگردی؟' type='text' />
                    <div className='flex justify-center items-center bg-green-500/10 p-4 rounded-lg text-green-500 cursor-pointer border border-transparent hover:border-green-500 transition-color duration-300'>
                        <IoSearchOutline size={20} />
                    </div>
                    <svg className="hidden xl:block absolute -left-26 top-2 rotate-45 text-gray-300" fill="currentColor" height="75" viewBox="0 0 100 100" width="75" xmlns="http://www.w3.org/2000/svg"><path d="m73.63 39.36c-.61 5.44-2.44 10.69-4.64 15.67-2.02 4.6-4.3 9.2-7.43 13.16-5.47 6.92-14.97 12.45-23.75 8.23-9.86-4.74-8.5-17.86-4.27-26.05 2.34-4.53 4.8-8.85 5.34-14.03.49-4.64-.77-9.42-4.13-12.77-3.38-3.37-8.29-4.61-12.73-2.68-4.49 1.95-7.45 6.32-9.82 10.41-1.1 1.9 1.84 3.62 2.94 1.72 2.03-3.5 4.59-7.64 8.55-9.16 4.1-1.57 8.28.76 10.37 4.37 2.57 4.45 1.55 10.13-.46 14.58-2.18 4.82-5.12 9.12-6.14 14.41-.96 4.98-.8 10.41 1.42 15.05 1.9 3.97 5.57 6.76 9.7 8.11 9.19 2.98 18.67-1.87 24.61-8.83 3.69-4.33 6.34-9.39 8.63-14.56 2.51-5.65 4.52-11.46 5.21-17.63.25-2.18-3.16-2.16-3.4 0z"></path><path d="m87.75 48.51c-1.29-5.17-5.1-20.51-5.72-23.01-.53-2.14-.82-4.22-2.65-5.63-.72-.55-1.83-.05-2.33.61-6.66 8.79-11.48 15.32-17.24 25.22-1.1 1.9 2.05 2.7 3.29.91 5.51-7.93 9.93-14 15.28-21.78.04.2 4.93 19.95 6.08 24.59.53 2.12 3.82 1.22 3.29-.91z"></path></svg>
                </form>
                <div className='flex items-center justify-center md:justify-center gap-5 w-full mt-4'>
                    <div className='flex items-center justify-start gap-2 text-[12px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--accent size-5 sm:size-6" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#1EB35B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        <span>80+ موضوع مختلف</span>
                    </div>
                    <div className='flex items-center justify-start gap-2 text-[12px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--accent size-5 sm:size-6" width="1.05em" height="1em" viewBox="0 0 25 24" ><g fill="none"><path d="M22.5 16.74V4.67001C22.5 3.47001 21.52 2.58001 20.33 2.68001H20.27C18.17 2.86001 14.98 3.93001 13.2 5.05001L13.03 5.16001C12.74 5.34001 12.26 5.34001 11.97 5.16001L11.72 5.01001C9.94 3.90001 6.76 2.84001 4.66 2.67001C3.47 2.57001 2.5 3.47001 2.5 4.66001V16.74C2.5 17.7 3.28 18.6 4.24 18.72L4.53 18.76C6.7 19.05 10.05 20.15 11.97 21.2L12.01 21.22C12.28 21.37 12.71 21.37 12.97 21.22C14.89 20.16 18.25 19.05 20.43 18.76L20.76 18.72C21.72 18.6 22.5 17.7 22.5 16.74Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12.5 5.49001V20.49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M8.25 8.49001H6" stroke="#1EB35B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9 11.49H6" stroke="#1EB35B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        <span>آموزش ویژه بازار کار</span>
                    </div>
                    <div className='flex items-center justify-start gap-2 text-[12px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--accent size-5 sm:size-6" width="1em" height="1em" viewBox="0 0 24 24" ><g fill="none"><path d="M12.0001 7.89001L10.9301 9.75001C10.6901 10.16 10.8901 10.5 11.3601 10.5H12.6301C13.1101 10.5 13.3001 10.84 13.0601 11.25L12.0001 13.11" stroke="#1EB35B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M8.29938 18.04V16.88C5.99938 15.49 4.10938 12.78 4.10938 9.89999C4.10938 4.94999 8.65938 1.06999 13.7994 2.18999C16.0594 2.68999 18.0394 4.18999 19.0694 6.25999C21.1594 10.46 18.9594 14.92 15.7294 16.87V18.03C15.7294 18.32 15.8394 18.99 14.7694 18.99H9.25938C8.15938 19 8.29938 18.57 8.29938 18.04Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
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