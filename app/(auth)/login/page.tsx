'use client'

import { loginAction } from "@/actions/auth.actions";
import AuthForm from "@/components/forms/auth.form";
import FormButton from "@/components/ui/form-button";
import FormError from "@/components/ui/form-error";
import FormInput from '@/components/ui/form-input';
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { z } from 'zod';

const loginSchema = z.object({
    email: z.email('لطفا ایمیل معتبر وارد کنید.'),
    password: z.string().min(6, 'رمزعبور باید حداقل شامل 6 کاراکتر باشد.')
})
type loginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
    const [serverError, setServerError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(loginSchema)
    })
    const onSubmit = async (data: loginFormData) => {
        setServerError(null);
        const formData = new FormData()
        formData.append('email', data.email);
        formData.append('password', data.password)
        const result = await loginAction(formData);
        if (result?.error) {
            setServerError(result?.error);
        }
    }
    return (
        <AuthForm type="login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    register={register}
                    placeholder="آدرس ایمیل"
                    name="email"
                    error={errors.email}
                    icon={<AiOutlineMail />}
                />
                <FormInput
                    register={register}
                    type="password"
                    placeholder="رمز عبور"
                    name="password"
                    error={errors.password}
                    icon={<AiOutlineLock />}
                />
                <FormError error={serverError} />
                <FormButton title="ادامه و ورود به حساب" isSubmitting={isSubmitting} />
            </form>
        </AuthForm>
    )
}