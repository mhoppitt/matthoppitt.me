export type Project = {
  value: string,
  title: string,
  icon: string,
  repo: string,
  description: string,
  skills: string[],
  screenshots: string[],
  video?: string,
  techLogos: string[],
};

export const projectList: Project[] = [
  {
    value: "asset-assist",
    title: "Home Asset Assist",
    icon: "/projects/home-asset-assist/asset-assist-icon.png",
    repo: "https://github.com/mhoppitt/Digithon2023",
    description: "Many renters don't have contents insurance, and those that are insured may find it difficult to value their contents correctly. Home Asset Assist utilises machine learning to allow this market to get an accurate contents insurance quote within 2 minutes by simply walking around their home. Developed in a 48-hour hackathon.",
    skills: ["Android", "Kotlin", "Tensorflow"],
    screenshots: ["/projects/home-asset-assist/asset-assist-home.png", "/projects/home-asset-assist/asset-assist-record.png", "/projects/home-asset-assist/asset-assist-quote.png"],
    video: "/projects/home-asset-assist/asset-assist-walkthrough.mp4",
    techLogos: ["/projects/home-asset-assist/android-logo.png", "/projects/home-asset-assist/kotlin-logo.png", "/projects/home-asset-assist/tensorflow-logo.png"]
  },
  {
    value: "hoppitt-calendar",
    title: "Hoppitt Calendar",
    icon: "/projects/hoppitt-calendar/hoppitt-calendar-icon.png",
    repo: "https://github.com/mhoppitt/Hoppitt-Calendar",
    description: "Shared households can often struggle with planning the movements of each member. Hoppitt Calendar provides a centralised online platform to provide the whole household with insight into each person's week. Custom attributes are provided for events specific to the Hoppitt household, and events are synced in real-time.",
    skills: ["iOS", "SwiftUI", "AWS", "Testflight"],
    screenshots: ["/projects/hoppitt-calendar/hoppitt-calendar-home.png", "/projects/hoppitt-calendar/hoppitt-calendar-keydates.png", "/projects/hoppitt-calendar/hoppitt-calendar-addevent.png"],
    video: "/projects/hoppitt-calendar/hoppitt-calendar-walkthrough.mp4",
    techLogos: ["/projects/hoppitt-calendar/apple-logo.png", "/projects/hoppitt-calendar/swiftui-logo.png", "/projects/hoppitt-calendar/aws-logo.png"]
  },
  {
    value: "matthoppitt-me",
    title: "matthoppitt.me",
    icon: "avatar.png",
    repo: "https://github.com/mhoppitt/matthoppitt.me",
    description: "A portfolio site built by me to showcase my career and achievements so far. Built with Next.js and Mantine, deployed with Vercel.",
    skills: ["Next.js", "Typescript", "Vercel"],
    screenshots: ["/projects/matthoppitt-me/matthoppitt-me-home.png"],
    techLogos: ["/projects/matthoppitt-me/nextjs-logo.png", "/projects/matthoppitt-me/typescript-logo.png", "/projects/matthoppitt-me/vercel-logo.png"]
  }
]