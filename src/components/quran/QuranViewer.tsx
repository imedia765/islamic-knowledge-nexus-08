import { useState } from "react";
import { ChevronLeft, ChevronRight, PlayCircle, PauseCircle, Bookmark, Book, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const QuranViewer = () => {
  const [currentVerse, setCurrentVerse] = useState(1);
  const [currentSurah, setCurrentSurah] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [selectedTranslation, setSelectedTranslation] = useState("english");

  // Example verse data (in production, this would come from an API)
  const exampleVerse = {
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful",
    transliteration: "Bismillah ir-Rahman ir-Raheem",
    surahName: "Al-Fatiha",
    verseNumber: 1,
    audio: "path-to-audio-file.mp3", // This would be a real audio file path in production
  };

  // Example surahs data (in production, this would come from an API)
  const surahs = [
    { id: 1, name: "Al-Fatiha", versesCount: 7 },
    { id: 2, name: "Al-Baqarah", versesCount: 286 },
    // ... more surahs would be added here
  ];

  const translations = [
    { id: "english", name: "English" },
    { id: "urdu", name: "Urdu" },
    { id: "indonesian", name: "Indonesian" },
    { id: "turkish", name: "Turkish" },
  ];

  const handlePreviousVerse = () => {
    if (currentVerse > 1) {
      setCurrentVerse(currentVerse - 1);
    }
  };

  const handleNextVerse = () => {
    // In production, check against max verses
    setCurrentVerse(currentVerse + 1);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    // In production, this would handle actual audio playback
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In production, this would save the bookmark to user's preferences
  };

  const handleSurahChange = (value: string) => {
    setCurrentSurah(Number(value));
    setCurrentVerse(1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="overflow-hidden">
        <div className="p-6 bg-primary-50/50">
          {/* Header with Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Select onValueChange={handleSurahChange} value={currentSurah.toString()}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Surah" />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className="h-[200px]">
                    {surahs.map((surah) => (
                      <SelectItem key={surah.id} value={surah.id.toString()}>
                        {surah.name}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
              <span className="text-xl font-semibold text-gray-900">
                Verse {currentVerse}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Select onValueChange={setSelectedTranslation} value={selectedTranslation}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Translation" />
                </SelectTrigger>
                <SelectContent>
                  {translations.map((translation) => (
                    <SelectItem key={translation.id} value={translation.id}>
                      {translation.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleBookmark}
                    className={isBookmarked ? "text-primary-600" : ""}
                  >
                    <Bookmark className="h-4 w-4" fill={isBookmarked ? "currentColor" : "none"} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isBookmarked ? "Remove bookmark" : "Add bookmark"}</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={togglePlayback}
                  >
                    {isPlaying ? (
                      <PauseCircle className="h-4 w-4" />
                    ) : (
                      <PlayCircle className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isPlaying ? "Pause recitation" : "Play recitation"}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              onClick={handlePreviousVerse}
              disabled={currentVerse === 1}
              className="w-[100px]"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={handleNextVerse}
              className="w-[100px]"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          {/* Verse Content */}
          <div className="text-right mb-6">
            <p className="font-arabic text-4xl leading-loose text-gray-900 mb-4">
              {exampleVerse.arabic}
            </p>
            <p className="text-lg text-gray-600 italic mb-2">
              {exampleVerse.transliteration}
            </p>
          </div>
          
          <Separator className="my-4" />
          
          <div className="text-left">
            <p className="text-lg text-gray-700">
              {exampleVerse.translation}
            </p>
          </div>

          {/* Audio Player */}
          {isPlaying && (
            <div className="mt-6 flex items-center gap-2 text-gray-600">
              <Volume2 className="h-4 w-4" />
              <span className="text-sm">Now playing verse {currentVerse}</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default QuranViewer;