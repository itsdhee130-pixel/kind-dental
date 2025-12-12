import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Award, Users, GraduationCap, Sparkles } from 'lucide-react';

const DoctorProfile: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y }} 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-medical-light/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-accent-coral/5 rounded-full blur-3xl pointer-events-none" 
      />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side with Reveal Effect */}
          <div className="relative group">
            <motion.div 
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Custom cubic bezier for smooth reveal
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop" 
                alt="Dr. Rohit Anand" 
                className="w-full h-[600px] object-cover object-top"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/60 via-transparent to-transparent opacity-60" />

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.5 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                   y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                   opacity: { duration: 0.5, delay: 0.8 }
                }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-[200px] border border-white/50"
              >
                <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="text-accent-coral w-5 h-5" />
                    <span className="text-xs font-bold text-accent-coral uppercase tracking-wider">Experience</span>
                </div>
                <div className="text-4xl font-bold text-medical-dark font-display mb-1">14+</div>
                <div className="text-sm text-gray-600 font-medium">Years in Healthcare</div>
              </motion.div>
            </motion.div>

            {/* Decorative Back Shapes */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="absolute top-10 -left-10 w-full h-full border-2 border-medical-dark/10 rounded-[2.5rem] -z-10" 
            />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-medical-dark text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100"
              >
                <Award size={14} />
                <span>Chief Dentist & Specialist</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-medical-dark mb-6 leading-tight">
                Meet Dr. Rohit <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-light to-medical-dark relative">
                    Anand
                    <motion.svg 
                        className="absolute w-full h-3 -bottom-1 left-0 text-accent-coral" 
                        viewBox="0 0 100 10" 
                        preserveAspectRatio="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </motion.svg>
                </span>
              </h2>
              
              <p className="text-lg text-gray-500 font-body leading-relaxed">
                "We don't just treat teeth; we care for people. With over a decade of experience in pediatric and preventive dentistry, my goal is to create a dental home where every patient, especially children, feels safe, heard, and cared for."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <GraduationCap />, title: "MDS Specialist", desc: "Pedodontics & Preventive" },
                { icon: <Users />, title: "Family Focused", desc: "Trusted by Local Families" },
                { icon: <Award />, title: "14+ Years", desc: "Serving Since 2010" },
                { icon: <CheckCircle2 />, title: "Comprehensive", desc: "General & Ortho Care" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(249, 250, 251, 1)' }}
                  className="flex gap-4 items-start p-4 rounded-xl border border-transparent hover:border-gray-100 transition-all cursor-default"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm rounded-xl flex items-center justify-center shrink-0 text-medical-dark group-hover:text-medical-light transition-colors">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 22 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-dark text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-6 flex items-end gap-4"
            >
               <div className="font-title italic text-3xl text-gray-400 relative">
                  Dr. Rohit Anand
                  {/* Signature Animation */}
                  <svg className="absolute -top-4 -left-2 w-[120%] h-[150%] pointer-events-none text-medical-dark/20" viewBox="0 0 200 60">
                    <motion.path 
                        d="M20,30 Q50,10 80,30 T150,30" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    />
                  </svg>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;