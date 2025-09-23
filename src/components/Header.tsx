import { useState } from "react";
import { Search, Menu, X, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Movies", href: "#movies" },
    { name: "Reviews", href: "#reviews" },
    { name: "Theaters", href: "#theaters" },
    { name: "Showtimes", href: "#showtimes" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Popfiex
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-sm flex-1 mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search movies, actors, reviews..."
                className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-4 h-4" />
            </Button>
            <Button 
              size="sm"
              className="hidden md:flex bg-gradient-gold hover:shadow-gold text-primary-foreground border-0"
            >
              Sign In
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md border-t border-border/50">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Input
                  placeholder="Search movies..."
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
                <Button className="w-full bg-gradient-gold text-primary-foreground border-0">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}