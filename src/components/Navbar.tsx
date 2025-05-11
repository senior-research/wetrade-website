
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 bg-card border-b border-border flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-xl font-bold text-primary text-glow mr-2">WeTrade</div>
        <div className="bg-primary/20 text-xs px-2 py-0.5 rounded-full text-primary">
          AI Powered
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="ghost" className="text-foreground/70 hover:text-foreground">Dashboard</Button>
        </Link>
        <Link to="/portfolio">
          <Button variant="ghost" className="text-foreground/70 hover:text-foreground">Portfolio</Button>
        </Link>
        <Link to="/settings">
          <Button variant="ghost" className="text-foreground/70 hover:text-foreground">Settings</Button>
        </Link>
        <div className="w-0.5 h-6 bg-border mx-2"></div>
        <Button className="bg-primary hover:bg-primary/80 text-sm">Connect Account</Button>
      </div>
    </nav>
  );
};

export default Navbar;
