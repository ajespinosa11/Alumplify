const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');


const app = express();
const port = 5000; // Change this to your desired port

// Enable CORS for all routes
app.use(cors());

// Connection URL
const url = "mongodb+srv://tenstois:8g93zEy946HHOhXA@alumplify.jhymrjr.mongodb.net/?retryWrites=true&w=majority";

// Database Name
const dbName = 'newsandstories'; // Change this to your database name


// API endpoint to fetch news and story
app.get('/api/content', async (req, res) => {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('content');

    // Query to fetch all documents from the collection
    const result = await collection.find({}).toArray();

    // Respond with the fetched data
    res.json(result);
  } finally {
    await client.close();
  }

});

// API endpoint to fetch individual content details by ID
app.get('/api/content/:id', async (req, res) => {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('content');

    // Extract the ID from the request parameters
    const itemId = req.params.id;

    // Query to fetch a specific document by ID
    const document = await collection.findOne({ _id: new ObjectId(itemId) });

    if (!document) {
      // If no document is found, respond with a 404 status and an error message
      res.status(404).json({ error: 'Item not found' });
    } else {
      // Respond with the fetched data
      res.json(document);
    }
  } finally {
    await client.close();
  }
});

// API endpoint to fetch alumni info
app.get('/api/aluminfo', async (req, res) => {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('Aluminfo');

    // Query to fetch all documents from the collection
    const result = await collection.find({}).toArray();

    // Respond with the fetched data
    res.json(result);
  } finally {
    await client.close();
  }
});

// API endpoint to fetch job data
app.get('/api/alumjob', async (req, res) => {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('alumjobdata');

    // Query to fetch all documents from the collection
    const result = await collection.find({}).toArray();

    // Respond with the fetched data
    res.json(result);
  } finally {
    await client.close();
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

