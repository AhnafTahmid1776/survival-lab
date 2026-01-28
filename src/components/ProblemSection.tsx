import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import NodesVisualization from "./NodesVisualization";

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const problems = [
    { action: "Reading papers", result: "no direction" },
    { action: "Writing SOPs", result: "no clarity" },
    { action: "Learning ML", result: "no positioning" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="sl-section relative">
      <motion.div style={{ opacity }} className="sl-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          {/* Problem statements */}
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <p className="sl-body">
                  <span className="text-sl-text-primary">{problem.action}</span>
                  <span className="mx-3 text-sl-text-muted">→</span>
                  <span className="sl-accent-text">{problem.result}</span>
                </p>
              </motion.div>
            ))}

            <motion.p
              variants={itemVariants}
              className="sl-body-sm pt-8 border-t border-sl-divider"
            >
              Effort without structure dissolves into noise.
            </motion.p>
          </div>

          {/* Three.js visualization */}
          <div className="h-[400px] lg:h-[500px] relative">
            <NodesVisualization scrollProgress={scrollYProgress} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
