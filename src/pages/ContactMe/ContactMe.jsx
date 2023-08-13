import { useRef } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import emailjs from '@emailjs/browser';
import { FaMailBulk, FaPhoneAlt, FaRegAddressBook } from "react-icons/fa";

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: e.target.user_name.value,
            to_name: "Md. Rakibul Islam",
            message: e.target.message.value,
            reply_to: e.target.user_email.value,
            from_email: e.target.user_email.value,
            from_name_email: e.target.user_name.value
        };

        emailjs
            .send('service_1mr3z5b', 'template_cgm7tub', templateParams, 'bTd2eEWXsAITKiDEL')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            })
            .catch((error) => {
                console.log(error.text);
            });
    };


    return (
        <section className="mx-1 md:mx-12 lg:mx-20" id="contact">
            <SectionTitle
                title={"Contact"}
                colorTitle={"Me"}
            // subTitle={"Contact with me"}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3"
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <div className="order-2 lg:order-1 overflow-x-hidden">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                        <label className="text font-semibold">Name</label>
                        <input required type="text" name="user_name" className="border border-orange-600 rounded mb-3 p-1 py-1" />
                        <label className="text font-semibold">Email</label>
                        <input required type="email" name="user_email" className="border border-orange-600 rounded mb-3 p-1 py-1" />
                        <label className="text font-semibold">Message</label>
                        <textarea required name="message" className="border border-orange-600 pb-20 p-1 rounded" />
                        <input type="submit" className="btn bg-orange-600 text-white font-semibold text-lg mt-3 hover:bg-orange-700" value="Send E-mail" />
                    </form>
                </div>

                <div className="text-xl md:text-2xl order-1 lg:mt-6 lg:ms-6">
                    <p className="flex flex-wrap gap-1 items-center"><FaMailBulk /> mdrakibulislam752@gmail.com</p>
                    <p className="flex flex-wrap gap-1 items-center my-6"><FaPhoneAlt /> +88 01762486620</p>
                    <p className="flex flex-wrap gap-1 items-center"><FaRegAddressBook /> Manikganj, Bangladesh</p>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;