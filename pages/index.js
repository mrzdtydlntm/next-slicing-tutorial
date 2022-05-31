import SectionContact from "../components/SectionContact";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import SectionProjects from "../components/SectionProjects";
import SectionSkills from "../components/SectionSkills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SectionSkills />
      <SectionProjects />
      <SectionContact />
      <Footer />
    </>
  );
}
