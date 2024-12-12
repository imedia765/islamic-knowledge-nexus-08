import { Search, Book, BookOpen, Users } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Search className="w-6 h-6" />}
            title="Advanced Search"
            description="Powerful search capabilities across all Islamic texts with multiple filters and sorting options."
          />
          <FeatureCard
            icon={<Book className="w-6 h-6" />}
            title="Comprehensive Library"
            description="Access to authentic sources including Quran, Hadith, and scholarly works."
          />
          <FeatureCard
            icon={<BookOpen className="w-6 h-6" />}
            title="Study Tools"
            description="Interactive learning tools, note-taking features, and personalized study plans."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Scholar Network"
            description="Connect with qualified scholars and join discussion groups for deeper understanding."
          />
        </div>
      </div>
    </section>
  );
};