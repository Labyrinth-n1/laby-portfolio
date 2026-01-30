import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Dribbble, MessageCircleCode } from 'lucide-react';
import './ContactSection.css';


const socialLinks = [
  { icon: MessageCircleCode, href: "#", label: "Message" },
   { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Mail, href: "mailto:steenaadisso@gmail.com", label: "Email" },
];

function sendToWhatsapp() {
  const phoneNumber = "2290157172160"
  const message = document.getElementById('message').value;

  if (message.trim() === "") {
    alert("Le message est vide !");
    return;
  }

  // encodeURIComponent transforme les caractères spéciaux et espaces pour l'URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Ouvre le lien dans un nouvel onglet
  window.open(whatsappUrl, '_blank');
}


export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-secondary/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Travaillons</span>
            <br />
            <span className="text-foreground/90">Ensemble</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Vous avez un projet créatif en tête ? N'hésitez pas à me contacter pour discuter de vos idées.
          </p>
          
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
          >
             
            <a 
              href="mailto:steenaadisso@gmail.com"
              className="mailto inline-flex items-center gap-3 text-2xl md:text-3xl font-display font-bold text-primary hover:text-accent transition-colors duration-300"
            >
              <Mail className="w-8 h-8" />
              steenaadisso@gmail.com
            </a>

            <textarea name="message" placeholder='Votre message ici...' id="message" className="w-full h-32 p-4 mt-6 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary" required>
           
            </textarea>

            <button onClick={sendToWhatsapp} className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors duration-300">
              Envoyer le message par whatsapp 
            </button>
            
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-6">Retrouvez-moi aussi sur</p>
              <div className="flex justify-center gap-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}