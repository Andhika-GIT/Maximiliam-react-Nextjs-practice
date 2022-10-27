// our-domain.com/
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'M1',
    title: 'First meetup',
    image: 'https://www.objective.com/assets/content/images/Resources/Blog-Articles/img-blog-PNC-meetup.png',
    address: 'Ny city, something street',
    description: 'This is a first meetup',
  },
  {
    id: 'M2',
    title: 'Second meetup',
    image: 'https://www.objective.com/assets/content/images/Resources/Blog-Articles/img-blog-PNC-meetup.png',
    address: 'Chicago city, something street',
    description: 'This is a second meetup',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export async function getStaticProps() {
  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
