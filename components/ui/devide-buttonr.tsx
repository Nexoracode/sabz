type Props = {
    text: string;
    colorText: string;
    leftWidget: React.ReactNode,
    children: React.ReactNode
}

export default function DeviderButton({ text, colorText, leftWidget, children }: Props) {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-1 text-2xl font-bold min-w-fit">
                    <h2 className="">{text}</h2>
                    <p className="[word-spacing:-6px] text-green-600">{colorText}</p>
                </div>
                <div className="hidden sm:block w-full h-px bg-gray-300 mx-3" />
                <div className="flex items-center justify-center gap-1 min-w-fit hover:text-green-700 text-sm cursor-pointer">
                    {leftWidget}
                </div>
            </div>
            {children}
        </section>
    )
}
