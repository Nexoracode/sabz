import { prisma } from "@/lib/prisma";

export async function getLatestCourse(take: number = 6) {
    return prisma.course.findMany({
        where: { isPublished: true },
        orderBy: { createdAt: 'desc' },
        take,
        include: {
            category: true,
            _count: { select: { enrollment: true } }
        }
    })
}

export async function getPopularCourse(take: number = 6) {
    return prisma.course.findMany({
        where: { isPublished: true },
        orderBy: { enrollment: { _count: 'desc' } },
        take,
        include: {
            category: true,
            _count: { select: { enrollment: true } }
        }
    })
}

export async function getCourseByCategory() {
    return prisma.category.findMany({
        include: {
            courses: {
                where: { isPublished: true },
                take: 4,
                include: {
                    _count: { select: { enrollment: true } }
                }
            }
        }
    })
}

export async function getTopInstructor(take: number = 6) {
    return prisma.user.findMany({
        where: { role: "INSTRUCTOR" },
        take,
        include: {
            courses: {
                where: { isPublished: true },
                include: {
                    _count: { select: { enrollment: true } }
                }
            }
        }

    })
}

export async function getCategoriesWithCount() {
    return prisma.category.findMany({
        include: {
            _count: {
                select: {
                    courses: { where: { isPublished: true } }
                }
            }
        }
    })
}

export async function getCourseStats() {
    const [totalStudent, totalCourses, totalDuration] = await Promise.all([
        prisma.enrollment.count(),
        prisma.course.count({ where: { isPublished: true } }),
        prisma.lesson.aggregate({ _sum: { duration: true } })
    ])

    return {
        totalStudent,
        totalCourses,
        totalHourse: Math.floor((totalDuration._sum.duration ?? 0) / 3600)
    }
}

type Props = {
    search?: string
    category?: string
    sort?: string
    free?: boolean
}

export async function getFilteredCourses({ category, free, search, sort }: Props) {
    return prisma.course.findMany({
        where: {
            isPublished: true,
            ...(search && {
                title: { contains: search }
            }),
            ...(category && {
                category: { slug: category }
            }),
            ...(free && {
                price: { equals: 0 }
            })
        },
        orderBy:
            sort === "popular"
                ? { enrollment: { _count: "desc" } }
                : sort === "newset"
                    ? { createdAt: "desc" }
                    : sort === 'updated'
                        ? { updatedAt: 'desc' }
                        : { createdAt: "desc" },
        include: {
            category: true,
            _count: { select: { enrollment: true } }
        }
    })
}