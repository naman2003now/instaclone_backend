import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  caption: {
    type: mongoose.SchemaTypes.String,
  },
  comments: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Comment" }] },
  likes: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
  },
});

export default mongoose.model("Post", PostSchema);
