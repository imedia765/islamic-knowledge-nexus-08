import { HistoricalEvent } from "@/types/history";

export const civilizationEvents: HistoricalEvent[] = [
  {
    year: "661-750 CE",
    title: "Umayyad Caliphate",
    description: "First hereditary dynasty in Islamic history, marked by significant territorial expansion and cultural developments.",
    category: "civilization",
    location: "Damascus",
    sources: ["Tarikh al-Tabari", "Al-Kamil fi al-Tarikh"]
  },
  {
    year: "750-1258 CE",
    title: "Abbasid Caliphate",
    description: "Golden Age of Islam, characterized by remarkable achievements in science, literature, and arts.",
    category: "civilization",
    location: "Baghdad",
    sources: ["Tarikh Baghdad", "Al-Fihrist"]
  },
  {
    year: "756-1031 CE",
    title: "Cordoba Caliphate",
    description: "Islamic golden age in Al-Andalus (Spain), marked by religious tolerance and cultural advancement.",
    category: "civilization",
    location: "Cordoba",
    sources: ["Al-Maqari's Nafh al-Tib", "Ibn Hayyan's Al-Muqtabis"]
  },
  {
    year: "1258 CE",
    title: "Fall of Baghdad",
    description: "The Mongol invasion led by Hulagu Khan resulted in the destruction of Baghdad, the capital of the Abbasid Caliphate. This event marked the end of the Islamic Golden Age.",
    category: "civilization",
    location: "Baghdad",
    sources: ["Ibn Kathir's Al-Bidaya wan-Nihaya", "Al-Dhahabi's History"],
    isLoss: true
  },
  {
    year: "1299-1923 CE",
    title: "Ottoman Empire",
    description: "Rise and peak of the Ottoman Empire, which became one of the largest and longest-lasting Islamic empires in history.",
    category: "civilization",
    location: "Constantinople/Istanbul",
    sources: ["Ottoman Archives", "Cambridge History of Turkey"]
  },
  {
    year: "1492 CE",
    title: "Fall of Granada",
    description: "The last Muslim emirate in Spain falls to Christian forces, marking the end of nearly 800 years of Islamic presence in Iberia.",
    category: "civilization",
    location: "Granada, Spain",
    sources: ["Al-Maqqari's Nafh al-Tib", "Spanish Chronicles"],
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
    year: "1744 CE",
    title: "First Saudi State",
    description: "Alliance between Muhammad ibn Saud and Muhammad ibn Abd al-Wahhab establishes the first Saudi state.",
    category: "civilization",
    location: "Diriyah",
    sources: ["Saudi Historical Records", "Ibn Bishr's Chronicle"]
  },
  {
    year: "1869 CE",
    title: "Suez Canal Opens",
    description: "Opening of the Suez Canal, significantly impacting trade and politics in the Muslim world.",
    category: "civilization",
    location: "Egypt",
    sources: ["Egyptian Archives", "European Records"]
  },
  {
    year: "1924 CE",
    title: "Abolition of Caliphate",
    description: "The Ottoman Caliphate is officially abolished by Mustafa Kemal Atatürk, marking the end of the last major caliphate.",
    category: "caliphate",
    location: "Turkey",
    sources: ["Turkish Republic Archives", "Contemporary News Reports"],
    isLoss: true
  },
  {
    year: "1947 CE",
    title: "Pakistan's Independence",
    description: "Creation of Pakistan as the first nation-state founded on Islamic identity in modern times.",
    category: "civilization",
    location: "South Asia",
    sources: ["Pakistan Movement Documents", "Jinnah Papers"]
  },
  {
    year: "1969 CE",
    title: "Organization of Islamic Cooperation",
    description: "Formation of the OIC as an international organization to safeguard Muslim interests.",
    category: "civilization",
    location: "Rabat, Morocco",
    sources: ["OIC Charter", "Diplomatic Records"]
  },
  {
    year: "1979 CE",
    title: "Islamic Revolution in Iran",
    description: "Revolution in Iran establishes an Islamic Republic, significantly impacting regional politics.",
    category: "civilization",
    location: "Iran",
    sources: ["Iranian State Archives", "Contemporary Accounts"]
  },
  {
    year: "1991 CE",
    title: "Gulf War Impact",
    description: "The Gulf War significantly affected the Muslim world, leading to long-term political and social changes in the region.",
    category: "civilization",
    location: "Middle East",
    sources: ["UN Documents", "Contemporary Reports"],
    isLoss: true
  },
  {
    year: "2010-2020",
    title: "Arab Spring",
    description: "Series of anti-government protests, uprisings, and armed rebellions that spread across much of the Arab world.",
    category: "civilization",
    location: "Middle East and North Africa",
    sources: ["International Media Reports", "Academic Studies"],
    isLoss: true
  }
];
