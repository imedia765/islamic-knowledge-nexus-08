import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star } from "lucide-react";

interface BookListProps {
  selectedLanguage: "all" | "arabic" | "english";
  selectedCategory: string;
}

interface Book {
  id: number;
  title: {
    arabic: string;
    english: string;
  };
  author: {
    arabic: string;
    english: string;
  };
  category: string;
  language: "arabic" | "english" | "both";
  rating: number;
  description: {
    arabic: string;
    english: string;
  };
}

const books: Book[] = [
  {
    id: 1,
    title: {
      arabic: "صحيح البخاري",
      english: "Sahih al-Bukhari"
    },
    author: {
      arabic: "محمد بن إسماعيل البخاري",
      english: "Muhammad ibn Ismail al-Bukhari"
    },
    category: "hadith",
    language: "both",
    rating: 5,
    description: {
      arabic: "أصح كتب الحديث وأكثرها شهرة في العالم الإسلامي",
      english: "The most authentic book of Hadith and the most famous in the Islamic world"
    }
  },
  {
    id: 2,
    title: {
      arabic: "تفسير ابن كثير",
      english: "Tafsir Ibn Kathir"
    },
    author: {
      arabic: "إسماعيل بن عمر بن كثير",
      english: "Ismail ibn Umar ibn Kathir"
    },
    category: "tafsir",
    language: "both",
    rating: 5,
    description: {
      arabic: "من أشهر كتب التفسير بالمأثور",
      english: "One of the most famous books of Tafsir bil-Mathur (interpretation based on authenticated sources)"
    }
  },
  {
    id: 3,
    title: {
      arabic: "رياض الصالحين",
      english: "Riyad as-Salihin"
    },
    author: {
      arabic: "يحيى بن شرف النووي",
      english: "Yahya ibn Sharaf al-Nawawi"
    },
    category: "spirituality",
    language: "both",
    rating: 5,
    description: {
      arabic: "كتاب في الأخلاق والآداب الإسلامية",
      english: "A book on Islamic ethics and manners"
    }
  }
];

export const BookList = ({ selectedLanguage, selectedCategory }: BookListProps) => {
  const filteredBooks = books.filter(book => {
    const languageMatch = 
      selectedLanguage === "all" || 
      (selectedLanguage === "arabic" && (book.language === "arabic" || book.language === "both")) ||
      (selectedLanguage === "english" && (book.language === "english" || book.language === "both"));
    
    const categoryMatch = selectedCategory === "all" || book.category === selectedCategory;
    
    return languageMatch && categoryMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBooks.map((book) => (
        <Card key={book.id} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>
              <div className="space-y-2">
                <div className="font-arabic text-xl">{book.title.arabic}</div>
                <div className="text-lg">{book.title.english}</div>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="space-y-1">
                <div className="font-arabic">{book.author.arabic}</div>
                <div>{book.author.english}</div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                <BookOpen className="h-4 w-4 text-primary-600" />
                <span className="capitalize">{book.category}</span>
                <div className="flex items-center ml-auto">
                  {Array.from({ length: book.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary-500 text-primary-500" />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-arabic text-gray-600">{book.description.arabic}</p>
                <p className="text-gray-600">{book.description.english}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};