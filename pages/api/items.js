import { CalItem } from "../../models/CalItem";
import { mongooseConnect } from "../../lib/mongoose";

export default async function handler(req, res) {
  const method = req.method;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await CalItem.find());
  }

  if (method === "POST") {
    const { email, type, title, date } = req.body;
    const response = await CalItem.create({
      email,
      type,
      title,
      date,
    });
    res.json(response);
  }
}
