
import React from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import ProfileSettings from "@/components/settings/ProfileSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import TradingSettings from "@/components/settings/TradingSettings";

const Settings = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been successfully updated.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 p-6 md:p-8 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
          <button 
            onClick={handleSave}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm"
          >
            Save Changes
          </button>
        </div>
        
        <div className="space-y-8">
          <ProfileSettings />
          <NotificationSettings />
          <AppearanceSettings />
          <TradingSettings />
        </div>
      </div>
    </div>
  );
};

export default Settings;
