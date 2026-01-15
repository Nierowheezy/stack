
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "../lib/utils";

interface Feature {
  time: string;
  text: string;
}

interface UseCase {
  id: string;
  label: string;
  image: string;
  features: Feature[];
}

const useCases: UseCase[] = [
  {
    id: "restaurant",
    label: "Restaurant",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    features: [
      { time: "00:01", text: "Delight customers with self-checkout" },
      { time: "00:23", text: "Reinforce your brand with customized receipts" },
      { time: "00:52", text: "Turn the screen into an upsell opportunity" },
      { time: "01:18", text: "Do business while on the go" },
      { time: "01:38", text: "Experiment with brand new business models" },
    ],
  },
  {
    id: "grocery",
    label: "Grocery Store",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    features: [
      { time: "00:01", text: "Create personalised experiences" },
      { time: "00:52", text: "Experiment with discounting strategies" },
      { time: "01:27", text: "Reduce churn with automation" },
    ],
  },
  {
    id: "fashion",
    label: "Fashion Boutique",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    features: [
      { time: "00:01", text: "Win the sale with roving checkout" },
      { time: "00:32", text: "Make POS your customer success secret weapon" },
      { time: "01:24", text: "Incentivize sales teams with commissions" },
      { time: "01:41", text: "Out of stock? No problem" },
    ],
  },
];

// Using React.FC to fix the 'key' prop TS error when rendering in a list
const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    className="bg-black/40 border border-white/5 p-6 rounded-xl min-w-[240px] flex-1 group hover:border-primary/30 transition-all duration-300"
  >
    <span className="text-[10px] font-bold text-white/30 block mb-2 tracking-widest">{feature.time}</span>
    <p className="text-sm font-bold text-white/70 leading-relaxed group-hover:text-white transition-colors">{feature.text}</p>
  </motion.div>
);

export const BusinessUseCases = () => {
  const [activeTab, setActiveTab] = useState(useCases[0].id);

  const activeData = useCases.find((u) => u.id === activeTab) || useCases[0];

  return (
    <section className="py-24 relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/40 text-lg lg:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            There are several ways that ambitious teams can leverage Terminal to drive growth. Here are a few examples
          </p>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-xl">
            {useCases.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-8 py-3 rounded-xl text-sm font-bold tracking-tight transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10"
                    : "text-white/30 hover:text-white/60"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            {/* Main Visual */}
            <div className="relative w-full max-w-4xl aspect-[16/10] mb-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full"></div>
              
              {/* Reference to isometric style - using glassmorphism container and Unsplash */}
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-black/40 group">
                <img
                  src={activeData.image}
                  alt={activeData.label}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                />
                
                {/* Visual Overlay mimicking Isometric UI */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-64 h-64 border-2 border-primary/20 rounded-full animate-ping absolute"></div>
                   <div className="relative z-10 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(155,93,229,0.5)] group-hover:scale-110 transition-all duration-500">
                     <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                     </div>
                   </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                   <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_10px_30px_rgba(155,93,229,0.4)] hover:scale-105 active:scale-95 transition-all">
                      <Play className="size-4 fill-white" />
                      Play Video
                   </button>
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4 custom-scrollbar">
              {activeData.features.map((feature, i) => (
                <FeatureCard key={i} feature={feature} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
