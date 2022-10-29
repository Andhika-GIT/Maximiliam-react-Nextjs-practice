// this trigger when request send to ->  /api/meetups

import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  // connect to our mongodb server
  const client = await MongoClient.connect('mongodb+srv://Andhika:MMmfGsbnaPpxPehq@cluster0.1ck4mzj.mongodb.net/?retryWrites=true&w=majority');

  const db = client.db();

  // get the collection ( collection -> like table in our table)
  const meetupsCollection = db.collection('meetups');

  // find or get the documents ( data ) in our collection ( table )
  const meetups = await meetupsCollection.find().toArray();

  console.log(meetups);

  // close database connection
  client.close();

  // sending the respond after request
  // define the status and sending json data ( like message and the data )
  res.status(201).json({ message: 'meetup inserted!', meetups: meetups });
};

export default handler;
