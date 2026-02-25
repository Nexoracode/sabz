import Link from "next/link"

type Props = {
    category: {
        id: string
        name: string
        slug: string
        image?: string | null
        _count: { courses: number }
    }
}

export function CategoryCard({ category }: Props) {
    return (
        <Link href={`courses?category=${category.slug}`}>
            <div className="group z-20 relative felx justify-center items-center p-4 bg-white shadow-md border-2 border-transparent hover:border-green-500 rounded-lg transition-colors duration-300 overflow-hidden">
                <div className="w-full h-full group-hover:bg-green-300/10 bg-transparent absolute inset-0 z-10" />
                <div className="w-32 h-32 flex justify-center items-center flex-col gap-2">
                    {category.image ? <img src={category.image} width={50} height={50} /> : <div className="w-full h-full bg-gray-50 flex justify-center items-center">
                        بدون تصویر
                    </div>}
                    <span className="text-gray-800 font-bold">{category.name}</span>
                    <div className="flex justify-center items-center bg-blue-50 text-blue-400 p-2 text-xs rounded-md">
                        {category._count.courses} دوره آموزشی
                    </div>
                </div>
            </div>
        </Link>
    )
}