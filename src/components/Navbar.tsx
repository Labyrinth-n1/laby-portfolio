import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../assets/posters/logo-laby.png';
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
        <a href="/" className="font-display text-2xl font-bold text-gradient">
          <img src={logo} alt="Logo" className="w-25 h-16" />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/">Acceuil</a>
          <a href="/gallery">Gallery</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
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