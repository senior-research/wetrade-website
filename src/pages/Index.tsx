import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import StockSelector from "@/components/StockSelector";
import StockChart from "@/components/StockChart";
import HoldingsCard from "@/components/HoldingsCard";
import NewsCard from "@/components/NewsCard";
import BotConfiguration from "@/components/BotConfiguration";

const Index = () => {
  const [selectedStock, setSelectedStock] = useState({
    symbol: "AAPL",
    name: "Apple Inc."
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 container mx-auto py-6 px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1">Trading Dashboard</h1>
          <p className="text-muted-foreground">Configure and monitor your WeTrade AI stock trading bot</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="md:col-span-4">
            <StockSelector 
              onSelect={setSelectedStock} 
              selectedStock={selectedStock} 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <StockChart 
              stockSymbol={selectedStock.symbol} 
              stockName={selectedStock.name} 
            />
          </div>
          
          <div className="lg:col-span-1">
            <HoldingsCard stockSymbol={selectedStock.symbol} />
          </div>
          
          <div className="lg:col-span-2">
            <NewsCard stockSymbol={selectedStock.symbol} />
          </div>
          
          <div className="lg:col-span-2">
            <BotConfiguration stockSymbol={selectedStock.symbol} />
          </div>
        </div>
      </main>
      
      <footer className="border-t border-border py-4 px-6">
        <div className="container mx-auto text-center text-xs text-muted-foreground">
          <p>WeTrade AI Trading Bot &copy; 2025 - For demonstration purposes only. Not financial advice.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
