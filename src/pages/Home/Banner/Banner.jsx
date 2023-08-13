// import bannerImg from "../../../assets/qlq3d339wrt.jpeg-removebg-preview.png";
import bannerImg from "../../../assets/myBannerImg.png"
import bottomArrow from "../../../assets/Arrows_down_animated.gif";
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="mb-20 mt-6 bg-gray-100 py-12" id="home">
            <div className="flex flex-col lg:flex-row justify-center items-center mx-1 lg:mx-20 gap-5 mb-10">
                <div className="lg:w-1/2 mx-auto order-2 md:order-1">
                    <div className="flex flex-col h-full justify-center">
                        <h4 className="text-lg md:text-3xl font-semibold">Hi, I'm</h4>
                        <h2 className="text-3xl md:text-6xl my-5 font-semibold">Md. Rakibul Islam</h2>
                        <TypeAnimation
                            className="text-lg md:text-3xl font-semibold"
                            sequence={[
                                "MERN Stack Developer",
                                1000,
                                "React.js Developer",
                                1000,
                                "Front-End Developer",
                                1000,
                                "Node.js Developer",
                                1000,
                                () => {
                                    // console.log('Sequence completed');
                                },
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '', display: 'inline-block' }}
                        />

                        <div className="mt-5">
                            <a href="#projects" className="btn bg-orange-600 text-white hover:bg-orange-700 me-2">My Projects</a>

                            <a href="https://drive.google.com/file/d/1CnsWptyOT8pmeu1Jor06olU-IeD_L1CV/view?usp=sharing" target="_blank" rel="noreferrer" className="btn bg-orange-600 text-white hover:bg-orange-700">View Resume</a>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 mx-1 md:flex gap-5 order-1 md:order-2">
                    <img className="mx-auto w-3/4" src={bannerImg} alt="" />

                    <div className="flex md:flex-col flex-wrap gap-8 justify-center md:justify-start my-5 md:my-1"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <a href="https://www.linkedin.com/in/md-rakibul-islam-dev/" className="md:mt-20" target="_blank" rel="noreferrer" title="Linkedin"><FaLinkedin className="w-8 h-8" /></a>
                        <a href="https://github.com/mdrakibulislam10" target="_blank" rel="noreferrer" title="GitHub"><FaGithubSquare className="w-8 h-8" /></a>
                        <a href="https://www.instagram.com/____rokib____/?hl=en" target="_blank" rel="noreferrer" title="Instagram"><FaInstagramSquare className="w-8 h-8" /></a>
                        <a href="https://twitter.com/Rokib74664686" target="_blank" rel="noreferrer" title="Twitter"><FaTwitterSquare className="w-8 h-8" /></a>
                        <a href="https://www.facebook.com/programmer.rokib" target="_blank" rel="noreferrer" title="Facebook"><FaFacebook className="w-8 h-8" /></a>
                    </div>
                </div>
            </div>

            <div className="">
                <a href="#about">
                    <img className="w-10 mx-auto bg-gray-900 rounded-full cursor-pointer" src={bottomArrow} alt="" />
                </a>
            </div>
        </section>
    );
};

export default Banner;
