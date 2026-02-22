import { logoutAction } from "@/actions/auth.actions"

export default function LogoutButton() {
    return (
        <form action={logoutAction} className="px-5 mt-2 w-full">
            <button type="submit" className="w-full text-xs bg-red-100 text-red-900 py-3 rounded-md mt-2 cursor-pointer hover:bg-red-200">
                خروج از حساب کاربری
            </button>
        </form>
    )
}