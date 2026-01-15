
import React from 'react';

const Features: React.FC = () => {
  const items = [
    {
      title: "Virtual Terminal",
      desc: "A simple way to accept in-person payments at scale, with ZERO hardware costs. Delight customers by allowing frontline staff and sales agents confirm bank transfers, instantly.",
      link: "#virtual"
    },
    {
      title: "Physical Terminal",
      desc: "Your POS should work harder for you. Boost sales with this full-featured, point-of-sale device that lets you create unique branded experiences.",
      link: "#physical"
    },
    {
      title: "Terminal API",
      desc: "Build any custom, in-person payment experiences you can imagine, with Terminal. Developers and technical teams can quickly collaborate on custom apps.",
      link: "#api"
    }
  ];

  return (
    <section className="py-32 bg-black/50 border-y border-white/5 relative z-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32">
        <div className="lg:w-1/3">
           <p className="text-white/60 text-xl leading-relaxed font-medium">
             Stack Terminal is a collection of in-person payment tools, for businesses in Africa with a physical footprint.
           </p>
           
           {/* Visual Element: Large abstract POS icon */}
           <div className="mt-20 relative w-64 h-64 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-purple-600/20 blur-3xl"></div>
              <div className="relative w-full h-full border border-white/10 rounded-[3rem] p-8 glass-dark shadow-2xl flex items-center justify-center rotate-12">
                 <div className="w-full aspect-square bg-purple-600 rounded-2xl flex items-center justify-center p-6 shadow-inner">
                    <div className="grid grid-cols-4 gap-2 w-full">
                       {Array.from({length: 12}).map((_, i) => (
                         <div key={i} className="h-4 bg-white/40 rounded-sm"></div>
                       ))}
                       <div className="col-span-4 h-6 bg-white/20 rounded-md"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="lg:w-2/3 space-y-24">
           {items.map((item, i) => (
             <div key={i} className="group border-l border-white/10 pl-10 hover:border-purple-500 transition-all">
                <h3 className="text-4xl lg:text-5xl font-black mb-6 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                <p className="text-xl text-white/50 leading-relaxed mb-8 max-w-2xl">{item.desc}</p>
                <a href={item.link} className="text-lg font-bold text-white border-b border-white/20 hover:border-white transition-all pb-1 inline-flex items-center gap-2">
                   Learn more <span className="text-purple-400">→</span>
                </a>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
