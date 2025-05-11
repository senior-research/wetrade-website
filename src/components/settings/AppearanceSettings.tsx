
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const AppearanceSettings = () => {
  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <h2 className="text-xl font-semibold mb-4">Appearance Settings</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-base font-medium mb-3">Theme</h3>
          <RadioGroup defaultValue="dark" className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="theme-dark" />
              <Label htmlFor="theme-dark">Dark Mode (Default)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="theme-light" />
              <Label htmlFor="theme-light">Light Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system" id="theme-system" />
              <Label htmlFor="theme-system">System Preference</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="border-t border-border py-4"></div>
        
        <div>
          <h3 className="text-base font-medium mb-3">Chart Default View</h3>
          <RadioGroup defaultValue="candles" className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="candles" id="chart-candles" />
              <Label htmlFor="chart-candles">Candlestick Chart</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="line" id="chart-line" />
              <Label htmlFor="chart-line">Line Chart</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="border-t border-border py-4"></div>
        
        <div>
          <h3 className="text-base font-medium mb-3">Default Time Range</h3>
          <RadioGroup defaultValue="1m" className="flex flex-wrap gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1d" id="range-1d" />
              <Label htmlFor="range-1d">1 Day</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1w" id="range-1w" />
              <Label htmlFor="range-1w">1 Week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1m" id="range-1m" />
              <Label htmlFor="range-1m">1 Month</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3m" id="range-3m" />
              <Label htmlFor="range-3m">3 Months</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1y" id="range-1y" />
              <Label htmlFor="range-1y">1 Year</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="range-all" />
              <Label htmlFor="range-all">All Time</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;
