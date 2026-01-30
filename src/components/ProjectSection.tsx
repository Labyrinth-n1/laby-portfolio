import { motion, AnimatePresence } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import ProjetSample from './ProjetSample';
import { posters } from "../config/projects2";    

const ProjectSection = () => {
  return (
    <section className="relative py-24 px-6">
       <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Découvrez quelques-uns de mes projets récents mêlant design, illustration et créativité.
          </p>

          
                 
                    <div className="projects-grid">
                      {posters.map((project) => (
                        <div key={project.id} className="project-card">
          
                          {/*
                          <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                          </div> */}
                          
                          <div className="project-content">
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-item-title">{project.title}</h3>
                            <p className="project-description">
                              {project.description || "Découvrez mon travail de design et d'illustration."}
                            </p>
                            
                            {/* Le bouton qui renvoie vers la page détaillée ou WhatsApp */}
                            <a href={`/projet/${project.slug}`} className="view-project-btn">
                              Voir le projet 
                              <span className="arrow">→</span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
            
        
          
          <a href="/projects">
             <div 
                className="seeallprojects" 
                style={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color:"#000",
                  cursor: 'pointer',
                  background: '#d5468e',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  display: 'inline-block',
                  boxShadow: 'inset 0 0 10px #e14983',
                  transition: 'background 0.3s ease'
                }}
          >
                Voir tous les projets 
          </div>

          </a>
          
        </motion.div>
  
    </section>
  );
}

export default ProjectSection;