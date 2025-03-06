import React, { useEffect, useState } from 'react';
import Header from '../components/Header.js';
import MacroCard from '../components/MacroCard.js';
import Chart from '../components/Chart.js';
import CommentarySection from '../components/CommentarySection.js';
import { economicData, formatDate, formatPercentage } from '../utils/economic-data.js';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const latestInflation = economicData.inflation[0];
  const latestInterestRate = economicData.interestRates[0];
  
  const economistCommentaries = [
    {
      text: "Recent data suggests the Federal Reserve's aggressive policy actions are beginning to curb inflation, though it remains well above the target 2% rate.",
      source: "Federal Reserve Economic Analysis",
      date: "October 15, 2023"
    },
    {
      text: "While headline inflation is moderating, sticky components like housing and services inflation could prevent a rapid return to the Fed's 2% target.",
      source: "Brookings Institution",
      date: "October 12, 2023"
    },
    {
      text: "Interest rates may remain higher for longer as the Fed attempts to balance inflation control against risks to economic growth and employment.",
      source: "IMF Economic Outlook",
      date: "October 10, 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Inflation Card */}
          <MacroCard
            title="Monthly Inflation Rate"
            value={latestInflation.value}
            formattedValue={formatPercentage(latestInflation.value)}
            date={formatDate(latestInflation.date)}
            trend={latestInflation.trend}
            type="inflation"
            commentary={latestInflation.commentary}
            source={latestInflation.source}
            delay={0.1}
          >
            <Chart 
              data={economicData.inflation} 
              color="#FF5A5A" 
              yAxisLabel="Inflation Rate"
            />
          </MacroCard>
          
          {/* Interest Rate Card */}
          <MacroCard
            title="Federal Funds Rate"
            value={latestInterestRate.value}
            formattedValue={formatPercentage(latestInterestRate.value)}
            date={formatDate(latestInterestRate.date)}
            trend={latestInterestRate.trend}
            type="interest"
            commentary={latestInterestRate.commentary}
            source={latestInterestRate.source}
            delay={0.2}
          >
            <Chart 
              data={economicData.interestRates} 
              color="#5B8FF9" 
              yAxisLabel="Interest Rate"
            />
          </MacroCard>
        </div>
        
        {/* Historical Data Section */}
        <section className={`pt-4 ${mounted ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-semibold mb-6">Historical Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inflation History */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Inflation History</h3>
              {economicData.inflation.slice(1).map((item, index) => (
                <div 
                  key={index} 
                  className="animate-slide-up flex justify-between items-center p-4 rounded-lg bg-background border border-border"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div>
                    <p className="font-medium">{formatPercentage(item.value)}</p>
                    <p className="text-sm text-muted-foreground">{formatDate(item.date)}</p>
                  </div>
                  <div className={`trend-pill ${item.trend === 'up' ? 'trend-up' : item.trend === 'down' ? 'trend-down' : 'trend-neutral'}`}>
                    {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Interest Rate History */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Interest Rate History</h3>
              {economicData.interestRates.slice(1).map((item, index) => (
                <div 
                  key={index} 
                  className="animate-slide-up flex justify-between items-center p-4 rounded-lg bg-background border border-border"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div>
                    <p className="font-medium">{formatPercentage(item.value)}</p>
                    <p className="text-sm text-muted-foreground">{formatDate(item.date)}</p>
                  </div>
                  <div className={`trend-pill ${item.trend === 'up' ? 'interest-up' : item.trend === 'down' ? 'interest-down' : 'interest-neutral'}`}>
                    {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Expert Commentary Section */}
        <section className={`pt-4 ${mounted ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-semibold mb-6">Expert Commentary</h2>
          <CommentarySection 
            title="Economist Perspectives" 
            commentaries={economistCommentaries} 
          />
        </section>
        
        {/* Footer */}
        <footer className={`pt-8 text-center text-sm text-muted-foreground ${mounted ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <p>Data updates weekly. All values represent the latest official figures.</p>
          <p className="mt-2">Sources include Federal Reserve Economic Data (FRED), Bureau of Labor Statistics, and financial news sources.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
