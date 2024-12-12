import { Search, Book, PlayCircle, Download } from "lucide-react";
import QuranViewer from "@/components/quran/QuranViewer";

const QuranPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Explore the Holy <span className="text-primary-600">Quran</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Access the complete Quran with word-by-word analysis, translations, and audio recitations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search verses, translations, or topics..."
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quran Viewer Section */}
      <section className="py-16">
        <QuranViewer />
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Word-by-Word Analysis</h3>
              <p className="text-gray-600">Detailed morphological breakdown and root word analysis for deeper understanding.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Audio Recitations</h3>
              <p className="text-gray-600">Listen to beautiful recitations from 25 renowned Qaris with adjustable playback speeds.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offline Access</h3>
              <p className="text-gray-600">Download verses and audio recitations for offline study and reference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-6 py-3 bg-primary-50 rounded-full text-primary-700 font-medium">
            Full Quran features coming soon
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuranPage;