import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: mongoose.SchemaTypes.String,
    unique: true,
  },
  name: {
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
