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
        description: "It's a mobile app which helps to find carpooling partners who are going to the same destination. \nIt's a full stack app with a Flutter frontend and a Go backend.",
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
        link: "https://github.com/achintya-7/genie-gen",
      },
      {
        name: "Election DAPP",
        description:
          "A Decentralized Application to conduct elections. It's a full stack app with a Flutter and a Solidity, Ethereum.",
        stack: ["Flutter", "Solidity", "Ethereum"],
        link: "https://github.com/achintya-7/Election-DAPP",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
