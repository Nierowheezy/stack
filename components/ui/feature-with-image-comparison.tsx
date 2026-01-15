
import React, { useState } from "react";
import { Badge } from "./badge";
import { GripVertical } from "lucide-react";

function Feature() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = (e as React.MouseEvent).clientX - rect.left;
    }
    
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setInset(percentage);
  };

  return (
    <div className="w-full py-20 lg:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="outline">Platform Evolution</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-black text-white">
              The future of retail is here
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-white/40 font-medium">
              We've redesigned the terminal experience from the ground up. Drag the slider to see the leap from legacy hardware to the new Stack OS.
            </p>
          </div>
          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-[2rem] select-none border border-white/10 shadow-3xl"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-primary h-full w-1 absolute z-20 top-0 -ml-0.5 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-primary text-white rounded-full hover:scale-110 transition-all w-10 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-5 z-30 cursor-ew-resize flex justify-center items-center shadow-xl"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    // Prevent scrolling on touch
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                  }}
                >
                  <GripVertical className="h-5 w-5 select-none" />
                </button>
              </div>
              
              {/* After Image (New Experience) */}
              <img
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2000&auto=format&fit=crop"
                alt="New Stack Terminal Experience"
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-[2rem] select-none object-cover"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              
              {/* Before Image (Legacy Experience) */}
              <img
                src="https://images.unsplash.com/photo-1556740734-79505f42d3f0?q=80&w=2000&auto=format&fit=crop"
                alt="Legacy POS Hardware"
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-[2rem] select-none object-cover grayscale opacity-40"
              />

              <div className="absolute bottom-8 left-8 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Legacy Flow</span>
              </div>
              <div className="absolute bottom-8 right-8 z-20 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Stack OS 2.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
