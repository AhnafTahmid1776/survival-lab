import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnose",
      description: "Readiness, focus, realism",
    },
    {
      number: "02",
      title: "Structure",
      description: "What to do / not do",
    },
    {
      number: "03",
      title: "Execute",
      description: "30–60 day window",
    },
    {
      number: "04",
      title: "Review",
      description: "Feedback & correction",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="sl-section">
      <div className="sl-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="sl-space-block"
        >
          <p className="sl-caption sl-space-element text-sl-moss-light">Process</p>
          <h2 className="sl-heading-lg sl-text-glow cursor-default">
            How it works
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-sl-divider" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative pl-8 md:pl-20 group"
              >
                {/* Number indicator */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-2 h-2 rounded-full bg-sl-accent group-hover:shadow-[0_0_10px_hsl(42_50%_45%/0.6)] transition-shadow duration-300" />
                
                {/* Content */}
                <div className="space-y-2">
                  <p className="sl-caption sl-accent-text">{step.number}</p>
                  <h3 className="sl-heading-md sl-text-hover cursor-default">{step.title}</h3>
                  <p className="sl-body-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
