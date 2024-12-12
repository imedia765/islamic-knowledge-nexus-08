import { useState } from "react";
import { Bot, Send, X } from "lucide-react";
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

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    
    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I am a demo AI assistant. This is a placeholder response.",
        },
      ]);
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
        <SheetHeader className="flex flex-row justify-between items-center">
          <SheetTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            AI Assistant
          </SheetTitle>
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
        </SheetHeader>
        <div className="flex flex-col h-[calc(100vh-8rem)]">
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
                placeholder="Type your message..."
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