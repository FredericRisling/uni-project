const { MongoClient } = require("mongodb");
// Replace the following with values for your environment.
const username = encodeURIComponent("rootuser");
const password = encodeURIComponent("rootpass");
const url = "localhost:27017";
const authMechanism = "DEFAULT";
// Replace the following with your MongoDB deployment's connection string.
const uri =
    `mongodb://${username}:${password}@${url}/?authMechanism=${authMechanism}`;
// Create a new MongoClient
const client = new MongoClient(uri);
// Function to connect to the server
async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        await client.db("uniProject").createCollection("contacts", (err, res) => {

        })
        const myobj = { name: "Company Inc", address: "Highway 37" };
        //await client.db("uniProject").collection("contacts").insertOne(myobj, (err, res) => {
        //    if (err) throw err;
        //    console.log("1 document inserted");
        //})
        console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);