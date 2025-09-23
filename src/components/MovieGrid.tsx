import { MovieCard } from "./MovieCard";
import moviePoster1 from "@/assets/movie-poster-1.jpg";
import moviePoster2 from "@/assets/movie-poster-2.jpg";
import moviePoster3 from "@/assets/movie-poster-3.jpg";

const movies = [
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
  }
];

export function MovieGrid() {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-cinema-gold to-foreground bg-clip-text text-transparent">
            Now Playing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest blockbusters and critically acclaimed films showing in theaters near you.
          </p>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              onClick={() => {
                // Handle movie click - would navigate to movie details
                console.log(`Clicked on ${movie.title}`);
              }}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-card hover:bg-card border border-border/50 hover:border-primary/50 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-cinema">
            Load More Movies
          </button>
        </div>
      </div>
    </section>
  );
}