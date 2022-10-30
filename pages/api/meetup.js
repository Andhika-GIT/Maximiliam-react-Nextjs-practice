// this trigger when request send to ->  /api/meetups

import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  // connect to our mongodb server
  const client = await MongoClient.connect('mongodb+srv://Andhika:MMmfGsbnaPpxPehq@cluster0.1ck4mzj.mongodb.net/?retryWrites=true&w=majority');

  const db = client.db();

  // get the collection ( collection -> like table in our table)
  const meetupsCollection = db.collection('meetups');

  // find or get the documents ( data ) in our collection ( table )
  const meetups = await meetupsCollection
    .find(
      // filter criteria
      {},

      // find spesific document by using id
      { _id: 1 }
    )
    .toArray();
};

export default handler;
