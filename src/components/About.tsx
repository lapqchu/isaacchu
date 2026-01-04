import { motion } from "framer-motion";
import professionalPhoto from "@/assets/professional.jpg";
import snowboardPhoto from "@/assets/snowboard.jpg";
import desertPhoto from "@/assets/desert.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-earth-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Professional Photo and Adventure Photos */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Professional Headshot */}
            <div className="relative max-w-[240px] md:max-w-[280px] mx-auto lg:mx-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img 
                  src={professionalPhoto}
                  alt="Isaac Chu - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-sage/30 rounded-sm -z-10" />
            </div>

            {/* Adventure Photos */}
            <div className="space-y-6 pt-4">
              <p className="text-sage font-body text-xs uppercase tracking-[0.2em] font-light">
                Life Beyond Work
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-sm group">
                  <img 
                    src={snowboardPhoto}
                    alt="Isaac snowboarding in the mountains"
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth/90 to-transparent p-3">
                    <p className="font-display text-sm text-foreground">Alpine Adventures</p>
                    <p className="font-body text-xs text-sand-muted font-light">Snowboarding in the Alps</p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-sm group">
                  <img 
                    src={desertPhoto}
                    alt="Isaac in the Sahara Desert"
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth/90 to-transparent p-3">
                    <p className="font-display text-sm text-foreground">Desert Exploration</p>
                    <p className="font-body text-xs text-sand-muted font-light">Sahara Desert, Morocco</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sage font-body text-sm uppercase tracking-[0.3em] mb-4 font-light">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              A Journey Defined by <span className="text-gradient-sage">Curiosity</span>
            </h2>
            
            <div className="space-y-6 font-body text-sand-muted leading-relaxed font-light">
              <p>
                Born and raised in Hong Kong with formative years spent in the UK, I've developed a perspective shaped by both Eastern and Western cultures. That global upbringing sparked a lasting curiosity about the world of financial markets and investing—alongside a parallel interest in science and technology and how innovation shapes the way we live and work.
              </p>
              <p>
                After graduating from Imperial College London with a Master's in Mechanical Engineering, I pivoted to pursue my passion in financial markets. This unconventional path gave me a quantitative foundation that I now apply daily in my role as a Graduate Analyst at Barclays' EM Macro Trading desk.
              </p>
              <p>
                Beyond the trading floor, I find balance through music—I hold distinctions in both piano and guitar—and outdoor pursuits like snowboarding and wakesurfing. These interests reflect my belief that excellence in any field requires both discipline and the ability to embrace the present moment.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 pt-8 border-t border-border"
            >
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="font-display text-3xl text-sage mb-1">5+</p>
                  <p className="font-body text-sm text-muted-foreground font-light">Experiences Across Industries</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-sage mb-1">5</p>
                  <p className="font-body text-sm text-muted-foreground font-light">Languages Spoken</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-sage mb-1">22</p>
                  <p className="font-body text-sm text-muted-foreground font-light">Countries Visited</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-sage mb-1">2</p>
                  <p className="font-body text-sm text-muted-foreground font-light">Instruments Played</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
