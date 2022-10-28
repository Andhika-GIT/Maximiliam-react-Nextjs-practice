// our-domain.com/[meetupId] -> dynamic route params

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return <MeetupDetail image="https://www.objective.com/assets/content/images/Resources/Blog-Articles/img-blog-PNC-meetup.png" title="first Meetup" address="some street 5, some city" description="this is first meetup" />;
};

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
