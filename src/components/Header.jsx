import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("bright");
    else setTheme("light");
  };
  const getThemeIcon = () => {
    if (theme === "light") return <FiMoon size={20} />;   
    if (theme === "dark") return <FiSun size={20} />;   
    return <span className="font-bold text-yellow-500">☀</span>; 
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all 
        ${theme === "light" ? "bg-white" : theme === "dark" ? "bg-gray-900" : "bg-yellow-50"} 
        ${isScrolled ? "shadow-lg" : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 md:px-8">
        <Link
          to="/"
          className={`text-2xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          ReactBlog
        </Link>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className={`transition-colors ${
              theme === "dark"
                ? "text-gray-200 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`transition-colors ${
              theme === "dark"
                ? "text-gray-200 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            Blog
          </Link>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors 
              ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            aria-label="Toggle Theme"
          >
            {getThemeIcon()}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle Theme"
          >
            {getThemeIcon()}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      <nav
        className={`md:hidden px-4 pb-4 space-y-4 transition-all 
          ${theme === "dark" ? "bg-gray-900" : theme === "bright" ? "bg-yellow-50" : "bg-white"} 
          ${
            menuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <Link
          to="/"
          onClick={handleLinkClick}
          className={`block transition-colors ${
            theme === "dark"
              ? "text-gray-200 hover:text-blue-400"
              : "text-gray-700 hover:text-blue-500"
          }`}
        >
          Home
        </Link>
        <Link
          to="/blog"
          onClick={handleLinkClick}
          className={`block transition-colors ${
            theme === "dark"
              ? "text-gray-200 hover:text-blue-400"
              : "text-gray-700 hover:text-blue-500"
          }`}
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}
