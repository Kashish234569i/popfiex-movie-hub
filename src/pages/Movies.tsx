import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MovieCard } from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import moviePoster1 from "@/assets/movie-poster-1.jpg";
import moviePoster2 from "@/assets/movie-poster-2.jpg";
import moviePoster3 from "@/assets/movie-poster-3.jpg";

const allMovies = [
  {
    id: "1",
    title: "Thunder Strike",
    poster: moviePoster1,
    rating: 8.5,
    genre: "Action",
    duration: "2h 15m",
    showtimes: ["2:00 PM", "5:30 PM", "8:45 PM", "11:00 PM"]
  },
  {
    id: "2", 
    title: "Midnight in Paris",
    poster: moviePoster2,
    rating: 9.1,
    genre: "Romance",
    duration: "1h 52m",
    showtimes: ["1:30 PM", "4:15 PM", "7:00 PM", "9:30 PM"]
  },
  {
    id: "3",
    title: "Quantum Edge",
    poster: moviePoster3,
    rating: 8.8,
    genre: "Sci-Fi",
    duration: "2h 28m",
    showtimes: ["12:00 PM", "3:30 PM", "7:15 PM", "10:45 PM"]
  },
  // Duplicate for more content
  {
    id: "4",
    title: "Thunder Strike",
    poster: moviePoster1,
    rating: 8.5,
    genre: "Action",
    duration: "2h 15m",
    showtimes: ["2:00 PM", "5:30 PM", "8:45 PM"]
  },
  {
    id: "5",
    title: "Midnight in Paris", 
    poster: moviePoster2,
    rating: 9.1,
    genre: "Romance",
    duration: "1h 52m",
    showtimes: ["1:30 PM", "4:15 PM", "7:00 PM"]
  },
  {
    id: "6",
    title: "Quantum Edge",
    poster: moviePoster3,
    rating: 8.8,
    genre: "Sci-Fi",
    duration: "2h 28m",
    showtimes: ["12:00 PM", "3:30 PM", "7:15 PM"]
  },
  {
    id: "7",
    title: "Thunder Strike",
    poster: moviePoster1,
    rating: 8.5,
    genre: "Action", 
    duration: "2h 15m",
    showtimes: ["2:00 PM", "5:30 PM", "8:45 PM"]
  },
  {
    id: "8",
    title: "Midnight in Paris",
    poster: moviePoster2,
    rating: 9.1,
    genre: "Romance",
    duration: "1h 52m",
    showtimes: ["1:30 PM", "4:15 PM", "7:00 PM"]
  }
];

const genres = ["All", "Action", "Romance", "Sci-Fi", "Comedy", "Drama", "Horror", "Thriller"];

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");

  const filteredMovies = allMovies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-cinema-gold to-foreground bg-clip-text text-transparent">
            Discover Movies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our complete collection of movies across all genres. Find your next favorite film or rediscover classic masterpieces.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-6 lg:px-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search and Genre Filter */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
                />
              </div>
              
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-40 bg-card/50 border-border/50">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-card/50 border-border/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="date">Release Date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode and Filter Button */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-gradient-gold text-primary-foreground border-0" : ""}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-gradient-gold text-primary-foreground border-0" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex gap-2 mt-4">
            {selectedGenre !== "All" && (
              <Badge variant="secondary" className="bg-cinema-gold/20 text-cinema-gold border-cinema-gold/30">
                {selectedGenre}
                <button 
                  onClick={() => setSelectedGenre("All")}
                  className="ml-2 hover:text-cinema-gold-light"
                >
                  ×
                </button>
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary" className="bg-cinema-gold/20 text-cinema-gold border-cinema-gold/30">
                "{searchQuery}"
                <button 
                  onClick={() => setSearchQuery("")}
                  className="ml-2 hover:text-cinema-gold-light"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">
              {filteredMovies.length} Movies Found
            </h2>
          </div>

          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }>
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                {...movie}
                onClick={() => {
                  console.log(`Clicked on ${movie.title}`);
                }}
              />
            ))}
          </div>

          {filteredMovies.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No movies found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or browse all movies.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGenre("All");
                }}
                className="bg-gradient-gold text-primary-foreground border-0"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}