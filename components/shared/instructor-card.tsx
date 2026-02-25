import Image from "next/image"
import Link from "next/link"

type Props = {
    instructor: {
        id: string
        name: string
        image: string | null
        title: string | null
        bio: string | null
        courses: {
            _count: { enrollment: number }
        }[]
    }
}

export function InstructorCard({ instructor }: Props) {
    // محاسبه کل دانشجوها
    const totalStudents = instructor.courses.reduce(
        (sum, course) => sum + course._count.enrollment,
        0
    )

    return (
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition text-center">
            {/* عکس استاد */}
            <div className="relative w-24 h-24 mx-auto mb-4">
                {instructor.image ? (
                    <Image
                        src={instructor.image}
                        alt={instructor.name}
                        fill
                        className="rounded-full object-cover"
                    />
                ) : (
                    <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                        {instructor.name[0]}
                    </div>
                )}
            </div>

            <h3 className="font-bold text-gray-800">{instructor.name}</h3>

            {instructor.title && (
                <p className="text-sm text-blue-600 mt-1">{instructor.title}</p>
            )}

            {instructor.bio && (
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">{instructor.bio}</p>
            )}

            <div className="flex justify-center gap-6 mt-4 text-sm text-gray-500">
                <div>
                    <span className="font-bold text-gray-800">{instructor.courses.length}</span>
                    <span className="mr-1">دوره</span>
                </div>
                <div>
                    <span className="font-bold text-gray-800">{totalStudents}</span>
                    <span className="mr-1">دانشجو</span>
                </div>
            </div>
        </div>
    )
}