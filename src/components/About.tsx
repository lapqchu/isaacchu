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
              {/* Decorative border - offset behind */}
              <div className="absolute top-3 left-3 w-full h-full border border-sage/40 rounded-sm" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img 
                  src={professionalPhoto}
                  alt="Isaac Chu - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
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
                Born and raised in Hong Kong, I moved to the UK for high school and later studied Mechanical Engineering at Imperial College London. I’m now a Graduate Analyst specialising in EM Macro trading at Barclays.
              </p>
              <p>
                During university, I focused on robotics design and the clean energy transition, which gave me a strong technical and analytical foundation. Alongside this, I gained exposure across hedge funds, family offices, consulting, quantitative trading, and wealth management. Having worked across both technical and commercial settings—and across East and the West - I enjoy applying my skill set wherever I can add value, whether that’s analysing a problem, managing risk, or building better ways of working.
              </p>
              <p>
                Outside of work, I hold a distinction in piano and enjoy snowboarding, wakesurfing, golf, 10-pin bowling, and bodybuilding. I speak fluent English, Mandarin, Cantonese and conversational Japanese. Please don't hesitate to send me a message if you'd like to connect - I'd be thrilled to hear from you!
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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
