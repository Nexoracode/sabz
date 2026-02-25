"use client"

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback, useTransition } from 'react';
import SearchInput from '../ui/search-input';
import { AiOutlineFilter, AiOutlineInbox } from 'react-icons/ai';

type category = {
    id: string;
    name: string;
    slug: string
    image?: string | null
}

type Props = {
    categories: category[]
}

const sorts = [
    { id: 1, value: 'newset', title: 'جدیدترین' },
    { id: 2, value: 'popular', title: 'محبوب ترین' },
    { id: 3, value: 'updated', title: 'آخرین آپدیت' },
]

export function CourseFilter({ categories }: Props) {
    const router = useRouter()
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [isPending, startTransitoin] = useTransition()

    const updateFilter = useCallback((
        key: string, value: string
    ) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }, [router, searchParams, pathname])

    return (
        <div className='flex flex-col px-10'>
            <SearchInput
                type='text'
                placeholder='جستجو در بین دوره ها'
                defaultValue={searchParams.get('search') ?? ""}
                onChange={(e) => updateFilter('search', e.target.value)}
            />
            <div className='mt-4 bg-white rounded-md p-4'>
                <div className='flex items-center justify-start border-b border-b-gray-200 gap-2 pb-4'>
                    <AiOutlineInbox size={25} className='text-gray-600' />
                    <span className='text-md font-semibold text-gray-600'>دسته بندی</span>
                </div>
                <div className='mt-3'>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type='radio'
                            name="category"
                            value=""
                            defaultChecked={!searchParams.get('category')}
                            onChange={(e) => updateFilter('category', "")}
                            className='accent-green-600'
                        />
                        <span className='text-xs'>همه دوره ها</span>
                    </label>
                </div>
                {categories.map((category) => (
                    <div key={category.id} className='mt-3'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input
                                type='radio'
                                name="category"
                                value={category.slug}
                                defaultChecked={searchParams.get('category') === category.slug}
                                onChange={(e) => updateFilter('category', category.slug)}
                                className='accent-green-600'
                            />
                            <span className='text-xs'>{category.name}</span>
                        </label>
                    </div>
                ))}
            </div>
            <div className='mt-4 bg-white rounded-md p-4'>
                <div className='flex items-center justify-start border-b border-b-gray-200 gap-2 pb-4'>
                    <AiOutlineFilter size={25} className='text-gray-600' />
                    <span className='text-md font-semibold text-gray-600'>مرتب سازی</span>
                </div>
                <div className='mt-3'>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type='radio'
                            name="sort"
                            value=""
                            defaultChecked={!searchParams.get('sort')}
                            onChange={(e) => updateFilter('sort', "")}
                            className='accent-green-600'
                        />
                        <span className='text-xs'>پیش‌قرض</span>
                    </label>
                </div>
                {sorts.map((sort) => (
                    <div key={sort.id} className='mt-3'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input
                                type='radio'
                                name="sort"
                                value={sort.value}
                                defaultChecked={searchParams.get('sort') === sort.value}
                                onChange={(e) => updateFilter('sort', sort.value)}
                                className='accent-green-600'
                            />
                            <span className='text-xs'>{sort.title}</span>
                        </label>
                    </div>
                ))}
            </div>
            <div className='bg-white rounded-lg mt-4 p-4'>
                <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-700">فقط دوره‌های رایگان</span>
                    <div
                        onClick={() =>
                            updateFilter("free", searchParams.get("free") ? "" : "true")
                        }
                        className={`relative w-11 h-6 rounded-full transition ${searchParams.get("free") ? "bg-blue-600" : "bg-gray-200"
                            }`}
                    >
                        <div
                            className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${searchParams.get("free") ? "right-1" : "left-1"
                                }`}
                        />
                    </div>
                </label>

            </div>
        </div>
    )
}