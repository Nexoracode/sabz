import { Metadata } from "next"
import { SessionProvider } from "next-auth/react";
import localFont from 'next/font/local';

const myFont = localFont({
    src: './../public/iranyekan.woff2',
})

export const metadata: Metadata = {
    title: 'آکادمی آموزش برنامه نویسی سبز لرن',
    description: 'اموزش برای سنین از صف تا 10000',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="rtl">
            <body className={`${myFont.className} bg-gray-100`}>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}