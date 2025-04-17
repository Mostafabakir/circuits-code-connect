
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircuitBoard, Code, Cpu, FileCode, Server } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, description, technologies, icon }) => (
  <Card className="card-hover overflow-hidden">
    <CardContent className="p-0">
      <div className="p-1 bg-tech-blue"></div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-tech-blue font-medium mb-1">{category}</p>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <div className="p-2 bg-tech-blue/10 rounded-full text-tech-blue">
            {icon}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Button variant="ghost" className="p-0 h-auto text-tech-blue hover:text-tech-blue/80 font-medium flex items-center gap-1">
          View details <ArrowRight size={16} />
        </Button>
      </div>
    </CardContent>
  </Card>
);

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Energy Monitor",
      category: "Hardware",
      type: "hardware",
      description: "An IoT-based energy monitoring system that tracks real-time power consumption and provides detailed analytics.",
      technologies: ["PCB Design", "ARM Cortex-M4", "Current Sensing", "WiFi"],
      icon: <CircuitBoard size={24} />
    },
    {
      id: 2,
      title: "Industrial Automation Controller",
      category: "Hardware",
      type: "hardware",
      description: "A rugged controller for industrial automation with multiple sensor inputs and actuator outputs.",
      technologies: ["Altium Designer", "STM32", "RS-485", "CAN Bus"],
      icon: <Cpu size={24} />
    },
    {
      id: 3,
      title: "Bluetooth Low Energy SDK",
      category: "Firmware",
      type: "firmware",
      description: "A comprehensive SDK for developing Bluetooth Low Energy applications on custom hardware.",
      technologies: ["C/C++", "BLE 5.0", "FreeRTOS", "Power Optimization"],
      icon: <FileCode size={24} />
    },
    {
      id: 4,
      title: "Agricultural Sensor Network",
      category: "IoT Platform",
      type: "iot",
      description: "A LoRaWAN-based sensor network for monitoring soil moisture, temperature, and environmental conditions in agriculture.",
      technologies: ["LoRaWAN", "ESP32", "The Things Network", "MQTT"],
      icon: <Server size={24} />
    },
    {
      id: 5,
      title: "Remote Equipment Monitoring Dashboard",
      category: "Web Application",
      type: "web",
      description: "A real-time dashboard for monitoring industrial equipment status, performance metrics, and maintenance scheduling.",
      technologies: ["React", "Node.js", "WebSockets", "Time-series DB"],
      icon: <Code size={24} />
    },
    {
      id: 6,
      title: "Smart Home Hub Firmware",
      category: "Firmware",
      type: "firmware",
      description: "Custom firmware for a smart home hub supporting multiple wireless protocols and local automation.",
      technologies: ["C++", "Zephyr RTOS", "Zigbee", "Matter"],
      icon: <FileCode size={24} />
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>
      
      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
          <TabsTrigger value="firmware">Firmware</TabsTrigger>
          <TabsTrigger value="iot">IoT</TabsTrigger>
          <TabsTrigger value="web">Web</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
                icon={project.icon}
              />
            ))}
          </div>
        </TabsContent>
        
        {["hardware", "firmware", "iot", "web"].map((type) => (
          <TabsContent key={type} value={type} className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.type === type)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    technologies={project.technologies}
                    icon={project.icon}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="text-center">
        <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90">
          View All Projects
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
