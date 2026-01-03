import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Play, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const roles = ["Trader", "Engineer", "Body Builder", "Blogger", "Foodie"];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden pb-32">
      {/* Video placeholder background - ready for stock video */}
      <div className="absolute inset-0 video-placeholder">
        {/* Replace this div with a video element when ready:
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="your-video.mp4" type="video/mp4" />
            </video>
        */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-muted-foreground/50">
            <Play size={48} className="mx-auto mb-4 opacity-30" />
            <p className="font-body text-sm tracking-wider uppercase opacity-50">Video Background Placeholder</p>
          </div>
        </div>
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      
      {/* Decorative organic shapes */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-terracotta/5 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sage font-body text-sm md:text-base uppercase tracking-[0.4em] mb-6 font-light h-6">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight"
        >
          Isaac <span className="text-gradient-sage">Chu</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          EM Macro Trader at Barclays | Imperial College London
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground"
        >
          <a 
            href="mailto:lapqchu@gmail.com" 
            className="flex items-center gap-2 hover:text-sage transition-colors duration-300"
          >
            <Mail size={16} className="text-sage" />
            <span className="font-body font-light">lapqchu@gmail.com</span>
          </a>
          <a 
            href="tel:+85254181133" 
            className="flex items-center gap-2 hover:text-sage transition-colors duration-300"
          >
            <Phone size={16} className="text-sage" />
            <span className="font-body font-light">+852 5418 1133</span>
          </a>
          <a 
            href="tel:+4407397288999" 
            className="flex items-center gap-2 hover:text-sage transition-colors duration-300"
          >
            <Phone size={16} className="text-sage" />
            <span className="font-body font-light">+44 07397 288999</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/isaac-chu-b10242196/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-sage transition-colors duration-300"
          >
            <Linkedin size={16} className="text-sage" />
            <span className="font-body font-light">LinkedIn</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-sage" />
            <span className="font-body font-light">Hong Kong / London</span>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - positioned with more space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-sage/40 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-sage rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
