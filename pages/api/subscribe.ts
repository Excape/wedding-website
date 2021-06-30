import { Client } from "@notionhq/client";

const subscribe = async (req, res) => {
  const apiKey = process.env.NOTION_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return res.status(500).json({ error: "api key or database id not set!" });
  }

  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ error: "set the email in the body" });
  }

  const notion = new Client({ auth: apiKey });

  try {
    await postToNotion(email, notion, databaseId);
  } catch (error) {
    return res.status(500).json({ error: `Error from notion: ${error}` });
  }

  return res.status(200).json({ message: "success" });
};

async function postToNotion(
  content: string,
  notion: Client,
  databaseId: string
) {
  await notion.request({
    path: "pages",
    method: "post",
    body: {
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content,
              },
            },
          ],
        },
      },
    },
  });
}

export default subscribe;
