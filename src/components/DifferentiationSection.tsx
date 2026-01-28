import { motion } from "framer-motion";

const DifferentiationSection = () => {
  const leftItems = ["Tutorials", "Certificates", "Skill stacking"];
  const rightItems = ["Direction", "Execution windows", "Feedback loops"];

  return (
    <section className="sl-section">
      <div className="sl-container">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="sl-heading-lg sl-space-block sl-text-glow cursor-default"
        >
          Survival Lab is not an AI/ML course at all.
        </motion.h2>

        {/* Three column layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center"
        >
          {/* Left column - muted */}
          <div className="space-y-4">
            {leftItems.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="sl-body text-sl-text-muted line-through decoration-sl-divider cursor-default hover:text-sl-text-secondary transition-colors duration-300"
              >
                {item}
              </motion.p>
            ))}
          </div>

          {/* Center divider */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="hidden md:flex flex-col items-center gap-6 origin-center"
          >
            <div className="w-px h-32 bg-sl-divider" />
            <p className="sl-caption text-center whitespace-nowrap text-sl-accent">
              Most people stop here
            </p>
            <div className="w-px h-32 bg-sl-divider" />
          </motion.div>

          {/* Mobile divider */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="md:hidden flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-sl-divider" />
            <p className="sl-caption text-sl-accent">Most people stop here</p>
            <div className="h-px flex-1 bg-sl-divider" />
          </motion.div>

          {/* Right column - highlighted */}
          <div className="space-y-4">
            {rightItems.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                className="sl-body text-sl-text-primary sl-text-hover cursor-default"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
