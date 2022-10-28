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
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   // we work for request and respond that we get from context parameter
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an api

//   return {
//     // always return props
//     props: {
//       // get the dummy_meetups data
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,

      // this static generated page will be generated on the server again for every 10 second ( if there's any request )
      // so we can keep our website updated with the newest data
      revalidate: 10, // generated new static page for every 10 sec
    },
  };
}

export default HomePage;
