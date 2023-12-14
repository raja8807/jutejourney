import ReviewModal from "@/libs/models/ReviewModal";
import { connectMongoDB } from "@/libs/mongoConnect";

const handler = async (req, res) => {
  try {
    let data;
    if (req.method === "POST") {
      await connectMongoDB();
      data = await ReviewModal.create(req.body);
    }
    if (req.method === "GET") {
      await connectMongoDB();
      data = await ReviewModal.find();
    }
    if (req.method === "DELETE") {
      await connectMongoDB();
      data = await ReviewModal.deleteOne({ _id: req.query.id });
    }

    return res.status(200).send(data);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

export default handler;
