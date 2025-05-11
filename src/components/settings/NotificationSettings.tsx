
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const NotificationSettings = () => {
  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3">
          <div>
            <h3 className="text-base font-medium">Price Alerts</h3>
            <p className="text-sm text-muted-foreground">Get notified when stocks reach your price targets</p>
          </div>
          <Switch defaultChecked id="price-alerts" />
        </div>
        
        <div className="border-t border-border"></div>
        
        <div className="flex items-center justify-between py-3">
          <div>
            <h3 className="text-base font-medium">Market News</h3>
            <p className="text-sm text-muted-foreground">Daily summary of market news and events</p>
          </div>
          <Switch id="market-news" />
        </div>
        
        <div className="border-t border-border"></div>
        
        <div className="flex items-center justify-between py-3">
          <div>
            <h3 className="text-base font-medium">Portfolio Updates</h3>
            <p className="text-sm text-muted-foreground">Daily summary of your portfolio performance</p>
          </div>
          <Switch defaultChecked id="portfolio-updates" />
        </div>
        
        <div className="border-t border-border"></div>
        
        <div className="flex items-center justify-between py-3">
          <div>
            <h3 className="text-base font-medium">AI Trading Recommendations</h3>
            <p className="text-sm text-muted-foreground">Get AI-powered trading suggestions</p>
          </div>
          <Switch defaultChecked id="ai-recommendations" />
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
