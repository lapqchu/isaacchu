import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Barclays",
    role: "Graduate Analyst",
    location: "UK",
    period: "Aug 2024 – Present",
    highlights: [
      "Junior trader in EM Macro Trading desk with exposure to CE3, EM Asia, MENA, Russia, and African regions",
      "Engaged in market making and pricing with RM, Corporate, and HF clients on FX spot, forwards, NDFs and swaps",
      "Contributed to running a systematic book with realised Sharpe Ratio of 1.7",
      "Built macro screeners on signals, economic releases, historic correlations and curve shapes",
    ],
  },
  {
    company: "J.P. Morgan",
    role: "Summer Analyst",
    location: "UK",
    period: "Jun – Aug 2024",
    highlights: [
      "Worked under EM Rates Exotics and Hybrids, shadowed across STIR, FX, Swaptions, Structuring and Private Credit desks",
      "Backtested bid-offer spread effects on European swaptions realised volatility",
      "Built Excel pricers for FX options, IRS, and FX swaps; constructed zero and forward curves",
      "Presented weekly trade ideas to CEM desks including PLN 6y2ync1x callable bond",
    ],
  },
  {
    company: "Brevan Howard",
    role: "Summer Analyst",
    location: "UK",
    period: "Jul – Aug 2023",
    highlights: [
      "Designed trade validation toolkit via factor models with ML and sentiment analysis",
      "Enhanced portfolio Sharpe Ratio from 1.09 to 3.10 through model improvements",
      "Proposed DV01 neutral STIR and forex trades via quantitative and relative value methods",
      "Researched macroeconomic trends across EM and DM markets",
    ],
  },
  {
    company: "Tsangs Group",
    role: "Summer Analyst",
    location: "Hong Kong",
    period: "Aug – Sep 2022",
    highlights: [
      "Contributed to US$205 million SPAC merger of TGVC and The Flexi Group",
      "Screened and analysed 90+ ventures in engineering, biopharmaceutical, and technology sectors",
      "Assisted in raising over US$50 million through SPVs and SAFE",
    ],
  },
  {
    company: "McKinsey, Barclays, Optiver",
    role: "Spring Weeks",
    location: "UK",
    period: "Apr 2022",
    highlights: [
      "Led team of 6 to increase telecoms revenue by 30% through digitalisation strategies",
      "Analysed M&A opportunities evaluating P/E ratios, EBITDA, and financial projections",
      "Built dual-listing, delta-neutral market-making algorithm",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-charcoal-light">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-4">
            Career Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_12px_hsl(43_45%_59%_/_0.5)]" />
                
                <div className="card-glass rounded-lg p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="font-body text-gold">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-body text-sm text-muted-foreground">{exp.period}</p>
                      <p className="font-body text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li 
                        key={hIndex}
                        className="font-body text-sm md:text-base text-cream-muted leading-relaxed flex gap-3"
                      >
                        <span className="text-gold mt-1.5 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
