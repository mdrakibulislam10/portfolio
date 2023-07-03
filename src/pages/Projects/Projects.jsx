import SectionTitle from "../../components/SectionTitle/SectionTitle";
import fightClubSS from "../../assets/projects-ss/fightClubSS.png";
import littleCarsS from "../../assets/projects-ss/littleCarsSS.png";
import recipeHavenSS from "../../assets/projects-ss/recipeHavenSS.png";
import { useState } from "react";

// TODO: backend;
const projectImages = [
    {
        _id: 0,
        projectImg: fightClubSS,
        projectNm: "FIGHT CLUB",
        title: "FIGHT CLUB is a web application with an Admin, Instructor and Student dashboard.",
        features: [
            "My website homepage has navbar, carousel, popular classes section, popular instructors section, about us section and footer.",
            "Visit the Instructors page to see all of our instructors.",
            "Visit the Classes page to see all of our classes.",
            "You can login by clicking the login button, if you are a new user then you can register by going to the registrar page. The link to the registration page is on the login page.",
            "Clicking on Dashboard will take you to the Student Dashboard page if you're a student, the Instructor Dashboard page if you're an instructor, and the Admin Dashboard page if you're an administrator.",
            "You can select any class in the classes page and confirm purchase the class by payment in the my enrolled page.",
            "You can toggle light mode and dark mode.",
        ],
        liveSiteLink: "https://summer-camp-client-side-d54ce.web.app/",
        clientSideRepo: "https://github.com/mdrakibulislam10/summer-camp-client-side",
        serverSideRepo: "https://github.com/mdrakibulislam10/summer-camp-server-side",
    },
    {
        _id: 1,
        projectImg: littleCarsS,
        projectNm: "LITTLE CARS",
        title: "LITTLE CARS is a toy car web application platform for kids.",
        features: [
            "My website homepage has a navbar section, banner section, photo gallery section, sub-category section, about our products section, customer reviews section and footer section.",
            "You can leave a review about us in the customer review section on the homepage.",
            "You can view the product details by clicking on the product's View Details button in the sub-category section.",
            "By going to All Toys Route you can see all our products and you can view the product details by clicking View Details button.",
            "If you go to My Toys route, you can see only the products you have added and you can edit and delete your products.",
            "You can add your product on our website by going to the Add A Toy route.",
            "You can see our blogs by going to the blog site.",
            "You can login with email and password or google login by going to login page.",
            "You can create an account with your email and password by going to the sign up page.",
        ],
        liveSiteLink: "https://toy-marketplace-702fe.web.app/",
        clientSideRepo: "https://github.com/mdrakibulislam10/toy-marketplace-client-side",
        serverSideRepo: "https://github.com/mdrakibulislam10/toy-marketplace-server-side",
    },
    {
        _id: 2,
        projectImg: recipeHavenSS,
        projectNm: "Recipe Haven",
        title: "Recipe Haven is a chef and recipe web application for explore recipe.",
        features: [
            "Home page has chef corner, recipe tutorial's books recommendation section.",
            "Click the View Recipes button to view the recipe.",
            "After clicking the View Recipes button, If not logged in, you will be taken to the login page.",
            "Clicking on the View Recipes button will bring you to the Recipes page after login.",
            "You can sign-up, sign-in and log-out on this website.",
            "If you go to the blog page, you can see the blog.",
            "Click Download PDF button on the blog page, the blog page is download in pdf format.",
        ],
        liveSiteLink: "https://chef-recipe-hunter-clien-c7937.web.app/home",
        clientSideRepo: "https://github.com/mdrakibulislam10/chef-recipe-hunter-client-side",
        serverSideRepo: "https://github.com/mdrakibulislam10/chef-recipe-hunter-server-side",
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = () => {
        // console.log('Calling openModal');
        if (window.my_modal_5) {
            // console.log('window.my_modal_5 exists');
            window.my_modal_5.showModal();
        } else {
            // console.log('window.my_modal_5 does not exist');
            setTimeout(() => {
                openModal();
            }, 100);
        }
    };

    return (
        <section className="mb-12" id="projects">
            <SectionTitle
                title={"My"}
                colorTitle={"Projects"}
                subTitle={"See my projects"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-1 md:mx-12 lg:mx-20 gap-3">
                {projectImages.map((project) => (
                    <div key={project._id}>
                        <div
                            className="h-64 bg-cover bg-top hover:bg-bottom transition-all ease-in-out duration-1000 rounded-md"
                            style={{ backgroundImage: `url(${project.projectImg})` }}
                        >
                            {/* // */}
                        </div>

                        <div className="border border-gray-100 shadow-xl rounded-md px-2 py-4 flex items-center justify-between">
                            <p className="text-2xl font-bold">{project.projectNm}</p>
                            <button
                                onClick={() => {
                                    setSelectedProject(project);
                                    openModal();
                                }}
                                className="btn btn-sm text-white bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-600 font-bold"
                            >
                                Read More &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-300 text-xl">✕</button>

                        <h3 className="font-bold text-3xl mt-3">{selectedProject.projectNm}</h3>
                        <div>
                            <h3 className="py-2 mt-5 text-2xl">Features</h3>
                            {selectedProject.features.map((feature, id) => (
                                <div key={id}>
                                    <p>{id + 1}. {feature}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 flex gap-2 flex-wrap">
                            <a href={selectedProject.liveSiteLink} target="_blank" rel="noreferrer" className="btn btn-sm">Live Website</a>
                            <a href={selectedProject.clientSideRepo} target="_blank" rel="noreferrer" className="btn btn-sm">Client Side</a>
                            <a href={selectedProject.serverSideRepo} target="_blank" rel="noreferrer" className="btn btn-sm">Server Side</a>
                        </div>
                        {/* <div className="modal-action">
                            <button className="btn">Close</button>
                        </div> */}
                    </form>
                </dialog>
            )}
        </section>
    );
};

export default Projects;