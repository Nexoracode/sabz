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