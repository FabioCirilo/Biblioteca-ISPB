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
      <div className="max-w-7xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="  py-4">
          <h1 className="text-xl font-bold text-gray-900">Biblioteca ISPB</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/books" className="text-gray-600 hover:text-gray-900">
                Livros
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Link href="/register" className="text-gray-600 hover:text-gray-900">
            Registrar
          </Link>
        </div>
      </div>
    </header>
  );
}
