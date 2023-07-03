import AboutMe from "../../AboutMe/AboutMe";
import ContactMe from "../../ContactMe/ContactMe";
import MySkills from "../../MySkills/MySkills";
import Projects from "../../Projects/Projects";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner />

            <AboutMe />

            <MySkills />

            <Projects />

            <ContactMe />
        </div>
    );
};

export default Home;