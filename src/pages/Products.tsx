const Products = () => {
   const categories = [
     {
       title: "STATIONERY",
       description: "The foundations of writing, drawing, and boundless creation. Professional grade options available.",
       useCases: "DAILY WRITING • EXAMS • ART ASSIGNMENTS • SKETCHING",
       image: "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?auto=format&fit=crop&q=80&w=2000",
       items: ["Pens & Pencils", "Notebooks & Diaries", "Markers & Highlighters", "Geometry Boxes", "Drawing Materials"]
     },
     {
       title: "SCHOOL GEAR",
       description: "Tactical, durable, and trendy supplies to attack the academic year with confidence.",
       useCases: "BACK-TO-SCHOOL • PROJECTS • DAILY CARRY",
       image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000",
       items: ["Trendy Backpacks", "Water Bottles & Lunch Boxes", "Project Papers", "Crafting Tools", "Files & Folders"]
     },
     {
       title: "OFFICE ESSENTIALS",
       description: "Architect the perfect workspace. Engineered tools for maximum productivity.",
       useCases: "CORPORATE HUB • HOME OFFICE • ADMINISTRATION",
       image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=2000",
       items: ["Staplers & Punchers", "Calculators", "Organizers", "Whiteboards & Planners", "Bill Books & Registers"]
     },
     {
       title: "FANCY & GIFTS",
       description: "Elevated aesthetics. Bespoke items tailored for memorable moments and beautiful living spaces.",
       useCases: "BIRTHDAYS • ANNIVERSARIES • HOME DECOR • EVENTS",
       image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1740&auto=format&fit=crop",
       items: ["Showpieces & Decor", "Mugs & Keychains", "Jewelry Boxes", "Accessories", "Wrapping Elements"]
     },
     {
       title: "MOBILE RECHARGE",
       description: "Instant connectivity. Rapid mobile top-ups alongside your hardware resupply.",
       useCases: "PREPAID RECHARGES • BILL PAYMENTS • DTH",
       image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=2000",
       items: ["Prepaid Mobile", "Postpaid Bill", "DTH Recharge", "Data Packs", "Online Payment Help"]
     }
   ];
 
   return (
     <div className="bg-white min-h-screen">
       {/* Heavy Header */}
       <section className="bg-black pt-32 pb-24 border-b-8 border-primary relative overflow-hidden">
         <div className="absolute top-0 right-0 text-[30rem] font-bold text-white/5 font-display leading-none select-none tracking-tighter">
            CATALOG
         </div>
         <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
           <h1 className="text-6xl md:text-[8rem] font-display font-black mb-8 text-white uppercase tracking-tighter leading-[0.85]">
             The <span className="text-primary">Catalog.</span>
           </h1>
           <p className="text-2xl text-gray-400 max-w-3xl font-medium tracking-tight">
             Explore our precision-curated inventory. Built for students, engineered for professionals.
           </p>
         </div>
       </section>
 
       {/* Stark Grid Catalog */}
       <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-32 space-y-40">
         {categories.map((cat, index) => (
           <div 
             key={cat.title} 
             className={`flex flex-col lg:flex-row gap-16 xl:gap-24 items-center ${
               index % 2 === 1 ? 'lg:flex-row-reverse' : ''
             }`}
           >
             {/* Offset Stark Image */}
             <div className="lg:w-1/2 w-full relative group">
               <div className={`absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 will-change-transform z-0 ${
                  index % 2 === 1 ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'
               }`}></div>
               <img 
                 src={cat.image} 
                 alt={cat.title} 
                 className="relative z-10 w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute top-0 left-0 w-full h-full border-2 border-black z-20 pointer-events-none"></div>
             </div>
 
             {/* Minimalist Content Block */}
             <div className="lg:w-1/2 w-full">
               <div className="text-primary font-black text-2xl mb-4">0{index + 1}</div>
               <h2 className="text-5xl md:text-7xl font-display font-black text-black tracking-tighter uppercase leading-[0.9] mb-8">
                 {cat.title}
               </h2>
               
               <p className="text-gray-600 text-xl md:text-2xl font-medium mb-12 leading-relaxed">
                 {cat.description}
               </p>
               
               <div className="border-t-2 border-black pt-6 mb-12">
                 <h4 className="font-bold text-black text-sm uppercase tracking-[0.2em] mb-4">Built For</h4>
                 <p className="text-primary text-xl font-display font-bold tracking-tight">
                   {cat.useCases}
                 </p>
               </div>
 
               <div>
                 <h4 className="font-bold text-black text-sm uppercase tracking-[0.2em] mb-6">Equipment Profile</h4>
                 <div className="flex flex-wrap gap-3">
                   {cat.items.map(item => (
                     <span 
                       key={item} 
                       className="border border-gray-300 text-black px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-colors"
                     >
                       {item}
                     </span>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         ))}
       </section>
     </div>
   );
 };
 
 export default Products;
