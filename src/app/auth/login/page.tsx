"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

import Container from "@/src/components/Container";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    signIn("credentials", {
      email: email as string,
      password,
      // callbackUrl: "/dashboard",
      redirectTo: "/dashboard",
    });
  };

  return (
    <main>
      <Container>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-right">
              <h1 className="text-5xl font-bold">ورود به سیستم</h1>
              <p className="py-6 lg:w-3/4 lg:leading-relaxed">
                برای ورود ایمیل و رمزعبور خود را وارد کنید و درصورت با خطا مواجه
                شدن با پشتیبان در تماس باشید.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ایمیل</span>
                  </label>
                  <input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">رمز عبور</span>
                  </label>
                  <input
                    type="password"
                    placeholder="رمز عبور خود را وارد کنید"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      رمز عبور خود را فراموش کرده‌اید؟
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">ورود</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
