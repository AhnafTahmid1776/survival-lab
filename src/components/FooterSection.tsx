import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+8801648904445";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`;

const FooterSection = () => {
  return (
    <footer className="sl-section-tight border-t border-sl-divider">
      <div className="sl-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          {/* Logo / Name */}
          <div>
            <p className="text-lg font-light tracking-tight text-sl-text-primary mb-2 sl-text-glow cursor-default">
              Survival Lab
            </p>
            <p className="sl-body-sm">Sydney</p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <a
              href="#newsletter"
              className="sl-body-sm text-sl-text-secondary hover:text-sl-accent transition-colors duration-300 sl-text-hover"
            >
              Newsletter
            </a>
            <a
              href={`${WHATSAPP_LINK}?text=Hi, I have a question about Survival Lab.`}
              target="_blank"
              rel="noopener noreferrer"
              className="sl-body-sm text-sl-text-secondary hover:text-sl-accent transition-colors duration-300 flex items-center gap-2 group"
            >
              <MessageCircle size={16} className="group-hover:text-green-500 transition-colors" />
              <span className="sl-text-hover">WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-12 pt-6 border-t border-sl-divider flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <p className="sl-body-sm text-sl-text-muted">
            © {new Date().getFullYear()} Survival Lab
          </p>
          <p className="sl-body-sm text-sl-text-muted">
            {WHATSAPP_NUMBER}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
