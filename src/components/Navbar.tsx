import Link from "next/link";

import Container from "@/src/components/Container";
import NavLink from "@/src/components/NavLink";
import { auth } from "@/src/lib/auth";
import Image from "next/image";
import CartIcon from "@/src/components/CartIcon";
import UserIcon from "@/src/components/UserIcon";

const links = [
  { title: "خانه", href: "/" },
  { title: "کتاب‌ها", href: "/products" },
  { title: "بلاگ", href: "/blogs" },
  { title: "درباره‌ما", href: "/about" },
];

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="">
      <Container>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links.map((link) => (
                  <NavLink {...link} key={link.href} />
                ))}

                {/* <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>

            <Link href={"/"} className="btn btn-ghost -mr-3 lg:mr-0">
              <Image
                src="/images/sLogo.png"
                alt="logo"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-xl text-primary font-bold -mr-1 mt-1">
                کتابان
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links.map((link) => (
                <NavLink {...link} key={link.href} />
              ))}
              {/* <li>
                <a>Item 1</a>
              </li> */}
              {/* <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>
          <div className="navbar-end">
            {session ? (
              <div className="flex gap-2 items-center">
                <UserIcon />
                <CartIcon />
              </div>
            ) : (
              <div>
                <Link
                  href={"/auth/login"}
                  className="btn btn-primary text-white"
                >
                  ورود
                </Link>{" "}
                <Link
                  href={"/auth/login"}
                  className="btn btn-primary btn-outline"
                >
                  ثبت‌نام
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
