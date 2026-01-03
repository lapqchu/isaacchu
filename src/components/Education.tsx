import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
}

const education: EducationItem[] = [
  {
    institution: "Imperial College London",
    degree: "MEng Mechanical Engineering",
    period: "Oct 2020 – Jun 2024",
    location: "UK",
    details: [
      "Second-Upper Class Honours",
      "Vice President Global Markets & Head of Corporate Relations - Imperial College Finance Society",
      "Partnered with Morgan Stanley in portfolio management competition, scored 98th percentile",
      "Citi Greater Bay Area Talent Program participant",
    ],
  },
  {
    institution: "Stanford University",
    degree: "Credit-bearing Summer College",
    period: "Jun – Aug 2019",
    location: "USA",
    details: [
      "Cumulative GPA: 3.78/4.00",
    ],
  },
  {
    institution: "Eastbourne College",
    degree: "GCE Advanced Level",
    period: "Sep 2016 – Jul 2020",
    location: "UK",
    details: [
      "A* in Mathematics and Physics",
      "A in Chemistry and Further Mathematics",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-4">
            Academic Background
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Education
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glass rounded-lg p-6 md:p-8 group hover:border-gold/30 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                        {edu.institution}
                      </h3>
                      <p className="font-body text-gold">{edu.degree}</p>
                    </div>
                    <div className="md:text-right">
                      <p className="font-body text-sm text-muted-foreground">{edu.period}</p>
                      <p className="font-body text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {edu.details.map((detail, dIndex) => (
                      <li 
                        key={dIndex}
                        className="font-body text-sm md:text-base text-cream-muted flex gap-3"
                      >
                        <span className="text-gold flex-shrink-0">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
