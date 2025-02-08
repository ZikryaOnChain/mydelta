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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 ml-8">
        <ul
          className="relative flex w-fit rounded-full border-2 border-[#1FB8BF] bg-black p-1"
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

      {/* Mobile Navigation */}
      <div className="md:hidden flex-1">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-4 p-2 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-t-2 border-[#1FB8BF] mt-2">
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#1FB8BF] transition-colors block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
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