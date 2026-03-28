import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20 border-b border-white/20 pb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group inline-flex mb-8">
              <div className="bg-primary text-black p-2 transition-transform duration-300 group-hover:rotate-12">
                <ShoppingBag size={32} strokeWidth={2.5} />
              </div>
              <span className="font-display font-black text-4xl tracking-tighter uppercase">
                FANCY<span className="text-primary ml-1">CORNER</span>
              </span>
            </Link>
            <p className="text-gray-400 font-medium text-lg max-w-sm leading-relaxed">
              Premium stationery, custom orders, and unmatched variety. Redefining retail at the heart of Coimbatore since 2010.
            </p>
          </div>

          {/* Links & Details (Stripped back aesthetic) */}
          <div>
            <h3 className="text-xs text-gray-500 font-bold tracking-[0.2em] uppercase mb-8">Navigation</h3>
            <ul className="space-y-4 font-bold uppercase tracking-widest text-sm text-white flex flex-col items-start">
              <li><Link to="/" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">Products</Link></li>
              <li><Link to="/custom-order" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">Custom Order</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs text-gray-500 font-bold tracking-[0.2em] uppercase mb-8">Contact & Location</h3>
            <ul className="space-y-4 text-gray-300 font-medium">
              <li className="font-sans">
                Bilal Estate Main Road,<br />South Ukkadam,<br />Coimbatore 641023
              </li>
              <li>
                <a href="tel:07094333543" className="text-xl font-bold text-primary hover:text-white transition-colors">07094333543</a>
              </li>
              <li className="text-sm font-bold tracking-widest uppercase">
                10:00 AM – 10:30 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-gray-600 text-xs font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Fancy Corner.</p>
          <p className="mt-4 md:mt-0 text-gray-500">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
