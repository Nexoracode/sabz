import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchInput(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="w-full bg-white flex items-center justify-between px-4 py-4 rounded-lg">
            <input {...props} className="outline-none w-full text-sm" />
            <AiOutlineSearch className="text-gray-500" size={28} />
        </div>
    )
}