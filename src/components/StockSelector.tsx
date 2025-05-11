
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

// Mock data for popular stocks
const popularStocks = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft Corp." },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "AMZN", name: "Amazon.com Inc." },
  { symbol: "TSLA", name: "Tesla Inc." },
  { symbol: "NVDA", name: "NVIDIA Corp." },
];

interface StockSelectorProps {
  onSelect: (stock: { symbol: string; name: string }) => void;
  selectedStock: { symbol: string; name: string };
}

const StockSelector: React.FC<StockSelectorProps> = ({ onSelect, selectedStock }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredStocks = popularStocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (stock: { symbol: string; name: string }) => {
    onSelect(stock);
    toast({
      title: "Stock Selected",
      description: `Now tracking ${stock.name} (${stock.symbol})`,
      duration: 3000,
    });
  };

  return (
    <div className="glass-card rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Select Stock</h2>
      </div>
      <div className="relative mb-4">
        <Input
          type="text"
          placeholder="Search stocks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-background/50 border-border"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {filteredStocks.map((stock) => (
          <Button
            key={stock.symbol}
            onClick={() => handleSelect(stock)}
            variant={selectedStock.symbol === stock.symbol ? "default" : "outline"}
            className={`text-sm ${
              selectedStock.symbol === stock.symbol
                ? "bg-primary text-primary-foreground"
                : "bg-background/50 hover:bg-accent/20"
            }`}
            size="sm"
          >
            {stock.symbol}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StockSelector;
