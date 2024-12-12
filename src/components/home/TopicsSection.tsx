import { Link } from "react-router-dom";
import { GraduationCap, Globe, BookMarked } from "lucide-react";

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const TopicCard = ({ icon, title, description, link }: TopicCardProps) => {
  return (
    <Link to={link} className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export const TopicsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TopicCard
            icon={<GraduationCap className="w-6 h-6" />}
            title="Islamic Education"
            description="Access comprehensive courses and learning materials for all levels of Islamic studies."
            link="/research"
          />
          <TopicCard
            icon={<Globe className="w-6 h-6" />}
            title="Global Community"
            description="Connect with Muslims worldwide and share knowledge in a supportive environment."
            link="/research"
          />
          <TopicCard
            icon={<BookMarked className="w-6 h-6" />}
            title="Scholarly Works"
            description="Explore classical and contemporary Islamic scholarly works and research papers."
            link="/research"
          />
        </div>
      </div>
    </section>
  );
};