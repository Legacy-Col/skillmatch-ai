"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";

const navLinks = [
    { label: "Academy", href: "/academy" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Saved Courses", href: "/academy/saved" },
    { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            {/* Toggle Button (mobile only) */}
            <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className={`md:hidden p-3 fixed top-4 right-4 z-50  rounded-full text-white`}
            >
                {mobileMenu ? <MdMenuOpen size={24} /> : <IoMenu size={24} />}
            </button>

            {/* Sidebar */}
            <motion.aside
                initial={{ x: -250 }}
                animate={{ x: open ? 0 : -250 }}
                transition={{ type: "spring", stiffness: 100 }}
                className={`${mobileMenu ? "block" : "hidden"} md:block absolute top-0 right-0 h-screen w-60 bg-gray-900/90 text-white z-40 p-6 md:translate-x-0 md:static`}
            >
                <div className={`transition-all duration-300 fixed ${open ? "w-60" : "w-20"}
                hidden md:flex flex-col`}>
                    {/* For the Logo */}

                    <h2 className={`text-2xl font-bold mb-6 whitespace-nowrap overflow-hidden transition-all ${open ? "opacity-100" : "opacity-0"}`}>SkillMatch AI</h2>

                    {/* For the NavLinks */}

                    <nav className="space-y-4 flex-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center w-44 gap-3 p-2 rounded-md hover:bg-gray-950 transition"
                            >
                                <span className="w-6 h-6 bg-gray-600 rounded" />{" "}
                                <span
                                    className={`transition-all ${open ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    {mobileMenu && (
                        <div className="flex flex-col space-y-4 mt-10">
                            <h2 className="text-2xl font-semibold">SkillMAtch Ai</h2>
                            {navLinks.map((link) => (
                                <Link
                                    href={link.href}
                                    key={link.href}
                                    className="block hover:text-blue-400 transition"
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </motion.aside>
        </>
    );
}
