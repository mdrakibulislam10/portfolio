import SectionTitle from "../../components/SectionTitle/SectionTitle";
import htmlLogo from "../../assets/skillsLogo/htmlLogopng.png";
import cssLogo from "../../assets/skillsLogo/CSS3_logo.svg.png";
import bsLogo from "../../assets/skillsLogo/bsLogo.jpg";
import twLogo from "../../assets/skillsLogo/Tailwind_CSS_Logo.svg.png";
import jsLogo from "../../assets/skillsLogo/JavaScript-logo.png";
import reactLogo from "../../assets/skillsLogo/React-icon.svg.png";
import nodeLogo from "../../assets/skillsLogo/nodejs-45adbe594d.png";
import expressLogo from "../../assets/skillsLogo/express-logo.png";
import mongoDBLogo from "../../assets/skillsLogo/mongodbLogo.png";
import firebaseLogo from "../../assets/skillsLogo/firebaseLogo.png";
import vsCodeLogo from "../../assets/skillsLogo/Visual_Studio_Code_1.35_icon.svg.webp";
import gitLogo from "../../assets/skillsLogo/GitHub-Mark.png";
import figLogo from "../../assets/skillsLogo/figmaLogo-svg.png";
import netlifyLogo from "../../assets/skillsLogo/netlify-logo-png-transparent.png";
import vercelLogo from "../../assets/skillsLogo/vercel-logo.svg";
import npmLogo from "../../assets/skillsLogo/npm-logo.png";
import { useState } from "react";

const MySkills = () => {
    // TODO: backend
    const skillsLogoImages = [
        { logoImg: htmlLogo, logoName: "HTML" },
        { logoImg: cssLogo, logoName: "CSS" },
        { logoImg: bsLogo, logoName: "Bootstrap" },
        { logoImg: twLogo, logoName: "Tailwind" },
        { logoImg: jsLogo, logoName: "JavaScript" },
        { logoImg: reactLogo, logoName: "React.js" },
        { logoImg: nodeLogo, logoName: "Node.js" },
        { logoImg: expressLogo, logoName: "Express.js" },
        { logoImg: mongoDBLogo, logoName: "MongoDB" },
        { logoImg: firebaseLogo, logoName: "Firebase" },
        { logoImg: vsCodeLogo, logoName: "VS Code" },
        { logoImg: gitLogo, logoName: "GitHub" },
        { logoImg: figLogo, logoName: "Figma" },
        { logoImg: netlifyLogo, logoName: "Netlify" },
        { logoImg: vercelLogo, logoName: "Vercel" },
        { logoImg: npmLogo, logoName: "NPM" },
    ];

    const [logoImages, setLogoImages] = useState(skillsLogoImages.slice(0, 9));

    return (
        <section className="my-12 mx-1 md:mx-12 lg:mx-20 lg:relative" id="skills">
            <SectionTitle
                title={"My"}
                colorTitle={"Skills"}
                subTitle={"Know about my skills"}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-y-12">
                {
                    logoImages.map((logo, id) =>
                        <div key={id} className="mx-auto text-center border-2 p-5 rounded-sm">
                            <img src={logo.logoImg} className="w-36 h-36 mb-3 rounded-xl" alt="" />
                            <h2 className="text-xl font-semibold">{logo.logoName}</h2>
                        </div>
                    )
                }
            </div>

            <div className="text-end my-5">
                {
                    logoImages.length <= 9 &&
                    <button onClick={() => setLogoImages(skillsLogoImages)} className="text-orange-600 text-lg lg:absolute end-12 bottom-5">See More &rarr;</button>
                }
            </div>
        </section>
    );
};

export default MySkills;