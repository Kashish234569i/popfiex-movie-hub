import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useBookings } from "@/hooks/useBookings";
import { toast } from "sonner";

interface SeatSelectorProps {
  showtimeId: string;
  movieTitle: string;
  theaterName: string;
  showDate: string;
  showTime: string;
  ticketPrice: number;
  onBookingSuccess?: () => void;
}

// Generate sample seats for demonstration
const generateSeats = () => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 10;
  const seats = [];
  
  for (const row of rows) {
    for (let i = 1; i <= seatsPerRow; i++) {
      seats.push({
        id: `${row}${i}`,
        row,
        number: i,
        isBooked: Math.random() < 0.2, // 20% chance of being booked
        type: i <= 2 || i >= 9 ? 'premium' : 'standard'
      });
    }
  }
  return seats;
};

export function SeatSelector({ 
  showtimeId, 
  movieTitle, 
  theaterName, 
  showDate, 
  showTime, 
  ticketPrice,
  onBookingSuccess 
}: SeatSelectorProps) {
  const [seats] = useState(generateSeats);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [isBooking, setIsBooking] = useState(false);
  
  const { user } = useAuth();
  const { createBooking } = useBookings();

  const handleSeatClick = (seatId: string, isBooked: boolean) => {
    if (isBooked) return;
    
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const handleBooking = async () => {
    if (!user) {
      toast.error("Please sign in to book tickets");
      return;
    }
    
    if (selectedSeats.length === 0) {
      toast.error("Please select at least one seat");
      return;
    }
    
    setIsBooking(true);
    
    const totalAmount = selectedSeats.length * ticketPrice;
    
    // In a real app, seat IDs would come from the database
    const mockSeatIds = selectedSeats.map(() => crypto.randomUUID());
    
    const { error } = await createBooking(showtimeId, mockSeatIds, totalAmount);
    
    if (error) {
      toast.error(error);
    } else {
      toast.success(`Successfully booked ${selectedSeats.length} seat(s)!`);
      setSelectedSeats([]);
      onBookingSuccess?.();
    }
    
    setIsBooking(false);
  };

  const getSeatColor = (seat: any) => {
    if (seat.isBooked) return "bg-red-500";
    if (selectedSeats.includes(seat.id)) return "bg-cinema-gold";
    if (seat.type === 'premium') return "bg-purple-500";
    return "bg-gray-500";
  };

  const totalPrice = selectedSeats.length * ticketPrice;

  return (
    <Card className="bg-card/50 border-border/50">
      <CardHeader>
        <CardTitle>Select Your Seats</CardTitle>
        <div className="text-sm text-muted-foreground">
          {movieTitle} • {theaterName} • {showDate} at {showTime}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Screen */}
        <div className="text-center">
          <div className="bg-gradient-gold rounded-t-full h-3 w-3/4 mx-auto mb-2"></div>
          <p className="text-sm text-muted-foreground">SCREEN</p>
        </div>

        {/* Seat Map */}
        <div className="space-y-2">
          {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(row => (
            <div key={row} className="flex items-center gap-2">
              <span className="w-4 text-center text-sm font-medium">{row}</span>
              <div className="flex gap-1">
                {seats
                  .filter(seat => seat.row === row)
                  .map(seat => (
                    <button
                      key={seat.id}
                      onClick={() => handleSeatClick(seat.id, seat.isBooked)}
                      disabled={seat.isBooked}
                      className={`w-8 h-8 rounded-t-lg transition-colors ${getSeatColor(seat)} ${
                        seat.isBooked ? 'cursor-not-allowed opacity-50' : 'hover:opacity-80'
                      }`}
                      title={`${seat.id} - ${seat.type} seat`}
                    />
                  ))}
              </div>
              <span className="w-4 text-center text-sm font-medium">{row}</span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-500 rounded-t-lg"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-purple-500 rounded-t-lg"></div>
            <span>Premium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-cinema-gold rounded-t-lg"></div>
            <span>Selected</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-red-500 rounded-t-lg"></div>
            <span>Booked</span>
          </div>
        </div>

        {/* Booking Summary */}
        {selectedSeats.length > 0 && (
          <div className="space-y-4 p-4 bg-background/50 rounded-lg">
            <div className="flex justify-between items-center">
              <span>Selected Seats:</span>
              <div className="flex gap-1">
                {selectedSeats.map(seatId => (
                  <Badge key={seatId} variant="secondary">{seatId}</Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Button
              onClick={handleBooking}
              disabled={isBooking || !user}
              className="w-full bg-gradient-gold hover:shadow-gold text-primary-foreground border-0"
            >
              {isBooking ? "Booking..." : !user ? "Sign In to Book" : `Book ${selectedSeats.length} Seat(s)`}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}