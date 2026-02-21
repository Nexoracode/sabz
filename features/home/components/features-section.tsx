import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

export function FeatureSection() {
    return (
        <section className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-1 text-3xl font-black min-w-fit">
                <h2 className="">آخرین</h2>
                <p className="[word-spacing:-6px] text-green-700">دوره های سبز لرن</p>
            </div>
            <div className="hidden sm:block w-full h-px bg-gray-300 mx-3    " />
            <Link href={'/courses'} className="flex items-center justify-center gap-1 min-w-fit hover:text-green-700">
                <span>همه دوره ها</span>
                <HiOutlineArrowLeft size={15} />
            </Link>
        </section>
    )
}