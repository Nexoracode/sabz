"use client"

import { useState } from "react";
import { registerAction } from "@/actions/auth.actions";
import { z } from 'zod';
import AuthForm from "@/components/forms/auth.form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from '@/components/ui/form-input';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import FormButton from "@/components/ui/form-button";
import FormError from "@/components/ui/form-error";

const registerSchema = z.object({
    name: z.string().min(3, 'نام باید حداقل 3 حرف باشد.'),
    email: z.email('لطفا ایمیل معتبر وارد نمایید.'),
    password: z.string().min(6, 'رمزعبور باید حداقل 6 حرف داشته باشد.'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: 'رمزعبور مطابقت ندارد.',
    path: ['confirmPassword'],
})

type registerFormData = z.infer<typeof registerSchema>;
export default function RegisterPage() {
    const [serverError, setServerError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<registerFormData>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = async (data: registerFormData) => {
        setServerError(null);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);

        const result = await registerAction(null, formData);
        if (result?.globalError) {
            setServerError(result.globalError);
        }
    }

    return (
        <AuthForm type="register">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    error={errors.name}
                    placeholder="نام و نام خانوادگی"
                    icon={<AiOutlineUser />}
                    name="name"
                    register={register}
                />
                <FormInput
                    error={errors.email}
                    placeholder="آدرس ایمیل"
                    icon={<AiOutlineMail />}
                    name="email"
                    register={register}
                />
                <FormInput
                    error={errors.password}
                    type="password"
                    placeholder="رمز عبور"
                    icon={<AiOutlineLock />}
                    name="password"
                    register={register}
                />
                <FormInput
                    error={errors.confirmPassword}
                    type="password"
                    placeholder="تکرار رمز عبور"
                    icon={<AiOutlineLock />}
                    name="confirmPassword"
                    register={register}
                />
                <FormError error={serverError} />
                <FormButton isSubmitting={isSubmitting} title="تایید عضویت" />
            </form>
        </AuthForm>
    )
}