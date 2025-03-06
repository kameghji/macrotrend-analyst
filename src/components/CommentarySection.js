
import React from 'react';
import { Card } from './ui/card';

const CommentarySection = ({ title, commentaries }) => {
  return (
    <Card className="data-card">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="space-y-4">
        {commentaries.map((comment, index) => (
          <div 
            key={index} 
            className="animate-slide-up p-4 rounded-lg bg-background border border-border"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <p className="text-sm mb-2">{comment.text}</p>
            <div className="flex justify-between items-center">
              <p className="text-xs font-medium">{comment.source}</p>
              <p className="text-xs text-muted-foreground">{comment.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CommentarySection;
