"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Home, Info, Package, PlusCircle, ListChecks } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname(); 

  // Navigation Links with icons
  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5 mr-2" /> },
    { name: "About", href: "/about", icon: <Info className="w-5 h-5 mr-2" /> },
    { name: "Products", href: "/products", icon: <Package className="w-5 h-5 mr-2" /> },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-pink-600 cursor-pointer">PawMart</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-bold items-center text-lg ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-3 py-2 rounded-md hover:bg-purple-100 transition ${
                  pathname === link.href ? "bg-purple-100 text-purple-700 font-semibold" : "text-gray-700"
                }`}
              >
                {link.icon} {link.name}
              </Link>
            ))}

            {/* Conditional Add / Manage Product Links */}
            <SignedIn>
              <Link
                href="/add-product"
                className={`flex items-center px-3 py-2 rounded-md hover:bg-purple-100 transition ${
                  pathname === "/add-product" ? "bg-purple-100 text-purple-700 font-semibold" : "text-gray-700"
                }`}
              >
                <PlusCircle className="w-5 h-5 mr-2" /> Add Product
              </Link>
              <Link
                href="/manage-product"
                className={`flex items-center px-3 py-2 rounded-md hover:bg-purple-100 transition ${
                  pathname === "/manage-product" ? "bg-purple-100 text-purple-700 font-semibold" : "text-gray-700"
                }`}
              >
                <ListChecks className="w-5 h-5 mr-2" /> Manage Product
              </Link>
            </SignedIn>
          </div>

          {/* Right Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                  Login
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-4 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-500 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenu(!mobileMenu)}>
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
                  d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden px-4 pt-4 pb-3 bg-white shadow-md space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-3 py-2 rounded-md hover:bg-purple-100 transition ${
                pathname === link.href ? "bg-purple-100 text-purple-700 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setMobileMenu(false)}
            >
              {link.icon} {link.name}
            </Link>
          ))}

          {/* Conditional Add / Manage Product Links */}
          <SignedIn>
            <Link
              href="/add-product"
              className={`flex items-center px-3 py-2 rounded-md hover:bg-purple-100 transition ${
                pathname === "/add-product" ? "bg-purple-100 text-purple-700 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setMobileMenu(false)}
            >
              <PlusCircle className="w-5 h-5 mr-2" /> Add Product
            </Link>
            <Link
              href="/manage-product"
              className={`flex items-center px-3 py-2 rounded-md hover:bg-purple-100 transition ${
                pathname === "/manage-product" ? "bg-purple-100 text-purple-700 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setMobileMenu(false)}
            >
              <ListChecks className="w-5 h-5 mr-2" /> Manage Product
            </Link>
          </SignedIn>

          {/* Auth Buttons */}
          <div className="mt-2 border-t border-gray-200 pt-2 space-y-2">
            <SignedOut>
              <SignInButton>
                <button className="w-full px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                  Login
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="w-full px-3 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-500 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
