
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircuitBoard, Code, Cpu, FileCode, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  iconType: string;
}

const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case 'CircuitBoard':
      return <CircuitBoard size={24} />;
    case 'Cpu':
      return <Cpu size={24} />;
    case 'FileCode':
      return <FileCode size={24} />;
    case 'Server':
      return <Server size={24} />;
    case 'Code':
      return <Code size={24} />;
    default:
      return <CircuitBoard size={24} />;
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, category, description, technologies, iconType }) => (
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
            {getIconComponent(iconType)}
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
        <Link to={`/project/${id}`}>
          <Button variant="ghost" className="p-0 h-auto text-tech-blue hover:text-tech-blue/80 font-medium flex items-center gap-1">
            View details <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </CardContent>
  </Card>
);

const ProjectsSection = () => {
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
                id={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
                iconType={project.iconType}
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
                    id={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    technologies={project.technologies}
                    iconType={project.iconType}
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
