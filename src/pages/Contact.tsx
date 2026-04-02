import { useState } from 'react';

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

const normalizePhone = (raw: string): string => {
  let digits = raw.replace(/[\s\-().]/g, '');
  if (digits.startsWith('+91')) digits = digits.slice(3);
  else if (digits.startsWith('91') && digits.length > 10) digits = digits.slice(2);
  else if (digits.startsWith('0') && digits.length === 11) digits = digits.slice(1);
  return digits;
};

const Contact = () => {
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');
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
     if (!name.trim() || !message.trim()) return;
     if (!validatePhone(phone)) return;
     setSubmitted(true);
   };

   const handleReset = () => {
     setName('');
     setPhone('');
     setMessage('');
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
 
           {/* Form / Success */}
           <div>
             <h2 className="text-3xl font-black uppercase tracking-tight text-black mb-12 border-b-2 border-black pb-4">
               Direct Message
             </h2>
             
             {submitted ? (
               <div className="flex flex-col items-center justify-center py-16 text-center animate-[fadeIn_0.5s_ease-out]">
                 <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mb-8 animate-[scaleIn_0.4s_ease-out]">
                   <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <h3 className="text-4xl font-display font-black uppercase tracking-tighter text-black mb-4">
                   Message Transmitted
                 </h3>
                 <p className="text-xl text-gray-500 font-medium max-w-md mb-4">
                   Your message has been received. We'll reach out to you at <span className="font-black text-black">{phone}</span> shortly.
                 </p>
                 <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-10">
                   From: {name}
                 </p>
                 <button
                   onClick={handleReset}
                   className="bg-black text-white font-bold uppercase tracking-widest text-lg px-10 py-5 hover:bg-primary hover:text-black border-2 border-black transition-all"
                 >
                   Send Another Message
                 </button>
               </div>
             ) : (
               <form className="space-y-8" onSubmit={handleSubmit}>
                 <div>
                   <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Identification</label>
                   <input 
                     type="text" 
                     id="contact-name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required
                     className="w-full bg-transparent border-b-4 border-black px-0 py-4 text-2xl font-bold text-black focus:outline-none focus:border-primary placeholder:text-gray-300 transition-colors"
                     placeholder="YOUR NAME"
                   />
                 </div>
                 
                 <div>
                   <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Telecom Number</label>
                   <input 
                     type="tel" 
                     id="contact-phone"
                     value={phone}
                     onChange={handlePhoneChange}
                     required
                     maxLength={15}
                     placeholder="E.g. 9876543210"
                     className={`w-full bg-transparent border-b-4 px-0 py-4 text-2xl font-bold text-black focus:outline-none placeholder:text-gray-300 transition-colors ${phoneError ? 'border-red-500 focus:border-red-500' : 'border-black focus:border-primary'}`}
                   />
                   {phoneError && (
                     <p className="mt-2 text-sm font-bold text-red-500 uppercase tracking-wider">{phoneError}</p>
                   )}
                 </div>
                 
                 <div>
                   <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Transmission</label>
                   <textarea 
                     id="contact-message" 
                     rows={3}
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     required
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
             )}
           </div>
 
         </div>
       </section>
     </div>
   );
 };
 
 export default Contact;
