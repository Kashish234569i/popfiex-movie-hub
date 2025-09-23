import { useState } from "react";
import { MapPin, Phone, Clock, Star, Navigation, Filter, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const theatersData = [
  {
    id: "1",
    name: "Popfiex IMAX Downtown",
    address: "123 Cinema Boulevard, Downtown",
    distance: "0.8 miles",
    phone: "(555) 123-4567",
    rating: 4.8,
    reviewCount: 1240,
    amenities: ["IMAX", "Dolby Atmos", "Reclining Seats", "Premium Dining"],
    openTime: "10:00 AM",
    closeTime: "11:45 PM",
    screens: 12,
    featured: true
  },
  {
    id: "2",
    name: "Cinema Plaza Westfield",
    address: "456 Mall Drive, Westfield",
    distance: "2.3 miles", 
    phone: "(555) 234-5678",
    rating: 4.5,
    reviewCount: 890,
    amenities: ["4DX", "VIP Lounge", "Gourmet Concessions", "Reserved Seating"],
    openTime: "11:00 AM",
    closeTime: "12:00 AM",
    screens: 16,
    featured: false
  },
  {
    id: "3",
    name: "Retro Theater Classic",
    address: "789 Vintage Street, Old Town",
    distance: "3.1 miles",
    phone: "(555) 345-6789", 
    rating: 4.3,
    reviewCount: 650,
    amenities: ["Historic Venue", "Art Films", "Wine Bar", "Live Events"],
    openTime: "2:00 PM",
    closeTime: "10:30 PM",
    screens: 4,
    featured: false
  },
  {
    id: "4",
    name: "Skyline Multiplex",
    address: "321 Heights Avenue, Skyline",
    distance: "4.7 miles",
    phone: "(555) 456-7890",
    rating: 4.6,
    reviewCount: 1100,
    amenities: ["IMAX", "Laser Projection", "Stadium Seating", "Arcade"],
    openTime: "10:30 AM", 
    closeTime: "11:30 PM",
    screens: 20,
    featured: true
  },
  {
    id: "5",
    name: "Luxury Cinema Experience",
    address: "654 Premium Plaza, Uptown",
    distance: "5.2 miles",
    phone: "(555) 567-8901",
    rating: 4.9,
    reviewCount: 750,
    amenities: ["Butler Service", "Private Dining", "Leather Recliners", "Valet Parking"],
    openTime: "12:00 PM",
    closeTime: "11:00 PM", 
    screens: 8,
    featured: true
  }
];

export default function Theaters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("distance");
  const [filterBy, setFilterBy] = useState("all");

  const filteredTheaters = theatersData.filter(theater => {
    const matchesSearch = theater.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         theater.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterBy === "featured") return matchesSearch && theater.featured;
    if (filterBy === "imax") return matchesSearch && theater.amenities.includes("IMAX");
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-cinema-gold to-foreground bg-clip-text text-transparent">
            Find Theaters
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover premium cinema experiences near you. From IMAX to luxury theaters, find the perfect venue for your movie night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your location..."
              className="bg-card/80 border-border/50 focus:border-primary/50"
            />
            <Button className="bg-gradient-gold hover:shadow-gold text-primary-foreground border-0">
              <Navigation className="w-4 h-4 mr-2" />
              Find
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-6 lg:px-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-card/50 border-border/50 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-cinema-gold mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Theater Locations</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-cinema-gold mb-1">240+</div>
                <div className="text-sm text-muted-foreground">Total Screens</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-cinema-gold mb-1">12</div>
                <div className="text-sm text-muted-foreground">IMAX Theaters</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-cinema-gold mb-1">4.7</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-6 lg:px-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search theaters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
                />
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-card/50 border-border/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="screens">Screen Count</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-40 bg-card/50 border-border/50">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Theaters</SelectItem>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="imax">IMAX Only</SelectItem>
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

      {/* Theaters List */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">
              {filteredTheaters.length} Theaters Found
            </h2>
            <Button variant="outline" size="sm">
              <MapPin className="w-4 h-4 mr-2" />
              Map View
            </Button>
          </div>

          <div className="space-y-6">
            {filteredTheaters.map((theater) => (
              <Card key={theater.id} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-cinema">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Theater Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{theater.name}</h3>
                            {theater.featured && (
                              <Badge className="bg-gradient-gold text-primary-foreground border-0">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{theater.address}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Navigation className="w-4 h-4" />
                              <span>{theater.distance}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-cinema-gold mb-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-semibold">{theater.rating}</span>
                            <span className="text-muted-foreground text-sm">({theater.reviewCount})</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{theater.screens} screens</p>
                        </div>
                      </div>

                      {/* Contact and Hours */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          <span>{theater.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{theater.openTime} - {theater.closeTime}</span>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2">
                        {theater.amenities.map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 lg:w-48">
                      <Button className="bg-gradient-gold hover:shadow-gold text-primary-foreground border-0">
                        View Showtimes
                      </Button>
                      <Button variant="outline" size="sm">
                        Get Directions
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        Theater Info
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTheaters.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No theaters found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or expanding your location radius.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setFilterBy("all");
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