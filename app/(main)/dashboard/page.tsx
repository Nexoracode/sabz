import { auth } from '@/lib/auth'

export default async function Dashboardpage() {
    const session = await auth();
    return <div>Wellcom Back, {session?.user?.name}</div>
}