// our-domain.com/
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "M1",
    title: "First meetup",
    image:
      "https://www.objective.com/assets/content/images/Resources/Blog-Articles/img-blog-PNC-meetup.png",
    address: "Ny city, something street",
    description: "This is a first meetup",
  },
  {
    id: "M2",
    title: "Second meetup",
    image:
      "https://www.objective.com/assets/content/images/Resources/Blog-Articles/img-blog-PNC-meetup.png",
    address: "Chicago city, something street",
    description: "This is a second meetup",
  },
];

const homePage = () => {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
};

export default homePage;
