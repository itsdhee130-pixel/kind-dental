import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Mother of Two",
    content: "Dr. Rohit is amazing with kids! My 6-year-old actually looks forward to his dental visits now. The pediatric care here is world-class.",
    rating: 5,
    image: "https://picsum.photos/60?random=20"
  },
  {
    name: "Michael Chen",
    role: "Architect",
    content: "As a designer, I appreciate the attention to detail. The clinic feels professional and welcoming. The orthodontic treatment plan was clear and effective.",
    rating: 5,
    image: "https://picsum.photos/60?random=21"
  },
  {
    name: "Priya Sharma",
    role: "Teacher",
    content: "I used to be terrified of dentists. Kind Dental changed everything. Dr. Rohit's gentle approach and the friendly staff made me feel completely at ease.",
    rating: 5,
    image: "https://picsum.photos/60?random=22"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFB] relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute left-[-10%] top-[20%] w-[400px] h-[400px] rounded-full border border-gray-200/50" />
      <div className="absolute right-[-5%] bottom-[10%] w-[300px] h-[300px] rounded-full bg-medical-light/5 blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-medical-dark">Client Stories</h2>
          <p className="mt-4 text-gray-500">Don't just take our word for it.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl" />
              <div className="relative p-8 rounded-2xl border border-white/50 backdrop-blur-sm">
                <Quote className="text-medical-light/20 absolute top-6 right-6" size={48} />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-600 mb-8 font-body leading-relaxed italic">"{t.content}"</p>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div className="absolute inset-0 rounded-full border-2 border-medical-light opacity-0 group-hover:opacity-100 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-dark">{t.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;