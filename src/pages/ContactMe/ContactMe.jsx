import { useRef } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import emailjs from '@emailjs/browser';

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
        <section className="mx-1 md:mx-12 lg:mx-20">
            <SectionTitle
                title={"Contact"}
                colorTitle={"Me"}
                subTitle={"Contact with me"}
            />

            <div className="flex">
                <div className="lg:w-1/2">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                        <label className="text font-semibold">Name</label>
                        <input type="text" name="user_name" className="border border-orange-600 rounded mb-3 p-1 py-1" />
                        <label className="text font-semibold">Email</label>
                        <input type="email" name="user_email" className="border border-orange-600 rounded mb-3 p-1 py-1" />
                        <label className="text font-semibold">Message</label>
                        <textarea name="message" className="border border-orange-600 pb-20 p-1 rounded" />
                        <input type="submit" className="btn bg-orange-600 text-white font-semibold text-lg mt-3 hover:bg-orange-700" value="Send E-mail" />
                    </form>
                </div>

                <div className="lg:w-1/2">
                    hi
                </div>
            </div>
        </section>
    );
};

export default ContactMe;