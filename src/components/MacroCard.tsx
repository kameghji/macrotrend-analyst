
import React from 'react';
import { Card } from '@/components/ui/card';
import TrendIndicator from './TrendIndicator';

interface MacroCardProps {
  title: string;
  value: number;
  formattedValue: string;
  date: string;
  trend: 'up' | 'down' | 'neutral';
  type: 'inflation' | 'interest';
  commentary: string;
  source: string;
  children?: React.ReactNode;
  delay?: number;
}

const MacroCard: React.FC<MacroCardProps> = ({
  title,
  value,
  formattedValue,
  date,
  trend,
  type,
  commentary,
  source,
  children,
  delay = 0
}) => {
  return (
    <Card className="data-card overflow-hidden" style={{ animationDelay: `${delay}s` }}>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="section-header">{title}</h3>
          <TrendIndicator trend={trend} type={type} value={value} />
        </div>
        
        <div className="mb-4">
          <p className="data-value">{formattedValue}</p>
          <p className="text-sm text-muted-foreground mt-1">{date}</p>
        </div>
        
        {children}
        
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm leading-relaxed mb-2">{commentary}</p>
          <p className="text-xs text-muted-foreground italic">Source: {source}</p>
        </div>
      </div>
    </Card>
  );
};

export default MacroCard;
