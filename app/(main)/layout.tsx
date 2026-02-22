import { Metadata } from 'next';
import './../globals.css';
import { Header } from '@/components/shared/index';

export const metaData: Metadata = {
    title: 'آکادمی آموزش برنامه نویسی سبز لرن',
    description: 'اموزش برای تمام سنین از صفر تا 1000'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>{children} </main>
            {/* <footer className='mx-10 mt-20 mb-10 rounded-md h-60 relative'>
                <div className='w-96 h-40 bg-green-600 rounded-md' />
                <div className='absolute top-6 right-4 h-full w-full bg-gray-900 rounded-md'>
                    hello
                </div>
            </footer> */}
        </>
    )
}