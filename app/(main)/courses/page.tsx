import { Interface } from "readline";

export const courses = [
    { id: 1, name: 'آموزش جامع فریمورک Flutter', image: 'https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/11/flutter.webp', description: 'دوره آموزش جامع فلاتر سبزلرن، یادگیری Flutter از صفر تا ساخت اپلیکیشن‌های واقعی. آموزش', teacher: 'میلاد رشیدی زاده', score: 5, price: 2200000, discount: 60, studentCount: 6 },
    { id: 2, name: 'آموزش جامع توسعه وردپرس', image: 'https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/07/6.webp', description: 'آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که وردپرس', teacher: 'امیر طاهرخانی', score: 5, price: 2000000, discount: 60, studentCount: 170 },
    { id: 3, name: 'آموزش جامع زبان سی شارپ', image: 'https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/11/c-sharp.webp', description: 'در این دوره جامع C#، برنامه‌نویسی را از پایه تا سطح حرفه‌ای یاد می‌گیرید و با مفاهیم مهمی مثل شی‌ءگرایی، کار با داده‌ها و ساخت پروژه‌های عملی آشنا می‌شوید. هدف دوره این است که بتوانید پس از پایان آن، نرم‌افزارهای کاربردی بسازید و برای ورود به بازار کار آماده شوید.', teacher: 'مهدی شمس', score: 5, price: 1400000, discount: 60, studentCount: 19 },
    { id: 4, name: 'آموزش جامع فریمورک Flutter', image: 'https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/11/flutter.webp', description: 'دوره آموزش جامع فلاتر سبزلرن، یادگیری Flutter از صفر تا ساخت اپلیکیشن‌های واقعی. آموزش', teacher: 'میلاد رشیدی زاده', score: 5, price: 2200000, discount: 60, studentCount: 6 },
    { id: 5, name: 'آموزش جامع توسعه وردپرس', image: 'https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/07/6.webp', description: 'آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که وردپرس', teacher: 'امیر طاهرخانی', score: 5, price: 2000000, discount: 60, studentCount: 170 },
    { id: 6, name: 'آموزش جامع زبان سی شارپ', image: 'https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/11/c-sharp.webp', description: 'در این دوره جامع C#، برنامه‌نویسی را از پایه تا سطح حرفه‌ای یاد می‌گیرید و با مفاهیم مهمی مثل شی‌ءگرایی، کار با داده‌ها و ساخت پروژه‌های عملی آشنا می‌شوید. هدف دوره این است که بتوانید پس از پایان آن، نرم‌افزارهای کاربردی بسازید و برای ورود به بازار کار آماده شوید.', teacher: 'مهدی شمس', score: 5, price: 1400000, discount: 60, studentCount: 19 },
    { id: 7, name: 'آموزش جامع فریمورک Flutter', image: 'https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/11/flutter.webp', description: 'دوره آموزش جامع فلاتر سبزلرن، یادگیری Flutter از صفر تا ساخت اپلیکیشن‌های واقعی. آموزش', teacher: 'میلاد رشیدی زاده', score: 5, price: 2200000, discount: 60, studentCount: 6 },
    { id: 8, name: 'آموزش جامع توسعه وردپرس', image: 'https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/07/6.webp', description: 'آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که وردپرس', teacher: 'امیر طاهرخانی', score: 5, price: 2000000, discount: 60, studentCount: 170 },
];

export interface ISearchParams {
    sort?: string | null;
    category?: string | null;
}

export default async function Course({ searchParams }: { searchParams: Promise<ISearchParams> }) {
    const { sort, category } = await searchParams;
    return (
        <div className="max-w-7xl mx-auto p-4">
            <p>{sort ?? 'پیش فرض'}</p>
            <p>{category ?? 'همه'}</p>
            {/* divider */}
            <div className="flex items-center justify-between gap-1">
                <div className="flex flex-row gap-1 text-3xl font-bold">
                    <h1>آخرین</h1>
                    <h1 className="text-green-700">دوره های سبز لرن</h1>
                </div>
                <div className="border-[.5px] border-gray-200 w-full max-w-4xl" />
                <a className="text-gray-900" href="/">مشاهده همه</a>
            </div>
            { /* لیست محصولات */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
                {courses.map((course) => (
                    <div key={course.id} className="flex flex-col gap-3 shadow-md rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                        <a href={`/courses/${course.id}`} className="bg-gray-100 h-40">
                            <img src={course.image} alt="image" />
                        </a>
                        <div className="p-4 flex flex-col">
                            <a href={`courses/${course.id}`} className="font-bold hover:text-green-600 transition-colors duration-300 cursor-pointer">{course.name}</a>
                            <p className="text-gray-600 mt-1 text-sm line-clamp-2">{course.description}</p>
                            <div className="flex justify-between mt-4">
                                <p>{course.teacher}</p>
                                <p>{course.score}</p>
                            </div>
                            <div className="border-t border-t-gray-500 py-4 mt-4 flex flex-col items-end justify-center">
                                <div className="px-5 py-2 bg-green-700 rounded-md text-white w-12 place-items-center text-xs">
                                    <p>{course.discount}%</p>
                                </div>
                                <p>{course.price} تومان</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}