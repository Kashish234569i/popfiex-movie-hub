import { useState } from "react";
import { Star, ThumbsUp, MessageSquare, Filter, Search, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const reviewsData = [
  {
    id: "1",
    user: "Alex Chen",
    initials: "AC",
    rating: 9,
    movie: "Thunder Strike",
    review: "An absolute masterpiece of action cinema. The choreography is breathtaking and the story keeps you on the edge of your seat throughout. The visual effects are top-notch and the character development is surprisingly deep for an action film.",
    likes: 142,
    replies: 23,
    date: "2 days ago",
    verified: true
  },
  {
    id: "2", 
    user: "Sarah Johnson",
    initials: "SJ",
    rating: 10,
    movie: "Midnight in Paris",
    review: "A beautiful romantic journey that captures the essence of love and longing. The cinematography is stunning and the performances are heartfelt. This film reminded me why I fell in love with cinema in the first place.",
    likes: 89,
    replies: 15,
    date: "1 week ago",
    verified: false
  },
  {
    id: "3",
    user: "Michael Rodriguez",
    initials: "MR", 
    rating: 8,
    movie: "Quantum Edge",
    review: "Mind-bending sci-fi at its finest. The visual effects are revolutionary and the plot will have you questioning reality itself. However, the pacing could have been better in the second act.",
    likes: 76,
    replies: 31,
    date: "3 days ago",
    verified: true
  },
  {
    id: "4",
    user: "Emily Davis",
    initials: "ED",
    rating: 7,
    movie: "Thunder Strike",
    review: "Good action sequences but the plot felt predictable. The stunts were impressive but the dialogue could use some work. Still an enjoyable watch for action fans.",
    likes: 34,
    replies: 8,
    date: "5 days ago",
    verified: false
  },
  {
    id: "5",
    user: "James Wilson",
    initials: "JW",
    rating: 9,
    movie: "Midnight in Paris",
    review: "A masterclass in storytelling. The way it weaves romance with deeper themes about life and dreams is simply brilliant. The soundtrack deserves special mention.",
    likes: 67,
    replies: 12,
    date: "1 week ago",
    verified: true
  }
];

export default function Reviews() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [filterBy, setFilterBy] = useState("all");
  const [showWriteReview, setShowWriteReview] = useState(false);

  const filteredReviews = reviewsData.filter(review => {
    const matchesSearch = review.movie.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.review.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterBy === "verified") return matchesSearch && review.verified;
    if (filterBy === "high-rated") return matchesSearch && review.rating >= 8;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-cinema-gold to-foreground bg-clip-text text-transparent">
            Movie Reviews
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Read authentic reviews from movie enthusiasts and share your own thoughts about the latest films.
          </p>
          <Button 
            onClick={() => setShowWriteReview(true)}
            className="bg-gradient-gold hover:shadow-gold text-primary-foreground border-0 px-8 py-3"
          >
            Write a Review
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-6 lg:px-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-6 h-6 text-cinema-gold fill-current" />
                  <span className="text-2xl font-bold">4.2M</span>
                </div>
                <p className="text-muted-foreground">Total Reviews</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-6 h-6 text-cinema-gold" />
                  <span className="text-2xl font-bold">8.7</span>
                </div>
                <p className="text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MessageSquare className="w-6 h-6 text-cinema-gold" />
                  <span className="text-2xl font-bold">125K</span>
                </div>
                <p className="text-muted-foreground">Active Reviewers</p>
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
                  placeholder="Search reviews..."
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
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="controversial">Most Controversial</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-40 bg-card/50 border-border/50">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Reviews</SelectItem>
                  <SelectItem value="verified">Verified Only</SelectItem>
                  <SelectItem value="high-rated">High Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Write Review Modal */}
      {showWriteReview && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <Card className="w-full max-w-2xl bg-card border-border/50">
            <CardHeader>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">Write a Review</h3>
                <Button variant="ghost" onClick={() => setShowWriteReview(false)}>×</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Movie</label>
                <Select>
                  <SelectTrigger className="bg-background border-border/50">
                    <SelectValue placeholder="Select a movie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="thunder-strike">Thunder Strike</SelectItem>
                    <SelectItem value="midnight-paris">Midnight in Paris</SelectItem>
                    <SelectItem value="quantum-edge">Quantum Edge</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-1">
                  {[1,2,3,4,5,6,7,8,9,10].map((rating) => (
                    <button key={rating} className="p-1 hover:scale-110 transition-transform">
                      <Star className="w-6 h-6 text-muted-foreground hover:text-cinema-gold" />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <Textarea 
                  placeholder="Share your thoughts about this movie..."
                  className="min-h-32 bg-background border-border/50"
                />
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-gradient-gold text-primary-foreground border-0 flex-1">
                  Publish Review
                </Button>
                <Button variant="outline" onClick={() => setShowWriteReview(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Reviews List */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">
              {filteredReviews.length} Reviews
            </h2>
          </div>

          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-cinema-gold text-primary-foreground font-semibold">
                          {review.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{review.user}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs bg-cinema-gold/20 text-cinema-gold">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-cinema-gold mb-1">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-semibold text-lg">{review.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {review.movie}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {review.review}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {review.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {review.replies}
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-cinema-gold">
                      Reply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}