import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


// import Alert from '../components/Alert.jsx';
// import useAlert from '../components/Alert.jsx'

const Contact = () => {
    const formRef = useRef();

    // const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    //service_5vxbex7  service_cim1lno
    // template_m4y18la
    // lbbak5aZ7p4oRXN9v public key

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try{
            await emailjs.send(
                    'service_cim1lno',
                    'template_m4y18la',
                    {
                        from_name: form.name,
                        to_name: 'Bahnimaan ',
                        from_email: form.email,
                        to_email: 'bahnimaan.kashyap@gmail.com',
                        message: form.message,
                    },
                    'lbbak5aZ7p4oRXN9v',
                )
            setLoading(false);
            alert("Your Message has been sent 😃");

            setForm({ name: '', email: '', message: '' });
        } catch(error){
            setLoading(false);
            console.log(error)
            alert('Something went wrong 😓')

        }

    };

    return (
        <section className="c-space my-20" id="contact">

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <br></br>
                    <h3 className="head-text mt-3">Let&apos;s talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Open to Network and explore the world of
                        Data Engineering and Analytics.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;