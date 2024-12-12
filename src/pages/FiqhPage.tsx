import { useState } from "react";
import { FiqhSearch } from "@/components/fiqh/FiqhSearch";
import { FiqhFilters } from "@/components/fiqh/FiqhFilters";
import { FiqhTools } from "@/components/fiqh/FiqhTools";

const FiqhPage = () => {
  const [selectedMadhab, setSelectedMadhab] = useState("hanafi");
  const [selectedCategory, setSelectedCategory] = useState("ibadah");

  return (
    <div className="container mx-auto p-8 pt-24">
      <div className="grid gap-6">
        <FiqhSearch />
        
        <FiqhFilters
          selectedMadhab={selectedMadhab}
          setSelectedMadhab={setSelectedMadhab}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <FiqhTools />
      </div>
    </div>
  );
};

export default FiqhPage;