import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories = [
    { id: "prophetic", label: "Prophetic Era" },
    { id: "caliphate", label: "Caliphate Era" },
    { id: "civilization", label: "Islamic Civilization" },
    { id: "knowledge", label: "Knowledge & Science" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => onCategoryChange(null)}
        className="text-sm"
      >
        All Events
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className="text-sm"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};