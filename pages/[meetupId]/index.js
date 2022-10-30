// our-domain.com/[meetupId] -> dynamic route params

import { MongoClient } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return <MeetupDetail image="https://www.objective.com/assets/content/images/Resources/Blog-Articles/img-blog-PNC-meetup.png" title="first Meetup" address="some street 5, some city" description="this is first meetup" />;
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
  const selectedMeetup = await meetupsCollection.find(
    // find the data based on the id that we got from parameter
    { _id: meetupId }
  );

  console.log(selectedMeetup);

  return {
    props: {
      // use the selected meetup based on the param id
      meetupData: selectedMeetup,
    },
  };
}

export default MeetupDetails;
