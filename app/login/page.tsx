'use client'

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        setLoading(false);

        if (res?.ok) {
            router.push("/")
        } else {
            alert(res?.error || "Login Failed");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-l from-slate-900 to-neutral-700 text-zinc-200">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <button className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-900 transition font-semibold ">
                        {loading ? "Logging In..." : "Login"}
                    </button>
                </form>
                <p className="text-gray-700 hover:text-blue-500 text-sm mt-8">Don&apos;t have an account? <span className="text-semibold"><a href="/register">Register</a></span></p>

            </div>
        </section>
    )
}