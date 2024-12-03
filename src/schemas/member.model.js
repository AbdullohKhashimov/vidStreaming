import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unqiue: true,
    },

    email: {
      type: String,
      required: true,
      unqiue: true,
    },

    password: {
      type: String,
      required: true,
    },

    img: {
      type: String,
    },

    subscribers: {
      type: Number,
      default: 0,
    },

    subscribedUsers: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", MemberSchema);
