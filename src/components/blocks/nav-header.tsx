"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "GET QUOTE", href: "/quote" },
];

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type SetPositionType = React.Dispatch<React.SetStateAction<Position>>;

function NavHeader() {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <nav className="flex flex-1 ml-4 md:ml-8">
      {/* Desktop Navigation with hover effect */}
      <ul
        className="hidden md:flex relative w-fit rounded-full border-2 border-[#1FB8BF] bg-black p-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        {navLinks.map((link) => (
          <Tab key={link.name} href={link.href} setPosition={setPosition}>
            {link.name}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>

      {/* Mobile Navigation - Simple Links */}
      <ul className="md:hidden flex gap-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-white hover:text-[#1FB8BF] transition-colors text-sm uppercase"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const Tab = ({
  children,
  href,
  setPosition,
}: {
  children: React.ReactNode;
  href: string;
  setPosition: SetPositionType;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10"
    >
      <Link 
        href={href}
        className="block cursor-pointer px-3 py-1.5 text-xs uppercase text-white hover:text-white md:px-5 md:py-3 md:text-base no-underline"
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-[#1FB8BF] md:h-12"
    />
  );
};

export default NavHeader; 