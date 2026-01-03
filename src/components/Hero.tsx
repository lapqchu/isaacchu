import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal-light opacity-80" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-gold font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6">
            Finance Professional
          </p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 leading-tight"
        >
          Isaac <span className="text-gradient-gold">Chu</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Graduate Analyst at Barclays | EM Macro Trading
          <br className="hidden md:block" />
          Imperial College London MEng
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground"
        >
          <a 
            href="mailto:lapqchu@gmail.com" 
            className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
          >
            <Mail size={16} className="text-gold" />
            <span className="font-body">lapqchu@gmail.com</span>
          </a>
          <a 
            href="tel:+85254181133" 
            className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
          >
            <Phone size={16} className="text-gold" />
            <span className="font-body">+852 5418 1133</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gold" />
            <span className="font-body">Hong Kong / London</span>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-gold/40 flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
