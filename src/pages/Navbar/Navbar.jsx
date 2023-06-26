import ActiveLink from "../../ActiveLink/ActiveLink";

const Navbar = () => {

    const menuRoute = <>
        <h2 className="px-3 py-2 text-3xl md:text-5xl font-mono text-sky-500 font-bold" aria-current="page" style={{ fontFamily: "cursive" }}>Rakibul</h2>

        <ActiveLink to={"/"}>Home</ActiveLink>
        <ActiveLink to={"/resume"}>Resume</ActiveLink>
        <ActiveLink to={"/projects"}>Projects</ActiveLink>
    </>

    return (
        <div>
            <nav className="">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">

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

                                    {menuRoute}

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>

                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-white font-bold text-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        G
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">

                        {menuRoute}

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;