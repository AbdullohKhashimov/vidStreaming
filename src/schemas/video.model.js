import mongoose, { mongo } from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    vidDesc: {
      type: String,
      required: true,
    },

    imgUrl: {
      type: String,
      required: true,
    },

    vidUrl: {
      type: String,
      required: true,
    },

    views: {
      type: Number,
      default: 0,
    },

    tags: {
      type: [String],
      default: [],
    },

    likes: {
      type: [String],
      default: [],
    },

    disLikes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
