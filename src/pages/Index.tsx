import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MovieGrid } from "@/components/MovieGrid";
import { ReviewSection } from "@/components/ReviewSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MovieGrid />
        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
