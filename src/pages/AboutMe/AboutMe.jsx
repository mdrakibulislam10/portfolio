import SectionTitle from "../../components/SectionTitle/SectionTitle";
import aboutPic from "../../assets/myImgAbout.png";
import resume from "../../assets/resume/md-rakibul-islam-resume-react.pdf";
import { FaDownload } from 'react-icons/fa';

// TODO: backend
const myData = [
    { _id: 0, dataKey: "Birth Date", dataValue: "October 22, 2001" },
    { _id: 2, dataKey: "Address", dataValue: "Manikganj, Bangladesh" },
    { _id: 3, dataKey: "E-mail", dataValue: "mdrakibulislam752@gmail.com" },
    { _id: 4, dataKey: "Phone / WhatsApp / Telegram", dataValue: "+88 01762486620" },
];

const AboutMe = () => {
    return (
        <section id="about">
            <SectionTitle
                title={"About"}
                colorTitle={"Me"}
            // subTitle={"Know about me"}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 mx-1 lg:mx-20 gap-3">
                <div>
                    <img src={aboutPic} className="mx-auto w-3/4 rounded-3xl" alt="" />
                </div>

                <div className="mt-10">
                    <div className="text-justify">
                        <p className="text-2xl font-semibold mb-1">I'm Md. Rakibul Islam</p>
                        I’m from Manikganj, Bangladesh. I completed the MERN stack web development course from Programming Hero. Where I gained knowledge for building modern web applications. I have the skills to create responsive, dynamic and interactive web applications using React.js, Node.js, Express.js and MongoDB.
                    </div>

                    <div className="mb-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                        {
                            myData.map(info =>
                                <div key={info._id} className="text-left border p-1 rounded-md">
                                    <h3 className="text-xs font-medium text-gray-500">{info.dataKey}</h3>
                                    <p className="text-sm md:text-lg font-semibold text-black">{info.dataValue}</p>
                                </div>
                            )
                        }
                    </div>

                    <a href={resume} download className="btn bg-orange-600 text-white mt-5 hover:bg-orange-700">Download Resume
                        <FaDownload /></a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;