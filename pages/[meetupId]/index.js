// our-domain.com/[meetupId] -> dynamic route params

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
  // fetch data for a single meetup

  // get the id or the dynamic params in url using context.params
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: 'https://www.objective.com/assets/content/images/Resources/Blog-Articles/img-blog-PNC-meetup.png',
        title: 'first Meetup',
        address: 'some street 5, some city',
        description: 'this is first meetup',
      },
    },
  };
}

export default MeetupDetails;
