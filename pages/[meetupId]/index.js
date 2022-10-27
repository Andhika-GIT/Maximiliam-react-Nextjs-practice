// our-domain.com/[meetupId] -> dynamic route params

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return <MeetupDetail image="https://www.objective.com/assets/content/images/Resources/Blog-Articles/img-blog-PNC-meetup.png" title="first Meetup" address="some street 5, some city" description="this is first meetup" />;
};

export default MeetupDetails;
