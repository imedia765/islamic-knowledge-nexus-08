import { useState } from "react";
import { History } from "lucide-react";
import { TimelineControls } from "@/components/history/TimelineControls";
import { BookmarkedEvents } from "@/components/history/BookmarkedEvents";
import { TimelineView } from "@/components/history/TimelineView";
import { CategoryFilter } from "@/components/history/CategoryFilter";
import { useToast } from "@/components/ui/use-toast";

export interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
  category: "prophetic" | "caliphate" | "knowledge" | "civilization";
  location?: string;
  sources?: string[];
}

const historicalEvents: HistoricalEvent[] = [
  {
    year: "570 CE",
    title: "Birth of Prophet Muhammad ﷺ",
    description: "Prophet Muhammad ﷺ was born in Makkah in the Year of the Elephant.",
    category: "prophetic",
    location: "Makkah",
    sources: ["Sealed Nectar", "Ibn Ishaq's Sirah"]
  },
  {
    year: "610 CE",
    title: "First Revelation",
    description: "The first verses of the Quran were revealed to Prophet Muhammad ﷺ in the Cave of Hira.",
    category: "prophetic",
    location: "Cave of Hira, Makkah",
    sources: ["Sahih Bukhari", "Sahih Muslim"]
  },
  {
    year: "622 CE",
    title: "The Hijra",
    description: "Migration of Prophet Muhammad ﷺ and his followers from Makkah to Madinah, marking the beginning of the Islamic calendar.",
    category: "prophetic",
    location: "Makkah to Madinah",
    sources: ["Sealed Nectar", "Ibn Hisham's Sirah"]
  },
  {
    year: "624 CE",
    title: "Battle of Badr",
    description: "The first major battle between the Muslims and the Quraysh of Makkah.",
    category: "prophetic",
    location: "Badr",
    sources: ["Sahih Bukhari", "Sealed Nectar"]
  },
  {
    year: "628 CE",
    title: "Treaty of Hudaybiyyah",
    description: "A pivotal peace treaty between the Muslims and the Quraysh of Makkah.",
    category: "prophetic",
    location: "Hudaybiyyah",
    sources: ["Sahih Bukhari", "Ibn Hisham's Sirah"]
  },
  {
    year: "630 CE",
    title: "Conquest of Makkah",
    description: "The peaceful conquest of Makkah by the Muslims led by Prophet Muhammad ﷺ.",
    category: "prophetic",
    location: "Makkah",
    sources: ["Sealed Nectar", "Sahih Bukhari"]
  },
  {
    year: "632 CE",
    title: "Completion of the Message",
    description: "Prophet Muhammad ﷺ completed his mission and returned to Allah.",
    category: "prophetic",
    location: "Madinah",
    sources: ["Sahih Bukhari", "Sahih Muslim"]
  },
  {
    year: "632-634 CE",
    title: "Caliphate of Abu Bakr",
    description: "First Caliph of Islam, dealt with the riddah wars and began the compilation of the Quran.",
    category: "caliphate",
    location: "Madinah",
    sources: ["Tarikh al-Tabari", "Al-Bidayah wan-Nihayah"]
  },
  {
    year: "634-644 CE",
    title: "Caliphate of Umar ibn Al-Khattab",
    description: "Second Caliph, expanded the Islamic state and established many administrative systems.",
    category: "caliphate",
    location: "Madinah",
    sources: ["Tarikh al-Tabari", "Futuh al-Buldan"]
  },
  {
    year: "750 CE",
    title: "Rise of the Abbasid Caliphate",
    description: "Beginning of the Golden Age of Islam with significant advances in science and culture.",
    category: "civilization",
    location: "Baghdad",
    sources: ["Tarikh al-Tabari", "Al-Kamil fi al-Tarikh"]
  },
  {
    year: "786-809 CE",
    title: "Reign of Harun al-Rashid",
    description: "Peak of the Abbasid Caliphate, marked by cultural and scientific achievements.",
    category: "civilization",
    location: "Baghdad",
    sources: ["Tarikh Baghdad", "Al-Fihrist"]
  },
  {
    year: "832 CE",
    title: "House of Wisdom",
    description: "Establishment of Bayt al-Hikma in Baghdad, a major intellectual center.",
    category: "knowledge",
    location: "Baghdad",
    sources: ["Al-Fihrist", "Tarikh al-Hukama"]
  }
];

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
