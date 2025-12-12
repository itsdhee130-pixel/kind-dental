import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Check, Loader2 } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

interface AppointmentFormProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ isOpen, onOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        setStep(2); // Success state
        setTimeout(() => {
            onClose();
            setStep(1);
        }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onOpen}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-accent-coral text-white rounded-full shadow-2xl flex items-center justify-center shadow-accent-coral/40"
      >
        <Calendar size={28} />
        <span className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full animate-ping" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-medical-dark to-medical-light p-6 text-white relative">
                 <button 
                   onClick={onClose}
                   className="absolute top-4 right-4 text-white/70 hover:text-white"
                 >
                   <X size={24} />
                 </button>
                 <h3 className="text-2xl font-display font-bold">Book Visit</h3>
                 <p className="text-white/80 text-sm">3 slots available for today</p>
              </div>

              <div className="p-6">
                {step === 1 ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-medical-light focus:ring-2 focus:ring-medical-light/20 outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-medical-light focus:ring-2 focus:ring-medical-light/20 outline-none transition-all" placeholder="+91 98765 43210" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                            <input type="date" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-medical-light focus:ring-2 focus:ring-medical-light/20 outline-none transition-all" />
                        </div>
                        
                        <AnimatedButton variant="primary" className="w-full justify-center !py-3 !text-base mt-4">
                            {loading ? <Loader2 className="animate-spin" /> : 'Confirm Booking'}
                        </AnimatedButton>
                    </form>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                            <Check size={40} />
                        </div>
                        <h4 className="text-xl font-bold text-medical-dark">Confirmed!</h4>
                        <p className="text-gray-500 mt-2">We'll call you shortly to confirm the time.</p>
                    </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppointmentForm;