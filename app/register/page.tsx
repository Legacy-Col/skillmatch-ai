'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const HandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });
        setLoading(false);

        if (res.ok) {
            router.push("/login");
        } else {
            const data = await res.json();
            alert(data.message || "Registration Failed")
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-l from-slate-900 to-neutral-700 text-zinc-200">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={HandleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="User Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-900 transition font-semibold ">
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
                <p className="text-gray-700 hover:text-blue-500 text-sm mt-8">Already have an account? <span className="text-semibold"><a href="/login">Login</a></span></p>

            </div>
        </section>
    )
}