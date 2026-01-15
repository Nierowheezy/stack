
import React from 'react';

const VirtualTerminalDetail: React.FC = () => {
  return (
    <section id="virtual" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 max-w-2xl">
          <h2 className="text-6xl lg:text-7xl font-black mb-8 tracking-tighter">Virtual Terminal</h2>
          <p className="text-2xl text-white/50 leading-relaxed font-medium">
            Delight customers by allowing frontline staff and sales agents confirm bank transfers, instantly.
          </p>
        </div>

        <div className="mb-40">
           <h3 className="text-3xl font-bold mb-12 text-white/80">How Virtual Terminal works</h3>
           <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1600" 
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000"
                alt="Working flow"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                 <button className="w-28 h-28 bg-white/10 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md flex items-center justify-center transition-all border border-white/20 group-hover:scale-110">
                    <span className="text-3xl ml-2">▶</span>
                 </button>
              </div>
              
              {/* Floating UI simulation overlay */}
              <div className="absolute top-1/2 right-10 -translate-y-1/2 flex flex-col gap-4 pointer-events-none">
                 <div className="glass-dark p-6 rounded-2xl w-80 animate-float">
                    <p className="text-green-400 font-bold mb-1">Payment of NGN 7,800 received</p>
                    <p className="text-xs text-white/40">Sender: Abdulkaeem • Bank: GTB</p>
                 </div>
                 <div className="glass-dark p-6 rounded-2xl w-80 animate-float" style={{animationDelay: '1.5s'}}>
                    <p className="text-green-400 font-bold mb-1">Payment of NGN 15,000 received</p>
                    <p className="text-xs text-white/40">Sender: Damilola • Bank: Stanbic IBTC</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-32 items-start">
           <div className="flex-1 space-y-32">
              <div>
                 <h4 className="text-4xl font-black mb-8 tracking-tight">Fast bank transfer confirmations, at scale</h4>
                 <p className="text-xl text-white/50 leading-relaxed">
                   With Virtual Terminal, frontline staff can quickly confirm the success of bank transfer payments via WhatsApp alerts, without accessing other sensitive information, like bank balance.
                 </p>
              </div>
              <div>
                 <h4 className="text-4xl font-black mb-8 tracking-tight">Deploy your point-of-sale solution in seconds</h4>
                 <p className="text-xl text-white/50 leading-relaxed">
                   Say goodbye to the logistical headache of managing several hardware devices, including replacing damaged devices, managing receipt paper rolls, and other distractions.
                 </p>
              </div>
           </div>

           <div className="flex-1 w-full sticky top-32">
              <div className="relative group">
                 <div className="absolute inset-0 bg-purple-600/10 blur-[120px]"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=800" 
                   className="relative z-10 w-full rounded-3xl border border-white/10 shadow-2xl" 
                   alt="Device interface"
                 />
                 {/* Display card overlay */}
                 <div className="absolute -bottom-10 -left-10 glass-dark p-8 rounded-[2rem] z-20 w-80 shadow-3xl">
                    <p className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-4">We Accept</p>
                    <div className="flex gap-4 items-center">
                       <div className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg font-bold text-sm">Transfer</div>
                       <div className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg font-bold text-sm">Cards</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTerminalDetail;
