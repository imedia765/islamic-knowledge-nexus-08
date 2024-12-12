import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { HistoricalEvent } from "@/types/history";

interface BookmarkedEventsProps {
  bookmarkedEvents: HistoricalEvent[];
  onViewEvent: (event: HistoricalEvent) => void;
}

export const BookmarkedEvents = ({ bookmarkedEvents, onViewEvent }: BookmarkedEventsProps) => {
  if (bookmarkedEvents.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Bookmarked Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bookmarkedEvents.map((event, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-sm text-primary-600">{event.year}</span>
                <h4 className="font-medium">{event.title}</h4>
              </div>
              <Button variant="ghost" size="sm" onClick={() => onViewEvent(event)}>
                <BookOpen className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};