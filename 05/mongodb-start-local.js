const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("my_database");
    console.log("Database accessed.");
    //console.log(database);

    // Access/create the "movies" collection
    const movies = database.collection("movies");
    console.log("Collection accessed.");
    //console.log(movies);

    // Access/create the "products" collection
    const products = database.collection("products");
    console.log("Collection accessed.");
    //console.log(products);

    // Insert a product
    products.insertOne({ name: "Sample Product", price: 9.99 });
    console.log("Product inserted.");

    // Create a new movie object
    newMovie = { title: "Back to the Future", year: "1985", director: "Robert Zemeckis" };
    // Insert a movie
    await movies.insertOne(newMovie);
    console.log("Movie inserted.");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future", year: "1985" };
    const movie = await movies.findOne(query);
    if (movie) {
      console.log("Movie found.");
      console.log(movie);
      console.log("Title: " + movie.title + ", Year: " + movie.year + ", Director: " + movie.director);
    } else {
      console.log("Movie not found.");
    }

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
