
import React from 'react';
import { economicData, formatDate } from '../utils/economic-data';
import { Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6">
      <div className="animate-fade-in flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <p className="text-sm text-muted-foreground mb-1">U.S. Macroeconomic Landscape</p>
          <h1 className="text-3xl font-semibold tracking-tight">Economic Dashboard</h1>
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/kameghji/macrotrend-analyst" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={18} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <div className="text-sm text-right">
            <p className="text-muted-foreground">Last updated</p>
            <p className="font-medium">{formatDate(economicData.lastUpdated)}</p>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
    </header>
  );
};

export default Header;
