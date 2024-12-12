export interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
  category: "prophetic" | "caliphate" | "knowledge" | "civilization";
  location?: string;
  sources?: string[];
  isLoss?: boolean;
}