const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://tenstois:8g93zEy946HHOhXA@alumplify.jhymrjr.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('newsandstories');
    const contentdb = database.collection('content');

    const newsstory = {
        title: "test",
        date: "January 1 2024",
        author: "Jonel Azul",
        content: "He ordered his regular breakfast. Two eggs sunnyside up, hash browns, and two strips of bacon. He continued to look at the menu wondering if this would be the day he added something new. This was also part of the routine. A few seconds of hesitation to see if something else would be added to the order before demuring and saying that would be all. It was the same exact meal that he had ordered every day for the past two years.",
    };

    contentdb.insertOne(newsstory);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.listen(3001, function(){
    console.log('Server started');
});