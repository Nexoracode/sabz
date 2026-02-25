type Props = {
    text: string;
    colorText: string;
    children: React.ReactNode
}

export default function Devider({ text, colorText, children }: Props) {
    return (
        <section className="flex flex-col gap-6 mt-24">
            <div className="flex items-center justify-between">
                <div className="hidden sm:block w-full h-px bg-linear-to-r from-gray-500/30 to-gray-200 mx-3" />
                <div className="flex items-center justify-start gap-1 text-2xl font-bold min-w-fit">
                    <h2 className="">{text}</h2>
                    <p className="[word-spacing:-6px] text-green-600">{colorText}</p>
                </div>
                <div className="hidden sm:block w-full h-px bg-linear-to-l from-gray-500/30 to-gray-200 mx-3" />
            </div>
            <div className="flex felx-row justify-start items-center gap-6">
                {children}
            </div>
        </section>
    )
}
