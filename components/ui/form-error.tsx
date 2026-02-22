type Props = {
    error?: string | null
}

export default function FormError({ error }: Props) {
    return (
        <span className="text-[10px] text-red-500 mr-1">{error}</span>
    )
}