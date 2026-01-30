import { motion, AnimatePresence } from 'framer-motion'; // Ajout de AnimatePresence
import { useState } from 'react';
import { posters, categories, getPostersByCategory, type Category, type Poster } from '@/config/posters';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  // 1. État pour l'affiche sélectionnée (plein écran)
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

  const filteredPosters = getPostersByCategory(activeCategory);

  return (
      <section id="gallery" className="relative py-24 px-6">
       

       <Navbar />

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
        
          
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          // ... (tes props d'animation restent identiques)
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              // 2. Clic pour ouvrir le plein écran
              onClick={() => setSelectedPoster(poster)}
              className="group relative poster-frame animated-border hover-lift cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredId === poster.id ? 'opacity-100' : 'opacity-0'
                }`} />
                
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredId === poster.id ? 1 : 0,
                    y: hoveredId === poster.id ? 0 : 20
                  }}
                >
                  <span className="text-primary text-sm font-medium">{poster.category}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-1">{poster.title}</h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. MODALE PLEIN ÉCRAN */}
        <AnimatePresence>
          {selectedPoster && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPoster(null)} // Ferme au clic sur le fond
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()} // Empêche de fermer si on clique sur l'image
                className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              >
                <img
                  src={selectedPoster.image}
                  alt={selectedPoster.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold">{selectedPoster.title}</h3>
                  <p className="text-muted-foreground">{selectedPoster.description}</p>
                </div>
                
                {/* Bouton fermer */}
                <button 
                  onClick={() => setSelectedPoster(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition-colors text-lg font-medium"
                >
                  Fermer ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {filteredPosters.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">Aucune affiche trouvée.</div>
        )}
      </div>

      <Footer />    
    </section>
  );
}