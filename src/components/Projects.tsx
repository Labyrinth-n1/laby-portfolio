import Navbar from "./Navbar";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { posters } from "../config/projects";    
import './Projects.css'

const Projects = () => {
    return (
      <div className="projects-page">
        <Navbar />

        <section className="projects-container">
          <h1 className="projects-title">Mes Créations</h1>
          
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
        </section>


        <Footer />
      </div>
    );
}

export default Projects;