
import React from 'react';
import { Badge } from './ui/badge';
import { Battery, Printer, Smartphone, Camera, Wifi } from 'lucide-react';

const PhysicalTerminalDetail: React.FC = () => {
  const boxItems = [
    { title: "Charger", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400" },
    { title: "Morefun POS", img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=400" },
    { title: "POS User Guide", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400" },
    { title: "Receipt Paper", img: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section id="physical-terminal" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <Badge variant="outline" className="mb-4">Hardware</Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter">Physical Terminal</h2>
          <p className="text-lg text-white/50 max-w-xl leading-relaxed">
            Your point-of-sale device should work harder for you. Boost sales with this full-featured POS.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
           <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5">
              <h3 className="text-xl font-bold mb-4">Blazing fast connectivity</h3>
              <p className="text-sm text-white/40 leading-relaxed">WiFi and global SIM card support ensures you never miss a transaction due to network failure.</p>
           </div>
           <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5">
              <h3 className="text-xl font-bold mb-4">Split payments</h3>
              <p className="text-sm text-white/40 leading-relaxed">Automatically pay different amounts into separate bank accounts for complex business lines.</p>
           </div>
           <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5">
              <h3 className="text-xl font-bold mb-4">Real-time accounting</h3>
              <p className="text-sm text-white/40 leading-relaxed">Monitor every POS device across multiple stores directly from your central dashboard.</p>
           </div>
        </div>

        {/* What's in the box */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 lg:p-20 overflow-hidden">
           <h3 className="text-5xl lg:text-7xl font-black mb-16 tracking-tighter">What's in<br/><span className="text-primary">the box?</span></h3>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {boxItems.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-square bg-black border border-white/5 rounded-[2rem] overflow-hidden mb-6 relative">
                      <img src={item.img} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" alt={item.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/60">{item.title}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Hardware Specifications Section */}
        <div className="mt-16 pt-32 border-t border-white/5">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                 <h3 className="text-4xl lg:text-5xl font-black mb-10 tracking-tighter leading-[1.1]">Engineered for<br/>Professional Retail</h3>
                 <p className="text-lg text-white/40 leading-relaxed mb-16 max-w-lg">
                    Reliability is at the heart of the Terminal. We've optimized every component for high-traffic merchants.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                    <div className="space-y-4">
                       <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                          <Battery className="w-5 h-5 text-primary" />
                       </div>
                       <h4 className="font-bold text-white">24h Battery</h4>
                       <p className="text-xs text-white/40 leading-relaxed">High-capacity 5200mAh battery built for all-day uninterrupted operation.</p>
                    </div>
                    <div className="space-y-4">
                       <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                          <Printer className="w-5 h-5 text-primary" />
                       </div>
                       <h4 className="font-bold text-white">Ultra-Fast Printer</h4>
                       <p className="text-xs text-white/40 leading-relaxed">Thermal printer prints receipts in seconds with easy-load 58mm paper.</p>
                    </div>
                    <div className="space-y-4">
                       <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-primary" />
                       </div>
                       <h4 className="font-bold text-white">HD Display</h4>
                       <p className="text-xs text-white/40 leading-relaxed">5.5" HD touchscreen with scratch-resistant Gorilla Glass coating.</p>
                    </div>
                    <div className="space-y-4">
                       <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                          <Wifi className="w-5 h-5 text-primary" />
                       </div>
                       <h4 className="font-bold text-white">Always Connected</h4>
                       <p className="text-xs text-white/40 leading-relaxed">Auto-switching 4G LTE, WiFi, and fallback Bluetooth connectivity.</p>
                    </div>
                 </div>
              </div>
              
              <div className="lg:w-1/2 relative group">
                 <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full group-hover:bg-primary/10 transition-all duration-700"></div>
                 <div className="relative z-10 p-4 lg:p-12 glass-dark rounded-[3.5rem] border border-white/5 shadow-3xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800" 
                      className="w-full rounded-[2.5rem] grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100" 
                      alt="POS Hardware Macro"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                       <div className="w-16 h-16 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center animate-ping absolute opacity-20"></div>
                       <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(155,93,229,0.8)] relative z-10"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PhysicalTerminalDetail;
