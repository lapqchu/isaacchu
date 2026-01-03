import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-padding bg-background border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
            Open to discussing opportunities in trading, quantitative finance, and investment banking.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="mailto:lapqchu@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gold text-primary-foreground rounded-full font-body text-sm font-medium hover:bg-gold-light transition-colors duration-300 shadow-[0_4px_20px_hsl(43_45%_59%_/_0.3)]"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a 
              href="tel:+85254181133"
              className="flex items-center gap-2 px-6 py-3 border border-gold text-gold rounded-full font-body text-sm font-medium hover:bg-gold/10 transition-colors duration-300"
            >
              <Phone size={16} />
              Call Me
            </a>
          </div>
          
          <div className="pt-8 border-t border-border">
            <p className="font-body text-sm text-muted-foreground">
              © {new Date().getFullYear()} Isaac Chu. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
