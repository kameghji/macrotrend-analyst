
import React from 'react';
import { economicData, formatDate } from '@/utils/economic-data';

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6">
      <div className="animate-fade-in flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <p className="text-sm text-muted-foreground mb-1">U.S. Macroeconomic Landscape</p>
          <h1 className="text-3xl font-semibold tracking-tight">Economic Dashboard</h1>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-right">
          <p className="text-muted-foreground">Last updated</p>
          <p className="font-medium">{formatDate(economicData.lastUpdated)}</p>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
    </header>
  );
};

export default Header;
