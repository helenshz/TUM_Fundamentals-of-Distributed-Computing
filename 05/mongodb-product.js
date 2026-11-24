const { MongoClient } = require("mongodb");

// Read the connection string from the .env file (.env is git-ignored, so the password is never committed)
// Example .env content: MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/
// To use a local MongoDB instead: MONGODB_URI=mongodb://127.0.0.1:27017
process.loadEnvFile();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    // Access the "Products" database (created automatically on the first insert)
    const database = client.db("Products");
    console.log("Database accessed.");

    // Access the "products" collection (also created automatically)
    const products = database.collection("products");
    console.log("Collection accessed.");

    // Insert several products at once
    const result = await products.insertMany([
      { title: "Apple iPhone", price: 999.99, rating: 4.2, stock: 99 },
      { title: "Samsung Galaxy", price: 899.99, rating: 4.4, stock: 50 },
      { title: "Google Pixel", price: 699.99, rating: 4.5, stock: 30 },
    ]);
    console.log(result.insertedCount + " products inserted.");

    // Query for the product with the title 'Apple iPhone'
    const query = { title: "Apple iPhone" };
    const product = await products.findOne(query);
    if (product) {
      console.log("Product found.");
      console.log(product);
      console.log(
        "Title: " + product.title +
        ", Price: " + product.price +
        ", Rating: " + product.rating +
        ", Stock: " + product.stock
      );
    } else {
      console.log("Product not found.");
    }
  } finally {
    // Always close the connection, whether it succeeded or failed
    await client.close();
    console.log("Connection closed.");
  }
}

run().catch(console.dir);
