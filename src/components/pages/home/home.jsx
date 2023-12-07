import AboutSection from "./sections/about/about";
import Banner from "./sections/banner/banner";
import CollectionSection from "./sections/collection/collection";
import JuteJourneySection from "./sections/journey/journey";
import NoToPlasticSection from "./sections/noToPlastic/noToPlastic";
import ReviewsSection from "./sections/reviews/reviews";

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutSection/>
      <JuteJourneySection/>
      <CollectionSection/>
      <ReviewsSection/>
      <NoToPlasticSection/>
    </>
  );
};

export default HomePage;
