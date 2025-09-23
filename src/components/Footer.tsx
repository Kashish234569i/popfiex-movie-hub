import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const footerSections = [
    {
      title: "Movies",
      links: ["Now Playing", "Coming Soon", "Top Rated", "Genres"]
    },
    {
      title: "Theaters",
      links: ["Find Theaters", "Showtimes", "IMAX", "Premium Experience"]
    },
    {
      title: "Community",
      links: ["Reviews", "Discussions", "User Ratings", "Watchlists"]
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-card to-cinema-blue-light border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              Popfiex
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your ultimate destination for movie reviews, ratings, and cinema reservations. 
              Discover great films and book unforgettable experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-cinema-gold hover:bg-cinema-gold/10 transition-colors"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-cinema-gold transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest movie news, reviews, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-background border border-border/50 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button 
                size="sm"
                className="bg-gradient-gold hover:shadow-gold text-primary-foreground border-0 px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Popfiex. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cinema-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cinema-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cinema-gold transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}