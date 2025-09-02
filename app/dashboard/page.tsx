'use client'

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { dashBoardData } from "@/lib/api/dashboardCourses";

export default function DashboardPage() {
    const { data: session } = useSession();
    const data = dashBoardData


    return (
        <section className="min-h-screen bg-gradient-to-r from-gray-600 to-purple-700/30 via-indigo-900 p-6 text-neutral-800">
            {/* Greetings */}
            <motion.div
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-serif">Welcome Back, {session?.user?.name || "Student"} 👋</h1>
                <p className="text-gray-400">Here&apos;s Your Progress Report</p>
            </motion.div>

            {/* Courses Area */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.courses.map((course, i) => (
                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.5 }}
                        className="bg-gray-400 rounded-xl shadow-lg overflow-hidden"
                    >
                        <Image
                            src={course.thumbnail}
                            alt={course.title}
                            width={400}
                            height={200}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-serif">{course.title}</h3>
                            <div className="mt-2">
                                <div className="flex justify-between text-sm mb-1">
                                    <span >Progress</span>
                                    <span>{course.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-3">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${course.progress}` }}
                                        className="h-3 rounded-full bg-blue-500" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}


