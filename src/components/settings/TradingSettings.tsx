
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const TradingSettings = () => {
  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <h2 className="text-xl font-semibold mb-4">Trading Settings</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium">Trading Confirmations</h3>
            <Switch defaultChecked id="trade-confirmations" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Show confirmation dialog before executing trades
          </p>
        </div>
        
        <div className="border-t border-border py-4"></div>
        
        <div className="space-y-4">
          <h3 className="text-base font-medium">Risk Tolerance</h3>
          <p className="text-sm text-muted-foreground">
            Set your investment risk tolerance for AI recommendations
          </p>
          <div className="pt-2">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Conservative</span>
              <span>Balanced</span>
              <span>Aggressive</span>
            </div>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </div>
        
        <div className="border-t border-border py-4"></div>
        
        <div>
          <h3 className="text-base font-medium mb-3">Default Order Settings</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="limit-orders" defaultChecked />
              <div className="grid gap-1.5">
                <Label htmlFor="limit-orders" className="font-medium">Use limit orders by default</Label>
                <p className="text-sm text-muted-foreground">
                  Place limit orders instead of market orders
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="stop-loss" defaultChecked />
              <div className="grid gap-1.5">
                <Label htmlFor="stop-loss" className="font-medium">Automatic stop-loss</Label>
                <p className="text-sm text-muted-foreground">
                  Set automatic stop-loss at 5% below purchase price
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="take-profit" />
              <div className="grid gap-1.5">
                <Label htmlFor="take-profit" className="font-medium">Automatic take-profit</Label>
                <p className="text-sm text-muted-foreground">
                  Set automatic take-profit at 20% above purchase price
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingSettings;
