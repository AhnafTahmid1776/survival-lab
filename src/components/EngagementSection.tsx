import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+8801648904445";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`;

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
          <h2 className="sl-heading-lg sl-text-glow cursor-default">
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
            <p className="sl-caption sl-space-element text-sl-moss-light">Minimum Engagement</p>
            <h3 className="sl-heading-md mb-4 sl-text-hover cursor-default">
              For people who need direction, not motivation.
            </h3>
            
            <div className="flex-1">
              <ul className="space-y-3 mb-8">
                <li className="sl-body-sm flex items-start gap-3 group">
                  <span className="text-sl-accent mt-1 group-hover:text-sl-accent-glow transition-colors">—</span>
                  <span className="group-hover:text-sl-text-secondary transition-colors">Diagnostic</span>
                </li>
                <li className="sl-body-sm flex items-start gap-3 group">
                  <span className="text-sl-accent mt-1 group-hover:text-sl-accent-glow transition-colors">—</span>
                  <span className="group-hover:text-sl-text-secondary transition-colors">Structure</span>
                </li>
                <li className="sl-body-sm flex items-start gap-3 group">
                  <span className="text-sl-accent mt-1 group-hover:text-sl-accent-glow transition-colors">—</span>
                  <span className="group-hover:text-sl-text-secondary transition-colors">Clear execution window</span>
                </li>
              </ul>
            </div>

            <a
              href={`${WHATSAPP_LINK}?text=Hi, I'm interested in the Minimum Engagement option at Survival Lab.`}
              target="_blank"
              rel="noopener noreferrer"
              className="sl-button-whatsapp w-full"
            >
              <MessageCircle size={18} />
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
            <h3 className="sl-heading-md mb-4 sl-text-hover cursor-default">
              For people navigating high-stakes transitions.
            </h3>
            
            <div className="flex-1">
              <ul className="space-y-3 mb-8">
                <li className="sl-body-sm flex items-start gap-3 group">
                  <span className="text-sl-accent mt-1 group-hover:text-sl-accent-glow transition-colors">—</span>
                  <span className="group-hover:text-sl-text-secondary transition-colors">Everything above</span>
                </li>
                <li className="sl-body-sm flex items-start gap-3 group">
                  <span className="text-sl-accent mt-1 group-hover:text-sl-accent-glow transition-colors">—</span>
                  <span className="group-hover:text-sl-text-secondary transition-colors">Ongoing feedback</span>
                </li>
                <li className="sl-body-sm flex items-start gap-3 group">
                  <span className="text-sl-accent mt-1 group-hover:text-sl-accent-glow transition-colors">—</span>
                  <span className="group-hover:text-sl-text-secondary transition-colors">Decision-level guidance</span>
                </li>
              </ul>
            </div>

            <a
              href={`${WHATSAPP_LINK}?text=Hi, I'm interested in the Maximum Engagement option at Survival Lab. I'd like to check my eligibility.`}
              target="_blank"
              rel="noopener noreferrer"
              className="sl-button-whatsapp w-full"
            >
              <MessageCircle size={18} />
              Request eligibility on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
