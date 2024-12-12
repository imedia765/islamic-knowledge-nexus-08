import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HadithBookmarksProps {
  bookmarkedHadith: string[];
  onRemoveBookmark: (hadithId: string) => void;
}

export const HadithBookmarks = ({
  bookmarkedHadith,
  onRemoveBookmark,
}: HadithBookmarksProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookmarked Hadith</CardTitle>
      </CardHeader>
      <CardContent>
        {bookmarkedHadith.length > 0 ? (
          <div className="space-y-4">
            {bookmarkedHadith.map((hadithId) => (
              <Card key={hadithId}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Hadith #{hadithId}</h3>
                      <p className="text-sm text-muted-foreground">
                        Bookmarked hadith content will appear here
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveBookmark(hadithId)}
                    >
                      <Bookmark className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            No bookmarked hadith yet
          </div>
        )}
      </CardContent>
    </Card>
  );
};