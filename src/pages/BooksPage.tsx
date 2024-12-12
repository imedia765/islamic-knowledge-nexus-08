import { BookList } from "@/components/books/BookList";
import { BookFilters } from "@/components/books/BookFilters";
import { useState } from "react";

const BooksPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<"all" | "arabic" | "english">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Islamic Books Collection</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our curated collection of highly regarded Islamic literature in both Arabic and English
        </p>
      </div>
      
      <BookFilters 
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      
      <div className="mt-8">
        <BookList 
          selectedLanguage={selectedLanguage}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          viewMode={viewMode}
        />
      </div>
    </div>
  );
};

export default BooksPage;