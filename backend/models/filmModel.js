import mongoose from "mongoose";

const filmSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_thumbnail: {
    type: String,
    required: true,
  },
});

const Film = mongoose.model("Film", filmSchema);

export default Film;
