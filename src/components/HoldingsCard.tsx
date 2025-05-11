
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock data based on the stock symbol
const generateMockHoldings = (stockSymbol: string) => {
  const priceMap: Record<string, number> = {
    'AAPL': 187.45,
    'MSFT': 403.78,
    'GOOGL': 164.32,
    'AMZN': 180.75,
    'TSLA': 175.22,
    'NVDA': 884.45
  };
  
  const price = priceMap[stockSymbol] || 150.00;
  const shares = Math.floor(Math.random() * 20) + 5;
  const averageCost = price * (0.85 + Math.random() * 0.3);
  const invested = averageCost * shares;
  const marketValue = price * shares;
  const profit = marketValue - invested;
  const profitPercentage = (profit / invested) * 100;
  
  return {
    shares,
    averageCost: averageCost.toFixed(2),
    invested: invested.toFixed(2),
    marketValue: marketValue.toFixed(2),
    profit: profit.toFixed(2),
    profitPercentage: profitPercentage.toFixed(2),
    allocation: (Math.random() * 25 + 5).toFixed(1)
  };
};

interface HoldingsCardProps {
  stockSymbol: string;
}

const HoldingsCard: React.FC<HoldingsCardProps> = ({ stockSymbol }) => {
  const holdings = generateMockHoldings(stockSymbol);
  const isProfitable = parseFloat(holdings.profit) > 0;

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg">Your Holdings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">Portfolio allocation</div>
          <div className="text-sm font-medium">{holdings.allocation}%</div>
        </div>
        <Progress value={parseFloat(holdings.allocation)} max={100} className="h-2 bg-muted" />
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <div className="text-sm text-muted-foreground">Shares</div>
            <div className="text-lg font-medium">{holdings.shares}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Avg. Cost</div>
            <div className="text-lg font-medium">${holdings.averageCost}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Invested</div>
            <div className="text-lg font-medium">${holdings.invested}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Market Value</div>
            <div className="text-lg font-medium">${holdings.marketValue}</div>
          </div>
        </div>
        
        <div className="rounded-md bg-muted/30 p-3 mt-2">
          <div className="flex justify-between items-center">
            <div className="text-sm">Total Return</div>
            <div className={`font-semibold ${isProfitable ? 'text-success' : 'text-destructive'}`}>
              {isProfitable ? '+' : ''}${holdings.profit} ({isProfitable ? '+' : ''}{holdings.profitPercentage}%)
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button className="text-sm bg-muted px-4 py-2 rounded-md hover:bg-muted/80 transition-colors">
            Buy
          </button>
          <button className="text-sm bg-muted px-4 py-2 rounded-md hover:bg-muted/80 transition-colors">
            Sell
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HoldingsCard;
