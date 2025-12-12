import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import { ArrowRight, Star, Shield, Activity } from 'lucide-react';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F8FAFB] flex items-center justify-center pt-20">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-medical-light/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-medical-dark/5 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-accent-coral/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-medical-dark/80">Accepting New Patients</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-extrabold text-5xl md:text-7xl leading-[1.1] text-medical-dark"
          >
            Where Modern <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-dark to-medical-light">
              Dentistry
            </span> Meets <br/>
            <span className="italic font-light font-title">Comfort.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-lg font-body leading-relaxed"
          >
            Experience the future of dental care with AI-assisted diagnostics, 
            painless treatments, and a spa-like atmosphere designed for your peace of mind.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <AnimatedButton 
              variant="primary" 
              icon={<ArrowRight size={18} />}
              onClick={onBookAppointment}
            >
              Book Appointment
            </AnimatedButton>
            <AnimatedButton variant="outline">
              Virtual Tour
            </AnimatedButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-8 flex items-center gap-8 border-t border-gray-200/50"
          >
            <div className="flex -space-x-3">
               {[1,2,3,4].map((i) => (
                 <img key={i} src={`https://picsum.photos/40?random=${i}`} alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" />
               ))}
               <div className="w-10 h-10 rounded-full bg-medical-dark text-white flex items-center justify-center text-xs border-2 border-white">
                 500+
               </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm font-medium text-gray-500">Trusted by 500+ Families</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Abstract 3D Visual */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1000px]">
          {/* Main Floating Elements */}
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              rotateZ: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10 w-[400px] h-[500px]"
          >
             {/* Abstract Tooth/Shield Shape using CSS Masks/Clip-path */}
             <div className="w-full h-full bg-gradient-to-br from-white to-[#E0F7FA] rounded-[3rem] shadow-2xl shadow-medical-light/20 flex flex-col items-center justify-center relative overflow-hidden glass-panel border border-white/80">
                {/* Internal Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-medical-light/20 to-transparent rounded-bl-full" />
                
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-medical-dark to-medical-light rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                    <Shield size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-title font-bold text-medical-dark mt-6">Premium Care</h3>
                  <div className="flex justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-medical-light animate-pulse" />
                    <span className="text-sm text-gray-500 font-mono">LIVE MONITORING</span>
                  </div>
                </div>

                {/* Floating Card 1 */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-10 left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-[180px]"
                >
                  <div className="bg-green-100 p-2 rounded-lg text-green-600">
                    <Activity size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Success Rate</p>
                    <p className="text-lg font-bold font-mono text-medical-dark">99.8%</p>
                  </div>
                </motion.div>

                 {/* Floating Card 2 */}
                 <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-20 right-[-20px] bg-white p-4 rounded-xl shadow-xl backdrop-blur-md bg-opacity-90 max-w-[160px]"
                >
                  <p className="text-xs font-bold text-medical-dark mb-1">Painless Tech</p>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-accent-coral"
                    />
                  </div>
                </motion.div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;