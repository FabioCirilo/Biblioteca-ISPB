"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerClass = `w-full bg-white shadow-sm transition duration-1000 ease-linear ${
    isScrolled === null
      ? "relative"
      : isScrolled
      ? "fixed top-0 z-30 shadow-sm"
      : "reative"
  }`;

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold text-gray-900">Biblioteca ISPB</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
