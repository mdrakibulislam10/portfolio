import SectionTitle from "../../components/SectionTitle/SectionTitle";
import aboutPic from "../../assets/clgtjtw67001img08w4qemmv3_1.jpg"

// TODO: backend
const myData = [
    { _id: 0, dataKey: "Birth Date", dataValue: "October 22, 2001" },
    { _id: 2, dataKey: "Address", dataValue: "Manikganj, Bangladesh" },
    { _id: 3, dataKey: "E-mail", dataValue: "mdrakibulislam752@gmail.com" },
    { _id: 4, dataKey: "Phone", dataValue: "01762486620" },
];

const AboutMe = () => {
    return (
        <section id="about">
            {/* TODO: fixed hash - avoid sectionTitle */}
            <SectionTitle
                title={"About"}
                colorTitle={"Me"}
                subTitle={"Know about me"}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 mx-1 lg:mx-20">
                <div>
                    <img src={aboutPic} className="mx-auto" alt="" />
                </div>

                <div>
                    <p className="text-justify">
                        Hi, I'm Md. Rakibul Islam. I’m from Manikganj, Bangladesh. Recently, I completed the MERN stack web development course from Programming Hero. Where I gained knowledge for building modern web applications, with expertise in technologies like React.js. I'm also comfortable with Express.js and MongoDB, and I'm familiar with Node.js as well. I have the skills to create responsive, dynamic and interactive web applications.
                        I'm a hard working person. My weakness is difficulty starting any project or work without guidance. But I am trying to overcome it.
                        My best project name is Fight Club. This is a website for summer camp martial arts school. This is a MERN stack project. I created this web application using React.js, Express.js, MongoDB and Node.js. This website has instructors and classes page. You can visit the instructors page, classes page and homepage without login. You can login by clicking the login button, if you are a new user then you can register by going to the registrar page. The link to the registration page is on the login page. An administrator can approve or deny any class and send feedback to the instructors. An administrator can make a user an instructor or admin. I implement stripe payment system on the website. Thank you.
                    </p>

                    <div className="my-6 pt-1 flex flex-wrap gap-6">
                        {
                            myData.map(data =>
                                <div key={data._id} className="text-left border p-3 rounded-md">
                                    <h3 className="text-xs font-medium text-gray-500">{data.dataKey}</h3>
                                    <p className="text-sm md:text-lg font-semibold text-black">{data.dataValue}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;