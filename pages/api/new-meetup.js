// this trigger when request send to -> /api/new-meetup

import { MongoClient } from 'mongodb';

const handler = async (res, req) => {
  if (req.method === 'POST') {
    // if we receive post request, run below

    // create instance to store data
    const data = req.body;

    // destruct all the incoming request data
    const { title, image, address, description } = data;

    // connect to our mongodb server
    MongoClient.connect('mongodb+srv://Andhika:Lowjed026@cluster0.1ck4mzj.mongodb.net/meetups?retryWrites=true&w=majority');
  }
};

export default handler;
