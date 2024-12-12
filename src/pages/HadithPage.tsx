import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Book, BookOpen, History, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HadithPage = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("bukhari");
  const [bookNumber, setBookNumber] = useState("");
  const [hadithNumber, setHadithNumber] = useState("");

  const collections = [
    { id: "bukhari", name: "Sahih al-Bukhari" },
    { id: "muslim", name: "Sahih Muslim" },
    { id: "abudawud", name: "Sunan Abu Dawud" },
    { id: "tirmidhi", name: "Jami at-Tirmidhi" },
    { id: "nasai", name: "Sunan an-Nasa'i" },
    { id: "ibnmajah", name: "Sunan Ibn Majah" },
  ];

  const handleSearch = () => {
    toast({
      title: "Searching Hadith",
      description: `Searching for: ${searchQuery}`,
    });
    // Implement hadith search functionality
  };

  const handleBrowse = () => {
    toast({
      title: "Loading Hadith",
      description: `Loading Book ${bookNumber}, Hadith ${hadithNumber}`,
    });
    // Implement hadith browsing functionality
  };

  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">Hadith Studies</h1>
      
      <Tabs defaultValue="search" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="search">
            <Search className="mr-2 h-4 w-4" />
            Search
          </TabsTrigger>
          <TabsTrigger value="browse">
            <Book className="mr-2 h-4 w-4" />
            Browse
          </TabsTrigger>
          <TabsTrigger value="collections">
            <BookOpen className="mr-2 h-4 w-4" />
            Collections
          </TabsTrigger>
          <TabsTrigger value="history">
            <History className="mr-2 h-4 w-4" />
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="space-y-4">
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
        </TabsContent>

        <TabsContent value="browse" className="space-y-4">
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
        </TabsContent>

        <TabsContent value="collections" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <Card key={collection.id} className="hover:bg-accent transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle>{collection.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Browse and search within {collection.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground">
                Your recent hadith searches will appear here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HadithPage;