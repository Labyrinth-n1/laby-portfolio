import { motion } from 'framer-motion';
import { useState } from 'react';
import { posters, categories, getPostersByCategory, type Category } from '@/config/posters';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredPosters = getPostersByCategory(activeCategory);

  return (
    <section id="gallery" className="relative py-24 px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Galerie</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Découvrez ma collection d'affiches créatives et uniques
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground glow-effect'
                  : 'glass-card text-foreground/70 hover:text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosters.map((poster, index) => (
            <motion.div
              key={poster.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredId(poster.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative poster-frame animated-border hover-lift cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 ${
                  hoveredId === poster.id ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Content */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredId === poster.id ? 1 : 0,
                    y: hoveredId === poster.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-primary text-sm font-medium">{poster.category}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                    {poster.title}
                  </h3>
                  {poster.description && (
                    <p className="text-muted-foreground text-sm mt-2">{poster.description}</p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosters.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              Aucune affiche dans cette catégorie pour le moment.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}