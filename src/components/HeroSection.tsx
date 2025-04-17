
import React from 'react';
import { CircuitBoard, Code, Cpu, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-tech-navy text-white overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10 bg-circuit-pattern"></div>
      
      <div className="container max-w-6xl mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Mostafa Bakir
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Embedded Systems Engineer
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu size={80} className="text-tech-electric animate-pulse-slow" />
              </div>
              <div className="absolute top-0 left-1/4 animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
                <CircuitBoard size={40} className="text-tech-electric" />
              </div>
              <div className="absolute bottom-0 right-1/4 animate-pulse-slow" style={{ animationDelay: '1s' }}>
                <Code size={40} className="text-tech-electric" />
              </div>
              <div className="absolute bottom-1/4 left-0 animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
                <Server size={40} className="text-tech-electric" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
