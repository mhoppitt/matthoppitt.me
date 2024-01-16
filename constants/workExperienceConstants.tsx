export type WorkExperience = {
  dateRange: string;
  jobTitle: string;
  company: string;
  jobDescription: string;
  skills: string[];
};

export const workExperienceList: WorkExperience[] = [
  {
    dateRange: "Nov 2023 – Present",
    jobTitle: "Software Engineer",
    company: "Suncorp Group",
    jobDescription: `Delivered high-quality production code for complex payments systems, ensuring high availability for many consuming
    applications. Currently re-writing multiple legacy web applications into a newer tech stack with React and Java.`,
    skills: ["React", "JavaScript", "Java", "Spring Web Flow", "CI/CD"],
  },
  {
    dateRange: "Feb 2023 – Nov 2023",
    jobTitle: "Graduate Software Engineer",
    company: "Suncorp Group",
    jobDescription: `Maintained several insurance web applications and API's, maintaining an exceptional level of quality on each
    initiative. Consistent innovation with internal tools and practices to aid the development process. Noteworthy projects include
    integrating Geospatial API's to infer building characteristics and implementing dynamic flowcharts to map application page navigation.`,
    skills: ["React", "JavaScript", "Java", "OpenShift", "CI/CD", "AWS"],
  },
  {
    dateRange: "Feb 2022 – Feb 2023",
    jobTitle: "Graduate Software Test Engineer",
    company: "Suncorp Group",
    jobDescription: `Demonstrated exceptional attention to detail in regular manual and exploratory UI and API testing. Collaborated
    with senior team members to uplift the automated UI testing framework using Cypress.`,
    skills: ["Test Automation", "Cypress", "Manual Testing"],
  }
]