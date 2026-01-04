import { motion } from "framer-motion";
import { Code, Languages, Music, Mountain } from "lucide-react";
import snowboardPhoto from "@/assets/snowboard.jpg";
import desertPhoto from "@/assets/desert.jpg";

const skillCategories = [
  {
    icon: Code,
    title: "Technical Skills",
    skills: ["Python", "R Programming", "C", "MATLAB", "CAD", "FEA", "CFD", "Microsoft Office Suite"],
  },
  {
    icon: Languages,
    title: "Languages",
    skills: ["Cantonese (Native)", "Mandarin (Fluent)", "English (Fluent)", "Japanese (GCSE A*)", "Korean (Level 1 Merit)"],
  },
];

const interests = [
  { icon: Music, items: ["ABRSM Grade 8 Piano (Distinction)", "RockSchool Grade 5 Electric Guitar (Merit)"] },
  { icon: Mountain, items: ["Wakesurfing", "Snowboarding", "Mountain-Biking", "10-Pin Bowling"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sage font-body text-sm uppercase tracking-[0.3em] mb-4 font-light">
            Capabilities & Passions
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Skills & Interests
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glass rounded-sm p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-sage/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-display text-xl text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <motion.span
                    key={sIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + sIndex * 0.05 }}
                    className="px-4 py-2 bg-secondary rounded-sm text-sm font-body text-sand-muted border border-border hover:border-sage/30 transition-colors duration-300 font-light"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Interests with Adventure Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-glass rounded-sm p-6 md:p-8"
        >
          <h3 className="font-display text-xl text-foreground mb-6">
            Personal Interests
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {interests.map((interest, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-4">
                  <interest.icon className="w-5 h-5 text-sage" />
                  <span className="font-body text-sm uppercase tracking-wider text-muted-foreground font-light">
                    {index === 0 ? "Music" : "Sports & Activities"}
                  </span>
                </div>
                <ul className="space-y-2">
                  {interest.items.map((item, iIndex) => (
                    <li 
                      key={iIndex}
                      className="font-body text-sm text-sand-muted flex gap-3 font-light"
                    >
                      <span className="text-sage">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Adventure Photos - Full display */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-border">
            <div className="relative overflow-hidden rounded-sm group aspect-[4/3]">
              <img
                src={snowboardPhoto}
                alt="Isaac snowboarding in the mountains"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth/90 to-transparent p-6">
                <p className="font-display text-xl text-foreground">Alpine Adventures</p>
                <p className="font-body text-sm text-sand-muted font-light">Snowboarding in the Alps</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-sm group aspect-[4/3]">
              <img
                src={desertPhoto}
                alt="Isaac in the Sahara Desert"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth/90 to-transparent p-6">
                <p className="font-display text-xl text-foreground">Desert Exploration</p>
                <p className="font-body text-sm text-sand-muted font-light">Sahara Desert, Morocco</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-body text-sm text-muted-foreground font-light">
              <span className="text-sage">Volunteering:</span> Asia Society Hong Kong, Chaseley Trust UK
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
