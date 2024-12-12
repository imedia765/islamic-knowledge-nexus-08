import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HadithHistoryProps {
  readingHistory: string[];
  onHistoryItemClick: (query: string) => void;
}

export const HadithHistory = ({
  readingHistory,
  onHistoryItemClick,
}: HadithHistoryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reading History</CardTitle>
      </CardHeader>
      <CardContent>
        {readingHistory.length > 0 ? (
          <div className="space-y-2">
            {readingHistory.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 hover:bg-accent rounded-md"
              >
                <span>{item}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onHistoryItemClick(item)}
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            Your reading history will appear here
          </div>
        )}
      </CardContent>
    </Card>
  );
};