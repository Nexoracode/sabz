import { FieldError, Path, UseFormRegister } from 'react-hook-form'

type Props<T extends Record<string, any>> = {
    label?: string
    type?: string
    name: Path<T>,
    register: UseFormRegister<T>,
    placeholder?: string
    icon: React.ReactNode
    error?: FieldError,
}

export default function FromInput<T extends Record<string, any>>({
    label,
    type = 'text',
    placeholder,
    name,
    register,
    error,
    icon,
}: Props<T>) {
    return (
        <div>
            <label className={`block text-xs ${error ? 'text-red-600' : 'text-gray-500'}`}>{label}</label>
            <div className={`flex items-center justify-between border ${error ? 'border-red-600' : 'border-gray-300'} bg-white px-4 py-3  rounded-md mt-2 w-full transition`}>
                <input
                    {...register(name)}
                    className="outline-none placeholder:text-[11px] text-gray-600 text-[10px] w-full"
                    type={type}
                    placeholder={placeholder}
                />
                <div className={`${error ? 'text-red-600' : 'text-gray-600'}`}>
                    {icon}
                </div>
            </div>
            <span className={`block ${error ? 'visible' : 'invisible'} text-[8px] mt-0.5 mr-1 text-red-500`}>
                {error?.message}
            </span>
        </div>
    )
}