import { HistoricalEvent } from "@/types/history";

export const caliphateEvents: HistoricalEvent[] = [
  {
    year: "632-634 CE",
    title: "Caliphate of Abu Bakr",
    description: "First Caliph of Islam who unified Arabia, dealt with the riddah wars, and began the compilation of the Quran.",
    category: "caliphate",
    location: "Madinah",
    sources: ["Tarikh al-Tabari", "Al-Bidayah wan-Nihayah"]
  },
  {
    year: "634-644 CE",
    title: "Caliphate of Umar ibn Al-Khattab",
    description: "Second Caliph who established the Islamic calendar, expanded the state significantly, and introduced numerous administrative reforms.",
    category: "caliphate",
    location: "Madinah",
    sources: ["Tarikh al-Tabari", "Futuh al-Buldan"]
  },
  {
    year: "644-656 CE",
    title: "Caliphate of Uthman ibn Affan",
    description: "Third Caliph who standardized the Quran's compilation and expanded the Islamic territory to include parts of modern-day Iran and Armenia.",
    category: "caliphate",
    location: "Madinah",
    sources: ["Tarikh al-Tabari", "Al-Bidayah wan-Nihayah"]
  },
  {
    year: "656-661 CE",
    title: "Caliphate of Ali ibn Abi Talib",
    description: "Fourth Caliph, cousin and son-in-law of the Prophet ﷺ, known for his wisdom and justice in governance.",
    category: "caliphate",
    location: "Kufa",
    sources: ["Tarikh al-Tabari", "Nahj al-Balagha"]
  },
  {
    year: "750-1258 CE",
    title: "Abbasid Caliphate",
    description: "Golden Age of Islam, characterized by remarkable achievements in science, literature, and arts.",
    category: "caliphate",
    location: "Baghdad",
    sources: ["Tarikh Baghdad", "Al-Fihrist"]
  },
  {
    year: "1258 CE",
    title: "Fall of Baghdad",
    description: "The Mongol invasion led by Hulagu Khan resulted in the destruction of Baghdad, the capital of the Abbasid Caliphate. This event marked the end of the Islamic Golden Age.",
    category: "caliphate",
    location: "Baghdad",
    sources: ["Ibn Kathir's Al-Bidaya wan-Nihaya", "Al-Dhahabi's History"],
    isLoss: true
  },
  {
    year: "1517 CE",
    title: "Ottoman Caliphate",
    description: "The Ottoman Empire becomes the seat of the Caliphate after defeating the Mamluks, unifying much of the Muslim world.",
    category: "caliphate",
    location: "Cairo",
    sources: ["Ottoman Records", "Al-Jabarti's Chronicles"]
  },
  {
    year: "1924 CE",
    title: "Abolition of Caliphate",
    description: "The Ottoman Caliphate is officially abolished by Mustafa Kemal Atatürk, marking the end of the last major caliphate.",
    category: "caliphate",
    location: "Turkey",
    sources: ["Turkish Republic Archives", "Contemporary News Reports"],
    isLoss: true
  }
];
