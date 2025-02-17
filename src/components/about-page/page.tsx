import AboutSection from "./AboutSection";
import CallToAction from "./CallToAction";
import TeamSection from "./TeamSection";

const About = () => {
  return (
    <>
      <div className="md:px-16 px-4">
        <AboutSection />
        <TeamSection />
      </div>
      <CallToAction />
    </>
  );
};

export default About;
