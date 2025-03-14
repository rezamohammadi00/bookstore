"use client"

import { QueueListIcon, UserIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <aside className="min-h-screen w-[300px] mr-2 hidden lg:block bg-base-200 border-l-2 border-white">
            <ul className="flex flex-col p-2">
                <Link href="/dashboard/profile">
                    <li className={`py-2 flex gap-1 cursor-pointer hover:opacity-75 p-2 ${pathname === "/dashboard/profile" && "bg-white rounded"}`}>
                        <UserIcon className="size-6 " />
                        پروفایل
                    </li>
                </Link>
                <Link href="/dashboard/orders">
                    <li className={`py-2 flex gap-1 cursor-pointer hover:opacity-75 p-2 ${pathname === "/dashboard/orders" && "bg-white rounded"}`}>
                        <QueueListIcon className="size-6 " />
                        لیست خرید‌ها
                    </li>
                </Link>
            </ul>
        </aside>
    )
}

export default Sidebar