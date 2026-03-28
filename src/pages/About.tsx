import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Brutalist Header */}
      <section className="bg-white text-black py-32 border-b-8 border-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-[5rem] md:text-[8rem] font-display font-black leading-[0.85] tracking-tighter uppercase mb-6 max-w-4xl">
            NOT JUST <br/>A STORE.
          </h1>
          <p className="text-2xl md:text-3xl font-medium tracking-tight max-w-2xl text-gray-500 border-l-4 border-primary pl-6 py-2">
            An institution of affordability and premium stationery serving Ukkadam since 2010.
          </p>
        </div>
      </section>

      {/* Origin Story Grid */}
      <section className="py-32 border-b-2 border-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-20 xl:gap-32">
          
          <div className="lg:w-1/2">
            <div className="relative border-4 border-black group overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2787&auto=format&fit=crop" 
                 alt="Stationery tools" 
                 className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
               />
               <div className="absolute bottom-6 left-6 bg-primary text-black font-bold uppercase tracking-widest px-6 py-2">
                  EST. 2010
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-[0.9] text-black mb-10">
              The Protocol
            </h2>
            <div className="space-y-8 text-black text-xl mb-12">
              <p>
                Established by <span className="font-bold underline decoration-primary decoration-4">Rahamatulla</span>, Fancy Corner originated with a binary directive: make premium stationery and fancy items accessible without the hyper-inflated retail markup.
              </p>
              <p>
                Operating out of Bilal Estate Main Road in Coimbatore, our growth trajectory is driven by extreme customer allegiance. We stock heavily, source rapidly, and sell below MRP.
              </p>
              <p>
                Whether you're equipping an entire office or grabbing a single gel pen, the same protocol applies. No compromises on quality, absolute efficiency in service.
              </p>
            </div>

            {/* Stark Stats Box */}
            <div className="flex gap-12 pt-8 border-t-2 border-black">
               <div>
                  <div className="text-5xl md:text-6xl font-black text-primary tracking-tighter mb-2">16+</div>
                  <div className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500">Years Active</div>
               </div>
               <div>
                  <div className="text-5xl md:text-6xl font-black text-primary tracking-tighter mb-2">10K</div>
                  <div className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500">Clients</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Mission Banner */}
      <section className="bg-black py-40 px-6 overflow-hidden relative">
         <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <h2 className="text-primary font-bold tracking-[0.3em] uppercase mb-12">Directive</h2>
            <h3 className="text-white text-4xl sm:text-6xl lg:text-[5rem] font-display font-black tracking-tighter uppercase leading-[0.9]">
               "Provide unmatched, affordable variety. If it exists, we will source it."
            </h3>
         </div>
      </section>
      
      {/* Heavy CTA */}
      <section className="py-32 bg-primary flex justify-center text-center">
         <div>
            <h3 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase text-black mb-12">Examine<br/>Our Inventory</h3>
            <Link 
              to="/products"
              className="inline-block bg-black text-white px-16 py-6 font-bold uppercase tracking-widest text-lg hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-all duration-300"
            >
              Access Catalog
            </Link>
         </div>
      </section>
    </div>
  );
};

export default About;
