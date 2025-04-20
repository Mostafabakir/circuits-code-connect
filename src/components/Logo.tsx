
import React from 'react';
import { CircuitBoard, Cpu, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, iconOnly = false }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <CircuitBoard className="h-6 w-6 text-tech-blue" />
      {!iconOnly && (
        <span className="font-bold text-lg">Bakir Digital Solutions</span>
      )}
    </div>
  );
};

export default Logo;
