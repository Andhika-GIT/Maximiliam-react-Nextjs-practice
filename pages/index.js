// our-domain.com/

import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active react meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
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
  // fetch data from our own api endpoint (/api/meetup)
  const response = await fetch('http://localhost:3000/api/meetups');

  const data = await response.json();

  console.log(data);

  const meetups = data.meetups;

  return {
    props: {
      meetups: meetups,

      // this static generated page will be generated on the server again for every 10 second ( if there's any request )
      // so we can keep our website updated with the newest data
      revalidate: 10, // generated new static page for every 10 sec
    },
  };
}

export default HomePage;
