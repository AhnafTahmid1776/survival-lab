import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/61400000000"; // Replace with actual WhatsApp number

const EngagementSection = () => {
  return (
    <section className="sl-section">
      <div className="sl-container">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="sl-space-block"
        >
          <h2 className="sl-heading-lg">
            There is no price on this page.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Minimum Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="sl-card flex flex-col"
          >
            <p className="sl-caption sl-space-element">Minimum Engagement</p>
            <h3 className="sl-heading-md mb-4">
              For people who need direction, not motivation.
            </h3>
            
            <div className="flex-1">
              <ul className="space-y-3 mb-8">
                <li className="sl-body-sm flex items-start gap-3">
                  <span className="text-sl-accent mt-1">—</span>
                  <span>Diagnostic</span>
                </li>
                <li className="sl-body-sm flex items-start gap-3">
                  <span className="text-sl-accent mt-1">—</span>
                  <span>Structure</span>
                </li>
                <li className="sl-body-sm flex items-start gap-3">
                  <span className="text-sl-accent mt-1">—</span>
                  <span>Clear execution window</span>
                </li>
              </ul>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sl-button w-full text-center"
            >
              Request details on WhatsApp
            </a>
          </motion.div>

          {/* Maximum Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="sl-card-highlighted flex flex-col"
          >
            <p className="sl-caption sl-accent-text sl-space-element">Maximum Engagement</p>
            <h3 className="sl-heading-md mb-4">
              For people navigating high-stakes transitions.
            </h3>
            
            <div className="flex-1">
              <ul className="space-y-3 mb-8">
                <li className="sl-body-sm flex items-start gap-3">
                  <span className="text-sl-accent mt-1">—</span>
                  <span>Everything above</span>
                </li>
                <li className="sl-body-sm flex items-start gap-3">
                  <span className="text-sl-accent mt-1">—</span>
                  <span>Ongoing feedback</span>
                </li>
                <li className="sl-body-sm flex items-start gap-3">
                  <span className="text-sl-accent mt-1">—</span>
                  <span>Decision-level guidance</span>
                </li>
              </ul>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sl-button-primary w-full text-center"
            >
              Request eligibility on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
