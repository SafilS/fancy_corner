const CustomOrder = () => {
   return (
     <div className="bg-white min-h-screen">
       {/* Brutalist Hero */}
       <section className="bg-black pt-32 pb-24">
         <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center md:text-left">
           <h1 className="text-[5rem] md:text-[8rem] font-display font-black text-white tracking-tighter uppercase leading-[0.85] mb-8 max-w-5xl">
             ACQUIRE THE <br className="hidden md:block"/> <span className="text-primary">UNAVAILABLE.</span>
           </h1>
           <p className="text-2xl font-medium tracking-tight max-w-2xl text-gray-400 border-l-4 border-primary pl-6">
             Submit a custom acquisition request. We will source specific models, brands, or materials rapidly via our wholesale architecture.
           </p>
         </div>
       </section>
 
       {/* Architecture Grid */}
       <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-32">
         <div className="flex flex-col lg:flex-row gap-20">
           
           {/* Mechanism / Steps */}
           <div className="lg:w-5/12">
             <h2 className="text-5xl font-display font-black tracking-tighter text-black uppercase mb-16">
               The Protocol
             </h2>
             
             <div className="space-y-12">
               <div className="flex gap-8 group">
                 <div className="text-7xl font-black text-gray-200 group-hover:text-primary transition-colors leading-none tracking-tighter">01</div>
                 <div>
                   <h4 className="font-black text-3xl uppercase tracking-tight text-black mb-2">Request</h4>
                   <p className="text-gray-500 font-medium text-lg">Input exact specifications (brand, variant, quantity) into the form.</p>
                 </div>
               </div>
               
               <div className="flex gap-8 group">
                 <div className="text-7xl font-black text-gray-200 group-hover:text-primary transition-colors leading-none tracking-tighter">02</div>
                 <div>
                   <h4 className="font-black text-3xl uppercase tracking-tight text-black mb-2">Source</h4>
                   <p className="text-gray-500 font-medium text-lg">We activate our supplier network to secure the asset below standard retail margins.</p>
                 </div>
               </div>
               
               <div className="flex gap-8 group">
                 <div className="text-7xl font-black text-gray-200 group-hover:text-primary transition-colors leading-none tracking-tighter">03</div>
                 <div>
                   <h4 className="font-black text-3xl uppercase tracking-tight text-black mb-2">Extract</h4>
                   <p className="text-gray-500 font-medium text-lg">Receive notification to collect the asset at our Ukkadam command center.</p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Heavy Form Panel */}
           <div className="lg:w-7/12 bg-gray-50 p-10 sm:p-16 border-4 border-black">
             <div className="flex items-center justify-between mb-12 border-b-4 border-black pb-6">
               <h2 className="text-4xl sm:text-5xl font-display font-black text-black tracking-tighter uppercase">Query Form</h2>
               <div className="bg-primary px-3 py-1 font-bold text-xs uppercase tracking-widest text-black">Active</div>
             </div>
             
             <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">Operator Name</label>
                 <input 
                   type="text" 
                   id="name" 
                   className="w-full bg-white border-2 border-gray-300 px-6 py-5 text-xl font-bold focus:outline-none focus:border-black transition-colors"
                 />
               </div>
               
               <div>
                 <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">COMMS / MOBILE</label>
                 <input 
                   type="tel" 
                   id="phone" 
                   className="w-full bg-white border-2 border-gray-300 px-6 py-5 text-xl font-bold focus:outline-none focus:border-black transition-colors"
                 />
               </div>
               
               <div>
                 <label htmlFor="product" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">Target Asset Specifications</label>
                 <textarea 
                   id="product" 
                   rows={4}
                   className="w-full bg-white border-2 border-gray-300 px-6 py-5 text-xl font-bold focus:outline-none focus:border-black transition-colors resize-none"
                   placeholder="E.g. 50 boxes of Classmate Octane Gel Pen, Blue..."
                 ></textarea>
               </div>
               
               <button 
                 type="submit" 
                 className="w-full bg-primary text-black font-black uppercase tracking-widest text-2xl py-6 hover:bg-black hover:text-primary border-4 border-primary hover:border-black transition-all"
               >
                 Execute Request
               </button>
             </form>
           </div>
         </div>
       </section>
 
       {/* Heavy WhatsApp Band */}
       <section className="bg-[#25D366] py-16 px-6 cursor-pointer hover:bg-[#128C7E] transition-colors border-y-8 border-black">
         <a 
           href="https://wa.me/9107094333543" 
           target="_blank" 
           rel="noopener noreferrer"
           className="block max-w-[1400px] mx-auto text-center"
         >
           <h3 className="text-4xl md:text-6xl font-display font-black text-black tracking-tighter uppercase mb-4">
             Bypass form. Use WhatsApp instead.
           </h3>
           <p className="text-black font-bold uppercase tracking-widest text-sm md:text-lg">Click here to transmit photo references instantly &gt;&gt;</p>
         </a>
       </section>
     </div>
   );
 };
 
 export default CustomOrder;
