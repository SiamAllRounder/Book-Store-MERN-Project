import express, { request, response } from "express";
import { PORT, MongoDBConnectionString } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

let ExpressServer = express();

// Middle Ware for parsing request body
ExpressServer.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
ExpressServer.use(cors());


// Option 2: Allow Custom Origins
// ExpressServer.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// })
// );

ExpressServer.use('/books', booksRoute);

ExpressServer.get("/", (request, response) => {
  console.log(request);
  return response
    .status(234)
    .send("Salamoon Alaikoom Welcome To MERN Stack Tutorial");
});

mongoose
  .connect(MongoDBConnectionString)
  .then(() => {
    console.log(
      "express server connected to mongobd database with atlas remote"
    );
    ExpressServer.listen(PORT, () => {
      console.log(`Express Server is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
