import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star } from "lucide-react";

interface BookListProps {
  selectedLanguage: "all" | "arabic" | "english";
  selectedCategory: string;
  searchQuery: string;
  viewMode: "grid" | "list";
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
  },
  {
    id: 4,
    title: {
      arabic: "بلوغ المرام",
      english: "Bulugh al-Maram"
    },
    author: {
      arabic: "ابن حجر العسقلاني",
      english: "Ibn Hajar al-Asqalani"
    },
    category: "fiqh",
    language: "both",
    rating: 5,
    description: {
      arabic: "كتاب في أحاديث الأحكام الشرعية",
      english: "A comprehensive collection of hadith pertaining to legal rulings"
    }
  },
  {
    id: 5,
    title: {
      arabic: "العقيدة الواسطية",
      english: "Al-Aqidah Al-Wasitiyyah"
    },
    author: {
      arabic: "ابن تيمية",
      english: "Ibn Taymiyyah"
    },
    category: "aqeedah",
    language: "both",
    rating: 5,
    description: {
      arabic: "كتاب في العقيدة الإسلامية",
      english: "A comprehensive book on Islamic creed and belief"
    }
  },
  {
    id: 6,
    title: {
      arabic: "الرحيق المختوم",
      english: "The Sealed Nectar"
    },
    author: {
      arabic: "صفي الرحمن المباركفوري",
      english: "Safiur Rahman Mubarakpuri"
    },
    category: "seerah",
    language: "both",
    rating: 5,
    description: {
      arabic: "سيرة النبي محمد صلى الله عليه وسلم",
      english: "Biography of Prophet Muhammad (peace be upon him)"
    }
  },
  {
    id: 7,
    title: {
      arabic: "تاريخ الطبري",
      english: "History of Al-Tabari"
    },
    author: {
      arabic: "محمد بن جرير الطبري",
      english: "Muhammad ibn Jarir al-Tabari"
    },
    category: "history",
    language: "both",
    rating: 5,
    description: {
      arabic: "تاريخ الأمم والملوك",
      english: "The History of Nations and Kings"
    }
  },
  {
    id: 8,
    title: {
      arabic: "إحياء علوم الدين",
      english: "The Revival of Religious Sciences"
    },
    author: {
      arabic: "أبو حامد الغزالي",
      english: "Abu Hamid Al-Ghazali"
    },
    category: "spirituality",
    language: "both",
    rating: 5,
    description: {
      arabic: "موسوعة في التصوف والأخلاق الإسلامية",
      english: "Encyclopedia of Islamic spirituality and ethics"
    }
  },
  {
    id: 9,
    title: {
      arabic: "صحيح مسلم",
      english: "Sahih Muslim"
    },
    author: {
      arabic: "مسلم بن الحجاج",
      english: "Muslim ibn al-Hajjaj"
    },
    category: "hadith",
    language: "both",
    rating: 5,
    description: {
      arabic: "ثاني أصح كتب الحديث",
      english: "The second most authentic collection of Hadith"
    }
  },
  {
    id: 10,
    title: {
      arabic: "زاد المعاد",
      english: "Zad al-Ma'ad"
    },
    author: {
      arabic: "ابن قيم الجوزية",
      english: "Ibn Qayyim al-Jawziyya"
    },
    category: "fiqh",
    language: "both",
    rating: 5,
    description: {
      arabic: "كتاب في الفقه والسيرة النبوية",
      english: "A comprehensive book on Islamic jurisprudence and prophetic biography"
    }
  }
];

export const BookList = ({ selectedLanguage, selectedCategory, searchQuery, viewMode }: BookListProps) => {
  const filteredBooks = books.filter(book => {
    const languageMatch = 
      selectedLanguage === "all" || 
      (selectedLanguage === "arabic" && (book.language === "arabic" || book.language === "both")) ||
      (selectedLanguage === "english" && (book.language === "english" || book.language === "both"));
    
    const categoryMatch = selectedCategory === "all" || book.category === selectedCategory;
    
    const searchMatch = searchQuery === "" || 
      book.title.arabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.title.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.arabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.english.toLowerCase().includes(searchQuery.toLowerCase());
    
    return languageMatch && categoryMatch && searchMatch;
  });

  return (
    <div className={`${
      viewMode === "grid" 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        : "space-y-4"
    }`}>
      {filteredBooks.map((book) => (
        <Card 
          key={book.id} 
          className={`
            hover:shadow-lg transition-shadow duration-200
            ${viewMode === "list" ? "flex flex-col md:flex-row md:items-start" : ""}
          `}
        >
          <CardHeader className={viewMode === "list" ? "md:w-1/3" : ""}>
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
          <CardContent className={viewMode === "list" ? "md:w-2/3" : ""}>
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
