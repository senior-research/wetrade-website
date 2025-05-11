
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock news based on the stock symbol
const generateMockNews = (stockSymbol: string) => {
  const newsMap: Record<string, any[]> = {
    'AAPL': [
      { title: "Apple's next iPhone may feature improved AI capabilities", time: "2h ago", source: "TechCrunch" },
      { title: "Apple reports record quarterly earnings, beats analyst expectations", time: "8h ago", source: "CNBC" },
      { title: "New MacBook Pro with M3 chip shipments exceed forecast", time: "1d ago", source: "Bloomberg" },
    ],
    'MSFT': [
      { title: "Microsoft Azure revenue grows 30% year over year", time: "3h ago", source: "Business Insider" },
      { title: "Microsoft's AI strategy pays off with record cloud revenue", time: "7h ago", source: "CNBC" },
      { title: "New Windows features focus on AI integration", time: "1d ago", source: "The Verge" },
    ],
    'GOOGL': [
      { title: "Google unveils next-generation search with integrated AI", time: "5h ago", source: "TechCrunch" },
      { title: "Alphabet's advertising revenue rebounds in Q2", time: "10h ago", source: "Wall Street Journal" },
      { title: "Google Cloud gains market share against AWS and Azure", time: "1d ago", source: "Forbes" },
    ],
    'AMZN': [
      { title: "Amazon's Prime Day sales hit new record", time: "4h ago", source: "CNBC" },
      { title: "AWS remains dominant in cloud infrastructure market", time: "9h ago", source: "Reuters" },
      { title: "Amazon expands healthcare initiatives with new acquisition", time: "1d ago", source: "Bloomberg" },
    ],
    'TSLA': [
      { title: "Tesla unveils updated Cybertruck production timeline", time: "2h ago", source: "Electrek" },
      { title: "Tesla's Q2 deliveries exceed analyst expectations", time: "6h ago", source: "Reuters" },
      { title: "New Gigafactory location announced in Asia", time: "1d ago", source: "Bloomberg" },
    ],
    'NVDA': [
      { title: "NVIDIA's next-gen GPU architecture details leak", time: "3h ago", source: "Tom's Hardware" },
      { title: "AI chip demand drives NVIDIA to record revenue", time: "7h ago", source: "CNBC" },
      { title: "NVIDIA partners with leading automakers on self-driving tech", time: "1d ago", source: "TechCrunch" },
    ]
  };
  
  return newsMap[stockSymbol] || [
    { title: "Market volatility continues as investors watch Fed decisions", time: "5h ago", source: "CNBC" },
    { title: "Global markets respond to inflation data", time: "9h ago", source: "Financial Times" },
    { title: "Analysts predict strong earnings season for tech sector", time: "1d ago", source: "Bloomberg" },
  ];
};

interface NewsCardProps {
  stockSymbol: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ stockSymbol }) => {
  const newsItems = generateMockNews(stockSymbol);

  return (
    <Card className="glass-card h-full">
      <CardHeader>
        <CardTitle className="text-lg">Latest News</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 overflow-y-auto max-h-[400px] pr-2">
        {newsItems.map((news, index) => (
          <div 
            key={index} 
            className="p-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <h3 className="font-medium text-sm mb-2">{news.title}</h3>
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>{news.source}</span>
              <span>{news.time}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default NewsCard;
