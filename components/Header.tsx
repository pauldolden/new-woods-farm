import Link from "next/link";
import React from "react";
import { Dropdown } from "./Dropdown";
import { FaEtsy } from "react-icons/fa";

interface Props {}

export const Header = (props: Props) => {
  /* This example requires Tailwind CSS v2.0+ */
  const navigation = [
    // { name: "Home", href: "/" },
    {
      name: "News",
      href: "/news",
      description: "The latest goings on from the farm.",
    },
    {
      name: "Made At New Woods",
      href: "/made-at-new-woods",
      description: "Handcrafted goodies of all shapes and sizes.",
    },
    {
      name: "Gallery",
      href: "/gallery",
      description: "Pictures from the farm.",
    },
    {
      name: "Contact",
      href: "/contact",
      description: "Say Hello.",
    },
  ];

  const links = [
    {
      name: "Our Story",
      description: "Who we are and how we came to be.",
      href: "/our-story",
    },
    {
      name: "Our Sheep",
      description: "Come take a look at our award winning Ryelands.",
      href: "/our-sheep",
    },

    {
      name: "Coloured Ryelands",
      description: "More About these wonderful animals.",
      href: "/coloured-ryelands",
    },
    {
      name: "Show Results",
      description: "Some of the results from our sheep at shows across the UK.",
      href: "/show-results",
    },
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
            <div className="flex flex-row items-center">
              <div className="hidden ml-10 space-x-8 md:flex">
                <Dropdown data={links} />
                {navigation.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <p className="text-sm font-medium text-white hover:text-green-50 cursor-pointer">
                      {link.name}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="bg-[#f26422] w-10 h-10 ml-20 cursor-pointer flex items-center justify-center rounded-full">
                <FaEtsy className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-1 flex-wrap justify-center space-x-6 md:hidden">
          <Dropdown data={[...navigation, ...links]} />
        </div>
      </nav>
    </header>
  );
};
