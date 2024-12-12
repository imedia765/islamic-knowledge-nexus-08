import { HistoricalEvent } from "@/types/history";

export const historicalEvents: HistoricalEvent[] = [
  // Prophetic Era Events
  {
    year: "570 CE",
    title: "Birth of Prophet Muhammad ﷺ",
    description: "Prophet Muhammad ﷺ was born in Makkah in the Year of the Elephant. His father Abdullah had passed away before his birth, and his mother Aminah would care for him in his early years.",
    category: "prophetic",
    location: "Makkah",
    sources: ["Sealed Nectar", "Ibn Ishaq's Sirah"]
  },
  {
    year: "576 CE",
    title: "Death of Prophet's Mother",
    description: "Aminah bint Wahb, the Prophet's mother, passed away at Abwa while returning from Madinah, leaving the young Muhammad ﷺ in the care of his grandfather Abdul Muttalib.",
    category: "prophetic",
    location: "Abwa",
    sources: ["Sealed Nectar", "Ibn Hisham's Sirah"]
  },
  {
    year: "595 CE",
    title: "Marriage to Khadijah",
    description: "Prophet Muhammad ﷺ married Khadijah bint Khuwaylid, who would become his greatest supporter and the first to accept Islam.",
    category: "prophetic",
    location: "Makkah",
    sources: ["Sahih Bukhari", "Sealed Nectar"]
  },
  {
    year: "610 CE",
    title: "First Revelation",
    description: "The first verses of the Quran were revealed to Prophet Muhammad ﷺ in the Cave of Hira during the month of Ramadan.",
    category: "prophetic",
    location: "Cave of Hira, Makkah",
    sources: ["Sahih Bukhari", "Sahih Muslim"]
  },
  {
    year: "613 CE",
    title: "Public Preaching Begins",
    description: "Prophet Muhammad ﷺ began publicly preaching Islam in Makkah, facing increasing opposition from the Quraysh.",
    category: "prophetic",
    location: "Makkah",
    sources: ["Ibn Ishaq's Sirah", "Sealed Nectar"]
  },
  {
    year: "619 CE",
    title: "Year of Sorrow",
    description: "The Prophet ﷺ lost both his beloved wife Khadijah and his uncle Abu Talib in the same year, marking a particularly difficult period.",
    category: "prophetic",
    location: "Makkah",
    sources: ["Sealed Nectar", "Ibn Hisham's Sirah"]
  },
  {
    year: "620 CE",
    title: "Night Journey and Ascension",
    description: "The miraculous night journey (Isra) and ascension (Miraj) of Prophet Muhammad ﷺ occurred, during which the five daily prayers were prescribed.",
    category: "prophetic",
    location: "Makkah to Jerusalem to Heavens",
    sources: ["Sahih Bukhari", "Sahih Muslim"]
  },
  {
    year: "622 CE",
    title: "The Hijra",
    description: "The migration of Prophet Muhammad ﷺ and his followers from Makkah to Madinah, marking the beginning of the Islamic calendar.",
    category: "prophetic",
    location: "Makkah to Madinah",
    sources: ["Sealed Nectar", "Ibn Hisham's Sirah"]
  },
  // Caliphate Era Events
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
  // Islamic Civilization Events
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
  // Knowledge & Science Events
  {
    year: "750-850 CE",
    title: "Translation Movement",
    description: "Major translation effort of Greek, Persian, and Indian texts into Arabic, laying foundation for Islamic golden age.",
    category: "knowledge",
    location: "Baghdad",
    sources: ["Al-Fihrist", "Tarikh al-Hukama"]
  },
  {
    year: "780-850 CE",
    title: "Al-Khwarizmi's Contributions",
    description: "Development of algebra and algorithms by Muhammad ibn Musa al-Khwarizmi, founding father of algebra.",
    category: "knowledge",
    location: "Baghdad",
    sources: ["Kitab al-Jabr", "Al-Fihrist"]
  },
  {
    year: "965-1040 CE",
    title: "Ibn Al-Haytham's Optics",
    description: "Revolutionary work in optics and scientific method by Ibn Al-Haytham, known as 'father of modern optics'.",
    category: "knowledge",
    location: "Cairo",
    sources: ["Kitab al-Manazir", "Al-Qifti's Tarikh al-Hukama"]
  },
  {
    year: "980-1037 CE",
    title: "Ibn Sina's Medical Canon",
    description: "Publication of 'The Canon of Medicine' by Ibn Sina (Avicenna), remained medical authority until 18th century.",
    category: "knowledge",
    location: "Bukhara",
    sources: ["Al-Qanun fi al-Tibb", "Ibn Abi Usaybi'ah's History of Physicians"]
  },
  // Additional Events including losses and modern history
  {
    year: "1258 CE",
    title: "Fall of Baghdad",
    description: "The Mongol invasion led by Hulagu Khan resulted in the destruction of Baghdad, the capital of the Abbasid Caliphate. This event marked the end of the Islamic Golden Age, with countless books and scholarly works destroyed.",
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
    year: "2000-Present",
    title: "Islamic Finance Growth",
    description: "Rapid expansion of Islamic banking and finance, becoming a significant part of the global financial system.",
    category: "knowledge",
    location: "Global",
    sources: ["Islamic Financial Services Board Reports", "Academic Studies"]
  }
];
