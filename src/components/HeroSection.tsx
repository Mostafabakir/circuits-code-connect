
import React from 'react';
import { ChevronDown, CircuitBoard, Code, Cpu, Server } from 'lucide-react';
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
              <span className="gradient-text">Hardware</span> meets <span className="gradient-text">Software</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Embedded systems engineer specializing in PCB design, firmware development, IoT platforms, and web applications. Building innovative solutions to connect the physical world to the digital realm. Please feel free to contact me to discuss how we can achieve your goals together.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90 transition-transform duration-300 hover:scale-105">
                  View Projects
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="bg-gray-200 text-black border-gray-300 hover:bg-gray-300 hover:text-black transition-transform duration-300 hover:scale-105">
                  Contact Me
                </Button>
              </a>
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
      
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors">
        <ChevronDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
