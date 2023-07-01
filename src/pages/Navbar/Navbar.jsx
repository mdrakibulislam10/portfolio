import { useState } from "react";
// import ActiveLink from "../../ActiveLink/ActiveLink";
// import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isMenuHidden, setHiddenMenu] = useState(false);
    const [activeRoute, setActiveRoute] = useState("home");

    const activeStyle = "text-sm p-1 md:text-lg font-medium text-orange-600 cursor-pointer";
    const normalStyle = "rounded-md p-1 text-sm md:text-lg font-medium cursor-pointer";

    const menuRoute = <>
        <a onClick={() =>
            setActiveRoute("home")}
            className={activeRoute === "home" ? activeStyle : normalStyle}
            href="#"
        >
            Home
        </a>
        <a onClick={() =>
            setActiveRoute("about")}
            className={activeRoute === "about" ? activeStyle : normalStyle}
            href={activeRoute !== "home" ? "#about" : undefined}
        >
            About
        </a>
        <a onClick={() =>
            setActiveRoute("skills")}
            className={activeRoute === "skills" ? activeStyle : normalStyle}
            href={activeRoute !== "home" ? "#skills" : undefined}
        >
            Skills
        </a>
        <a onClick={() =>
            setActiveRoute("projects")}
            className={activeRoute === "projects" ? activeStyle : normalStyle}
            href={activeRoute !== "home" ? "#projects" : undefined}
        >
            Projects
        </a>
        <a onClick={() =>
            setActiveRoute("contact")}
            className={activeRoute === "contact" ? activeStyle : normalStyle}
            href={activeRoute !== "home" ? "#contact" : undefined}
        >
            Contact
        </a>
    </>

    const myName = <>
        <h2 className="px-3 py-2 text-2xl md:text-4xl font-mono text-sky-500 font-bold" aria-current="page" style={{ fontFamily: "cursive" }}>Rakib</h2>
    </>

    return (
        <section className="my-4 sticky top-0 z-50">
            <nav className="bg-white shadow-lg">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setHiddenMenu(!isMenuHidden)}>

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4 items-center">

                                    {myName}

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <div className="hidden sm:block">
                                <div className="flex space-x-4 items-center me-4">

                                    {menuRoute}

                                </div>
                            </div>

                            <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hidden" aria-current="page">Dashboard</a>

                            <div className="relative ml-3">
                                <div className="hidden">
                                    <button type="button" className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-white font-bold text-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        G
                                    </button>
                                </div>
                            </div>

                            <div className="block sm:hidden">

                                {myName}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">

                    <div className={`flex flex-col w-20 ms-4 mb-4 ${!isMenuHidden ? "hidden" : "block"}`}>

                        {menuRoute}

                    </div>
                </div>
            </nav>

        </section>
    );
};

export default Navbar;