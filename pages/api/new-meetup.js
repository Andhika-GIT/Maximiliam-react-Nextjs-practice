// this trigger when request send to -> /api/new-meetup

const handler = (res, req) => {
  if (req.method === 'POST') {
    // if we receive post request, run below

    // create instance to store data
    const data = req.body;

    // destruct all the incoming request data
    const { title, image, address, description } = data;
  }
};

export default handler;
