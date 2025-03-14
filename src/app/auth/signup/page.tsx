"use client";
import { useState } from "react";

import Container from "@/src/components/Container";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        // Basic client-side validation
        if (password !== repeatedPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            // Replace this with your actual signup API call
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, username, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Something went wrong");
            } else {
                window.location.href = "/dashboard"; // Redirect on success
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <Container>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-right">
                            <h1 className="text-5xl font-bold mt-5 lg:mt-0 mb-4 leading-tight">ایجاد حساب کاربری</h1>
                            <p className="py-6 lg:w-3/4 lg:leading-relaxed">
                                با ایجاد حساب کاربری میتوانید از تمامی امکانات <span className="font-bold text-primary">کتابان</span> استفاده کنید.
                                آیا قبلا حساب کاربری دارید؟ لطفا وارد حساب کاربری خود شوید.
                            </p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleSubmit}>
                                {error && (
                                    <div className="alert alert-error">
                                        <span>{error}</span>
                                    </div>
                                )}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ایمیل</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="ایمیل خود را وارد کنید"
                                        className="input input-bordered placeholder:text-sm"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">نام کاربری</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="یک نام کاربری انتخاب کنید"
                                        className="input input-bordered placeholder:text-sm"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">رمز عبور</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="یک رمز عبور انتخاب کنید"
                                        className="input input-bordered placeholder:text-sm"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">تایید رمز عبور</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="تایید رمز عبور را وارد کنید"
                                        className="input input-bordered placeholder:text-sm"
                                        value={repeatedPassword}
                                        onChange={(e) => setRepeatedPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        className="btn btn-primary text-white"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span className="loading loading-spinner"></span>
                                        ) : (
                                            "ایجاد حساب کاربری"
                                        )}
                                    </button>
                                </div>
                                <div className="text-center mt-4">
                                    <p className="text-sm">
                                        قبلا حساب کاربری دارید؟{" "}
                                        <a href="/auth/login" className="link link-primary">
                                            ورود به حساب کاربری
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
