import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 hero-pattern relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover the Depth of
            <span className="text-primary-600"> Islamic Knowledge</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access authentic Islamic resources, from Quran and Hadith to scholarly works,
            all in one comprehensive digital platform.
          </p>
          <div className="relative w-full max-w-2xl mx-auto mb-12">
            <img
              src="/quran-hero.jpg"
              alt="Holy Quran on a wooden holder"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quran" className="btn-primary">
              Explore Quran
            </Link>
            <Link to="/research" className="btn-secondary">
              Start Research
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};