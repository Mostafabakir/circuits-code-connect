
import React from 'react';
import { CircuitBoard, Cpu, FileCode, LayoutGrid, Microchip, PlugZap, Server, Settings, Smartphone, Wifi, Battery, BookOpen, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ExpertiseCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  className?: string;
}

const ExpertiseCard = ({ title, icon, description, className }: ExpertiseCardProps) => (
  <Card className={cn("card-hover h-full", className)}>
    <CardContent className="p-6 flex flex-col items-center text-center h-full">
      <div className="mb-4 p-3 rounded-full bg-tech-blue/10 text-tech-blue">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const ExpertiseSection = () => {
  const expertiseAreas = [
    // Add new section at the top
    {
      title: "Power Systems & Research",
      categories: [
        {
          title: "EV Battery Systems",
          icon: <Battery size={24} />,
          description: "EV manufacturing collaboration with Science & Technology Center of Excellence. Battery pack sizing, BMS design constraints, and ISO26262 functional safety compliance."
        },
        {
          title: "Power Electronics Research",
          icon: <BookOpen size={24} />,
          description: "Capacitive power transfer research with resonance converters, LTSPICE simulations, and Altium hardware design. MATLAB optimization algorithms development."
        },
        {
          title: "Motor Control Systems",
          icon: <GraduationCap size={24} />,
          description: "PMSM vector control (FOC), MATLAB/Simulink model-based development, HIL/SIL/PIL testing, and power converter topologies design."
        }
      ]
    },
    {
      title: "Hardware Design",
      categories: [
        {
          title: "PCB Design",
          icon: <CircuitBoard size={24} />,
          description: "Creating custom circuit boards for embedded systems with Altium Designer and KiCad."
        },
        {
          title: "Microcontroller Selection",
          icon: <Microchip size={24} />,
          description: "Expertise in selecting and implementing ARM, AVR, and PIC microcontrollers."
        },
        {
          title: "Power Management",
          icon: <PlugZap size={24} />,
          description: "Efficient power supply design for battery-operated and energy-harvesting systems."
        }
      ]
    },
    {
      title: "Software Development",
      categories: [
        {
          title: "Firmware Development",
          icon: <Cpu size={24} />,
          description: "Low-level programming in C/C++ for resource-constrained embedded devices."
        },
        {
          title: "RTOS Implementation",
          icon: <Settings size={24} />,
          description: "Real-time operating system integration with FreeRTOS and Zephyr."
        },
        {
          title: "Application Development",
          icon: <FileCode size={24} />,
          description: "Cross-platform application development using Python, JavaScript, and C#."
        }
      ]
    },
    {
      title: "IoT & Connectivity",
      categories: [
        {
          title: "IoT Platform Development",
          icon: <Server size={24} />,
          description: "Building scalable IoT platforms with AWS IoT, Azure IoT, and custom solutions."
        },
        {
          title: "Wireless Communication",
          icon: <Wifi size={24} />,
          description: "Implementing WiFi, Bluetooth, LoRa, and cellular connectivity for IoT devices."
        },
        {
          title: "Mobile Integration",
          icon: <Smartphone size={24} />,
          description: "Creating mobile companion apps for IoT products using React Native."
        }
      ]
    },
    {
      title: "Web Development",
      categories: [
        {
          title: "Full Stack Development",
          icon: <LayoutGrid size={24} />,
          description: "Building responsive web applications with React, Node.js, and modern frameworks."
        },
        {
          title: "Real-time Data Visualization",
          icon: <FileCode size={24} />,
          description: "Creating intuitive dashboards for monitoring IoT devices and data analytics."
        },
        {
          title: "API Development",
          icon: <Server size={24} />,
          description: "Designing and implementing RESTful and GraphQL APIs for IoT system integration."
        }
      ]
    }
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 px-4 bg-tech-light-gray">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title">My Expertise</h2>
        
        {expertiseAreas.map((area, areaIndex) => (
          <div key={area.title} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold mb-8 text-tech-navy">{area.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {area.categories.map((category, index) => (
                <ExpertiseCard
                  key={`${area.title}-${index}`}
                  title={category.title}
                  icon={category.icon}
                  description={category.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
