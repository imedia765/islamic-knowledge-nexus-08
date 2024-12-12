import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import QuranPage from "./pages/QuranPage";
import ResearchPage from "./pages/ResearchPage";
import HadithPage from "./pages/HadithPage";
import FiqhPage from "./pages/FiqhPage";
import HistoryPage from "./pages/HistoryPage";
import BooksPage from "./pages/BooksPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quran" element={<QuranPage />} />
          <Route path="/hadith" element={<HadithPage />} />
          <Route path="/fiqh" element={<FiqhPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;