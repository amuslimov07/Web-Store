"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Catalog", href: "/catalog" },
  ];
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`cursor-pointer transition-all duration-200 ${isActive ? "-translate-y-1 border-b-2 border-[#9A3E29] font-bold" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
    // <div className="flex flex-row gap-[32px] ">
    //   <button className="navbar__btn cursor-pointer">New</button>
    //   <button className="navbar__btn cursor-pointer">Men</button>
    //   <button className="navbar__btn cursor-pointer">Women</button>
    //   <button className="navbar__btn cursor-pointer">Accessories</button>
    //   <button className="navbar__btn cursor-pointer">Sale</button>
    // </div>
  );
}
