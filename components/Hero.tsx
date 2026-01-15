
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  useEffect(() => {
    const timer = setInterval(() => {
      setPaymentStatus('processing');
      setTimeout(() => setPaymentStatus('success'), 1500);
      setTimeout(() => setPaymentStatus('idle'), 4000);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* POS Mockup */}
        <div className="flex-1 w-full relative flex items-center justify-center">
          <div className="relative z-10 w-full max-w-[420px] animate-float group perspective-1000">
            <div className="relative bg-[#0d0d0d] rounded-[3.5rem] p-5 border-[6px] border-[#1a1a1a] shadow-[0_40px_100px_rgba(0,0,0,0.8)] pos-screen-glow transition-all duration-700 hover:scale-[1.02]">
              
              <div className="relative bg-[#020202] rounded-[2.8rem] overflow-hidden aspect-[9/16] border border-white/5">
                <div className="absolute inset-0 transition-all duration-700">
                  {paymentStatus === 'idle' && (
                    <div className="h-full flex flex-col items-center justify-center p-10 text-center">
                      <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin mb-4"></div>
                      <p className="text-white/30 font-bold uppercase tracking-[0.2em] text-[10px]">Waiting for Card</p>
                    </div>
                  )}
                  {paymentStatus === 'processing' && (
                    <div className="h-full flex flex-col items-center justify-center p-10 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <div className="w-8 h-8 border-2 border-white/20 border-t-white animate-spin rounded-full"></div>
                      </div>
                      <p className="text-white font-bold text-lg">Processing</p>
                    </div>
                  )}
                  {paymentStatus === 'success' && (
                    <div className="h-full flex flex-col items-center justify-center p-10 text-center animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 rounded-full bg-green-500 shadow-[0_0_40px_rgba(34,197,94,0.4)] flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-white font-black text-3xl tracking-tighter mb-1">Approved</p>
                      <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">NGN 25,000.00</p>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 w-full bg-[#0a0a0a] grid grid-cols-4 gap-1 p-4 border-t border-white/10">
                   {[1,2,3,'⌽',4,5,6,'✖',7,8,9,'⌫','✳',0,'#','✔'].map((key, i) => (
                     <div key={i} className={`h-10 flex items-center justify-center rounded-lg font-bold text-[10px] transition-all ${
                       typeof key === 'number' ? 'bg-[#151515] text-white/40 hover:bg-[#202020]' : 
                       key === '✔' ? 'bg-green-600/60 text-white' : 
                       key === '✖' ? 'bg-red-600/60 text-white' : 
                       'bg-amber-500/60 text-black'
                     }`}>
                       {key}
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Floating UI */}
            <div className="absolute -left-16 top-1/4 glass-dark p-5 rounded-[2rem] animate-float shadow-2xl z-20 border border-white/5" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                   <span className="text-white text-[10px] font-bold">POS</span>
                </div>
                <div>
                   <div className="w-16 h-1.5 bg-white/20 rounded-full mb-1"></div>
                   <div className="w-10 h-1 bg-white/10 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between gap-8 items-center">
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Loyalty</span>
                  <span className="text-xs font-bold text-white">+12</span>
                </div>
                <div className="flex justify-between gap-8 items-center border-t border-white/5 pt-3">
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Sales</span>
                  <span className="text-xs font-bold text-green-400">NGN 1.2M</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[150px] -z-10"></div>
        </div>

        {/* Hero Text */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1] mb-8 tracking-tighter">
            Create delightful, <br/>
            <span className="text-gradient">in-person payments</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/40 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium">
            Stack Terminal helps modern teams in Africa build custom, delightful in-person payments experiences that keep customers coming back.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <Button size="lg" className="rounded-full">Get Terminal</Button>
            <button className="text-white/40 hover:text-white font-bold text-lg border-b border-white/10 hover:border-primary transition-all py-1">
              Contact Sales
            </button>
          </div>
          
          <div className="mt-20 flex flex-wrap items-center justify-center lg:justify-start gap-x-12 gap-y-8 opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <span className="text-xl font-black tracking-tighter uppercase text-white">CHOWDECK</span>
             <span className="text-xl font-black tracking-tighter uppercase text-white">BURGER KING</span>
             <span className="text-xl font-black tracking-tighter uppercase text-white">IPNX</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
