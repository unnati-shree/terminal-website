import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "Achintya") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }
`;

async function gql(query, variables={}) {
  const data = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          query,
          variables
      })
  });

  console.log("DATA", data)

  return data.json();
}



export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
    if (req.method === "GET") {
      const result = await gql(GET_USER_ARTICLES, { page: 0 })
      const articles = result.data.user.publication.posts;
      console.log(articles)
      return res.json(articles)
    } else {
      return res.status(400).json({ message: "Only GET request allowed" });
    }
  }