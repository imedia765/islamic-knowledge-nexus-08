import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const QuranViewer = () => {
  const [currentVerse, setCurrentVerse] = useState(1);
  const [currentSurah, setCurrentSurah] = useState(1);

  // Example verse data (in production, this would come from an API)
  const exampleVerse = {
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful",
    transliteration: "Bismillah ir-Rahman ir-Raheem",
    surahName: "Al-Fatiha",
    verseNumber: 1,
  };

  const handlePreviousVerse = () => {
    if (currentVerse > 1) {
      setCurrentVerse(currentVerse - 1);
    }
  };

  const handleNextVerse = () => {
    // In production, check against max verses
    setCurrentVerse(currentVerse + 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="overflow-hidden">
        <div className="p-6 bg-primary-50/50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {exampleVerse.surahName} - Verse {currentVerse}
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePreviousVerse}
                disabled={currentVerse === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextVerse}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
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
        </div>
      </Card>
    </div>
  );
};

export default QuranViewer;