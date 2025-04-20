
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-tech-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-circuit-pattern"></div>
      
      <div className="container max-w-5xl mx-auto z-10 relative">
        <h2 className="section-title text-white">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-none">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-tech-blue/20 rounded-full">
                      <Mail size={20} className="text-tech-electric" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a href="mailto:mostafabakir182@gmail.com" className="text-white hover:underline">
                        mostafabakir182@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-tech-blue/20 rounded-full">
                      <Phone size={20} className="text-tech-electric" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <p className="text-white">+20 10 64913006</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-tech-blue/20 rounded-full">
                      <MapPin size={20} className="text-tech-electric" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Location</p>
                      <p className="text-white">Kafr Elsheikh, Egypt</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-2xl font-bold mb-6 gradient-text">Connect with us</h4>
                  <div className="flex gap-4">
                    <a href="https://github.com/Mostafabakir" className="p-3 bg-tech-blue/20 rounded-full hover:bg-tech-blue/40 transition-colors">
                      <Github size={20} className="text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/mostafabakir2023/" className="p-3 bg-tech-blue/20 rounded-full hover:bg-tech-blue/40 transition-colors">
                      <Linkedin size={20} className="text-white" />
                    </a>
                    <a href="https://wa.me/201064913006" className="p-3 bg-tech-blue/20 rounded-full hover:bg-tech-blue/40 transition-colors">
                      <MessageSquare size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-tech-navy">Send a Message</h3>
                
                <form className="space-y-4" action="mailto:mostafabakir182@gmail.com" method="GET">
                  <input type="hidden" name="_subject" value="Contact Form Submission" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                      <Input id="name" name="_name" placeholder="Your name" className="border-gray-300" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <Input id="email" name="_replyto" type="email" placeholder="Your email" className="border-gray-300" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <Input id="subject" name="_subject_override" placeholder="Subject" className="border-gray-300" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea id="message" name="body" placeholder="Your message" rows={5} className="border-gray-300" required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-tech-blue hover:bg-tech-blue/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
