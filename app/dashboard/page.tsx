'use client'

import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function DashboardPage() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div className="flex h-screen items-center justify-center text-gray-500">
                Loading User Dashboard...
            </div>
        );
    };

    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-700 text-gray-200">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold mt-4"
                >
                    You&apos;re not Signed In
                </motion.h2>
                <Link
                    className="px-4 py-2 rounded-lg bg-blue-500 text-slate-200 hover:text-blue-600"
                    href="/login">
                    Go to Login
                </Link>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-800 to-slate-600 text-gray-200 px-6 md:px-12 py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-3xl font-serif mb-6">
                    Welcome back, {session.user?.name || session.user?.email} 👋
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 hover:shadow-blue-400 shadow-md mt-10 max-w-4xl mx-auto"
            >
                {[
                    { label: "Completed Courses", value: 0 },
                    { label: "Progress", value: "1%" }
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-600 rounded-xl p-8 text-center shadow"
                    >
                        <p className="text-2xl font-serif">{stat.value}</p>
                        <p className="text-neutral-400">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}