import { motion } from "framer-motion";
import { Code, Languages, Music, Snowflake } from "lucide-react";

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
  { icon: Snowflake, items: ["Wakesurfing", "Snowboarding", "Mountain-Biking", "10-Pin Bowling"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-charcoal-light">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-4">
            Capabilities & Passions
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
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
              className="card-glass rounded-lg p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
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
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-body text-cream-muted border border-border hover:border-gold/30 transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-glass rounded-lg p-6 md:p-8"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Personal Interests
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-4">
                  <interest.icon className="w-5 h-5 text-gold" />
                  <span className="font-body text-sm uppercase tracking-wider text-muted-foreground">
                    {index === 0 ? "Music" : "Sports & Activities"}
                  </span>
                </div>
                <ul className="space-y-2">
                  {interest.items.map((item, iIndex) => (
                    <li 
                      key={iIndex}
                      className="font-body text-sm text-cream-muted flex gap-3"
                    >
                      <span className="text-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-body text-sm text-muted-foreground">
              <span className="text-gold">Volunteering:</span> Asia Society Hong Kong, Chaseley Trust UK
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
