
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-foreground' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: Mail, href: 'mailto:alex@example.com', label: 'Email', color: 'hover:text-red-500' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-500' },
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
            className={`p-2 rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
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
