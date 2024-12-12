import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quran" element={<div className="p-8 text-center">Quran Module (Coming Soon)</div>} />
          <Route path="/hadith" element={<div className="p-8 text-center">Hadith Module (Coming Soon)</div>} />
          <Route path="/fiqh" element={<div className="p-8 text-center">Fiqh Module (Coming Soon)</div>} />
          <Route path="/research" element={<div className="p-8 text-center">Research Tools (Coming Soon)</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;