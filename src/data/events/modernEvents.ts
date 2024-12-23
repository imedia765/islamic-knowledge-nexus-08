import { HistoricalEvent } from "@/types/history";

export const modernEvents: HistoricalEvent[] = [
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
    year: "2000-Present",
    title: "Islamic Finance Growth",
    description: "Rapid expansion of Islamic banking and finance, becoming a significant part of the global financial system.",
    category: "knowledge",
    location: "Global",
    sources: ["Islamic Financial Services Board Reports", "Academic Studies"]
  },
  {
    year: "2010-2020",
    title: "Arab Spring",
    description: "Series of anti-government protests, uprisings, and armed rebellions that spread across much of the Arab world.",
    category: "civilization",
    location: "Middle East and North Africa",
    sources: ["International Media Reports", "Academic Studies"],
    isLoss: true
  },
  {
    year: "2015-Present",
    title: "Digital Islamic Resources",
    description: "Emergence of comprehensive digital platforms for Islamic learning and research, making Islamic knowledge more accessible globally.",
    category: "knowledge",
    location: "Global",
    sources: ["Digital Archives", "Academic Papers"]
  },
  {
    year: "2021",
    title: "Taliban Return to Power",
    description: "The Taliban regained control of Afghanistan following the withdrawal of US forces, establishing an Islamic emirate.",
    category: "civilization",
    location: "Afghanistan",
    sources: ["International News Reports", "UN Documents"]
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