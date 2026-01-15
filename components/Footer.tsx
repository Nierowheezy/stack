
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black pt-40 pb-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-24 mb-32">
          <div className="flex-1">
             <a href="#" className="flex items-center gap-2 mb-10">
                <div className="flex flex-col gap-0.5">
                  <div className="w-6 h-1 bg-white"></div>
                  <div className="w-6 h-1 bg-white/60"></div>
                  <div className="w-6 h-1 bg-white/30"></div>
                </div>
                <span className="text-2xl font-black tracking-tighter text-white">stack</span>
             </a>
             <p className="text-white/40 max-w-xs text-lg leading-relaxed">
                Modern online and offline payments for Africa.
             </p>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-16">
             <div>
                <h4 className="text-[10px] font-bold text-white/30 tracking-[0.3em] uppercase mb-8">Product</h4>
                <ul className="space-y-4 font-bold text-white/60">
                   <li><a href="#" className="hover:text-white transition-colors">Virtual Terminal</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Physical Terminal</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Terminal API</a></li>
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] font-bold text-white/30 tracking-[0.3em] uppercase mb-8">Resources</h4>
                <ul className="space-y-4 font-bold text-white/60">
                   <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Developers</a></li>
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] font-bold text-white/30 tracking-[0.3em] uppercase mb-8">Legal</h4>
                <ul className="space-y-4 font-bold text-white/60">
                   <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                </ul>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-white/30 text-xs font-bold tracking-widest">© {new Date().getFullYear()} STACK TERMINAL CLONE</p>
           <div className="flex gap-10">
              {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a key={social} href="#" className="text-white/30 hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">{social}</a>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
