/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shrey Dhuvad",
  title: "Hi all, I'm Shrey",
  subTitle: emoji(
    "A passionate Software Developer & Operations Strategist combining IoT engineering with high-accountability event management and national-level leadership."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1-98RTLL74dRmtUht3sKJYa60JgwDqhvW?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Glitched-PC",
  linkedin: "https://www.linkedin.com/in/shrey-dhuvad",
  gmail: "Shreydhuvad@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPMENT, IOT & HIGH-ACCOUNTABILITY EVENT OPERATIONS",
  skills: [
    {
      skillName: "Full-Stack Development",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "IoT & Hardware Prototyping",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Event Operations & Leadership",
      fontAwesomeClassname: "fas fa-users-cog"
    }
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NIMS University, Jaipur",
      logo: require("./assets/images/harvardLogo.png"), // You can replace/update logo asset if needed
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2026 - Present",
      desc: "First-year undergraduate student pursuing B.Tech CSE, focusing on software architecture, IoT hardware prototyping, and systems engineering.",
      descBullets: [
        "Cadet in the 3rd Rajasthan Naval Unit NCC",
        "Active participant in technical hackathons and national forums"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software & Programming (Python, C/C++)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Director - Resource & Management",
      company: "India International Movement to Unite Nations (IIMUN)",
      companylogo: require("./assets/images/facebookLogo.png"), // Placeholder logo asset reference
      date: "2025 – Present",
      desc: "Oversaw logistics planning, resource deployment, and real-time issue resolution. Managed delegate registration, ID issuance, access allocation, and financial reconciliation while leading a dedicated operations team."
    },
    {
      role: "Operations Lead - Delhi Civil Servants Tour",
      company: "IIMUN Initiate | Delhi",
      companylogo: require("./assets/images/quoraLogo.png"),
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Disabled to prevent API rate limit crashes
  display: false // Set false to hide this section safely
};

// Some big projects you have worked on

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
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Leadership & Achievements 🏆 "),
  subtitle:
    "Key leadership roles, school administration, and national conference experiences.",

  achievementsCards: [
    {
      title: "Headboy",
      subtitle:
        "Shree Jalaram International School: Represented the student body, coordinated between administration and students, and led large-scale event planning.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "School Leadership",
      footerLink: []
    },
    {
      title: "NCC Cadet",
      subtitle:
        "3rd Rajasthan Naval Unit National Cadet Corps: Engaging in naval cadet training, discipline, and swimming practice.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "NCC Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing insights on student career development, early financial independence, and project milestones.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section if empty
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "SHARING EXPERIENCES IN EVENT OPERATIONS AND TECHNOLOGY"
  ),

  talks: [],
  display: false // Set false to hide this section if empty
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSING TECHNOLOGY AND LEADERSHIP",

  podcast: [],
  display: false // Set false to hide this section if empty
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to review or download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, collaboration, or just want to say hi? My Inbox is open for all.",
  number: "+91 70160 21108",
  email_address: "Shreydhuvad@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
