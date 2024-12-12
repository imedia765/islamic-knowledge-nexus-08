import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface BookFiltersProps {
  selectedLanguage: "all" | "arabic" | "english";
  setSelectedLanguage: (language: "all" | "arabic" | "english") => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export const BookFilters = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
}: BookFiltersProps) => {
  const categories = [
    "all",
    "tafsir",
    "hadith",
    "fiqh",
    "aqeedah",
    "seerah",
    "history",
    "spirituality"
  ];

  return (
    <div className="space-y-4 p-4 bg-primary-50/50 rounded-lg shadow-sm">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary-600" />
        <Input
          placeholder="Search books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 border-primary-200 focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="w-full sm:w-auto">
          <Select
            value={selectedLanguage}
            onValueChange={(value: "all" | "arabic" | "english") => setSelectedLanguage(value)}
          >
            <SelectTrigger className="w-full sm:w-[200px] border-primary-200">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              <SelectItem value="arabic">Arabic</SelectItem>
              <SelectItem value="english">English</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-auto">
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-full sm:w-[200px] border-primary-200">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2 ml-auto">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            onClick={() => setViewMode("grid")}
            size="sm"
            className={`${
              viewMode === "grid"
                ? "bg-primary-600 hover:bg-primary-700"
                : "border-primary-200 text-primary-700 hover:bg-primary-50"
            }`}
          >
            Grid
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            onClick={() => setViewMode("list")}
            size="sm"
            className={`${
              viewMode === "list"
                ? "bg-primary-600 hover:bg-primary-700"
                : "border-primary-200 text-primary-700 hover:bg-primary-50"
            }`}
          >
            List
          </Button>
        </div>
      </div>
    </div>
  );
};