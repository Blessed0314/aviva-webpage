"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  children,
  className = "",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative py-2 px-1 text-sm font-medium tracking-wide transition-colors duration-300 outline-none group ${
        isActive ? "text-brand-gold" : "text-gray-300 hover:text-white"
      } ${className}`}
    >
      <span>{children}</span>
      <span
        className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full transition-transform duration-300 origin-left ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}
