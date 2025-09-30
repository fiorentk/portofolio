import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import cvFile from "../assets/Fiorentika-Devasha-Ramadhina-CV-BE.pdf";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects/Study Case", path: "/projects" },
    { name: "Skills and Course Certificates", path: "/skillsandcourses" },
    { name: "Download Full CV", path: cvFile, download: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 h-16 shadow-md flex items-center justify-between px-4 bg-white backdrop-blur-md">
        {/* Burger button */}
        <div
          tabIndex={0}
          role="button"
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-between items-center cursor-pointer">
            <span
              className={`block h-0.5 w-full bg-sky-500 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-sky-500 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-sky-500 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </div>

        {/* Logo */}
        <div>
          <Link to="/" className="hover:text-sky-600 font-bold text-lg">
            Fiorentika's Portfolio
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-6">
            {menuItems.map((item, idx) => (
              <li key={idx} className="group relative">
                {item.download ? (
                  <a
                    href={item.path}
                    download
                    className={`relative transition-colors ${
                      isActive(item.path)
                        ? "text-sky-600 font-semibold"
                        : "text-gray-800 hover:text-sky-600"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full ${
                        isActive(item.path) ? "w-full" : ""
                      }`}
                    ></span>
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative transition-colors ${
                      isActive(item.path)
                        ? "text-sky-600 font-semibold"
                        : "text-gray-800 hover:text-sky-600"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full ${
                        isActive(item.path) ? "w-full" : ""
                      }`}
                    ></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-20 p-4 space-y-4">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              {item.download ? (
                <a
                  href={item.path}
                  download
                  className={`block transition-colors ${
                    isActive(item.path)
                      ? "text-sky-600 font-semibold"
                      : "text-gray-800 hover:text-sky-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.path}
                  className={`block transition-colors ${
                    isActive(item.path)
                      ? "text-sky-600 font-semibold"
                      : "text-gray-800 hover:text-sky-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
