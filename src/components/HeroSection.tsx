import { motion } from "framer-motion";

const HeroSection = () => {
  const lines = [
    "Survival inside competitive systems is not about talent.",
    "It's about structure.",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
      },
    },
  };

  const subtextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 1.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="sl-section relative overflow-hidden">
      <div className="sl-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Main headline */}
          <div className="mb-12 md:mb-16">
            {lines.map((line, index) => (
              <motion.h1
                key={index}
                variants={lineVariants}
                className="sl-heading-xl mb-2"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            variants={subtextVariants}
            className="sl-body max-w-2xl text-sl-text-secondary"
          >
            Survival Lab is for people who already work hard — and still feel lost.
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle gradient at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, hsl(0 0% 3%), transparent)",
        }}
      />
    </section>
  );
};

export default HeroSection;
