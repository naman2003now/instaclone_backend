import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  post: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Post",
  },
  description: {
    type: mongoose.SchemaTypes.String,
  },
});

export default mongoose.model("Comment", CommentSchema);
