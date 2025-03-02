import Container from "@/src/components/Container";
import { WindowIcon, QueueListIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="flex">
        <aside className="min-h-screen w-[300px] border-t border-gray-300 mr-2 hidden lg:block">
          <ul className="flex flex-col">
            <li className="py-2 flex gap-1 cursor-pointer hover:opacity-75">
              <WindowIcon className="size-6 " />
              داشبورد
            </li>
            <Link href="/dashboard/orders">
              <li className="py-2 flex gap-1   border-t border-gray-300 hover:opacity-75 cursor-pointer">
                <QueueListIcon className="size-6 " />
                لیست خرید‌ها
              </li>
            </Link>
          </ul>
        </aside>
        {children}
      </div>
    </Container>
  );
}
