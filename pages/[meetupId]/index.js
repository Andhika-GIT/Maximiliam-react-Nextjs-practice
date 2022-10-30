// our-domain.com/[meetupId] -> dynamic route params

import Head from 'next/head';

import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail {...props.meetupData} />
    </>
  );
};

// we need to use getStaticPaths if we're using getStaticProps for dynamic page
export async function getStaticPaths() {
  // fetch data from our own api endpoint (/api/meetup)
  const response = await fetch('http://localhost:3000/api/meetup');

  const data = await response.json();

  console.log(data);

  const meetups = data.meetups;

  // use the _id property from meetups data to define the paths

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      // map all meetups data
      params: {
        // define the params using the id property that we got from /api/meetup
        meetupId: meetup.id,
      },
    })),
  };
}

export async function getStaticProps(context) {
  // get the id or the dynamic params in url using context.params
  const meetupId = context.params.meetupId;

  // fetch data for a single meetup

  // connect to our mongodb server
  const client = await MongoClient.connect('mongodb+srv://Andhika:MMmfGsbnaPpxPehq@cluster0.1ck4mzj.mongodb.net/?retryWrites=true&w=majority');

  const db = client.db();

  // get the collection ( collection -> like table in our table)
  const meetupsCollection = db.collection('meetups');

  // find or get the documents ( data ) in our collection ( table )
  const selectedMeetup = await meetupsCollection.findOne(
    // find the data based on the id that we got from parameter
    // Objectid to convert the string id into object so mongodb can read it
    { _id: ObjectId(meetupId) }
  );

  console.log(selectedMeetup);

  return {
    props: {
      // use the selected meetup based on the param id
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
