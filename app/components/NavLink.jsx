import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 text-slate-800 hover:text-black hover:scale-110"
    >
      {title}
    </Link>
  );
};

export default NavLink;
