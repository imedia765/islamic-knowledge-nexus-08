import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface HadithBrowserProps {
  collections: Array<{ id: string; name: string }>;
  selectedCollection: string;
  setSelectedCollection: (id: string) => void;
  onBrowse: (bookNumber: string, hadithNumber: string) => void;
}

export const HadithBrowser = ({
  collections,
  selectedCollection,
  setSelectedCollection,
  onBrowse,
}: HadithBrowserProps) => {
  const [bookNumber, setBookNumber] = useState("");
  const [hadithNumber, setHadithNumber] = useState("");
  const { toast } = useToast();

  const handleBrowse = () => {
    onBrowse(bookNumber, hadithNumber);
    toast({
      title: "Loading Hadith",
      description: `Loading Book ${bookNumber}, Hadith ${hadithNumber}`,
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Browse by Reference</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Input
              placeholder="Book Number"
              value={bookNumber}
              onChange={(e) => setBookNumber(e.target.value)}
              type="number"
            />
            <Input
              placeholder="Hadith Number"
              value={hadithNumber}
              onChange={(e) => setHadithNumber(e.target.value)}
              type="number"
            />
            <Button onClick={handleBrowse}>
              <Filter className="mr-2 h-4 w-4" />
              Browse
            </Button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {collections.map((collection) => (
              <Button
                key={collection.id}
                variant={selectedCollection === collection.id ? "default" : "outline"}
                onClick={() => setSelectedCollection(collection.id)}
                size="sm"
              >
                {collection.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Browse Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground">
            Enter a book and hadith number to view specific hadith
          </div>
        </CardContent>
      </Card>
    </div>
  );
};