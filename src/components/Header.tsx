"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="text-3xl font-extrabold">
          <Link href="/">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              GEGA & MEGA
            </span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link
                href="/"
                className="text-lg hover:text-secondary-foreground transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-lg hover:text-secondary-foreground transition-colors duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-lg hover:text-secondary-foreground transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg hover:text-secondary-foreground transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;