import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white selection:bg-primary selection:text-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2787&auto=format&fit=crop" 
            alt="Stationery flat lay" 
            className="w-full h-full object-cover grayscale opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-20 pb-32">
          <div className="mb-4 inline-block bg-black text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
            Since 2010 • Ukkadam, Cbe
          </div>
          
          <h1 className="text-[4rem] sm:text-[6rem] lg:text-[10rem] font-display font-black text-black leading-[0.85] tracking-tighter uppercase mb-8 max-w-[1200px]">
            Stationery,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">Redefined.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl font-sans text-gray-800 max-w-2xl mb-12 font-medium leading-relaxed">
            Premium school and office supplies, fancy items, and bespoke gifts tailored for you. Incredible variety at below MRP pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/products" 
              className="group flex items-center justify-center gap-3 bg-primary text-black font-bold uppercase tracking-widest text-sm px-10 py-6 hover:bg-black hover:text-white transition-all duration-300"
            >
              <ShoppingBag size={20} className="group-hover:-translate-y-1 transition-transform" />
              Explore Catalog
            </Link>
            <a 
              href="https://wa.me/9107094333543" 
              className="flex items-center justify-center bg-transparent border-2 border-black text-black font-bold uppercase tracking-widest text-sm px-10 py-6 hover:bg-black hover:text-white transition-all duration-300"
            >
              Request Custom Item
            </a>
          </div>
        </div>
      </section>

      {/* Heavy Typography Banner */}
      <section className="bg-black text-white py-8 overflow-hidden border-y-8 border-primary">
         <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-90">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mx-8">
               STATIONERY • FANCY ITEMS • SCHOOL SUPPLIES • MOBILE RECHARGE • 
            </h2>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mx-8">
               STATIONERY • FANCY ITEMS • SCHOOL SUPPLIES • MOBILE RECHARGE • 
            </h2>
         </div>
      </section>

      {/* Category Section (Stark Grid) */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <h2 className="text-6xl md:text-8xl font-display font-black text-black tracking-tighter uppercase leading-[0.9]">
              Shop By<br/>Category
            </h2>
            <Link to="/products" className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-primary hover:border-primary transition-colors">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "School Gear",
                img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000",
              },
              {
                title: "Office Essentials",
                img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=2000",
              },
              {
                title: "Fancy & Gifts",
                img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1740&auto=format&fit=crop",
              },
              {
                title: "Stationery",
                img: "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?auto=format&fit=crop&q=80&w=2000",
              }
            ].map((cat, i) => (
              <Link to="/products" key={i} className="group relative block overflow-hidden bg-gray-100 aspect-[4/3]">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-end p-8 sm:p-12">
                  <h3 className="text-4xl sm:text-5xl font-display font-black text-white uppercase tracking-tighter mix-blend-difference">
                    {cat.title}
                  </h3>
                </div>
                {/* Minimalist overlay block */}
                <div className="absolute top-8 right-8 bg-primary w-12 h-12 flex items-center justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-black font-bold uppercase text-xl">+</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Huge Image Break */}
      <section className="w-full h-[60vh] md:h-[80vh] bg-black relative">
         <img src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=2684&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
         <div className="absolute inset-0 flex items-center justify-center px-6">
            <h2 className="text-primary text-5xl md:text-8xl lg:text-[9rem] font-display font-black uppercase tracking-tighter text-center leading-[0.85] drop-shadow-2xl">
               Unmatched<br className="hidden md:block" /> Variety.
            </h2>
         </div>
      </section>

      {/* Features Outline */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 border-t-2 border-black pt-16">
          <div>
            <div className="text-5xl font-display font-black text-primary mb-6">01</div>
            <h3 className="text-2xl font-black uppercase text-black mb-4 tracking-tight">Below MRP</h3>
            <p className="text-gray-600 font-medium">Affordability without compromise. We keep margins low to ensure you get the absolute best price in Coimbatore.</p>
          </div>
          <div>
             <div className="text-5xl font-display font-black text-primary mb-6">02</div>
            <h3 className="text-2xl font-black uppercase text-black mb-4 tracking-tight">Custom Orders</h3>
            <p className="text-gray-600 font-medium">Can't find it? We source rare stationery, specific books, and bulk supplies. Requested today, delivered in days.</p>
          </div>
          <div>
             <div className="text-5xl font-display font-black text-primary mb-6">03</div>
            <h3 className="text-2xl font-black uppercase text-black mb-4 tracking-tight">16+ Yrs Legacy</h3>
            <p className="text-gray-600 font-medium">A trusted local establishment since 2010. Proven reliability and massive inventory standing the test of time.</p>
          </div>
        </div>
      </section>
      
      {/* Massive CTA Section */}
      <section className="bg-primary py-32 px-6">
         <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-[3rem] sm:text-[6rem] lg:text-[8rem] font-display font-black uppercase text-black leading-[0.85] tracking-tighter mb-12">
               Ready to upgrade your gear?
            </h2>
            <Link to="/products" className="inline-block bg-black text-white font-bold text-lg uppercase tracking-widest px-14 py-6 hover:bg-white hover:text-black transition-colors border-2 border-black">
               View Full Inventory
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Home;
