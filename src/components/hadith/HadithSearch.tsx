import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface HadithSearchProps {
  collections: Array<{ id: string; name: string }>;
  selectedCollection: string;
  setSelectedCollection: (id: string) => void;
  onSearch: (query: string) => void;
}

export const HadithSearch = ({
  collections,
  selectedCollection,
  setSelectedCollection,
  onSearch,
}: HadithSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = () => {
    onSearch(searchQuery);
    toast({
      title: "Searching Hadith",
      description: `Searching for: ${searchQuery}`,
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Search Hadith</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Input
              placeholder="Search by keyword or phrase..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button onClick={handleSearch}>
              <Search className="mr-2 h-4 w-4" />
              Search
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
          <CardTitle>Search Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground">
            Enter a search term to find relevant hadith
          </div>
        </CardContent>
      </Card>
    </div>
  );
};