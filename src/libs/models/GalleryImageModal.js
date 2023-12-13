import { Schema, model, models } from "mongoose";

const galleryImageScheme = new Schema(
  {
    url: {
      type: String,
    },
    category: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const GalleryImage =
  models.GalleryImage || model("GalleryImage", galleryImageScheme);

export default GalleryImage;
