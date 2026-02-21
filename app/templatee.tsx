'use client';
import { motion } from "framer-motion";
import { Metadata } from "next";
import React from "react";

export const metaData: Metadata = {
    title: 'آکادمی آموزش برنامه نویسی سبزلرن',
    description: 'اموزش از سیر تا پیاز',
}

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    )
}