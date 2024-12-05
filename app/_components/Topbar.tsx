import Image from "next/image";
import {
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import LOGO from "@/public/images/Logo.png";
import Link from "next/link";

const Topbar = () => {
  return (
    <header className="flex max-w-[1440px] mx-auto mt-9 items-center justify-between px-14">
      <Link href={"/"}>
        <Image src={LOGO} alt="logo" quality={100} placeholder="blur" />
      </Link>
      <input
        type="text"
        className="w-[800px] h-12 bg-lightBg text-[#090937] rounded-lg mx-8 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#6251DD] focus:ring-offset-2"
        placeholder="جستجوی نام کتاب، نویسنده، ژانر ..."
      />
      <div className="flex gap-4 items-center text-[#090937] hidden lg:flex">
        <div className="bg-lightBg text-[#090937] p-3 rounded-md">
          <UserIcon className="size-6 " />
        </div>
        <div className="bg-lightBg text-[#090937] p-3 rounded-md">
          <HeartIcon className="size-6 " />
        </div>
        <div className="bg-lightBg text-[#090937] p-3 rounded-md">
          <ShoppingCartIcon className="size-6 " />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
