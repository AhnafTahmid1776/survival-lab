import { motion } from "framer-motion";

const FilterSection = () => {
  const checklistItems = [
    "I can execute without hand-holding",
    "I'm willing to drop distractions",
    "I value clarity over comfort",
  ];

  return (
    <section className="sl-section">
      <div className="sl-container max-w-3xl">
        {/* Main copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="sl-space-block"
        >
          <h2 className="sl-heading-lg mb-6">
            Survival Lab is not for everyone.
          </h2>
          <p className="sl-body">
            If you want shortcuts, templates, or validation — don't contact.
          </p>
        </motion.div>

        {/* Checklist */}
        <div className="space-y-4 pt-8 border-t border-sl-divider">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <div className="w-4 h-4 border border-sl-divider flex items-center justify-center">
                <div className="w-2 h-2 bg-sl-accent opacity-60" />
              </div>
              <p className="sl-body-sm text-sl-text-secondary">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
