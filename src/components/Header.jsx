import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all bg-white dark:bg-gray-900 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          ReactBlog
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Blog
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu & Dark Mode */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-900 dark:text-white"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-4 transition-all ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link
          to="/"
          onClick={handleLinkClick}
          className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/blog"
          onClick={handleLinkClick}
          className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}
