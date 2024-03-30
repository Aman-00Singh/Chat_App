import mongoose from "mongoose";

const connect_mongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected successfully ");
  } catch (error) {
    console.log("Error connecting to mongo db", error.message);
  }
};
export default connect_mongo;
