import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, Book, BookOpen, History, Filter, 
  Share2, Bookmark, Languages, SlidersHorizontal 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const HadithPage = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("bukhari");
  const [bookNumber, setBookNumber] = useState("");
  const [hadithNumber, setHadithNumber] = useState("");
  const [showTranslation, setShowTranslation] = useState(true);
  const [showArabic, setShowArabic] = useState(true);
  const [bookmarkedHadith, setBookmarkedHadith] = useState<string[]>([]);
  const [readingHistory, setReadingHistory] = useState<string[]>([]);

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
    // Add to reading history
    setReadingHistory(prev => [searchQuery, ...prev.slice(0, 9)]);
  };

  const handleBrowse = () => {
    toast({
      title: "Loading Hadith",
      description: `Loading Book ${bookNumber}, Hadith ${hadithNumber}`,
    });
    // Add to reading history
    setReadingHistory(prev => [`Book ${bookNumber}, Hadith ${hadithNumber}`, ...prev.slice(0, 9)]);
  };

  const handleBookmark = (hadithId: string) => {
    if (bookmarkedHadith.includes(hadithId)) {
      setBookmarkedHadith(prev => prev.filter(id => id !== hadithId));
      toast({
        title: "Bookmark Removed",
        description: "Hadith removed from bookmarks",
      });
    } else {
      setBookmarkedHadith(prev => [...prev, hadithId]);
      toast({
        title: "Bookmark Added",
        description: "Hadith added to bookmarks",
      });
    }
  };

  const handleShare = () => {
    // Implement share functionality
    toast({
      title: "Share",
      description: "Sharing options opened",
    });
  };

  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">Hadith Studies</h1>
      
      <div className="flex items-center gap-4 mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Display Settings
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Display Settings</DialogTitle>
              <DialogDescription>
                Customize how hadith are displayed
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="show-translation">Show Translation</Label>
                <Switch
                  id="show-translation"
                  checked={showTranslation}
                  onCheckedChange={setShowTranslation}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-arabic">Show Arabic</Label>
                <Switch
                  id="show-arabic"
                  checked={showArabic}
                  onCheckedChange={setShowArabic}
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleShare()}>
              Copy Link
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare()}>
              Share to Twitter
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare()}>
              Share to Facebook
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tabs defaultValue="search" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-[500px]">
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
          <TabsTrigger value="bookmarks">
            <Bookmark className="mr-2 h-4 w-4" />
            Bookmarks
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

        <TabsContent value="bookmarks" className="space-y-4">
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
                            onClick={() => handleBookmark(hadithId)}
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
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
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
                        onClick={() => {
                          setSearchQuery(item);
                          handleSearch();
                        }}
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HadithPage;
