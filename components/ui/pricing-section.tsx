
import React from "react";
import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";

function PricingSection() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold">
              Prices that make sense
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Simple, transparent, and fair. No hidden fees.
            </p>
          </div>
          <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x divide-white/10 pt-20">
            <div className="col-span-3 lg:col-span-1 p-6 border-b border-white/10 lg:border-none">
                <p className="text-muted-foreground font-bold tracking-widest uppercase text-xs">Comparison</p>
            </div>
            <div className="px-6 py-8 gap-2 flex flex-col border-b border-white/10">
              <p className="text-2xl font-bold">Virtual</p>
              <p className="text-sm text-muted-foreground">
                Perfect for quick online setup and bank transfer confirmations.
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl font-black">Free</span>
                <span className="text-sm text-muted-foreground"> / always</span>
              </p>
              <Button variant="outline" className="gap-4 mt-8">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-6 py-8 gap-2 flex flex-col border-b border-white/10 bg-white/[0.02]">
              <p className="text-2xl font-bold">Physical</p>
              <p className="text-sm text-muted-foreground">
                High-performance POS hardware for in-person transactions.
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl font-black">NGN 86k</span>
                <span className="text-sm text-muted-foreground"> / device</span>
              </p>
              <Button className="gap-4 mt-8">
                Order Now <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-6 py-8 gap-2 flex flex-col border-b border-white/10">
              <p className="text-2xl font-bold">Enterprise</p>
              <p className="text-sm text-muted-foreground">
                For high-volume merchants and custom terminal app builds.
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl font-black">Custom</span>
                <span className="text-sm text-muted-foreground"> / quote</span>
              </p>
              <Button variant="outline" className="gap-4 mt-8">
                Contact Sales <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="px-6 col-span-3 lg:col-span-1 py-4 border-b border-white/10">
              <b>Features</b>
            </div>
            <div className="border-b border-white/10"></div>
            <div className="border-b border-white/10 bg-white/[0.02]"></div>
            <div className="border-b border-white/10"></div>
            
            <div className="px-6 col-span-3 lg:col-span-1 py-4 border-b border-white/10 text-sm text-muted-foreground font-medium">Bank Transfers</div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10 bg-white/[0.02]">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10">
              <Check className="w-4 h-4 text-primary" />
            </div>

            <div className="px-6 col-span-3 lg:col-span-1 py-4 border-b border-white/10 text-sm text-muted-foreground font-medium">Terminal API</div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10 bg-white/[0.02]">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10">
              <Check className="w-4 h-4 text-primary" />
            </div>

            <div className="px-6 col-span-3 lg:col-span-1 py-4 border-b border-white/10 text-sm text-muted-foreground font-medium">Custom Apps</div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10 bg-white/[0.02]">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10">
              <Check className="w-4 h-4 text-primary" />
            </div>

            <div className="px-6 col-span-3 lg:col-span-1 py-4 border-b border-white/10 text-sm text-muted-foreground font-medium">Multi-Account Split</div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10 bg-white/[0.02]">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div className="px-6 py-4 flex justify-center border-b border-white/10">
              <Check className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PricingSection };
