import { useState } from "react";
import { Bot, Send, X, Book, Search, History, Languages, FileText, Brain, BookOpen, Filter, MessageSquare, Settings, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Message {
  role: "user" | "assistant";
  content: string;
}

type AIMode = "general" | "tafsir" | "hadith" | "fiqh" | "translation" | "research";

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [mode, setMode] = useState<AIMode>("general");

  const aiModes = {
    general: {
      icon: <Bot className="h-5 w-5" />,
      title: "General Assistant",
      placeholder: "Ask any Islamic question...",
    },
    tafsir: {
      icon: <Book className="h-5 w-5" />,
      title: "Tafsir Analysis",
      placeholder: "Enter verse number or topic for tafsir analysis...",
    },
    hadith: {
      icon: <History className="h-5 w-5" />,
      title: "Hadith Research",
      placeholder: "Search and analyze hadith...",
    },
    fiqh: {
      icon: <FileText className="h-5 w-5" />,
      title: "Fiqh Assistant",
      placeholder: "Ask about Islamic jurisprudence...",
    },
    translation: {
      icon: <Languages className="h-5 w-5" />,
      title: "Arabic Translator",
      placeholder: "Enter text for translation and analysis...",
    },
    research: {
      icon: <Brain className="h-5 w-5" />,
      title: "Research Assistant",
      placeholder: "Help with Islamic academic research...",
    },
  };

  const quickActions = [
    {
      icon: <BookOpen className="h-4 w-4" />,
      label: "Quick Reference",
      action: () => {
        setInput("Show me quick references for the current topic");
        handleSend();
      },
    },
    {
      icon: <Search className="h-4 w-4" />,
      label: "Deep Search",
      action: () => {
        setInput("Perform a deep search on this topic across all sources");
        handleSend();
      },
    },
    {
      icon: <Filter className="h-4 w-4" />,
      label: "Compare Sources",
      action: () => {
        setInput("Compare different scholarly opinions on this matter");
        handleSend();
      },
    },
    {
      icon: <MessageSquare className="h-4 w-4" />,
      label: "Summarize",
      action: () => {
        setInput("Provide a concise summary of the current discussion");
        handleSend();
      },
    },
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    
    setTimeout(() => {
      const response = `This is a demo response for ${mode} mode. In a real implementation, this would provide specialized ${mode} analysis and insights.`;
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    }, 1000);
    
    setInput("");
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`${
            isMinimized 
              ? "relative h-10 w-10 rounded-full" 
              : "fixed right-4 top-20 z-50 h-12 w-12 rounded-full shadow-lg hover:shadow-xl"
          } transition-all duration-200 bg-primary text-primary-foreground hover:bg-primary/90`}
          onClick={() => setIsMinimized(false)}
        >
          <Bot className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader className="space-y-4">
          <div className="flex flex-row justify-between items-center">
            <SheetTitle className="flex items-center gap-2">
              {aiModes[mode].icon}
              {aiModes[mode].title}
            </SheetTitle>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>AI Assistant Settings</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>About AI Assistant</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Select value={mode} onValueChange={(value) => setMode(value as AIMode)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Assistant</SelectItem>
                  <SelectItem value="tafsir">Tafsir Analysis</SelectItem>
                  <SelectItem value="hadith">Hadith Research</SelectItem>
                  <SelectItem value="fiqh">Fiqh Assistant</SelectItem>
                  <SelectItem value="translation">Arabic Translator</SelectItem>
                  <SelectItem value="research">Research Assistant</SelectItem>
                </SelectContent>
              </Select>
              <SheetClose asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleMinimize}
                >
                  <X className="h-4 w-4" />
                </Button>
              </SheetClose>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {quickActions.map((action, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 whitespace-nowrap"
                      onClick={action.action}
                    >
                      {action.icon}
                      <span className="hidden sm:inline">{action.label}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{action.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </SheetHeader>
        <div className="flex flex-col h-[calc(100vh-12rem)]">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4 mt-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "assistant" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "assistant"
                        ? "bg-muted"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="mt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={aiModes[mode].placeholder}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}