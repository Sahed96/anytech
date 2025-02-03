import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import logo from '../../public/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      setIsTransparent(window.scrollY < 100); // Adjust transparency based on scroll position
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-white text-black shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="w-36 ">
            <img className="bg-white p-2.5 rounded-xl" src={logo} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-16">
            <a href="#" className="text-xl hover:underline">
              Solutions
            </a>
            <a href="#" className="text-xl hover:underline">
              Services
            </a>
            <a href="#" className="text-xl hover:underline">
              About Us
            </a>
            <a>
              <button className="flex items-center space-x-1 border px-3 py-1 rounded-lg">
                <Globe size={16} />
                <span className="flex items-center space-x-1">
                  EN{' '}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </span>
              </button>
            </a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className={`${
                isTransparent
                  ? 'text-white bg-transparent border-2 border-white outline-2'
                  : 'text-black bg-orange-500'
              } text-white px-6 py-2 rounded-lg text-xl font-semibold shadow-md flex items-center  space-x-1`}
            >
              Contact Us
              <div>
                <ChevronRight />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 text-white p-4 space-y-4">
          <a href="#" className="block">
            Solutions
          </a>
          <a href="#" className="block">
            Services
          </a>
          <a href="#" className="block">
            About Us
          </a>
          <div className="flex items-center space-x-2 border px-3 py-1 rounded-lg">
            <Globe size={16} />
            <span>ENGLISH</span>
          </div>
          <button className="w-full bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
