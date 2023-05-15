import { model, Schema } from "mongoose";

const CalItemSchema = new Schema({
  email: String,
  type: String,
  title: String,
  date: String,
});

export const CalItem = model("CalItem", CalItemSchema);
