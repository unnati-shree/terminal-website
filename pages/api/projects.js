import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "Car Pooling App",
        description: "It's a monile app which helps to find carpooling partners who are going to the same destination. \nIt's a full stack app with a Flutter frontend and a Go backend.",
        stack: ["Go", "Gin", "Flutter", "MongoDB"],
        link: "https://github.com/achintya-7/CarPooling",
      },
      {
        name: "Go SocketIO",
        description:
          "A socket server written in Go. It's a simple chat server with features like Update, Delete and Reply to Chats.",
        stack: ["Go", "MongoDB"],
        link: "https://github.com/achintya-7/go-socketio",
      },
      {
        name: "Genie Gen",
        description:
          "A Go cli tool to generate boilerplate code for a project. It's generates a project structure for a Go, Gin, Postgres project with SQLc.",
        stack: ["Go"],
        link: "https://github.com/JammUtkarsh/assignment-parse",
      },
      {
        name: "Grec",
        description:
          "A data entry app based on CLI.",
        stack: ["Go"],
        link: "https://github.com/JammUtkarsh/grec",
      },
      {
        name: "Go Web Server",
        description:
          "This project serves many purposes. It is getting started guide for GitHub Actions. Using GitHub actions, we are pushing the Docker image built in cloud to Docker Registry. The image is a go web server for static webpages.",
        stack: ["Docker", "Go", "CI/CD", "Github Actions"],
        link: "https://github.com/JammUtkarsh/go-web-server",
      },
      {
        name: "Home Server",
        description:
          "I upgraded my potato PC to my local home server. It's served as a remote development, a media server, a remote backup and many more minor tasks. <i>The reffered link is the site which helped to do all the jobs using Docker</i>",
        stack: ["Ubuntu Server", "Docker"],
        link: "https://fleet.linuxserver.io/",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
