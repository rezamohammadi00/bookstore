"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={pathname === href ? "border-b border-primary" : ""}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
