import { CircuitBoard, Code, Cpu, FileCode, Server } from 'lucide-react';
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  type: 'hardware' | 'firmware' | 'iot' | 'web';
  description: string;
  technologies: string[];
  iconType: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart EVMSE",
    category: "Hardware",
    type: "hardware",
    description: "An IoT-based electric vehicle charging station that provides smart charging capabilities with real-time monitoring and control.",
    technologies: ["PCB Design", "ARM Cortex-M4", "Current Sensing", "WiFi"],
    iconType: "CircuitBoard",
    date: "June 2023- august 2023"
  },
  {
    id: 2,
    title: "Industrial Automation Controller",
    category: "Hardware",
    type: "hardware",
    description: "A rugged controller for industrial automation with multiple sensor inputs and actuator outputs.",
    technologies: ["Altium Designer", "STM32", "RS-485", "CAN Bus"],
    iconType: "Cpu",
    date: "2022-2023"
  },
  {
    id: 3,
    title: "Bluetooth Low Energy SDK",
    category: "Firmware",
    type: "firmware",
    description: "A comprehensive SDK for developing Bluetooth Low Energy applications on custom hardware.",
    technologies: ["C/C++", "BLE 5.0", "FreeRTOS", "Power Optimization"],
    iconType: "FileCode",
    date: "2022-2023"
  },
  {
    id: 4,
    title: "Agricultural Sensor Network",
    category: "IoT Platform",
    type: "iot",
    description: "A LoRaWAN-based sensor network for monitoring soil moisture, temperature, and environmental conditions in agriculture.",
    technologies: ["LoRaWAN", "ESP32", "The Things Network", "MQTT"],
    iconType: "Server",
    date: "2021-2022"
  },
  {
    id: 5,
    title: "Remote Equipment Monitoring Dashboard",
    category: "Web Application",
    type: "web",
    description: "A real-time dashboard for monitoring industrial equipment status, performance metrics, and maintenance scheduling.",
    technologies: ["React", "Node.js", "WebSockets", "Time-series DB"],
    iconType: "Code",
    date: "2021-2022"
  },
  {
    id: 6,
    title: "Smart Home Hub Firmware",
    category: "Firmware",
    type: "firmware",
    description: "Custom firmware for a smart home hub supporting multiple wireless protocols and local automation.",
    technologies: ["C++", "Zephyr RTOS", "Zigbee", "Matter"],
    iconType: "FileCode",
    date: "2020-2021"
  }
];