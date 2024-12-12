import { HistoricalEvent } from "@/types/history";
import { propheticEvents } from "./events/propheticEvents";
import { caliphateEvents } from "./events/caliphateEvents";
import { civilizationEvents } from "./events/civilizationEvents";
import { knowledgeEvents } from "./events/knowledgeEvents";
import { modernEvents } from "./events/modernEvents";
import { lossEvents } from "./events/lossEvents";

export const historicalEvents: HistoricalEvent[] = [
  ...propheticEvents,
  ...caliphateEvents,
  ...civilizationEvents,
  ...knowledgeEvents,
  ...modernEvents,
  ...lossEvents
].sort((a, b) => {
  // Extract the first year mentioned in the year string
  const getYear = (yearStr: string) => {
    const match = yearStr.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };
  
  return getYear(a.year) - getYear(b.year);
});