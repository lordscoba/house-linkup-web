import Advantages from "../component/Home/Advantages";
import Hero from "../component/Home/Hero";
import HowHouseLinkupWorks from "../component/Home/HowHouseLinkupWorks";
import Reviews from "../component/Home/Reviews";
import VideoAndSearch from "../component/Home/VideoAndSearch";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Advantages />
      <HowHouseLinkupWorks />
      <Reviews />
      <VideoAndSearch />
    </div>
  );
};

export default HomeScreen;
