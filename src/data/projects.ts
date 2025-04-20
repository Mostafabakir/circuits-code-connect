import { CircuitBoard, Code, Cpu, FileCode, Server } from 'lucide-react';
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  type: 'hardware' | 'firmware' | 'iot' | 'web';
  description: string;
  technologies: string[];
  iconType: string; // Changed from icon to iconType
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Energy Monitor",
    category: "Hardware",
    type: "hardware",
    description: "An IoT-based energy monitoring system that tracks real-time power consumption and provides detailed analytics.",
    technologies: ["PCB Design", "ARM Cortex-M4", "Current Sensing", "WiFi"],
    iconType: "CircuitBoard"
  },
  {
    id: 2,
    title: "Industrial Automation Controller",
    category: "Hardware",
    type: "hardware",
    description: "A rugged controller for industrial automation with multiple sensor inputs and actuator outputs.",
    technologies: ["Altium Designer", "STM32", "RS-485", "CAN Bus"],
    iconType: "Cpu"
  },
  {
    id: 3,
    title: "Bluetooth Low Energy SDK",
    category: "Firmware",
    type: "firmware",
    description: "A comprehensive SDK for developing Bluetooth Low Energy applications on custom hardware.",
    technologies: ["C/C++", "BLE 5.0", "FreeRTOS", "Power Optimization"],
    iconType: "FileCode"
  },
  {
    id: 4,
    title: "Agricultural Sensor Network",
    category: "IoT Platform",
    type: "iot",
    description: "A LoRaWAN-based sensor network for monitoring soil moisture, temperature, and environmental conditions in agriculture.",
    technologies: ["LoRaWAN", "ESP32", "The Things Network", "MQTT"],
    iconType: "Server"
  },
  {
    id: 5,
    title: "Remote Equipment Monitoring Dashboard",
    category: "Web Application",
    type: "web",
    description: "A real-time dashboard for monitoring industrial equipment status, performance metrics, and maintenance scheduling.",
    technologies: ["React", "Node.js", "WebSockets", "Time-series DB"],
    iconType: "Code"
  },
  {
    id: 6,
    title: "Smart Home Hub Firmware",
    category: "Firmware",
    type: "firmware",
    description: "Custom firmware for a smart home hub supporting multiple wireless protocols and local automation.",
    technologies: ["C++", "Zephyr RTOS", "Zigbee", "Matter"],
    iconType: "FileCode"
  }
];