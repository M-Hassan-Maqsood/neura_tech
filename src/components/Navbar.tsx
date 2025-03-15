import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/offer' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
<nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-50 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex-shrink-0">
        <Link to="/">
          <img 
            src="/logo3.svg" 
            alt="NeuraTech Logo" 
            className="h-[110px] max-h-[110px] w-auto"
          />
        </Link>
      </div>
      
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`transition-colors duration-200 px-3 py-2 text-sm font-medium ${
                location.pathname === link.href 
                  ? 'text-primary'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>
  </div>

  <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-lg">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={`block px-3 py-2 text-base font-medium ${
            location.pathname === link.href 
              ? 'text-primary'
              : 'text-secondary hover:text-primary'
          }`}
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
</nav>
  );
};

export default Navbar;