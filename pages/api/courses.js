import { course } from "../../models/course";
import { mongooseConnect } from "../../lib/mongoose";

export default async function handler(req, res) {
  const method = req.method;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await course.find());
  }

  if (method === "POST") {
    const { email, courseName, days, start, end } = req.body;

    const response = await course.create({
      email,
      courseName,
      days,
      start,
      end,
    });
    res.json(response);
  }
  if (method === "DELETE") {
    if (req.query?.id) {
      await course.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
