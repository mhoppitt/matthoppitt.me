export type WorkExperience = {
  id: number;
  dateRange: string;
  jobTitle: string;
  company: string;
  jobDescription: string;
  skills: string[];
  location: string;
  website: string;
  image: string;
};

export const WORK_EXPERIENCE_LIST: WorkExperience[] = [
  {
    id: 3,
    dateRange: "Nov 2023 – Present",
    jobTitle: "Software Engineer",
    company: "Suncorp Group",
    jobDescription: `Developed and delivered high-quality production code for complex payment systems, ensuring high availability
    and reliability for numerous consuming applications. Key projects include modernising multiple legacy web applications by
    migrating them to a React and Java tech stack, as well as designing and building a new REST API from scratch to facilitate
    seamless payment processing.`,
    skills: ["JavaScript", "React.js", "Java", "Springboot", "CI/CD", "REST API Design & Development"],
    location: "Sydney, AUS",
    website: "suncorpgroup.com.au",
    image: "/experience/suncorp-group.png"
  },
  {
    id: 2,
    dateRange: "Feb 2023 – Nov 2023",
    jobTitle: "Graduate Software Engineer",
    company: "Suncorp Group",
    jobDescription: `Developed and enhanced the frontend of multiple insurance web applications, ensuring exceptional user
    experience and quality. Led improvements in internal tools and development practices to streamline workflows. Notable projects
    include implementing dynamic flowcharts for intuitive page navigation and integrating Geospatial API data into the UI to display
    inferred building characteristics.`,
    skills: ["JavaScript", "React.js", "CI/CD", "Frontend Development"],
    location: "Sydney, AUS",
    website: "suncorpgroup.com.au",
    image: "/experience/suncorp-group.png"
  },
  {
    id: 1,
    dateRange: "Feb 2022 – Feb 2023",
    jobTitle: "Graduate Software Test Engineer",
    company: "Suncorp Group",
    jobDescription: `Applied meticulous attention to detail in manual and exploratory UI and API testing, ensuring a seamless user
    experience. Worked closely with senior team members to enhance the automated UI testing framework with Cypress, improving
    efficiency and reliability.`,
    skills: ["TManual & Exploratory Testing", "Cypress Automation"],
    location: "Sydney, AUS",
    website: "suncorpgroup.com.au",
    image: "/experience/suncorp-group.png"
  }
]