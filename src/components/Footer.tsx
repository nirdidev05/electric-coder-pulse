// src/components/Footer.js (or wherever your Footer component resides)
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
interface FooterSectionProps {
  title: string;
  links: { name: string; href: string }[];
}

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div className="space-y-4">
    <h3 className="text-sm font-semibold text-foreground">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
 const t = useTranslation();
 const profileLine = "M1 en Informatique - Lyon 1 • Fraîchement diplômé Ingénieur d'État SI - ESI Alger";

  // Social links - only the 'name' needs translation, not the URLs or Icons.
  // The 'name' here should ideally be the same as the 'label' in contactMethods
  // if you want consistent naming across components.
  const socialLinks = [
    {
      name: t.contact.methods.github, // Re-using translation from contact.methods
      url: 'https://github.com/nirdidev05',
      Icon: Github,
    },
    {
      name: t.contact.methods.linkedin, // Re-using translation from contact.methods
      url: 'https://linkedin.com/in/yourprofile',
      Icon: Linkedin,
    },

    {
      name: t.contact.methods.email, // Re-using translation from contact.methods
      url: 'mailto:your.email@example.com',
      Icon: Mail,
    },
  ];

  // Footer navigation links - map directly to translated strings
  const footerLinks = {
    projects: [
      { name: t.footer.links.projects.viewProjects, href: '#projects' },
      { name: t.footer.links.projects.achievements, href: '#achievements' },
      { name: t.footer.links.projects.resume, href: '/walid\'s CV (1).pdf' },
    ],
    resources: [
      { name: t.footer.links.resources.aboutMe, href: '#about' },
      { name: t.footer.links.resources.techStack, href: '#about' },
      { name: t.footer.links.resources.experience, href: '#about' },
    ],
    contact: [
      { name: t.footer.links.contact.getInTouch, href: '#contact' },
      { name: t.footer.links.contact.github, href: 'https://github.com/nirdidev05' },
      { name: t.footer.links.contact.linkedin, href: 'https://linkedin.com/in/yourprofile' },
    ],
  };

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              {t.footer.brandName} {/* Translated Brand Name */}
            </motion.div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t.footer.tagline} {/* Translated Tagline */}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <FooterSection title={t.footer.sectionTitles.projects} links={footerLinks.projects} />
          <FooterSection title={t.footer.sectionTitles.resources} links={footerLinks.resources} />
          <FooterSection title={t.footer.sectionTitles.contact} links={footerLinks.contact} />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground pt-4">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} {t.footer.copyrightName}</span> {/* Translated Copyright Name */}
            <span>•</span>
            <span>{profileLine}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;