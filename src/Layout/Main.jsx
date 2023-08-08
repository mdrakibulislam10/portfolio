import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';
import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

const Main = () => {

    useEffect(() => {
        AOS.init();
    });

    return (
        <div>
            <Navbar />

            <Outlet />

            <Footer />
        </div>
    );
};

export default Main;