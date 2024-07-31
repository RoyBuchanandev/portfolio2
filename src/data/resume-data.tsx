import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Roy Buchanan",
  initials: "RB",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/Buenos+Aires,+Argentina",
  about: "Developer",
  summary:
    "With a primary focus on backend development, I bring 2 years of formal experience in the tech sector, contributing to projects for prominent clients such as Rogers, Coca Cola, and Binaria Seguros, among others. Additionally, I have hands-on experience with frontend technologies, providing a well-rounded skill set.\n\n" +
    "Technologies: C#, SQL, .NET, Dapper, JavaScript, React, Tailwind CSS.\n\n" +
    "I possess strong knowledge in essential development and project management tools, including Git and GitHub for version control, as well as ticketing systems like Jira and Trello for planning and tracking.\n\n" +
    "I have collaborated with teams distributed across the United States, Europe, India, and Argentina, gaining valuable experience in global teamwork. I particularly enjoy the daily collaboration with colleagues from diverse backgrounds.\n\n" +
    "I bring conversational English communication skills and possess basic knowledge of Italian.",
  avatarUrl: "https://static01.nyt.com/images/2023/06/05/opinion/02Manjoo-1/02Manjoo-1-jumbo.jpg?quality=75&auto=webp",
  personalWebsiteUrl: "",
  contact: {
    email: "roybuchanan1996@gmail.com",
    tel: "+54 3489 311957",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/roybuchanandev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/roybuchanandev/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Teclab",
      degree: "Programming Technician",
      start: "2022",
      end: "Present",
    },
  ],
  work: [
    {
      company: "OSS Web Studio",
      link: "https://osswebstudio.com",
      badges: ["Remote"],
      title: "Web Developer",
      logo: ConsultlyLogo, // You can change the logo as appropriate
      start: "2024",
      end: "Present",
      description:
        "Alongside a team of developers and designers, we founded OSS, a web agency dedicated exclusively to creating products for clients in Buenos Aires and Miami. We have experience working with companies from various sectors, combining our capabilities to deliver the best results. Technologies: Next.js, React.js, and more.",
    },
    {
      company: "Binaria Seguros",
      link: "https://www.binariaseguros.com",
      badges: [],
      title: "Fullstack .NET Developer",
      logo: ClevertechLogo,
      start: "2023",
      end: "2024",
      description:
        "Participated in migrating an application from VBScript to ASP.NET and from AS400 to SQL Server, using Dapper as an ORM. Implemented frontend improvements using jQuery.",
    },
    {
      company: "Hogarth Worldwide",
      link: "https://www.hogarthww.com",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: ConsultlyLogo,
      start: "2022",
      end: "2023",
      description:
        "Developed features and solved issues on websites for international clients like Rogers and Coca-Cola. Worked with teams distributed in Miami, Buenos Aires, and India.",
    },
  ],
  skills: [
    ".NET",
    "React",
    "JavaScript",
    "TypeScript",
    "jQuery",
    "SQL",
    "C#",
    "Tailwind",
    "Dapper",
    "Next.js",
  ],
  projects: [
    {
      title: "OSS Web Studio Projects",
      techStack: [
        "Web Development",
        "Next.js",
        "React.js",
        "JavaScript",
        "HTML/CSS",
      ],
      description:
        "Development of custom web products for clients in Buenos Aires and Miami, using modern technologies such as Next.js and React.js.",
      logo: ConsultlyLogo, // You can change the logo as appropriate
      badges: ["Remote"], // Add any other badges as needed
    },
    {
      title: "Binaria Seguros Migration",
      techStack: [
        "Full Stack Developer",
        "ASP.NET",
        "SQL Server",
        "Dapper",
        "jQuery",
      ],
      description:
        "Migration of an application from VBScript to ASP.NET and from AS400 to SQL Server, improving frontend functionality.",
      logo: BarepapersLogo,
      badges: ["Private Repo"], // Add the "Private Repo" badge here
    },
    {
      title: "Hogarth Worldwide",
      techStack: [
        "Frontend Developer",
        "React",
        "JavaScript",
        "HTML",
        "Tailwind",
      ],
      description:
        "Implementation of features and problem-solving on websites for international clients Coca-Cola, Rogers, etc.",
      badges: [], // Add any other badges as needed
    },
    // Add any other relevant projects if necessary
  ],

} as const;
