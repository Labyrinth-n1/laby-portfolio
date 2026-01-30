import { useParams } from 'react-router-dom';
import { getPosterBySlug } from '../config/projects'; // Importe ta fonction
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Projects.css';

import { useState } from 'react';

const ProjectDetail = () => {
  const { slug } = useParams(); // Récupère le nom du projet dans l'URL
  const project = getPosterBySlug(slug);
  const [selectedImg, setSelectedImg] = useState(null);

  // Si le projet n'existe pas (mauvaise URL)
  if (!project) {
    return <div>Projet introuvable...</div>;
  }

  return (
    <div className="project-detail-page">
      <Navbar />

      
      <div className="container">
        <div className="back-btn">
      </div>
      
        <h1 className='title'>{project.title}</h1>
        <p className="category-tag">{project.category}</p>
        

        <div className="content">
          <h2>À propos du projet</h2>
          <p>{project.fullDescription || project.description}</p>
        </div>

        {/* Affichage de la galerie si elle existe */}
        {project.gallery && (
          <div className="gallery-grid">
            {project.gallery.map((img, index) => (
              <img key={index}  src={img} alt={`Vue ${index}`} onClick={() => setSelectedImg(img)} />
            ))}
          </div>
        )}
 
        {/* Modale pour l'image sélectionnée */}
        {selectedImg && (
          <div className="fullscreen-overlay" onClick={() => setSelectedImg(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImg} alt="Vue plein écran" />
        </div>
        )}
        
      </div>

      

      <Footer />
    </div>
  );
};

export default ProjectDetail;