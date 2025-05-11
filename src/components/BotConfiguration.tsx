
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

interface BotConfigurationProps {
  stockSymbol: string;
}

const BotConfiguration: React.FC<BotConfigurationProps> = ({ stockSymbol }) => {
  const [bullishLevel, setBullishLevel] = useState(50);
  const [aggressionLevel, setAggressionLevel] = useState(30);
  const [autoTrading, setAutoTrading] = useState(false);
  const { toast } = useToast();

  const handleBullishChange = (value: number[]) => {
    setBullishLevel(value[0]);
  };

  const handleAggressionChange = (value: number[]) => {
    setAggressionLevel(value[0]);
  };

  const handleAutoTradingChange = (checked: boolean) => {
    setAutoTrading(checked);
    
    toast({
      title: checked ? "Auto-trading enabled" : "Auto-trading disabled",
      description: checked 
        ? `The bot will now trade ${stockSymbol} automatically based on your configuration.` 
        : `Automatic trading for ${stockSymbol} has been turned off.`,
      duration: 3000,
    });
  };

  const getBullishText = () => {
    if (bullishLevel <= 20) return "Very Bearish";
    if (bullishLevel <= 40) return "Bearish";
    if (bullishLevel <= 60) return "Neutral";
    if (bullishLevel <= 80) return "Bullish";
    return "Very Bullish";
  };

  const getAggressionText = () => {
    if (aggressionLevel <= 20) return "Very Conservative";
    if (aggressionLevel <= 40) return "Conservative";
    if (aggressionLevel <= 60) return "Balanced";
    if (aggressionLevel <= 80) return "Aggressive";
    return "Very Aggressive";
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg">Bot Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">Market Sentiment</span>
            <span className="text-sm font-medium">{getBullishText()}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs">Bearish</span>
            <Slider 
              value={[bullishLevel]} 
              min={0} 
              max={100} 
              step={1} 
              onValueChange={handleBullishChange}
              className="flex-1"
            />
            <span className="text-xs">Bullish</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">Trading Aggression</span>
            <span className="text-sm font-medium">{getAggressionText()}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs">Safe</span>
            <Slider 
              value={[aggressionLevel]} 
              min={0} 
              max={100} 
              step={1} 
              onValueChange={handleAggressionChange}
              className="flex-1"
            />
            <span className="text-xs">Risky</span>
          </div>
        </div>

        <div className="rounded-md bg-muted/30 p-3">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm font-medium">Auto-trading</div>
              <div className="text-xs text-muted-foreground">
                Allow bot to execute trades automatically
              </div>
            </div>
            <Switch
              checked={autoTrading}
              onCheckedChange={handleAutoTradingChange}
            />
          </div>
        </div>

        <div className={`rounded-md p-3 ${autoTrading ? 'bg-primary/10 border border-primary/20' : 'bg-muted/20'}`}>
          <div className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full mt-1.5 ${autoTrading ? 'bg-primary animate-pulse-glow' : 'bg-muted-foreground'}`}></div>
            <div>
              <div className="text-sm font-medium">Bot Status</div>
              <div className="text-xs text-muted-foreground">
                {autoTrading
                  ? `Trading ${stockSymbol} with ${getBullishText().toLowerCase()} sentiment and ${getAggressionText().toLowerCase()} risk profile`
                  : "Bot is currently inactive"}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BotConfiguration;
