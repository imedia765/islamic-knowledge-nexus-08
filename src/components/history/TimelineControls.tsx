import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Filter, Search, Share, Printer } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface TimelineControlsProps {
  onSearch: (term: string) => void;
  onFilterByYear: (year: string) => void;
}

export const TimelineControls = ({ onSearch, onFilterByYear }: TimelineControlsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Islamic History Timeline",
        text: "Check out this Islamic history timeline",
        url: window.location.href,
      });
    } catch (error) {
      toast({
        title: "Sharing failed",
        description: "Your browser might not support sharing",
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex-1 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search historical events..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onSearch(e.target.value);
            }}
            className="pl-10"
          />
        </div>
        <div className="relative w-32">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Year"
            value={yearFilter}
            onChange={(e) => {
              setYearFilter(e.target.value);
              onFilterByYear(e.target.value);
            }}
            className="pl-10"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={handleShare} className="flex items-center gap-2">
          <Share className="h-4 w-4" />
          Share
        </Button>
        <Button variant="outline" onClick={handlePrint} className="flex items-center gap-2">
          <Printer className="h-4 w-4" />
          Print
        </Button>
      </div>
    </div>
  );
};