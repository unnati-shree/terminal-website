import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "GitHub",
        username: "achintya-7",
        link: "https://github.com/achintya-7",
      },
      {
        medium: "Email",
        username: "achintya22052000@gmail.com",
        link: "achintya22052000@gmail.com",
      },
      {
        medium: "Twitter",
        username: "achintya-7",
        link: "https://twitter.com/achintya2205",
      },
      {
        medium: "LinkedIn",
        username: "Achintya Singh",
        link: "https://www.linkedin.com/in/achintya-singh-4b4563200/",
      },
      {
        medium: "Hashnode",
        username: "Achintya",
        link: "https://achintya-7.hashnode.dev/",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
