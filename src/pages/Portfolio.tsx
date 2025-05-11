
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { TrendingUp, TrendingDown, CircleArrowUp, CircleArrowDown } from "lucide-react";

// Mock portfolio data
const portfolioStocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: 15,
    avgPrice: 147.32,
    currentPrice: 187.45,
    change: 27.24,
    invested: 2209.80,
    value: 2811.75,
    profit: 601.95,
    trend: "up",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    shares: 8,
    avgPrice: 324.90,
    currentPrice: 403.78,
    change: 24.28,
    invested: 2599.20,
    value: 3230.24,
    profit: 631.04,
    trend: "up",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    shares: 10,
    avgPrice: 182.15,
    currentPrice: 164.32,
    change: -9.79,
    invested: 1821.50,
    value: 1643.20,
    profit: -178.30,
    trend: "down",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    shares: 12,
    avgPrice: 153.22,
    currentPrice: 180.75,
    change: 17.97,
    invested: 1838.64,
    value: 2169.00,
    profit: 330.36,
    trend: "up",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    shares: 14,
    avgPrice: 198.75,
    currentPrice: 175.22,
    change: -11.84,
    invested: 2782.50,
    value: 2453.08,
    profit: -329.42,
    trend: "down",
  },
];

// Calculate total portfolio values
const totalInvested = portfolioStocks.reduce((acc, stock) => acc + stock.invested, 0);
const totalValue = portfolioStocks.reduce((acc, stock) => acc + stock.value, 0);
const totalProfit = totalValue - totalInvested;
const totalProfitPercent = (totalProfit / totalInvested) * 100;

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 container mx-auto py-6 px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1">Your Portfolio</h1>
          <p className="text-muted-foreground">Track your investments and performance</p>
        </div>
        
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Invested</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">${totalInvested.toFixed(2)}</div>
              <div className="text-sm text-muted-foreground">Across {portfolioStocks.length} stocks</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Current Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">${totalValue.toFixed(2)}</div>
              <div className="flex items-center text-sm">
                <span className={totalProfit >= 0 ? "text-success" : "text-destructive"}>
                  {totalProfit >= 0 ? "+" : ""}{totalProfit.toFixed(2)} ({totalProfitPercent.toFixed(2)}%)
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">AI Projection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="text-2xl font-semibold mr-2">Bullish</div>
                <CircleArrowUp className="text-success h-6 w-6" />
              </div>
              <div className="text-sm text-muted-foreground">Based on portfolio composition</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Detailed Holdings */}
        <Card className="glass-card mb-6">
          <CardHeader>
            <CardTitle>Your Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stock</TableHead>
                  <TableHead>Shares</TableHead>
                  <TableHead>Avg. Price</TableHead>
                  <TableHead>Current</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Profit/Loss</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {portfolioStocks.map((stock) => (
                  <TableRow key={stock.symbol}>
                    <TableCell>
                      <div className="font-medium">{stock.symbol}</div>
                      <div className="text-xs text-muted-foreground">{stock.name}</div>
                    </TableCell>
                    <TableCell>{stock.shares}</TableCell>
                    <TableCell>${stock.avgPrice.toFixed(2)}</TableCell>
                    <TableCell>${stock.currentPrice.toFixed(2)}</TableCell>
                    <TableCell className={stock.change >= 0 ? "text-success" : "text-destructive"}>
                      {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)}%
                    </TableCell>
                    <TableCell>${stock.value.toFixed(2)}</TableCell>
                    <TableCell className={stock.profit >= 0 ? "text-success" : "text-destructive"}>
                      {stock.profit >= 0 ? "+" : ""}${stock.profit.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      {stock.trend === "up" ? (
                        <TrendingUp className="h-5 w-5 text-success" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-destructive" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        {/* AI Insights */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>AI Trading Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {portfolioStocks.slice(0, 3).map((stock) => (
                <div key={`insight-${stock.symbol}`} className="p-4 rounded-md bg-muted/30">
                  <div className="flex items-center mb-2">
                    <div className="font-semibold mr-2">{stock.symbol}</div>
                    {stock.trend === "up" ? (
                      <CircleArrowUp className="h-4 w-4 text-success" />
                    ) : (
                      <CircleArrowDown className="h-4 w-4 text-destructive" />
                    )}
                  </div>
                  <p className="text-sm">
                    {stock.trend === "up"
                      ? `Our AI analysis indicates continued growth for ${stock.name} based on recent performance metrics and market trends. Consider increasing your position.`
                      : `Our AI predicts ${stock.name} may continue to face challenges in the short term. Consider diversifying or holding until market conditions improve.`}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      
      <footer className="border-t border-border py-4 px-6">
        <div className="container mx-auto text-center text-xs text-muted-foreground">
          <p>WeTrade AI Trading Bot &copy; 2025 - For demonstration purposes only. Not financial advice.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
