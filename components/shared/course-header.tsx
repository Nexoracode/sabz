import { getCourseStats } from "@/lib/queries/course.query";
import { AiOutlineUser } from "react-icons/ai";
export async function CourseHeader() {
    const { totalStudent, totalCourses, totalHourse } = await getCourseStats();
    return (
        <div className="relative h-48 bg-green-600 rounded-lg">
            <div className="bg-gray-950 h-56 absolute inset-0 mx-10 -top-3 rounded-md flex flex-col items-center justify-center gap-6">
                <h1 className="text-2xl font-black text-white">همه دوره های آموزشی</h1>
                <div className="flex justify-center items-center gap-10">
                    <div className="flex justify-around items-center gap-2">
                        <div className="size-14 rounded-md bg-gray-600 flex justify-center items-center text-white">
                            <AiOutlineUser size={25} />
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-center text-white text-sm">
                            <span>{totalStudent}</span>
                            <span>دانشجو</span>
                        </div>
                    </div>
                    <div className="flex justify-around items-center gap-2">
                        <div className="size-14 rounded-md bg-gray-600 flex justify-center items-center text-white">
                            <AiOutlineUser size={25} />
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-center text-white text-sm">
                            <span>{totalCourses}</span>
                            <span>دوره تخصصی</span>
                        </div>
                    </div>
                    <div className="flex justify-around items-center gap-2">
                        <div className="size-14 rounded-md bg-gray-600 flex justify-center items-center text-white">
                            <AiOutlineUser size={25} />
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-center text-white text-sm">
                            <span>{totalHourse}</span>
                            <span>ساعت آموزش</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}