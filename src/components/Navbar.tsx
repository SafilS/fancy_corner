import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'CUSTOM ORDER', path: '/custom-order' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-secondary/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-secondary text-primary p-2 group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
              <ShoppingBag size={24} strokeWidth={2.5} />
            </div>
            <span className="font-display font-black text-3xl tracking-tighter text-secondary uppercase">
              FANCY<span className="text-primary ml-0.5">CORNER</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10 text-[13px] uppercase tracking-[0.15em] font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 transition-colors duration-300 hover:text-black ${
                  isActive(link.path) ? 'text-black' : 'text-gray-400'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-black text-white px-8 py-3.5 tracking-widest text-xs uppercase hover:bg-primary hover:text-black transition-all duration-300 ml-4 font-bold"
            >
              Call Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-primary transition-colors focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full h-screen bg-white z-40">
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-display font-black uppercase tracking-tighter transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-black hover:text-gray-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 w-full">
               <Link
                 to="/contact"
                 onClick={() => setIsOpen(false)}
                 className="block w-full text-center bg-black text-white px-6 py-5 text-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors"
               >
                 Call Now
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
