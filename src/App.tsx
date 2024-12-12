import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import QuranPage from "./pages/QuranPage";
import ResearchPage from "./pages/ResearchPage";

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
          <Route path="/hadith" element={<div className="p-8 pt-24 text-center">Hadith Module (Coming Soon)</div>} />
          <Route path="/fiqh" element={<div className="p-8 pt-24 text-center">Fiqh Module (Coming Soon)</div>} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;