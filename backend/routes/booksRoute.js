import express from "express";
import { Book } from "../models/bookModel.js";

let router = express.Router();

// Route for Save a new Book
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    let newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    let book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books Remote Mongo DB Database with Atlas
router.get("/", async (request, response) => {
  try {
    let books = await Book.find({}).sort({ createdAt: -1 }).limit(3);

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book By ID Remote Mongo DB Database with Atlas
router.get("/:id", async (request, response) => {
  try {
    let { id } = request.params;

    let book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for PUT Update One Book By ID to Remote Mongo DB Database with Atlas
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    let { id } = request.params;

    let result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Book Not Found" });
    }

    return response.status(200).send({ message: "Book Updated Successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for DELETE One Book By ID to Remote Mongo DB Database with Atlas

router.delete("/:id", async (request, response) => {
  try {
    let { id } = request.params;

    let result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book Not Found" });
    }

    return response.status(200).send({ message: "Book Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


export default router;