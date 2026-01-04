import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import bgIgloos from "@/assets/bg-igloos.jpg";

const Footer = () => {
  return (
    <footer className="relative min-h-[85vh] overflow-hidden flex items-end pb-16">
      {/* Background image - very slightly dimmed */}
      <div className="absolute inset-0">
        <img 
          src={bgIgloos}
          alt="Winter landscape background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-earth/15" />
      </div>
      
      <div className="relative z-10 w-full section-padding">
      
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-10 drop-shadow-lg">
              Let's Connect
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <a 
                href="mailto:lapqchu@gmail.com"
                className="flex items-center gap-2 px-8 py-4 bg-sage text-primary-foreground rounded-sm font-body text-sm font-medium hover:bg-sage-light transition-colors duration-300 shadow-[0_4px_20px_hsl(185_35%_45%_/_0.35)]"
              >
                <Mail size={16} />
                Get in Touch
              </a>
              <a 
                href="tel:+4407397288999"
                className="flex items-center gap-2 px-8 py-4 border border-foreground/80 text-foreground rounded-sm font-body text-sm font-medium hover:bg-foreground/10 transition-colors duration-300 backdrop-blur-sm"
              >
                <Phone size={16} />
                Call Me
              </a>
            </div>
            
            <div className="pt-8 border-t border-foreground/30">
              <p className="font-body text-sm text-foreground/80 font-light">
                © {new Date().getFullYear()} Isaac Chu. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
