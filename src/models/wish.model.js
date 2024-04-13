import mongoose from "mongoose";

const wishSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    username: {
      type: String,
      require: true,
      trim: true,
    },
    cardname: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    cbu: {
      type: String,
      require: true,
      trim: true,
    },
    alias: {
      type: String,
      trim: true,
      default: "-",
    },
    paymentlink: {
      type: String,
      trim: true,
      default: "-",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    state: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Wish", wishSchema);
