
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  const items = [
    { q: "In which countries can I use Stack Terminal?", a: "Stack Terminal is currently leading the way in Nigeria, with active beta testing currently happening in Ghana and Kenya." },
    { q: "Which payment channels are supported?", a: "All terminals support Visa, Mastercard, Verve, USSD, and instant Bank Transfers." },
    { q: "What is the turnaround for device delivery?", a: "Once your order is confirmed, we deliver within 3-5 business days across all major Nigerian cities." },
    { q: "Can I customize the terminal software?", a: "Yes, our Terminal API allows you to build custom post-purchase experiences and business automations." }
  ];

  return (
    <section id="faq" className="py-40 bg-black px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black mb-20 text-center tracking-tighter">Common Questions</h2>
        <div className="space-y-6">
           {items.map((item, i) => (
             <div key={i} className="border-b border-white/10">
                <button 
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full py-10 flex justify-between items-center text-left hover:text-purple-400 transition-colors"
                >
                   <span className="text-2xl font-bold">{item.q}</span>
                   <span className="text-3xl font-light opacity-30">{open === i ? '−' : '+'}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${open === i ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <p className="text-xl text-white/50 leading-relaxed font-medium">
                      {item.a}
                   </p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
