'use client';
import { useEffect } from "react";
export default function ErrorProduct({ error, reset }: { error: Error & { digest: string }, reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error])

    return (
        <div>
            <button onClick={reset}>تلاش مجدد</button>
        </div>
    )
}