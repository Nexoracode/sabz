import Image from "next/image";
import Link from "next/link";

type Props = {
    course: {
        id: string;
        title: string;
        slug: string;
        thumbnail: string | null;
        price: any
        category: { name: string } | null
        _count: { enrollment: number }
    }
}
export function CourseCard({ course }: Props) {
    return (
        <Link href={`/courses/${course.slug}`}>
            <div className="flex flex-col justify-center items-start bg-white shadow-md rounded-lg hover:shadow-lg overflow-hidden transition">
                <div className="releative bg-gray-100">
                    {course.thumbnail ?
                        <img src={course.thumbnail} alt={course.title} width={200} height={200} /> :
                        <div className="flex justify-center items-center w-full h-full bg-gray-200">
                            بدون تصویر
                        </div>
                    }
                </div>
                <div className="p-4 w-full">
                    {course.category && (
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                            {course.category.name}
                        </span>
                    )}
                    <h3 className="font-bold mt-2 text-gray-800">{course.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-gray-500">
                            {course._count.enrollment} دانشجو
                        </span>
                        <span className="font-bold text-blue-600">
                            {Number(course.price) === 0 ? 'رایگان' : `${Number(course.price).toLocaleString('fa')} تومان`}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}