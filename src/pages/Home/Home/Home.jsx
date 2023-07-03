import AboutMe from "../../AboutMe/AboutMe";
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
        </div>
    );
};

export default Home;