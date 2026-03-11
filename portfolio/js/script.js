// script.js - Handles project card rendering and simple interactivity

// Project data for each domain
const projects = {
  embedded: [
    {
      title: "Zigbee Electronic Shelf Label",
      description: "Low-power wireless e-paper label using Zigbee and STM32. Designed hardware and firmware for real-time updates.",
      technologies: ["STM32", "Zigbee", "Embedded C", "E-paper"],
      github: "https://github.com/ahmed-github/zigbee-esl",
      image: "assets/images/zigbee-esl.png"
    },
    {
      title: "Power Electronics Control",
      description: "Firmware for power converters and motor drives. Real-time control, safety, and diagnostics.",
      technologies: ["STM32", "Embedded C", "Power Electronics"],
      github: "https://github.com/ahmed-github/power-electronics",
      image: "assets/images/power-electronics.png"
    },
    {
      title: "Raspberry Pi IoT Systems",
      description: "IoT gateway and sensor nodes using Raspberry Pi and Python. Cloud connectivity and dashboard.",
      technologies: ["Raspberry Pi", "Python", "IoT"],
      github: "https://github.com/ahmed-github/rpi-iot",
      image: "assets/images/rpi-iot.png"
    }
  ],
  electrical: [
    {
      title: "BIM Electrical Model",
      description: "Developed BIM models for large-scale buildings using Revit. Coordinated with MEP teams.",
      technologies: ["Revit", "BIM", "AutoCAD"],
      github: "https://github.com/ahmed-github/bim-electrical",
      image: "assets/images/bim-electrical.png"
    },
    {
      title: "Panel Board Design",
      description: "Designed and documented LV panel boards. Load calculations, schematics, and layouts.",
      technologies: ["AutoCAD", "Panel Design", "Load Calc"],
      github: "https://github.com/ahmed-github/panel-design",
      image: "assets/images/panel-design.png"
    }
  ],
  web: [
    {
      title: "Portfolio Website",
      description: "This portfolio! Built with HTML, CSS, and JavaScript. Responsive, minimal, and fast.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ahmed-github/portfolio",
      image: "assets/images/portfolio.png"
    },
    {
      title: "IoT Dashboard",
      description: "Web dashboard for monitoring IoT devices. Real-time charts, device control, and alerts.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/ahmed-github/iot-dashboard",
      image: "assets/images/iot-dashboard.png"
    }
  ]
};

// Render project cards for each domain page
document.addEventListener("DOMContentLoaded", function() {
  const pageMap = {
    "embedded.html": "embedded",
    "electrical.html": "electrical",
    "webdev.html": "web"
  };
  const path = window.location.pathname.split("/").pop();
  const domain = pageMap[path];
  if (domain && projects[domain]) {
    const container = document.getElementById(`${domain}-projects`);
    if (container) {
      projects[domain].forEach(proj => {
        container.appendChild(createProjectCard(proj));
      });
    }
  }
});

// Reusable project card component
function createProjectCard({title, description, technologies, github, image}) {
  const card = document.createElement("div");
  card.className = "project-card";

  // Image placeholder
  const imgDiv = document.createElement("div");
  imgDiv.className = "project-image";
  if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = title + " image";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    imgDiv.appendChild(img);
  } else {
    imgDiv.textContent = "[Project Image]";
  }
  card.appendChild(imgDiv);

  // Title
  const h3 = document.createElement("h3");
  h3.textContent = title;
  card.appendChild(h3);

  // Description
  const p = document.createElement("p");
  p.textContent = description;
  card.appendChild(p);

  // Technologies
  const tech = document.createElement("div");
  tech.className = "tech";
  tech.textContent = technologies.join(", ");
  card.appendChild(tech);

  // GitHub link
  const link = document.createElement("a");
  link.className = "github-link";
  link.href = github;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "View on GitHub";
  card.appendChild(link);

  return card;
}
