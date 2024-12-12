import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Book, BookOpen, History, Bookmark } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { HadithSearch } from "@/components/hadith/HadithSearch";
import { HadithBrowser } from "@/components/hadith/HadithBrowser";
import { HadithBookmarks } from "@/components/hadith/HadithBookmarks";
import { HadithHistory } from "@/components/hadith/HadithHistory";

const collections = [
  { id: "bukhari", name: "Sahih al-Bukhari" },
  { id: "muslim", name: "Sahih Muslim" },
  { id: "abudawud", name: "Sunan Abu Dawud" },
  { id: "tirmidhi", name: "Jami at-Tirmidhi" },
  { id: "nasai", name: "Sunan an-Nasa'i" },
  { id: "ibnmajah", name: "Sunan Ibn Majah" },
];

const HadithPage = () => {
  const { toast } = useToast();
  const [selectedCollection, setSelectedCollection] = useState("bukhari");
  const [bookmarkedHadith, setBookmarkedHadith] = useState<string[]>([]);
  const [readingHistory, setReadingHistory] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setReadingHistory(prev => [query, ...prev.slice(0, 9)]);
  };

  const handleBrowse = (bookNumber: string, hadithNumber: string) => {
    setReadingHistory(prev => [`Book ${bookNumber}, Hadith ${hadithNumber}`, ...prev.slice(0, 9)]);
  };

  const handleBookmark = (hadithId: string) => {
    setBookmarkedHadith(prev => prev.filter(id => id !== hadithId));
    toast({
      title: "Bookmark Removed",
      description: "Hadith removed from bookmarks",
    });
  };

  const handleHistoryItemClick = (query: string) => {
    handleSearch(query);
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
          <TabsTrigger value="bookmarks">
            <Bookmark className="mr-2 h-4 w-4" />
            Bookmarks
          </TabsTrigger>
          <TabsTrigger value="history">
            <History className="mr-2 h-4 w-4" />
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="search">
          <HadithSearch
            collections={collections}
            selectedCollection={selectedCollection}
            setSelectedCollection={setSelectedCollection}
            onSearch={handleSearch}
          />
        </TabsContent>

        <TabsContent value="browse">
          <HadithBrowser
            collections={collections}
            selectedCollection={selectedCollection}
            setSelectedCollection={setSelectedCollection}
            onBrowse={handleBrowse}
          />
        </TabsContent>

        <TabsContent value="bookmarks">
          <HadithBookmarks
            bookmarkedHadith={bookmarkedHadith}
            onRemoveBookmark={handleBookmark}
          />
        </TabsContent>

        <TabsContent value="history">
          <HadithHistory
            readingHistory={readingHistory}
            onHistoryItemClick={handleHistoryItemClick}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HadithPage;