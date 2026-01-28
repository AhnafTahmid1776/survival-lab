import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/61400000000"; // Replace with actual WhatsApp number

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
            <p className="text-lg font-light tracking-tight text-sl-text-primary mb-2">
              Survival Lab
            </p>
            <p className="sl-body-sm">Sydney</p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <a
              href="#newsletter"
              className="sl-body-sm text-sl-text-secondary hover:text-sl-text-primary transition-colors duration-300"
            >
              Newsletter
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sl-body-sm text-sl-text-secondary hover:text-sl-text-primary transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-12 pt-6 border-t border-sl-divider"
        >
          <p className="sl-body-sm text-sl-text-muted">
            © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
