import { useState } from "react";
import { History, Search, Filter, Calendar, MapPin, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface HistoricalEvent {
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
    year: "632 CE",
    title: "Completion of the Message",
    description: "Prophet Muhammad ﷺ completed his mission and returned to Allah.",
    category: "prophetic",
    location: "Madinah",
    sources: ["Sahih Bukhari", "Sahih Muslim"]
  }
];

const HistoryPage = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);

  const filteredEvents = historicalEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.year.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      toast({
        title: "Filter Removed",
        description: "Showing all historical events",
      });
    } else {
      setSelectedCategory(category);
      toast({
        title: "Filter Applied",
        description: `Showing ${category} events`,
      });
    }
  };

  const handleEventClick = (event: HistoricalEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <History className="w-8 h-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Islamic History</h1>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search historical events..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === "prophetic" ? "default" : "outline"}
                onClick={() => handleCategorySelect("prophetic")}
                className="flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Prophetic Era
              </Button>
              <Button
                variant={selectedCategory === "caliphate" ? "default" : "outline"}
                onClick={() => handleCategorySelect("caliphate")}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Caliphate Era
              </Button>
              <Button
                variant={selectedCategory === "knowledge" ? "default" : "outline"}
                onClick={() => handleCategorySelect("knowledge")}
                className="flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Knowledge Era
              </Button>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="space-y-6">
            {filteredEvents.map((event, index) => (
              <Card 
                key={index} 
                className="p-6 relative overflow-hidden group hover:shadow-lg transition-all cursor-pointer animate-fade-in"
                onClick={() => handleEventClick(event)}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary-500" />
                <div className="ml-4">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
                      {event.year}
                    </span>
                    {event.location && (
                      <span className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-3">{event.description}</p>
                  {event.sources && (
                    <div className="flex gap-2 flex-wrap mt-2">
                      {event.sources.map((source, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}

            {filteredEvents.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No historical events found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;