import { Client } from "@notionhq/client";

type Form = {
  name: string;
  email: string;
  attending: string;
  plusOne: string;
  notes: string;
};

const rsvp = async (req, res) => {
  const apiKey = process.env.NOTION_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return res.status(500).json({ error: "api key or database id not set!" });
  }

  const form = req.body as Form;

  const notion = new Client({ auth: apiKey });

  try {
    await postToNotion(form, notion, databaseId);
  } catch (error) {
    return res.status(500).json({ error: `Error from notion: ${error}` });
  }

  return res.status(200).json({ message: "success" });
};

async function postToNotion(form: Form, notion: Client, databaseId: string) {
  await notion.request({
    path: "pages",
    method: "post",
    body: {
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: form.name,
              },
            },
          ],
        },
        Email: {
          email: form.email,
        },
        RSVP: {
          checkbox: form.attending === "yes",
        },
        "+1": {
          rich_text: [
            {
              type: "text",
              text: { content: form.plusOne },
            },
          ],
        },
        Notes: {
          rich_text: [
            {
              type: "text",
              text: { content: form.notes },
            },
          ],
        },
        Date: {
          date: {
            start: new Date(),
          },
        },
      },
    },
  });
}

export default rsvp;