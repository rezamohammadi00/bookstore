"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import Container from "@/src/components/Container";
import userImage from "@/public/images/user.png";


const ProfilePage = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    bio: "",
    avatar: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch("/api/user/profile");
        if (!response.ok) throw new Error("Failed to fetch profile");
        const data = await response.json();
        setUser({
          email: data.email || "نامشخص",
          username: data.username || "نامشخص",
          bio: data.bio || "بیوگرافی هنوز تنظیم نشده است.",
          avatar: data.avatar || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <main className="w-full min-h-screen bg-base-200">
      <Container>
        <div className="py-16 px-4">
          {/* Profile Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              پروفایل کاربری
            </h1>
            <p className="mt-2 text-lg text-base-content/70">
              اطلاعات خود را مشاهده و مدیریت کنید
            </p>
          </div>

          {/* Profile Card */}
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-start max-w-5xl mx-auto">
            {/* Avatar & Basic Info */}
            <div className="w-full lg:w-1/3 ">
              {loading ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-32 h-32 rounded-full bg-base-300 animate-pulse"></div>
                  <div className="h-6 w-40 bg-base-300 rounded animate-pulse"></div>
                </div>
              ) : (
                <div className="card bg-white shadow-lg p-6 text-center">
                  <figure>
                    <Image
                      src={userImage}
                      alt="آواتار کاربر"
                      className="rounded-full w-32 h-32 object-cover mx-auto"
                    />
                  </figure>
                  <div className="mt-4">
                    <h2 className="text-2xl font-semibold">{user.username}</h2>
                    <p className="text-base-content/70">{user.email}</p>
                  </div>
                  <button className="btn btn-outline btn-sm mt-4">
                    تغییر آواتار
                  </button>
                </div>
              )}
            </div>

            {/* Profile Details */}
            <div className="w-full lg:w-2/3">
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-4">جزئیات پروفایل</h2>
                  {loading ? (
                    <div className="space-y-4">
                      <div className="h-6 bg-base-300 rounded w-3/4 animate-pulse"></div>
                      <div className="h-20 bg-base-300 rounded w-full animate-pulse"></div>
                    </div>
                  ) : (
                    <>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">نام کاربری</span>
                        </label>
                        <input
                          type="text"
                          value={user.username || "رضامحمدی"}
                          className="input input-bordered !bg-white !border-[1px] !border-[hsl(214.27deg 30.07% 31.96% / 20%)]"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">ایمیل</span>
                        </label>
                        <input
                          type="email"
                          value={user.email || "r@gmail.com"}
                          className="input input-bordered !bg-white !border-[1px] !border-[hsl(214.27deg 30.07% 31.96% / 20%)]"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">بیوگرافی</span>
                        </label>
                        <textarea
                          value={user.bio}
                          className="textarea textarea-bordered !bg-white !border-[1px]  !border-[hsl(214.27deg 30.07% 31.96% / 20%)] h-24"
                        />
                      </div>
                      <div className="card-actions justify-end mt-6">
                        <button className="btn btn-primary text-white">
                          ویرایش پروفایل
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ProfilePage;

