import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import bgIgloos from "@/assets/bg-igloos.jpg";

const Footer = () => {
  return (
    <footer className="relative section-padding overflow-hidden">
      {/* Background image - dimmed */}
      <div className="absolute inset-0">
        <img 
          src={bgIgloos}
          alt="Winter landscape background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-earth/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/70 to-earth/50" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-md mx-auto font-light">
            Open to discussing opportunities in trading, quantitative finance, and investment banking.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a 
              href="mailto:lapqchu@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-sage text-primary-foreground rounded-sm font-body text-sm font-medium hover:bg-sage-light transition-colors duration-300 shadow-[0_4px_20px_hsl(75_20%_45%_/_0.25)]"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a 
              href="tel:+85254181133"
              className="flex items-center gap-2 px-8 py-4 border border-sage text-sage rounded-sm font-body text-sm font-medium hover:bg-sage/10 transition-colors duration-300"
            >
              <Phone size={16} />
              Call Me
            </a>
          </div>
          
          <div className="pt-8 border-t border-border/50">
            <p className="font-body text-sm text-muted-foreground font-light">
              © {new Date().getFullYear()} Isaac Chu. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
