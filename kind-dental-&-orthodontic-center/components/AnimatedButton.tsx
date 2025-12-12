import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  icon
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const x = (clientX - (left + width / 2)) * 0.2; // Magnetic strength
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-4 rounded-full font-body font-semibold text-sm transition-all duration-300 overflow-hidden group flex items-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-medical-dark to-medical-light text-white shadow-lg shadow-medical-light/30 hover:shadow-medical-light/50",
    secondary: "bg-accent-coral text-white shadow-lg shadow-accent-coral/30 hover:shadow-accent-coral/50",
    outline: "border border-medical-dark/20 text-medical-dark hover:bg-medical-dark/5 backdrop-blur-sm",
    ghost: "text-medical-dark hover:bg-medical-dark/5"
  };

  return (
    <motion.button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {icon}
          </motion.span>
        )}
      </span>
      
      {/* Ripple Effect Background - animated via CSS or simple overlay */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
      )}
    </motion.button>
  );
};

export default AnimatedButton;