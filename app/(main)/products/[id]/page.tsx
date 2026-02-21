import { products } from "../page";
import { notFound } from "next/navigation";

export default async function ProductDetails({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id == id);
    if (!product) {
        notFound();
    }
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className="text-gray-700 text-xl">{product.description}</p>
                </div>
                <img className="rounded-md" src={product.image} alt="picture" />
            </div>
        </div>
    )
}