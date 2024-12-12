import { useState } from "react";
import { History } from "lucide-react";
import { TimelineControls } from "@/components/history/TimelineControls";
import { BookmarkedEvents } from "@/components/history/BookmarkedEvents";
import { TimelineView } from "@/components/history/TimelineView";
import { CategoryFilter } from "@/components/history/CategoryFilter";
import { useToast } from "@/components/ui/use-toast";
import { HistoricalEvent } from "@/types/history";
import { historicalEvents } from "@/data/historicalEvents";

const HistoryPage = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [bookmarkedEvents, setBookmarkedEvents] = useState<HistoricalEvent[]>([]);

  const filteredEvents = historicalEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.year.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = !yearFilter || event.year.includes(yearFilter);
    const matchesCategory = !selectedCategory || event.category === selectedCategory;
    
    return matchesSearch && matchesYear && matchesCategory;
  });

  const handleBookmark = (event: HistoricalEvent) => {
    const isBookmarked = bookmarkedEvents.some(e => e.title === event.title);
    if (isBookmarked) {
      setBookmarkedEvents(bookmarkedEvents.filter(e => e.title !== event.title));
      toast({
        title: "Event removed from bookmarks",
        description: `"${event.title}" has been removed from your bookmarks.`,
      });
    } else {
      setBookmarkedEvents([...bookmarkedEvents, event]);
      toast({
        title: "Event bookmarked",
        description: `"${event.title}" has been added to your bookmarks.`,
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <History className="w-8 h-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Islamic History</h1>
          </div>

          <TimelineControls
            onSearch={setSearchTerm}
            onFilterByYear={setYearFilter}
          />

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <BookmarkedEvents
            bookmarkedEvents={bookmarkedEvents}
            onViewEvent={(event) => {
              const element = document.getElementById(event.title);
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          />

          <TimelineView
            events={filteredEvents}
            onBookmark={handleBookmark}
            bookmarkedEvents={bookmarkedEvents}
          />

          {filteredEvents.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No historical events found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;