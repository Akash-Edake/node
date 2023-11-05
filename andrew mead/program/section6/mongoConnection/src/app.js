const express = require("express");
const morgan = require("morgan");
const app = express();
const { MongoClient,ObjectId } = require("mongodb");
const _id = new ObjectId()
console.log("_id",_id,_id.getTimestamp())
// ! local mongo db connection
const url = "mongodb://127.0.0.1:27017";
const dbName = "admin";
const collectionName = "demo";

// ! mongo atlac connection
// const url = "mongodb+srv://admin:admin@cluster0.zpdqbcr.mongodb.net";
// const dbName = "test";
// const collectionName = "UserInfo"

// MongoClient.connect(url, (error, client) => {
//   if (error) {
//     return console.log("something went wrong");
//   }
//   const db = client.db(dbName);
//   const data = db.collection(collectionName).find({});
//   console.log("connected to the database", data);
// });

const client = new MongoClient(url);
app.use(morgan("dev"));
async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  // await collection.insertOne({ id: 1, lang: "js" }, (err, result) => {
  //   if (err) {
  //     console.log("Error occurred while inserting document into MongoDB", err);
  //     return;
  //   }
  //   console.log(result.ops);
  // });
  await collection.deleteMany({})
  // const findResult = await collection.find({}).toArray();
 collection.find({_id: new ObjectId("6520577f10fd4e076fda8d75")},(err,user)=>{

    console.log("findResultBY_id",user)
  });
  // const arrangeData = findResult
  //   .sort((a, b) => a.id - b.id)
  //   .map((data) => {
  //     return {
  //       id: data.id,
  //       userId: data.userId,
  //       title: data.title,
  //       completed: data.completed,
  //     };
  //   });
  // getData(arrangeData);
  return "done.";
}
const getData = (datas) => {
  app.get("/", (req, res) => {
    res.send(datas);
  });
  app.listen(8080);
};
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
