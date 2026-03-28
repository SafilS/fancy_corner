const Contact = () => {
   return (
     <div className="bg-white min-h-screen">
       {/* Giant Header */}
       <section className="pt-32 pb-24 border-b-8 border-black">
         <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
           <h1 className="text-[5rem] md:text-[8rem] font-display font-black text-black tracking-tighter uppercase leading-[0.85] mb-8">
             INITIATE <br/> <span className="text-primary">CONTACT.</span>
           </h1>
           <p className="text-2xl font-medium tracking-tight text-gray-500 max-w-2xl border-l-4 border-primary pl-6">
             Communicate directly for bulk orders, custom sourcing inquiries, or inventory checks.
           </p>
         </div>
       </section>
 
       <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-32">
         <div className="grid lg:grid-cols-2 gap-20 xl:gap-32">
           
           {/* Brutalist Address Block */}
           <div className="space-y-16">
             
             <div>
               <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Location Data</h4>
               <p className="text-5xl font-display font-black tracking-tighter uppercase leading-[0.9] text-black">
                 Bilal Estate Main Road,<br />
                 South Ukkadam,<br />
                 Coimbatore 641023
               </p>
             </div>
 
             <div>
               <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Communications</h4>
               <a href="tel:07094333543" className="block text-5xl font-display font-black tracking-tighter uppercase text-primary hover:text-black transition-colors">
                 07094 • 333 • 543
               </a>
               <a href="mailto:info@fancycorner.in" className="block text-3xl font-display font-black tracking-tighter uppercase mt-4 text-black hover:opacity-50 transition-opacity">
                 info@fancycorner.in
               </a>
             </div>
 
             <div>
               <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Operating Cycle</h4>
               <div className="flex flex-col gap-2 border-l-4 border-black pl-6">
                 <span className="text-2xl font-black uppercase text-gray-800">Monday — Sunday</span>
                 <span className="text-4xl font-black uppercase text-black tracking-tight">10:00 — 22:30</span>
               </div>
             </div>
 
           </div>
 
           {/* Minimalist Form */}
           <div>
             <h2 className="text-3xl font-black uppercase tracking-tight text-black mb-12 border-b-2 border-black pb-4">
               Direct Message
             </h2>
             
             <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Identification</label>
                 <input 
                   type="text" 
                   id="name" 
                   className="w-full bg-transparent border-b-4 border-black px-0 py-4 text-2xl font-bold text-black focus:outline-none focus:border-primary placeholder:text-gray-300 transition-colors"
                   placeholder="YOUR NAME"
                 />
               </div>
               
               <div>
                 <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Telecom Number</label>
                 <input 
                   type="tel" 
                   id="phone" 
                   className="w-full bg-transparent border-b-4 border-black px-0 py-4 text-2xl font-bold text-black focus:outline-none focus:border-primary placeholder:text-gray-300 transition-colors"
                   placeholder="10 DIGITS"
                 />
               </div>
               
               <div>
                 <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Transmission</label>
                 <textarea 
                   id="message" 
                   rows={3}
                   className="w-full bg-transparent border-b-4 border-black px-0 py-4 text-2xl font-bold text-black focus:outline-none focus:border-primary placeholder:text-gray-300 transition-colors resize-none"
                   placeholder="STATE YOUR INQUIRY"
                 ></textarea>
               </div>
               
               <button 
                 type="submit" 
                 className="w-full bg-black text-white hover:bg-primary hover:text-black font-bold uppercase tracking-widest text-lg px-8 py-6 transition-colors border-2 border-black"
               >
                 Transmit
               </button>
             </form>
           </div>
 
         </div>
       </section>
     </div>
   );
 };
 
 export default Contact;
