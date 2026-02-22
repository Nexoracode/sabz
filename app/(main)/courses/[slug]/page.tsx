import { products } from "../page";
import { notFound } from "next/navigation";

export default async function CourseDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // const product = products.find((p) => p.id == id);
    // if (!product) {
    //     notFound();
    // }
    return (
        <div className="max-w-7xl mx-auto p-4">
            S
        </div>
    )
}