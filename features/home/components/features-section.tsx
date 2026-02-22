import DeviderButton from "@/components/ui/devide-buttonr";
import Devider from "@/components/ui/devider";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

export function FeatureSection() {
    return (
        <>
            <DeviderButton
                text="آخرین"
                colorText="دوره های سبزلرن"
                leftWidget={<span>مشاهده همه</span>}>
                children
            </DeviderButton>
        </>
    )
}