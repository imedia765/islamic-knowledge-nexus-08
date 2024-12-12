import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BookFiltersProps {
  selectedLanguage: "all" | "arabic" | "english";
  setSelectedLanguage: (language: "all" | "arabic" | "english") => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const BookFilters = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedCategory,
  setSelectedCategory,
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
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="w-full md:w-auto">
        <Select
          value={selectedLanguage}
          onValueChange={(value: "all" | "arabic" | "english") => setSelectedLanguage(value)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Languages</SelectItem>
            <SelectItem value="arabic">Arabic</SelectItem>
            <SelectItem value="english">English</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-auto">
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="w-[200px]">
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
    </div>
  );
};