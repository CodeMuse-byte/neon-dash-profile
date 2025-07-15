
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted/30 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label={social.label}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
