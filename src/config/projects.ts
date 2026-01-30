/**
 * Configuration de vos affiches
 * 
 * Pour ajouter une affiche :
 * 1. Placez votre image dans src/assets/posters/
 * 2. Importez-la ci-dessous
 * 3. Ajoutez-la au tableau `posters`
 * 
 * Exemple :
 * import monAffiche from '@/assets/posters/mon-affiche.jpg';
 * 
 * Puis ajoutez dans le tableau :
 * {
 *   id: 1,
 *   title: "Titre de l'affiche",
 *   category: "Design",
 *   image: monAffiche,
 * }
 */

// ============================================
// IMPORTEZ VOS IMAGES ICI
// ============================================
import image1 from '../assets/posters/Roadshow/Banniere.png';
import image2 from '../assets/posters/Roadshow/Date.png';
import image3 from '../assets/posters/Roadshow/Kakemono.png';
import image4 from '../assets/posters/Roadshow/Sponsors.png';
import image5 from '../assets/posters/Roadshow/Teaser.png';

// ============================================
// CATÉGORIES DISPONIBLES
// ============================================
export const categories = [
  "Tous",
  "Pinky",
  "Design",
  "Artistique",
  "Typographie",
  "Illustration",
] as const;

export type Category = typeof categories[number];

// Modifie l'interface pour inclure les détails
export interface Poster {
  id: number;
  slug: string; // Un nom unique pour l'URL (ex: 'think-pink')
  title: string;
  category: Category;
  image: string; // Image principale (couverture)
  description: string; // Description courte pour la liste
  fullDescription?: string; // Texte détaillé pour la page projet
  gallery?: string[]; // Tableau d'images secondaires
}

export const posters: Poster[] = [
  {
    id: 1,
    slug: "roadshow-space",
    title: "Roadshow Space",
    category: "Abstract",
    image: image1,
    description: "Le Roadshow de l'Astronomie au Bénin est une tournée éducative de l'AfAS et CosmoLAB visant à vulgariser les sciences spatiales et susciter des vocations chez les jeunes Béninois en février 2026.",
    fullDescription: "Le Roadshow de l'Astronomie et du Spatial au Bénin est une initiative d'éducation et de diplomatie scientifique de grande envergure, portée par l'African Astronomical Society (AfAS) et le CosmoLAB Hub. Prévu du 08 au 11 février 2026, cet événement itinérant parcourt les universités (UAC, IMSP) et les établissements secondaires pour vulgariser les sciences de l'Univers et susciter des vocations auprès de la jeunesse béninoise. En mettant en lumière des projets technologiques majeurs comme le télescope SALT ou le SKA, le projet vise à positionner l'astronomie comme un levier de développement académique et social au cœur de l'Afrique.",
    gallery: [image5, image2, image4, image3, image1]
  },

   {
    id: 2,
    slug: "roadshow-space",
    title: "Roadshow Space",
    category: "Abstract",
    image: image1,
    description: "Une exploration visuelle autour du rose.",
    fullDescription: "Ce projet explore les nuances de rose à travers des textures abstraites et une typographie moderne...",
    gallery: [image5, image2, image4, image3, image1]
  }
  // ... Répète pour les autres projets
];

/** Fonction pour récupérer un projet par son slug */
export function getPosterBySlug(slug: string): Poster | undefined {
  return posters.find(p => p.slug === slug);
}