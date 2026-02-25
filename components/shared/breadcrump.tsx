// components/shared/breadcrumb.tsx
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import { CgArrowLeft } from "react-icons/cg"
import { HiArrowLeft } from "react-icons/hi2"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

type BreadcrumbItem = {
    label: string
    href?: string
}

type Props = {
    items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: Props) {
    return (
        <nav className="flex items-center gap-1 text-[10px] font-semibold text-gray-600 mb-10">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                    {index > 0 && <MdOutlineKeyboardArrowLeft size={17} />
                    }
                    {item.href ? (
                        <Link href={item.href} className="hover:text-green-600 transition">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-800 font-medium">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    )
}