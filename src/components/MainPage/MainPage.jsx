import TitleSection from "./TitleSection/TitleSection.jsx";
import AboutSection from "./AboutSection/AboutSection.jsx";
import TimetableSection from "./TimetableSection/TimetableSection.jsx";
import NewsSection from "./NewsSection/NewsSection.jsx";
import AnimatedMain from "../AnimatedMain/AnimatedMain.jsx";

function MainPage() {
  return <AnimatedMain>
    <TitleSection/>
    <AboutSection/>
    <TimetableSection/>
    <NewsSection/>
  </AnimatedMain>;
}

export default MainPage;