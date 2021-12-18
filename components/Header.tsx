import Link from "next/link";
import React from "react";
import { Dropdown } from "./Dropdown";

interface Props {}

export const Header = (props: Props) => {
  /* This example requires Tailwind CSS v2.0+ */
  const navigation = [
    // { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Made At New Woods", href: "/made-at-new-woods" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-green-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex  items-center justify-between border-b border-green-500 lg:border-none">
          <div className="flex items-center flex-1 justify-between">
            <Link href="/">
              <div className="cursor-pointer">
                <span className="sr-only">New Woods Farm</span>
                <span className="font-logo text-white text-5xl">nwf</span>
              </div>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:flex">
              <Dropdown />
              {navigation.map((link) => (
                <Link key={link.name} href={link.href}>
                  <p className="text-base font-medium text-white hover:text-green-50 cursor-pointer">
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href}>
              <p className="text-base font-medium text-white hover:text-green-50 cursor-pointer">
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
