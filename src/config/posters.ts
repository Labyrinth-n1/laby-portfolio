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
import image1 from '../assets/posters/1.png';
import image2 from '../assets/posters/airpodmax-1aa6386a3b657a7067d033718accc40e.png';
import image3 from '../assets/posters/Ajouter un titre.png';
import image4 from '../assets/posters/Besoin d’une carte de visite .png';
import image5 from '../assets/posters/labyrinth1-13f77b6e7a1f3878a602f9ed994727c8.png';
import image6 from '../assets/posters/nike-823d743a79661bd42945be62a158de45.png';
import image7 from '../assets/posters/nini-30e7a4d490074e26e1a6df13a372019e.png';
import image8 from '../assets/posters/pyjama_party-9910a3b22eaff9ab36ddf15abcee9955.png';
import image9 from '../assets/posters/silenced-a297db431f680eda539ddc5a8a860c7d.png';
import image10 from '../assets/posters/uncle_waffle-05e70c3e219362f6b15b54dd073e893b.png';
import image11 from '../assets/posters/Votre texte de paragraphe(2).png';
import image12 from '../assets/posters/Yaourt-78f0b924c2a6f8443950413e9a49986a.png';
import image13 from '../assets/posters/Ajouter un titre(1).png';
import image14 from '../assets/posters/XINO.png';
import image15 from '../assets/posters/RUNWAY VIBES 2025”.png'; // Exemple d'ajout
// ============================================
// CATÉGORIES DISPONIBLES
// ============================================
export const categories = [
  "Tous",
  "Abstrait",
  "Design",
  "Artistique",
  "Typographie",
  "Illustration",
  "Photo",
] as const;

export type Category = typeof categories[number];

// ============================================
// INTERFACE POUR UNE AFFICHE
// ============================================
export interface Poster {
  id: number;
  title: string;
  category: Category;
  image: string;
  description?: string;
}

// ============================================
// VOS AFFICHES - AJOUTEZ LES ICI
// =============================Think===============
export const posters: Poster[] = [
  // Exemples avec images placeholder (à remplacer par vos affiches) :
  {
    id: 1,
    title: "Think pink",
    category: "Abstrait",
    image: image1,
  },
  {
    id: 2,
    title: "Smile",
    category: "Design",
    image: image3,
  },
  {
    id: 3,
    title: "AirPods",
    category: "Abstrait",
    image: image2,
  },
  {
    id: 4,
    title: "Laby",
    category: "Illustration",
    image: image4,
  },
  {
    id: 5,
    title: "RUNWAY VIBES 2025",
    category: "Design",
    image: image15,
  },
  {
    id: 6,
    title: "Nike",
    category: "Illustration",
    image: image6,
  },
  
  {
    id: 7,
    title: "Shani",
    category: "Illustration",
    image: image7,  
  },

  {
    id: 8,
    title: "Pyjama Party",
    category: "Illustration",
    image: image8,  
  },

  {
    id: 9,
    title: "Silenced",
    category: "Artistique",
    image: image9,  
  },

  {
    id: 10,
    title: "Uncle Waffle",
    category: "Artistique",
    image: image10,  
  },

  {
    id: 11,
    title: "Imac",
    category: "Typographie",
    image: image11,  
  },

  {
    id: 12,
    title: "Yaourt",
    category: "Photo",
    image: image12,  
  },

  {
    id: 13,
    title: "Orphanage",
    category: "Abstrait",
    image: image13,  
  },

  {
    id: 14,
    title: "Octobre rose",
    category: "Design",
    image: image14,  
  },
  { 
    id: 15,
    title: "Gloss Party",
    category: "Design",
    image: image5,
  }

  // AJOUTEZ VOS AFFICHES CI-DESSOUS :
  // {
  //   id: 7,
  //   title: "Ma Nouvelle Affiche",
  //   category: "Design",
  //   image: affiche1,
  // },
];

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

/** Récupère les affiches filtrées par catégorie */
export function getPostersByCategory(category: Category): Poster[] {
  if (category === "Tous") return posters;
  return posters.filter(p => p.category === category);
}

/** Récupère les 5 premières affiches pour la scène 3D */
export function getPostersFor3D(): Poster[] {
  return posters.slice(0, 5);
}