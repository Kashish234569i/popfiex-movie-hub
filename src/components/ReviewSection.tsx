import { Star, ThumbsUp, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    id: "1",
    user: "Alex Chen",
    initials: "AC",
    rating: 9,
    movie: "Thunder Strike",
    review: "An absolute masterpiece of action cinema. The choreography is breathtaking and the story keeps you on the edge of your seat throughout.",
    likes: 42,
    date: "2 days ago"
  },
  {
    id: "2", 
    user: "Sarah Johnson",
    initials: "SJ",
    rating: 10,
    movie: "Midnight in Paris",
    review: "A beautiful romantic journey that captures the essence of love and longing. The cinematography is stunning and the performances are heartfelt.",
    likes: 38,
    date: "1 week ago"
  },
  {
    id: "3",
    user: "Michael Rodriguez",
    initials: "MR", 
    rating: 8,
    movie: "Quantum Edge",
    review: "Mind-bending sci-fi at its finest. The visual effects are revolutionary and the plot will have you questioning reality itself.",
    likes: 55,
    date: "3 days ago"
  }
];

export function ReviewSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-cinema-gold to-foreground bg-clip-text text-transparent">
            Latest Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read authentic reviews from movie enthusiasts and share your own thoughts about the latest films.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-cinema">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-cinema-gold text-primary-foreground font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{review.user}</h4>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-cinema-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{review.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Badge variant="secondary" className="text-xs">
                  {review.movie}
                </Badge>
                
                <p className="text-muted-foreground leading-relaxed">
                  {review.review}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {review.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Reply
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Share Your Movie Experience</h3>
          <p className="text-muted-foreground mb-6">
            Help others discover great films by sharing your honest reviews and ratings.
          </p>
          <Button className="bg-gradient-gold hover:shadow-gold text-primary-foreground border-0 px-8 py-3">
            Write a Review
          </Button>
        </div>
      </div>
    </section>
  );
}