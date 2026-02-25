import DeviderButton from "@/components/ui/devide-buttonr";
import Devider from "@/components/ui/devider";
import { getCategoriesWithCount, getCourseByCategory, getLatestCourse, getPopularCourse, getTopInstructor } from "@/lib/queries/course.query";
import { CourseCard, CategoryCard, InstructorCard } from "@/components/shared/index";
import Link from "next/link";
export async function FeatureSection() {

    const [latest, popular, topInstructor, categoryWithCount] = await Promise.all([
        getLatestCourse(),
        getPopularCourse(),
        getTopInstructor(),
        getCategoriesWithCount(),
    ])

    return (
        <>
            <DeviderButton
                text="آخرین"
                colorText="دوره های سبزلرن"
                leftWidget={<Link href={'/courses'}>همه دوره ها</Link>}>
                {latest.map((course) => <CourseCard key={course.id} course={course} />)}
            </DeviderButton>
            <Devider
                text="برترین"
                colorText="اساتید سبزلرن">
                {topInstructor.map((instructor) => <InstructorCard key={instructor.id} instructor={instructor} />)}
            </Devider>
            <DeviderButton
                text="محبوب‌ترین"
                colorText="دوره های سبزلرن"
                leftWidget={<Link href={'/courses'}>همه دوره ها</Link>}>
                {popular.map((course) => <CourseCard key={course.id} course={course} />)}
            </DeviderButton>
            <Devider
                text="دسته بندی"
                colorText="دوره ها">
                {categoryWithCount.map((category) => <CategoryCard key={category.id} category={category} />)}
            </Devider>
            <DeviderButton
                text="دوره ها"
                colorText="بر اساس دسته"
                leftWidget={<Link href={'/courses'}>همه دوره ها</Link>}>
                {popular.map((course) => <CourseCard key={course.id} course={course} />)}
            </DeviderButton>
        </>
    )
}
