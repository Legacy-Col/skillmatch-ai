'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";


const navLinks = [
    { name: "Academy", href: "/academy" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" }
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-700/30">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
                <Link
                    href="/"
                    className="text-2xl font-serif text-zinc-100"
                >
                    SkillMatch <span className="text-blue-400">Ai</span>
                </Link>

                {/* Desktop Links */}

                <div className="hidden md:flex space-x-6 text-xl font-serif ">
                    {navLinks.map((index) => {
                        const isActive = pathname === index.href;
                        return (
                            <Link
                                key={index.name}
                                href={index.href}
                                className={`transition-colors py-4 ${isActive ? "text-blue-400" : " text-gray-200 hover:text-blue-400"}`}
                            >
                                {index.name}
                            </Link>
                        )
                    })}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        className=" bg-blue-900/60 text-white px-4 font-medium rounded-xl shadow-md shadow-transparent hover:shadow-neutral-100"
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-blue-800"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu">
                    {isMenuOpen ? <MdMenuOpen size={20} /> : <IoMenu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="md:hidden top-0 right-0 h-full w-64 bg-gray-900/80 z-50 shadow-md flex flex-col space-y-6 backdrop-blur-lg border-t border-gray-700/30"
                    >
                        <div className="flex flex-col space-y-4 self-end px-6 py-4 text-center">
                            {navLinks.map((index) => {
                                const isActive = pathname === index.href;
                                return (
                                    <Link
                                        key={index.name}
                                        href={index.href}
                                        className={`transition-colors py-2 
                                            ${isActive ? "text-blue-400" : " text-gray-200 hover:text-blue-400"}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {index.name}
                                    </Link>
                                )
                            })}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.95 }}
                                className=" bg-blue-900/60 text-white px-4 py-4 font-medium rounded-xl shadow-md shadow-transparent hover:shadow-neutral-100"
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}