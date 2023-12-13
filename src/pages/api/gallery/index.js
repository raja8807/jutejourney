import GalleryImage from "@/libs/models/GalleryImageModal";
import { connectMongoDB } from "@/libs/mongoConnect";

const handler = async (req, res) => {
  try {
    let data;
    if (req.method === "POST") {
      await connectMongoDB();
      data = await GalleryImage.create(req.body);
    }
    if (req.method === "GET") {
      await connectMongoDB();
      data = await GalleryImage.find();
    }

    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

export default handler;
