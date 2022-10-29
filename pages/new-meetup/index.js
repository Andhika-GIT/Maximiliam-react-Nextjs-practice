// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const addMeetupHandler = async (enteredMeetupData) => {
    // sending request to our own api that we define in api folder
    const response = await fetch('/api/new-meetup');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
