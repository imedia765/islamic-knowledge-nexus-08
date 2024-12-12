import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Search, Book, BookOpen, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 hero-pattern">
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

        {/* Features Section */}
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">About IDRP</h3>
              <p className="text-gray-600 text-sm">
                The Islamic Digital Research Platform is dedicated to providing authentic
                Islamic knowledge through modern technology.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/quran" className="text-gray-600 hover:text-primary-600 text-sm">Quran</Link></li>
                <li><Link to="/hadith" className="text-gray-600 hover:text-primary-600 text-sm">Hadith</Link></li>
                <li><Link to="/fiqh" className="text-gray-600 hover:text-primary-600 text-sm">Fiqh</Link></li>
                <li><Link to="/research" className="text-gray-600 hover:text-primary-600 text-sm">Research</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">API Access</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Feedback</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Partnerships</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              © {new Date().getFullYear()} Islamic Digital Research Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
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

export default Index;