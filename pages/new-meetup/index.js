// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

import { useRouter } from 'next/router';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    // sending request to our own api that we define in api folder
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      // send the meetup data
      body: JSON.stringify(enteredMeetupData),
      // to confirm that we're sending json data
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // get the response
    const data = await response.json();

    console.log(data);

    router.replace('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
