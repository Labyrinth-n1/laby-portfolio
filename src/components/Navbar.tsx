import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 glass-card border-b border-border' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-bold text-gradient">
          Portfolio
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Accueil', 'Gallery', 'Contact'].map((item, index) => (
            <a
              key={item}
              href={item === 'Accueil' ? '#' : `#${item.toLowerCase()}`}
              className="relative text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium story-link"
            >
              <span>{item}</span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover-lift glow-effect"
        >
          Collaborer
        </a>
      </div>
    </motion.nav>
  );
}