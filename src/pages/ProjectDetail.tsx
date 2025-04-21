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
              </div>
              <div className="p-4 bg-tech-blue/10 rounded-full text-tech-blue">
                {getIconComponent()}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
                nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
                nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                    <p className="text-gray-500">Project Image {item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Feature one description with technical details</li>
                <li>Feature two with implementation challenges</li>
                <li>Feature three highlighting innovative solutions</li>
                <li>Feature four demonstrating technical expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;