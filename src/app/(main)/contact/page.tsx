"use client";

import { useState } from "react";
import Container from "@/src/components/Container";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // const response = await fetch("/api/contact", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ name, email, message }),
            // });

            // if (!response.ok) {
            //     const data = await response.json();
            //     throw new Error(data.message || "Something went wrong");
            // }

            alert("پیام شما با موفقیت ارسال شد!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            setError(err instanceof Error ? err.message : "خطایی رخ داد. لطفاً دوباره تلاش کنید.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full py-12 bg-base-200">
            <Container>
                <section className="flex flex-col items-center lg:flex-row justify-center gap-12 lg:gap-20 px-4">
                    {/* Left Section */}
                    <div className="flex-1 text-center lg:text-right max-w-md">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            تماس با ما
                        </h1>
                        <p className="text-lg leading-relaxed text-base-content/80">
                            لطفاً فرم را پر کنید تا در اسرع وقت با شما تماس بگیریم.
                        </p>
                    </div>

                    {/* Right Section (Form) */}
                    <div className="flex-1 w-full max-w-md">
                        <div className="card shadow-xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body gap-4">
                                {error && (
                                    <div className="alert alert-error shadow-sm">
                                        <span>{error}</span>
                                    </div>
                                )}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">نام</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="نام خود را وارد کنید"
                                        className="input input-bordered w-full placeholder:text-sm"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">ایمیل</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="ایمیل خود را وارد کنید"
                                        className="input input-bordered w-full placeholder:text-sm"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">پیام</span>
                                    </label>
                                    <textarea
                                        placeholder="پیام خود را وارد کنید"
                                        className="textarea textarea-bordered h-32 placeholder:text-sm"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary mt-4 w-full text-white"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="loading loading-spinner"></span>
                                    ) : (
                                        "ارسال پیام"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}