import { model, models, Schema } from "mongoose";

const CalItemSchema = new Schema({
  email: String,
  type: String,
  title: String,
  date: String,
});

export const CalItem = models.CalItem || model("CalItem", CalItemSchema);
