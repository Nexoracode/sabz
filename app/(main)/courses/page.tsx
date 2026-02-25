import { CourseCard } from "@/components/shared";
import { Breadcrumb } from "@/components/shared/breadcrump";
import { CourseFilter } from "@/components/shared/course-filter";
import { CourseHeader } from "@/components/shared/course-header";
import { prisma } from "@/lib/prisma";
import { getFilteredCourses } from "@/lib/queries/course.query";
import { Suspense } from "react";
import { BsNutFill } from "react-icons/bs";

type Props = {
    searchParams: Promise<{
        search?: string;
        category?: string;
        sort?: string;
        free?: string;
    }>
}

export default async function Courses({ searchParams }: Props) {
    const params = await searchParams;
    const [courses, categories] = await Promise.all([
        getFilteredCourses({
            search: params.search,
            category: params.category,
            sort: params.sort,
            free: params.free === "true"
        }),
        prisma.category.findMany(),
    ])
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <Breadcrumb items={[{ label: 'خانه', href: '/' }, { label: 'همه دوره ها', href: '/courses' }]} />
            <CourseHeader />
            <div className="grid grid-cols-3 gap-4 mt-20">
                <div className="col-span-1 sticky top-7 h-screen overflow-y-auto">
                    <CourseFilter categories={categories} />
                </div>
                <Suspense fallback={<div>wait</div>} />
                <div className="col-span-2 flex flex-row gap-4">
                    {courses.length === 0
                        ? <div className="flex flex-col justify-center items-center h-32 w-full gap-2">
                            <BsNutFill size={20} />
                            <span>دوره ای مطابق با فیلتر انتخابی شما یافت نشد.</span>
                            <span className="text-sm text-gray-500">لطفا فیلتر هارا تغییر دهید یا متن جستجو را تغییر دهید.</span>
                        </div>
                        : courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                </div>
            </div>
        </div>
    )
}