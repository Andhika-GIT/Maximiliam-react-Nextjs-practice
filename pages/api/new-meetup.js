// this trigger when request send to -> /api/new-meetup

import { MongoClient } from 'mongodb';

const handler = async (res, req) => {
  if (req.method === 'POST') {
    // if we receive post request, run below

    // create instance to store data
    const data = req.body;

    // connect to our mongodb server
    const client = await MongoClient.connect('mongodb+srv://Andhika:Lowjed026@cluster0.1ck4mzj.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    // get the collection ( collection -> like table in our table)
    const meetupsCollection = db.collection('meetups');

    // insert one document into collection
    // document -> entries in table
    const result = await meetupsCollection.insertOne(data);

    // close database connection
    client.close();

    // sending the respond after request
    // define the status and sending json data ( like message and the data )
    res.status(201).json({ message: 'meetup inserted!' });
  }
};

export default handler;
