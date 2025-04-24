import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CircuitBoard, Code, Cpu, FileCode, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="section-container min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-6">The project you're looking for doesn't exist.</p>
        <Link to="/#projects">
          <Button>Back to Projects</Button>
        </Link>
      </div>
    );
  }

  const getIconComponent = () => {
    switch (project.type) {
      case 'hardware':
        return project.title.includes('Industrial') ? <Cpu size={48} /> : <CircuitBoard size={48} />;
      case 'firmware':
        return <FileCode size={48} />;
      case 'iot':
        return <Server size={48} />;
      case 'web':
        return <Code size={48} />;
      default:
        return <CircuitBoard size={48} />;
    }
  };

  // Use the same background as HeroSection
  return (
    <section
      className="relative min-h-screen flex items-center bg-tech-navy text-white overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10 bg-circuit-pattern"></div>

      <div className="container max-w-4xl mx-auto px-4 z-10 py-20">
        <Link to="/#projects" className="inline-flex items-center text-tech-blue hover:text-tech-blue/80 mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden text-black">
          <div className="h-2 bg-tech-blue"></div>
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-tech-blue font-medium mb-1">{project.category}</p>
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="text-sm text-gray-500 mt-2">{project.date}</p>
              </div>
              <div className="p-4 bg-tech-blue/10 rounded-full text-tech-blue">
                {getIconComponent()}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              {project.title === "Smart EVMSE" ? (
                <p className="text-gray-700 mb-4">
                  A smart electric vehicle monitoring and supply equipment (EVMSE) is an advanced device designed to manage and control electric vehicle charging, providing real-time monitoring and intelligent power distribution capabilities. By providing actionable insights, it empowers users to optimize charging efficiency, reduce costs, and support sustainable practices.
                </p>
              ) : (
                <p className="text-gray-700 mb-4">{project.description}</p>
              )}
              <p className="text-gray-700">
              By transforming raw data into actionable insights, smart energy monitors are pivotal in advancing energy efficiency and fostering a culture of sustainability. Their evolution continues to align with technological innovations, driving smarter energy management worldwide.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.title === "Smart EVMSE"
                  ? [
                      "PCB design",
                      "Altium",
                      "ESP32",
                      "LoRa",
                      "Embedded C/C++",
                      "HTML",
                      "CSS",
                      "ReactJs",
                    ].map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {tech}
                      </span>
                    ))
                  : project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.title === "Smart EVMSE" ? (
                  [
                    "/circuits-code-connect/projects/image.png",
                    "/circuits-code-connect/projects/smart_meter_sch.png",
                    "/circuits-code-connect/projects/SmartEVSEv2_mode_smart.jpg",
                    "/circuits-code-connect/projects/SmartEVSEv2.jpg"
                  ].map((src, idx) => (
                    <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden h-64">
                      <img
                        src={src}
                        alt={`Smart EVMSE ${idx + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  ))
                ) : (
                  [1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                      <p className="text-gray-500">Project Image {item}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Real-Time Energy Usage Tracking</li>
                <li>Web server for data visualization</li>
                <li>multi-option to keep up with the latest updates</li>
                <li>support for multiple users and coroperations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;