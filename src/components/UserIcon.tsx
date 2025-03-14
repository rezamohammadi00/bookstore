"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { UserIcon as Icon } from "@heroicons/react/24/outline";

const UserIcon = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end ">
      <div tabIndex={0} role="button" className="">
        <div className="btn btn-circle border-primary hover:text-gray-700">
          <Icon className="size-6" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <Link
            href="/dashboard/profile"
            className="hidden lg:block"
            onClick={(e) => {
              // Close mobile menu after navigation
              e.stopPropagation();
              const dropdown = document.activeElement as HTMLElement;
              dropdown?.blur();
            }}
          >
            داشبورد
          </Link>
        </li>
        <li>
          <Link
            className="lg:hidden"
            href="/dashboard/profile"
            onClick={(e) => {
              // Close mobile menu after navigation
              e.stopPropagation();
              const dropdown = document.activeElement as HTMLElement;
              dropdown?.blur();
            }}
          >
            پروفایل
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/orders"
            className="lg:hidden"
            onClick={(e) => {
              // Close mobile menu after navigation
              e.stopPropagation();
              const dropdown = document.activeElement as HTMLElement;
              dropdown?.blur();
            }}
          >
            لیست خرید‌ها
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="text-red-600"
            onClick={() =>
              signOut({
                redirectTo: "/",
              })
            }
          >
            خروج
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserIcon;
