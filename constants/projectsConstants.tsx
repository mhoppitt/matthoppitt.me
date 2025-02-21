export type Project = {
  key: string,
  title: string,
  icon: string,
  repo: string,
  description: string,
  skills: string[]
};

export const PROJECT_LIST: Project[] = [
  {
    key: "asset-assist",
    title: "Home Asset Assist",
    icon: "/projects/asset-assist-icon.png",
    repo: "https://github.com/mhoppitt/Digithon2023",
    description: `Home Asset Assist provides an easy and efficient solution for renters who struggle with accurately valuing their
    contents for insurance purposes. By leveraging machine learning, the app allows users to receive an accurate contents insurance
    quote in just 2 minutes—simply by walking around their home. Developed during a 48-hour hackathon, this app makes the process of
    getting insured quicker and more accessible for renters.`,
    skills: ["Android", "Kotlin", "Tensorflow"]
  },
  {
    key: "hoppitt-calendar",
    title: "Hoppitt Calendar",
    icon: "/projects/hoppitt-calendar-icon.png",
    repo: "https://github.com/mhoppitt/Hoppitt-Calendar",
    description: `Hoppitt Calendar simplifies the scheduling challenges faced by shared households by providing a centralised
    platform for all members to easily plan and track their activities. With custom attributes tailored to the unique needs of the
    household, events are seamlessly synced in real-time, giving everyone an up-to-date view of each other's week. This app fosters
    better coordination and smoother day-to-day living for shared homes.`,
    skills: ["iOS", "SwiftUI", "AWS S3", "AWS SNS"]
  },
  {
    key: "fur-finder",
    title: "FurFinder",
    icon: "/projects/fur-finder-icon.png",
    repo: "https://github.com/mhoppitt/FurFinder",
    description: `FurFinder is a fun and interactive app designed to get you outdoors and connect with people through a shared love
    of dogs. With a list of 100+ dog breeds, users can capture photos of different breeds, add details like the dog's name, age,
    and a fun fact, and track their progress toward finding every listed breed. The app not only motivates users to explore their
    surroundings but also encourages conversation with strangers, making it a great way to meet new people and make friends along
    the way.`,
    skills: ["iOS", "SwiftUI", "AWS S3", "AWS DynamoDB"]
  }
]