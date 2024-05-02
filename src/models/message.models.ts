import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  Content: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now() },
});

export const Message =
  mongoose.models.messages || mongoose.model("messages", messageSchema);
