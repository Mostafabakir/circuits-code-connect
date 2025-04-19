
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Card className="bg-white shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-tech-navy h-1"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Background</h3>
                <p className="text-gray-700 mb-4">
                  I'm a versatile embedded systems engineer with over 4 years of experience bridging the gap between hardware and software. My journey began with electrical engineering and circuit design, evolving to encompass firmware development, IoT solutions, and full-stack web applications.
                </p>
                <p className="text-gray-700">
                  I thrive at the intersection of physical and digital technologies, creating solutions that connect the real world to the internet through sensors, microcontrollers, and cloud platforms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="card-hover">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-2 text-tech-blue">Education</h4>
              <p className="text-gray-700">Bachelor of Science in electrical engineering</p>
              <p className="text-gray-500 text-sm">Alexandria University, 2019-2023</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-2 text-tech-blue">Experience</h4>
              <p className="text-gray-700">Motor control Systems Engineer</p>
              <p className="text-gray-500 text-sm">Elaraby Group Co., 2023-Present</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-2 text-tech-blue">Philosophy</h4>
              <p className="text-gray-700">I believe in creating elegant, efficient systems that seamlessly blend hardware and software to solve real-world problems.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
