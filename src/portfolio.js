  /* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Shrey Dhuvad",
  title: "Hi all, I'm Shrey",
  subTitle: emoji(
    "An Enthusiatic Learner with top internship experience in MNC like BMW, GE Aerospace & Wallet. "
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1-98RTLL74dRmtUht3sKJYa60JgwDqhvW?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Glitched-PC",
  linkedin: "https://www.linkedin.com/in/shrey-dhuvad",
  gmail: "appwizardd@gmail.com",
  display: true
};

// Skills Section (Fixed: skills must be strings, softwareSkills are objects)
const skillsSection = {
  title: "What I do",
  subTitle: "I'm a B.Tech CSE student who identifies real-world problems and builds scalable tech-driven solutions—from hardware telemetry to full-stack applications",
  skills: [
    emoji("⚡ Currently Building solution for Indian Railways for the problems faced by Millions of Travellers."),
    emoji("⚡ Enrolled in Finale of Smart India Hackathon & Google Hackathon 2026"),
    emoji("")
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "NIMS University, Jaipur",
      logo: require("./assets/images/nims logo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2026 - 2030",
      desc: "First-year undergraduate student pursuing B.Tech CSE, focusing on software architecture, IoT hardware prototyping, and systems engineering.",
      descBullets: [
        "Cadet in the 3rd Rajasthan Naval Unit NCC"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Software & Programming (Python, C/C++)",
      progressPercentage: "85%"
    },
    {
      Stack: "IoT Systems & Telemetry (ESP32)",
      progressPercentage: "80%"
    },
    {
      Stack: "Operations & Management",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Director - Resource & Management",
      company: "India International Movement to Unite Nations (IIMUN)",
      companylogo: require("./assets/images/iimun logo.png"),
      date: "2025 – Present",
      desc: "Oversaw logistics planning, resource deployment, and real-time issue resolution. Managed delegate registration, ID issuance, access allocation, and financial reconciliation while leading a dedicated operations team."
    },
    {
      role: "Operations Lead - Delhi Civil Servants Tour",
      company: "IIMUN Initiate | Delhi",
      companylogo: require("./assets/images/iimun logo.png"),
      date: "November 2025",
      desc: "Executed operations for a 4-day national-level exposure tour involving 23 selected delegates from across India. Acted as primary on-ground coordinator managing security, protocols, and official Parliament visits."
    },
    {
      role: "Associate Management Intern",
      company: "BMW Eminet Cars",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2025",
      desc: "Handled daily on-site management and operational tasks within a professional corporate office environment, assisting with task coordination and operational problem-solving."
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "false",
  display: false
};

// Featured Projects
const bigProjects = {
  title: "Featured Projects",
  subtitle: "IOT SYSTEMS, MACHINE LEARNING & NATIONAL REPRESENTATION",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "RailEdge AI",
      projectDesc: "Trackside radio frequency telemetry system using ESP32 nodes and XGBoost machine learning models for dynamic train arrival forecasting.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/Glitched-PC"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Young Indian Parliament",
      projectDesc: "Represented at a national-level forum involving structured parliamentary procedures, formal deliberations, and public speaking.",
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Leadership & Achievements 🏆 "),
  subtitle: "Key leadership roles, school administration, and national conference experiences.",
  achievementsCards: [
    {
      title: "Headboy",
      subtitle: "Shree Jalaram International School: Represented the student body, coordinated between administration and students, and led large-scale event planning.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "School Leadership",
      footerLink: []
    },
    {
      title: "NCC Cadet",
      subtitle: "3rd Rajasthan Naval Unit National Cadet Corps: Engaging in naval cadet training, discipline, and swimming practice.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "NCC Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "Sharing insights on student career development, early financial independence, and project milestones.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji("SHARING EXPERIENCES IN EVENT OPERATIONS AND TECHNOLOGY"),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSING TECHNOLOGY AND LEADERSHIP",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to review or download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project, collaboration, or just want to say hi? My Inbox is open for all.",
  number: "+91 70160 21108",
  email_address: "Shreydhuvad@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
