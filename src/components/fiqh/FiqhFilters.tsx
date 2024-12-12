import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Book, List } from "lucide-react";

interface FiqhFiltersProps {
  selectedMadhab: string;
  setSelectedMadhab: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

export const FiqhFilters = ({
  selectedMadhab,
  setSelectedMadhab,
  selectedCategory,
  setSelectedCategory,
}: FiqhFiltersProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            Select Madhab
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedMadhab}
            onValueChange={setSelectedMadhab}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hanafi" id="hanafi" />
              <Label htmlFor="hanafi">Hanafi</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="maliki" id="maliki" />
              <Label htmlFor="maliki">Maliki</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="shafii" id="shafii" />
              <Label htmlFor="shafii">Shafi'i</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hanbali" id="hanbali" />
              <Label htmlFor="hanbali">Hanbali</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <List className="h-5 w-5" />
            Select Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ibadah" id="ibadah" />
              <Label htmlFor="ibadah">Ibadah</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="muamalat" id="muamalat" />
              <Label htmlFor="muamalat">Mu'amalat</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="family" id="family" />
              <Label htmlFor="family">Family</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
};