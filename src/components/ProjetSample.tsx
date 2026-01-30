import Navbar from "./Navbar";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { posters } from "../config/projects2";    


const ProjetSample = () => {
    return (
      <div className="projects-page">


          
          <div className="projects-grid">
            {posters.map((project) => (
              <div key={project.id} className="project-card">

                
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

      </div>
    );
}

export default ProjetSample;