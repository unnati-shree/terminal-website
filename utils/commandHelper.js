const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "neofetch",
    description: "My System Info",
  },
  {
    command: "edu",
    description: "My Education",
  },
  {
    command: "exp",
    description: "My Experience",
  },
  {
    command: "skills",
    description: "My Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "blog",
    description: "Visit my blog",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${project.name
          }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};
const getExperience = async () => {
  const experience = await (await fetch("/api/experience")).json();
  const projectHTML =
    `<h3>My Experience</h3>` +
    experience
      .map(
        (experience) => `<div class="command" style="display:flex; flex-direction:row; align-item:center; justify-content:space-between">
        <div>
        <a href="${experience.link}" target="_blank"><b class="command">${experience.name
          }</b></a> - <b>${experience.position}</b>
        </div>
        <div style="display:flex; flex-direction:row; align-item:center; gap:1rem">
        <p class="meaning">${experience.startDate}</p> -
        <p class="meaning">${experience.endDate}</p>
        </div>
        </div>
        <p>${experience.description}</p>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  
  about: () => `My name is Achintya. I am a Go and Flutter developer. Currently working as a Go Backend Developer
    <br/><br/>
    I have huge interest in building Mobile apps and exploring various Backend technologies. Also a Blogger on the side and an advocate of Open Source. 
    <br/><br/>
    A little bit into DevOps, Docker and AI. Massively into Hip-Hop, Video Games and Anime.
    <br/><br/>
  `,
  
  edu: () => `I am currently in my pre-final year (3rd year) of Bachelor's in Computer Science Engineering from Amity University, Noida.`,

  skills: () => `
  <div class="skill"><b>Language</b>: Go, Dart, Java, Python<br /></div>
  <div class="skill"><b>Frameworks</b>: Flutter, Gin, Fiber, FastAPI<br /></div>
  <div class="skill"><b>Tools</b>: Docker, GCP, Github Actions, Linux, GetX, gRPC<br /></div>
  <br />
  <br />
  <b>Outside Computer Science</b>
  <br />
  <div class="skill"><b>Interests</b>: Books, Music, Finance, Human Psychology<br /></div>
<br />
  `,
  projects: getProjects,
  experience: getExperience,
  contact: getContacts,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  blog: () => {
    window.open("https://blog-utkarshchourasia-in.vercel.app/", "_blank");
    return "";
  },
};

