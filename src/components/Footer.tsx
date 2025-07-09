import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';  // Note: Changed GitHub to Github to match lucide-react exports

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/nirdidev05',
    Icon: Github,  // Changed to match the import
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    Icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourprofile',
    Icon: Twitter,
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    Icon: Mail,
  },
];

const footerLinks = {
  projects: [
    { name: 'AI Projects', href: '/projects/ai' },
    { name: 'Research Papers', href: '/research' },
    { name: 'Open Source', href: '/opensource' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Publications', href: '/publications' },
    { name: 'Tech Stack', href: '/stack' },
  ],
  contact: [
    { name: 'About Me', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume', href: '/resume' },
  ],
};

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
              BENBOUTA.AI
            </motion.div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Pioneering AI solutions with a focus on responsible innovation and real-world impact in North Africa and beyond.
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
          <FooterSection title="Projects" links={footerLinks.projects} />
          <FooterSection title="Resources" links={footerLinks.resources} />
          <FooterSection title="Contact" links={footerLinks.contact} />
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
            <span>© {new Date().getFullYear()} BENBOUTA Walid</span>
            <span>•</span>
            <span>AI Engineer</span>
            <span>•</span>
            <span>ESI Graduate</span>
          </div>
          
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;