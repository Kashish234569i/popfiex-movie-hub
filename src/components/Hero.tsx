import { Play, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-cinema.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Cinema Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <Badge className="mb-6 bg-gradient-gold text-primary-foreground border-0 px-4 py-2">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Now Playing
          </Badge>
          
          {/* Title */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-cinema-gold to-foreground bg-clip-text text-transparent leading-tight">
            Welcome to Popfiex
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover the latest blockbusters, read authentic reviews, and book your perfect cinema experience. 
            Your gateway to unforgettable movie moments.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cinema-gold" />
              <span>500+ Movies Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-cinema-gold" />
              <span>50k+ Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-cinema-gold" />
              <span>25+ Theaters</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-gold hover:shadow-gold text-primary-foreground border-0 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Browse Movies
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 hover:border-primary/50 hover:bg-card/50 px-8 py-3 text-lg transition-all duration-300"
            >
              Read Reviews
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-cinema-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-cinema-purple/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
}