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
        medium: "github",
        username: "achintya-7",
        link: "https://github.com/achintya-7",
      },
      {
        medium: "email",
        username: "achintya22052000@gmail.com",
        link: "achintya22052000@gmail.com",
      },
      {
        medium: "twitter",
        username: "JammUtkarsh",
        link: "https://twitter.com/JammUtkarsh",
      },
      {
        medium: "linkedin",
        username: "5utkarshc",
        link: "https://www.linkedin.com/in/jammutkarsh/",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
