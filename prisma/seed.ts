import { prisma } from "@/lib/prisma"

async function main() {
    // دسته‌بندی‌ها
    const categories = await Promise.all([
        prisma.category.upsert({
            where: { slug: "frontend" },
            update: {},
            create: { name: "فرانت‌اند", slug: "frontend" },
        }),
        prisma.category.upsert({
            where: { slug: "backend" },
            update: {},
            create: { name: "بک‌اند", slug: "backend" },
        }),
        prisma.category.upsert({
            where: { slug: "mobile" },
            update: {},
            create: { name: "موبایل", slug: "mobile" },
        }),
    ])

    // دوره‌ها
    await Promise.all([
        prisma.course.upsert({
            where: { slug: "nextjs-complete" },
            update: {},
            create: {
                title: "آموزش کامل Next.js",
                slug: "nextjs-complete",
                description: "از صفر تا سنیور با Next.js",
                price: 590000,
                isPublished: true,
                categoryId: categories[0].id,
            },
        }),
        prisma.course.upsert({
            where: { slug: "react-advanced" },
            update: {},
            create: {
                title: "React پیشرفته",
                slug: "react-advanced",
                description: "مفاهیم پیشرفته React",
                price: 450000,
                isPublished: true,
                categoryId: categories[0].id,
            },
        }),
        prisma.course.upsert({
            where: { slug: "nodejs-api" },
            update: {},
            create: {
                title: "ساخت API با Node.js",
                slug: "nodejs-api",
                description: "REST API حرفه‌ای با Node.js",
                price: 390000,
                isPublished: true,
                categoryId: categories[1].id,
            },
        }),
    ])

    console.log("✅ داده‌های تستی اضافه شدند")
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())