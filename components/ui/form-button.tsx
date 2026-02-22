type Props = {
    title: string;
    isSubmitting: boolean,
    type?: "submit" | "reset" | "button"
}

export default function FormButton({ title, isSubmitting, type = 'submit' }: Props) {
    return (
        <button
            type={type}
            disabled={isSubmitting}
            className="bg-gray-950 flex items-center justify-center py-2 w-full mt-4 rounded-md text-white text-xs hover:scale-110 transition-transform duration-300 cursor-pointer">
            {isSubmitting ? 'در حال ثبت ...' : `${title}`}
        </button>
    )
}