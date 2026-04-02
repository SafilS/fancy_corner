import { useState } from 'react';

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

const normalizePhone = (raw: string): string => {
  let digits = raw.replace(/[\s\-().]/g, '');
  if (digits.startsWith('+91')) digits = digits.slice(3);
  else if (digits.startsWith('91') && digits.length > 10) digits = digits.slice(2);
  else if (digits.startsWith('0') && digits.length === 11) digits = digits.slice(1);
  return digits;
};

const CustomOrder = () => {
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [product, setProduct] = useState('');
   const [submitted, setSubmitted] = useState(false);
   const [phoneError, setPhoneError] = useState('');

   const validatePhone = (value: string): boolean => {
     const normalized = normalizePhone(value);
     if (!normalized) {
       setPhoneError('Mobile number is required');
       return false;
     }
     if (!/^\d+$/.test(normalized)) {
       setPhoneError('Enter digits only');
       return false;
     }
     if (normalized.length !== 10) {
       setPhoneError('Must be exactly 10 digits');
       return false;
     }
     if (!INDIAN_MOBILE_REGEX.test(normalized)) {
       setPhoneError('Must start with 6, 7, 8, or 9');
       return false;
     }
     setPhoneError('');
     return true;
   };

   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     if (!name.trim() || !product.trim()) return;
     if (!validatePhone(phone)) return;
     setSubmitted(true);
   };

   const handleReset = () => {
     setName('');
     setPhone('');
     setProduct('');
     setSubmitted(false);
     setPhoneError('');
   };

   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const val = e.target.value.replace(/[^\d+\-() ]/g, '');
     setPhone(val);
     if (phoneError) setPhoneError('');
   };

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
               <div className={`px-3 py-1 font-bold text-xs uppercase tracking-widest ${submitted ? 'bg-green-500 text-white' : 'bg-primary text-black'}`}>
                 {submitted ? 'Sent ✓' : 'Active'}
               </div>
             </div>
             
             {submitted ? (
               <div className="flex flex-col items-center justify-center py-16 text-center animate-[fadeIn_0.5s_ease-out]">
                 <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mb-8 animate-[scaleIn_0.4s_ease-out]">
                   <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <h3 className="text-4xl font-display font-black uppercase tracking-tighter text-black mb-4">
                   Request Executed
                 </h3>
                 <p className="text-xl text-gray-500 font-medium max-w-md mb-4">
                   Your acquisition request has been logged. Our sourcing team will contact you at <span className="font-black text-black">{phone}</span> within 24 hours.
                 </p>
                 <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-10">
                   Operator: {name}
                 </p>
                 <button
                   onClick={handleReset}
                   className="bg-black text-white font-black uppercase tracking-widest text-lg px-10 py-5 hover:bg-primary hover:text-black border-4 border-black transition-all"
                 >
                   Submit Another Request
                 </button>
               </div>
             ) : (
               <form className="space-y-10" onSubmit={handleSubmit}>
                 <div>
                   <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">Operator Name</label>
                   <input 
                     type="text" 
                     id="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required
                     className="w-full bg-white border-2 border-gray-300 px-6 py-5 text-xl font-bold focus:outline-none focus:border-black transition-colors"
                   />
                 </div>
                 
                 <div>
                   <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">COMMS / MOBILE</label>
                   <input 
                     type="tel" 
                     id="phone"
                     value={phone}
                     onChange={handlePhoneChange}
                     required
                     maxLength={15}
                     placeholder="E.g. 9876543210 or +91 9876543210"
                     className={`w-full bg-white border-2 px-6 py-5 text-xl font-bold focus:outline-none transition-colors ${phoneError ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-black'}`}
                   />
                   {phoneError && (
                     <p className="mt-2 text-sm font-bold text-red-500 uppercase tracking-wider">{phoneError}</p>
                   )}
                 </div>
                 
                 <div>
                   <label htmlFor="product" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">Target Asset Specifications</label>
                   <textarea 
                     id="product" 
                     rows={4}
                     value={product}
                     onChange={(e) => setProduct(e.target.value)}
                     required
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
             )}
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
