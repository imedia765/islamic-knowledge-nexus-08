import { HistoricalEvent } from "@/types/history";
import { Card } from "@/components/ui/card";
import { MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineViewProps {
  events: HistoricalEvent[];
  onBookmark: (event: HistoricalEvent) => void;
  bookmarkedEvents: HistoricalEvent[];
}

export const TimelineView = ({ events, onBookmark, bookmarkedEvents }: TimelineViewProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200" />
      
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Timeline dot */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
              event.isLoss ? 'bg-red-500' : 'bg-primary-500'
            }`} />
            
            {/* Card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <Card className={`p-4 hover:shadow-md transition-shadow animate-fade-in ${
                event.isLoss ? 'border-red-200 bg-red-50' : 'bg-white'
              }`}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-sm font-medium ${
                      event.isLoss ? 'text-red-600' : 'text-primary-600'
                    }`}>{event.year}</span>
                    <h4 className="font-medium text-lg mb-2">{event.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                    
                    {event.location && (
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    )}
                    
                    {event.sources && (
                      <div className="flex gap-2 flex-wrap mt-2">
                        {event.sources.map((source, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {source}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onBookmark(event)}
                    className={`${
                      bookmarkedEvents.some(e => e.title === event.title)
                        ? "text-primary-600"
                        : "text-gray-400"
                    }`}
                  >
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};