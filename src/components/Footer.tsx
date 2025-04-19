
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tech-dark-blue text-white py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="gradient-text">Mostafa</span>Bakir
            </h3>
            <p className="text-gray-400 mt-2">Bridging hardware and software solutions</p>
          </div>
          
          <div className="flex gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#expertise" className="text-gray-400 hover:text-white transition-colors">Expertise</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="p-2 bg-tech-blue/20 rounded-full hover:bg-tech-blue/30 transition-colors">
                  <Github size={18} className="text-white" />
                </a>
                <a href="#" className="p-2 bg-tech-blue/20 rounded-full hover:bg-tech-blue/30 transition-colors">
                  <Linkedin size={18} className="text-white" />
                </a>
                <a href="#" className="p-2 bg-tech-blue/20 rounded-full hover:bg-tech-blue/30 transition-colors">
                  <Mail size={18} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Mostafa Bakir. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
