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
    <nav className="hidden md:flex flex-1 ml-12">
      {/* Desktop Navigation with hover effect */}
      <ul
        className="relative flex items-center gap-2 rounded-full border-2 border-[#1FB8BF] bg-black px-2 py-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        {navLinks.map((link) => (
          <Tab key={link.name} href={link.href} setPosition={setPosition}>
            {link.name}
          </Tab>
        ))}
        <Cursor position={position} />
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
        className="block px-6 py-2 text-sm uppercase text-white hover:text-white no-underline"
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
      className="absolute z-0 h-9 rounded-full bg-[#1FB8BF]"
    />
  );
};

export default NavHeader; 