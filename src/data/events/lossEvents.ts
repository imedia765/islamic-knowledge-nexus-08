import { HistoricalEvent } from "@/types/history";

export const lossEvents: HistoricalEvent[] = [
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
    year: "1492 CE",
    title: "Fall of Granada",
    description: "The last Muslim emirate in Spain falls to Christian forces, marking the end of nearly 800 years of Islamic presence in Iberia.",
    category: "civilization",
    location: "Granada, Spain",
    sources: ["Al-Maqqari's Nafh al-Tib", "Spanish Chronicles"],
    isLoss: true
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
    year: "1948 CE",
    title: "Creation of Israel",
    description: "The establishment of Israel led to the displacement of Palestinians and ongoing conflicts in the region.",
    category: "civilization",
    location: "Palestine",
    sources: ["UN Documents", "Historical Records"],
    isLoss: true
  },
  {
    year: "2023-2024",
    title: "Gaza-Israel Conflict",
    description: "Devastating conflict in Gaza resulting in significant civilian casualties and humanitarian crisis, marking one of the most severe conflicts in recent Palestinian history.",
    category: "civilization",
    location: "Gaza, Palestine",
    sources: ["UN Reports", "International Media Coverage"],
    isLoss: true
  }
];