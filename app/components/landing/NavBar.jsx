"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import {
  Bars3Icon,
  XMarkIcon,
  XmarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import MenuOverlay from "./MenuOverLay";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import SearchresultList from "./SearchresultList";

const NavLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const [results, setResults] = useState([]);
  return (
    <nav className="h-16 fixed top-0 left-0 right-0 z-20  bg-opacity-80 bg-navprimaryBG dark:bg-navsecondaryBG dark:opacity-95 rounded-b">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8 px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl  font-semibold">
          <Image
            src="/images/logo.png"
            className="h-12 w-12 rounded-full"
            height={2000}
            width={2000}
          />
        </Link>

        {/* <div className="ml-10 w-50 hidden sm:flex"> */}
          {/* <input
            className="flex w-full h-9 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-200 dark:placeholder:text-slate-300 dark:text-white"
            type="search"
            placeholder="Search"
            width={500}
          ></input>
          <Button className="border border-gray-600 dark:border-white py-2 px-4 rounded focus:outline-none">
            <MagnifyingGlassIcon class="h-6 w-6 text-gray-500 dark:text-white" />
          </Button> */}
        {/* </div> */}

        <div className="mobile-menu flex md:hidden">
          <div className="mr-2 mt-2">
            <ThemeToggle />
          </div>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded mr-2"
            >
              <Bars3Icon className="h-5 w-5 dark:text-slate-200 " />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded mr-2"
            >
              <XMarkIcon className="h-5 w-5  dark:text-slate-200" />
            </button>
          )}
          <div className="mt-2" onClick={handleShowMenu}>
                <button className="flex items-center ">
                  <UserCircleIcon className="h-10 w-10 dark:text-slate-100" />
                </button>
                {showMenu && (
                  <div className="absolute right-2 bg-gradient-to-b from-slate-200 to bg-purple-300 py-2 shadow drop-shadow-md cursor-pointer flex flex-col min-w-[120px] text-center rounded-xl">
                    {
                      <Link
                        href={"/login"}
                        className="whitespace-nowrap cursor-pointer px-3 p-2"
                      >
                        Log IN
                      </Link>
                    }
                    {
                      <Link
                        href={"/signup"}
                        className="whitespace-nowrap cursor-pointer px-3"
                      >
                        Sign UP
                      </Link>
                    }
                  </div>
                )}
              </div>
        </div>

        <div className="menu hidden md:block md:w-auto tranparent" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-2">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <div className="flex flex-1 justify-end">
                <ThemeToggle />
              </div>
            </li>
            <li>
              <div className="" onClick={handleShowMenu}>
                <button className="flex items-center mt-[-6px]">
                  <UserCircleIcon className="h-10 w-10 dark:text-slate-100" />
                </button>
                {showMenu && (
                  <div className="absolute right-2 bg-gradient-to-b from-slate-200 to bg-purple-300 py-2 shadow drop-shadow-md cursor-pointer flex flex-col min-w-[120px] text-center rounded-xl">
                    {
                      <Link
                        href={"/login"}
                        className="whitespace-nowrap cursor-pointer px-3 p-2"
                      >
                        Log IN
                      </Link>
                    }
                    {
                      <Link
                        href={"/signup"}
                        className="whitespace-nowrap cursor-pointer px-3"
                      >
                        Sign UP
                      </Link>
                    }
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
      <div className="pl-2 pr-2">
        <SearchBar setResults={setResults} />
        <SearchresultList results={results} />
      </div>
    </nav>
  );
};

export default Navbar;
