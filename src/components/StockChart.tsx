
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the chart
const generateMockData = (days: number, trend: 'up' | 'down' | 'volatile') => {
  const data = [];
  let baseValue = 150;
  
  for (let i = 0; i < days; i++) {
    let change;
    
    if (trend === 'up') {
      change = Math.random() * 5 - 1; // More likely to go up
    } else if (trend === 'down') {
      change = Math.random() * 5 - 4; // More likely to go down
    } else {
      change = Math.random() * 10 - 5; // Volatile - can go either way significantly
    }
    
    baseValue = Math.max(50, baseValue + change); // Ensure it doesn't go below 50
    
    const date = new Date();
    date.setDate(date.getDate() - (days - i));
    
    data.push({
      date: date.toISOString().split('T')[0],
      value: baseValue.toFixed(2),
    });
  }
  
  return data;
};

interface StockChartProps {
  stockSymbol: string;
  stockName: string;
}

const StockChart: React.FC<StockChartProps> = ({ stockSymbol, stockName }) => {
  const [timeframe, setTimeframe] = useState<'1W' | '1M' | '3M' | '1Y'>('1M');
  const [chartData, setChartData] = useState(() => generateMockData(30, 'up'));
  
  const handleTimeframeChange = (newTimeframe: '1W' | '1M' | '3M' | '1Y') => {
    setTimeframe(newTimeframe);
    
    let days: number;
    let trend: 'up' | 'down' | 'volatile';
    
    switch (newTimeframe) {
      case '1W':
        days = 7;
        trend = 'volatile';
        break;
      case '1M':
        days = 30;
        trend = 'up';
        break;
      case '3M':
        days = 90;
        trend = 'down';
        break;
      case '1Y':
        days = 365;
        trend = 'up';
        break;
      default:
        days = 30;
        trend = 'up';
    }
    
    setChartData(generateMockData(days, trend));
  };

  // Calculate price change
  const firstPrice = parseFloat(chartData[0]?.value || '0');
  const lastPrice = parseFloat(chartData[chartData.length - 1]?.value || '0');
  const priceChange = lastPrice - firstPrice;
  const priceChangePercent = (priceChange / firstPrice) * 100;
  const isPositive = priceChange >= 0;

  return (
    <Card className="glass-card border-glow">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-bold">{stockSymbol}</CardTitle>
          <p className="text-muted-foreground text-sm">{stockName}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-2xl font-bold">${lastPrice.toFixed(2)}</div>
          <div className={`text-sm ${isPositive ? 'text-success' : 'text-destructive'}`}>
            {isPositive ? '+' : ''}{priceChange.toFixed(2)} ({isPositive ? '+' : ''}{priceChangePercent.toFixed(2)}%)
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-end space-x-1">
          {(['1W', '1M', '3M', '1Y'] as const).map((tf) => (
            <Button
              key={tf}
              size="sm"
              variant={timeframe === tf ? "default" : "outline"}
              className={`text-xs ${timeframe === tf ? 'bg-primary' : 'bg-background/40'}`}
              onClick={() => handleTimeframeChange(tf)}
            >
              {tf}
            </Button>
          ))}
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(tick) => {
                  const date = new Date(tick);
                  return `${date.getMonth() + 1}/${date.getDate()}`;
                }}
                stroke="#94a3b8"
                fontSize={12}
              />
              <YAxis 
                domain={['dataMin - 10', 'dataMax + 10']}
                stroke="#94a3b8"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '0.5rem',
                  color: '#f8fafc'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#0ea5e9" 
                strokeWidth={2}
                fill="url(#colorValue)" 
                activeDot={{ r: 6, fill: "#0ea5e9", stroke: "#f8fafc" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockChart;
