import { motion } from "framer-motion";
import professionalPhoto from "@/assets/professional.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-earth-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm max-w-sm mx-auto">
              <img 
                src={professionalPhoto}
                alt="Isaac Chu - Professional Portrait"
                className="w-full h-full object-cover"
              />
              {/* Elegant border overlay */}
              <div className="absolute inset-4 border border-sage/30 rounded-sm pointer-events-none" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-sage/20 rounded-sm -z-10" />
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
                Born and raised in Hong Kong with formative years spent in the UK, I’ve developed a perspective shaped by both Eastern and Western cultures. That global upbringing sparked a lasting curiosity about the world of financial markets and investing—alongside a parallel interest in science and technology and how innovation shapes the way we live and work.
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
