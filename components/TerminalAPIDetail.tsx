
import React from 'react';
import { Badge } from './ui/badge';

const TerminalAPIDetail: React.FC = () => {
  return (
    <section id="terminal-api" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
           <div className="flex-1">
              <Badge variant="outline" className="mb-4">Developers</Badge>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter">Terminal API</h2>
              <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl">
                 Build any custom, in-person payment experiences you can imagine. Stack Terminal is completely programmable.
              </p>
              
              <ul className="space-y-6">
                 {[
                   "Build custom loyalty apps",
                   "Automated receipt customization",
                   "Split payments via API",
                   "Hardware webhooks & events"
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4 items-center group">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-sm font-bold text-white/60 group-hover:text-white">{item}</span>
                   </li>
                 ))}
              </ul>
           </div>

           <div className="flex-1 w-full flex justify-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                 <div className="absolute inset-0 bg-primary/5 blur-[100px]"></div>
                 {/* Dotted Bean/Coffee Matrix Style */}
                 <div className="grid grid-cols-12 gap-3 opacity-20 rotate-45 group">
                    {Array.from({length: 144}).map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full transition-all duration-1000 ${i > 50 && i < 110 && i % 3 === 0 ? 'bg-primary scale-150 shadow-[0_0_15px_rgba(155,93,229,0.5)]' : 'bg-white/40'}`}></div>
                    ))}
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl shadow-2xl glass-dark">
                       <code className="text-primary font-mono text-xs">
                          {`POST /v1/terminal/transaction\n{\n  "amount": 250000,\n  "currency": "NGN",\n  "terminal_id": "T_123"\n}`}
                       </code>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalAPIDetail;
