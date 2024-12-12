import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Book, Search, List, Filter, MessageCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FiqhPage = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMadhab, setSelectedMadhab] = useState("hanafi");
  const [selectedCategory, setSelectedCategory] = useState("ibadah");

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Search query required",
        description: "Please enter a topic to search for",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Searching...",
      description: `Searching for "${searchQuery}" in ${selectedMadhab} fiqh under ${selectedCategory}`,
    });
    // Search implementation would go here
  };

  return (
    <div className="container mx-auto p-8 pt-24">
      <div className="grid gap-6">
        {/* Search Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Fiqh Rulings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Search fiqh topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch}>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filters Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Madhab Selection */}
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

          {/* Category Selection */}
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

        {/* Quick Access Tools */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:bg-accent transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Common Rulings
              </CardTitle>
            </CardHeader>
            <CardContent>
              Access frequently referenced rulings and fatwas
            </CardContent>
          </Card>

          <Card className="hover:bg-accent transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Study Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              Access educational resources and study guides
            </CardContent>
          </Card>

          <Card className="hover:bg-accent transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Ask a Scholar
              </CardTitle>
            </CardHeader>
            <CardContent>
              Submit questions to qualified scholars
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FiqhPage;