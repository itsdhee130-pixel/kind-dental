import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronsLeftRight } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in event) {
        clientX = event.touches[0].clientX;
    } else {
        clientX = (event as React.MouseEvent).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
      const handleGlobalMouseUp = () => setIsDragging(false);
      window.addEventListener('mouseup', handleGlobalMouseUp);
      return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section className="py-24 bg-[#0A2463] text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00D9FF]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl cursor-col-resize select-none"
              ref={containerRef}
              onMouseMove={(e) => isDragging && handleMove(e)}
              onTouchMove={handleMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              {/* After Image (Background) */}
              <img 
                src="https://picsum.photos/800/600?random=10" 
                alt="After" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-medical-dark/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider pointer-events-none z-10">
                After
              </div>

              {/* Before Image (Foreground Clipped) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src="https://picsum.photos/800/600?random=11" 
                  alt="Before" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                 <div className="absolute top-4 left-4 bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider pointer-events-none">
                  Before
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-medical-dark hover:scale-110 transition-transform">
                  <ChevronsLeftRight size={20} />
                </div>
              </div>
            </motion.div>
            <p className="text-center mt-4 text-white/50 text-sm">Drag slider to compare results</p>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Transforming Smiles,<br/> 
              <span className="text-medical-light">Changing Lives.</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-white/70 text-lg leading-relaxed"
            >
              See the real impact of our advanced cosmetic and restorative procedures. 
              Our digital smile design process ensures you know exactly what to expect before we even begin.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-8">
               <div>
                 <div className="text-3xl font-mono font-bold text-medical-light mb-2">10k+</div>
                 <div className="text-white/60 text-sm">Implants Placed</div>
               </div>
               <div>
                 <div className="text-3xl font-mono font-bold text-medical-light mb-2">100%</div>
                 <div className="text-white/60 text-sm">Success Rate</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;