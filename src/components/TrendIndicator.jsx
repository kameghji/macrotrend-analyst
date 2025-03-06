
import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

const TrendIndicator = ({ trend, type, value, animate = true }) => {
  const getIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="w-4 h-4" />;
      case 'down':
        return <ArrowDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getClass = () => {
    if (type === 'inflation') {
      return trend === 'up' ? 'trend-up' : trend === 'down' ? 'trend-down' : 'trend-neutral';
    } else {
      return trend === 'up' ? 'interest-up' : trend === 'down' ? 'interest-down' : 'interest-neutral';
    }
  };

  const getLabel = () => {
    if (trend === 'up') return 'Increasing';
    if (trend === 'down') return 'Decreasing';
    return 'Unchanged';
  };

  const animationClass = animate ? 'animate-scale-in' : '';

  return (
    <div className={`trend-pill ${getClass()} ${animationClass} transition-all duration-300`}>
      <span className="flex items-center">
        {getIcon()}
        <span className="ml-1 font-medium">{getLabel()}</span>
      </span>
    </div>
  );
};

export default TrendIndicator;
