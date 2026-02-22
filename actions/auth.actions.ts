"use server"

import { isRedirectError } from "next/dist/client/components/redirect-error";
import { prisma } from "@/lib/prisma";
import { z } from 'zod';
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/lib/auth";

const registerSchema = z.object({
    name: z.string().min(3, 'نام باید حداقل دارای 3 کاراکتر باشد.'),
    email: z.string().email('لطفا ایمیل معتبر وارد نمایید.'),
    password: z.string().min(6, 'رمز عبور باید حداقل شامل 6 حرف باشد.')
})

type ActionState = {
    errors?: {
        name?: string[],
        email?: string[],
        password?: string[]
    },
    globalError?: string,
    success?: boolean
}

export async function registerAction(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
    const raw = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const parsed = registerSchema.safeParse(raw);
    if (!parsed.success) return {
        errors: parsed.error.flatten().fieldErrors
    }
    const { name, email, password } = parsed.data;
    const existsEmail = await prisma.user.findUnique({ where: { email } });
    if (existsEmail) return {
        globalError: 'این ایمیل از قبل ثبت شده است.'
    }
    const hashedPass = await bcrypt.hash(password, 12);
    await prisma.user.create({
        data: { name, email, password: hashedPass }
    })
    await signIn('credentials', {
        email, password, redirectTo: '/'
    })

    return { success: true }
}

export async function loginAction(formData: FormData) {
    try {
        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirectTo: '/',
        })
    } catch (e) {
        if (isRedirectError(e)) throw e
        return { error: `ایمیل یا رمزعبور اشتباه است.` }
    }
}

export async function logoutAction() {
    await signOut({
        redirectTo: '/'
    })
}