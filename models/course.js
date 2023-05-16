import { model, models, Schema } from "mongoose";

const courseSchema = new Schema({
  email: String,
  courseName: String,
  day: String,
  start: Number,
  end: Number,
});

export const course = models.course || model("course", courseSchema);
