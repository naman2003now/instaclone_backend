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
    required: true,
  },
  profileImage: {
    type: mongoose.SchemaTypes.String,
    require: false,
  },
  posts: {
    type: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Post",
      },
    ],
    required: false,
  },
});

export default mongoose.model("User", UserSchema);
