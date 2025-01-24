import About from "./about";
import Academy from "./academy";
import HeroSection from "./hero-section";
import Integration from "./integration";
import Security from "./security";
import SliderSection from "./slider-section";
import ThinkBetter from "./think-better";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Security />
      <Integration />
      {/* <Pricing /> */}
      <About />
      <Academy />
      <SliderSection/>
      <ThinkBetter />
    </>
  );
};

export default Home;


