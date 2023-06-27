// import bannerImg from "../../../assets/qlq3d339wrt.jpeg-removebg-preview.png";
import bannerImg from "../../../assets/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {

    return (
        <section className="flex flex-col lg:flex-row justify-center items-center mx-1 md:mx-12 lg:mx-20">
            <div className="lg:w-1/2 mx-auto">
                <div className="flex flex-col h-full justify-center">
                    <h4 className="text-3xl font-semibold">Hi, I'm</h4>
                    <h2 className="text-6xl my-5 font-semibold">Md. Rakibul Islam</h2>
                    <h4 className="text-3xl font-semibold"></h4>
                    <TypeAnimation
                        sequence={[
                            "I'm a Web Developer",
                            1000,
                            "I'm a Front-End Developer",
                            1000,
                            "I'm a MERN Stack Developer",
                            1000,
                            () => {
                                // console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                </div>
            </div>
            <div className="lg:w-1/2">
                <img className="mx-auto" src={bannerImg} alt="" />
            </div>
        </section>
    );
};

export default Banner;
