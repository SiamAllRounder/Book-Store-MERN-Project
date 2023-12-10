export let PORT = 5555;

/* export let MongoDBConnectionString =
  "mongodb+srv://seumbdit:zOseWkc2rM0iy3j4@bookstoremern1.c2regy3.mongodb.net/books-collection?retryWrites=true&w=majority";
  */

// for local machine local mongo database this is database name books-collection
// collection will be create automatically
// when book model run it will create books collection
export let MongoDBConnectionString =
  "mongodb://127.0.0.1:27017/books-collection";
