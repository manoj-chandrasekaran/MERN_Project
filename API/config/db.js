import { MongoClient } from "mongodb";
import dontenv from "dotenv";

dontenv.config();

// Hardcoded MongoDB URI
const hardcodedMongoUri = "mongodb+srv://test:test@cluster0.uhpk1fu.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(hardcodedMongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = await client.connect();
conn.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
export default conn;
