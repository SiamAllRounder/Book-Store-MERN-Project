import mongoose from "mongoose";

let bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// export const Cat = mongoose.model('Cat', { name: String });
export let Book = mongoose.model("Cat", bookSchema);
