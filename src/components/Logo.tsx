
import React from 'react';
import { CircuitBoard, Cpu, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo = ({ className, iconOnly = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative h-8 w-8">
        <CircuitBoard className="absolute text-tech-electric h-8 w-8" />
        <Cpu className="absolute text-tech-blue h-8 w-8 opacity-70 transform translate-x-1 translate-y-1" />
        <Code className="absolute text-white h-8 w-8 opacity-50 transform -translate-x-1 -translate-y-1" />
      </div>
      
      {!iconOnly && (
        <div className="font-bold">
          <span className="gradient-text">Mostafa</span>
          <span className="text-tech-navy dark:text-white">Bakir</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
