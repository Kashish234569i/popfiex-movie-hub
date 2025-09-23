import { Star, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  genre: string;
  duration: string;
  showtimes: string[];
  onClick?: () => void;
}

export function MovieCard({ title, poster, rating, genre, duration, showtimes, onClick }: MovieCardProps) {
  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-cinema hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img 
          src={poster} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {genre}
            </Badge>
            <div className="flex items-center gap-1 text-cinema-gold">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{showtimes.length} shows</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 pt-2">
          {showtimes.slice(0, 3).map((time, index) => (
            <Badge key={index} variant="outline" className="text-xs px-2 py-1">
              {time}
            </Badge>
          ))}
          {showtimes.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-1">
              +{showtimes.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}