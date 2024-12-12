import { History } from "lucide-react";
import { Card } from "@/components/ui/card";

interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
}

const historicalEvents: HistoricalEvent[] = [
  {
    year: "570 CE",
    title: "Birth of Prophet Muhammad ﷺ",
    description: "Prophet Muhammad ﷺ was born in Makkah in the Year of the Elephant."
  },
  {
    year: "610 CE",
    title: "First Revelation",
    description: "The first verses of the Quran were revealed to Prophet Muhammad ﷺ in the Cave of Hira."
  },
  {
    year: "622 CE",
    title: "The Hijra",
    description: "Migration of Prophet Muhammad ﷺ and his followers from Makkah to Madinah, marking the beginning of the Islamic calendar."
  },
  {
    year: "632 CE",
    title: "Completion of the Message",
    description: "Prophet Muhammad ﷺ completed his mission and returned to Allah."
  }
];

const HistoryPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <History className="w-8 h-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Islamic History</h1>
          </div>

          <div className="space-y-6">
            {historicalEvents.map((event, index) => (
              <Card key={index} className="p-6 relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary-500" />
                <div className="ml-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-3">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;