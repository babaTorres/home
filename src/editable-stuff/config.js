// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Brandon",
  middleName: "",
  lastName: "Torres",
  message: " Every success story is a tale of constant adaptation, revision, and change",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/babaTorres",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/torresbm/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/propic.jpg"),
  imageSize: 375,
  message:
    "My name is Brandon Torres. I am a recent graduate of the Class of 2020 with a Bachelor's Degree in Information Technology. Software Engineering has become a passion for me as I am always eager to learn new technologies and build with what I have learned. In my free time I like working on projects using new skills that I have learned.",
  resume: require("../editable-stuff/Brandon Torres Resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "babaTorres", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['crypto-exchange','dbank','CBSDProject'],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript" },
    { name: "React" },
    { name: "HTML/CSS"},
    { name: "C#"},
    { name: "Unity"},
    { name: "Solidity"},
    { name: "Web3"},

  ],
  softSkills: [
    { name: "Goal-Oriented"},
    { name: "Communication" },
    { name: "Innovative" },
    { name: "Adaptable" },
    { name: "Problem Solver"},
    { name: "Team-Oriented"},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available or have any questions, please feel free to email me at",
  email: "torresbm95@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Core Programmer',// Here Add Company Name
      companylogo: require('../assets/img/UMlogo.png'),
      date: 'Sep 2019 – Sep 2020',
    },
  ]
}

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      role: 'B.S in Information Technology',// Here Add Company Name
      companylogo: require('../assets/img/fiu logo.png'),
      date: '2020',
    },
    {
      role: 'Bachelor in Social Work',// Here Add Company Name
      companylogo: require('../assets/img/fsu logo.png'),
      date: '2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, education };
