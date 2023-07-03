
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-600 text-white rounded mt-12">
            <div className="flex justify-center items-center flex-wrap gap-4">
                <a className="link link-hover" href="#about">About</a>
                <a className="link link-hover" href="#skills">Skills</a>
                <a className="link link-hover" href="#projects">Projects</a>
                <a className="link link-hover" href="#contact">Contact</a>
            </div>

            <div>
                <p>Copyright &copy;2023 - All right reserved by Md. Rakibul Islam</p>
            </div>
        </footer>);
};

export default Footer;