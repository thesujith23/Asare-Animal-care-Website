import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${sticky ? 'bg-red-600 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="src/assets/logoc.png" 
              alt="Logo" 
              className="h-14 w-17 transform hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                to="/"
                spy={true}
                smooth={true}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
              >
                Home
              </Link>
              <Link 
                to="about"
                spy={true}
                smooth={true}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
              >
                About
              </Link>
              <Link 
                to="contact"
                spy={true}
                smooth={true}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="contact"
                spy={true}
                smooth={true}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
              >
                Contact
              </Link>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95">
                Donate
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-600">
          <Link
            to="home"
            spy={true}
            smooth={true}
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <button className="w-full text-left bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-all duration-300">
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

