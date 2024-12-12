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
  // Prophetic Era Events
  {
    year: "570 CE",
    title: "Birth of Prophet Muhammad ﷺ",
    description: "Prophet Muhammad ﷺ was born in Makkah in the Year of the Elephant. His father Abdullah had passed away before his birth, and his mother Aminah would care for him in his early years.",
    category: "prophetic",
    location: "Makkah",
    sources: ["Sealed Nectar", "Ibn Ishaq's Sirah"]
  },
  {
    year: "576 CE",
    title: "Death of Prophet's Mother",
    description: "Aminah bint Wahb, the Prophet's mother, passed away at Abwa while returning from Madinah, leaving the young Muhammad ﷺ in the care of his grandfather Abdul Muttalib.",
    category: "prophetic",
    location: "Abwa",
    sources: ["Sealed Nectar", "Ibn Hisham's Sirah"]
  },
  {
    year: "595 CE",
    title: "Marriage to Khadijah",
    description: "Prophet Muhammad ﷺ married Khadijah bint Khuwaylid, who would become his greatest supporter and the first to accept Islam.",
    category: "prophetic",
    location: "Makkah",
    sources: ["Sahih Bukhari", "Sealed Nectar"]
  },
  {
    year: "610 CE",
    title: "First Revelation",
    description: "The first verses of the Quran were revealed to Prophet Muhammad ﷺ in the Cave of Hira during the month of Ramadan.",
    category: "prophetic",
    location: "Cave of Hira, Makkah",
    sources: ["Sahih Bukhari", "Sahih Muslim"]
  },
  {
    year: "613 CE",
    title: "Public Preaching Begins",
    description: "Prophet Muhammad ﷺ began publicly preaching Islam in Makkah, facing increasing opposition from the Quraysh.",
    category: "prophetic",
    location: "Makkah",
    sources: ["Ibn Ishaq's Sirah", "Sealed Nectar"]
  },
  {
    year: "619 CE",
    title: "Year of Sorrow",
    description: "The Prophet ﷺ lost both his beloved wife Khadijah and his uncle Abu Talib in the same year, marking a particularly difficult period.",
    category: "prophetic",
    location: "Makkah",
    sources: ["Sealed Nectar", "Ibn Hisham's Sirah"]
  },
  {
    year: "620 CE",
    title: "Night Journey and Ascension",
    description: "The miraculous night journey (Isra) and ascension (Miraj) of Prophet Muhammad ﷺ occurred, during which the five daily prayers were prescribed.",
    category: "prophetic",
    location: "Makkah to Jerusalem to Heavens",
    sources: ["Sahih Bukhari", "Sahih Muslim"]
  },
  {
    year: "622 CE",
    title: "The Hijra",
    description: "The migration of Prophet Muhammad ﷺ and his followers from Makkah to Madinah, marking the beginning of the Islamic calendar.",
    category: "prophetic",
    location: "Makkah to Madinah",
    sources: ["Sealed Nectar", "Ibn Hisham's Sirah"]
  },
  // Caliphate Era Events
  {
    year: "632-634 CE",
    title: "Caliphate of Abu Bakr",
    description: "First Caliph of Islam who unified Arabia, dealt with the riddah wars, and began the compilation of the Quran.",
    category: "caliphate",
    location: "Madinah",
    sources: ["Tarikh al-Tabari", "Al-Bidayah wan-Nihayah"]
  },
  {
    year: "634-644 CE",
    title: "Caliphate of Umar ibn Al-Khattab",
    description: "Second Caliph who established the Islamic calendar, expanded the state significantly, and introduced numerous administrative reforms.",
    category: "caliphate",
    location: "Madinah",
    sources: ["Tarikh al-Tabari", "Futuh al-Buldan"]
  },
  {
    year: "644-656 CE",
    title: "Caliphate of Uthman ibn Affan",
    description: "Third Caliph who standardized the Quran's compilation and expanded the Islamic territory to include parts of modern-day Iran and Armenia.",
    category: "caliphate",
    location: "Madinah",
    sources: ["Tarikh al-Tabari", "Al-Bidayah wan-Nihayah"]
  },
  {
    year: "656-661 CE",
    title: "Caliphate of Ali ibn Abi Talib",
    description: "Fourth Caliph, cousin and son-in-law of the Prophet ﷺ, known for his wisdom and justice in governance.",
    category: "caliphate",
    location: "Kufa",
    sources: ["Tarikh al-Tabari", "Nahj al-Balagha"]
  },
  // Islamic Civilization Events
  {
    year: "661-750 CE",
    title: "Umayyad Caliphate",
    description: "First hereditary dynasty in Islamic history, marked by significant territorial expansion and cultural developments.",
    category: "civilization",
    location: "Damascus",
    sources: ["Tarikh al-Tabari", "Al-Kamil fi al-Tarikh"]
  },
  {
    year: "750-1258 CE",
    title: "Abbasid Caliphate",
    description: "Golden Age of Islam, characterized by remarkable achievements in science, literature, and arts.",
    category: "civilization",
    location: "Baghdad",
    sources: ["Tarikh Baghdad", "Al-Fihrist"]
  },
  {
    year: "756-1031 CE",
    title: "Cordoba Caliphate",
    description: "Islamic golden age in Al-Andalus (Spain), marked by religious tolerance and cultural advancement.",
    category: "civilization",
    location: "Cordoba",
    sources: ["Al-Maqari's Nafh al-Tib", "Ibn Hayyan's Al-Muqtabis"]
  },
  // Knowledge & Science Events
  {
    year: "750-850 CE",
    title: "Translation Movement",
    description: "Major translation effort of Greek, Persian, and Indian texts into Arabic, laying foundation for Islamic golden age.",
    category: "knowledge",
    location: "Baghdad",
    sources: ["Al-Fihrist", "Tarikh al-Hukama"]
  },
  {
    year: "780-850 CE",
    title: "Al-Khwarizmi's Contributions",
    description: "Development of algebra and algorithms by Muhammad ibn Musa al-Khwarizmi, founding father of algebra.",
    category: "knowledge",
    location: "Baghdad",
    sources: ["Kitab al-Jabr", "Al-Fihrist"]
  },
  {
    year: "965-1040 CE",
    title: "Ibn Al-Haytham's Optics",
    description: "Revolutionary work in optics and scientific method by Ibn Al-Haytham, known as 'father of modern optics'.",
    category: "knowledge",
    location: "Cairo",
    sources: ["Kitab al-Manazir", "Al-Qifti's Tarikh al-Hukama"]
  },
  {
    year: "980-1037 CE",
    title: "Ibn Sina's Medical Canon",
    description: "Publication of 'The Canon of Medicine' by Ibn Sina (Avicenna), remained medical authority until 18th century.",
    category: "knowledge",
    location: "Bukhara",
    sources: ["Al-Qanun fi al-Tibb", "Ibn Abi Usaybi'ah's History of Physicians"]
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
