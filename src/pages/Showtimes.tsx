import { useState } from "react";
import { Calendar, Clock, MapPin, Filter, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import moviePoster1 from "@/assets/movie-poster-1.jpg";
import moviePoster2 from "@/assets/movie-poster-2.jpg";
import moviePoster3 from "@/assets/movie-poster-3.jpg";

const showtimesData = [
  {
    id: "1",
    movie: "Thunder Strike",
    poster: moviePoster1,
    duration: "2h 15m",
    rating: "PG-13",
    theaters: [
      {
        name: "Popfiex IMAX Downtown",
        distance: "0.8 miles",
        times: [
          { time: "2:00 PM", type: "IMAX", price: "$18.50", seats: "Available" },
          { time: "5:30 PM", type: "IMAX", price: "$18.50", seats: "Filling Fast" },
          { time: "8:45 PM", type: "IMAX", price: "$20.50", seats: "Available" },
          { time: "11:00 PM", type: "Standard", price: "$14.50", seats: "Available" }
        ]
      },
      {
        name: "Cinema Plaza Westfield", 
        distance: "2.3 miles",
        times: [
          { time: "1:45 PM", type: "4DX", price: "$22.00", seats: "Available" },
          { time: "4:15 PM", type: "Standard", price: "$13.50", seats: "Available" },
          { time: "7:30 PM", type: "4DX", price: "$22.00", seats: "Filling Fast" },
          { time: "10:15 PM", type: "Standard", price: "$13.50", seats: "Available" }
        ]
      }
    ]
  },
  {
    id: "2",
    movie: "Midnight in Paris",
    poster: moviePoster2,
    duration: "1h 52m", 
    rating: "R",
    theaters: [
      {
        name: "Retro Theater Classic",
        distance: "3.1 miles",
        times: [
          { time: "2:30 PM", type: "Classic", price: "$12.00", seats: "Available" },
          { time: "5:00 PM", type: "Classic", price: "$12.00", seats: "Available" },
          { time: "7:45 PM", type: "Wine & Film", price: "$25.00", seats: "Limited" },
          { time: "10:00 PM", type: "Classic", price: "$12.00", seats: "Available" }
        ]
      },
      {
        name: "Luxury Cinema Experience",
        distance: "5.2 miles",
        times: [
          { time: "3:00 PM", type: "Luxury", price: "$35.00", seats: "Available" },
          { time: "6:30 PM", type: "Luxury", price: "$35.00", seats: "Filling Fast" },
          { time: "9:15 PM", type: "Luxury", price: "$35.00", seats: "Available" }
        ]
      }
    ]
  },
  {
    id: "3",
    movie: "Quantum Edge",
    poster: moviePoster3,
    duration: "2h 28m",
    rating: "PG-13",
    theaters: [
      {
        name: "Skyline Multiplex",
        distance: "4.7 miles",
        times: [
          { time: "12:00 PM", type: "Laser IMAX", price: "$19.50", seats: "Available" },
          { time: "3:30 PM", type: "Standard", price: "$14.50", seats: "Available" },
          { time: "7:15 PM", type: "Laser IMAX", price: "$21.50", seats: "Filling Fast" },
          { time: "10:45 PM", type: "Standard", price: "$14.50", seats: "Available" }
        ]
      }
    ]
  }
];

const dates = [
  { date: "Today", day: "Wed", num: "23" },
  { date: "Tomorrow", day: "Thu", num: "24" },
  { date: "", day: "Fri", num: "25" },
  { date: "", day: "Sat", num: "26" },
  { date: "", day: "Sun", num: "27" },
  { date: "", day: "Mon", num: "28" },
  { date: "", day: "Tue", num: "29" }
];

export default function Showtimes() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheater, setSelectedTheater] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");

  const getSeatsColor = (seats: string) => {
    switch (seats) {
      case "Filling Fast": return "text-orange-400";
      case "Limited": return "text-red-400";
      case "Sold Out": return "text-red-500";
      default: return "text-green-400";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-cinema-gold to-foreground bg-clip-text text-transparent">
            Movie Showtimes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the perfect showtime for your favorite movies. Book tickets in advance and secure the best seats.
          </p>
        </div>
      </section>

      {/* Date Selection */}
      <section className="py-8 px-6 lg:px-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Select Date</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {dates.map((date, index) => (
              <Button
                key={index}
                variant={selectedDate === index ? "default" : "outline"}
                className={`flex-shrink-0 flex flex-col h-16 px-4 ${
                  selectedDate === index 
                    ? "bg-gradient-gold text-primary-foreground border-0" 
                    : "bg-card/50 border-border/50 hover:border-primary/50"
                }`}
                onClick={() => setSelectedDate(index)}
              >
                <span className="text-xs font-medium">{date.date || date.day}</span>
                <span className="text-lg font-bold">{date.num}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 px-6 lg:px-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
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
              
              <Select value={selectedTheater} onValueChange={setSelectedTheater}>
                <SelectTrigger className="w-48 bg-card/50 border-border/50">
                  <SelectValue placeholder="All Theaters" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Theaters</SelectItem>
                  <SelectItem value="downtown">Popfiex IMAX Downtown</SelectItem>
                  <SelectItem value="westfield">Cinema Plaza Westfield</SelectItem>
                  <SelectItem value="classic">Retro Theater Classic</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                <SelectTrigger className="w-40 bg-card/50 border-border/50">
                  <SelectValue placeholder="Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Formats</SelectItem>
                  <SelectItem value="imax">IMAX</SelectItem>
                  <SelectItem value="4dx">4DX</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Showtimes List */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {showtimesData.map((movieData) => (
            <Card key={movieData.id} className="bg-card/50 border-border/50">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <img 
                    src={movieData.poster} 
                    alt={movieData.movie}
                    className="w-24 h-36 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-semibold">{movieData.movie}</h3>
                      <Badge variant="outline">{movieData.rating}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{movieData.duration}</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Action</Badge>
                      <Badge variant="secondary">Thriller</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {movieData.theaters.map((theater, theaterIndex) => (
                  <div key={theaterIndex} className="border-t border-border/50 pt-6 first:border-t-0 first:pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{theater.name}</h4>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{theater.distance}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-cinema-gold">
                        Theater Info
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {theater.times.map((showtime, timeIndex) => (
                        <Card key={timeIndex} className="bg-background/50 border-border/30 hover:border-primary/50 transition-all duration-200 cursor-pointer hover:shadow-sm">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-cinema-gold" />
                                <span className="font-semibold">{showtime.time}</span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {showtime.type}
                              </Badge>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Price:</span>
                                <span className="font-medium">{showtime.price}</span>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Seats:</span>
                                <span className={`font-medium ${getSeatsColor(showtime.seats)}`}>
                                  {showtime.seats}
                                </span>
                              </div>
                            </div>
                            <Button 
                              size="sm" 
                              className="w-full mt-3 bg-gradient-gold hover:shadow-gold text-primary-foreground border-0"
                            >
                              Select Seats
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Booking CTA */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Browse all movies or check other dates and theaters to find the perfect showtime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-gold hover:shadow-gold text-primary-foreground border-0 px-8 py-3">
              Browse All Movies
            </Button>
            <Button variant="outline" className="px-8 py-3">
              Find Theaters
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}