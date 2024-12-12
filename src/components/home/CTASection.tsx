import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="w-12 h-12 text-primary-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your journey of Islamic learning and discovery with thousands of other seekers of knowledge.
          </p>
          <Link to="/research" className="btn-primary">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};