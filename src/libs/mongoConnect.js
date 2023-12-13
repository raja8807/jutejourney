import mongoose from "mongoose";

export const connectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  console.log(process.env.NEXT_PUBLIC_MONGO_URI);
  // return await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
  // mongodb+srv://jutejourney:kiyr@123@jutehourney.rusm8qk.mongodb.net/test?retryWrites=true
  return await mongoose.connect('mongodb+srv://jutejourney:r8ZMPIIyFaf4o5rt@jutehourney.rusm8qk.mongodb.net/jjdb?retryWrites=true');
};
