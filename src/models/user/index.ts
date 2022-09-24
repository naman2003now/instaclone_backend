import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  name: {
    required: true,
    type: mongoose.SchemaTypes.String,
  },
  bio: {
    type: mongoose.SchemaTypes.String,
  },
  posts: {
    type: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Post",
      },
    ],
  },
});

export default mongoose.model("User", UserSchema);
