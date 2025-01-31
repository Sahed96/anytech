import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../../public/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-md sticky top-0 left-0 w-full transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="w-36">
            <img src={logo} alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-500 hover:underline">
              Solutions
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Services
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              About Us
            </a>
          </div>

          {/* Language & Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 border px-3 py-1 rounded-lg text-blue-500">
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
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600">
              Contact Us
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
